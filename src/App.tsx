import * as React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <div className="topheader">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
              <img
                width="200px"
                src="https://www.caddcentre.com/images/logo.png"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Our Programs
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Meachanical CADD
                    </a>
                    <a className="dropdown-item" href="#">
                      Civil Design
                    </a>
                    <a className="dropdown-item" href="#">
                      Building Design
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Institutional Training
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">
                    Corporate Training
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    For Governmen
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Plan Your Career
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Franchise
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.caddcentre.com/images/banner/home/cadd-leadership-banner.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.caddcentre.com/images/banner/home/experts2020-2.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.caddcentre.com/images/banner/home/cadd-leadership-banner.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12 col-md-12">
            <h1>Plan Your Career Now.</h1>
            <p className="pg">
              Plan Your Career CADD Centre’s very owned tool for students to
              find the right career choose one that suits your interests
              <br />
              aptitudes work-related values and personality type.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-6 col-md-6">
            <div className="row">
              <div className="col-12 col-lg-6 col-md-6">
                <div className="redbox">
                  <img src="https://www.caddcentre.com/images/explore.png" />
                  <span>Explore Engineering</span>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-md-6">
                <div className="redbox">
                  <img src="https://www.caddcentre.com/images/career.png" />
                  <span>The Career ToolBox</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6 col-md-6">
                <div className="redbox">
                  <img src="https://www.caddcentre.com/images/apptitude.png" />
                  <span>Free Aptitude Test </span>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-md-6">
                <div className="redbox">
                  <img src="https://www.caddcentre.com/images/offers.png" />
                  <span>Seasonal Offers</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-md-6">
            <div className="formbox">
              <form method="pos" name="">
                <input
                  type="text"
                  name="name"
                  placeholder="Username"
                  className="textbox"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Password"
                  className="textbox"
                />
                <select className="textbox">
                  <option value="">--PYC User</option>
                </select>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
