import React from "react";
import InfoSection from "../../components/InfoSection/index";
import Pricing from "../../components/Pricing/index";
import { homeObjFour } from "./Data";

const Services = () => {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Services;
