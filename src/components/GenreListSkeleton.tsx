import {
  HStack,
  Skeleton,
  Spacer
} from '@chakra-ui/react';
import GenreListContainer from './GenreListContainer';

const GenreListSkeleton = () => {

  return (
    <GenreListContainer py='5px'>
      <HStack>
        <Skeleton boxSize='48px' borderRadius='8' />
        <Spacer />
        <Skeleton height='20px' />
      </HStack>
    </GenreListContainer>
  );
};

export default GenreListSkeleton;
