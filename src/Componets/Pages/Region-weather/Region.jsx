import React from "react";
import weather from "./weather.png";
import Weather from "../Weather/Weather";
import image1 from "./weather1.png";
// import Select from "react-select";
import { useState, useEffect } from "react";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";
import Nav from "../../UI/Nav";
import { Fragment } from "react";
// import Select from "react-select";
// import Nav from "../Select/Select";
// import image3 from "./image3.png";

// const api = {
//   key: "15b2a3909985cc3136879bdf5c35b9c7",
//   base: "https://api.openweathermap.org/data/2.5",
// };

const Region = () => {
  const [forecast, setforecast] = useState([]);
  // const [value, setValue] = useState("");
  // // const [selectedValue, setselectedValue] = useState("bandung");
  // const [selectedOption, setSelectedOption] = useState("1");
  // const data = {
  //   1: "Bandung",
  //   2: "Jakarta",
  // };

  // const Data_Dummy = [
  //   {
  //     value: "Bandung",
  //     label: "Bandung",
  //     suhu: "27",
  //     angin: "10km",
  //     humadity: "30%",
  //     gambar: "gedung sate",
  //   },
  //   { value: "jakarta ", label: "jakarta", suhu: "31", angin: "6km", humadity: "69%", gambar: "monas" },
  // ];

  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };
  // const handleValueChange = () => {
  //   setselectedValue(value);
  // };

  // const options = [
  //   { value: "Bandung", label: "Bandung", suhu: "27", angin: "10km", humadity: "30%", gambar: "gedung sate" },
  //   { value: "Tanggerang ", label: "Tanggerang ", suhu: "31", angin: "6km", humadity: "69%", gambar: "monas" },
  //   { value: "Garut", label: "Garut" },
  // ];
  // const options = [
  //   { value: "Bandung", label: "Bandung" },
  //   { value: "Tanggerang ", label: "Tanggerang " },
  //   { value: "Garut", label: "Garut" },
  // ];
  // const initialUserInput = { value: "Bandung", label: "Bandung", suhu: "27", angin: "10km", humadity: "30%", gambar: "gedung sate" };
  const [search, setsearch] = useState("bandung");
  // const [city, setcity] = useState("Bandung");

  const [currentWeather, setcurrentWeather] = useState({
    suhu: 37,
    kota: "bandung",
    feels_like: 35,
    cuaca: "berawan",
    desc: "sebagian berawan",
    icon: "03d",
    angin: 2,
    humidity: 34,
    negara: "ID",
    lat: -6.9039,
    lon: 107.6186,
  });
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=792b19415b4a30ee25ba80f10bce36d5&units=metric`)
      .then((res) => res.json())
      .then((result) => {
        const forecasts = result.list;
        const filteredForecasts = forecasts.filter((forecast, index) => index % 8 === 0);
        setforecast(filteredForecasts);
      });
  }, []);

  console.log(search);

  // const DUMMY_DATA = [
  // dung", suhu: "27", angin: "10km", humadity: "30%", gambar: "gedung sate" }
  //   { city: "Jakarta ", suhu: "31", angin: "6km", humadity: "69%", gambar: "monas" },
  // ];  //   { city: "Ban

  const searchHandler = (e) => {
    e.preventDefault();
    if (search !== "") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=792b19415b4a30ee25ba80f10bce36d5&&units=metric`)
        .then((res) => res.json())
        .then((result) => {
          setcurrentWeather({
            ...currentWeather,
            suhu: result.main.temp,
            kota: result.name,
            feels_like: result.main.feels_like,
            cuaca: result.weather[0].main,
            desc: result.weather[0].description,
            icon: result.weather[0].icon,
            angin: result.wind.speed,
            humidity: result.main.humidity,
            negara: result.sys.country,
            lan: result.coord.lon,
            lan: result.coord.lat,
          });
        });
    }
  };

  console.log(forecast);
  // const searchPressed = () => {
  //   fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setWeather(result);
  //     });
  // };
  // useEffect(() => {
  //   DUMMY_DATA.map((data) => {
  //     if (data.city === city) {
  //       setcurrentWeather(data);
  //       console.log(currentWeather);
  //     }
  //   });
  // }, [city]);

  // console.log(data);

  // const options = [
  //   { value: "Bandung", label: "Bandung" },
  //   { value: "Jakarta ", label: "Jakarta " },
  // ];

  // const selectHandler = (e) => {

  //   setcity(e);
  //   console.log("ini itu" + e);
  // };
  return (
    <Fragment>
      <div className="mb-3/4 sm:mb-0">
        <Nav></Nav>
      </div>

      <div className=" flex w-full h-screen justify-center  items-center ">
        <div className="flex flex-col shadow-lg  rounded-lg w-11/12 h-11/12 my-1  overflow-hidden">
          <div className=" w-full h-12   flex bg-sky-700 justify-between items-center pr-3">
            <h3 className="pl-10 text-sm lg:text-lg font-semibold text-white">PERKIRAAN CUACA</h3>
            <div>
              {/* <select value={selectedOption} onChange={handleOptionChange}>
              <option value="1">Bandung</option>
              <option value="2">Jakarta</option>
            </select> */}
              {/* <Select
                className="w-32  py-3 px-0 md:pr-3"
                options={options}
                onChange={(y) => {
                  setcity(y.value);
                }}
              /> */}
              <input type="text" onChange={(e) => setsearch(e.target.value)}></input>
              <button onClick={searchHandler}>search</button>
            </div>
          </div>
          <div className="flex flex-row     bg-sky-500">
            <div className="flex-col   gap-5 w-3/5  px-5  lg:px-10 pt-3">
              <div className=" text-white  border-b py-2">
                {/* <h1 className="text-lg  text-white font-bold "></h1> */}
                {/* {selectedValue === "bandung" && <h1 className="text-lg  text-white font-bold ">bandung</h1>}
              {selectedValue === "jakarta" && <h1 className="text-lg  text-white font-bold ">jakarta</h1>} */}
                <h1 className="text-xl  text-white font-bold ">{currentWeather.kota}</h1>
                <h1 className="text-sm  py-3">Today</h1>
              </div>
              <div className=" text-white  border-b py-2">
                <h1 className=" text-lg font-bold lg:text-6xl ">{currentWeather.suhu}C</h1>
                <h3 className="text-sm  lg:text-lg py-3">feels like {currentWeather.feels_like}</h3>
                <h3 className="text-sm lg:text-2xl flex items-center">
                  <span>
                    <img className="w-14 h-14" src={`http://openweathermap.org/img/w/${currentWeather.icon}.png`} alt="" />
                  </span>
                  {currentWeather.cuaca} or {currentWeather.desc}
                </h3>
              </div>
              <div className=" text-white pb-3 ">
                <h3 className="text-sm lg:text-xl pt-3"> wind {currentWeather.angin} Kmh</h3>
                <h3 className="text-sm lg:text-xl pt-3">Humidity : {currentWeather.humidity}%</h3>
              </div>
            </div>
            <div className="flex items-center   justify-center w-2/5 bg-sky-600 ">
              <img className="w-full lg:w-1/2 " src={`https://www.countryflagicons.com/FLAT/64/${currentWeather.negara}.png`} alt="" />
            </div>
          </div>
          <div className="w-full h-full bg-white px-2 py-1 flex flex-wrap   ">
            {forecast.length > 0
              ? forecast.map((item) => {
                  return <Weather img={image1} hari={item.dt_txt} desc={item.main.temp}></Weather>;
                })
              : null}
            {/* <Weather img={image1} hari={forecast[0].dt_txt ?? ''} desc="Morderate or Heavy"></Weather>
            <Weather img={image1} hari="Fri 24 August" desc="Morderate or Heavy"></Weather>
            <Weather img={image1} hari="Sat 25 August" desc="heavy rain"></Weather>
            <Weather img={image1} hari="Sun 26 August" desc="Morderate or Heavy"></Weather> */}
            {/* <div>
              <h2>5-Day Weather Forecast</h2> */}
            {/* <ul>
                {forecast.map((forecast) => (
                  <li key={forecast.dt}>
                    Date: {forecast.dt_txt}, Temperature: {forecast.main.temp}°C, Description: {forecast.weather[0].description}
                  </li>
                ))}
              </ul> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Region;
