import { useState, useEffect, useCallback } from "react";

// Our original attempt. It requires the [null, null] bit in _app.js AND suppressHydration in PhonemeLayout.

// export default function useLocalStorageState(key, initial) {
//   if (typeof window !== "undefined") {
//     // Try and get some values from localStorage:
//     // Set up defaults if there's nothing in localStorage (i.e. the values are null):

//     const [value, setValue] = useState(() => {
//       return JSON.parse(window.localStorage.getItem(key)) || initial;
//     });

//     // localStorage is a side-effect: keep track of these
//     useEffect(() => {
//       window.localStorage.setItem(key, JSON.stringify(value));
//     }, [value]);

//     return [value, setValue];
//   }
// }

//
// ----------
//

//
// Firtina's first suggestion. This is broken because all the localStorage values set are "undefined".
// (So when the page is refreshed, you get an error "Unexpected token u in JSON at position 0".)
//

// export default function useLocalStorageState(key, initial) {
//   const [value, setValue] = useState(initial);

//   useEffect(() => {
//     // this will happen only in the client
//     const localStorageValue = window.localStorage.getItem(key);

//     if (localStorageValue !== null) {
//       // if null, then the key is not in local storage
//       setValue(JSON.parse(localStorageValue));
//     }

//     // Otherwise, keep the initial state.
//   }, [key]);

//   // Wrap the "setValue" in a callback here instead of using useEffect, to have
//   // more predictable behaviour. But this is optional.
//   const newSetValue = useCallback(
//     (newValue) => {
//       window.localStorage.setItem(key, JSON.stringify(newValue));
//       setValue(newValue);
//     },
//     [key]
//   );

//   // Note that this will always return something here.
//   // The previous version was returning "undefined" if it was in the server, which is a bit harder to handle.
//   // Now, we guarantee that the server will always be seeing the initial state.
//   return [value, newSetValue];
// }

//
// ----------
//

//
// Modifying our original attempt in light of Firtina's suggestion.
//
// This allows us to remove the || [null, null] thing from _app.js
// AND remove the suppressHydration thing from PhonemeLayout.
// It "works", BUT will not remember anything from localStorage if the page is refreshed!
// (Which means it's useless compared to the other options :)
//

// export default function useLocalStorageState(key, initial) {
//   const [value, setValue] = useState(initial);

//   useEffect(() => {
//     // this will happen only in the client
//     const localStorageValue = window.localStorage.getItem(key);

//     if (localStorageValue !== null) {
//       // if null, then the key is not in local storage

//       // I think the main problem is we shouldn't be doing setValue here.
//       setValue(JSON.parse(localStorageValue));
//     }

//     // Otherwise, keep the initial state.
//   }, [key]);

//   // localStorage is a side-effect: keep track of these
//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);

//   return [value, setValue];
// }

//
// ----------
//

//
// ***this is the best option so far!*** :¬)
// This seems to be an improvement upon our original:
// it requires suppressHydration in PhonemeLayout (bad), but NOT the [null, null] thing in _app.js (good)
//

export default function useLocalStorageState(key, initial) {
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(window.localStorage.getItem(key)) || initial;

      // Would something like this be safer? (If we store 0 in localStorage, would it trip up?)
      // if (JSON.parse(window.localStorage.getItem(key)) === null) {
      //   return initial;
      // } else {
      //   return JSON.parse(window.localStorage.getItem(key));
      // }
    } else {
      return initial;
    }
  });

  // I think we only want to fire useEffect if value changes, NOT key as well?
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

//
// ----------
//
