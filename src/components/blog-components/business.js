import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
class Business extends Component {
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
		                <img src={publicUrl+"assets/img/blog/job.jpg" }alt="img" />
		              </div>
		              <div className="details pb-4">
		                <div className="post-meta-single mb-2">
		                  <ul>
		                    <li><p><i className="fa fa-clock-o" />20 Dcember 2024</p></li>
		                  </ul>
		                </div>
		                <h5 className="title mt-0">For Profession/Business</h5>
		              </div>
		            </div>
		            <div className="single-blog-details">
		              <h5>Based on the horoscope, it is the following factors that determine the suitability of a person for this profession/business.</h5>
		              <p>• The occupation of the native depends on the strength of the planet in the horoscope.</p>
					  <p>• For matters related to one's job to be strong, the birth lagna of the native should be strong. There is a general rule that people who have this lagna will have this profession and it should be examined.</p>
					  <p>• The tenth place for lagna is called the place of business. This tenth place should be strong. There is a general rule that whichever zodiac sign is the tenth house, this will be the profession and it should be examined.</p>
					  <p>• You need to know the strength of the planet in the 10th left and its karakas especially related to business.</p>
					  <p>• You need to know who the lord of the tenth left is and where he is. You have to know his strengths and karakas.</p>
					  <p>• The lord of the tenth left should know who is the lord of the house where he stays and where he is. You have to know his strengths and karakas.</p>
					  <p>• Who is aspecting the tenth house is very important. Quarter, half, three-quarter and full vision is in the horoscope. One should know which planet is aspecting the tenth house in which aspect and know the strength of that planet and the karakatuvamas. <br></br><br></br>After analyzing the above factors and listing all the occupational karakas, it is necessary to know which occupations the mind of the native is engaged. Also, if the horoscope has already done business for some time, it should be known that he has done more in any of them.<br></br><br></br>Finally, determine which planet or planets are strong for business and recommend the occupational karakas of that planet. The karaka of each planet is described below.</p>
					
		            </div>
		           
		            <h5>Occupations of those who are influenced by the Sun:</h5>
					<p>• You can get involved in politics</p>
					  <p>• Government Job</p>
					  <p>• Become a gem merchant</p>
					  <p>• Sell red coloured stones</p>
					  <p>• You can make and sell gold jewellery</p>
					  <p>• You can be good at arguing</p>
					  <p>• Spinning mill related work can be done</p>
					  <p>• Can get involved in construction fields</p>
					  <p>• Chilli business</p>
					  <p>• Tobacco business</p>
					  <p>• Timber business</p>
					  <p>• Paper Business</p>
					  <p>• Vibhuti Business</p>
					  <p>• Plant Products Trade</p>
					  <p>• Camphor Business</p>
					  <p>• Pharmaceutical business</p>
					  <p>• Chemical Trade</p>
					  <p>• Lawyer</p>
					  <h5>Occupations of those who are influenced by the Moon:</h5>
					  <p>If the Moon is in the tenth place in a person's horoscope or the place of the person belonging to the tenth place belongs to the house of the Moon, it can be said to have acquired the karakattva of the Moon. The moon is white. So any business with white colored goods will be successful.</p>
					  <p>• Pearl trade</p>
					  <p>• Salt Business</p>
					  <p>• Lime business</p>
					  <p>• Conch business</p>
					  <p>• Fishing</p>
					  <p>• Milk, Curd, Buttermilk, Butter Business</p>

					  <p>• Boat, Barisal</p>
					  <p>• Travel Agency</p>
					  <p>• agriculture</p>
					  <p>• Irrigation Department Jobs</p>
					  <p>• Moist fruit business</p>
					  <p>• Women can take up any profession they like</p>
					  <p>• Fancy Store</p>

					  <p>• Gold, Silver and Covering Shops</p>
					  <p>• Let's catch a card</p>
					  <p>• You can get a job in the government sector, if you try</p>
					  <p>• Become a doctor</p>
					  <p>• Become famous actors</p>
					  <p>• Learn astrology and do business</p>
					  <p>• Become a writer, lyricist</p>

					  <p>• Even those who are considered unfit for anything become servants in some rich houses who can do the work that the women of the house can put in.</p>

