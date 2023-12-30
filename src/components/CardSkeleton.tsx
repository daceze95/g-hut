import { Card, CardBody, Skeleton, Stack } from '@chakra-ui/react';

const CardSkeleton = () => {
  return (
    <Card w='320px'>
      <CardBody p='0'>
        <Skeleton height='200px' />
        <Stack my='3' spacing='3'>
          <Skeleton height='20px' />
          <Skeleton height='50px' />
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CardSkeleton;
