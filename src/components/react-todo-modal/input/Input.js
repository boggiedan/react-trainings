import React, { useRef } from "react";
import PropTypes from "prop-types";

const Input = ({ onSubmit }) => {
  const inputEl = useRef(null);

  const focus = () => inputEl.current.focus();

  const resetValue = () => (inputEl.current.value = "");

  const isValidValue = () =>
    !!(inputEl.current.value && inputEl.current.value.trim());

  const submitHandler = event => {
    event.preventDefault();

    if (isValidValue()) {
      onSubmit(inputEl.current.value);
      resetValue();
      focus();
    }
  };

  return (
    <form className="input-container" onSubmit={submitHandler}>
      <input
        className="input"
        type="text"
        placeholder="Enter the new TODO"
        ref={inputEl}
      />
      <input className="input-button" type="submit" value="submit" />
    </form>
  );
};

Input.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Input;
