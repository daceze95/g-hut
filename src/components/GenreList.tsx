import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import { getOptimizedImage } from '../services/getOptimizedImage';

const GenreList = () => {
  const { response: genres } = useGenres();
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} py='5px'>
          <HStack>
            <Image
              boxSize='48px'
              src={getOptimizedImage(genre.image_background)}
              alt={genre.name}
              borderRadius='8'
            />
            <Text fontSize='large'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
