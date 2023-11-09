import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('appointmentData')).doctorName;
    //console.log("storedDoctorData :",storedDoctorData.name);
    const storedAppointmentData = JSON.parse(localStorage.getItem('appointmentData'));


    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) {setDoctorData(storedDoctorData);}

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }
    console.log("storedAppointmentData.doctorName :",storedAppointmentData.doctorName);
  }, []);

 

console.log("doctorData :",doctorData);

  return (
    <div>
      <Navbar ></Navbar>
      {children}
      {isLoggedIn && appointmentData && (
        <>
          <div className="appointment-card">
            <div className="appointment-card__content">
              <h3 className="appointment-card__title">Appointment Details</h3>
              <p className="appointment-card__message">
                <strong>Doctor:</strong> {doctorData}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Notification;
