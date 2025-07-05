import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer';

import Dream from './blog-components/dream';

const DreamAstrology = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Dream Astrology"  />
        <Dream />
        <Footer />
    </div>
}

export default DreamAstrology

