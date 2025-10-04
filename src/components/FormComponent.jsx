import "./FormComponent.css";
import { use, useState } from "react";
export default function FormComponent() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("Username must be between 3 and 25 characters.");
  const [errorEmail, setErrorEmail] = useState("Email is invalid");
  const [errorPassword, setErrorPassword] = useState('Password has 8 characters or longer. And it must contain 1 lowercase character, 1 uppercase character, 1 number, and at least 1 special character in this set (!@#$%^&*).');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("Please enter the password again.");

  return (
    <>
      <div className="container">
        <form className="form">
          <h2>Sign Up</h2>
          <div className="form-control">
            <label>Username:</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <small>{errorUserName}</small>
          </div>
          <div className="form-control">
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <small>{errorEmail}</small>
          </div>
          <div className="form-control">
            <label>Password:</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <small>{errorPassword}</small>
          </div>
          <div className="form-control">
            <label>Confirm Password:</label>
            <input
              type="text"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <small>{errorConfirmPassword}</small>
          </div>
          <button type="submit">SIGN UP</button>
        </form>
      </div>
    </>
  );
}
