import React from "react";
import img from "../../img/mainCompose/LetsBIMprove_PaidCoursesLogo_01 1.png";
import img2 from "../../img/mainCompose/LetsBIMprove_PaidCoursesLogo_01 2.png";
export const SecondSection: React.FC = () => {
  return (
    <div className="second-section">
      <div className="bg-lock"></div>
      <div className="revit-composition">
        <div className="container-revit">
          <div className="text-composition">
            <p className="main-text-wrapper">
              Базовий курс з <span className="bold-wrap">Autodesk Revit</span> ,
              по завершенню якого Ви будете володіти усіма необхідними знаннями
              для впевненного старту як{" "}
              <span className="bold-wrap">BIM спеціаліст</span>.
            </p>
            <div className="btn-wrapper-main">
              <p>Курс</p>

              <h4>Revit</h4>
            </div>
          </div>
          <div className="image-wrapper">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
      <div className="line-wrapper"></div>
      <div className="base-wrapper">
        <div className="container-revit">
          <div className="image-wrapper">
            <img src={img2} alt="" />
          </div>
          <div className="text-composition">
            <p className="main-text-wrapper">
              Базовий курс з <span className="bold-wrap">Autodesk Revit</span> ,
              по завершенню якого Ви будете володіти усіма необхідними знаннями
              для впевненного старту як{" "}
              <span className="bold-wrap">BIM спеціаліст</span>.
            </p>
            <div className="btn-wrapper-main">
              <p>Курс</p>

              <h4>Revit</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
