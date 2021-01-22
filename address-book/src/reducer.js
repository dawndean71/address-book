//  This is where all of the data layer logic happens

// export the initial state
export const initialState = {
  // contact is an empty array at the beginning
  contactCard: [],
};
// We refer to the data layer as 'state' and we manipulate the data

// We will call this reducer function in StateProvider.js
const reducer = (state, action) => {
  // create a switch that will swap between different actions
  switch (action.type) {
    //  updates the user when they log in or out
    case "SET_USER":
      return {
        //the current state
        ...state,
        // set the user to whatever the action.user was >>> eg: action.user can be null or
        // authenticated user profile
        user: action.user,
      };
    //  updates the user when they log in or out
    case "ADD_CONTACT":
      // logic for adding item(contact)
      // return what the new data will look like
      return {
        // return the current state
        ...state,
        // return the current contact list + the new item(contact) that was added
        contactCard: [...state.contactCard, action.item],
      };

    case "EDIT_CONTACT":
      // clone the card, find the index for the card and match it with the action
      let updateContact = [...state.contactCard];

      const index2 = state.contactCard.findIndex(
        (contactItem) => contactItem.phone === action.phone
      );

      // if the index is > 0
      if (index2 >= 0) {
        // then contact exist, edit it
        // 1.redirect to createContact
        // 2.retrieve the stored info
        // 3.upddateContact
      } else {
        alert("somethings wrong...");
      }
      // return what the updated data will look like
      return {
        ...state,
        contactCard: updateContact,
      };

    case "DELETE_CONTACT":
      // cloned contactCard
      let newContact = [...state.contactCard];

      // we are searching for an array index belonging to the phone number.
      // findIndex((search the contactList array) => if the contactCard.id is
      // the same as the action.id remove it.)
      const index = state.contactCard.findIndex(
        (contactItem) => contactItem.phone === action.phone
      );

      // if the index is > 0
      if (index >= 0) {
        // then item exist in the contact list, remove it by using .splice
        //  .splice(the index, # of items to remove at that index)
        newContact.splice(index, 1);
      } else {
        // error msg
        console.warn(
          `Cant remove phone number (phone: ${action.phone}) as it does not exist!`
        );
      }
      // after every action, we must return the updated state
      return {
        ...state,
        contactCard: newContact,
      };

    // if there are no more actions like the kind stated above, then return the
    // current state of the data layer.
    default:
      return state;
  }
};

// export reducer so we can access it in the StateProvider
export default reducer;
