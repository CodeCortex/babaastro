import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer';

import Lizard from './blog-components/lizard';

const LizardAstrology = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Lizard Astrology"  />
        <Lizard />
        <Footer />
    </div>
}

export default LizardAstrology

