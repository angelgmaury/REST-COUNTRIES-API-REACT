import React from "react";
import { faFontAwesome } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function CountrieInfo({ country, setSelectedCountry, isLightMode }) {
  console.log(country);

  const currencies = Object.values(country.currencies).map((currency) => (
    <p
      key={currency.name}
      className={`${isLightMode ? "text-light-text" : "text-dark-text"}`}
    >
      <b>Currency:</b> {currency.name}
    </p>
  ));

  const languages = Object.values(country.languages).map((language) => (
    <p
      key={language}
      className={`${isLightMode ? "text-light-text" : "text-dark-text"}`}
    >
      {language}
    </p>
  ));

  let BCountries;

  if (Array.isArray(country.borders) && country.borders.length > 0) {
    BCountries = country.borders.map((border) => (
      <div
        key={border}
        className={` sombra2 ${
          isLightMode ? "text-light-text" : "text-dark-text"
        } ${
          isLightMode ? "bg-light-bgSecond" : "bg-dark-bgSecond"
        } flex items-center justify-center w-[80px] h-[35px] rounded-md`}
      >
        {border}
      </div>
    ));
  } else {
    BCountries = (
      <p
        className={`${
          isLightMode ? "text-light-text" : "text-dark-text"
        } text-xl font-bold underline`}
      >
        No border countries available.
      </p>
    );
  }

  return (
    <div className="mx-6 mt-6">
      <div
        className={`sombra2 ${
          isLightMode
            ? "text-light-text bg-light-bgSecond"
            : "text-dark-text bg-dark-bgSecond"
        } rounded-md w-[130px] h-[40px] flex items-center justify-center cursor-pointer`}
        onClick={() => {
          setSelectedCountry(null);
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="relative right-6" />
        <p className="font-semibold">Back</p>
      </div>

      <div className="mt-12 flex justify-center mb-12 laptop:mt-0 laptop:mb-0">
        <div className="laptop:grid laptop:grid-cols-2 laptop:place-items-center laptop:mt-0 laptop:mb-0 transition-all">
          <figure className="">
            <img
              src={country.flags.png}
              className="rounded-t-md rounded-l-md rounded-r-md max-h-[250px] laptop:w-[full]"
            />
          </figure>

          <div className="laptop:grid laptop:grid-cols-2">
            <div className="mt-8 flex flex-col gap-3 laptop:mb-14">
              <p
                className={`${
                  isLightMode ? "text-light-text" : "text-dark-text"
                } font-bold text-2xl mb-3`}
              >
                {country.name.common}
              </p>
              <p
                className={`${
                  isLightMode ? "text-light-text" : "text-dark-text"
                }`}
              >
                <b>Population:</b> {country.population}
              </p>
              <p
                className={`${
                  isLightMode ? "text-light-text" : "text-dark-text"
                }`}
              >
                <b>Region:</b> {country.region}
              </p>
              <p
                className={`${
                  isLightMode ? "text-light-text" : "text-dark-text"
                }`}
              >
                <b>Sub Region:</b> {country.subregion}
              </p>
              <p
                className={`${
                  isLightMode ? "text-light-text" : "text-dark-text"
                }`}
              >
                <b>Capital:</b> {country.capital}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 mb-8 laptop:justify-center">
              <p
                className={`${
                  isLightMode ? "text-light-text" : "text-dark-text"
                }`}
              >
                <b>Top Level Domain:</b> {country.tld[0]}
              </p>

              {currencies}

              {languages.length > 0 && (
                <p
                  className={` flex gap-1 ${
                    isLightMode ? "text-light-text" : "text-dark-text"
                  }`}
                >
                  <b>Languages: </b>
                  {languages}
                </p>
              )}
            </div>

            <div className="tablet:w-[300px] laptop:w-[500px]">
              <p
                className={`${
                  isLightMode ? "text-light-text" : "text-dark-text"
                } text-xl font-bold mb-4`}
              >
                Border Countries:
              </p>
              <div className="flex gap-6 flex-wrap">{BCountries}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