					  <h5>Occupations for those who are influenced by Mars.</h5>
					  <p>If Mars is a karakattva planet, then they will become suitable for the following professions.</p>
					  <p>• The real estate sector is the best for them. You can earn income by selling houses and land.</p>
					  <p>• They are there wherever fire is needed. For example, they will find work in brick kilns, burglars, electricity boards, and places that manufacture terrible equipment. Or they will do it themselves.</p>
					  <p>• Most of them know how to cook. The hotel industry will be available to them</p>
					  <p>• Potters can become</p>
					  <p>• Sculptors can become</p>

					  <p>• Become a painter</p>
					  <p>• Get in the police/army</p>
					  <p>• Athletes can become.</p>
					  <p>• Silambam can become a boxer.</p>
					  <p>• Coral Business</p>
					  <p>• Magic, witchcraft, witchcraft and witchcraft are all common</p>
					  <p>• Get a job in a circus</p>

					  <p>• You can profit from big groves</p>
					  <p>• Cultivating land and leasing land suitable for agriculture can be beneficial.</p>

					  <h5>Professions for those who are influenced by Mercury.</h5>
					  <p>• Journalism is suitable for those who are influenced by Mercury. Reporter, sub-editor, teacher</p>
					  <p>• They will be experts in astrology</p>
					  <p>• Insurance industry is the best</p>
					  <p>• They are good in education and will get a job in the field of education.</p>
					  <p>• People with Mercury karakatuvam will become famous writers.</p>

					  <p>• Experts in Patti Manram, Katha Kalotsapam and Oratory</p>
					  <p>• Become a lawyer</p>
					  <p>• Accountancy is the best field.</p>
					  <p>• You can become an advisor to ministers or an ambassador to a foreign country.</p>
					  <p>• The field of software is very suitable.</p>
					  <p>• You will get a good job in the field of radio and television</p>
					  <p>• Those who are devoted to God can study the Vedas and become priests.</p>

					  <p>• Those who want to become a businessman can buy and sell leaves, green gram etc. to get more profit.</p>
					  <p>• You will get a job in the postal department</p>
					  <p>•  Become a teacher</p>
					  <p>•  You can become mathematicians.</p>

					  <h5>Occupations of Guru Karakatva.</h5>
					  <p>• Some people will be interested in the field of spirituality and through that they will get life.</p>
					  <p>• Some become great souls and are saved by others.</p>
					  <p>• Jewelry business and pushper business are suitable.</p>

					  <p>• Lemon, incense, coconut, arecanut, sugarcane jaggery are suitable for business</p>
					  <p>• Generally, they can engage themselves in the spiritual profession such as performing yagnas, performing priestly work, doing katha kalotchapam, doing divine activities, preaching religion, preaching religion in temples, doing trusteeship in temples, staying in mutts, doing service, being a temple priest etc.</p>
					  <p>• Others become the heads of a particular race, religion, region, etc. and make a living through it.</p>
					  <p>• Suitable for insurance industry</p>
					  <p>• Wherever money is in circulation, they are entitled to be cashiers.</p>
					  <p>• If they contest elections, they can become legislators or even ministers.</p>
					  <p>• Many of them are qualified to be lawyers and judges</p>

					  <p>• They will be very involved in politics.</p>
					  <p>• When others are charged and investigated, they hold key positions in the commission.</p>
					  <p>• They can be well involved in the field of administration.</p>
					  <p>• Some people can make a profit by having a grocery store.</p>
					  <p>• Some people will be able to work in gold mines.</p>
					  <p>• Some are also leaders of workers</p>

					  <h5>Occupations for those who are influenced by Venus.</h5>
					  <p>• You can set up a gold shop</p>
					  <p>• Silver jewellery can be made and sold</p>
					  <p>• Bronze business can be done</p>
					  <p>• Artificial stones can be sold</p>
					  <p>• You can become a clothing merchant</p>
					  <p>• Sand can be loaded and supplied</p>
					  <p>• Set up a dairy farm</p>
					  <p>• Laundry can be conducted</p>

					  <p>• Loom weaving can be done</p>
					  <p>• You can have a shop that makes glass frames for pictures</p>
					  <p>• You can run a mirror shop.</p>
					  <p>• Coconut, flowers, fruits and betel nut shops can be set up at the entrance of the temple.</p>
					  <p>• You can have a separate betel nut shop</p>
					  <p>• You can sell flowers</p>
					  <p>• You can do sandalwood business</p>

