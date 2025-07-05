/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import GoogleTranslate from "../goggleTranslate/GoogleTranslate.js";



class Navbar extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "logo";
    let anchor = "#";
    return (
      <div className="navbar-area">
        {/* topbar end*/}
        {/* <div className="topbar-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-7 align-self-center">
                <div className="topbar-menu text-md-left text-center">
                  <ul className="align-self-center">
                    <li>
                      <Link to="/author">Author</Link>
                    </li>
                    <li>
                      <Link to="/cat-page">Tech News</Link>
                    </li>
                    <li>
                      <Link to="/cat-fashion">Fashion</Link>
                    </li>
                    <li>
                      <Link to="/cat-life-style">Life Style</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-5 mt-2 mt-md-0 text-md-right text-center">
                <div className="topbar-social">
                  <div className="topbar-date d-none d-lg-inline-block">
                    <i className="fa fa-calendar" /> Saturday, October 7
                  </div>
                  <ul className="social-area social-area-2">
                    <li>
                      <a
                        className="facebook-icon"
                        href="https://www.facebook.com/solverwp/"
                      >
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="twitter-icon"
                        href="https://www.twitter.com/solverwp/"
                      >
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="youtube-icon"
                        href="https://www.youtube.com/solverwp/"
                      >
                        <i className="fa fa-youtube-play" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="instagram-icon"
                        href="https://www.instagram.com/solverwp/"
                      >
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="google-icon"
                        href="https://www.google.com/solverwp/"
                      >
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* topbar end*/}
        {/* adbar end*/}
        <div className="adbar-area bg-black d-none d-lg-block">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-5 align-self-center">
                <div className="logo text-md-left text-center">
                  <Link className="main-logo" to="/">
                    <img
                      src={publicUrl + "Llogo.png"}
                      alt="img"
                      style={{ width: "260px", height: "60px" }}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-3 col-lg-7 text-md-left text-center">
                <h6 style={{ color: "#ffffff" }}>FOR PERSONAL PROBLEMS !</h6>
                <p style={{ color: "#ffffff", fontWeight: "medium" }}>support@babaastro.com</p>
              </div>
              <div className="col-xl-3 col-lg-7 text-md-left text-center">
                <h6 style={{ color: "#f5e1a8" }}>TALK TO ASTROLOGER</h6>
                <p style={{ color: "#ffffff", fontWeight: "medium" }}>+91 94425 14665</p>
              </div>
            </div>
          </div>
        </div>
        {/* adbar end*/}

        <nav className="navbar navbar-expand-lg">
          <div className="container nav-container">
            <div className="responsive-mobile-menu">
              <div className="logo d-lg-none d-block">
                <Link className="main-logo" to="/">
                  <img
                    src={publicUrl + "Llogo.png"}
                    alt="img"
                    style={{ width: "150px", height: "35px" }}
                  />
                </Link>
              </div>
              <button
                className="menu toggle-btn d-block d-lg-none"
                data-target="#nextpage_main_menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-left" />
                <span className="icon-right" />
              </button>
            </div>
            <div className="nav-right-part nav-right-part-mobile">
              {/* <a className="search header-search" href="#">
                <i className="fa fa-search" />
              </a> */}
            </div>
            <div className="collapse navbar-collapse" id="nextpage_main_menu">
              <ul className="navbar-nav menu-open">
                <li className=" current-menu-item">
                  <Link to="/">Home</Link>
                  {/* <ul className="sub-menu">
                    <li>
                      <Link to="/">Home 01</Link>
                    </li>
                    <li>
                      <Link to="/home-v2">Home 02</Link>
                    </li>
                    <li>
                      <Link to="/home-v3">Home 03</Link>
                    </li>
                  </ul> */}
                </li>
                <li className=" current-menu-item">
                  <Link to="#">Services</Link>
                  {/* <ul className="sub-menu">
                    <li>
                      <Link to="/cat-page">Tech</Link>
                    </li>
                    <li>
                      <Link to="/cat-sports">Sports</Link>
                    </li>
                    <li>
                      <Link to="/cat-life-style">Lifestyle</Link>
                    </li>
                    <li>
                      <Link to="/cat-fashion">Fashion</Link>
                    </li>
                  </ul> */}
                </li>
                <li className=" current-menu-item">
                  <a href="#/blog">Blogs</a>
                  {/* <ul className="sub-menu">
                    <li>
                      <Link to="/error">Error</Link>
                    </li>
                    <li>
                      <Link to="/author">Author</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/blog-details">Blog Details</Link>
                    </li>
                  </ul> */}
                </li>
                <li className=" current-menu-item">
                  <a href="#">contact</a>
                  {/* <ul className="sub-menu">
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/blog-details">Blog Details</Link>
                    </li>
                  </ul> */}
                </li>
                <li className=" current-menu-item">
                  <a href="#">Appointment</a>
                  {/* <ul className="sub-menu">
                    <li>menu-item-has-children
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/blog-details">Blog Details</Link>
                    </li>
                  </ul> */}
                </li>

                <li>
                  <div className="translate-container">
                    <GoogleTranslate />
                  </div>
                </li>


              </ul>
            </div>
            {/* <div className="nav-right-part nav-right-part-desktop">
              <div className="menu-search-inner">
                <input type="text" placeholder="Search For" />
                <button type="submit" className="submit-btn">
                  <i className="fa fa-search" />
                </button>
              </div>
            </div> */}
          </div>
        </nav>


        <div className="topbar-area">
          <div className="container">
            <div className="row justify-content-left">
              <div className="col-lg-6 col-md-7 align-self-center">
                <div className="topbar-menu text-md-left text-center">
                  <ul className="align-self-center">
                    <li>
                      <Link to="#">GURU PEYRACHI 2025</Link>
                    </li>
                    <li>
                      <Link to="#">HOROSCOPE 2025</Link>
                    </li>
                    <li>
                      <Link to="#">RAHU KETU 2025</Link>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open("https://www.instagram.com/babaastro_/", "_blank");
                          setTimeout(() => {
                            window.open("https://youtube.com/@baba-astro?si=a3Igd6O8FIJ_tGX4", "_blank");
                          }, 500); // Opens the second link after a small delay
                        }}
                      >
                        SANI PEYRACHI 2025
                      </a>
                    </li>

                    <li>
                      <Link to="#">MONTHLY HOROSCOPE</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6 col-md-5 mt-2 mt-md-0 text-md-right text-center">
                <div className="topbar-social">
                  {/* <div className="topbar-date d-none d-lg-inline-block" style={{ color: '#ffffff' }}>
                    Chat with Astrologer ...rs
                  </div> */}

                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="topbar-area" style={{ background: 'none' }}>
          <div className="post-slider owl-carousel">
            <div className="item">



              <div className="container">
                <div className="row justify-content-left">
                  <div className="col-lg-6 col-md-7 align-self-center">
                    <Link to="/astrologyReport" style={{ display: "flex", width: "100%", height: "100%" }} className="topbar-menu text-md-left text-center">
                      <img src={publicUrl + "assets/img/add/news1.jpg"} alt="image" />
                    </Link>
                  </div>

                  <div className="col-lg-6 col-md-5 mt-2 mt-md-0 text-md-right text-center">
                    <Link to="/gemology" className="topbar-menu text-md-left text-center">
                      <img src={publicUrl + "assets/img/add/news2.jpg"} alt="image" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>




            <div className="container">
              <div className="row justify-content-left">
                <div className="col-lg-6 col-md-7 align-self-center">
                  <Link to="/marriageMatching" className="topbar-menu text-md-left text-center">
                    <img onClick={(e) => console.log("image is clicked")} src={publicUrl + "assets/img/add/news1.jpg"} alt="image" />

                  </Link>
                </div>
                <div className="col-lg-6 col-md-5 mt-2 mt-md-0 text-md-right text-center">
                  <Link to="/vastuConsultation" className="topbar-menu text-md-left text-center">
                    <img src={publicUrl + "assets/img/add/news2.jpg"} alt="image" />
                  </Link>
                </div>
              </div>
            </div>



          </div>
        </div>

        <div className="topbar-area" >
          <div className="container">
            <div className="row justify-content-left">
              <div className="align-self-center">
                <div className="topbar-menu text-md-left text-center">
                  <ul className="align-self-center">
                    <li>
                      <Link to="#">ASTROLOGY</Link>
                    </li>
                    <li>
                      <Link to="#">MARRIAGE MATCHING</Link>
                    </li>
                    <li>
                      <Link to="#">NUMEROLOGY</Link>
                    </li>
                    <li>
                      <Link to="#">PRASSANNAM</Link>
                    </li>
                    <li>
                      <Link to="/vastuservicedetail">VASTU</Link>
                    </li>
                    <li>
                      <Link to="#">GEMOLOGY</Link>
                    </li>
                    <li>
                      <Link to="#">REMEDIES</Link>
                    </li>
                    <li>
                      <Link to="#">BLACK MAGIC</Link>
                    </li>
                    <li>
                      <Link to="#">ONLINE SHOPPING</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-5 mt-2 mt-md-0 text-md-right text-center">
                <div className="topbar-social">
                  {/* <div className="topbar-date d-none d-lg-inline-block">
                  Chat With Astrologer ....rs
                  </div> */}

                </div>
              </div>
            </div>
          </div>
        </div>



        {/* navbar start */}

      </div>
    );
  }
}

export default Navbar;
