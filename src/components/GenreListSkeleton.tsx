import {
  HStack,
  ListItem,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';

const GenreListSkeleton = () => {

  return (
        <ListItem py='5px'>
          <HStack>
            <Skeleton boxSize='48px' borderRadius='8' />
            <SkeletonText height='20px' />
          </HStack>
        </ListItem>
  );
};

export default GenreListSkeleton;
