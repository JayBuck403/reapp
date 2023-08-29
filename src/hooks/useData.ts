import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, dependencies?: any[]) => {
        const [data, setData] = useState<T[]>([]);
        const [error, setError] = useState("");

        useEffect(() => {
                const controller = new AbortController();

                apiClient.get<T[]>(endpoint, {signal: controller.signal, ...requestConfig})
                        .then(res => setData(res.data))
                        .catch(err => {
                                if (err instanceof CanceledError) return;
                                setError(err.message)
                        });

                return () => controller.abort();
        }, dependencies ? [...dependencies] : []);

        return { data, error }
}

export default useData;
