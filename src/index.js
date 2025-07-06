import React, { Component, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import HomeV1 from './components/home-v1';
import HomeV2 from './components/home-v2';
import HomeV3 from './components/home-v3';
import CatPage from './components/cat-page';
import CatSports from './components/cat-sports';
import lifeStyle from './components/cat-life-style';
import Fashion from './components/cat-fashion';
import Author from './components/author';
import Error from './components/error';
import Blog from './components/blog';
import BlogDetails from './components/blog-details';
import Vaastudetail from './components/vaastudetail';
import Janmadetail from './components/janmadetail';
import Zodiacdetail from './components/zodiacdetail';
import Businessdetail from './components/businessdetail';
import Vastuservicedetail from './components/vastuservicedetail';
import AstrologyReport from './components/astrologyReport/AstrologyReport';
import Gemology from './components/consultation/Gemology';
import MarriageMatching from './components/consultation/MarriageMatching';
import Numerology from './components/consultation/Numerology';
import Prasannam from './components/consultation/Prasannam';
import VastuConsultation from './components/consultation/VastuConsultation';
// import Service from './components/services/Service.jsx';
// import Astrology from './components/services/Astrology.jsx';
import GemologyService from './components/services/GemologyService.jsx';
import MarriageMatchingService from './components/services/MarriageMatchingService.jsx';
import NumerologyService from './components/services/NumerologyService.jsx';
import PrasannamService from './components/services/PrasannamService.jsx';
import VastuService from './components/services/VastuService.jsx';
import VaastuBlog from './components/blog/vaastu/VaastuBlog.jsx';
import SignInAstrology from './components/blog-components/SignInAstrology.jsx';
import Planetinastrology from './components/blog-components/Planetsinastrology.jsx';
import Divison from './components/blog-components/Divison.jsx';



import DivisionalChartsPage from './components/blog-components/DivisionalChartsPage.jsx';
import Division1 from './components/blog-components/Division1.jsx';
import Division2 from './components/blog-components/Division2.jsx';
import Division4 from './components/blog-components/Division4.jsx';
import Division3 from './components/blog-components/Division3.jsx';
import Division5 from './components/blog-components/Division5.jsx';
import Division6 from './components/blog-components/Division6-9/Division6.jsx';
import Division24 from './components/blog-components/Division24.jsx';
// import Division6 from './components/blog-components/Division6.jsx';
// import Division7 from './components/blog-components/Division7.jsx';
// import Division9 from './components/blog-components/Division9.jsx';
// import planetstrength from './components/blog-components/planetstrength.jsx';
import vedicastrology from './components/blog-components/vedicastrology.jsx';
import astrologyroadmap from './components/blog-components/astrologyroadmap.jsx';

import Division30 from './components/blog-components/Division30.jsx';
import Division60 from './components/blog-components/Division60.jsx';
import Division7 from './components/blog-components/Division6-9/Division7.jsx';




import "./utils/i18n/i18n.js"
import LizardAstrology from './components/lizardastrology.js';
import DreamAstrology from './components/dreamastrology.js';
import DoshaDetail from './components/doshadetail.js';
import BirthTime from './components/birthtime.js';
import Palmistry from './components/palmistry.js';
import StarsInAstrology from './components/starsinastrology.js';
import DashaSystem from './components/dashasystem.js';
import NadiAstrology from './components/nadiastrology.js';
import NimmittaAndShakun from './components/nimittaandshakun.js';
import AstrologyService from './components/services/AstrologyService.jsx';
import Ascendantsinastrology from './components/blog-components/Ascendantsinastrology.jsx';
import HouseInAstrology from './components/blog-components/HouseInAstrology.jsx';
import KundaliMatching from './components/blog-components/KundaliMatching.jsx';
import Muhurtha from './components/blog-components/Muhurtha.jsx';
import Division9 from './components/blog-components/Division6-9/Division9.jsx';
import Desktop63 from './components/blog-components/Desktop63-64/Desktop63.jsx';
import Desktop64 from './components/blog-components/Desktop63-64/Desktop64.jsx';







class Root extends Component {
	render() {
		return (
			<Suspense fallback={<div>Loading...</div>}>

				<HashRouter basename="/">
					<div>
						<Switch>
							<Route exact path="/" component={HomeV1} />
							<Route path="/home-v2" component={HomeV2} />
							<Route path="/home-v3" component={HomeV3} />
							<Route path="/astrologyReport" component={AstrologyReport} />
							<Route path="/gemology" component={Gemology} />
							<Route path="/marriageMatching" component={MarriageMatching} />
							<Route path="/numerology" component={Numerology} />
							<Route path="/prasannam" component={Prasannam} />
							<Route path="/vastuConsultation" component={VastuConsultation} />
							<Route path="/astrologyservice" component={AstrologyService} />
							<Route path="/gemologyservice" component={GemologyService} />
							<Route path="/marriagematchingservice" component={MarriageMatchingService} />
							<Route path="/numerologyservice" component={NumerologyService} />
							<Route path="/prasannamservice" component={PrasannamService} />
							<Route path="/vastuservice" component={VastuService} />
							<Route path="/vaastublog" component={VaastuBlog} />






							<Route path="/cat-page" component={CatPage} />
							<Route path="/cat-sports" component={CatSports} />
							<Route path="/cat-life-style" component={lifeStyle} />
							<Route path="/cat-fashion" component={Fashion} />

							<Route path="/author" component={Author} />
							<Route path="/error" component={Error} />
							<Route path="/blog" component={Blog} />
							<Route path="/blog-details" component={BlogDetails} />
							<Route path="/vaastudetail" component={Vaastudetail} />
							<Route path="/janmadetail" component={Janmadetail} />
							<Route path="/zodiacdetail" component={Zodiacdetail} />
							<Route path="/businessdetail" component={Businessdetail} />
							<Route path="/vastuservicedetail" component={Vastuservicedetail} />
							<Route path="/lizardastrology" component={LizardAstrology} />
							<Route path="/dreamastrology" component={DreamAstrology} />
							<Route path="/doshadetail" component={DoshaDetail} />
							<Route path="/birthtime" component={BirthTime} />
							<Route path="/palmistry" component={Palmistry} />
							<Route path="/starsinastrology" component={StarsInAstrology} />
							<Route path="/dashasystem" component={DashaSystem} />
							<Route path="/nadiastrology" component={NadiAstrology} />
							<Route path="/nimittaandshakun" component={NimmittaAndShakun} />
							<Route path="/signinastrology" component={SignInAstrology} />
							<Route path="/planetinastrology" component={Planetinastrology} />
							<Route path="/ascendantsinastrology" component={Ascendantsinastrology} />
							<Route path="/houseinastrology" component={HouseInAstrology} />
							<Route path="/kundalimatching" component={KundaliMatching} />
							<Route path="/muhurtha" component={Muhurtha} />
							feature/blogupdate2
							{/* <Route path="/planetstrength" component={planetstrength} /> */}
							<Route path="/vedicastrology" component={vedicastrology} />
							<Route path="/astrologyroadmap" component={astrologyroadmap} />


							{/* <Route path="/division" component={Divison} /> */}
							{/* <Route path="/division2" component={Division2} /> */}
							<Route path="/division3" component={Division3} />
							<Route path="/division6" component={Division6} />
							<Route path="/division7" component={Division7} />
							<Route path="/division9" component={Division9} />
							<Route path="/desktop63" component={Desktop63} />
							<Route path="/desktop64" component={Desktop64} />
							<Route path="/division5" component={Division5} />
							{/* <Route path="/division10" component={Division10} />
							<Route path="/division12" component={Division12} />
							<Route path="/division16" component={Division16} /> */}

							{/* <Route path="/divison" component={Divison} /> */}
							{/* <Route path="/divison2" component={Division2} /> */}
							<Route path="/divison3" component={Division3} />
							<Route path="/divison5" component={Division5} />
							main
							<Route path="/division24" component={Division24} />
							<Route path="/divison30" component={Division30} />
							<Route path="/divison60" component={Division60} />

							<Route path="/blog-components/SignInAstrology" component={SignInAstrology} />
							<Route path="/blog-components/Planetsinastrology" component={Planetinastrology} />
							<Route path="/blog-components/Divison" component={Divison} />
							<Route path="/blog-components/Division2" component={Division2} />
							<Route path="/blog-components/Division3" component={Division3} />
							<Route path="/blog-components/Division5" component={Division5} />
							<Route path="/blog-components/Division24" component={Division24} />
							<Route path="/blog-components/Division30" component={Division30} />
							<Route path="/blog-components/Division60" component={Division60} />

							<Route path="/division" component={DivisionalChartsPage} />
							<Route path="/blog-components/D1" component={Division1} />
							<Route path="/blog-components/D2" component={Division1} />
							<Route path="/blog-components/D4" component={Division1} />

							<Route path="*" component={Error} />



							{/* Make your new Routes here */}




						</Switch>
					</div>
				</HashRouter>
			</Suspense>
		)
	}
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('nextpage'));
