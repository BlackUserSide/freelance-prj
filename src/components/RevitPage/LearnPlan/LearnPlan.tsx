import React from "react";

export const LearnPlan: React.FC = () => {
  return (
    <div className="learn-plan">
      <div className="bg-lock"></div>
      <div className="container-learn-plan">
        <div className="top-line-wrapper">
          <h2 className="h2">Чому Ви навчитеся:</h2>
        </div>
        <div className="list-price-wrapper">
          <ul>
            <li>
              <div className="lock-wrapper">
                <div className="in-lock-wrapper"></div>
              </div>
              <div className="h3">Роботі з інтерфейсом Revit</div>
              <p>
                Ви навчитеся працювати з диспетчером проєкту, швидко
                орієнтуватися в просторі Revit,працювати з вікнами простору
                моделі та ознайомитеся з контекстними вкладками.
              </p>
            </li>
            <li>
              <div className="lock-wrapper">
                <div className="in-lock-wrapper"></div>
              </div>
              <div className="h3">Імпорту</div>
              <p>
                Один з найважливіших процесів моделювання - коректне
                завантаження підкладки. В рамках курсу Ви ознайомитеся з усіма
                інструментами імпорту.
              </p>
            </li>
            <li>
              <div className="lock-wrapper">
                <div className="in-lock-wrapper"></div>
              </div>
              <div className="h3">Працювати із системними сімействами</div>
              <p>
                Навчитеся працювати з усіма системними сімействами та їх
                параметрами.
              </p>
            </li>
            <li>
              <div className="lock-wrapper">
                <div className="in-lock-wrapper"></div>
              </div>
              <div className="h3">Створювати свої унікальні сімейства</div>
              <p>
                Завантажуємі сімейства - основа адаптації Revit. Ви
                познайомитеся з шаблонами сімейств, дізнаєтесь як створювати
                сімейства в просторі редактора сімейств і в контексті проєкту.
              </p>
            </li>
            <li>
              <div className="lock-wrapper">
                <div className="in-lock-wrapper"></div>
              </div>
              <div className="h3">Роботі з буфером обміну</div>
              <p>
                Правильна робота з копіюванням і буфером обміну допоможе
                пришвидшити роботу та уникнути помилок “ручного копіювання”.
              </p>
            </li>
            <li>
              <div className="lock-wrapper">
                <div className="in-lock-wrapper"></div>
              </div>
              <div className="h3">Формувати специфікації і відомості</div>
              <p>
                Ви зможете швидко і точно формувати експлікації, специфікації та
                відомості матеріалів. Вивчите гнучке сортування і групування
                параметрів.
              </p>
            </li>
            <li>
              <div className="lock-wrapper">
                <div className="in-lock-wrapper"></div>
              </div>
              <div className="h3">Друкувати і експортувати проєкти</div>
              <p>
                Дізнаєтеся про тонкощі виведення листів на друк і формування
                пакетів електронної документації.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
