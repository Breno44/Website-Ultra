import React from "react";
import InfoSection from "../../components/InfoSection/index";
import Pricing from "../../components/Pricing/index";
import { homeObjTwo, homeObjThree, homeObjFour } from "./Data";

const Products = () => {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Products;
