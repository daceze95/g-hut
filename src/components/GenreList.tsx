import { HStack, Image, ListItem, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import { getOptimizedImage } from '../utils/getOptimizedImage';
import GenreListSkeleton from './GenreListSkeleton';
import GenreListContainer from './GenreListContainer';

interface Props {
  getGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ getGenre, selectedGenre }: Props) => {
  const { response: genres, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return;
  return (
    <GenreListContainer>
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
              fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'}
              onClick={() => getGenre(genre)}
              cursor='pointer'>
              {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </GenreListContainer>
  );
};

export default GenreList;
