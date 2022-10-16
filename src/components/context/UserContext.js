import React, { Children, createContext } from 'react';
export const AuthContext = createContext();
const UserContext = ({Children}) => {
    const user = {displayName: 'Akash'}
    const authInfo = {user:user};
    return (
        <AuthContext.Provider value = {authInfo}>
            {Children}
        </AuthContext.Provider>
    );
};

export default UserContext;