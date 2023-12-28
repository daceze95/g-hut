import useFetchData from "./useFetchData";

export interface Platform{
    platform:{
    id: number;
    name: string;
}}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: Platform[]
}

const useGames = () => useFetchData<Game>('/games')

export default useGames
