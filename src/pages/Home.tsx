import { useState } from 'react';
import GameGrid from '../components/GameGrid';
import GenreList from '../components/GenreList';
import Layout from '../components/Layout/Layout';
import { Genre } from '../hooks/useGenres';

const Home = () => {
  const [genre, setGenre] = useState<Genre | null>(null);
  const [usePlatformName, setUsePlatformName] = useState('');
  const getPlatformName = (name: string) => {
    setUsePlatformName(name);
  };

  const getGenre = (genre: Genre) => {
    setGenre(genre);
  };
  return (
    <Layout
      GenreList={<GenreList selectedGenre={genre} getGenre={getGenre} />}
      GameGrid={
        <GameGrid
          genreName={genre}
          usePlatformName={usePlatformName}
          getPlatformName={getPlatformName}
        />
      }
    />
  );
};

export default Home;
