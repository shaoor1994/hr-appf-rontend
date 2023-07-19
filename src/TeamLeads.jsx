import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.css';

const TeamLeads = () => {
  const [newLead, setNewLead] = useState({ name: '', pak: '' });

  const handleInputChange = (e) => {
    setNewLead({ ...newLead, [e.target.name]: e.target.value });
  };

  const createLead = async () => {
    try {
      axios.defaults.baseURL = 'http://localhost:5000';
      await axios.post('/api/teamleads', newLead);
      setNewLead({ name: '', pak: '' });
      toast.success('Team Lead added successfully');
    } catch (error) {
      console.error(error);
      toast.error('Error adding Team Lead');
    }
  };

  return (
    <div className="container">
      <h1>Add Team Lead</h1>
      <div className="mb-3">
        <label htmlFor="nameInput" className="form-label">Name:</label>
        <input type="text" className="form-control" id="nameInput" name="name" value={newLead.name} onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="pakInput" className="form-label">pak:</label>
        <input type="text" className="form-control" id="pakInput" name="pak" value={newLead.pak} onChange={handleInputChange} />
      </div>
      <button className="btn btn-primary" onClick={createLead}>Add Lead</button>
    </div>
  );
};

export default TeamLeads;
