import { useState, useEffect } from "react";

const useLocalStorage = (key: string, initialValue: string) => {
    const [value, setValue] = useState(() => {
        try {
            if (typeof window !== "undefined") {
                const item = window.localStorage.getItem(key);
                if (item) {
                    console.log("hit")
                    return JSON.parse(item);
                } else {
                    console.log("miss")
                    return initialValue;
                }
            } else {
                return initialValue;
            }
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            if (typeof window !== "undefined") {
                window.localStorage.setItem(key, JSON.stringify(value));
            }
        } catch (error) {
            console.error(error);
        }
    }, [key, value]);

    return [value, setValue];
};

export default useLocalStorage;
