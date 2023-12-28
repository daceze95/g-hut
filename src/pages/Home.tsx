import GameGrid from '../components/GameGrid';
import GenreList from '../components/GenreList';
import Layout from '../components/Layout/Layout';

const Home = () => {
  return <Layout GenreList={<GenreList />} GameGrid={<GameGrid />} />;
};

export default Home;
