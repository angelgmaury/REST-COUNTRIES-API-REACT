import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FilterCountriesByRegion } from "./FilterCountriesByRegion";

export function CountriesForm({
  isLightMode,
  handleKeyUp,
  handleFilter,
  text,
  setText,
  isSelectCountry,
}) {
  return (
    <div
      className={`tablet:justify-between tablet:items-center ${
        isSelectCountry ? "hidden" : "tablet:flex"
      }`}
    >
      <div
        className={`flex mt-6 mx-6 px-8 py-5 rounded-md sombra ${
          isLightMode ? "bg-light-bgSecond" : "bg-dark-bgSecond"
        } transition-all tablet:w-[40%] desktop:w-[30%] desktop:mx-10`}
      >
        <p
          className={`mr-3.5 ${
            isLightMode ? "text-light-text" : "text-dark-text"
          }`}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="cursor-pointer"
          />
        </p>
        <input
          type="text"
          placeholder="Search for a country..."
          className={`bg-transparent w-[85%] outline-none placeholder:font-semibold ${
            isLightMode
              ? "text-light-text placeholder:text-light-text"
              : "text-dark-text placeholder:text-dark-text"
          }`}
          onKeyUp={handleKeyUp}
        />
      </div>

      <div>
        <FilterCountriesByRegion
          isLightMode={isLightMode}
          handleFilter={handleFilter}
          text={text}
          setText={setText}
        />
      </div>
    </div>
  );
}
