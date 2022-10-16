import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/UserContext";
 

const Header = () => {
  const abc =useContext(AuthContext);
  console.log('context', abc)
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
      <Link className="btn btn-ghost normal-case text-xl" to='/'>Aowesome Auth</Link> 
        <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/login'>login</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/register'>register</Link>
      </div>
    </div>
  );
};

export default Header;
