import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/UserContext";
 

const Header = () => {
  const {user,logOut} =useContext(AuthContext);
  // console.log('context', user.displayName)
  const handleLogOut = () =>{
           logOut()
           .then( () =>{})
           .catch(error => console.error(error))
  }
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
      <Link className="btn btn-ghost normal-case text-xl" to='/'>Aowesome Auth</Link> 
        <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/login'>login</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/register'>register</Link>
      {
        user?.email && <span>Welcome {user.email}</span>
      }
    { 
     user?.email ?
    <button onClick={handleLogOut} className="btn btn-sm">LogOut</button>
  : <Link to ='/login'>
  <button  className="btn btn-sm">LogIn</button>
  </Link>
  }

      </div>
    </div>
  );
};

export default Header;
