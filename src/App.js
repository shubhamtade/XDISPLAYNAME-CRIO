import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim()) {
      setError("Both fields are required.");
      setFullName(""); // Ensure full name is not displayed when error exists
      return;
    }

    setFullName(`${firstName.trim()} ${lastName.trim()}`);
    setError(""); // Clear error if submission is valid
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fname">First Name: </label>
          <input
            type="text"
            name="firstname"
            id="fname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lname">Last Name: </label>
          <input
            type="text"
            name="lastname"
            id="lname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {error && <p id="error-message" style={{ color: "red" }}>{error}</p>}
      {fullName && <p>Full Name : {fullName}</p>}
    </div>
  );
}

export default App;
