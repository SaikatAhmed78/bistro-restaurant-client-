import React, {  createContext, useState } from 'react';

export const AuthContext = createContext(null); 

const AuthProvider = ({children}) => {

    // State
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


// pass value
 const authInfo = {
    user,
    loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;