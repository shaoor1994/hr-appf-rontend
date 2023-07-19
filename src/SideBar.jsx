import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/teamleads">Team Leads</Link>
        </li>
        <li>
          <Link to="/developers">Developers</Link>
        </li>
        <li>
          <Link to="/hrprojects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
