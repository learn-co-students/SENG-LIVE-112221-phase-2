// src/context/user.js
import React from "react";

import { useState } from 'react';

// create a Context Object
// https://reactjs.org/docs/context.html
const UserContext = React.createContext();

function UserProvider({ children }) {
    
    // set up Context value to be stateful
    const [user, setUser] = useState(null);
    
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  }

export { UserContext, UserProvider };