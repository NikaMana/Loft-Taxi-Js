import React from "react";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
  <div>
    <div>
      <NavLink to="/dashboard/map">MAP</NavLink>
    </div>
    <div>
      <NavLink to="/dashboard/profile">PROFILE</NavLink>
    </div>
    <div>
      <NavLink to="../../Login">EXIT</NavLink>
    </div>
  </div>
  );
};

export default Header;