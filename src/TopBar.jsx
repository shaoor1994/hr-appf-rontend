import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container">
        <Link to="/" className="navbar-brand">HR Projects</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/teamleads" className="nav-link">Team Leads</Link>
            </li>
            <li className="nav-item">
              <Link to="/developers" className="nav-link">Developers</Link>
            </li>
            <li className="nav-item">
              <Link to="/hrprojects" className="nav-link">HR Projects</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
