import AdultBack from "./Styled-Components/AdultBackButton";
import { Router, useRouter } from "next/router";

export default function AdultsBack({ page }) {
  const router = useRouter();

  const navigateBack = () => {
    if (page > 1) {
      router.replace(`/adult-onboarding${page - 1}`);
    } else {
      router.replace("/");
    }
  };

  return <AdultBack onClick={navigateBack}>Back</AdultBack>;
}
