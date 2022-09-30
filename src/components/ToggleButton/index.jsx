import SunMode from "../../image/13956928661548329629-64.png";
import DarkMode from "../../image/11698650021548329627-64.png";

export function ToggleButton({ theme, toggleTheme }) {
  return (
    <div onClick={toggleTheme}>
      {theme === "dark" ? (
        <img src={DarkMode} alt="switch interface dark" />
      ) : (
        <img src={SunMode} alt="switch interface to light" />
      )}
    </div>
  );
}
