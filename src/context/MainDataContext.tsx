import React, { useState } from "react";
import { MainContext } from "./MainContext";
import { leng } from "../lengData/data";
import { useEffect } from "react";
export const MainDataContext: React.FC = ({ children }) => {
  const [data, setData] = useState<any[]>([]);
  const localStorageLang = localStorage.getItem("lang");
  const mainContext = {
    data: data,
    changeLang: (lang: string) => {
      let newData: any[] = [];
      leng.filter((e) => {
        if (e.lang === lang) {
          newData.push(e);
          return e;
        }
        return e;
      });
      setData(newData);
      localStorage.setItem("lang", lang);
    },
  };
  const updateLen = (len: string) => {
    let newData: any[] = [];
    leng.filter((e) => {
      if (e.lang === len) {
        newData.push(e);
        return e;
      }
      return e;
    });
    setData(newData[0]);
  };

  useEffect(() => {
    if (localStorageLang === null) {
      localStorage.setItem("lang", "ua");
    } else {
      updateLen(localStorageLang);
    }
  }, [localStorageLang]);

  return (
    <>
      <MainContext.Provider value={mainContext}>
        {children}
      </MainContext.Provider>
    </>
  );
};
