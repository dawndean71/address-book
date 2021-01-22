import React from "react";
import "./ContactList.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import { useStateValue } from "./StateProvider";
import CreateContact from "./CreateContact";
import ContactListCard from "./ContactListCard";

function ContactList() {
  // pull in the contactCard information so it is displayed on the contactList page
  // const[{ contactCard }, dispatch] = useStateValue(); --> we dont need dispatch right now,
  // we only need it when we want to manipulate the data layer.
  const [{ contactCard }] = useStateValue();

  return (
    <div className="contactList__overlay">
      <div className="contactList">
        <nav className="contactList__nav">
          <div className="contactList__arrow">
            <Link to="/">
              <ArrowBackIcon
                className="contactList__arrowIcon"
                fontSize="large"
              />
            </Link>
          </div>
          <div className="contactList__text">
            <h2>Contacts</h2>
          </div>
          <div className="contactList__add">
            <Link to="/createContact">
              <AddIcon className="contactList__addIcon" fontSize="large" />
            </Link>
          </div>
        </nav>
        <div className="contactList__search">
          {/* Search box */}
          <input
            type="text"
            className="contactList__searchInput"
            placeholder="Search..."
          />
          {/* Search Icon */}
          <SearchIcon className="contactList__searchIcon" />
        </div>

        {/* Section where Contact Cards will be generated */}
        <div className="contactList__contactCards">
          {/* If there are no contacts, show me this - JS6 syntax for ternaary operator statement*/}
          {/* {condition === 0 ? (<what to do if condition is true>) : (<what to do if condition is false>)}
           */}
          {contactCard?.length === 0 ? (
            <div>
              <h2>No Contacts Yet</h2>
              <p>Add a contact by clicking the "+" above.</p>
            </div>
          ) : (
            <div>
              <h2 className="contactList__contact">Your Contacts:</h2>
              {/* list all of the contacts*/}
              {/* for every contact, return the following properties : image, firstName, lastName, email, phone */}
              <div className="contactList__contactCard">
                {contactCard?.map((item) => (
                 
                  // Call ContactListCard Component to render info
                  <ContactListCard
                    image={item.image}
                    firstName={item.firstName}
                    lastName={item.lastName}
                    email={item.email}
                    phone={item.phone}
                  />
                ))}
                <br />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactList;
