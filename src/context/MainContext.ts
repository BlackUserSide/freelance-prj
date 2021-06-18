import React from "react";

interface IMainContext {
  data: any;
  changeLang: (lang: string) => void;
}

export const MainContext = React.createContext<Partial<IMainContext>>({});
