import { useState, useEffect } from "react";

export default function useLocalStorageState(key, initial) {
  if (typeof window !== "undefined") {
    // Try and get some values from localStorage:
    // Set up defaults if there's nothing in localStorage (i.e. the values are null):
    const [value, setValue] = useState(() => {
      return JSON.parse(window.localStorage.getItem(key)) || initial;
    });

    // localStorage is a side-effect: keep track of these
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
  }
}
