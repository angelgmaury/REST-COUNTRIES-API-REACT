import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";

export function FilterCountriesByRegion({
  isLightMode,
  handleFilter,
  text,
  setText,
}) {
  const [handleClickCaret, setHandleClickCaret] = useState(false);

  const [textTodos, setTextTodos] = useState("All");

  const [textAfrica, setTextAfrica] = useState("Africa");

  const [textAmerica, setTextAmerica] = useState("Americas");

  const [textAsia, setTextAsia] = useState("Asia");

  const [textEurope, setTextEurope] = useState("Europe");

  const [textOceania, setTextOceania] = useState("Oceania");

  const caretMode = () => {
    setHandleClickCaret(!handleClickCaret);
  };

  const handleSetText = (e) => {
    setText(e.target.innerText);
  };

  useEffect(() => {
    handleFilter(text);
  }, [text]);

  return (
    <div
      className={`mt-12 mx-6 w-52 sombra tablet:mt-6 relative desktop:mx-10`}
      onClick={caretMode}
    >
      <div
        className={`flex justify-between px-4 py-4 rounded-md ${
          isLightMode
            ? "bg-light-bgSecond text-light-text"
            : "bg-dark-bgSecond text-dark-text"
        } transition-all cursor-pointer`}
      >
        <span className="font-semibold">{text}</span>
        <button>
          <FontAwesomeIcon icon={handleClickCaret ? faCaretUp : faCaretDown} />
        </button>
      </div>

      <div
        className={`p-2 mt-2 rounded-md absolute sombra ${
          isLightMode ? "bg-light-bgSecond" : "bg-dark-bgSecond"
        } ${
          handleClickCaret ? "absolute" : "hidden"
        } transition-all z-50 right-0 left-0 top-[100%]`}
      >
        <div
          className={`options rounded-sm ${
            isLightMode
              ? "hover:bg-gray-100 text-light-text"
              : "hover:bg-dark-bgDark text-dark-text"
          }`}
        >
          <button onClick={handleSetText}>{textTodos}</button>
        </div>

        <div
          className={`options rounded-sm ${
            isLightMode
              ? "hover:bg-gray-100 text-light-text"
              : "hover:bg-dark-bgDark text-dark-text"
          }`}
        >
          <button onClick={handleSetText}>{textAfrica}</button>
        </div>

        <div
          className={`options rounded-sm ${
            isLightMode
              ? "hover:bg-gray-100 text-light-text"
              : "hover:bg-dark-bgDark text-dark-text"
          }`}
        >
          <button onClick={handleSetText}>{textAmerica}</button>
        </div>

        <div
          className={`options rounded-sm ${
            isLightMode
              ? "hover:bg-gray-100 text-light-text"
              : "hover:bg-dark-bgDark text-dark-text"
          }`}
        >
          <button onClick={handleSetText}>{textAsia}</button>
        </div>

        <div
          className={`options rounded-sm ${
            isLightMode
              ? "hover:bg-gray-100 text-light-text"
              : "hover:bg-dark-bgDark text-dark-text"
          }`}
        >
          <button onClick={handleSetText}>{textEurope}</button>
        </div>

        <div
          className={`options rounded-sm ${
            isLightMode
              ? "hover:bg-gray-100 text-light-text"
              : "hover:bg-dark-bgDark text-dark-text"
          }`}
        >
          <button onClick={handleSetText}>{textOceania}</button>
        </div>
      </div>
    </div>
  );
}
