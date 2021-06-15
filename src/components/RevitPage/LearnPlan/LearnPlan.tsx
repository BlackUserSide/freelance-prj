import React from "react";

export const LearnPlan: React.FC = () => {
  return (
    <div className="learn-plan">
      <div className="top-line-wrapper">
        <h2 className="h2">Чому Ви навчитеся:</h2>
      </div>
      <div className="list-price-wrapper">
        <ul>
          <li>
            <div className="lock-wrapper"></div>
            <div className="h3">Роботі з інтерфейсом Revit</div>
            <p>
              Ви навчитеся працювати з диспетчером проєкту, швидко орієнтуватися
              в просторі Revit,працювати з вікнами простору моделі та
              ознайомитеся з контекстними вкладками.
            </p>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};
