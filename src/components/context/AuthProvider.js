import React, { createContext } from 'react';
import useFirebase from '../../hook/useFirebase';

export const AuthContext = createContext();

const AuthProvider = (props) => {
    const allcontext = useFirebase();
    return (
        <div>
            <AuthContext.Provider value={allcontext}>
                {props.children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;