import React from "react";
import Button from "./Button";
import InputGroup from "./InputGroup";

const FirstForm = (props) => {
  const { handleFirstFocus, handleSecondFocus, first, firstname, surname, email, handleChange } = props;

  return (
    <section className="form-group first">
      <div className="flex-container">
        <div className="heading" onClick={handleFirstFocus}>
          Step 1: Your details
        </div>
        <div className={first ? "top" : "hidden "}>
          <InputGroup
            handleChange={handleChange}
            labelFor="firstname"
            labelText="First Name"
            inputType="text"
            value={firstname}
          />
          <InputGroup
            handleChange={handleChange}
            labelFor="surname"
            labelText="Surname"
            inputType="text"
            value={surname}
          />
          <InputGroup
            handleChange={handleChange}
            labelFor="email"
            labelText="Email Address:"
            inputType="text"
            value={email}
          />
        </div>
        <div className={first ? "bottom" : "hidden "}>
          <Button handleMethod={handleSecondFocus} type="button">
            Next <i className="fas fa-chevron-right"></i>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FirstForm;
