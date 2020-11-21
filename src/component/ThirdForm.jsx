import React from "react";
import Button from "./Button";
import TextAreaGroup from "./TextAreaGroup";

const ThirdForm = (props) => {
  const { handleSecondFocus, handleThirdFocus, third, comments, handleChange } = props;

  return (
    <section className="form-group third">
      <div className="flex-container">
        <div className="heading" onClick={handleThirdFocus}>
          Step 3: Final Comments
        </div>
        <div className={third ? "top" : "hidden "}>
          <TextAreaGroup handleChange={handleChange} labelFor="comments" labelText="Comments" value={comments} />
        </div>
        <div className={third ? "bottom" : "hidden "}>
          <Button handleMethod={handleSecondFocus} type="button">
            <i className="fas fa-chevron-left"></i> Prev
          </Button>
          <Button handleMethod={null} type="submit">
            Submit <i className="fas fa-chevron-right"></i>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ThirdForm;
