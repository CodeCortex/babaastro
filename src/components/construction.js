import React from 'react';
import Navbar from './global-components/navbar';
import Footer from './global-components/footer';

const Construction = () => {
  const styles = {
    wrapper: {
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: 'none',
      color: '#333',
      fontFamily: 'Georgia, serif',
      position: 'relative',
    },
    message: {
      fontSize: '2.5rem',
      color: '#c1121f',
      fontWeight: 'bold',
      maxWidth: '800px',
      lineHeight: '1.4',
    },
    // Media query for small screens
    '@media (maxWidth: 600px)': {
      message: {
        fontSize: '1.5rem',
      },
    },
  };

  return (
    <div>
      <Navbar />
      <div style={styles.wrapper}>
        <p style={styles.message}>🔧 This page is currently under construction. Please check back soon for more updates from the stars ✨</p>
      </div>
      <Footer />
    </div>
  );
};

export default Construction;
