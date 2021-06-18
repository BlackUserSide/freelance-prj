import React from "react";
import { useHistory } from "react-router-dom";
import img from "../../img/mainCompose/LetsBIMprove_PaidCoursesLogo_01 1.png";
import img2 from "../../img/mainCompose/LetsBIMprove_PaidCoursesLogo_01 2.png";
type Tprops = {
  lang: any;
};
export const SecondSection: React.FC<Tprops> = ({ lang }) => {
  const history = useHistory();
  const pushHandler = (link: string) => {
    history.push(link);
    return;
  };

  return (
    <div className="second-section">
      <div className="bg-lock"></div>
      <div className="revit-composition">
        <div className="container-revit">
          <div className="text-composition">
            <p className="main-text-wrapper">{lang.section[2].p}</p>
            <div
              className="btn-wrapper-main"
              onClick={() => {
                pushHandler("/revit");
              }}
            >
              <p>{lang.section[2].btn}</p>

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
            <div className="btn-wrapper-main">
              <p>{lang.section[3].btn}</p>

              <h4>{lang.section[3].btn_1}</h4>
            </div>
            <p className="main-text-wrapper">{lang.section[3].p}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
