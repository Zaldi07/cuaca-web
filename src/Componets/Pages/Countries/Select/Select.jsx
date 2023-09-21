// import React, { Fragment } from "react";
// import Select from "react-select";
// import { useState } from "react";
// // import data from "../data.json";

// function Nav() {
//   const initialUserInput = { value: "Bandung", label: "Bandung", suhu: "27", angin: "10km", humadity: "30%", gambar: "gedung sate" };

//   const [city, setcity] = useState(initialUserInput);

//   const options = [
//     { value: "Bandung", label: "Bandung", suhu: "27", angin: "10km", humadity: "30%", gambar: "gedung sate" },
//     { value: "Tanggerang ", label: "Tanggerang ", suhu: "31", angin: "6km", humadity: "69%", gambar: "monas" },
//   ];

//   const selectHandler = (e) => {
//     setcity(e);
//   };

//   console.log(city);
//   const MyComponent = () => <Select className="w-32  py-3 px-0 md:pr-3" options={options} onChange={selectHandler} />;

//   return (
//     <Fragment>
//       <MyComponent />
//     </Fragment>
//   );
// }

// export default Nav;
