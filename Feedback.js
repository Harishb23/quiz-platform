import './Feedback.css';

function Feedback() {
  return (
    <div className="feedback-form-container">
      <h2>Quiz Feedback</h2>
      <form className="feedback-form">
        <label>Name</label>
        <input type="text" placeholder="Enter your name" />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Rate the Quiz</label>
        <select>
          <option value="">Select</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Average">Average</option>
          <option value="Poor">Poor</option>
        </select>

        <label>Comments</label>
        <textarea placeholder="Write your feedback here..."></textarea>

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default Feedback;
