
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
import Division2 from './components/blog-components/Division2.jsx';
import Division3 from './components/blog-components/Division3.jsx';
import Division5 from './components/blog-components/Division5.jsx';


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




class Root extends Component {
    render() {
        return(
			<Suspense fallback={<div>Loading...</div>}>

                <HashRouter basename="/">
	                <div>
	                <Switch>
	                    <Route exact path="/" component={HomeV1} />
	                    <Route  path="/home-v2" component={HomeV2} />
	                    <Route  path="/home-v3" component={HomeV3} />
						<Route path="/astrologyReport" component={AstrologyReport}/>
						<Route path="/gemology" component={Gemology}/>
						<Route path="/marriageMatching" component={MarriageMatching}/>
						<Route path="/numerology" component={Numerology}/>
						<Route path="/prasannam" component={Prasannam}/>
						<Route path="/vastuConsultation" component={VastuConsultation}/>
						<Route path="/astrologyservice" component= {AstrologyService}/>
						<Route path="/gemologyservice" component= {GemologyService}/>
						<Route path="/marriagematchingservice" component= {MarriageMatchingService}/>
						<Route path="/numerologyservice" component= {NumerologyService}/>
						<Route path="/prasannamservice" component= {PrasannamService}/>
						<Route path="/vastuservice" component= {VastuService}/>
						<Route path="/vaastublog" component= {VaastuBlog}/>
						



						

	                    <Route  path="/cat-page" component={CatPage} />
	                    <Route  path="/cat-sports" component={CatSports} />
	                    <Route  path="/cat-life-style" component={lifeStyle} />
	                    <Route  path="/cat-fashion" component={Fashion} />
						
	                    <Route  path="/author" component={Author} />
	                    <Route  path="/error" component={Error} />
	                    <Route  path="/blog" component={Blog} />
	                    <Route  path="/blog-details" component={BlogDetails} />
											<Route  path="/vaastudetail" component={Vaastudetail} />
											<Route  path="/janmadetail" component={Janmadetail}/>
											<Route  path="/zodiacdetail" component={Zodiacdetail}/>
											<Route  path="/businessdetail" component={Businessdetail}/>
											<Route  path="/vastuservicedetail" component={Vastuservicedetail}/>
											<Route  path="/lizardastrology" component={LizardAstrology}/>
											<Route  path="/dreamastrology" component={DreamAstrology}/>
											<Route  path="/doshadetail" component={DoshaDetail}/>
											<Route  path="/birthtime" component={BirthTime}/>
											<Route  path="/palmistry" component={Palmistry}/>
											<Route  path="/starsinastrology" component={StarsInAstrology}/>
											<Route  path="/dashasystem" component={DashaSystem}/>
											<Route  path="/nadiastrology" component={NadiAstrology}/>
											<Route  path="/nimittaandshakun" component={NimmittaAndShakun}/>
											<Route path="/signinastrology" component={SignInAstrology}/>
											<Route path="/planetinastrology" component={Planetinastrology}/>
											<Route path="/ascendantsinastrology" component={Ascendantsinastrology}/>
											<Route path="/houseinastrology" component={HouseInAstrology}/>
											<Route path="/kundalimatching" component={KundaliMatching}/>
											<Route path="/muhurtha" component={Muhurtha}/>
											<Route path="/divison" component={Divison}/>
											<Route path="/divison2" component={Division2}/>
											<Route path="/divison3" component={Division3}/>
											<Route path="/divison5" component={Division5}/>




	                </Switch>
	                </div>
                </HashRouter>
				</Suspense>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('nextpage'));
