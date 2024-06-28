import { useState } from "react";

export const useFetching = (callback) => {

    const [loader, setLoader] = useState(false);
    const [error, setError] = useState('');

    const fetching = async () => {

        try {
            setLoader(true);
            await callback();    
        } catch (error) {
            setError(error.message);    
        } finally {
            setLoader(false)
        }

    }

    return [fetching, loader, error]
}