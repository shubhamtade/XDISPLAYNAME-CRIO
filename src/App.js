import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showText, setShowText] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowText(true);
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name : </label>
          <input
            required
            name="firstname"
            id="fname"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name : </label>
          <input
            required
            name="lastname"
            id="lname"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>

      <div>
        {showText ? (
          <p>
            Full Name : {firstName} {lastName}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default App;
