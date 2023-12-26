import { useEffect, useState } from "react";
import { ApiClient } from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
    id: number;
    name: string;
}
export interface FetchGameResponse {
    count: number;
    results: Game[];
}

const useFetch = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const result = await ApiClient.get<FetchGameResponse>('/games');
                setGames(result.data.results);
                setLoading(false);
            } catch (error) {
                if(error instanceof CanceledError) return;
                setError((error as string));
                setLoading(false);
            }
        }

        fetchData();
    }, [])
    return { games, error, isLoading }
}

export default useFetch
