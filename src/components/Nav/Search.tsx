import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  return (
    <Box ml='1em' flexGrow='1'>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <Icon as={FaSearch} />
        </InputLeftElement>
        <Input type='text' placeholder='Search games...' rounded='full' />
      </InputGroup>
    </Box>
  );
};

export default Search;
