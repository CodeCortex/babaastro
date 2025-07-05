import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Sidebar2 extends Component {
  render() {
   let anchor = '#'
   let imagealt = 'image'
   let publicUrl = process.env.PUBLIC_URL+'/'
    return (
       <div className="col-lg-3 pd-top-50 go-top Boxash">
        <div className="category-sitebar">
            <div className="widget widget-category">
              <h6 className="widget-title">Vastu Shastra</h6>
              <p><a href="#">Vastu for Bathroom</a></p><hr></hr>
              <p><a href="#">Vastu for Bedroom</a></p><hr></hr>
              <p><a href="#">Vastu for Dining Room</a></p><hr></hr>
              <p><a href="#">Vastu for Drawing</a></p><hr></hr>
              <p><a href="#">Vastu for Kitchen</a></p><hr></hr>
              <p><a href="#">Vastu for Kids Room</a></p><hr></hr>
              <p><a href="#">Vastu for Pooja Room</a></p><hr></hr>
              <p><a href="#">more...</a></p><hr></hr>

              
             
            </div>
            
           
           
           
           
           
          </div> 
         <form className="single-newsletter-inner bg-yellow text-center">
          <h5 style={{color:'white'}}>Get Immediate Solution </h5><br></br>
          
          <div className="single-input-inner">
            <input type="text" placeholder="Enter Your Name" />
          </div>
          <div className="single-input-inner">
            <input type="text" placeholder="Enter Your Email" />
          </div>
          <div className="single-input-inner">
            <input type="text" placeholder="Enter Your Mobile No." />
          </div>
          <div className="single-input-inner">
            <input type="text" placeholder="Enter Your Message" />
          </div>
          <a className="btn btn-base w-100" href="#">Submit</a>
        </form><br></br>
        <div className="single-post-wrap style-overlay">
          <div className="thumb">
            <img src="assets/img/baba.png" alt="img" />
            <a href="https://www.youtube.com/@Baba-Astro/featured" target='blank' className="video-play-btn play-btn-large play-btn-yellow mfp-iframe" ><i className="fa fa-play" /></a>
          </div>
          
        
      </div>
           
        </div>
    )
  }
}

export default Sidebar2;
