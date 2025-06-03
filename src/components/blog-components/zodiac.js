import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
class Zodiac extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
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
		                <img src={publicUrl+"assets/img/blog/zodiac.jpg" }alt="img" />
		              </div>
		              <div className="details pb-4">
		                <div className="post-meta-single mb-2">
		                  <ul>
		                    <li><p><i className="fa fa-clock-o" />20 Dcember 2024</p></li>
		                  </ul>
		                </div>
		                <h5 className="title mt-0">Zodiac Factors</h5>
		              </div>
		            </div>
		            <div className="single-blog-details">
		              <p>Just as every person has different characteristics, zodiac sign has its own characteristics. Astrologers call these as the karakas of that zodiac sign. Let us see what the karakas are for each zodiac.</p>
		              
		            </div>
		           
		            <h5>Aries:</h5>
					<p>Thorny plants, mountain, small forest, battlefield, area with fire, area where thieves live, forest during the day, more locality at night, red color, government, turban, army, fire department, factory and agriculture.</p>
					<h5>Taurus:</h5>
					<p>Cowshed, fruits, white color, food grains face, field, carpentry workshop, woman, silver, gem, stones, trade, moneylenders, animal husbandry, art objects, perfumes, cinema, poetry, songs and hotels.</p>
					<h5>Gemini:</h5>
					<p>Business place, Big hall, Gambling place, Cities near the sea, school, school bag place, Information and Communication Department, Space Department, Education Department, Finance Department, Astrology, Business and Stage Talk.</p>
					<h5>Cancer:</h5>
					<p>Water bodies, rivers, ponds, baths, field sites, pearls, conchiquid products, export, import, agro industry, astrology, medicine, transport, education, arts, milk market, Shrine and pink color.</p>
					<h5>Leo:</h5>
					<p>Palace, Office, Cave, High place, Place of Animals, State Government, Stomach, Government Job, Political Administrative Responsibility, Profession related to iron and fire, Engineering Department, Surgeon, Doing Social Service, Running a Charitable Organization.</p>
					<h5>Virgo:</h5>
					<p>Intelligence, Sharp Knowledge, Big Business, Spreading Vines, Academy, Grey, Waist, Flower garden, City account, Auditor, Miscellaneous Business, Teacher, Clerk, Grocery Store and GrainStorage GoDown.</p>
					<h5>Libra:</h5>
					<p>The Shopping Street, the place where the money is stored, the place where the woman gather, the man pulling the scale, the variety of colors, the abdomen above the abdomen.</p>
					<h5>Scorpio:</h5>
					<p>Thorny and Stony area, Poisonous Creature inhabited, Village, Valley, industrial area, garbage dump area, mining, mystery parts of men and women, black and red color, iron, fire industry, electrical industry, profession related to witchcraft, astrology, spirituality, research and minerals.</p>
					<h5>Sagittarius</h5>
					<p>Forest Area, Ordnance factory, Archery, Fertile Area, Military Base, Pooja Room, Treasury Timber trade, Spiritual Department, Law and Justice, Endownments Department, Finance Department, Education Department, War Training Charitable trust.</p>
					<h5>Capricorn:</h5>
					<p>Storage area, dam area, beach, muddy area, police quarters, industrial area, restaurant, fertilizer business, construction work, hard work, lowly work and knee.</p>
					<h5>Aquarius</h5>
					<p>Hideout, Secret place, Dark Place, Liquor stores behind the waist, casinos, butcher shops, idlers, place of millet grain, astrology, spirituality, teacher, counselor, aviation, fire department, prison, Bomb making, customs intelligence.</p>
					<h5>Pisces:</h5>
					<p>Well, tank full of water, Beach, River bank, Holy places, education, medicine, judiciary, navy, temple work, religious teacher and Pilgrimage.</p>
					<br></br>
					<p>Apart from the karakas given here, there are many more karakas. which is given here are not sinful karakas. Zodiac signs, it is a rule that if a planet is standing in a zodiac sign, the karakattva of that zodiac sign will attack the planet.</p>
					

					

				    
		            
		            
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

export default Zodiac;
