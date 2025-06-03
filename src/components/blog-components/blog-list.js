import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';

class BlogList extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'
    return (
     
    	<div className="blog-page-area pd-bottom-80 go-top">
		  <div className="container ">
		    <div className="row ">
		      <div className="col-lg-8 pd-top-50 Boxash ">
		        <div className="single-blog-inner ">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/vastu purush.jpg"} alt="image" />
		          </div>
		          <div className="single-blog-details">
		            <div className="meta">
		             
		              <span className="date">
		                <i className="fa fa-calendar" />
		                19 December 2024
		              </span>
		             
		            </div>
		            <h3><Link to="/vaastudetail">Vastu Purush Mandala And Devata</Link></h3>
		            <p>According to mythology, there was a fierce battle between Lord Shankar and the demon Andhakasura . . . .</p>
		            <Link className="btn btn-base" to="/vaastudetail">Learn More</Link>
		          </div>
		        </div>
		        <div className="single-blog-inner">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/janma.jpg"} alt="image" />
		          </div>
		          <div className="single-blog-details">
		            <div className="meta">
		            
		              <span className="date">
		                <i className="fa fa-calendar" />
		                18 December 2024
		              </span>
		             
		            </div>
		            <h3><Link to="/janmadetail">Janma Nakshatram</Link></h3>
		            <p>What should one do on Janma Nakshatra day? What not to do? Our ancestors have laid down that . . . .</p>
		            <Link className="btn btn-base" to="/janmadetail">Learn More</Link>
		          </div>
		        </div>
		        
		        <div className="single-blog-inner">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/zodiac.jpg"} alt="image" />
		          </div>
		          <div className="single-blog-details">
		            <div className="meta">
		             
		              <span className="date">
		                <i className="fa fa-calendar" />
		                20 December 2024
		              </span>
		             
		            </div>
		            <h3><Link to="/zodiacdetail">Zodiac Factors</Link></h3>
		            <p>Just as every person has different characteristics, zodiac sign has its own characteristics. Astrologers call these as the karakas of that zodiac sign . . . .</p>
		            <Link className="btn btn-base" to="/zodiacdetail">Learn More</Link>
		          </div>
		        </div>
				<div className="single-blog-inner">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/job.jpg"} alt="image" />
		          </div>
		          <div className="single-blog-details">
		            <div className="meta">
		             
		              <span className="date">
		                <i className="fa fa-calendar" />
		                20 December 2024
		              </span>
		             
		            </div>
		            <h3><Link to="/businessdetail">For Profession/Business</Link></h3>
		            <p>Based on the horoscope, it is the following factors that determine the suitability of a person for this profession/business . . . .</p>
		            <Link className="btn btn-base" to="/businessdetail">Learn More</Link>
		          </div>
		        </div>





				
		        {/* <div className="single-blog-inner single-blog-inner-3">
		          <div className="single-blog-details">
		            <div className="meta">
		              <span className="author">
		                <i className="fa fa-user" />
		                Nichel Jhon
		              </span>
		              <span className="date">
		                <i className="fa fa-calendar" />
		                25 Aug 2020
		              </span>
		              <span className="comments">
		                <i className="fa fa-comments" />
		                Comments (05)
		              </span>
		            </div>
		            <h3><Link to="/blog-details">Inspired Design Decisions With Otto Storch When Idea Copy Art And Typography</Link></h3>
		            <p>But must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itse</p>
		            <Link className="btn btn-base" to="/blog-details">Learn More</Link>
		          </div>
		        </div>
		        <nav className="mt-4">
		          <ul className="pagination">
		            <li className="page-item prev"><a className="page-link" href="#"><i className="fa fa-angle-left" /></a></li>
		            <li className="page-item active"><a className="page-link" href="#">1</a></li>
		            <li className="page-item"><a className="page-link" href="#">2</a></li>
		            <li className="page-item"><a className="page-link" href="#">3</a></li>
		            <li className="page-item"><a className="page-link" href="#">4</a></li>
		            <li className="page-item next"><a className="page-link" href="#"><i className="fa fa-angle-right" /></a></li>
		          </ul>
		        </nav>  */}
		      </div>
			  <Sidebar />
		    </div>
		  </div>
		</div>


    )
  }
}

export default BlogList;
