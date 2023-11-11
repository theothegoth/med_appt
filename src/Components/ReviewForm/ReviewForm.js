import React, { useState } from 'react';
import './ReviewForm.css';

function GiveReviews() {
  const [showForm, setShowForm] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0,
  });
  const [isFeedbackSubmitted, setIsFeedbackSubmitted] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.review && formData.rating > 0) {
      setShowWarning(false);
      setSubmittedMessage(formData);
      setIsFeedbackSubmitted(true);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div>
      <h2>Form with Message</h2>
      {!showForm ? (
        <button onClick={handleButtonClick}>Open Form</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Give Your Feedback</h2>
          {showWarning && <p className="warning">Please fill out all fields.</p>}
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={isFeedbackSubmitted}
            />
          </div>
          <div>
            <label htmlFor="review">Review:</label>
            <textarea
              id="review"
              name="review"
              value={formData.review}
              onChange={handleChange}
              disabled={isFeedbackSubmitted}
            />
          </div>
          <div>
            <label htmlFor="rating">Rating:</label>
            <select
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              disabled={isFeedbackSubmitted}
            >
              <option value={0}>Select Rating</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          <button type="submit" disabled={isFeedbackSubmitted}>
            Submit
          </button>
        </form>
      )}
      {submittedMessage && (
        <div>
          <h3>Submitted Message:</h3>
          <p>{submittedMessage.name}</p>
          <p>{submittedMessage.review}</p>
          <p>{submittedMessage.rating}</p>
        </div>
      )}
    </div>
  );
}

export default GiveReviews;
