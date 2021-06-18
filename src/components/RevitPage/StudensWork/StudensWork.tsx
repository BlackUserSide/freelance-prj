import React from "react";
import image from "../../../img/Showcase.png";
type Tprops = {
  lang: any;
};
export const StudensWork: React.FC<Tprops> = ({ lang }) => {
  return (
    <div className="studens-work">
      <div className="bg-lock"></div>
      <div className="top-line">
        <h2 className="h2">{lang.section[4].h}</h2>
      </div>
      <div className="image-controller">
        <img src={image} alt="" />
      </div>
    </div>
  );
};
