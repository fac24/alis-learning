import Link from "next/link";
import useLocalStorageState from "../components/Hooks/useLocalStorageState";

export default function Home() {
  const [foo, setFoo] = useLocalStorageState("foo", "bar");

  return (
    <>
      <Link href="learner-onboarding/avatar-selection">
        <a>Get started</a>
      </Link>
      <Link href="adult-onboarding1">Go to parents section</Link>
    </>
  );
}
