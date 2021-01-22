import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import ContactList from "./ContactList";
import CreateContact from "./CreateContact";
import{ useStateValue } from "./StateProvider"; 
import { auth } from "./firebase";



function App() {
  // implement the data layer - get the user and dispatch from the state
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    // everytime the authentication state changes, get the authUser
    const unsubscribe = auth.onAuthStateChanged((authUser) => { 
      // if the user is authenticated
      if(authUser) {
        // the user is logged in...push them into the data layer 
        dispatch ({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out...
        dispatch ({
          type: "SET_USER",
          user: null,
        });
      }
    });

    // return the unsubscribe value that will detach and 
    // retach a new listener when the application re-renders.
    // clean up operations go here.
    return () => { 
      unsubscribe();
    };

  }, []);

// console.log("userr", user);

 return (
    // <Router> is responsible for rendering everything.
    // It is the logic behind displaying various components.
    <Router>
      <div className="App">
        <Switch>

          {/* Create second path: contactList page */}
          <Route path="/contactList" component={ContactList}>
            {/* Render ContactList here */}
            <ContactList/>          
          </Route>

           {/* Create third path: createContact page */}
           {/* This page is rendered when the user clicks the "AddIcon" */}
           <Route path="/createContact" component={CreateContact}>
            {/* Render CreateContact here */}
            <CreateContact/>          
          </Route> 
          
          {/* Default route */}
          <Route path="/" component={Login}>
            {/* Render Splash Page */}
             <Login />
          </Route> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
