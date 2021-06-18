import React, { useContext, useEffect, useState } from "react";
import { AboutComponent } from "./About/AboutComponent";
import { LastScreen } from "../LastScreen/LastScreen";
import { Header } from "./Header";
import { LearnPlan } from "./LearnPlan/LearnPlan";
import { StudensWork } from "./StudensWork/StudensWork";
import "./revit.sass";
import { MainContext } from "../../context/MainContext";
export const MainRavinPage: React.FC = () => {
  const [dataLang, setDataLang] = useState<any>();
  const main: any = useContext(MainContext);
  useEffect(() => {
    if (main) {
      let data: any = "";
      if (main.data.page) {
        data = main.data.page[1];
      }
      setDataLang(data);
    } else {
      console.log("err");
    }
  }, [main]);
  return (
    <>
      {dataLang ? (
        <div className="main-ravin-page">
          <Header />
          <AboutComponent lang={dataLang} />
          <LearnPlan lang={dataLang} />
          <StudensWork lang={dataLang} />
          <LastScreen lang={dataLang} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};
