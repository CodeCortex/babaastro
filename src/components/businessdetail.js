import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer';
import Business from './blog-components/business';

const Businessdetail = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="For Profession/Business"  />
        <Business />
        <Footer />
    </div>
}

export default Businessdetail

