import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import Trending from './section-components/trending-v3';
import TrendingV4 from './section-components/trending-v4';
import Catv2 from './section-components/cat-section-v2';
import NewsLatter from './section-components/newsletter';
import VideoV2 from './section-components/video-v2';
import Ads from './section-components/add-v2';
import TrendingV5 from './section-components/trending-v5';
import Footer from './global-components/footer';
import Sidebar from './blog-components/sidebar';

const Home_V2 = () => {
    return <div>
         
        <Navbar />    <div className="row "><Sidebar/>
        <div className="col-lg-8 pd-top-50  ">
    
        <Banner />
        <Trending />
        <TrendingV4 />
        <Catv2 />
        <NewsLatter />
        <VideoV2 />
        <Ads />
        <TrendingV5 />
        </div>
        <Sidebar/></div>
        <Footer />

    </div>
}

export default Home_V2

