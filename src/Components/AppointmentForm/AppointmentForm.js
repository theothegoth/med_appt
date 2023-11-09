import React, { useState } from 'react'

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedSlot, setSelectedSlot] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointments, setAppointments] = useState([]);

    const handleFormSubmit = (e) => {
      e.preventDefault();
      const appointmentData = { name, phoneNumber,selectedSlot,appointmentDate,doctorName, doctorSpeciality };

       // Save form data to localStorage
    //localStorage.setItem('doctorData', JSON.stringify(doctorData));
    //const test = JSON.parse(localStorage.getItem('doctorData'));
    //console.log("name",test.name);

    // Call the onSubmit function passed as a prop
    onSubmit(appointmentData);
    localStorage.setItem('appointmentData', JSON.stringify(appointmentData));
    const testitem = JSON.parse(localStorage.getItem('appointmentData'));
    console.log("testitem:",testitem);

      setName('');
      setPhoneNumber('');
      setAppointmentDate('');
      setSelectedSlot('');
    };


    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="appointmentDate">Date of Appointment</label>
          <input
            type="date"
            id="appointmentDate"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="selectedSlot">Book Time Slot</label>
          <input
            type="time"
            id="selectedSlot"
            value={selectedSlot}
            onChange={(e) => setSelectedSlot(e.target.value)}
            required
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentForm
