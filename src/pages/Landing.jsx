import React from "react";

import ExpertHelp from "../components/ExpertHelp";
import TopHero from "../components/TopHero";
import Faq from "../components/faq/Faq";

const Landing = () => {
  return (
    <div>
      <TopHero />
      <Faq />
      <ExpertHelp />
    </div>
  );
};

export default Landing;
