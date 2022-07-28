import { useState, useEffect } from "react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import useLocalStorageState from "../components/Hooks/useLocalStorageState";

function MyApp({ Component, pageProps }) {
  // Custom hooks setting user user details - here in the _app.js so it can be accessed acrosss all componenets!
  const [stars, setStars] = useLocalStorageState("stars", 0);
  const [learnerName, setLearnerName] = useLocalStorageState(
    "learner-name",
    ""
  );
  const [font, setFont] = useLocalStorageState("font", "Comic");
  const [fontSize, setFontSize] = useLocalStorageState("font-size", "small");
  const [background, setBackground] = useLocalStorageState(
    "background",
    "#F8F5F4"
  );
  const [onboarding, setOnboarding] = useLocalStorageState("onboarding", false);
  const [phonemeLevel, setPhonemeLevel] = useLocalStorageState(
    "phonemeLevel",
    1
  );
  const [avatarNameInLocalStorage, setAvatarNameInLocalStorage] =
    useLocalStorageState("avatar", null);
  const [learnerAge, setLearnerAge] = useLocalStorageState("age", null);
  const [learnerGoal, setLearnerGoal] = useLocalStorageState("goal", "5");

  // The position of this bit of code matters!
  // It probably needs to be here (or hereabouts :)
  const [isClient, setIsClient] = useState(false);

  // This give the page a tiny moment to load - so the page renders with the learners customization and NOT the default options - bug fix 🐛
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  // sending the props at the root of the pages so it's accessible everywhere!
  return (
    <Layout font={font} fontSize={fontSize} background={background}>
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
        learnerAge={learnerAge}
        setLearnerAge={setLearnerAge}
        setLearnerGoal={setLearnerGoal}
      />
    </Layout>
  );
}

export default MyApp;
