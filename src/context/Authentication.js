import React, { useCallback, useState } from "react";

const AuthenticationContext = React.createContext();


const AuthenticationProvider = ({ children }) => {

    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState();

    const login = useCallback(async (username, password) => {
        return new Promise(resolve => {
            setUser(username);
            setAuthenticated(true);
            resolve(true)
        })
    }, [])

    return <AuthenticationContext.Provider value={{ authenticated, user, login }}>
        {children}
    </AuthenticationContext.Provider>
}

export { AuthenticationContext, AuthenticationProvider }
