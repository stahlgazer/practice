import React, { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);

    console.log("item is", item, "key is", key);

    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = value => {
    console.log("storedValue:", storedValue);

    // check if value is in array already
    // if so, remove the value
    // if the value is not in the array, add it

    if(storedValue.includes(value)){
        setStoredValue(storedValue.filter(val => {
            console.log("val", val);
            console.log("value", value);
            return val !== value
        }))
    } else{
    setStoredValue([...storedValue, value]);
    }

    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};

/*

    // from dark-mode localStorage

  const setValue = value => {
    // Save state
    setStoredValue(value);
    // Save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };

*/
