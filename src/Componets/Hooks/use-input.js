import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setenteredValue] = useState("");
  const [isTouched, setisTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setenteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setisTouched(true);
  };

  const reset = () => {
    setenteredValue("");
    setisTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
