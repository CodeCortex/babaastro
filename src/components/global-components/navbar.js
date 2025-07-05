/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next';
import "../../utils/i18n/i18n.js"



class Navbar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.changeLanguage = this.changeLanguage.bind(this);
  // }

  // changeLanguage(lng) {
  //   const { i18n } = this.props;
  //   i18n.changeLanguage(lng);
  //   console.log(`${lng} is clicked`);
  // }
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      timeOutId: null,
    };
  }
  handleMouseEnter = () => {
    if (this.state.timeOutId) {
      clearTimeout(this.state.timeOutId);
    }
    this.setState({ isOpen: true });
  }

  handleMouseLeave = () => {
    const timeOutId = setTimeout(() => {
      this.setState({ isOpen: false })
    }, 500);
    this.setState({ timeOutId });
  }

  changeLanguage = (lng) => {
    this.props.i18n.changeLanguage(lng);
  };


  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "logo";
    let anchor = "#";

    const { t } = this.props;



    return (
      <div className="navbar-area">

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
                {/* <li className=" current-menu-item">
                  <Link to="/">Home</Link>
                  
                </li>
                <li className=" current-menu-item">
                  <Link to="#">Services</Link>
                
                </li>
                <li className=" current-menu-item">
                  <a href="#/blog">Blogs</a>
                 
                </li>
                <li className=" current-menu-item">
                  <a href="#">contact</a>
                  
                </li>
                <li className=" current-menu-item">
                  <a href="#">Appointment</a>
                 
                </li> */}

                <li className="current-menu-item">
                  <Link to="/">{t("Home")}</Link>
                </li>


                <li
                  onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}
                  className="relative text-white current-menu-item cursor-pointer"
                >
                  {t("Services")}
                  {this.state.isOpen && (
                    <ul
                      style={{ background: "#dc3545", transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out" }}
                      className="absolute z-50 left-0 mt-2 w-96 flex flex-col border-gray-300 shadow-lg rounded-lg opacity-100 transform translate-y-0"
                    >
                      <li className="pl-4 py-2 transition-all duration-300 hover:text-blue-500 hover:bg-red-300">
                        <Link to="/astrologyservice">Astrology</Link>
                      </li>
                      <li className="pl-4 ml-0 py-2 transition-all duration-300 hover:text-blue-500 hover:bg-red-300">
                        <Link to="/gemologyservice">Gemology</Link>
                      </li>
                      <li className="pl-4 ml-0 py-2 transition-all duration-300 hover:text-blue-500 hover:bg-red-300">
                        <Link to="/marriagematchingservice">Marriage Matching</Link>
                      </li>
                      <li className="pl-4 ml-0 py-2 transition-all duration-300 hover:text-blue-500 hover:bg-red-300">
                        <Link to="/numerologyservice">Numerology</Link>
                      </li>
                      <li className="pl-4 ml-0 py-2 transition-all duration-300 hover:text-blue-500 hover:bg-red-300">
                        <Link to="/prasannamservice">Prasannam</Link>
                      </li>
                      <li className="pl-4 ml-0 py-2 transition-all duration-300 hover:text-blue-500 hover:bg-red-300">
                        <Link to="/vastuservice">Vaastu</Link>
                      </li>
                    </ul>
                  )}
                </li>



                <li className="current-menu-item">
                  <a href="#/blog">{t("Blogs")}</a>
                </li>
                <li className="current-menu-item">
                  <a href="#">{t("Contact")}</a>
                </li>
                <li className="current-menu-item">
                  <a href="#">{t("Appointment")}</a>
                </li>


                <li>
                  <div className="translate-container">
                    <div>
                      <button
                        onClick={() => this.changeLanguage("en")}
                        className="btn btn-primary"
                      >
                        🇬🇧 English
                      </button>
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => this.changeLanguage("ta")}
                        className="btn btn-secondary"
                      >
                        🇮🇳 தமிழ்
                      </button>
                    </div>
                  </div>
                </li>


              </ul>
            </div>

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
                    <Link to="/astrologyservice" style={{ display: "flex", width: "100%", height: "100%" }} className="topbar-menu text-md-left text-center">
                      <img style={{ borderRadius: "10px" }} src={publicUrl + "assets/img/service/latest/latest1.svg"} alt="image" />
                    </Link>
                  </div>

                  <div className="col-lg-6 col-md-5 mt-2 mt-md-0 text-md-right text-center">
                    <Link to="/vastuservice" className="topbar-menu text-md-left text-center">
                      <img style={{ borderRadius: "10px" }} src={publicUrl + "assets/img/service/latest/latest2.svg"} alt="image" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>




            <div className="container">
              <div className="row justify-content-left">
                <div className="col-lg-6 col-md-7 align-self-center">
                  <Link to="/gemologyservice" className="topbar-menu text-md-left text-center">
                    <img style={{ borderRadius: "10px" }} src={publicUrl + "assets/img/service/latest/latest3.svg"} alt="image" />

                  </Link>
                </div>
                <div className="col-lg-6 col-md-5 mt-2 mt-md-0 text-md-right text-center">
                  <Link to="/prasannamservice" className="topbar-menu text-md-left text-center">
                    <img style={{ borderRadius: "10px" }} src={publicUrl + "assets/img/service/latest/latest4.svg"} alt="image" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row justify-content-left">
                <div className="col-lg-6 col-md-7 align-self-center">
                  <Link to="/marriagematchingservice" className="topbar-menu text-md-left text-center">
                    <img style={{ borderRadius: "10px" }} src={publicUrl + "assets/img/service/latest/latest5.svg"} alt="image" />

                  </Link>
                </div>
                <div className="col-lg-6 col-md-5 mt-2 mt-md-0 text-md-right text-center">
                  <Link to="/numerologyservice" className="topbar-menu text-md-left text-center">
                    <img style={{ borderRadius: "10px" }} src={publicUrl + "assets/img/service/latest/latest6.svg"} alt="image" />
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
                      <Link to="/astrologyservice">ASTROLOGY</Link>
                    </li>
                    <li>
                      <Link to="/marriagematchingservice">MARRIAGE MATCHING</Link>
                    </li>
                    <li>
                      <Link to="/numerologyservice">NUMEROLOGY</Link>
                    </li>
                    <li>
                      <Link to="/prasannamservice">PRASSANNAM</Link>
                    </li>
                    <li>
                      <Link to="/vastuservice">VASTU</Link>
                    </li>
                    <li>
                      <Link to="/gemologyservice">GEMOLOGY</Link>
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

export default withTranslation()(Navbar);
