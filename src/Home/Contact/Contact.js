import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_80l3gz5",
        "template_ydz1ib9",
        form.current,
        "user_l6TPMkIw8KBrSA6qK49bZ"
      )
      .then(
        (result) => {
          alert("Email sent Successfully");
        },
        (error) => {
          console.log(error.text);
          alert(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div id="contact" className="about-container">
      <div className="container text-white contact">
        <div className="d-flex justify-content-center mb-5">
          <h3 className="heading text-white">CONTACT ME</h3>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col-md-5 col-12">
            <div className="mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3595/3595587.png"
                alt=""
              />
              <span>Ramnagar, Sadar, Dinajpur-5200</span>
            </div>
            <div className="mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/552/552486.png"
                alt=""
              />
              <span>arif.hstu.hossain@gmail.com</span>
            </div>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/724/724664.png"
                alt=""
              />
              <span>+8801737345559</span>
            </div>
          </div>
          {/* contact form */}
          <div className="col-md-7 col-12">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <input
                  type="text"
                  className="w-100"
                  name="name"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="mb-3 d-flex">
                <input
                  type="email"
                  name="email"
                  className="w-50 me-2"
                  placeholder="Email"
                  required
                />
                <input
                  type="number"
                  name="phone"
                  className="w-50"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="w-100"
                  name="message"
                  rows="6"
                  placeholder="Enter Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="regular-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
