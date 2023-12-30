import { Box, HStack, Text } from '@chakra-ui/react';

interface GenresProps {
  genres: { id: number; name: string }[];
}
const GameCardGenreList = ({ genres }: GenresProps) => {
  return (
    <HStack justify='space-between'>
      <Text>Genres:</Text>
      <Box>
        {genres.map((genre, index) =>
          index >= 3 ? (
            ''
          ) : (
            <Text
              as='text'
              key={genre.id}
              fontSize='small'
              color='gray.500'
              cursor='pointer'
              _hover={{ textDecoration: 'underline' }}>
              {genre.name}
              {genre.id === genres[genres.length - 1].id ? '' : ', '}
            </Text>
          )
        )}
        {genres.length > 3 ? (
          <Text color='gray.500'>{`+${genres.length - 3}`}</Text>
        ) : (
          ''
        )}
      </Box>
    </HStack>
  );
};

export default GameCardGenreList;
