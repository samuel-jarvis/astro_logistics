import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase/config";

const Contact = () => {
  const [data, setData] = useState("");

  // state for form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Please fill all fields.");
      return;
    }

    console.log("name", name);
    console.log("email", email);
    console.log("message", message);

    const data = {
      name,
      email,
      message,
    };

    console.log("data", data);

    // save to firebase using v9
    try {
      const docRef = doc(db, "contacts", data.name);
      await setDoc(docRef, data);

      console.log("Document written with ID: ", docRef.id);

      alert("Message sent successfully.");

      setName("");
      setEmail("");
      setMessage("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div>
      {" "}
      <section className="contact spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact__map">
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49116.39176087041!2d-86.41867791216099!3d39.69977417971648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca48c841038a1%3A0x70cfba96bf847f0!2sPlainfield%2C%20IN%2C%20USA!5e0!3m2!1sen!2sbd!4v1586106673811!5m2!1sen!2sbd"
                  height="460"
                  // style="border: 0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe> */}

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5907.325665244002!2d-89.09773831816726!3d42.24301571028995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8808bfe257c32817%3A0x8947cac445d902c6!2sBlackhawk%20Park%20Ave%2C%20Rockford%2C%20IL%2061104%2C%20USA!5e0!3m2!1sen!2sng!4v1683469600372!5m2!1sen!2sng"
                  height="450"
                  // style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="contact__text">
                <div className="section-title">
                  <span>Information</span>
                  <h2>Contact Details</h2>
                </div>
                <ul>
                  <li>
                    <div className="contact__widget__icon">
                      <span className="icon_pin"></span>
                    </div>
                    <div className="contact__widget__text">
                      <h6>Address</h6>
                      <p>530 Blackhawk Park Avenue Rockford, IL 61104</p>
                    </div>
                  </li>
                  <li>
                    <div className="contact__widget__icon">
                      <span className="icon_phone"></span>
                    </div>
                    <div className="contact__widget__text">
                      <h6>Phone Number</h6>
                      <p>(331) 330-7043</p>
                      <br />
                      <p>(510) 485-9219</p>
                    </div>
                  </li>
                  <li>
                    <div className="contact__widget__icon">
                      <span className="icon_mail"></span>
                    </div>
                    <div className="contact__widget__text">
                      <h6>Email Address</h6>
                      <a
                        className="emailLink"
                        href="mailto:support@astrologixticssolutions.co"
                      >
                        support@astrologixticssolutions.co
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="contact__form">
                <div className="section-title">
                  <span>Get a quote</span>
                  <h2>Get In Touch</h2>
                </div>
                <p>
                  Looking to learn more about our services or have a question?
                  Contact us today!
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-12">
                      <textarea
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                      <button type="submit" className="site-btn">
                        <span>Send Message</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
