import { useState } from 'react';
import GameGrid from '../components/GameGrid';
import GenreList from '../components/GenreList';
import Layout from '../components/Layout/Layout';
import { Genre } from '../hooks/useGenres';

const Home = () => {
  const [genre, setGenre] = useState<Genre | null>(null)

  const getGenre = (genre:Genre) => {
    setGenre(genre);
  }
  return <Layout GenreList={<GenreList getGenre={getGenre}/>} GameGrid={<GameGrid genreName={genre}/>} />;
};

export default Home;
