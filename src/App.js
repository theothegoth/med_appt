import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/Instant Consultation/InstantConsultation';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
              <Route path="/" element={<Landing_Page/>}/>
              <Route path="/Sign_Up/Sign_Up.html" element={<Sign_Up/>}/>
              <Route path="/Login/Login.html" element={<Login/>}/>
              <Route path="/instant-consultation" element={<InstantConsultation />} />
              <Route path="/search/doctors" element={<FindDoctorSearch />} />
              </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;