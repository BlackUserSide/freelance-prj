import React from "react";
import logo from "../../img/logo.png";
import facebook from "../../img/facebook.png";
import skype from "../../img/skype_2.png";
import link from "../../img/link.png";
import teleg from "../../img/telegram_2.png";
import { SecondSection } from "./SecondSection";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import { useState } from "react";
import { useEffect } from "react";
export const MainScreen: React.FC = () => {
  const [dataLang, setDataLang] = useState<any>();
  const [active, setActive] = useState<boolean>(false);
  const activeHandler = () => {
    if (active) {
      setActive(false);
      return;
    }
    setActive(true);
  };
  const main: any = useContext(MainContext);
  console.log(main, "main");

  useEffect(() => {
    if (main) {
      let data: any = "";
      if (main.data.page) {
        data = main.data.page[0];
      }
      setDataLang(data);
    } else {
      console.log("err");
    }
  }, [main]);
  console.log(dataLang);

  return (
    <>
      {dataLang ? (
        <div className="main-screen">
          <div className="thrid-section">
            <div className="container-absolut">
              {main.data.lang === "ua" ? (
                <p onClick={activeHandler}>Укр</p>
              ) : main.data.lang === "ru" ? (
                <p onClick={activeHandler}>Рус</p>
              ) : (
                <p onClick={activeHandler}>Eng</p>
              )}
              {active ? (
                <div className="hidden-list">
                  <ul>
                    <li
                      onClick={() => {
                        main.changeLang("ua");
                        window.location.reload();
                      }}
                    >
                      укр
                    </li>
                    <li
                      onClick={() => {
                        main.changeLang("ru");
                        window.location.reload();
                      }}
                    >
                      рус
                    </li>
                    <li
                      onClick={() => {
                        main.changeLang("en");
                        window.location.reload();
                      }}
                    >
                      eng
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="first-section">
            <div className="logo-wrapper">
              <img src={logo} alt="logo" className="logo-image" />
            </div>
            <div className="contact-center">
              <div className="bg-lock"></div>
              <div className="text-composition">
                <div className="top-line">
                  <h2 className="h2">{dataLang.section[0].h}</h2>
                  <p className="contanct">
                    <a href="/#">{dataLang.section[0].phone}</a>
                    <a href="/#">{dataLang.section[0].mail}</a>
                  </p>
                  <p className="name-wrapper">
                    {dataLang.section[0].nameCouch}
                  </p>
                </div>
                <div className="line-in-composition"></div>
                <div className="soc-composition">
                  <h2 className="h2">{dataLang.section[1].h}</h2>
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
          <SecondSection lang={dataLang} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};
//TODO Сделать ссылки для почты и телефона
