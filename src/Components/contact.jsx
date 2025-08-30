import React from 'react';
import './contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebookMessenger } from 'react-icons/fa';
import { ImWhatsapp } from 'react-icons/im';

const contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            {/* <AiOutlineMail className="contact_option-icon"/> */}
            <h4>Email</h4>
            <h5>ishanmajumder28@gmail.com</h5>
            <a href="mailto: ishanmajumder28@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            {/* <FaFacebookMessenger className="contact_option-icon"/> */}
            <h4>Messenger</h4>
            <h5>Ishan Majumder</h5>
            <a href="https://www.facebook.com/profile.php?id=100083306663393" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            {/* <ImWhatsapp className="contact_option-icon"/> */}
            <h4>Whatsapp</h4>
            <h5>+918100486674</h5>
            <a href="https://web.whatsapp.com/" target="_blank">Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Enter Your Email" reuqired />
          <textarea name="message" roews="7" placeholder="Your Message" required ></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact;
