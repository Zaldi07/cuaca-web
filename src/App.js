// import logo from "./logo.svg";
// import "./App.css";
import Register from "./Componets/Pages/register/Register";
import Login from "./Componets/Pages/login/Login";
// import { Fragment } from "react";
import Region from "./Componets/Pages/Region-weather/Region";
import { Route, Routes } from "react-router-dom";
import Countries from "./Componets/Pages/Countries/countries";

function App() {
  const login = localStorage.getItem("isLogin");
  if (login == undefined) {
    localStorage.setItem("isLogin", "0");
  }
  // const [isLogin, setisLogin] = useState(false);
  // const loginInfo = localStorage.getItem("isLoggedin");

  return (
    <Routes>
      <Route path="/" element={<Register></Register>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>} />
      <Route path="/home">
        <Route index element={<Region></Region>} />
        <Route path="countries" element={<Countries></Countries>} />
        {/* <Route path="/home" element={<Home></Home>}></Route> */}
      </Route>

      {/* {login === "0" && name === null && email === null ? <Register></Register> : null}
      {login === "1" && email !== null && password !== null ? <Login /> : null} */}
      {/* {login === "2" && <Home></Home>} */}
      {/* <Route index element={<Register />} /> */}
      {/* <Route path="/" element={<Register></Register>}></Route> */}

      {/* <Home /> */}
    </Routes>
  );
}
export default App;
