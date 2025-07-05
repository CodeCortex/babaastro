import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v1 extends Component {

	componentDidMount() {
		const $ = window.$;

		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/main.js";

		document.body.appendChild(minscript);

		var bodyOvrelay = $('#body-overlay');
		var searchPopup = $('#td-search-popup');

		$(document).on('click', '#body-overlay', function (e) {
			e.preventDefault();
			bodyOvrelay.removeClass('active');
			searchPopup.removeClass('active');
		});
		$(document).on('click', '.search', function (e) {
			e.preventDefault();
			searchPopup.addClass('active');
			bodyOvrelay.addClass('active');
		});
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = "Footer logo"

		return (
			<div className="footer-area bg-black " style={{backgroundColor:"#333333", paddingTop:'20px'}}> 
				<div className="container">
				<div className="logo">
				<img
                      src={publicUrl + "Llogo.png"}
                      alt="img"
                      style={{ width: "280px", height: "65px" }}
                    />
						</div><br></br>
					<div className="row">
						<div className="col-lg-3 col-sm-6">
						
							<div className="widget">
								<h5 className="widget-title">ABOUT US</h5>
								<div className="widget_about">
									<p>Discover clarity and guidance with BabaAstro Astrology Services. Offering personalized horoscope readings, vastu solutions, and remedies, we help you navigate life’s challenges with ancient wisdom and modern insight. Trust us for accurate predictions and transformative advice. Your path to harmony begins here.</p><br></br>
									<ul className="contact_info_list">
									<li><i className="fa fa-map-marker" /> Pollachi, Coimbatore, Chennai.</li>
									<li><i className="fa fa-phone" /> +91 94425 14665</li>
									<li><i className="fa fa-envelope-o" /> arulbogaar@gmail.com</li>
								</ul>
									{/* <ul className="social-area social-area-2 mt-4">
										<li><a className="facebook-icon" href="https://www.facebook.com/solverwp/"><i className="fa fa-facebook" /></a></li>
										<li><a className="twitter-icon" href="https://www.twitter.com/solverwp/"><i className="fa fa-twitter" /></a></li>
										<li><a className="youtube-icon" href="https://www.youtube.com/solverwp/"><i className="fa fa-youtube-play" /></a></li>
										<li><a className="instagram-icon" href="https://www.instagram.com/solverwp/"><i className="fa fa-instagram" /></a></li>
										<li><a className="google-icon" href="https://www.google.com/solverwp/"><i className="fa fa-google-plus" /></a></li>
									</ul> */}
								</div>
							</div>
						</div>
						<div className="col-lg-1 col-sm-6">
							<div className="widget widget_tag_cloud">
								{/* <h5 className="widget-title">TAGS</h5>
								<div className="tagcloud go-top">
									<Link to="/cat-page">Consectetur</Link>
									<Link to="/cat-page">Video</Link>
									<Link to="/cat-page">App</Link>
									<Link to="/cat-page">Food</Link>
									<Link to="/cat-page">Game</Link>
									<Link to="/cat-page">Internet</Link>
									<Link to="/cat-page">Phones</Link>
									<Link to="/cat-page">Development</Link>
									<Link to="/cat-page">Video</Link>
									<Link to="/cat-page">Game</Link>
									<Link to="/cat-page">Gadgets</Link>
								</div> */}
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="widget">
								<h5 className="widget-title">SERVICES</h5>
								<ul className="contact_info_list">
									<li>Astrology </li>
									<li>Marriage Matching </li>
									<li>Numerology </li>
									<li>Prassannam </li>
									<li> <Link to="/vastuservicedetail">Vastu</Link> </li>
									<li>Gemology </li>
									<li>Remedies </li>
									<li>Black Magic </li>
									
								</ul>
							</div>
						</div>
						<div className="col-lg-4 col-sm-6 go-top">
							<div className="widget widget_recent_post">
								<h5 className="widget-title">POPULAR NEWS</h5>
								<div className="single-post-list-wrap style-white">
									<div className="media">
										<div className="media-left">
											<img src={publicUrl + "assets/img/post/list/vastu_purush_small.jpg"} alt="img" />
										</div>
										<div className="media-body">
											<div className="details">
												
												<h6 className="title"><Link to="/vaastudetail">Vastu Purush Mandala And Devata : According to mythology, there was a fierce battle between Lord Shankar and the demon Andhakasura . . . .</Link></h6>
												<div className="post-meta-single">
													<ul>
														<li><i className="fa fa-clock-o" />19 December 2024</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="single-post-list-wrap style-white">
									<div className="media">
										<div className="media-left">
											<img src={publicUrl + "assets/img/post/list/star.jpg"} alt="img" />
										</div>
										<div className="media-body">
											<div className="details">
												
												<h6 className="title"><Link to="/janmadetail">Janma Nakshatram : What should one do on Janma Nakshatra day? What not to do? Our ancestors have laid down that . . . .</Link></h6>
												<div className="post-meta-single">
													<ul>
														<li><i className="fa fa-clock-o" />18 December 2024</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="single-post-list-wrap style-white">
									<div className="media">
										<div className="media-left">
											<img src={publicUrl + "assets/img/post/list/zod.jpg"} alt="img" />
										</div>
										<div className="media-body">
											<div className="details">
												
												<h6 className="title"><Link to="/zodiacdetail">Zodiac Factors : Just as every person has different characteristics, zodiac sign has its own characteristics. Astrologers call these as the karakas of that zodiac sign . . . .</Link></h6>
												<div className="post-meta-single">
													<ul>
														<li><i className="fa fa-clock-o" />20 December 2024</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								
							</div>
						</div>
					</div>
					
				</div>
				<div className="footer-bottom text-center" style={{backgroundColor:"#950505"}}>
						
						<p>Copyright ©2024 Nextpage</p><hr></hr>
						<ul className="social-area social-area-2">
					           <li><a className="facebook-icon" target='blank' href="https://www.facebook.com/share/1H46fYoEqU/"><i className="fa fa-facebook" /></a></li>
				              <li><a className="youtube-icon" target='blank' href="https://www.youtube.com/@Baba-Astro"><i className="fa fa-youtube-play" /></a></li>
				              <li><a className="instagram-icon" target='blank' href="https://www.instagram.com/babaastro_?igsh=MWh5amU5emI5dW5iZQ=="><i className="fa fa-instagram" /></a></li>
				            </ul>
					</div>
			</div>

		)
	}
}


export default Footer_v1