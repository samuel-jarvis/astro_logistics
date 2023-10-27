import React from "react";
import testimonial from "../../assets/img/testimonial/testimonial-bg.jpg";
import { useState } from "react";

import { db } from "../../firebase/config";

import { doc, setDoc } from "firebase/firestore";

const Services = () => {
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
      <div
        className="breadcrumb-option set-bg"
        data-setbg="img/breadcrumb-bg.jpg"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`,
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h2>Our Services</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="services-page spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Our Services</span>
                <h2>What We Do?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="services__page__item">
                <img src="img/services/si-1.png" alt="" />
                <h5>Air Freight</h5>
                <p>
                  Freight Forwarding, parcel delivery and courier from Thailand
                  to worldwide through leading express delivery.
                </p>
                <ul>
                  <li>Consolidation</li>
                  <li>Air Charters</li>
                  <li>Hand Carry</li>
                  <li>Dangerous Goods</li>
                  <li>Packaging</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="services__page__item">
                <img src="img/services/si-2.png" alt="" />
                <h5>Ship Freight</h5>
                <p>
                  We provide Sea Freight Service for large shipment in the
                  competitive shipping price to more than 2,000 cities.
                </p>
                <ul>
                  <li>Sea-Air Service</li>
                  <li>Full Container Load</li>
                  <li>Consolidation</li>
                  <li>Project Cargo</li>
                  <li>Exclusive Sea Charters</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="services__page__item">
                <img src="img/services/si-3.png" alt="" />
                <h5>Non-Hazardous & Hazardous Waste Hauling</h5>
                <p>Non-Hazardous and Hazardous Transportation & Logistics</p>
                <ul>
                  <li>Industrial & Manufacturing </li>
                  <li>Laboratories & Medical</li>
                  <li>Pharmaceuticals</li>
                  <li>Construction </li>
                  <li>Mining</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="services__page__item">
                <img src="img/services/si-4.png" alt="" />
                <h5>Ware Housing</h5>
                <p>
                  We provide Import Service by Air Freight, Sea Freight and
                  Trucking from all over the world.
                </p>
                <ul>
                  <li>Packing and Crating</li>
                  <li>Air and Ocean Charter</li>
                  <li>Exclusive Use Vehicles</li>
                  <li>Customs Clearance</li>
                  <li>Warehousing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="testimonial spad set-bg"
        data-setbg="img/testimonial/testimonial-bg.jpg"
        style={{
          backgroundImage: `url(${testimonial})`,
        }}
      >
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-5">
              <div className="testimonial__text">
                <div className="section-title">
                  <span>Testimonials</span>
                  <h2>Our Custormer Reviews</h2>
                </div>
                <div className="testimonial__slider owl-carousel">
                  <div className="testimonial__item">
                    <img src="img/testimonial/quote.png" alt="" />
                    <p>
                      “Wanted to reach out to praise Matt Nowakowski. Every time
                      we have a critical need, Matt is there to help. He goes
                      above and beyond all the time. Most recently, he assisted
                      in expediting launch orders for (our retail client).”
                    </p>
                    <div className="testimonial__item__author">
                      <div className="testimonial__item__author__pic">
                        <img src="img/testimonial/ta-1.png" alt="" />
                      </div>
                      <div className="testimonial__item__author__text">
                        <h5>Eric Carson</h5>
                        <span>CEO Of Colorlib</span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial__item">
                    <img src="img/testimonial/quote.png" alt="" />
                    <p>
                      “Wanted to reach out to praise Matt Nowakowski. Every time
                      we have a critical need, Matt is there to help. He goes
                      above and beyond all the time. Most recently, he assisted
                      in expediting launch orders for (our retail client).”
                    </p>
                    <div className="testimonial__item__author">
                      <div className="testimonial__item__author__pic">
                        <img src="img/testimonial/ta-1.png" alt="" />
                      </div>
                      <div className="testimonial__item__author__text">
                        <h5>Steve Smith</h5>
                        <span>CEO Of Colorlib</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-lg-5 offset-lg-2">
              <div className="request__form">
                <div className="section-title">
                  <span>Contacts Us</span>
                  <h2>Request A Call Back</h2>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    {/* <div className="col-lg-6 col-md-6 col-sm-6">
                      <input type="text" placeholder="Your Phone" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <select class="nice-select">
                        <option value="">Services</option>
                        <option value="">Services 1</option>
                      </select>
                    </div> */}
                    <div className="col-lg-12">
                      <textarea
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                      <button type="submit" className="site-btn">
                        <span>Submit Now</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about services-about spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>ABOUT US</span>
                <h2>OUR CLIENTS & COUNTERS</h2>
              </div>
            </div>
          </div>
          <div className="counter__content">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter__item">
                  <img src="img/about/ci-1.png" alt="" />
                  <div className="counter__item__num">
                    <h2 className="c_num">9123</h2>
                  </div>
                  <h5>Employees in Team</h5>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p> */}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter__item">
                  <img src="img/about/ci-2.png" alt="" />
                  <div className="counter__item__num">
                    <h2 className="c_num">70102</h2>
                    <strong>km</strong>
                  </div>
                  <h5>Kilometer Travel Weekly</h5>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p> */}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter__item">
                  <img src="img/about/ci-3.png" alt="" />
                  <div className="counter__item__num">
                    <h2 className="c_num">1254</h2>
                  </div>
                  <h5>Worldwide Clients</h5>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p> */}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter__item">
                  <img src="img/about/ci-4.png" alt="" />
                  <div className="counter__item__num">
                    <h2 className="c_num">20254</h2>
                  </div>
                  <h5>Projects Done</h5>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="partner__logo">
            <div className="row">
              <div className="col-lg-12">
                <div className="partner__logo__slider owl-carousel">
                  <div className="partner__logo__item">
                    <a href="/">
                      <img src="img/about/partner-1.png" alt="" />
                    </a>
                  </div>
                  <div className="partner__logo__item">
                    <a href="/">
                      <img src="img/about/partner-2.png" alt="" />
                    </a>
                  </div>
                  <div className="partner__logo__item">
                    <a href="/">
                      <img src="img/about/partner-3.png" alt="" />
                    </a>
                  </div>
                  <div className="partner__logo__item">
                    <a href="/">
                      <img src="img/about/partner-4.png" alt="" />
                    </a>
                  </div>
                  <div className="partner__logo__item">
                    <a href="/">
                      <img src="img/about/partner-5.png" alt="" />
                    </a>
                  </div>
                  <div className="partner__logo__item">
                    <a href="/">
                      <img src="img/about/partner-6.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
