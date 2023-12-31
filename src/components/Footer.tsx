import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      py='10px'
      fontWeight='bold'
      display='flex'
      alignItems='center'
      justifyContent='center'>
      <Text
        as='a'
        cursor='pointer'
        href='https://www.linkedin.com/in/arinze-ezeokwuegbu/'>
        &copy; Arinze Ezeokwuegbu 2023
      </Text>
    </Box>
  );
};

export default Footer;
