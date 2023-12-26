import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react';
import logo from '@/assets/g-hut-logo.png';
import Search from './Search';
import { navItems } from '../../constant/index.ts';
import MobileNav from './MobileNav.tsx';

const Navbar = () => {
  return (
    <Box fontSize={['sm', 'md', 'lg', 'xl']} width='100%' py='10px'>
      <Flex w='100%' alignItems='center'>
        <Box display='flex' alignItems='center'>
          <Box cursor='pointer' display='flex' alignItems='center'>
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
                <Text key={navItem.id} cursor='pointer' ml='1em'>
                  {navItem.label}
                </Text>
              ) : (
                <Box
                  cursor='pointer'
                  display='flex'
                  alignItems='center'
                  ml='1em'
                  key={navItem.id}>
                  <Icon as={navItem.label} />
                </Box>
              )
            )}
          </Box>
        </Box>
        {/* Mobile Device Navbar */}
        <MobileNav />
      </Flex>
    </Box>
  );
};

export default Navbar;
