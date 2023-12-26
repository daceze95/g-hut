import { Box, Spinner, Text } from '@chakra-ui/react';
import useFetch from '../hooks/useFetch';

const GameCard = () => {
  const { games, error, isLoading } = useFetch();
  if(isLoading) return <Spinner/>
  if(error) return <Box> An error occurred please refresh the page</Box>
  return (
    <div>
      {games.map((game) => (
        <Text key={game.id}>{game.name}</Text>
      ))}
    </div>
  );
};

export default GameCard;
