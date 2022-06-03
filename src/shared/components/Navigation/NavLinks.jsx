import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = props => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/startPage" > HOME </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/kitchens">KITCHENS</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/scales">SCALES</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/reasons">REASONS</NavLink>
        </li>
      )}
       {auth.isLoggedIn && (
        <li>
          <NavLink to="/materialTypes">MATERIAL TYPES</NavLink>
        </li>
      )}
      
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">LOGIN</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
