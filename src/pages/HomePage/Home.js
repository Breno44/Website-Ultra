import React from "react";
import InfoSection from "../../components/InfoSection/index";
import { homeObjOne } from "./Data";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
    </>
  );
};

export default Home;
