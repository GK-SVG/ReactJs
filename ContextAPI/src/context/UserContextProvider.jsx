import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) =>{
    const [userData, setUserData] = React.useState(null)

    return (
        <UserContext.Provider value={{userData, setUserData}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;