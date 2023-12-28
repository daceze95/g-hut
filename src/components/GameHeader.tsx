import { Box, Heading, Text } from '@chakra-ui/react';
import { genreNameProps } from './GameGrid';

const GameHeader = ({ genreName }: genreNameProps) => {
  return (
    <Box mb='5'>
      <Heading>
        <Text fontSize='xxx-large' fontWeight='bold'>
          {genreName ? genreName : ''} Games
        </Text>
      </Heading>
    </Box>
  );
};

export default GameHeader;
