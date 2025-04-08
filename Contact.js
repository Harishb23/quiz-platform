import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <label>Name</label>
        <input type="text" placeholder="Your name" required />

        <label>Email</label>
        <input type="email" placeholder="Your email" required />

        <label>Message</label>
        <textarea placeholder="Your message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
