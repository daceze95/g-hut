import { useEffect, useState } from "react";
import { ApiClient } from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useFetchData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: string[]) => {
    const [response, setResponse] = useState<T[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController()
        setLoading(true)
        const fetchData = async () => {
            try {
                const result = await ApiClient.get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig });
                setResponse(result.data.results);
                setLoading(false);
            } catch (error) {
                if (error instanceof CanceledError) return;
                setError((error as string));
                setLoading(false);
            }
        }

        fetchData();

        return () => controller.abort();
    }, deps ? [...deps]: [])
    return { response, error, isLoading }
}

export default useFetchData