					  <p>• Tamarind can be placed</p>
					  <p>• Sugarcane can be grown and sold</p>
					  <p>• Manila can be cultivated and sold</p>
					  <p>• Plantations can be profitable</p>
					  <p>• Run a firewood shop</p>
					  <p>• Run a confectionery shop</p>
					  <p>• You can do a business of renting cooking utensils.</p>
					  <p>• You can do utensils business.</p>
					  <p>• You can set up a shop selling music related drums and cymbals.</p>
					  <p>• You can do business in cotton</p>
					  <p>• You can do business in beds and mattresses</p>
					  <p>• Milk, curd etc. can be sold</p>
					  <p>• You can have a livestock farm</p>
					  <p>• You can do business with cents</p>

					  <p>• You can rent vehicles and make a living</p>
					  <p>• Compose music</p>
					  <p>• Become Kalanjars</p>
					  <p>• Let's sing in the background</p>
					  <p>• You can become poets</p>
					  <p>• Generally, they can achieve great things in the field of art</p>
					  <p>• They are fond of entertainment and their life is made through fun</p>

					  <h5>Professions for Saturn Karakattvam people.</h5>

					  <p>• They will be experts in iron and iron related industries.</p>
					  <p>• Those who can work hard will have such a job.</p>
					  <p>• If they sell blue coloured goods, they will make a profit</p>
					  <p>• You can do leather business</p>
					  <p>• Become an oil merchant</p>
					  <p>• Sesame can be cultivated and sold</p>
					  <p>• Run business as brokers</p>
					  <p>• Trading in timber</p>
					  <p>• Suitable for iron business</p>
					  <p>• Perishable goods can be traded</p>
					  <p>• Run a butcher shop</p>
					  <p>• Livestock can be produced and sold and profitable</p>
					  <p>• You can work in the police secret service, in the intelligence service</p>
					  <p>• Can work with wood</p>

					  <p>• Farming can be done</p>
					  <p>• Wage work can be done</p>
					  <p>• Engage in recycling businesses</p>
					  <p>• Penalty, tax collection</p>
					  <p>• Become a pharmacist</p>
					  <p>• Can work in excavation companies</p>
					  <p>• There are chances to work in the field of engineering</p>

					  <p>• Get a job in bomb manufacturing warehouses</p>

					  <h5>Occupations for Rahu karakatva.</h5>
					  <p>• They would have held positions of undercover supervisors in the intelligence service</p>
					  <p>• They will be very good religious people</p>
					  <p>• You can buy and sell old and worn out clothes</p>
					  <p>• You can do pawning business</p>
					  <p>• Stones like rubies and onyx can be sold</p>
					  <p>• You can do lead business</p>
					  <p>• Cereals like cape and black gram can be produced and sold</p>
					  <p>• Wine shops, toddy shops, liquor shops can be run</p>
					  <p>• Run a medical store</p>
					  <p>• Become a broker</p>
					  <p>• Bamboo and granite can be traded</p>
					  <p>• You can do business with anything taken from the sea</p>
					  <p>• Become a tailor</p>

					  <p>• You can do business with buffalo</p>
					  <p>• Loom weaving can be done</p>
					  <p>• You will get a job in the Navy and Air Force</p>
					  <p>• Magic can be learned</p>

					  <h5>Occupations for those who are possessed by Ketu.</h5>
					  <p>• You can get involved in the field of spirituality</p>
					  <p>• Engage in the field of science</p>
					  <p>• Indulge in astrology</p>

					  <p>• Technology can benefit from others</p>
					  <p>• Aluminum utensils can be sold</p>
					  <p>• You can trade in lead and tin</p>
					  <p>• You can do brokerage business</p>
					  <p>• Gems and rubies can be sold</p>
					  <p>• Bank can sell blue goods</p>
					  <p>• You can get involved in the manufacture of fireworks</p>
					  <p>• You can do business with lagiri goods</p>
					  <p>• Run a wine shop</p>
					  <p>• Let's fish</p>
					  <p>• Let's dredge</p>
					  <p>• Pearl bath</p>
					  <p>• You can have a butcher shop</p>
					  <p>• Alchemy can be done</p>

					  <p>• You can earn money by doing magic business</p>
					  <p>• Those who possess this karakattva will be good at stealing.</p>
					  <p>• They are not afraid to kill</p>
					  <p>• There is a possibility of becoming an anti-inflammatory</p>
					  <p>• They will preach religion</p>

