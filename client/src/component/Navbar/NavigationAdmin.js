import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import heroImage from "../../images/admin-image.png"; // Import the image

import "./Navbar.css";

export default function NavbarAdmin() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="header">
        <NavLink to="/">
          <i className="fas fa-user-circle" /> ADMIN USER
        </NavLink>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/Verification" activeClassName="nav-active">
            Verification
          </NavLink>
        </li>
        <li>
          <NavLink to="/AddCandidate" activeClassName="nav-active">
            Add Candidate
          </NavLink>
        </li>
        <li>
          <NavLink to="/Results" activeClassName="nav-active">
            Results
          </NavLink>
        </li>
        <li className="profile-image-container" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <img src={heroImage} alt="Profile" className="profile-image" />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <NavLink to="/Profile" className="dropdown-item" >Profile</NavLink>
              <NavLink to="/Logout" className="dropdown-item">Logout</NavLink>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}
