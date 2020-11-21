import React from "react";
import Button from "./Button";
import InputGroup from "./InputGroup";

const SecondForm = (props) => {
  const { handleFirstFocus, handleSecondFocus, handleThirdFocus, second, number, gender, dob, handleChange } = props;

  return (
    <section className="form-group second">
      <div className="flex-container">
        <div className="heading" onClick={handleSecondFocus}>
          Step 2: More comments
        </div>
        <div className={second ? "top" : "hidden "}>
          <InputGroup
            handleChange={handleChange}
            labelFor="number"
            labelText="Mobile Number"
            inputType="text"
            value={number}
          />
          <InputGroup
            handleChange={handleChange}
            labelFor="gender"
            labelText="Gender"
            inputType="text"
            value={gender}
          />
          <InputGroup
            handleChange={handleChange}
            labelFor="dob"
            labelText="Date of Birth: *dd/mm/yyyy"
            inputType="text"
            value={dob}
          />
        </div>
        <div className={second ? "bottom" : "hidden "}>
          <Button handleMethod={handleFirstFocus} type="button">
            <i className="fas fa-chevron-left"></i> Prev
          </Button>
          <Button handleMethod={handleThirdFocus} type="button">
            Next <i className="fas fa-chevron-right"></i>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SecondForm;
