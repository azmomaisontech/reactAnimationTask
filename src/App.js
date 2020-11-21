import React, { useState } from "react";
import "./App.css";

function App() {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const handleFirstFocus = () => {
    setFirst(true);
    setSecond(false);
    setThird(false);
  };

  const handleSecondFocus = () => {
    setFirst(false);
    setSecond(true);
    setThird(false);
  };

  const handleThirdFocus = () => {
    setFirst(false);
    setSecond(false);
    setThird(true);
  };

  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <main>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group first">
            <div className="flex-container">
              <div className="heading" onClick={handleFirstFocus}>
                Step 1: Your details
              </div>
              <div className={first ? "top" : "hidden "}>
                <div className="input-group">
                  <label htmlFor="firstname"> First Name</label>
                  <input type="text" name="firstname" id="firstname" onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label htmlFor="surname"> Surname </label>
                  <input type="text" name="surname" id="surname" onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label htmlFor="email"> Email Address:</label>
                  <input type="email" name="email" id="email" onChange={handleChange} />
                </div>
              </div>
              <div className={first ? "bottom" : "hidden "}>
                <button type="button" className="btn" onClick={handleSecondFocus}>
                  Next <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="form-group second">
            <div className="flex-container">
              <div className="heading" onClick={handleSecondFocus}>
                Step 2: More comments
              </div>
              <div className={second ? "top" : "hidden "}>
                <div className="input-group">
                  <label htmlFor="number"> Mobile Number</label>
                  <input type="text" name="number" id="number" onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label htmlFor="gender"> Gender </label>
                  <input type="text" name="gender" id="gender" onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label htmlFor="dob"> Date of Birth</label>
                  <input type="date" name="dob" id="dob" onChange={handleChange} />
                </div>
              </div>
              <div className={second ? "bottom" : "hidden "}>
                <button type="button" className="btn" onClick={handleFirstFocus}>
                  <i className="fas fa-chevron-left"></i> Prev
                </button>
                <button type="button" className="btn" onClick={handleThirdFocus}>
                  Next <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="form-group third">
            <div className="flex-container">
              <div className="heading" onClick={handleThirdFocus}>
                Step 3: Final Comments
              </div>
              <div className={third ? "top" : "hidden "}>
                <div className="input-group">
                  <label htmlFor="comments"> Comments </label>
                  <textarea name="comments" id="comments" onChange={handleChange}></textarea>
                </div>
              </div>
              <div className={third ? "bottom" : "hidden "}>
                <button type="button" className="btn" onClick={handleSecondFocus}>
                  <i className="fas fa-chevron-left"></i> Prev
                </button>
                <button className="btn" type="submit">
                  Submit <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default App;
