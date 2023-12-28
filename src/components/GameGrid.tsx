import { Box, SimpleGrid, Stack } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import CardSkeleton from './CardSkeleton';
import GameCardContainer from './GameCardContainer';
import GameHeader from './GameHeader';
import PlatformDropDownList from './PlatformDropDownList';
import { useState } from 'react';
import { Genre } from '../hooks/useGenres';
export interface genreNameProps {
  genreName: Genre | null ;
  usePlatformName?: string;
}
const GameGrid = ({ genreName }: genreNameProps) => {
  const { response: games, error, isLoading } = useGames();
  const [usePlatformName, setUsePlatformName] = useState('');
  const skeletons = [1, 2, 3, 4, 5, 6];
  const getPlatformName = (name: string) => {
    setUsePlatformName(name);
  };
  if (error)
    return (
      <Box textAlign='center'> An error occurred please refresh the page</Box>
    );
  return (
    <>
      <Stack mb='20px'>
        <GameHeader genreName={genreName} usePlatformName={usePlatformName} />
        <PlatformDropDownList getPlatformName={getPlatformName} />
      </Stack>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing={10}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <CardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
