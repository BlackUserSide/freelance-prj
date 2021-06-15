import React from "react";
import { useHistory } from "react-router-dom";

export const Header: React.FC = () => {
  const history = useHistory();

  return (
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
            <a href="/#">Чому навчимо</a>
          </li>
          <li>
            <div className="close-border"></div>
            <a href="/#">Роботи студентів</a>
          </li>
          <li>
            <div className="close-border"></div>
            <a href="/#">Куратор</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
