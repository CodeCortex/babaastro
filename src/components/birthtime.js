import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer';
import Birth from './blog-components/birth';

const BirthTime = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Birthtime Rectification Research"  />
        <Birth />
        <Footer />
    </div>
}

export default BirthTime

