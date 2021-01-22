import React, { useState, useEffect } from "react";
import "./ContactListCard.css";
import { useStateValue } from "./StateProvider";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";

function ContactListCard({ image, firstName, lastName, email, phone }) {
  // retrieve the current state of the contactCard
  // we are going to use DISPATCH to send out the action for the reducer to listen
  const [{ contactCard }, dispatch] = useStateValue();

  // retrieving values from local storage.
  useEffect(() => {
    const json = JSON.stringify(contactCard);
    localStorage.getItem("contactCard", json);
  }, [contactCard]);

  // const [image, setImage] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");

  // removeFromCart function here
  const deleteContact = () => {
    // alert that contact has been removed
    alert("Contact removed.");

    // remove item from storage
    dispatch({
      type: "DELETE_CONTACT",
      phone: phone,
    });
  };

  // edit contact function here
  const editContact = () => {
    // we want to manipulate data layer again
    // get the items, update them, then dispatch an action
    dispatch({
      type: "EDIT_CONTACT",
      item: {
        image: image,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
      },
    });
  };

  //retrieve the item from local store
  // localStorage.getItem(image);
  // localStorage.getItem(firstName);
  // localStorage.getItem(lastName);
  // localStorage.getItem(email);
  // localStorage.getItem(phone);
  // // remove from local store
  // localStorage.removeItem(image);
  // localStorage.removeItem(firstName);
  // localStorage.removeItem(lastName);
  // localStorage.removeItem(email);
  // localStorage.removeItem(phone);

  return (
    //   Values of all props are created here.
    <div className="contactListCard">
      {/* Display image in one div */}
      <div className="contactListCard__image">
        <img
          src="https://www.edmundsgovtech.com/wp-content/uploads/2020/01/default-picture_0_0.png"
          alt=""
        />
      </div>

      {/* Display the contact info - first, last name,  */}
      {/* email and phone in one div */}
      <div className="contactListCard__info">
        <div className="contactListCard__fullName">
          <p className="contactListCard__firstName">{firstName}</p>
          <p className="contactListCard__lastName">{lastName}</p>
        </div>
        <p className="contactListCard__email">{email}</p>
        <p style={{ float: "left" }} className="contactListCard__phone">
          {phone}
        </p>
      </div>

      {/* Delete and Edit Button */}
      <div className="contactListCard__buttons">
        {/* redirect */}
        <Link to="/createContact">
          <EditIcon
            onClick={editContact}
            className="contactListCard__editButton"
            type="submit"
          />
        </Link>
        <DeleteForeverIcon
          onClick={deleteContact}
          className="contactListCard__deleteButton"
          type="submit"
        />
      </div>
    </div>
  );
}
export default ContactListCard;
