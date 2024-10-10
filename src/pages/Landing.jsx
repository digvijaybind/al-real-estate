import React from "react";

import ExpertHelp from "../components/ExpertHelp";
import TopHero from "../components/TopHero";
import Faq from "../components/faq/Faq";
import Township from "../assets/images/landing/beachesArea.jpg";
import Villas from "../components/villas/Villas";
import OffPlan from "../components/offPlan/OffPlan";
import { AboutUs } from "../components/about/About";
import Quiz from "../components/quiz/Quiz";
import FloorPlan from "../components/floorPlan/FloorPlan";
import Notification from "../components/notification/Notification";

const Landing = () => {
  return (
    <div>
      {/*top hero section */}
      <TopHero />
      {/*this is township project */}
      <div>
        <img src={Township} className="max-h-[1400px] w-full" />
      </div>

      {/*slider images  of villas*/}
      <Villas />

      {/*New off plan component */}

      <OffPlan />
      {/* faq */}
      <Faq />
      <ExpertHelp />
      {/* <Header /> */ }
      <AboutUs />
      <Quiz />
      <FloorPlan />
      <Notification />
    </div>
  );
};

export default Landing;
