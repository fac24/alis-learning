import "../styles/globals.css";
import Layout from "../components/Layout";
import useLocalStorageState from "../components/Hooks/useLocalStorageState";

function MyApp({ Component, pageProps }) {
  // Custom hooks setting user user details - here in the _app.js so it can be accessed acrosss all componenets!
  const [learnerName, setLearnerName] = useLocalStorageState(
    "learner-name",
    null
  ) || [null, null];
  const [font, setFont] = useLocalStorageState("font", null) || [null, null];
  const [size, setSize] = useLocalStorageState("font-size", null) || [
    null,
    null,
  ];
  const [background, setBackground] = useLocalStorageState(
    "background",
    null
  ) || [null, null];

  //the useState local storage inside and handle click function can be inside the initial function.
  // key of avatar
  // set a key value of particular avatar
  const [avatarNameInLocalStorage, setAvatarNameInLocalStorage] =
    useLocalStorageState("avatar", null) || [null, null];

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
        avatarNameInLocalStorage={avatarNameInLocalStorage}
        setAvatarNameInLocalStorage={setAvatarNameInLocalStorage}
      />
    </Layout>
  );
}

export default MyApp;
