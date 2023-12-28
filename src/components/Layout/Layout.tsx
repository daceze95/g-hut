import { Grid, GridItem, Show } from '@chakra-ui/react';
import Navbar from '../Nav/Navbar';
import Footer from '../Footer';

interface Props {
  GenreList: JSX.Element;
  GameGrid: JSX.Element;
}

const Layout = ({ GenreList, GameGrid }: Props) => {
  return (
    <Grid
      templateAreas={{
        base: `"header" "main" "footer"`,
        lg: `"header header" "aside main" "footer footer"`,
      }}
      templateColumns={{
        base: `"1fr"`,
        lg: `"200px" "1fr"`,
      }}
      px='2%'>
      <GridItem area='header'>
        <Navbar />
      </GridItem>

      <Show above='lg'>
        <GridItem area='aside'>
          {GenreList}
        </GridItem>
      </Show>

      <GridItem area='main'>
        {GameGrid}
      </GridItem>
      <GridItem area='footer'>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default Layout;
