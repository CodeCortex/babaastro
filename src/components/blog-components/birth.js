import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
class Birth extends Component {
	render() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'

		return (
			<div className="blog-page-area pd-bottom-80 go-top">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 pd-top-50 Boxash" >
							<div className="blog-details-page-inner">
								<div className="single-blog-inner m-0">
									<div className="single-post-wrap style-overlay">
										<div className="thumb">
											<img src={publicUrl + "assets/img/blog/birth.png"} alt="img" />
										</div>
										<div className="details pb-4">
											<div className="post-meta-single mb-2">
												<ul>
													<li><p><i className="fa fa-clock-o" />28 March 2025</p></li>
												</ul>
											</div>
											<h5 className="title mt-0">Birthtime Rectification Research</h5>
										</div>
									</div>
									<div className="single-blog-details">

									</div>

									<h5>What is Birth Time Rectification and Why Do You Need It?</h5>

<p>Birth Time Rectification (BTR) is a technique used to correct your time of birth. If you do not know your exact birth time or you are unsure about its accuracy, having a BTR done can be incredibly beneficial in providing accurate predictions and astrological guidance.</p>

<p>Astrological calculations are highly sensitive to time. Even a difference of a few minutes can alter the ascendant, planetary house placements, and divisional charts, leading to incorrect predictions. BTR helps astrologers identify the most probable time of birth based on life events and planetary patterns.</p>

<h5>Why Is BTR Important?</h5>

<p>If your birth time is inaccurate or unknown, predictions related to career, marriage, health, and life events may not be reliable. BTR ensures that your birth chart is corrected for precision, allowing for accurate consultation and remedies.</p>

<h5>Process to Register for BTR</h5>

<p>The BTR process requires more time and effort from Guruji, generally around 17–20 days to complete. In addition to your basic birth information like Date of Birth (DOB), Place of Birth, and available Time of Birth, we will also ask for additional information related to your life events. Once you register for BTR, a form will be shared for you to fill in these details.</p>

<p><strong>Important:</strong> The consultation fee for BTR is independent and separate from any other astrological services. For instance, if you want a chart reading after the BTR is complete, you’ll need to book a separate consultation for that.</p>

<h5>How to Proceed:</h5>

<p>Once the payment for BTR is made, please fill out the following questionnaire and email it along with your payment screenshot:</p>

<h5>Birth Time Rectification Questionnaire</h5>

<p><strong>1. Full Name:</strong></p>

<p><strong>2. Date of Birth:</strong></p>

<p><strong>3. Place of Birth</strong> (City/Town, State, Country):</p>

<p><strong>4. Current Place of Residence</strong> (City/Town, State, Country):</p>

<p><strong>5. Time of Birth</strong> (if known):</p>
<p><em>If you do not know your exact time of birth, please provide the closest estimate and specify any known details.</em></p>
<p><em>Example: “I don’t know the exact time, but it was around morning, maybe between 5:30 AM and 6:00 AM.”</em></p>

<p><strong>6. Education:</strong></p>
<p><em>Example: “Bachelor’s degree in Business Administration.”</em></p>

<p><strong>7. Current Profession:</strong></p>
<p><em>Example: “Software Engineer.”</em></p>

<p><strong>8. Marital Status:</strong> (Single, Married, Divorced, Widowed, Never Married)</p>
<p><em>Example: “Married.”</em></p>

<p><strong>9. Number of Kids:</strong></p>
<p><em>Example: “Two kids – Rahul and Reena.”</em></p>

<p><strong>10. Your Nature/Behavior:</strong></p>
<p><em>Example: “I’m generally calm and introverted, but I can be outgoing with close friends.”</em></p>

<p><strong>11. Food Habits:</strong></p>
<p><em>Example: “I follow a vegetarian diet.”</em></p>

<p><strong>12. How were you born?</strong></p>
<p><em>Was your delivery normal or C-section? Any complications during delivery?</em></p>

<p><strong>13. Significant Life Events or Milestones</strong> (positive or negative) with approximate dates:</p>
<p><em>Example: “Marriage on May 12, 2017. Job promotion in July 2020. Mother’s passing in September 2019.”</em></p>

								</div>
							</div>
						</div>
						<Sidebar />
					</div>
				</div>
			</div>

		)
	}
}

export default Birth;
