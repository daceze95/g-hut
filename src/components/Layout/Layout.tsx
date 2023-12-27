import { ReactNode } from 'react';
import { Grid, GridItem, Show } from '@chakra-ui/react';
import Aside from '../Aside';
import Navbar from '../Nav/Navbar';
import Footer from '../Footer';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Grid
      templateAreas={{
        base: `"header" "main" "footer"`,
        lg: `"header header" "aside main" "footer footer"`,
      }}
      templateColumns={{
        base: `1fr`,
        lg: `"200px" "1fr"`,
      }}
      px='2%'>
      <GridItem area='header'>
        <Navbar />
      </GridItem>

      <Show above='lg'>
        <GridItem bg='purple.300' area='aside'>
          <Aside />
        </GridItem>
      </Show>

      <GridItem bg='green.300' area='main'>
        {children}
      </GridItem>
      <GridItem bg='blue.300' area='footer'>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default Layout;