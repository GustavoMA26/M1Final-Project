import { useState } from "react";

function useLocalStorage(key, initialValue) {
    const storedValue = localStorage.getItem(key);

    const initial = storedValue ? JSON.parse(storedValue) : initialValue;

    const [ value, setValue ] = useState(initial);

    function updateValue(newValue) {
        localStorage.setItem(key, JSON.stringify(newValue))
        setValue(newValue);
    };

    return {
        value,
        setValue: updateValue
    };
};

export { useLocalStorage };