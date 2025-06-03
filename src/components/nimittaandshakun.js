import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer';
import Nimitta from './blog-components/nimitta';

const NimmittaAndShakun = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Nimitta and Shakun"  />
        <Nimitta />
        <Footer />
    </div>
}

export default NimmittaAndShakun

