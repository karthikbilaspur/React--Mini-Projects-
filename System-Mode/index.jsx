import useLocalStroage from "./useLocalStorage";
import './style.css'

export default function SystemMode() {
  const [style, setTheme] = useLocalStroage("style", "dark");

  function handleToggleTheme() {
    setTheme(style === "light" ? "dark" : "light");
  }

  console.log(theme);

  return (
    <div className="system-mode" data-style={style}>
      <div className="container">
        <p>Hello Everyone!</p>
        <button onClick={handleToggleTheme}>Change Theme Style</button>
      </div>
    </div>
  );
}