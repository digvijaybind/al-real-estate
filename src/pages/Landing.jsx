import React from "react";
import Header from "../components/header/Header";
import { AboutUs } from "../components/about/About";
import Quiz from "../components/quiz/Quiz";
import FloorPlan from "../components/floorPlan/FloorPlan";
import Notification from "../components/notification/Notification";

const Landing = () => {
  return (
    <div>
      {/* <Header /> */ }
      <AboutUs />
      <Quiz />
      <FloorPlan />
      <Notification />
    </div>
  );
};

export default Landing;
