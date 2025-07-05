import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer';
import Dasha from './blog-components/dasha';

const DashaSystem = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Dasha System"  />
        <Dasha />
        <Footer />
    </div>
}

export default DashaSystem

