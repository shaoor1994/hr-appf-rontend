// import React from 'react';
// import { BrowserRouter as Router, Switch, Route,  Routes, } from 'react-router-dom';
// import TeamLeads from './TeamLeads';
// import Developers from './Developers';
// import Projects from './HrProjects';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route exact path="/teamleads" element={<TeamLeads />} />
//         <Route exact path="/developers" element={<Developers />} />
//         <Route exact path="/hrprojects" element={<Projects />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidebar from './SideBar';
// import TeamLeads from './TeamLeads';
// import Developers from './Developers';
// import HRProjects from './HrProjects';

// const App = () => {
//   return (
//     <Router>
//       <div className="container">
//         <Sidebar />
//         <Routes>
//           <Route path="/" element={<HRProjects />} />
//           <Route path="/teamleads" element={<TeamLeads />} />
//           <Route path="/developers" element={<Developers />} />
//           <Route path="/hrprojects" element={<HRProjects />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidebar from './SideBar';
// import TeamLeads from './TeamLeads';
// import Developers from './Developers';
// import Projects from './HrProjects';
// import SideIcon from './SideIcon';
// import './sideicon.css';
// const App = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const handleSideIconClick = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <Router>
//       <div>
//         <div className="top-bar">
//           <SideIcon onClick={handleSideIconClick} />
//           <h1>Top Bar Title</h1>
//         </div>
//         <div className={`container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
//           <Sidebar />
//           <Routes>
//             <Route path="/" element={<Projects />} />
//             <Route path="/teamleads" element={<TeamLeads />} />
//             <Route path="/developers" element={<Developers />} />
//             <Route path="/hrprojects" element={<Projects />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './SideBar';
import TeamLeads from './TeamLeads';
import Developers from './Developers';
import Projects from './HrProjects';
import TopBar from './TopBar';

const App = () => {
  return (
    <Router>
      <div>
        <TopBar />
        <div className="container">
          {/* <Sidebar /> */}
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/teamleads" element={<TeamLeads />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/hrprojects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
