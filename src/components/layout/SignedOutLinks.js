import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
<ul className="right">
    <li><NavLink to="/SignUp">SignUp</NavLink></li>
    <li><NavLink to="/LogIn">Log In</NavLink></li>
</ul>
  );
};

export default SignedOutLinks;