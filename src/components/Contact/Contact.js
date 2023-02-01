import "./Contact.scss";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gawxh0v",
        "template_v5f5hvb",
        form.current,
        "SwckExLAQjovjVSDo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setDone(true);
  };

  setTimeout(() => {
    setDone(false);
  }, 3000);

  return (
    <div className="container contact" id="contact">
      <div className="left">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.4517384450937!2d73.14753561449882!3d19.21913448700587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79445ccf6db0f%3A0x8d30730e7460f188!2sJanseva%20Hindi%20High%20School!5e0!3m2!1sen!2sin!4v1663410619249!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{border:0, borderRadius:"5px", padding:"1rem 2rem"}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="right">
        <form autoComplete="off" ref={form} onSubmit={sendEmail} method="Post">
          <h1 className="heading">Contact Me</h1>

          <input type="text" name="user_name" placeholder="Name" required />

          <input type="email" name="user_email" placeholder="Email" required />

          <textarea
            name="message"
            placeholder="Message"
            id=""
            cols="30"
            rows="5"
            required
          />

          <input type="submit" value="Send" className="btn btn-1" />
          <div>{done && <span>Thanks For Contacting Me</span>}</div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
