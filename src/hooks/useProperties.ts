import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Property {
  _id: string;
  title: string;
}

const useProperties = () => {
	const [properties, setProperties] = useState<Property[]>([]);
        const [error, setError] = useState("");

        useEffect(() => {
		const controller = new AbortController();

                apiClient.get<Property[]>("/properties", {signal: controller.signal})
                        .then(res => setProperties(res.data))
                        .catch(err => {
                                if (err instanceof CanceledError) return;
                                setError(err.message)
                        });

		return () => controller.abort();
        }, []);

	return {properties, error}
}

export default useProperties;
