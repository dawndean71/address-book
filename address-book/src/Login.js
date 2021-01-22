import React, { useState } from "react";
import "./Login.css";
// import ContactList from "./ContactList";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Splash() {
  //initialize useHistory - we want to use this to push the user information into the browser historty
  const history = useHistory();
  // we need to track the users emaila nd pass - so use useState hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // we need to map these values to the input fields

  // login function
  const login = (event) => {
    event.preventDefault();
    //  email and password values from the onChange attribute below
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in successfully, redirect to contactList page.
        history.push("/contactList");
      })
      // else, show alert msg
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault(); // stops the page from refreshing after the form has been submitted.
    // do the login logic..
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // created a user and logged in, redirect to ContactList page
        // Steps to redirect:
        // 1. useHistory hook
        // 2. Listening to login to decide if the user signed in or created a new account
        history.push("/contactList");
      })
      // else catch the error
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login__overlay">
      <div className="login">
        <div className="login__logo">
          <h1>ADDRESS BOOK</h1>
        </div>

        {/* Create a div container to hold the forms: the user
         will be filling out this form and submitting this login form to the database*/}
        <div className="login__container">
          {/* Sign in */}
          <h1>Sign in</h1>
          <form className="login__info">
            {/* Email */}
            <h5>E-mail</h5>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
            />
            {/* Password */}
            <h5>Password</h5>
            {/* retrieve user input by adding the value attribute. This alone wont work, the user
             will not be able to type in the box, so we need to use the "onChange" attribute. */}

            {/* onChange = {grab the event => setEmail(retrieve the users input and push that into the email variable)} */}
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
            />
            {/* onClick="login" function */}
            <p>
              <button
                onClick={login}
                type="submit"
                className="login__signInButton"
              >
                Sign In
              </button>
            </p>
          </form>
          <p>By signing-in you agree to the Fake Terms & Conditions.</p>
          <Link
            to="/contactList"
            onClick={register}
            className="login__registerButton"
            style={{ textDecoration: "none" }}
          >
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Splash;
