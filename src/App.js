import "./App.css";

function App() {
  const handleChange = (e) => {};

  return (
    <main>
      <div className="container">
        <form>
          <div className="form-group">
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
        </form>
      </div>
    </main>
  );
}

export default App;
