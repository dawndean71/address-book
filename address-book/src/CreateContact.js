import React, { useState, useEffect } from "react";
import "./CreateContact.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Route } from "react-router-dom";

function CreateContact() {
  // create a function that fires off/executes
  // when the user clicks the "save"
  // eslint-disable-next-line
  // retrieve current state of contact card
  const [contactCard = {}, dispatch] = useStateValue();

  // Storing values to local storage.
  useEffect(() => {
    const json = JSON.stringify(contactCard);
    localStorage.setItem("contactCard", json);
  }, [contactCard]);

  const [image, setImage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // two states for form validation
  const [emailError, setEmailError] = useState({});
  const [phoneError, setPhoneError] = useState({});

  // Form Validation
  const handleSubmit = (event) => {
    // stop page from refreshing.
    event.preventDefault();

    alert(`Submitting... ${image}`);
    alert(`Submitting... ${firstName}`);
    alert(`Submitting... ${lastName}`);
    alert(`Submitting... ${email}`);
    alert(`Submitting... ${phone}`);

    // error checking -  if valid, no erros exist
    const isValid = formValidation();
  };

  const formValidation = () => {
    // keep track of 2 states: email and phone
    // create two empty objects to set the state of
    // emailError and phoneError
    const emailError = {};
    const phoneError = {};
    let isValid = true;

    // check email syntax
    if (email.trim().length < 5 || !this.state.email.includes("@")) {
      emailError.incorrectSyntax = "invalid email syntax";
      // set boolean flag to false
      isValid = false;
    }
    // check phone syntax
    if (this.state.phone < 10) {
      phoneError.phoneIncorrectLength = "incorrect syntax, try again.";
      isValid = false;
    }

    // update error object
    this.setEmailError(emailError);
    this.setPhoneError(phoneError);
    return isValid;
  };

  //End Form Validation

  // Begin Add contact
  const addContact = () => {
    // manipulate data layer and add a contact to contact list
    // dispatch will fire an object/action and the reducer will listen
    // and check the action type before
    // pushing it into the

    dispatch({
      type: "ADD_CONTACT",
      item: {
        image: image,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
      },
    });

    // Alert message that contact has been added
    alert("Contact saved.");
  };
  // End Add contact

  return (
    <div className="contact__overlay">
      <div className="contact">
        <nav className="contact__nav">
          <div className="contact__arrow">
            <Link to="/contactList">
              <ArrowBackIcon className="contact__arrowIcon" fontSize="large" />
            </Link>
          </div>
          <div className="contact__text">
            <h2>New Contact</h2>
          </div>

          <div className="contact__save">
            {/* Create a save function that will save all contact info */}
            <button
              onClick={addContact}
              className="contact__saveButton"
              type="submit"
            >
              <span>Save</span>
            </button>
          </div>
        </nav>

        {/* Form:; First, Last, Email, Phone,  */}
        {/* Create a div container to hold the form: the user
         will be filling out this form and submitting this login 
         form to the database*/}
        <div className="contact__container">
          <form onSubmit={handleSubmit}>
            {/* Image */}
            <div className="contact__image">
              {/* insert add icon on top of image */}
              <img
                src="https://www.edmundsgovtech.com/wp-content/uploads/2020/01/default-picture_0_0.png"
                alt=""
              />
            </div>
            {/* {(!(firstName.length===0) ? ( */}
            {/* First Name */}
            <div className="contact__firstName">
              <label htmlFor="First"> First Name: </label>
              <input
                type="text"
                name="First"
                placeholder="John"
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
            </div>
            {/* ) : (alert('*Enter first name of contact')
            ))} */}
            {/*Last Name */}
            <div className="contact__lastName">
              <label htmlFor="Last"> Last Name: </label>
              <input
                type="text"
                name="Last"
                placeholder="Doe"
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>
            {/* Email */}
            <div className="contact__email">
              <label htmlFor="Email">E-mail:</label>
              <input
                type="email"
                value={email}
                name="Email"
                placeholder="john.doe@gmail.com"
                onChange={(event) => setEmail(event.target.value)}
                pattern=""
                required
              />
              <br />
              {/* error msg email */}
              {/* // use Object.keys(pass email error object) -> this will */}
              {/* // return ann array of property names within this object. */}
              {/* // Map (iterate) over the array to get the key */}
              {Object.keys(emailError).map((key) => {
                return;
                <div key={key} style={{ fontSize: 8, color: "red" }}>
                  {emailError[key]}
                </div>;
              })}
            </div>
            {/*Phone Number */}
            <div className="contact__phone">
              <label htmlFor="Phone">Phone Number:</label>
              <input
                type="tel"
                name="Phone"
                value={phone}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="000-000-0000"
                onChange={(event) => setPhone(event.target.value)}
              />
              <br />

              {/* error msg phone number*/}
              {/* // use Object.keys(pass phone error object) -> this will */}
              {/* // return ann array of property names within this object. */}
              {/* // Map (iterate) over the array to get the key */}
              {Object.keys(phoneError).map((key) => {
                return;
                <div key={key} style={{ fontSize: 8, color: "red" }}>
                  {phoneError[key]}
                </div>;
              })}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateContact;
