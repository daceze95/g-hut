import { Box, SimpleGrid } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import CardSkeleton from './CardSkeleton';
import GameCardContainer from './GameCardContainer';
import GameHeader from './GameHeader';

const GameGrid = () => {
  const { response: games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error)
    return (
      <Box textAlign='center'> An error occurred please refresh the page</Box>
    );
  return (
    <>
      <GameHeader />
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
