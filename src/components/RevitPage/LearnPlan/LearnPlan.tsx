import React from "react";
type Tprops = {
  lang: any;
};
export const LearnPlan: React.FC<Tprops> = ({ lang }) => {
  return (
    <div className="learn-plan">
      <div className="bg-lock"></div>
      <div className="container-learn-plan">
        <div className="top-line-wrapper">
          <h2 className="h2">{lang.section[3].topLine}</h2>
        </div>
        <div className="list-price-wrapper">
          <ul>
            <li>
              <div className="lock-wrapper">
                <div className="in-lock-wrapper"></div>
              </div>
              <div className="h3">{lang.section[3].li1}</div>
              <p>{lang.section[3].li1_p}</p>
            </li>
            <li>
              <div className="lock-wrapper">
                <div className="in-lock-wrapper"></div>
              </div>
              <div className="h3">{lang.section[3].li2}</div>
              <p>{lang.section[3].li2_p}</p>
            </li>
            <li>
              <div className="lock-wrapper">
                <div className="in-lock-wrapper"></div>
              </div>
              <div className="h3">{lang.section[3].li3}</div>
              <p>{lang.section[3].li3_p}</p>
            </li>
            <li>
              <div className="lock-wrapper">
                <div className="in-lock-wrapper"></div>
              </div>
              <div className="h3">{lang.section[3].li4}</div>
              <p>{lang.section[3].li4_p}</p>
            </li>
            <li>
              <div className="lock-wrapper">
                <div className="in-lock-wrapper"></div>
              </div>
              <div className="h3">{lang.section[3].li5}</div>
              <p>{lang.section[3].li5_p}</p>
            </li>
            <li>
              <div className="lock-wrapper">
                <div className="in-lock-wrapper"></div>
              </div>
              <div className="h3">{lang.section[3].li6}</div>
              <p>{lang.section[3].li6_p}</p>
            </li>
            <li>
              <div className="lock-wrapper">
                <div className="in-lock-wrapper"></div>
              </div>
              <div className="h3">{lang.section[3].li7}</div>
              <p>{lang.section[3].li7}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
