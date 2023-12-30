import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGenres, { Genre } from '../hooks/useGenres';
import { getOptimizedImage } from '../utils/getOptimizedImage';
import { useState } from 'react';

interface Props {
  getGenre: (genre: Genre) => void;
}

const GenreListMobile = ({ getGenre }: Props) => {
  const { response: genres, error } = useGenres();
  const [pName, setPName] = useState('');
  if (error) return;
  return (
    <Menu>
      <MenuButton
        px={4}
        py={2}
        minW='200px'
        maxW='250px'
        transition='all 0.2s'
        borderRadius='md'
        as={Button}
        _hover={{ color: 'gray.400' }}
        _expanded={{ bg: 'blue.400' }}
        rightIcon={<BsChevronDown />}>
        <HStack justify='space-between'>
          <Text fontWeight='bold' fontSize='md'>
            {pName ? pName : 'Genre'}
          </Text>
        </HStack>
      </MenuButton>
      <MenuList>
        {genres.map((genre) => (
          <MenuItem
            key={genre.id}
            cursor='pointer'
            onClick={() => (getGenre(genre), setPName(genre.name))}>
            <HStack>
              <Image
                boxSize='32px'
                src={getOptimizedImage(genre.image_background)}
                alt={genre.name}
                borderRadius='8'
              />
              <Text fontSize='large'>{genre.name}</Text>
            </HStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GenreListMobile;
