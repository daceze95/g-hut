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
import { IDAndNameProps } from '../pages/Home';

interface Props {
  getPlatformName: (platform: IDAndNameProps) => void;
}

const PlatformDropDownList = ({ getPlatformName }: Props) => {
  const [pName, setPName] = useState('');
  //The id is based on parent_platforms
  const platformNames = [
    { id: 1, name: 'PC' },
    { id: 2, name: 'PlayStation' },
    { id: 3, name: 'Xbox' },
    { id: 5, name: 'Apple Macintosh' },
    { id: 4, name: 'iOS' },//id not verified
    { id: 8, name: 'Android' },//id not verified
    { id: 7, name: 'Nintendo' },
    { id: 6, name: 'Linux' },
    // { id: 14, name: 'Web' },
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
            key={platformName.id}
            onClick={() => (
              getPlatformName(platformName), setPName(platformName.name)
            )}>
            {platformName.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformDropDownList;
