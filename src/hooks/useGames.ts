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
    metacritic: number
}

const useGames = (genre: Genre | null) => useFetchData<Game>('/games', { params: { genres: genre?.id} }, [`${genre?.id}`])

export default useGames
