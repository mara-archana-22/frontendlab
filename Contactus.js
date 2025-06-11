import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_is',     // from emailjs
      'template_id',    // from emailjs
      form.current,
      'userid'         // from emailjs
    )
    .then(() => {
      alert("Message sent successfully!");
      form.current.reset();
    })
    .catch((error) => {
      alert("Failed to send message, try again.");
      console.error(error);
    });
  };

  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contactus;

