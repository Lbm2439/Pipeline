import React from "react";
import "./header.css";

function Header() {
  return (
    <div>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
          <a href="#">
              <li>Dashboard</li>
            </a>
            <a href="#">
              <li>Calendar</li>
            </a>
            <a href="#">
              <li>Notes</li>
            </a>
            <a href="#">
              <li>Chat (Coming Soon)</li>
            </a>
            <a href="#">
              <li>Log Out</li>
            </a>
          </ul>
        </div>
      </nav>

      <div className="container fluid head">
        <img src="logo.png" alt="logo" />
        <a href="" className="logout">
          Logout
        </a>
      </div>
    </div>
  );
}

export default Header;
