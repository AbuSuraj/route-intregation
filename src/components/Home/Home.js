import React, { useContext } from 'react';
import { AuthContext } from '../context/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext)
    // console.log(user)
    return (
        <div>
            <h1>This is home for </h1>
        </div>
    );
};

export default Home;