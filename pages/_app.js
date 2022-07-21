import "../styles/globals.css";
import Layout from "../components/Layout";
import useLocalStorageState from "../components/Hooks/useLocalStorageState";

function MyApp({ Component, pageProps }) {
  // Custom hooks setting user user details - here in the _app.js so it can be accessed acrosss all componenets!
  const [learnerName, setLearnerName] = useLocalStorageState(
    "learner-name",
    ""
  ) || [null, null];
  const [font, setFont] = useLocalStorageState("font", "Comic") || [null, null];
  const [size, setSize] = useLocalStorageState("font-size", "medium") || [
    null,
    null,
  ];
  const [background, setBackground] = useLocalStorageState(
    "background",
    "#fff"
  ) || [null, null];
  const [onboarding, setOnboarding] = useLocalStorageState(
    "onboarding",
    false
  ) || [null, null];

  return (
    <Layout>
      <Component
        {...pageProps}
        learnerName={learnerName}
        setLearnerName={setLearnerName}
        font={font}
        setFont={setFont}
        size={size}
        setSize={setSize}
        background={background}
        setBackground={setBackground}
        onboarding={onboarding}
        setOnboarding={setOnboarding}
      />
    </Layout>
  );
}

export default MyApp;
