import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer';
import Dosha from './blog-components/dosha';

const DoshaDetail = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Yogas and Doshas"  />
        <Dosha />
        <Footer />
    </div>
}

export default DoshaDetail

