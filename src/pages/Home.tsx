import { useState } from 'react';
import GameGrid from '../components/GameGrid';
import GenreList from '../components/GenreList';
import Layout from '../components/Layout/Layout';
import { Genre } from '../hooks/useGenres';

export interface IDAndNameProps {
  id: number;
  name: string;
}

const Home = () => {
  const [genre, setGenre] = useState<Genre | null>(null);
  const [usePlatformName, setUsePlatformName] = useState<IDAndNameProps>({id: 0, name:''});
  const getPlatformName = (platform: IDAndNameProps) => {
    setUsePlatformName(platform);
    console.log(platform);
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
