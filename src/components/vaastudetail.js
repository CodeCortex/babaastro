import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer';
import Vaastu from './blog-components/Vaastu';

const Vaastudetail = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Vastu Purush Mandala And Devata"  />
        <Vaastu />
        <Footer />
    </div>
}

export default Vaastudetail

