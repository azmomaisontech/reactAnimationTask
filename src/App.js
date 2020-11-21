import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Form from "./component/layout/Form";
import validateInput from "./utils/validateInput";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  let error;
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [user, setUser] = useState({
    firstname: "",
    surname: "",
    email: "",
    number: "",
    gender: "",
    dob: "",
    comments: "",
  });

  const { firstname, surname, email, number, gender, dob, comments } = user;

  //To open the first Form
  const handleFirstFocus = () => {
    setFirst(true);
    setSecond(false);
    setThird(false);
  };

  //To open the second Form
  const handleSecondFocus = () => {
    setFirst(false);
    setSecond(true);
    setThird(false);
  };

  //To open the Third Form
  const handleThirdFocus = () => {
    setFirst(false);
    setSecond(false);
    setThird(true);
  };

  const handleChange = (e) => {
    const target = e.target;
    setUser({ ...user, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    error = validateInput(user);
    if (error.length > 0) {
      toast.error(error);
      return;
    }
    console.log("Submitted");
    console.log(user);
  };

  return (
    <main>
      <div className="container">
        <ToastContainer position="top-right" />
        <Form
          handleSubmit={handleSubmit}
          handleFirstFocus={handleFirstFocus}
          handleSecondFocus={handleSecondFocus}
          handleThirdFocus={handleThirdFocus}
          first={first}
          second={second}
          third={third}
          firstname={firstname}
          surname={surname}
          email={email}
          number={number}
          gender={gender}
          dob={dob}
          comments={comments}
          handleChange={handleChange}
        />
      </div>
    </main>
  );
}

export default App;
