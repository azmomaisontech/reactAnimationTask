import React from "react";
import FirstForm from "../FirstForm";
import SecondForm from "../SecondForm";
import ThirdForm from "../ThirdForm";

const Form = (props) => {
  const {
    handleSubmit,
    handleFirstFocus,
    handleSecondFocus,
    handleThirdFocus,
    first,
    second,
    third,
    firstname,
    surname,
    email,
    number,
    gender,
    dob,
    comments,
    handleChange,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FirstForm
        handleFirstFocus={handleFirstFocus}
        handleSecondFocus={handleSecondFocus}
        first={first}
        firstname={firstname}
        surname={surname}
        email={email}
        handleChange={handleChange}
      />
      <SecondForm
        handleFirstFocus={handleFirstFocus}
        handleSecondFocus={handleSecondFocus}
        handleThirdFocus={handleThirdFocus}
        second={second}
        number={number}
        gender={gender}
        dob={dob}
        handleChange={handleChange}
      />
      <ThirdForm
        handleSecondFocus={handleSecondFocus}
        handleThirdFocus={handleThirdFocus}
        third={third}
        comments={comments}
        handleChange={handleChange}
      />
    </form>
  );
};

export default Form;
