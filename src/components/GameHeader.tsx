import { Box, Heading, Text } from '@chakra-ui/react';
import { Genre } from '../hooks/useGenres';
import { IDAndNameProps } from '../pages/Home';

interface GameHeaderProps {
  genreName: Genre | null;
  usePlatformName: IDAndNameProps | null;
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
          {`${
            usePlatformName?.name !== null &&
            usePlatformName?.name !== undefined
              ? usePlatformName?.name
              : ''
          } ${
            genreName?.name !== null && genreName?.name !== undefined
              ? genreName?.name
              : ''
          } Games`}
        </Text>
      </Heading>
    </Box>
  );
};

export default GameHeader;
