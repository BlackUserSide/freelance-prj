import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="page-header">
      <nav className="main-nav">
        <ul>
          <li>
            <div className="close-border"></div>
            <div className="arrow-close">
              <div className="arrow"></div>
            </div>
          </li>
          <li>
            <div className="close-border"></div>
            <a href="/#">Чому навчимо</a>
          </li>
          <li>
            <a href="/#">Роботи студентів</a>
          </li>
          <li>
            <a href="/#">Куратор</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
