import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer';
import Zodiac from './blog-components/zodiac';

const Zodiacdetail = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Zodiac Factors"  />
        <Zodiac />
        <Footer />
    </div>
}

export default Zodiacdetail

