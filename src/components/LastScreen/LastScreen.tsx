import React from "react";
import "./lastScreen.sass";
import meneger from "../../img/meneger.png";
import diplom from "../../img/diplom.png";
import sert_1 from "../../img/sertifecate/sert_1.png";
import sert_2 from "../../img/sertifecate/sert_2.png";
import sert_3 from "../../img/sertifecate/sert_3.png";
import sert_4 from "../../img/sertifecate/sert_4.png";
import { useState } from "react";
type TProps = {
  lang: any;
};
export const LastScreen: React.FC<TProps> = ({ lang }) => {
  const [active, setActive] = useState<boolean>(false);
  const [image, setImage] = useState("");
  const [dataImage] = useState<any[]>([sert_1, sert_2, sert_3, sert_4]);

  const changeSert = (item: string) => {
    setActive(false);
    setImage(item);
  };

  const changeActiveHandler = () => {
    setActive((prev) => (prev ? false : true));
  };

  return (
    <div className="last-screen">
      <div className="bg-lock">
        <div className="text-composition">
          <ul>
            <li>
              <h2>{lang.section[5].h}</h2>
              <h1>{lang.section[5].h}</h1>
              <div className="line"></div>
            </li>
            <li>
              <p>
                - {lang.section[5].li_1}
                <span>{lang.section[5].li1_span}</span>
              </p>{" "}
            </li>
            <li>
              <p>
                - <span>{lang.section[5].li2_span}</span> {lang.section[5].li2};
              </p>
            </li>
            <li>
              <p>
                - {lang.section[5].li3}
                <span> {lang.section[5].li3_span}</span>;
              </p>
            </li>
            <li>
              <p>
                - {lang.section[5].li4} <span>{lang.section[5].li4_span}</span>
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
      {active ? (
        <div className="pop-up">
          <div className="pop-up-form-wrapper">
            {dataImage.map((i: string, key: any) => {
              return (
                <div
                  key={key}
                  onClick={() => changeSert(i)}
                  className="image-sert"
                >
                  <img key={key} src={i} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
      {image !== "" ? (
        <div onClick={() => setImage("")} className="pop-up-sert">
          <div className="pop-up-form-wrapper-sert">
            <img src={image} alt="" />
          </div>
        </div>
      ) : null}
    </div>
  );
};
