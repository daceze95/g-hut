import { IDAndNameProps } from "../pages/Home";
import useFetchData from "./useFetchData";
import { Genre } from "./useGenres";

export interface Platform {
    platform: {
        id: number;
        name: string;
    }
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: Platform[];
    metacritic: number;
    released: string;
    genres: { id: number, name: string }[];
    rating_top: number;
}

const useGames = (genre: Genre | null, platform: IDAndNameProps | null) => useFetchData<Game>('/games', {
    params: {
        genres: genre?.id,
        parent_platforms: platform?.id
    }
},
    [`${genre?.id}`, `${platform?.id}`])

export default useGames
