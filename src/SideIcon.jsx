import React from 'react';
import './sideicon.css';
const SideIcon = ({ onClick }) => {
  return (
    <div className="side-icon" onClick={onClick}>
      <i className="fas fa-bars"></i>
    </div>
  );
};

export default SideIcon;
