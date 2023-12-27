import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Text
} from '@chakra-ui/react';
import { Game } from '../hooks/useFetch';
import { getOptimizedImage } from '../services/getOptimizedImage';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card flexGrow={1}>
      <Image src={getOptimizedImage(game.background_image)} alt={game.name} />
      <CardBody p='1' boxShadow='none'>
        <Flex flex='1' rounded='none' px='0.5em' direction='column' gap='3'>
          <Box color='blue.600' fontSize='2xl'>
            $450
          </Box>
          <Heading size='md'>{game.name}</Heading>

          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default GameCard;
