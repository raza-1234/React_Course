import React, {createContext} from "react";

const UserContext = createContext({
  name: 'Ahmed Raza',
  email: 'arbutt863@gmail.com'
})

export default UserContext;