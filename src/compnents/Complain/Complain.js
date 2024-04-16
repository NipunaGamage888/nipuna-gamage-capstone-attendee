import React, { useState } from 'react';
import axios from 'axios';
import './Complain.scss'

function Complain() {
  const [date, setDate] = useState('');
  const [vehicleNum, setVehicleNum] = useState('');
  const [comment, setComment] = useState('');
  const [image, setImage] = useState(null);

  const handleBooking = async () => {
    const formData  ={
        date: date,
        vehicleNum: vehicleNum,
        comment: comment,
        image: image
      };

    try {
      await axios.post('http://localhost:8081/api/inquiryRoutes/sendemail', formData);
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again.');
    }
  };

  return (
    <div className="inquiry">
      <div className="inquiry__form-sec">
        <h1 className="inquiry__heading">Make an Inquiry</h1>
        <form className="inquiry__form">
          <input
            placeholder="Date"
            className="inquiry__input"
            value={date}
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            placeholder="Vehicle Number"
            className="inquiry__input"
            value={vehicleNum}
            type="text"
            onChange={(e) => setVehicleNum(e.target.value)}
          />
          <textarea
            placeholder="Comment"
            className="inquiry__input"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <input
          className="inquiry__input-button"
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </form>
        <div>
          <button className="inquiry__button" onClick={handleBooking}>
            Send Inquiry
          </button>
        </div>
      </div>
    </div>
  );
}

export default Complain;
