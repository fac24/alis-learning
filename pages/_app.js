import { useState, useEffect } from "react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import useLocalStorageState from "../components/Hooks/useLocalStorageState";

function MyApp({ Component, pageProps }) {
  // const [stars, setStars] = useLocalStorageState("stars", 0) || [null, null];
  const [stars, setStars] = useLocalStorageState("stars", 0);

  // Custom hooks setting user user details - here in the _app.js so it can be accessed acrosss all componenets!
  const [learnerName, setLearnerName] = useLocalStorageState(
    "learner-name",
    ""
  ) || [null, null];
  const [font, setFont] = useLocalStorageState("font", "Comic") || [null, null];
  const [fontSize, setFontSize] = useLocalStorageState(
    "font-size",
    "medium"
  ) || [null, null];
  const [background, setBackground] = useLocalStorageState(
    "background",
    "#F8F5F4"
  ) || [null, null];
  const [onboarding, setOnboarding] = useLocalStorageState(
    "onboarding",
    false
  ) || [null, null];
  // local storage use state to handle a value of keeping track of progress.
  const [phonemeLevel, setPhonemeLevel] = useLocalStorageState(
    "phonemeLevel",
    1
  ) || [null, null];

  //the useState local storage inside and handle click function can be inside the initial function.
  // key of avatar
  // set a key value of particular avatar
  const [avatarNameInLocalStorage, setAvatarNameInLocalStorage] =
    useLocalStorageState("avatar", null) || [null, null];

  // sending the props at the root of the pages so it's accessible everywhere!
  return (
    <Layout font={font} fontSize={fontSize}>
      <Component
        {...pageProps}
        learnerName={learnerName}
        setLearnerName={setLearnerName}
        font={font}
        setFont={setFont}
        fontSize={fontSize}
        setFontSize={setFontSize}
        background={background}
        setBackground={setBackground}
        onboarding={onboarding}
        setOnboarding={setOnboarding}
        avatarNameInLocalStorage={avatarNameInLocalStorage}
        setAvatarNameInLocalStorage={setAvatarNameInLocalStorage}
        phonemeLevel={phonemeLevel}
        setPhonemeLevel={setPhonemeLevel}
        stars={stars}
        setStars={setStars}
      />
    </Layout>
  );
}

export default MyApp;
