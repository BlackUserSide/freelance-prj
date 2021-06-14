import React from "react";
import { useState } from "react";
import mes from "../../img/message/chatlogo.png";
import close from "../../img/message/closebutton.png";
import telegram from "../../img/message/telegramm.png";
import whatsapp from "../../img/message/whatsapp.png";
import skype from "../../img/message/skype.png";
import viber from "../../img/message/viber.png";
export const MessageWrapp: React.FC = () => {
  const [activeBtn, setActiveBtn] = useState<boolean>(false);
  const changeHandler = () => {
    if (activeBtn) {
      setActiveBtn(false);
      return;
    }
    setActiveBtn(true);
  };
  return (
    <div className="fixed-container">
      {activeBtn ? (
        <div className="active-list-wrapper">
          <ul>
            <li>
              <a href="/#">
                <img src={telegram} alt="telegram" className="close-btn-list" />
              </a>
            </li>
            <li>
              <a href="/#">
                <img src={whatsapp} alt="telegram" className="close-btn-list" />
              </a>
            </li>
            <li>
              <a href="/#">
                <img src={skype} alt="telegram" className="close-btn-list" />
              </a>
            </li>
            <li>
              <a href="/#">
                <img src={viber} alt="telegram" className="close-btn-list" />
              </a>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}

      <div className="massege-wrapper">
        <div className="image-container">
          {activeBtn ? (
            <img src={close} alt="close-link-soc" onClick={changeHandler} />
          ) : (
            <img
              src={mes}
              alt="link-soc"
              className="open-btn-list"
              onClick={changeHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
};
