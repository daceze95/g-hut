import {
HStack,
Icon,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import {
FaWindows,
FaPlaystation,
FaXbox,
FaApple,
FaAndroid,
FaLinux,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { gameProps } from './GameCard';

const PlatformIcons = ({game}:gameProps) => {
    const iconMap: { [key: string]: IconType } = {
      PC: FaWindows,
      PlayStation: FaPlaystation,
      Xbox: FaXbox,
      'Apple Macintosh': FaApple,
      iOS: MdPhoneIphone,
      Android: FaAndroid,
      Nintendo: SiNintendo,
      Linux: FaLinux,
      Web: BsGlobe,
    };
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