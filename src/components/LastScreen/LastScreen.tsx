import React from "react";
import "./lastScreen.sass";
import meneger from "../../img/meneger.png";
import diplom from "../../img/diplom.png";
import { useState } from "react";
export const LastScreen: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const [dataImage, setDataImage] = useState<any[]>([]);
  const changeActiveHandler = () => {
    if (active) {
      setActive(false);
      return;
    }
    setActive(true);
  };
  return (
    <div className="last-screen">
      <div className="bg-lock">
        <div className="text-composition">
          <ul>
            <li>
              <h2>Куратор курсу</h2>
              <h1>Кирил Обертович</h1>
              <div className="line"></div>
            </li>
            <li>
              <p>
                - співзасновник програми навчання
                <span>Let’s BIMprove</span>;
              </p>
            </li>
            <li>
              <p>
                - <span>дійсний BIM менеджер</span> компанії BIMprove з 5-річним
                досвідом;
              </p>
            </li>
            <li>
              <p>
                - сертифікований викладач
                <span> Autodesk</span>;
              </p>
            </li>
            <li>
              <p>
                - працював з ведучими компаніями{" "}
                <span>
                  Франції,
                  <br />
                  Австралії, Англії та Латвії;
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="last-screen_container">
        <img src={meneger} alt="" />
        <div className="sertificat-compostion">
          <div className="btn-sertificat" onClick={changeActiveHandler}>
            <img src={diplom} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
