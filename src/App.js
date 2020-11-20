import "./App.css";

function App() {
  const handleChange = (e) => {};

  return (
    <main>
      <div className="container">
        <form>
          <div className="form-group first">
            <div className="flex-container">
              <div className="flex-item heading">Step 1: Your details</div>
              <div className="flex-item top">
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
              <div className="flex-item bottom">
                <button className="btn" type="submit">
                  Next <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="form-group second">
            <div className="flex-container">
              <div className="flex-item heading">Step 2: More comments</div>
              <div className="flex-item top">
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
                  <input type="text" name="dob" id="dob" onChange={handleChange} />
                </div>
              </div>
              <div className="flex-item bottom">
                <button className="btn" type="submit">
                  <i className="fas fa-chevron-left"></i> Prev
                </button>
                <button className="btn" type="submit">
                  Next <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="form-group third">
            <div className="flex-container">
              <div className="flex-item heading">Step 3: Final Comments</div>
              <div className="flex-item top">
                <div className="input-group">
                  <label htmlFor="comments"> Comments </label>
                  <textarea name="comments" id="comments" onChange={handleChange} required></textarea>
                </div>
              </div>
              <div className="flex-item bottom">
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
