import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { MainContext } from "../../context/MainContext";
import * as Scroll from "react-scroll";
export const Header: React.FC = () => {
  const history = useHistory();
  const [dataLang, setDataLang] = useState<any>();
  let Scrolls = Scroll.Link;
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
  console.log(dataLang);

  return (
    <>
      {dataLang ? (
        <header className="page-header">
          <nav className="main-nav">
            <ul>
              <li>
                <div className="close-border"></div>
                <div
                  className="arrow-close"
                  onClick={() => {
                    history.goBack();
                  }}
                >
                  <div className="arrow"></div>
                </div>
              </li>
              <li>
                <div className="close-border"></div>
                <Scrolls
                  to="learn-plan"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  {dataLang.header[0]}
                </Scrolls>
              </li>
              <li>
                <div className="close-border"></div>
                <Scrolls
                  to="studens-work"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  {dataLang.header[1]}
                </Scrolls>
              </li>
              <li>
                <div className="close-border"></div>
                <Scrolls
                  to="last-screen"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  {dataLang.header[2]}
                </Scrolls>
              </li>
            </ul>
          </nav>
        </header>
      ) : (
        ""
      )}
    </>
  );
};
