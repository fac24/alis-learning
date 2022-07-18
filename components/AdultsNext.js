import AdultNext from "./Styled-Components/AdultNext";
import { Router, useRouter } from "next/router";

export default function AdultsNext({ page, firstPage }) {
  const router = useRouter();

  const navigateNext = () => {
    // if last parent page navigate to child set up
    if (page === 5) {
      router.replace(`/child-setup1`);
    } else {
      router.replace(`/adult-onboarding${page + 1}`);
    }
  };

  return (
    <AdultNext onClick={navigateNext}>
      {firstPage ? "Get a learner started" : "Next"}
    </AdultNext>
  );
}
