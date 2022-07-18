import AdultBack from "./Styled-Components/AdultBack";
import { Router, useRouter } from "next/router";
import { useState } from "react";

export default function AdultsBack() {
  const [pageNumber, setPageNumber] = useState(1);
  const router = useRouter();

  const navigateBack = () => {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev--);
      router.pop();
      router.push(`/adult-onboarding${pageNumber}`);
    } else {
      console.log("go back to index.js");
    }
  };

  return <AdultBack onClick={navigateBack}>Back</AdultBack>;
}
