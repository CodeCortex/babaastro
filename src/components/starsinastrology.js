import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer';
import Starss from './blog-components/starss';

const StarsInAstrology = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Stars In Astrology"  />
        <Starss />
        <Footer />
    </div>
}

export default StarsInAstrology