					  <h5>Career opportunities based on birth lagna:</h5>
					  <h6>People with Mesha lagna</h6>
					  <p>If a person gets Aries as his birth lagina, Mars belongs to that lagna.</p>
					  <p>Capricorn is the tenth place for this Aries. Aquarius in the eleventh. Saturn has these two houses as his own houses. So Saturn is the lord of life of ten and Saturn is the lord of eleven. Okay, let's look at their business.</p>

					  <p>• You will get jobs in steel related factories</p>
					  <p>• You can also become farmers</p>
					  <p>• Wherever everything is powered by fire, work is easily available.</p>
					  <p>• Jobs may be available in industries such as underground materials such as gold, silver, minerals, coal, minerals.</p>
					  <p>• You will get a chance to work in the medical field.</p>
					  <p>• If you try for the army, you can get a job in it</p>
					  <p>• You will get a job in the police department</p>
					  <p>• Generally, if Saturn belongs to 10th house, you will have to work hard in whatever profession you do.</p>
					  <p>• If Saturn of 10 is sitting in the right place, they will do their own business without being a slave to others.</p>
					  
					  <h6>• If Saturn of 10 is sitting in the right place, they will do their own business without being a slave to others.</h6>
					  <p>If a person gets Taurus lagna as his birth lagna, Venus belongs to that lagna.</p>
					  <p>Aquarius is the tenth place for Taurus and Pisces is the eleventh place. Out of these two houses, Saturn has Aquarius as his own house. Jupiter has Pisces as his own house. So Saturn is the life lord of ten. Guru is the eleventh lapatipati. Okay, let's look at their business.</p>
					  <p>• You can run a restaurant</p>
					  <p>• You can get involved in the field of art like cinema and drama</p>
					  <p>• You can get involved in the field of cosmetics</p>

					  <p>• Women can produce and sell clothes, ornaments and stones that they like</p>

					  <h6>People with Gemini lagna</h6>
					  <p>Mercury belongs to Gemini lagna.</p>
					  <p>Pisces is the tenth place for Gemini. The eleventh place is Aries. Jupiter has Pisces as his own house. Mars is the native house of Aries. Okay, let's look at their business.</p>
					  <p>• The computer industry is best suited for them.</p>
					  <p>• You can search for jobs in aviation sector segments</p>
					  <p>• Publishing a book in the field of publishing is very beneficial</p>
					  <p>• You will get a job in the field of radio and television</p>

					  <p>• You can work in news organizations.</p>
					  <p>• Get a job in nationalized banks</p>
					  <p>• Wherever there is money, they have the opportunity to be cashiers.</p>
					  <p>• Get a job as an accountant</p>

					  <h6>People with Cancer lagna</h6>
					  <p>Moon belongs to Cancer lagna. Aries is the tenth place for Cancer. The eleventh place is Taurus. Mars is the native house of Aries. Venus is the native house of Taurus.<br></br>Okay, let's look at their business.</p>
					  <p>• Any business related to water is good for this lagna.</p>
					  <p>• You will get a job in the shipping industry</p>
					  <p>• Suitable for fishing industry.</p>
					  <p>• Suitable for salt business</p>
					  <p>• Get a job in the army</p>
					  <p>• You will get a job in the police department</p>
					  <p>• Textile business will benefit</p>

					  <h6>People with Leo lagna</h6>
					  <p>Sun belongs to Leo lagna. For Leo, Taurus is in the tenth and Gemini in the eleventh. Venus is the native house of Taurus (lord of life). Mercury is the native house of Gemini (Lapatipati).<br></br>Okay, let's look at their business.</p>
					  <p>• You will get police and security jobs.</p>

					  <p>• Forest Department Jobs Available</p>
					  <p>• You will get a job in the computer industry. In particular, jobs like System Administrator and Network Administrator are easily available.</p>
					  <p>• You will get a job easily in the government sector</p>
					  <p>• If they get involved in politics, they will come forward very quickly</p>
					  <p>• Underground fresh water extraction, mining, excavation, etc. will be available</p>


					  <h6>People with Virgo lagna</h6>
					  <p>Mercury belongs to Virgo lagna. Mercury is the lord of the tenth house and Moon is the lord of the eleventh.<br></br>Okay, let's look at their business.</p>
					  <p>• Mercury is the lord of the two houses belonging to lagna and ten, and has the business of completely empowering others. Therefore, any profession that employs others is suitable for them.</p>

