import React, { useState, useEffect, Fragment } from "react";

import Select from "react-select";
import Nav from "../../UI/Nav";

function API() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [FilteredCountries, setFilteredCountries] = useState([]);
  const [selectBenua, setSelectBenua] = useState("");

  const options = [
    { value: "Asia", label: "Asia" },
    { value: "americas", label: "americas" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
    { value: "Africa", label: " Africa" },
  ];

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    // const filteredBenua = selectBenua ? countries.filter((country) => country.region.toLowerCase() === selectBenua.toLowerCase()) : countries;
    const filteredBenua = selectBenua && countries.filter((country) => country.region.toLowerCase() === selectBenua.toLowerCase());
    setFilteredCountries(filteredBenua);
  }, [selectBenua, countries]);

  useEffect(() => {
    const filtered = countries.filter((country) => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredCountries(filtered);
  }, [searchTerm, countries]);

  return (
    <Fragment>
      <div className="mb-3/4 sm:mb-0">
        <Nav></Nav>
      </div>
      <div className="w-full h-full mt-4  flex-wrap  ">
        <div className="flex justify-between p-5">
          <input
            className="border-2 w-2/5 rounded-lg h-10 p-2"
            type="text"
            placeholder="Search by country"
            value={searchTerm}
            onChange={(e) => {
              setsearchTerm(e.target.value);
            }}
          />
          <Select
            className=" w-35 rounded-lg h-10 p-2 text-sm"
            options={options}
            value={selectBenua}
            onChange={(y) => {
              setSelectBenua(y.value);
            }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 bg-white rounded overflow-hidden">
          {FilteredCountries.length === 0 ? (
            <div className="text-center w-full h-screen  justify-center grid col-span-4">no found data</div>
          ) : (
            FilteredCountries.map((country, index) => (
              <div key={index} class="w-11/12 h-4/5 rounded  shadow-lg mx-3">
                <img className="w-full h-1/2" src={country.flags.png} alt="Sunset in the mountains" />
                <div className="px-6 py-4 border-t-2">
                  <div className="font-bold text-xl mb-2">{country.name.common}</div>
                  <h3 className="text-gray-700 text-sm">
                    <span className="text-semibold">population</span>:{country.population}
                  </h3>
                  <h3 className="text-gray-700 text-sm">
                    <span className="text-semibold">region</span>:{country.region}
                  </h3>
                  <h3 className="text-gray-700 text-sm">
                    <span className="text-semibold">capital</span>: {country.capital}
                  </h3>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default API;
