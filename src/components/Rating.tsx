import { HStack, Icon, Text } from '@chakra-ui/react';
import { generateRatingStar } from '../utils/ratingUtils';

const Rating = ({ rating }: { rating: number }) => {
  return (
    <HStack justify='space-between'>
      <Text>Rating:</Text>
      <HStack justify='flex-end'>
        {generateRatingStar(rating).map((star, index) => (
          <Icon as={star} key={index} />
        ))}
      </HStack>
    </HStack>
  );
};

export default Rating;
