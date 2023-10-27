import { Link } from "react-router-dom";
import choose from "../assets/img/chooseus/chooseus-pic.png";

const About = () => {
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
                <h2>About Us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="about-company spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-title">
                <h2>Welcome to the Freight Broker company of delivery</h2>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-2">
              <div className="about__company__title">
                <p>
                We are a freight forwarding and logistics company with deep competencies in Air cargo Freight , Ocean Freight, DHL Express Discounts Service, E-commerce Logistics, Import and Export documentation, door delivery and pick-up services, Customs clearing and warehousing.
                </p>
              </div>
            </div>
          </div>
          <div className="about__company__pic">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <img src="img/about/ac-1.jpg" alt="" />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <img src="img/about/ac-2.jpg" alt="" />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <img src="img/about/ac-3.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="about__company__counter">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter__item">
                  <img src="img/about/ci-1.png" alt="" />
                  <div className="counter__item__num">
                    <h2 className="c_num">9123</h2>
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
                        <img src="img/chooseus/ci-1.png" alt="" />
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
                          After tendering the load, freight brokers will place
                          your.
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

      <section className="history spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="history__item">
                <span>1</span>
                <h2>History</h2>
                <p>
                  Founded in 2009 with the goal of providing innovative,
                  sustainable solutions for freight and logistics.
                  Since then, we have grown to become a leading provider of
                  comprehensive services for a wide range of industries.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="history__item">
                <span>2</span>
                <h2>Mission</h2>
                <p>
                  To provide sustainable freight and logistics solutions that meet
                  the unique needs of our clients. We are committed to
                  delivering exceptional service, protecting the environment,
                  and ensuring compliance with all applicable regulations.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="history__item">
                <span>3</span>
                <h2>Vision</h2>
                <p>
                  To be the leading provider of innovative and sustainable waste
                  management solutions. We strive to continually improve our
                  services and invest in the latest technologies to ensure that
                  we are always delivering the best possible results for our
                  clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="callto spad set-bg"
        data-setbg="img/call-bg.jpg"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1532635042-a6f6ad4745f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`,
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <div className="callto__text text-center">
                <h2>
                  Looking to learn more about our services or have a question?
                  Contact us today!
                </h2>

                <Link to="/contact" className="primary-btn">
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="team spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-title">
                <span>Our expert</span>
                <h2>Meet Our Team Member</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="team__item set-bg"
                data-setbg="img/team/team-1.jpg"
              >
                <div className="team__item__title">
                  <h6>
                    Milley cyrus / <span>Support</span>
                  </h6>
                </div>
                <ul className="team__item__social">
                  <li>
                    <a href="#">
                      <span className="social_facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="social_twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="social_linkedin"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="team__item set-bg"
                data-setbg="img/team/team-2.jpg"
              >
                <div className="team__item__title">
                  <h6>
                    John Smith / <span>Support</span>
                  </h6>
                </div>
                <ul className="team__item__social">
                  <li>
                    <a href="#">
                      <span className="social_facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="social_twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="social_linkedin"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="team__item set-bg"
                data-setbg="img/team/team-3.jpg"
              >
                <div className="team__item__title">
                  <h6>
                    Becky Taylor / <span>Support</span>
                  </h6>
                </div>
                <ul className="team__item__social">
                  <li>
                    <a href="#">
                      <span className="social_facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="social_twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="social_linkedin"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="team__item set-bg"
                data-setbg="img/team/team-4.jpg"
              >
                <div className="team__item__title">
                  <h6>
                    Martin Tom / <span>Support</span>
                  </h6>
                </div>
                <ul className="team__item__social">
                  <li>
                    <a href="#">
                      <span className="social_facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="social_twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="social_linkedin"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
