import { useEffect, useState } from "react";
import { ApiClient } from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}
export interface FetchGenreResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController()
        setLoading(true)
        const fetchData = async () => {
            try {
                const result = await ApiClient.get<FetchGenreResponse>('/genres', { signal: controller.signal });
                setGenres(result.data.results);
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
    return { genres, error, isLoading }
}

export default useGenres