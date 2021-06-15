import React from "react";
import { AboutComponent } from "./About/AboutComponent";
import { Header } from "./Header";
import { LearnPlan } from "./LearnPlan/LearnPlan";
import "./revit.sass";
export const MainRavinPage: React.FC = () => {
  return (
    <div className="main-ravin-page">
      <Header />
      <AboutComponent />
      <LearnPlan />
    </div>
  );
};
