import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Game } from '../hooks/useFetch';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card maxW='sm' key={game.id} overflow='hidden'>
      <CardBody p='0'>
        <Image src={game.background_image} alt={game.name} />
        <Stack mt='3' spacing='3' px='0.5em'>
          <Heading size='md'>{game.name}</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            $450
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
