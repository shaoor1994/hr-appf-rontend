// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS

// const Projects = () => {
//   return (
//     <div className="container">
//       <h1>Team Leads</h1>
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

// export default Projects;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.css';

// const Projects = () => {
//   const [leads, setLeads] = useState([]);
//   const [newLead, setNewLead] = useState({ name: '', email: '' });
//   const [selectedLead, setSelectedLead] = useState(null);
//   const [editLead, setEditLead] = useState({});

//   useEffect(() => {
//     fetchLeads();
//   }, []);

//   const fetchLeads = async () => {
//     try {
//       const response = await axios.get('/api/Projects');
//       setLeads(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const createLead = async () => {
//     try {
//       await axios.post('/api/Projects', newLead);
//       fetchLeads();
//       setNewLead({ name: '', email: '' });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const updateLead = async () => {
//     try {
//       await axios.put(`/api/Projects/${selectedLead.id}`, editLead);
//       fetchLeads();
//       setSelectedLead(null);
//       setEditLead({});
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const deleteLead = async (leadId) => {
//     try {
//       await axios.delete(`/api/Projects/${leadId}`);
//       fetchLeads();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleInputChange = (e) => {
//     setNewLead({ ...newLead, [e.target.name]: e.target.value });
//   };

//   const handleEditInputChange = (e) => {
//     setEditLead({ ...editLead, [e.target.name]: e.target.value });
//   };

//   const selectLead = (lead) => {
//     setSelectedLead(lead);
//     setEditLead(lead);
//   };

//   return (
//     <div className="container">
//       <h1>Projects</h1>
//       <div className="mb-3">
//         <label htmlFor="nameInput" className="form-label">Name:</label>
//         <input type="text" className="form-control" id="nameInput" name="name" value={newLead.name} onChange={handleInputChange} />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="emailInput" className="form-label">Email:</label>
//         <input type="email" className="form-control" id="emailInput" name="email" value={newLead.email} onChange={handleInputChange} />
//       </div>
//       <button className="btn btn-primary mb-3" onClick={createLead}>Add Lead</button>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leads.map((lead) => (
//             <tr key={lead.id}>
//               <td>{lead.name}</td>
//               <td>{lead.email}</td>
//               <td>
//                 <button className="btn btn-sm btn-primary me-2" onClick={() => selectLead(lead)}>Edit</button>
//                 <button className="btn btn-sm btn-danger" onClick={() => deleteLead(lead.id)}>Delete</button>
//              </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {selectedLead && (
//         <div>
//           <h3>Edit Lead</h3>
//           <div className="mb-3">
//             <label htmlFor="editNameInput" className="form-label">Name:</label>
//             <input type="text" className="form-control" id="editNameInput" name="name" value={editLead.name} onChange={handleEditInputChange} />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="editEmailInput" className="form-label">Email:</label>
//             <input type="email" className="form-control" id="editEmailInput" name="email" value={editLead.email} onChange={handleEditInputChange} />
//           </div>
//           <button className="btn btn-primary me-2" onClick={updateLead}>Save</button>
//           <button className="btn btn-secondary" onClick={() => setSelectedLead(null)}>Cancel</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Projects;
// Projects.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Projects = () => {
  const [teamLeads, setTeamLeads] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedLead, setSelectedLead] = useState('');
  const [newProject, setNewProject] = useState({ projectname: '', developername: '' });

  useEffect(() => {
    fetchTeamLeads();
    fetchProjects();
  }, []);

  const fetchTeamLeads = async () => {
    try {
      axios.defaults.baseURL = 'http://localhost:5000';
      const response = await axios.get('/api/teamleads');
      setTeamLeads(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProjects = async (id) => {
    try {
      axios.defaults.baseURL = `http://localhost:5000`;
      const response = await axios.get(`/api/projects`);
      setProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e) => {
    setSelectedLead(e.target.value);
  };

  const createProject = async () => {
    try {
      const { projectname, developername } = newProject;
      axios.defaults.baseURL = 'http://localhost:5000';
      const response = await axios.post('/api/projects', { projectname, developername, teamLeadId: selectedLead });
      fetchProjects();
      setNewProject({ projectname: '', developername: '' });

      if (response.status === 201) {
        toast.success('Project added successfully', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error('Failed to add project', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to add project', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const updateProject = async (id) => {
    const updateProject = async (id) => {
      try {
        const projectToUpdate = projects.find((project) => project.id === id);
        if (!projectToUpdate) {
          toast.error('Project not found', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          return;
        }
    
        // Implement the logic to update the project here
        const updatedProject = { ...projectToUpdate, projectName: 'Updated Project Name', developerName: 'Updated Developer Name' };
        axios.defaults.baseURL = 'http://localhost:5000';
        const response = await axios.put(`/api/projects/${id}`, updatedProject);
        if (response.status === 200) {
          toast.success('Project updated successfully', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          fetchProjects(); // Refresh the projects list after successful update
        } else {
          toast.error('Failed to update project', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      } catch (error) {
        console.error(error);
        toast.error('Failed to update project', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    };
    
  };
  const getProjectById = async () => {
    try {
      const response = await axios.get(`/api/projects/${selectedProject}`);
      console.log(response.data); // Log the project data fetched by ID
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProject = async (id) => {
    //const deleteProject = async (id) => {
      try {
        // Implement the logic to delete the project here
        axios.defaults.baseURL = 'http://localhost:5000';
        const response = await axios.delete(`/api/projects/${id}`);
        if (response.status === 200) {
          toast.success('Project deleted successfully', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          fetchProjects(); // Refresh the projects list after successful delete
        } else {
          toast.error('Failed to delete project', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      } catch (error) {
        console.error(error);
        toast.error('Failed to delete project', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
   // };
    
  };

  return (
    <div className="container">
      <h1>Projects</h1>
      <div className="mb-3">
        <label htmlFor="leadSelect" className="form-label">Select Team Lead:</label>
        <select className="form-select" id="leadSelect" value={selectedLead} onChange={handleSelectChange}>
          <option value="">-- Select Team Lead --</option>
          {teamLeads.map((lead) => (
            <option key={lead.id} value={lead.id}>{lead.name}</option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="projectNameInput" className="form-label">Project Name:</label>
        <input type="text" className="form-control" id="projectNameInput" name="projectname" value={newProject.projectname} onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="developerNameInput" className="form-label">Developer Name:</label>
        <input type="text" className="form-control" id="developerNameInput" name="developername" value={newProject.developername} onChange={handleInputChange} />
      </div>
      <button className="btn btn-primary" onClick={createProject}>Add Project</button>

      <h2>Projects List</h2>
      {/* <table className="table">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Developer Name</th>
            <th>Team Lead</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.projectName}</td>
              <td>{project.developerName}</td>
              <td>{project.teamLead.name}</td>
              <td>
                <button className="btn btn-sm btn-primary" onClick={() => updateProject(project.id)}>Edit</button>
              </td>
              <td>
                <button className="btn btn-sm btn-danger" onClick={() => deleteProject(project.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <table className="table">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Developer Name</th>
            <th>Team Lead</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.projectname}</td>
              <td>{project.developername}</td>
              <td>{project.teamLead ? project.teamLead.name : 'N/A'}</td> Use optional chaining to avoid undefined error
              <td>
                <button className="btn btn-primary btn-sm" onClick={() => updateProject(project.id)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteProject(project.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Projects;
