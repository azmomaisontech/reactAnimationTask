import React from "react";

const TextAreaGroup = (props) => {
  const { handleChange, labelFor, labelText, value } = props;
  return (
    <div className="input-group">
      <label htmlFor={labelFor}>{labelText}</label>
      <textarea name={labelFor} id={labelFor} onChange={handleChange} value={value}></textarea>
    </div>
  );
};

export default TextAreaGroup;
