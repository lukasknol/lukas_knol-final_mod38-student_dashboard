import React from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { useMediaQuery } from '@material-ui/core';

export const NavItem = ({ name, id }) => {
  let path = '';
  const isActive = useMediaQuery('(max-width:1028px)');

  if (id === 'student') path = `/student/${name}`;
  if (id === 'assignment') path = `/assignment/${name}`;

  return isActive ? (
    // Navigation for tablet and mobile
    <NavLink className="nav-item" to={path}>
      <Dropdown.Item href={path}>{name}</Dropdown.Item>
    </NavLink>
  ) : (
    
    // Navigation for desktop
    <NavLink
      exact
      style={{ textDecoration: 'none' }}
      className="nav-item"
      activeClassName="is-active"
      to={path}
    >
      <li>{name}</li>
    </NavLink>
  );
};
