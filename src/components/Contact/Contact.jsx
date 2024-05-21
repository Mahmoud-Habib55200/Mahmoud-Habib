import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6poofrc",
        "template_rfd5k4l",
        form.current,
        "1sPcyfNCocJiIYPGs"
      )
      .then(
        (result) => {
          // console.log(result.text);
          alert("Ok");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        Contact Me
      </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article
            className="contact__option"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Emaill</h4>
            <h5 className="big">mahmoudhabib55200@gmail.com</h5>
            <a target="_blank" href="mailto:mahmoudhabib55200@gmail.com">
              Send a Message
            </a>
          </article>
          <article
            className="contact__option"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messanger</h4>
            <h5>egatortutorials</h5>
            <a target="_blank" href="https://m.me/noor.habib.39545/">
              Send a Message
            </a>
          </article>
          <article
            className="contact__option"
            data-aos="fade-right"
            data-aos-duration="1900"
          >
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>01064501682</h5>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=+01064501682"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* End Of Contact Otions */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            data-aos="flip-left"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Emaill"
            required
            data-aos="flip-left"
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            data-aos="flip-left"
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
