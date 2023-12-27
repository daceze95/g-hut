import {
  Box,
  SimpleGrid,
  Spinner,
} from '@chakra-ui/react';
import useFetch from '../hooks/useFetch';
import GameCard from './GameCard';

const GameGrid = () => {
  const { games, error, isLoading } = useFetch();
  if (isLoading) return <Spinner />;
  if (error) return <Box> An error occurred please refresh the page</Box>;
  return (
    <SimpleGrid columns={{
        base: 1,
        md: 2,
        lg: 3,
        xl: 4
    }} spacing={5} padding='2'>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
      
    </SimpleGrid>
  );
};

export default GameGrid;
