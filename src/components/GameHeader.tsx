import { Box, Heading, Text } from '@chakra-ui/react';
import { genreNameProps } from './GameGrid';

const GameHeader = ({ genreName, usePlatformName }: genreNameProps) => {
  return (
    <Box mb='5'>
      <Heading>
        <Text
          fontSize={{
            base: 'xx-large',
            lg: 'xxx-large',
          }}
          fontWeight='bold'>
          {usePlatformName && usePlatformName} {genreName && genreName} Games
        </Text>
      </Heading>
    </Box>
  );
};

export default GameHeader;