					  <p>• Many more subtle artistic tasks can be done.</p>
					  <p>• You can make a living by singing music or teaching.</p>
					  <p>• Writers can become</p>
					  <p>• You can make a living by dancing</p>
					  <p>• You can do business related to arts</p>
					  <p>• They can also be involved in various activities related to education.</p>

					  <h6>People with Libra lagna</h6>
					  <p>Venus belongs to Libra lagna. Cancer is the tenth place for lagna. The eleventh place is Leo. Moon is the lord of ten. The Sun is the lord of the eleventh.<br></br>

Okay, let's look at their business.</p>
					  <p>• Women can trade whatever they want.</p>
					  <p>• Let's have a fancy store.</p>
					  <p>• You can do a grocery business selling rice, dal and tamarind for household use.</p>
					  <p>• You can sell vegetables and flowers</p>
					  <p>• Cow milk, curd, buttermilk, buttermilk, ghee etc. can be sold.</p>
					  <p>• White coloured goods can be sold.</p>

					  <h6>People with Scorpio lagna</h6>
					  <p>Mars belongs to Scorpio lagna. Leo is the tenth place for lagna. The eleventh place is Virgo. Sun is the lord of ten. Mercury is the lord of the eleventh.<br></br>Okay, let's look at their business.</p>

					  <p>• They can earn money by telling astrology</p>
					  <p>• You can earn money by doing magic tricks and becoming famous as magicians</p>
					  <p>• You can also earn money by doing magic, magic and magic.</p>
					  <p>• They will get jobs in the judiciary</p>
					  <p>• They will find something useful to the people and become famous and benefit from it.</p>
					  <p>• They will be involved in the field of chemicals.</p>
					  <p>• Many of them are involved in the medical field.</p>

					  <h6>People with Sagittarius lagna</h6>

					  <p>Jupiter belongs to Sagittarius lagna. Virgo is the tenth place from lagna. The eleventh place is Libra. Mercury is the lord of ten. Venus is the lord of the eleventh.<br></br>

Okay, let's look at their business.</p>
					  <p>• They can sell wooden products profitably.</p>
					  <p>• You can manufacture and sell chemical products. You can work in medical related business.</p>
					  <p>• You can get involved in building related work</p>
					  <p>• You can be involved in selling building related items.</p>

					  <h6>People with Capricorn lagna</h6>
					  <p>Saturn belongs to Capricorn lagna. Libra is the tenth place from lagna. The eleventh place is Vrishika. Venus is the lord of ten. Mars is the lord of the eleventh.
<br></br>
Okay, let's look at their business.</p>
					  <p>• They have the opportunity to work in chemical related fields</p>
					  <p>• You will get the opportunity to perform a variety of tasks that are considered a crime by law</p>
					  <p>• They can conduct themselves with objects such as water, liquid, etc.</p>
					  <p>• They may be under police surveillance.</p>

					  <h6>People with Aquarius lagna</h6>
					  <p>Saturn belongs to Aquarius lagna. Scorpio is the tenth place for lagna. The eleventh place is Sagittarius. Mars is the lord of ten. Guru is the eleventh lapatipati.
<br></br>
Okay, let's look at their business.</p>
					  <p>• They will accumulate wealth by engaging in sports activities.</p>
					  <p>• You get a job in the police department.</p>
					  <p>• If you try to join the army, you will get results.</p>

					  <p>• You will get results from various fights like boxing.</p>
					  <p>• They have the privilege of earning income through rudeness.</p>

					  <h6>People with Pisces lagna</h6>
					  <p>Jupiter belongs to Pisces lagna and Sagittarius is the tenth house for lagna. The eleventh place is Capricorn. Guru is the lord of ten lives. Saturn is the lord of the eleventh.
<br></br>
Okay, let's look at their business.</p>
					  <p>• Whatever profession they do, it will be a profession that others consider respectable.</p>
					  <p>• Could be teachers</p>
					  <p>• Could be a preacher</p>
					  <p>• Guide others</p>

					  <p>• Let's go into the spiritual field</p>
					  <p>• They lead a life of justice and honesty.</p>
					  <p>• You will get a sacred job</p>
					 
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

export default Business;
