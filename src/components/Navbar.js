import React from 'react';
import '../styling/globals.css';
import { NavItem } from './NavItem';
import useDashBoard from './useDashBoard';
import { NavLink } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import { useMediaQuery } from '@material-ui/core';

const Navbar = () => {
  const { students, assignments } = useDashBoard();
  const isActive = useMediaQuery('(max-width:1028px)');

  // Students routing
  const studentRoutes = students.map((person, index) => {
    return <NavItem name={person} id={'student'} key={index} />;
  });

  // Assignments routing
  const assignmentRoutes = assignments.map((assignment, index) => {
    return <NavItem name={assignment} id={'assignment'} key={index} />;
  });

  return (
    <nav>
      {isActive ? (
        // Render navbar for Mobile
        <div className="nav-container">
          <div className="students-overview-average">
            {/* Button 1 */}
            <NavLink exact className="nav-item" to="/">
              {' '}
              <Button href="/" variant="primary" id="dropdown-basic-button">
                Alle studenten
              </Button>
            </NavLink>
            {/* button 2 */}
            <DropdownButton id="dropdown-basic-button" title="Studenten">
              {studentRoutes}
            </DropdownButton>
            {/* button 3 */}
            <DropdownButton id="dropdown-basic-button" title="Opdrachten">
              {assignmentRoutes}
            </DropdownButton>
            {/* button 4 */}
          </div>
        </div>
      ) : (
        //Render navbar for desktop
        <div className="nav-container-desktop">
          <div className="nav-wrapper">
            <div className="nav-group">
              <h3>Overzicht</h3>
              <ul className="all-students">
                <li>
                  <NavLink
                    exact
                    className="nav-item"
                    activeClassName="is-active"
                    to="/"
                  >
                    Alle studenten
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="nav-group">
              <h3>Studenten</h3>
              <ul>{studentRoutes}</ul>
            </div>
            <div className="nav-group">
              <h3>Opdrachten</h3>
              <ul className="nav-assignments">{assignmentRoutes}</ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
