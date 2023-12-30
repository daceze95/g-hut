import {
  Card,
  CardBody,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import { getOptimizedImage } from '../utils/getOptimizedImage';
import PlatformIcons from './PlatformIcons';
import MetacriticBadge from './MetacriticBadge';
import Rating from './Rating';
import GameCardGenreList from './GameCardGenreList';

export interface gameProps {
  game: Game;
}

const GameCard = ({ game }: gameProps) => {
  return (
    <Card flexGrow={1}>
      <Image src={getOptimizedImage(game.background_image)} alt={game.name} />
      <CardBody p='1' boxShadow='none'>
        <Flex flex='1' rounded='none' px='0.5em' direction='column' gap='3'>
          <HStack alignItems='center' justifyContent='space-between' mt='2'>
            <PlatformIcons game={game} />
            <MetacriticBadge metacritic={game.metacritic} />
          </HStack>
          <Heading size='md'>{game.name}</Heading>
          <Stack>
            <HStack justify='space-between'>
              <Text>Release date:</Text>
              <Text fontSize='small' color='gray.500'>
                {game.released}
              </Text>
            </HStack>
            <GameCardGenreList genres={game.genres}/>
            <Rating rating={game.rating_top} />
          </Stack>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default GameCard;
