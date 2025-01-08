import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setfullName] = useState("");
  const [showText, setShowText] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName === "" || lastName === "") {
      setError("Both fields are required.");
      setShowText(false);
    } else {
      setShowText(true);
      setfullName(`${firstName} ${lastName}`);
      setError("");
    }
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fname">First Name : </label>
          <input
            type="text"
            required
            name="firstname"
            id="fname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lname">Last Name : </label>
          <input
            type="text"
            required
            name="lastname"
            id="lname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>{showText && <p>Full Name : {fullName}</p>}</div>
    </div>
  );
}

export default App;
