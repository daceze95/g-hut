import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Text,
  Icon,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { iconMap } from '../constant';

interface Props {
  getPlatformName: (name: string) => void;
}

const PlatformDropDownList = ({ getPlatformName }: Props) => {
  const [pName, setPName] = useState('');
  const platformNames = [
    'PC',
    'PlayStation',
    'Xbox',
    'Apple Macintosh',
    'iOS',
    'Android',
    'Nintendo',
    'Linux',
  ];
  return (
    <Menu>
      <MenuButton
        px={4}
        py={2}
        w='200px'
        transition='all 0.2s'
        borderRadius='md'
        as={Button}
        _hover={{ color: 'gray.400' }}
        _expanded={{ bg: 'blue.400' }}
        rightIcon={
          pName ? (
            <Icon as={iconMap[pName]} color='gray.500' />
          ) : (
            <BsChevronDown />
          )
        }>
        <HStack justify='space-between'>
          <Text fontWeight='bold' fontSize='md'>
            {pName ? pName : 'Platform'}
          </Text>
        </HStack>
      </MenuButton>
      <MenuList>
        {platformNames.map((platformName) => (
          <MenuItem
            key={platformName}
            onClick={() => (
              getPlatformName(platformName), setPName(platformName)
            )}>
            {platformName}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformDropDownList;
