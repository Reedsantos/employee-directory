// nav.js is within dataArea.js
import React from "react";
import SearchBox from "./SearchBox.js";
import "../styles/Nav.css";

// searchBox.js is within nav.js
function Nav({ handleSearchChange }) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="navbar-collapse row" id="navbarNav">
        <SearchBox handleSearchChange={handleSearchChange} />
      </div>
    </nav>
  );
}
export default Nav;