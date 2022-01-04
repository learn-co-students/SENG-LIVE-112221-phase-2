import React from "react";

import { Link, NavLink } from 'react-router-dom';

function Header({
  title,
  logo = "//",
  isDarkMode,
  onDarkModeClick,
  currentUser,
  setCurrentUser,
}) {
  function login() {
    fetch("http://localhost:3000/login", {
      method: "POST",
    })
      .then((r) => r.json())
      .then(setCurrentUser);
  }

  function logout() {
    setCurrentUser(null);
  }

  return (
    <header>
      <h1>
        <span className="logo">{logo}</span>
        <Link to="/">{title}</Link> 
      </h1>
      <nav>
        
        {/* Add NavLinks to set exact active styles */}
        <NavLink exact className="button" to="/projects">
          All Projects
        </NavLink>
        <NavLink exact className="button" to="/projects/new">
          Add Project
        </NavLink>
        {currentUser ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
        <button onClick={onDarkModeClick}>
          {isDarkMode ? (
            <span role="img" label="sun">
              ☀️
            </span>
          ) : (
            <span role="img" label="moon">
              🌙
            </span>
          )}
        </button>
      </nav>
    </header>
  );
}

export default Header;
