import { useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("dark");

  const ToggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return [theme, ToggleTheme];
};
