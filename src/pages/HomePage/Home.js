import React from "react";
import InfoSection from "../../components/InfoSection/index";
import Pricing from "../../components/Pricing/index";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;
