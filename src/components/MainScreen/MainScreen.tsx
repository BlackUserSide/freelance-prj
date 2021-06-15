import React from "react";
import logo from "../../img/logo.png";
import facebook from "../../img/facebook.png";
import skype from "../../img/skype_2.png";
import link from "../../img/link.png";
import teleg from "../../img/telegram_2.png";
import { SecondSection } from "./SecondSection";
export const MainScreen: React.FC = () => {
  return (
    <div className="main-screen">
      <div className="first-section">
        <div className="logo-wrapper">
          <img src={logo} alt="logo" className="logo-image" />
        </div>
        <div className="contact-center">
          <div className="bg-lock"></div>
          <div className="text-composition">
            <div className="top-line">
              <h2 className="h2">Інформаційна підтримка:</h2>
              <p className="contanct">
                <a href="/#"> +380664792165</a>
                <a href="/#">vv.vitaliy.work@gmail.com</a>
              </p>
              <p className="name-wrapper">Віталій Виноградов</p>
            </div>
            <div className="line-in-composition"></div>
            <div className="soc-composition">
              <h2 className="h2">Наші соц. мережі:</h2>
              <ul>
                <li>
                  <a href="/#">
                    Facebook <img src={facebook} alt="" />
                  </a>
                </li>
                <li>
                  <a href="/#">
                    {" "}
                    Skype <img src={skype} alt="" />
                  </a>
                </li>
                <li>
                  <a href="/#">
                    LinkedIn <img src={link} alt="" />
                  </a>
                </li>
                <li>
                  <a href="/#">
                    Telegram <img src={teleg} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main-contact"></div>
      </div>

      <SecondSection />
      <div className="thrid-section"></div>
    </div>
  );
};
//TODO Сделать ссылки для почты и телефона
