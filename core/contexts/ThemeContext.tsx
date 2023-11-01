"use client";

import { createContext, useState } from "react";
import { childrenProps } from "../lib/types";

type ThemeContextType = {
  theme: string;
  toggle: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggle: () => {},
});

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  } else {
    return "light";
  }
};

export const ThemeContextProvider = ({ children }: childrenProps) => {
  const [theme, setTheme] = useState<string>(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");

  };

 
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
