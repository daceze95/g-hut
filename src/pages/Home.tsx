import { useState } from 'react';
import GameGrid from '../components/GameGrid';
import GenreList from '../components/GenreList';
import Layout from '../components/Layout/Layout';

const Home = () => {
  const [genre, setGenre] = useState('')

  const getGenre = (genre:string) => {
    setGenre(genre);
  }
  return <Layout GenreList={<GenreList getGenre={getGenre}/>} GameGrid={<GameGrid genreName={genre}/>} />;
};

export default Home;
