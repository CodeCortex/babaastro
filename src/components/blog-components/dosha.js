import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
class Dosha extends Component {
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
											<img src={publicUrl + "assets/img/blog/dosha.png"} alt="img" />
										</div>
										<div className="details pb-4">
											<div className="post-meta-single mb-2">
												<ul>
													<li><p><i className="fa fa-clock-o" />28 March 2025</p></li>
												</ul>
											</div>
											<h5 className="title mt-0">Yogas and Doshas</h5>
										</div>
									</div>
									<div className="single-blog-details">

									</div>

									<h5>Dosha: Unfavorable Association of Planets</h5>

<p>According to Vedic Astrology, the term “Dosha” refers to unfavorable conditions caused by the bad placement or association of planets in the birth chart. This affliction or Dosha, which has the potential to reduce all the positives of the favorable associations in the birth chart, is derived from the Sanskrit word “dush,” which means bad.</p>

<p>Vedic seers and sages have laid out a set of rules in the ancient astrology texts to identify the planetary combinations which can cause Doshas (Afflictions). The strength of these planetary afflictions depends on the placement and association of the planets, and your karmic actions from the past determine these placements and associations of the planets. Vedic texts also prescribe remedial rituals to be performed to mitigate the adverse effects of the Doshas.</p>

<h5>Dosha (Affliction): What to Expect</h5>

<p>There are various types of Doshas detailed in Vedic astrology. When an affliction or Dosha is present in the birth chart, it indicates the sin (bad karma) caused by an individual in one of their births. Depending on the severity of the affliction, the person experiences the result in the present life. It depends on the type of sin caused, and accordingly, the person would experience difficulties in those particular areas of life.</p>

<p>Some afflictions also indicate unfinished businesses from the previous life. These afflictions are a forewarning for an individual not to repeat the same action in this life and accrue bad karma, but rather repent for the past acts. Depending on the severity, these afflictions affect various areas of life, including:</p>

<ul>
  <li>Health problems</li>
  <li>Financial instability</li>
  <li>Relationship issues</li>
  <li>Blocked fortune</li>
  <li>Emotional suffering and unhappiness</li>
</ul>

<h5>Common Doshas in Vedic Astrology</h5>
<ul>
  <li><strong>Mangal Dosha:</strong> Caused by Mars placed in specific houses; affects marriage and relationships.</li>
  <li><strong>Kaal Sarp Dosha:</strong> When all planets lie between Rahu and Ketu; linked to karmic debts.</li>
  <li><strong>Pitra Dosha:</strong> Related to ancestral karma; may affect family peace and progeny.</li>
  <li><strong>Guru Chandal Dosha:</strong> Occurs when Jupiter is conjunct with Rahu/Ketu; affects wisdom and moral compass.</li>
  <li><strong>Shani Dosha:</strong> Unfavorable Saturn placements; causes delays, struggles, and discipline-related issues.</li>
</ul>

<h5>Yogas: Favorable Planetary Combinations</h5>

<p>In contrast to Doshas, Yogas are auspicious combinations in the birth chart that bring success, prosperity, and blessings in life. “Yoga” in Sanskrit means union or combination. These yogas enhance the native's abilities and bless them with favorable life outcomes.</p>

<h5>Common Types of Yogas</h5>

<ul>
  <li><strong>Raja Yoga:</strong> Indicates success, fame, and leadership. Formed when lords of Kendra and Trikona houses combine.</li>
  <li><strong>Dhana Yoga:</strong> Formed by connections between wealth-giving houses; brings financial prosperity.</li>
  <li><strong>Gajakesari Yoga:</strong> Happens when Jupiter is in a Kendra from the Moon; gives intelligence and honor.</li>
  <li><strong>Budha-Aditya Yoga:</strong> Formed by Sun and Mercury conjunction; enhances communication and intellect.</li>
  <li><strong>Vipreet Raj Yoga:</strong> Results from lords of the 6th, 8th, or 12th houses being placed in these same houses; brings strength through adversity.</li>
</ul>

<h5>How to Balance Doshas and Enhance Yogas</h5>

<p>Vedic Astrology not only helps in identifying Doshas and Yogas but also offers remedial measures:</p>

<ul>
  <li><strong>Mantras and Pujas:</strong> Chanting planetary mantras or performing pujas during specific times.</li>
  <li><strong>Charity:</strong> Donating to the poor or to causes ruled by afflicted planets.</li>
  <li><strong>Wearing Gemstones:</strong> Based on planetary strength in the birth chart (only after astrological advice).</li>
  <li><strong>Fasting:</strong> On specific weekdays to please certain planets (like fasting on Tuesdays for Mars).</li>
  <li><strong>Karma Correction:</strong> Living ethically, avoiding past patterns, and taking conscious decisions to reduce karmic baggage.</li>
</ul>

<h5>Final Thoughts</h5>

<p>While Doshas highlight the karmic debts and challenges we bring from our past lives, Yogas bless us with opportunities and gifts for this life. Understanding both helps us align with our spiritual path. Astrology is not about fear, but about awareness, reflection, and action. With the right guidance, even the most challenging Dosha can be balanced, and the most powerful Yoga can be harnessed for a fulfilling life.</p>

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

export default Dosha;
