// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS

// const Developers = () => {
//   return (
//     <div className="container">
//       <h1>Developers</h1>
//       <div className="row">
//         <div className="col-md-6">
//           <p>This is a column with Bootstrap classes.</p>
//         </div>
//         <div className="col-md-6">
//           <p>Another column with Bootstrap classes.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Developers;


import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

const Developers = () => {
  const [leads, setLeads] = useState([]);
  const [newLead, setNewLead] = useState({ name: '', email: '' });
  const [selectedLead, setSelectedLead] = useState(null);
  const [editLead, setEditLead] = useState({});

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const response = await axios.get('/api/Developers');
      setLeads(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createLead = async () => {
    try {
      await axios.post('/api/Developers', newLead);
      fetchLeads();
      toast.success('Team lead added successfully!');
    } catch (error) {
      console.error('Failed to add team lead:', error);

      // Show an error toast notification
      toast.error('Failed to add team lead.');
  }
};

  const updateLead = async () => {
    try {
      await axios.put(`/api/Developers/${selectedLead.id}`, editLead);
      fetchLeads();
      setSelectedLead(null);
      setEditLead({});
    } catch (error) {
      console.error(error);
    }
  };

  const deleteLead = async (leadId) => {
    try {
      await axios.delete(`/api/Developers/${leadId}`);
      fetchLeads();
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setNewLead({ ...newLead, [e.target.name]: e.target.value });
  };

  const handleEditInputChange = (e) => {
    setEditLead({ ...editLead, [e.target.name]: e.target.value });
  };

  const selectLead = (lead) => {
    setSelectedLead(lead);
    setEditLead(lead);
  };

  return (
    <div className="container">
    <ToastContainer />
      <h1>Developers</h1>
      <div className="mb-3">
        <label htmlFor="nameInput" className="form-label">Name:</label>
        <input type="text" className="form-control" id="nameInput" name="name" value={newLead.name} onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label">Email:</label>
        <input type="email" className="form-control" id="emailInput" name="email" value={newLead.email} onChange={handleInputChange} />
      </div>
      <button className="btn btn-primary mb-3" onClick={createLead}>Add Lead</button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>
                <button className="btn btn-sm btn-primary me-2" onClick={() => selectLead(lead)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => deleteLead(lead.id)}>Delete</button>
             </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedLead && (
        <div>
          <h3>Edit Lead</h3>
          <div className="mb-3">
            <label htmlFor="editNameInput" className="form-label">Name:</label>
            <input type="text" className="form-control" id="editNameInput" name="name" value={editLead.name} onChange={handleEditInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="editEmailInput" className="form-label">Email:</label>
            <input type="email" className="form-control" id="editEmailInput" name="email" value={editLead.email} onChange={handleEditInputChange} />
          </div>
          <button className="btn btn-primary me-2" onClick={updateLead}>Save</button>
          <button className="btn btn-secondary" onClick={() => setSelectedLead(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Developers;
