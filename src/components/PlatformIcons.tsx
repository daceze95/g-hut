import { HStack, Text, Icon } from '@chakra-ui/react';
import { gameProps } from './GameCard';
import { iconMap } from '../constant';

const PlatformIcons = ({ game }: gameProps) => {
  return (
    <HStack>
      {game.parent_platforms.map((pp, index) =>
        index >= 5 ? (
          ''
        ) : (
          <Icon
            as={iconMap[pp.platform.name]}
            key={pp.platform.id}
            color='gray.500'
          />
        )
      )}
      {game.parent_platforms.length > 5 ? (
        <Text color='gray.500'>{`+${game.parent_platforms.length - 5}`}</Text>
      ) : (
        ''
      )}
    </HStack>
  );
};

export default PlatformIcons;
