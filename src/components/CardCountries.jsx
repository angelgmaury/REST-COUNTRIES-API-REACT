import { useEffect, useState } from "react";

import { CountrieInfo } from "./CountrieInfo";

export function CardCountries({
  isLightMode,
  countries,
  selectedCountry,
  setSelectedCountry,
  isSelectCountry,
  setIsSelectCountry,
}) {
  const handleReadMoreClick = (country) => {
    setSelectedCountry(country);
  };

  useEffect(() => {
    if (selectedCountry !== null) {
      setIsSelectCountry(true);
    } else {
      setIsSelectCountry(false);
    }
  }, [selectedCountry]);

  return (
    <div>
      <div
        className={`grid grid-cols-1 gap-10 mx-6 mt-6 tablet:grid-cols-2 tablet:mx-6 justify-items-center desktop:gap-20 desktop:grid-cols-4 mb-10 desktop:mx-10  ${
          isSelectCountry ? "hidden" : "grid"
        }`}
      >
        {countries.map((country, index) => (
          <div
            key={index}
            className={`sombra flex flex-col ${
              isLightMode ? "bg-light-bgSecond" : "bg-dark-bgSecond"
            } rounded-md max-w-[400px] desktop:max-h-[500px]`}
          >
            <img
              src={country.flags.png}
              className="rounded-t-md rounded-r-md max-w-[400px] max-h-[250px]"
              alt={`Flag of ${country.name.common}`}
            />

            <div className="p-6 mt-2">
              <p
                className={`${
                  isLightMode ? "text-light-text" : "text-dark-text"
                } mt-4 font-bold text-2xl pb-2`}
              >
                {country.name.common}
              </p>

              <p
                className={`${
                  isLightMode ? "text-light-text" : "text-dark-text"
                } py-1`}
              >
                <b>Population:</b> {country.population}
              </p>
              <p
                className={`${
                  isLightMode ? "text-light-text" : "text-dark-text"
                } py-1`}
              >
                <b>Region:</b> {country.region}
              </p>
              <p
                className={`${
                  isLightMode ? "text-light-text" : "text-dark-text"
                } py-1`}
              >
                <b>Capital:</b> {country.capital}
              </p>

              <button
                className={`${
                  isLightMode ? "text-light-text" : "text-dark-text"
                } font-bold mt-4 hover:underline`}
                onClick={() => handleReadMoreClick(country)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedCountry && (
        <CountrieInfo
          country={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          isLightMode={isLightMode}
        />
      )}
    </div>
  );
}
