import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer';
import Nadi from './blog-components/Nadi';

const NadiAstrology = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Nadi Astrology"  />
        <Nadi />
        <Footer />
    </div>
}

export default NadiAstrology

