import { Content } from "./components/Content";
import { DarkMode, GlobalStyle, LightMode } from "./styles/globalStyles";
import { useDarkMode } from "./styles/useDarkMode";
import { ToggleButton } from "./components/ToggleButton";
import { ThemeProvider } from "styled-components";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? LightMode : DarkMode;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyle />
        <ToggleButton theme={theme} toggleTheme={toggleTheme} />
        <Content />
      </>
    </ThemeProvider>
  );
}
export default App;
