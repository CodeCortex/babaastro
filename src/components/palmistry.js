import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer';
import Palm from './blog-components/palm';

const Palmistry = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Palmistry"  />
        <Palm />
        <Footer />
    </div>
}

export default Palmistry

