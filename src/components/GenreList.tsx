import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import { getOptimizedImage } from '../services/getOptimizedImage';
import GenreListSkeleton from './GenreListSkeleton';
import { useState } from 'react';

interface Props {
  getGenre: (genre: Genre) => void;
}

const GenreList = ({ getGenre }: Props) => {
  const [activeGenre, setActiveGenre] = useState<string>('');
  const { response: genres, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return;
  return (
    <List paddingRight='5'>
      {genres.length && (
        <Text fontSize='x-large' fontWeight='bold' mb='2'>
          Genre
        </Text>
      )}
      {isLoading &&
        skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
      {genres.map((genre) => (
        <ListItem key={genre.id} py='5px'>
          <HStack>
            <Image
              boxSize='48px'
              src={getOptimizedImage(genre.image_background)}
              alt={genre.name}
              borderRadius='8'
            />
            <Text
              fontSize='large'
              fontWeight={activeGenre === genre.name ? 'bold' : 'normal'}
              onClick={() => (getGenre(genre), setActiveGenre(genre.name))}
              cursor='pointer'>
              {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
