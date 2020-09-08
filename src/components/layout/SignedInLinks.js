import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
<ul className="right">
    <li><NavLink to="/CreateNote">New Note</NavLink></li>
    <li><NavLink to="/">Log Out</NavLink></li>
    <li><NavLink to="/" className="btn btn-floating green lighten-1">JW</NavLink></li>
</ul>
  );
};

export default SignedInLinks;