import { Fragment } from "react";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import image2 from "../../../asset/Colorful Planner Mobile App Promotion Instagram Post.png";
const Login = () => {
  const [emailEntered, setemailEntered] = useState("");
  const [passEntered, setpassEntered] = useState("");
  const [isvalid, setisvalid] = useState(true);
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  let navigate = useNavigate();

  const loginSubmitHandler = (e) => {
    e.preventDefault();

    if (email === emailEntered && password === passEntered) {
      alert("login berhasil");
      // setTimeout(() => {
      //   localStorage.setItem("isLogin", "2");
      //   window.location.reload();
      // }, 3000);
      navigate("/home");
    } else {
      setisvalid(false);
    }
  };

  const emailInputHandler = (e) => {
    setemailEntered(e.target.value);
  };
  const passInputHandler = (e) => {
    setpassEntered(e.target.value);
  };

  const signUpHandler = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Fragment>
      <div className="flex min-h-screen   items-center  overflow-hidden ">
        <div className=" w-1/2 p-8  sm:w-full  min-[320px]:w-full  ">
          <form onSubmit={loginSubmitHandler} className="flex flex-col justify-center items-center gap-4">
            <div className="w-100">
              <h1 className="font-bold text-3xl text-center">¡Welcome Your bussines!</h1>
              <h1 className="pt-5 text-left  text-lg  font-medium w-80 ">Create an account to run wild through our curated experience</h1>
            </div>
            <div>
              <input
                onChange={emailInputHandler}
                value={emailEntered}
                className="appearance-none border-2  border-black rounded w-80 py-1 px-2 text-grey-darker "
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                onChange={passInputHandler}
                value={passEntered}
                className="appearance-none border-2  border-black rounded w-80 py-1 px-2 text-grey-darker"
                id="password"
                type="password"
                placeholder="password"
              />
            </div>
            <button type="submit" className="rounded-none   py-1 px-2 w-80 border-2  border-black  ">
              Login
            </button>
            {!isvalid && <p className="text-[#ff3232] font-bold">email atau password salah!</p>}
            <div className="flex  justify-around items-center gap-2 text-sm  font-light ">
              <input className="h-10 py-3" type="checkbox" name="" id="" />
              <h4>remember me for 30 days</h4>
            </div>
            <h4 className="text-sm underline font-light">
              <a href="">forgot password?</a>
            </h4>
            <h4 className="text-sm font-light">
              <a href="">
                you are ready have account ?
                <span className="font-bold">
                  <button type="button">
                    <Link to="/register">Sign Up</Link>
                  </button>
                </span>
              </a>
            </h4>
          </form>
        </div>
        <div className=" w-1/2  sm:w-full min-[320px]:hidden sm:hidden lg:block">
          <img className="h-screen w-full object-cover" src={image2} alt="weather cuaca" />
        </div>
      </div>
    </Fragment>
  );
};
export default Login;
