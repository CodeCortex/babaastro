import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer';
import Janma from './blog-components/janma';

const Janmadetail = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Janma Nakshatram"  />
        <Janma />
        <Footer />
    </div>
}

export default Janmadetail

