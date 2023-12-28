import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Icon,
  useDisclosure,
} from '@chakra-ui/react';
import { RefObject, useRef } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { navItems } from '../../constant';
import { ToggleModeProps } from './ToggleModeBtn';

const MobileNav = ({ colorMode, toggleColorMode }: ToggleModeProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: RefObject<HTMLDivElement> = useRef(null);
  return (
    <>
      <Box display={{ base: 'block', md: 'none' }} ml='1em'>
        <Box display='flex' alignItems='center' ref={btnRef} onClick={onOpen}>
          <Icon as={GiHamburgerMenu} boxSize={6} />
        </Box>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Box
              display='flex'
              flexDir='column'
              justifyContent='center'
              gap='5'
              mt='5em'>
              {navItems.map((navItem) =>
                navItem.id !== 3 ? (
                  <Button as='a' key={navItem.id} cursor='pointer'>
                    {navItem.label}
                  </Button>
                ) : (
                  <Button key={navItem.id} onClick={toggleColorMode}>
                    Toggle {colorMode === 'light' ? 'Dark' : 'Light'} Mode
                  </Button>
                )
              )}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNav;
