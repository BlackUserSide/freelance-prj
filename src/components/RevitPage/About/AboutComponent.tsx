import React from "react";
import anim from "../../../img/KirillBuilding_AnimationComposing_03.gif";
export const AboutComponent: React.FC = () => {
  return (
    <div className="about-component">
      <div className="about-container">
        <div className="text-composition">
          <div className="logo-about">
            <h1 className="h1">Курс</h1>
            <span>Revit</span>
          </div>
          <div className="second-logo">
            <h3 className="h3">Основи BIM моделювання</h3>
          </div>
          <div className="list-price">
            <ul>
              <li>
                <h5 className="h5">Вартість</h5>
                <p>300 $</p>
              </li>
              <li>
                <h5 className="h5">Підготовка</h5>
                <p> рівень підготовки не важливий</p>
              </li>
              <li>
                <h5 className="h5">Формат</h5>
                <p>онлайн/офлайн</p>
              </li>
              <li>
                <h5 className="h5">Підтримка</h5>
                <p>24/7 в телеграм чаті</p>
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
