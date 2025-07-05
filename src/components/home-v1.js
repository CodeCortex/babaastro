import React, { useEffect } from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import Trending from './section-components/trending';
import Fashion from './section-components/fashion';
import CatSection from './section-components/cat-section';
import Video from './section-components/video';
import Add from './section-components/add';
import VideoV2 from './section-components/video-v2';
import TrendingV2 from './section-components/trending-v2';
import Footer from './global-components/footer';
import Latest from './section-components/latest';
import Tag from './section-components/tag';
import Fincareer from './section-components/fincareer';
import Latest2 from './section-components/latest2';
import { Link } from 'react-router-dom';
import './Home.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()





const scrollableContentStyle = {
  // position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  overflowY: 'auto',
  padding: '1rem',
};



const centerContentStyle = {
  flex: 1,

  padding: '1rem',
  overflowY: 'auto',
};
// className='p-style'= {
//   border: '1px solid #ccc',
//   padding: '10px',
//   margin: '10px 0',
//   borderRadius: '8px',
//   color: "white",
//   backgroundImage: "linear-gradient(to right, #dc3545, #ff6b81)", // Define gradient properly
//   boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
// };


const formStyle = {
  textAlign: 'center',
};

const Home_V1 = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target
    toast.success("✅ Form submitted successfully!", { position: "top-center", autoClose: 2000, transition: "Bounce" });

    setTimeout(() => {
      form.submit()
    }, 2000);


  };

  return (
    <div>
      <Navbar />
      <div className="main-container">
        <div className="left-container">
          <div style={scrollableContentStyle}>
            <p className='p-style'>Concepts Overview</p>
            <p className='p-style'>Vedic Astrology Overview</p>
            <p className='p-style'>Astrology Roadmap Introduction</p>
            <Link to="/nadiastrology"> <p className='p-style'>Nadi Astrology</p></Link>
            <Link to="/birthtime">  <p className='p-style'>Birthtime Rectification Research</p></Link>
            <p className='p-style'>Astrology Books</p>
            <p className='p-style'>Vastu Shastra</p>
            <Link to="/palmistry">    <p className='p-style'>Palmistry</p></Link>
            <Link to="/nimittaandshakun">  <p className='p-style'>Nimitta & Shakun</p></Link>
            <Link to="/lizardastrology">
              <p className="p-style">Lizard Astrology</p></Link>

            <Link to="/dreamastrology">
              <p className="p-style">Dream Astrology</p></Link>
            <p className='p-style'>Parihara & Remedies</p>
            <Link to="/signinastrology"> <p className='p-style'>Signs in Astrology</p> </Link>
            <Link to="/starsinastrology"> <p className='p-style'>Stars in Astrology</p> </Link>
            <Link to="/planetinastrology"> <p className='p-style'>Planets in Astrology</p> </Link>
            <Link to="/ascendantsinastrology"> <p className='p-style'>Ascendants in Astrology</p> </Link>
            <Link to="/houseinastrology"> <p className='p-style'>Houses in Astrology</p> </Link>


            <Link to="/doshadetail">
              <p className="p-style">Yogas and Doshas</p></Link>

            <Link to="/divison">
              <p className='p-style'>Divisional Charts</p></Link>

            <p className='p-style'>Planets Strength</p>
            <Link to="/dashasystem">   <p className='p-style'>Dasha Systems</p></Link>
            <p className='p-style'>Fast Horoscope Reading</p>
            <p className='p-style'>Fast Horoscope Reading 2</p>
            <p className='p-style'>How to Read Horoscope</p>
            <Link to="/kundalimatching"> <p className='p-style'>Kundali Matching</p> </Link>
            <Link to="/muhurtha"> <p className='p-style'>Muhurtha</p> </Link>

          </div>
        </div>
        <div style={centerContentStyle}>
          <Latest />
          <Fincareer />
          <Banner /><br></br>
          <Latest2 />
        </div>
        <div className="right-container">
          <div style={scrollableContentStyle}>


            <form onSubmit={handleSubmit} action="https://formsubmit.co/mukuldeshmukh12345@gmail.com" method="POST" className="single-newsletter-inner bg-yellow text-center">
              <h5 style={{ color: 'white' }}>Get Immediate Solution </h5><br />

              <div className="single-input-inner">
                <input type="text" name="name" placeholder="Enter Your Name" required />
              </div>
              <div className="single-input-inner">
                <input type="email" name="email" placeholder="Enter Your Email" required />
              </div>
              <div className="single-input-inner">
                <input type="text" name="phone" placeholder="Enter Your Mobile No." required />
              </div>
              <div className="single-input-inner">
                <input type="text" name="message" placeholder="Enter Your Message" required />
              </div>

              <input type="hidden" name="_captcha" value="false" />
              <button type='submit' className="btn btn-base w-100">Submit</button>
            </form>





            <br></br>



            <div className="single-post-wrap style-overlay">
              <div className="thumb">
                <img src="assets/img/baba.png" alt="img" />
                <a href="https://www.youtube.com/@Baba-Astro/featured" target='blank' className="video-play-btn play-btn-large play-btn-yellow mfp-iframe" ><i className="fa fa-play" /></a>
              </div>

            </div>
            <Link to="/astrologyservice"><p className='p-style'>Astrology Services</p></Link>

            <p className='p-style'>Online Kundali (Birth Chart)</p>
            <p className='p-style'>Horoscope Matching</p>
            <p className='p-style'>Ask a question Talk to the Best Astrologer</p>
            <p className='p-style'>All about our paid services</p>
            <p className='p-style'>Get baby name suggestion</p>
            <p className='p-style'>Get your life report</p>
            <p className='p-style'>Numerology Calculator</p>
            <p className='p-style'>About Vedic Astrology</p>
            <p className='p-style'>Learn Astrology</p>
            <p className='p-style'>Know about your Gemstones</p>
            <p className='p-style'>About your Mangal Dosha</p>
            <p className='p-style'>Get Kaal Sarp Dosha</p>
            <p className='p-style'>Get your love horoscope</p>
            <p className='p-style'>Chat in Whatsapp</p>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Home_V1;
