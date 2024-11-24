import React, { useState } from 'react';
import './Header.css'; // Import CSS file for styling

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header-container">
      <div className="logo-container">
        {/* Placeholder for Logo */}
        <img src="logo-placeholder.png" alt="Logo" className="logo" />
      </div>

      <nav className="nav-menu">
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/assessments">Assessments</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </nav>

      <div className="user-avatar-container">
        {/* User Avatar */}
        <img
          src="https://via.placeholder.com/40" // Replace with actual user avatar
          alt="User Avatar"
          className="user-avatar"
          onClick={toggleDropdown}
        />

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="dropdown-menu">
            <ul>
              <li><a href="/settings">Settings</a></li>
              <li><a href="/logout">Logout</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
