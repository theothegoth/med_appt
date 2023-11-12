import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/Instant Consultation/InstantConsultation';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import BookingConsultation from './Components/BookingConsultation';
import Notification from './Components/Notification/Notification';
import GiveReviews from './Components/ReviewForm/ReviewForm';

function App() {

  return (
    <><meta name="keywords" content="example, website, products, showcase, demonstration"></meta>
    <div className="App">
          <BrowserRouter>
              <Navbar />
              <Notification>
                  <Routes>
                      <Route path="/" element={<Landing_Page />} />
                      <Route path="/Sign_Up/Sign_Up.html" element={<Sign_Up />} />
                      <Route path="/Login/Login.html" element={<Login />} />
                      <Route path="/instant-consultation" element={<InstantConsultation />} />
                      <Route path="/search/doctors" element={<FindDoctorSearch />} />
                      <Route path="/reviews" element={<GiveReviews />} />
                  </Routes>
              </Notification>
          </BrowserRouter>

      </div></>
  );
}

export default App;