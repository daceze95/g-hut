import useFetchData from "./useFetchData";
export interface Game {
    id: number;
    name: string;
    background_image: string;
}

const useGames = () => useFetchData<Game>('/games')

export default useGames
