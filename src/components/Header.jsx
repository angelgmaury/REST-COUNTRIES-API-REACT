import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export function Header({ isLightMode, setIsLightMode }) {
  const handleModeTheme = () => {
    setIsLightMode(!isLightMode);
  };

  useEffect(() => {
    localStorage.setItem("isLightMode", JSON.stringify(isLightMode));
  }, [isLightMode]);

  return (
    <div
      className={` ${
        isLightMode ? "bg-light-bgSecond" : "bg-dark-bgSecond"
      }  header h-24 px-5 transition-all`}
    >
      <h1
        className={`${
          isLightMode ? "text-light-text" : "text-dark-text"
        } font-extrabold`}
      >
        Where in the world?
      </h1>
      <button
        className={`${
          isLightMode ? "text-light-text" : "text-dark-text"
        } font-semibold`}
        onClick={handleModeTheme}
      >
        <FontAwesomeIcon icon={isLightMode ? faMoon : faSun} className="mr-2" />
        {isLightMode ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}
