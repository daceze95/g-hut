import { useEffect, useState } from "react";
import { ApiClient } from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
    id: number;
    name: string;
    background_image: string;
}
export interface FetchGameResponse {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController()
        setLoading(true)
        const fetchData = async () => {
            try {
                const result = await ApiClient.get<FetchGameResponse>('/games', {signal: controller.signal});
                setGames(result.data.results);
                setLoading(false);
            } catch (error) {
                if (error instanceof CanceledError) return;
                setError((error as string));
                setLoading(false);
            }
        }

        fetchData();

        return () => controller.abort();
    }, [])
    return { games, error, isLoading }
}

export default useGames
