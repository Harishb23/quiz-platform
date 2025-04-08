import React from 'react';
import './Home.css';
import creatorImage from '../assets/creator.jpg';


function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Quiz Mastery Platform</h1>
      <p>
        Quizzes are not just tools for evaluation—they are powerful instruments of learning. At Quiz Mastery, we believe that learning should be fun, interactive, and insightful. Our platform is designed to help users reinforce their knowledge, identify gaps in understanding, and improve retention through engaging quizzes. Whether you're a student preparing for exams, a professional brushing up your skills, or just someone who loves challenges, our quizzes are built to suit all levels and interests.
      </p>
      <p>
        This platform was created with the goal of bringing meaningful learning experiences through bite-sized knowledge checks. Each question has been carefully curated to provide value, and our system is built to offer instant feedback so that users can learn in real-time. With an easy-to-use interface, categorized topics, and a smart progression system, Quiz Mastery is your companion in continuous learning.
      </p>
      <p>
        Features include user authentication (login/signup), real-time scoring, instant feedback on each question, and personalized feedback collection. We also believe in constant improvement—so don’t forget to share your thoughts through our Feedback page!
      </p>
      <p>
        Get started now and make learning a habit. Happy quizzing!
      </p>
      <div className="creator-section">
      <img
      img src="/images/creator.jpg" alt="Creator" className="creator-photo"/>
         
 
      <h2>Meet the Creator</h2>
      <p><strong>Name:</strong>Harish B</p>
        <p><strong>Phone:</strong> +91-7604877735</p>
        <p><strong>Email:</strong> harishbaskar9788@gmail.com</p>
        <p><strong>About:</strong> I’m the creator of Quiz Mastery, passionate about web development and education technology. This project was built using ReactJS for the frontend and Django for the backend. I hope this platform helps you learn and grow!</p>
       </div>
   </div>
  
  );
}

export default Home;

