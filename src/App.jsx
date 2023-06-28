import { useEffect, useState, useRef } from "react";
import { CountriesForm } from "./components/CountriesForm";
import { Header } from "./components/Header";
import { CardCountries } from "./components/CardCountries";

function App() {
  const storedMode = localStorage.getItem("isLightMode");

  const [isLightMode, setIsLightMode] = useState(
    storedMode ? storedMode === "true" : true
  );

  const [countries, setCountries] = useState([]);

  const [filteredCountriesByKey, setFilteredCountriesByKey] = useState([]);

  const [text, setText] = useState("Filter By Region");

  const [isKeyUp, setIsKeyUp] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState(null);

  const [isSelectCountry, setIsSelectCountry] = useState(false);

  const handleKeyUp = (e) => {
    const key = e.target.value.toLowerCase();
    if (key === "") {
      setIsKeyUp(false);
      setFilteredCountriesByKey(countries);
    } else {
      const filteredData = countries.filter((item) => {
        const keyAPI = item.name.common.toLowerCase();
        return keyAPI.indexOf(key) !== -1;
      });
      setFilteredCountriesByKey(filteredData);
      setIsKeyUp(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
      setFilteredCountriesByKey(data);
      /*       setFilteredCountriesByRegion(data); */
    };

    fetchData();
  }, []);

  const handleFilter = (reg) => {
    let region = reg.toLowerCase();
    if (region === "all" || region === "todos") {
      setFilteredCountriesByKey(countries);
    } else {
      switch (reg) {
        case "África":
          region = "África";
          break;
        case "Américas":
          region = "Americas";
          break;
        case "Europa":
          region = "Europe";
          break;
        case "Oceanía":
          region = "Oceania";
          break;
        default:
          region = reg;
          break;
      }
      const filteredRegion = countries.filter((item) => item.region === region);
      setFilteredCountriesByKey(filteredRegion);
    }
  };

  useEffect(() => {
    localStorage.setItem("isLightMode", isLightMode.toString());
  }, [isLightMode]);

  return (
    <main
      className={`${
        isLightMode ? "bg-light-bgLight" : "bg-dark-bgDark"
      } transition-all`}
    >
      <Header isLightMode={isLightMode} setIsLightMode={setIsLightMode} />

      <CountriesForm
        isLightMode={isLightMode}
        handleKeyUp={handleKeyUp}
        handleFilter={handleFilter}
        text={text}
        setText={setText}
        isSelectCountry={isSelectCountry}
      />

      <CardCountries
        isLightMode={isLightMode}
        countries={filteredCountriesByKey}
        isKeyUp={isKeyUp}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        isSelectCountry={isSelectCountry}
        setIsSelectCountry={setIsSelectCountry}
      />
    </main>
  );
}

export default App;
