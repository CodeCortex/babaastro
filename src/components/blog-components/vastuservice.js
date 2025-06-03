import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar2 from './sidebar2';
class Vastuservice extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return (
     	<div className="blog-page-area pd-bottom-80 go-top ">
		  <div className="container ">
		    <div className="row">
		      <div className="col-lg-8 pd-top-50 Boxash ">
		        <div className="blog-details-page-inner">
		          <div className="single-blog-inner m-0">
		            <div className="single-post-wrap ">
					<h4>What are the benefits of following Vastu Shastra?</h4><br></br>

		              <div className="thumb">
		                <img src={publicUrl+"assets/img/blog/vastushastra.jpg" }alt="img" />
		              </div>
		              {/* <div className="details pb-4">
		                <div className="post-meta-single mb-2">
		                  <ul>
		                    <li><a className="tag-base tag-blue" href="#">Tech</a></li>
		                    <li><p><i className="fa fa-clock-o" />08.22.2020</p></li>
		                    <li><i className="fa fa-user" />R. Lambert</li>
		                  </ul>
		                </div>
		                <h5 className="title mt-0">Uttarakhand’s Hemkund Sahib yatra to start from</h5>
		              </div> */}
		            </div>
		            <div className="single-blog-details">
		              <p>According to the principles of Vastu Shastra, following its guidelines for designing and building living and working spaces can have several benefits. Some of the potential benefits of following Vastu Shastra include:
					  </p>
		              <blockquote className="blockquote">
		                <i className="fa fa-quote-right" />
		                <p></p>
		              </blockquote>
		            </div>
					<h5>Promotes Harmony and Balance in life</h5>
		            <p>By creating a living or working space in harmony with the natural forces of the universe, Vastu Shastra can promote a sense of balance and well-being.</p>
		            <div className="add-area">
		              <a href="#"><img src={publicUrl+"assets/img/add/2.png"} alt="img" /></a>
		            </div>
		            <h5>Improve the flow of positive energy</h5>
		            <p>By properly arranging rooms and furniture, using specific colors and materials, and keeping the space clean and organized, Vastu Shastra improves the flow of positive energy within the space.</p>
		            <div className="row">
		              <div className="col-sm-6">
		                <div className="thumb mb-3 mb-sm-0">
		                  <img src={publicUrl+"assets/img/blog/5.png"} alt="img" />
		                </div>
		              </div>
		              <div className="col-sm-6">
		                <img src={publicUrl+"assets/img/blog/6.png"} alt="img" />
		              </div>
		            </div>
		            <div className="video-area">
		              <h5>Improved Health and Well-being</h5>
					  <p>Spaces designed according to the principles of Vastu Shastra can promote physical and mental health, reduce stress and improve overall well-being.</p>
		              <div className="single-blog-inner mb-4">
		                <div className="thumb">
		                  <img src={publicUrl+"assets/img/blog/7.png"} alt="image" />
		                  <a className="video-play-btn" href="https://www.youtube.com/embed/Wimkqo8gDZ0" data-effect="mfp-zoom-in"><i className="fa fa-play" /></a>
		                </div>
		              </div>
		            </div>
					<h5>Increase Prosperity</h5>
		            <p>By creating a space that is in harmony with the natural forces of the universe, Vastu Shastra attracts positive energy and happiness, which can lead to greater wealth and success.</p>  
					<h5>Strengthens Relationships</h5>
					<p>Vastu Shastra helps create a harmonious environment that fosters good relationships with family, friends and colleagues.</p>
		           
		            <div className="author-area">
		              <div className="media">
		                <img src={publicUrl+"assets/img/banner/arulbogar.jpg"} alt="img" />
		                <div className="media-body align-self-center">
		                  <h4>Saai Cidamparram</h4>
		                  <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that aextremely painful. Nor again is there anyone who loves</p>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="related-post">
		            <div className="section-title mb-0">
		              <h5 className="mb-0">Related Service</h5>
		            </div>
		            <div className="row justify-content-center">
		              <div className="col-lg-4 col-md-6">
		                <div className="single-post-wrap">
		                  <div className="thumb">
		                    <img src={publicUrl+"assets/img/post/19.png"} alt="img" />
		                    <Link className="tag-base tag-red" to="/cat-page">Tech</Link>
		                  </div>
		                  <div className="details">
		                    <div className="post-meta-single">
		                      <ul>
		                        <li><i className="fa fa-clock-o" />08.22.2020</li>
		                        <li><i className="fa fa-user" />08.22.2020</li>
		                      </ul>
		                    </div>
		                    <h6 className="title mt-2"><a href="#">Lifting Weights Makes Your Nervous</a></h6>
		                  </div>
		                </div>
		              </div>
		              <div className="col-lg-4 col-md-6">
		                <div className="single-post-wrap">
		                  <div className="thumb">
		                    <img src={publicUrl+"assets/img/post/20.png"} alt="img" />
		                    <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
		                  </div>
		                  <div className="details">
		                    <div className="post-meta-single">
		                      <ul>
		                        <li><i className="fa fa-clock-o" />08.22.2020</li>
		                        <li><i className="fa fa-user" />08.22.2020</li>
		                      </ul>
		                    </div>
		                    <h6 className="title mt-2"><a href="#">New, Remote Weight-Loss Method </a></h6>
		                  </div>
		                </div>
		              </div>
		              <div className="col-lg-4 col-md-6">
		                <div className="single-post-wrap">
		                  <div className="thumb">
		                    <img src={publicUrl+"assets/img/post/21.png"} alt="img" />
		                    <Link className="tag-base tag-light-green" to="/cat-page">Tech</Link>
		                  </div>
		                  <div className="details">
		                    <div className="post-meta-single">
		                      <ul>
		                        <li><i className="fa fa-clock-o" />08.22.2020</li>
		                        <li><i className="fa fa-user" />08.22.2020</li>
		                      </ul>
		                    </div>
		                    <h6 className="title mt-2"><a href="#">Social Connection Boosts Fitness App </a></h6>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
		          
		        </div>
		      </div>
		     <Sidebar2 />
		    </div>
		  </div>
		</div>

    )
  }
}

export default Vastuservice;
