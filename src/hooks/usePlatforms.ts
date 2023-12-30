import useFetchData from './useFetchData';

export interface Platform {
    id: number;
    name: string;
}

const usePlatforms = () => useFetchData<Platform>('/platforms/lists/parents');

export default usePlatforms