import React, { useState } from "react";
import { Link } from "react-router-dom";
import testimonialBg from "../assets/img/testimonial/testimonial-bg.jpg";

import { db } from "../firebase/config";

// images for services
import service1 from "../assets/img/services/services-1.jpg";
import service2 from "../assets/img/services/services-2.jpg";
import service4 from "../assets/img/services/services-4.jpg";

import choose from "../assets/img/chooseus/chooseus-pic.png";
import waste from "../assets/img/waste+oil.jpg";

import Track from "../components/track/Track";

import { doc, setDoc } from "firebase/firestore";

const Home = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

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
      <section
        className="hero spad set-bg"
        data-setbg=".img/hero.jpg"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1598193957036-67845e5ead00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80)`,
          backgroundSize: "cover",
          paddingTop: "60px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="hero__text">
                <span className="hero__label">ASTRO LOGISTICS</span>
                <h2>
                Express Shipping & Cargo Solution
                </h2>
                <Link to="/services" className="primary-btn">
                  <span>View services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Track setData={setData} setLoading={setLoading} />

      <section
        className="services spad"
        style={{
          paddingTop: "50px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5 p-0">
              <div className="section-title">
                <span>What We do?</span>
                <h2>Welcome to the Astro Logistics we are the best.</h2>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-2 p-0">
              <div className="services__top__text">
                <p>
                  We offer a wide range of services including transportation,
                  recycling, and disposal to help your business operate
                  efficiently while reducing its environmental footprint.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 p-0 order-lg-1">
              <div
                className="services__item__pic set-bg"
                data-setbg="img/services/services-1.jpg"
                style={{
                  backgroundImage: `url(${service1})`,
                }}
              ></div>
            </div>

            <div className="col-lg-3 p-0 order-lg-2">
              <div className="services__item__text">
                <div
                  className="services__item__icon"
                  style={{
                    backgroundImage: `url(${service2})`,
                  }}
                ></div>
                <h5>Air Freight</h5>
                <p>
                  Investment Assets Properties have ready several locations
                  around the world to take your free listings for any luxury
                  property you have.
                </p>
                <Link to="/services">Read More</Link>
              </div>
            </div>
            <div className="col-lg-3 p-0 order-lg-3">
              <div
                className="services__item__pic set-bg"
                data-setbg="img/services/services-2.jpg"
                style={{
                  backgroundImage: `url(${service2})`,
                }}
              >
                <img
                  src={require("../assets/img/services/services-2.jpg")}
                  alt=""
                />
              </div>
            </div>

            <div className="col-lg-3 p-0 order-lg-4">
              <div className="services__item__text">
                <div className="services__item__icon"></div>
                <h5>Ship Freight</h5>
                <p>
                  Investment Assets Properties have ready several locations
                  around the world to take your free listings for any luxury
                  property you have.
                </p>
                <Link to="/services">Read More</Link>
              </div>
            </div>
            <div className="col-lg-3 p-0 order-lg-6">
              <div
                className="services__item__pic set-bg"
                data-setbg="img/services/services-3.jpg"
                style={{
                  backgroundImage: `url(${waste})`,
                }}
              ></div>
            </div>

            <div className="col-lg-3 p-0 order-lg-4 order-lg-5">
              <div className="services__item__text services__item__text--bottom">
                <div
                  className="services__item__icon"
                  style={{
                    backgroundImage: `url(${waste})`,
                  }}
                ></div>
                <h5>Non-Hazardous & Hazardous Waste Hauling</h5>
                <p>Non-Hazardous and Hazardous Transportation & Logistics</p>
                <Link to="/services">Read More</Link>
              </div>
            </div>

            <div className="col-lg-3 p-0 order-lg-8">
              <div
                className="services__item__pic set-bg"
                data-setbg="img/services/services-4.jpg"
                style={{
                  backgroundImage: `url(${service4})`,
                }}
              >
                {/* <img
                  src={require("../assets/img/services/services-4.jpg")}
                  alt=""
                /> */}
              </div>
            </div>

            <div className="col-lg-3 p-0 order-lg-7">
              <div className="services__item__text services__item__text--bottom">
                <div className="services__item__icon">
                  <img src="img/services/si-4.png" alt="" />
                </div>
                <h5>Ware Housing</h5>
                <p>
                  Investment Assets Properties have ready several locations
                  around the world to take your free listings for any luxury
                  property you have.
                </p>
                <Link to="/services">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about us and counters */}
      <section className="about spad">
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

                    {/* counter for testing */}
                    {/* <div className="numberBlock">
                      <h2>2488561000</h2>
                    </div> */}
                  </div>
                  <h5>Employees in Team</h5>
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
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter__item">
                  <img src="img/about/ci-3.png" alt="" />
                  <div className="counter__item__num">
                    <h2 className="c_num">1254</h2>
                  </div>
                  <h5>Worldwide Clients</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter__item">
                  <img src="img/about/ci-4.png" alt="" />
                  <div className="counter__item__num">
                    <h2 className="c_num">20254</h2>
                  </div>
                  <h5>Projects Done</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="partner__logo">
            <div className="row">
              <div className="col-lg-12">
                <div className="partner__logo__slider owl-carousel">
                  <div className="partner__logo__item">
                    <Link to="/">
                      <img src="img/about/partner-1.png" alt="" />
                    </Link>
                  </div>
                  <div className="partner__logo__item">
                    <Link to="/">
                      <img src="img/about/partner-2.png" alt="" />
                    </Link>
                  </div>
                  <div className="partner__logo__item">
                    <Link to="/">
                      <img src="img/about/partner-3.png" alt="" />
                    </Link>
                  </div>
                  <div className="partner__logo__item">
                    <Link to="/">
                      <img src="img/about/partner-4.png" alt="" />
                    </Link>
                  </div>
                  <div className="partner__logo__item">
                    <Link to="/">
                      <img src="img/about/partner-5.png" alt="" />
                    </Link>
                  </div>
                  <div className="partner__logo__item">
                    <Link to="/">
                      <img src="img/about/partner-6.png" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="chooseus spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="chooseus__text">
                <div className="section-title">
                  <span>Our Benefit</span>
                  <h2>Why People Choose Us?</h2>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="chooseus__item">
                      <div className="chooseus__item__icon">
                        <img
                          src={require("../assets/img/chooseus/ci-1.png")}
                          alt=""
                        />
                      </div>
                      <div className="chooseus__item__text">
                        <h5>Warehouse Storage</h5>
                        <p>
                          Order tendering is an initial stage of the
                          transportation process.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="chooseus__item">
                      <div className="chooseus__item__icon">
                        <img src="img/chooseus/ci-2.png" alt="" />
                      </div>
                      <div className="chooseus__item__text">
                        <h5>Security Cargo</h5>
                        <p>
                          While your freight is in transit, a 3PL tracks and
                          manages it.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="chooseus__item">
                      <div className="chooseus__item__icon">
                        <img src="img/chooseus/ci-3.png" alt="" />
                      </div>
                      <div className="chooseus__item__text">
                        <h5>Easy Payment</h5>
                        <p>
                          After tendering the load, Astro Logistics will
                          place your.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="chooseus__item">
                      <div className="chooseus__item__icon">
                        <img src="img/chooseus/ci-4.png" alt="" />
                      </div>
                      <div className="chooseus__item__text">
                        <h5>Fast Delivery</h5>
                        <p>
                          Carrier agrees to spot or drop trailers or vehicles
                          at.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="chooseus__pic set-bg"
            data-setbg="img/chooseus/chooseus-pic.png"
            style={{
              backgroundImage: `url(${choose})`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </section>

      <section className="projects spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="section-title">
                <span>About Us</span>
                <h2>What We Have Done!</h2>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="projects__all">
                <Link to="/about" className="primary-btn">
                  <span>About Us</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="projects__slider owl-carousel">
              <div className="col-lg-4">
                <div className="projects__item">
                  <div className="projects__item__pic">
                    <img src="img/projects/projects-1.jpg" alt="" />
                  </div>
                  <div className="projects__item__text">
                    <h5>
                      <span>Freight Carrier</span>
                    </h5>
                    <p>
                      Investment Assets Properties have ready several locations
                      around the world to take your free listings for any luxury
                      property you have.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="projects__item">
                  <div className="projects__item__pic">
                    <img src="img/projects/projects-2.jpg" alt="" />
                  </div>
                  <div className="projects__item__text">
                    <h5>
                      <span>Freight Forwarder</span>
                    </h5>
                    <p>
                      Investment Assets Properties have ready several locations
                      around the world to take your free listings for any luxury
                      property you have.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="projects__item">
                  <div className="projects__item__pic">
                    <img src="img/projects/projects-3.jpg" alt="" />
                  </div>
                  <div className="projects__item__text">
                    <h5>
                      <span>Import-Export</span>
                    </h5>
                    <p>
                      Investment Assets Properties have ready several locations
                      around the world to take your free listings for any luxury
                      property you have.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="projects__item">
                  <div className="projects__item__pic">
                    <img src="img/projects/projects-4.jpg" alt="" />
                  </div>
                  <div className="projects__item__text">
                    <h5>
                      <span>Agricultural Truck</span>
                    </h5>
                    <p>
                      Investment Assets Properties have ready several locations
                      around the world to take your free listings for any luxury
                      property you have.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="testimonial spad set-bg"
        data-setbg="img/testimonial/testimonial-bg.jpg"
        style={{
          backgroundImage: `url(${testimonialBg})`,
          backgroundSize: "cover",
          // height: "100vh",
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

      {/* <section className="latest spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-title">
                <span>Insight and Trends</span>
                <h2>Latest news company</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="latest__item">
                <div
                  className="latest__item__pic set-bg"
                  data-setbg="img/latest/latest-1.jpg"
                >
                  <div className="latest__item__pic__inner">
                    <div className="label">
                      <span>Guides</span>
                    </div>
                    <h5>
                      Expert Tips for Managing Hypoglycemia Lorem ipsum dolor
                    </h5>
                  </div>
                </div>
                <div className="latest__item__text">
                  <ul>
                    <li>
                      by <span>Ryan Casey</span>
                    </li>
                    <li>May 2, 2020</li>
                    <li>20 Comment</li>
                  </ul>
                  <p>
                    If your cat won't stop shredding the toilet paper and
                    urinating on your couch, it could be a result
                  </p>
                  <Link to="/services">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="latest__item">
                <div
                  className="latest__item__pic set-bg"
                  data-setbg="img/latest/latest-2.jpg"
                >
                  <div className="latest__item__pic__inner">
                    <div className="label">
                      <span>Guides</span>
                    </div>
                    <h5>
                      Expert Tips for Managing Hypoglycemia Lorem ipsum dolor
                    </h5>
                  </div>
                </div>
                <div className="latest__item__text">
                  <ul>
                    <li>
                      by <span>Ryan Casey</span>
                    </li>
                    <li>May 2, 2020</li>
                    <li>20 Comment</li>
                  </ul>
                  <p>
                    If your cat won't stop shredding the toilet paper and
                    urinating on your couch, it could be a result
                  </p>
                  <Link to="/services">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="latest__item">
                <div
                  className="latest__item__pic set-bg"
                  data-setbg="img/latest/latest-3.jpg"
                >
                  <div className="latest__item__pic__inner">
                    <div className="label">
                      <span>Guides</span>
                    </div>
                    <h5>
                      Expert Tips for Managing Hypoglycemia Lorem ipsum dolor
                    </h5>
                  </div>
                </div>
                <div className="latest__item__text">
                  <ul>
                    <li>
                      by <span>Ryan Casey</span>
                    </li>
                    <li>May 2, 2020</li>
                    <li>20 Comment</li>
                  </ul>
                  <p>
                    If your cat won't stop shredding the toilet paper and
                    urinating on your couch, it could be a result
                  </p>
                  <Link to="/services">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
