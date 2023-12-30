import { Box, Flex, Grid, GridItem, Hide, SimpleGrid, Stack } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import CardSkeleton from './CardSkeleton';
import GameCardContainer from './GameCardContainer';
import GameHeader from './GameHeader';
import PlatformDropDownList from './PlatformDropDownList';
import { Genre } from '../hooks/useGenres';
import { IDAndNameProps } from '../pages/Home';
import GenreListMobile from './GenreListMobile';
export interface genreNameProps {
  genreName: Genre | null;
  usePlatformName: IDAndNameProps | null;
  getPlatformName: (platform: IDAndNameProps) => void;
  getGenre: (genre: Genre) => void;
}

const GameGrid = ({
  genreName,
  usePlatformName,
  getPlatformName,
  getGenre,
}: genreNameProps) => {
  const {
    response: games,
    error,
    isLoading,
  } = useGames(genreName, usePlatformName);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error)
    return (
      <Box textAlign='center'> An error occurred please refresh the page</Box>
    );
  return (
    <>
      <Stack mb='20px'>
        <GameHeader genreName={genreName} usePlatformName={usePlatformName} />
        <Flex>
          <Grid
            templateAreas={{
              base: `"platformDropDown" "genreDropDown"`,
              md: `"platformDropDown genreDropDown"`,
            }}
            templateColumns={{
              base: `"1fr"`,
              md: `"1fr 1fr"`,
            }}
            gap={2}>
            <GridItem area='platformDropDown'>
              <PlatformDropDownList getPlatformName={getPlatformName} />
            </GridItem>
            <Hide above='lg'>
              <GridItem area='genreDropDown'>
                <GenreListMobile getGenre={getGenre} />
              </GridItem>
            </Hide>
          </Grid>
        </Flex>
      </Stack>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        pb='5'
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
