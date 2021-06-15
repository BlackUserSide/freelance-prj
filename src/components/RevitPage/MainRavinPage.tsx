import React from "react";
import { AboutComponent } from "./About/AboutComponent";
import { Header } from "./Header";

import "./revit.sass";
export const MainRavinPage: React.FC = () => {
  return (
    <div className="main-ravin-page">
      <Header />
      <AboutComponent />
    </div>
  );
};
