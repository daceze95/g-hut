import {
HStack,
Icon,
} from '@chakra-ui/react';
import { gameProps } from './GameCard';
import { iconMap } from '../constant';

const PlatformIcons = ({game}:gameProps) => {
  return (
    <HStack >
      {game.parent_platforms.map((pp) => (
        <Icon
          as={iconMap[pp.platform.name]}
          key={pp.platform.id}
          color='gray.500'
        />
      ))}
    </HStack>
  );
}

export default PlatformIcons