import React from "react";

const InputGroup = (props) => {
  const { handleChange, labelFor, labelText, inputType, value } = props;
  return (
    <div className="input-group">
      <label htmlFor={labelFor}>{labelText}</label>
      <input type={inputType} name={labelFor} id={labelFor} onChange={handleChange} value={value} />
    </div>
  );
};

export default InputGroup;
