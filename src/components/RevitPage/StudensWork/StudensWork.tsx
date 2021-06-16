import React from "react";
import image from "../../../img/Showcase.png";
export const StudensWork: React.FC = () => {
  return (
    <div className="studens-work">
      <div className="bg-lock"></div>
      <div className="top-line">
        <h2 className="h2">Роботи наших студентів</h2>
      </div>
      <div className="image-controller">
        <img src={image} alt="" />
      </div>
    </div>
  );
};
