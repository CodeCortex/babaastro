import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer';
import Vastuservice from './blog-components/vastuservice';

const Vastuservicedetail = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Vastu "  />
        <Vastuservice />
        <Footer />
    </div>
}

export default Vastuservicedetail

