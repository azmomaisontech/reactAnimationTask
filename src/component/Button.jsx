import React from "react";

const Button = (props) => {
  const { handleMethod, type, children } = props;
  return (
    <button type={type} className="btn" onClick={handleMethod}>
      {children}
    </button>
  );
};

export default Button;
