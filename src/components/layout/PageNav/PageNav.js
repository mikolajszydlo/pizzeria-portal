import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNav = () => (
  <nav>
    <NavLink to={`${process.env.PUBLIC_URL}/`}>Home</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/login`}>Login</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/tables`}>Tables</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/waiter`}>Waiter</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/kitchen`}>Kitchen</NavLink>
  </nav>
);

export default PageNav;
