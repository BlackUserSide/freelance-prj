import React from "react";
import { LastScreen } from "../LastScreen/LastScreen";
import { Header } from "./Header";
import "./revit.sass";
export const MainRavinPage: React.FC = () => {
  return (
    <div className="main-ravin-page">
      <Header />
      <LastScreen/>
    </div>
  );
};
