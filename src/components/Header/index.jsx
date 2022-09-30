import { ToggleButton } from "../ToggleButton";
import { useDarkMode } from "../../styles/useDarkMode";
import { HeaderContainer } from "./styled";
export function Header() {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <HeaderContainer>
      <ToggleButton theme={theme} toggleTheme={toggleTheme} />
    </HeaderContainer>
  );
}
