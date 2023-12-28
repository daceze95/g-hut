import { Box, Flex, Image, Text, useColorMode } from '@chakra-ui/react';
import logo from '@/assets/g-hut-logo.png';
import Search from './Search';
import { navItems } from '../../constant/index.ts';
import MobileNav from './MobileNav.tsx';
import ToggleModeBtn from './ToggleModeBtn.tsx';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box fontSize={['sm', 'md', 'lg', 'xl']} width='100%' py='10px'>
      <Flex w='100%' alignItems='center'>
        <Box display='flex' alignItems='center'>
          <Box
            cursor='pointer'
            display='flex'
            alignItems='center'
            as='a'
            href='/'>
            <Image
              src={logo}
              alt='site logo'
              height={{
                base: '50px',
                md: '70px',
              }}
            />
          </Box>
          <Text
            as='a'
            href='#'
            cursor='pointer'
            ml='1em'
            display={{ base: 'none', md: 'block' }}>
            Rate top games
          </Text>
        </Box>
        <Search />
        <Box display={{ base: 'none', md: 'block' }}>
          <Box display='flex' alignItems='center'>
            {navItems.map((navItem) =>
              navItem.id !== 3 ? (
                <Text
                  as='a'
                  href='#'
                  key={navItem.id}
                  cursor='pointer'
                  ml='1em'>
                  {navItem.label}
                </Text>
              ) : (
                <Box
                  cursor='pointer'
                  display='flex'
                  alignItems='center'
                  ml='1em'
                  key={navItem.id}>
                  <ToggleModeBtn
                    colorMode={colorMode}
                    toggleColorMode={toggleColorMode}
                  />
                </Box>
              )
            )}
          </Box>
        </Box>
        {/* Mobile Device Navbar */}
        <MobileNav colorMode={colorMode} toggleColorMode={toggleColorMode} />
      </Flex>
    </Box>
  );
};

export default Navbar;
