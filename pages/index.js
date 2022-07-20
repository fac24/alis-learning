import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="learner-onboarding/avatar-selection">
        <a>Get started</a>
      </Link>
      <Link href="adult-onboarding1">Go to parents section</Link>
    </>
  );
}
