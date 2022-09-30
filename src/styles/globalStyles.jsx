import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
   background: ${({ theme }) => theme.body};
   color: ${({ theme }) => theme.text};
   transition: all 0.3s linear;
  };
`;
export const LightMode = {
  body: "#FFF",
  text: "#121212",
};
export const DarkMode = {
  body: "#121212",
  text: "#ffffff",
};
