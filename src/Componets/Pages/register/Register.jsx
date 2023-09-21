import { Fragment } from "react";
import image2 from "../../../asset/Colorful Planner Mobile App Promotion Instagram Post.png";
import useInput from "../../Hooks/use-input";
import { useState } from "react";
import { Router, redirect, Link } from "react-router-dom";
const Register = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasEror,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: EmailInputHasEror,
    valueChangeHandler: EmailChangeHandler,
    inputBlurHandler: EmailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: PhoneInputHasEror,
    valueChangeHandler: PhoneChangeHandler,
    inputBlurHandler: PhoneBlurHandler,
    reset: resetPhoneInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: PasswordInputHasEror,
    valueChangeHandler: PasswordChangeHandler,
    inputBlurHandler: PasswordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim() !== "");

  const buttonHandler = (event) => {
    event.preventDefault();
  };

  const [cekpassword, setcekpassword] = useState(false);
  const [signupValid, setsignupValid] = useState(false);
  // const [dontValid, setdontValid] = useState(false);

  let formIsvalid = false;

  if (enteredNameIsValid || enteredPhoneIsValid || enteredPasswordIsValid) {
    formIsvalid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (e.target.Email.value.includes("@") && e.target.name.value.trim().length > 6 && e.target.phone.value.trim().length > 6 && e.target.password.value.trim().length > 7) {
      setsignupValid(true);
      // setdontValid(true);
      localStorage.setItem("name", e.target.name.value);
      localStorage.setItem("email", e.target.Email.value);
      localStorage.setItem("phone", e.target.phone.value);
      localStorage.setItem("password", e.target.password.value);
      localStorage.setItem("isLogin", "1");
      <redirect to="/login" />;
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
    // if (e.target.name.value.trim().length > 6) {
    //   setsignupValid(true);
    //   setdontValid(true);
    // }
    // if (e.target.phone.value.trim().length > 6) {
    //   setsignupValid(true);
    //   // setdontValid(true);
    // }
    // if (e.target.password.value.trim().length > 7) {
    //   setcekpassword(false);
    //   // setdontValid(true);
    // } else {
    //   setcekpassword(true);
    //   // setdontValid(true);
    // }

    // localStorage.setItem("name", e.target.name.value);
    // localStorage.setItem("email", e.target.Email.value);
    // localStorage.setItem("phone", e.target.phone.value);
    // localStorage.setItem("password", e.target.password.value);
    // localStorage.setItem("isLogin", "1");
    // setTimeout(() => {
    //   window.location.reload();
    // }, 3000);

    // if (signupValid === true) {
    //   localStorage.setItem("name", e.target.name.value);
    //   localStorage.setItem("email", e.target.Email.value);
    //   localStorage.setItem("phone", e.target.phone.value);
    //   localStorage.setItem("password", e.target.password.value);
    //   localStorage.setItem("isLogin", "1");
    // }

    // if (!enteredNameIsValid || !enteredEmailIsValid || !enteredPhoneIsValid || !enteredPasswordIsValid) {
    //   return;
    // }
    // console.log(enteredName);
    // console.log(enteredEmail);
    // console.log(enteredPhone);
    // console.log(enteredPassword);
    // resetNameInput();
    // resetEmailInput();
    // resetPhoneInput();
    // resetPasswordInput();

    // localStorage.clear();
    console.log(e.target.name.value);
    console.log(e.target.Email.value);
    console.log(e.target.phone.value);
    console.log(e.target.password.value);
  };

  const nameInputClasses = nameInputHasEror ? "invalid" : "";
  const emailInputClasses = EmailInputHasEror ? " invalid" : "";
  const phoneInputClasess = PhoneInputHasEror ? "invalid" : "";
  // const passwordInputClasess = PasswordInputHasEror ? " invalid" : "";

  // const SignInHandler = () => {
  //   localStorage.setItem("isLogin", "1");
  //   window.location.reload();
  // };

  return (
    <Fragment>
      <div className="flex min-h-screen  items-center  ">
        <div className=" w-1/2 p-8  sm:w-full  min-[320px]:w-full  ">
          <form action="" onSubmit={formSubmitHandler} className="flex flex-col justify-center items-center gap-4">
            <div className="w-100">
              <h1 className="font-bold text-3xl text-center">¡Welcome Your bussines!</h1>
              <h1 className="pt-5 text-left  text-lg  font-medium w-80 ">Create an account to run wild through our curated experience</h1>
            </div>
            <button onClick={buttonHandler} className=" rounded-none mt-2  py-1 px-2 w-80 border-2 flex justify-center gap-2  border-black   ">
              <img width="30" height="20" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
              Continue with google
            </button>
            <h4 className="font-light">or</h4>
            <div className={nameInputClasses}>
              <input
                value={enteredName}
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                className="appearance-none border-2 border-black rounded w-80 py-1 px-2 text-grey-darker "
                id="teks"
                type="teks"
                placeholder="nama"
                name="name"
              />
            </div>
            <div className={emailInputClasses}>
              <input
                value={enteredEmail}
                onChange={EmailChangeHandler}
                onBlur={EmailBlurHandler}
                className="appearance-none border-2  border-black rounded w-80 py-1 px-2 text-grey-darker "
                id="email"
                type="email"
                name="Email"
                placeholder="email"
              />
            </div>
            <div className={phoneInputClasess}>
              <input
                value={enteredPhone}
                onChange={PhoneChangeHandler}
                onBlur={PhoneBlurHandler}
                className="appearance-none border-2  border-black rounded w-80 py-1 px-2 text-grey-darker "
                id="phonel"
                type="teks"
                placeholder="phone"
                name="phone"
              />
            </div>
            {/* <div className={passwordInputClasess}> */}
            <div>
              <input
                value={enteredPassword}
                onChange={PasswordChangeHandler}
                onBlur={PasswordBlurHandler}
                className={`appearance-none border-2  border-black rounded w-80 py-1 px-2 text-grey-darker ${!cekpassword ? "border-cyan-200" : "border-red-500"}`}
                id="email"
                type="password"
                placeholder="password"
                name="password"
              />
            </div>
            <button className="rounded-none   py-1 px-2 w-80 border-2  border-black  " type="submit">
              Create Account
            </button>
            {signupValid && (
              <div className="alert alert-success flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm ">Register Berhasil ,silahkan login!</span>
              </div>
            )}
            {/* {dontValid && <p>valid</p>} */}
            <div className="flex  justify-around items-center gap-2 text-sm  font-light ">
              <input className="h-10 py-3" type="checkbox" name="" id="" />
              <h4>remember me for 30 days</h4>
            </div>
            <h4 className="text-sm underline font-light">
              <a href="">forgot password?</a>
            </h4>
            <h4 className="text-sm font-light">
              <a href="">
                you are ready have account ?{" "}
                <span className="font-bold">
                  <Link to="/login">login</Link>
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

export default Register;
