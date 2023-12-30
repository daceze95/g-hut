import { Box, Heading, Text } from '@chakra-ui/react';
import { Genre } from '../hooks/useGenres';

interface GameHeaderProps {
  genreName: Genre | null;
  usePlatformName?: string;
}


const GameHeader = ({ genreName, usePlatformName }: GameHeaderProps) => {
  return (
    <Box mb='5'>
      <Heading>
        <Text
          fontSize={{
            base: 'xx-large',
            lg: 'xxx-large',
          }}
          fontWeight='bold'>
          {usePlatformName && usePlatformName}{' '}
          {genreName?.name && genreName.name} Games
        </Text>
      </Heading>
    </Box>
  );
};

export default GameHeader;
