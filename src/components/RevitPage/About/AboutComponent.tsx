import React from "react";
import { useState } from "react";
import anim from "../../../img/KirillBuilding_AnimationComposing_03.gif";
type TProps = {
  lang: any;
};
export const AboutComponent: React.FC<TProps> = ({ lang }) => {
  const [active, setActice] = useState<boolean>(false);
  console.log(active);

  return (
    <div className="about-component">
      <div className="about-container">
        <div className="text-composition">
          <div className="container-absolute">
            <div
              className="bg-wrapp"
              onMouseEnter={() => {
                setActice(true);
              }}
              onMouseLeave={() => {
                setActice(false);
              }}
            ></div>
            <h2 className={`h2 ${active ? "white" : ""}`}>
              ok,
              <br />
            </h2>
            <h2 className={`h2-second ${active ? "white" : ""}`}>go!</h2>
          </div>
          <div className="logo-about">
            <h1 className="h1">{lang.section[0].h}</h1>
            <span>Revit</span>
          </div>
          <div className="second-logo">
            <h3 className="h3">{lang.section[1].h}</h3>
          </div>
          <div className="list-price">
            <ul>
              <li>
                <h5 className="h5">{lang.section[2].li1}</h5>
                <p>300 $</p>
              </li>
              <li>
                <h5 className="h5">{lang.section[2].li2}</h5>
                <p> {lang.section[2].li2_p}</p>
              </li>
              <li>
                <h5 className="h5">{lang.section[2].li3}</h5>
                <p>{lang.section[2].li3_p}</p>
              </li>
              <li>
                <h5 className="h5">{lang.section[2].li4}</h5>
                <p>{lang.section[2].li4_p}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="animation-composition">
          <div className="bg-lock"></div>
          <div className="animation-wrapper">
            <img src={anim} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
