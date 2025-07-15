import React from 'react';

const RashiAstroBlog = () => {
  const rashis = [
    {
      name: 'Mesha Rasi (Aries)',
      element: 'Fire',
      ruler: 'Mars (Chevvai)',
      traits: 'Bold, energetic, action-oriented, courageous, sometimes impulsive and short-tempered.',
      img: '/assets/img/rashi/aries.jpg'
    },
    {
      name: 'Vrishabha Rasi (Taurus)',
      element: 'Earth',
      ruler: 'Venus (Sukran)',
      traits: 'Calm, loyal, practical, pleasure-loving. May be slow to change or stubborn.',
      img: '/assets/img/rashi/taurus.jpg'
    },
    {
      name: 'Mithuna Rasi (Gemini)',
      element: 'Air',
      ruler: 'Mercury (Budhan)',
      traits: 'Adaptable, witty, curious. Likes variety and communication.',
      img: '/assets/img/rashi/gemini.jpg'
    },
    {
      name: 'Kataka Rasi (Cancer)',
      element: 'Water',
      ruler: 'Moon (Chandran)',
      traits: 'Emotional, nurturing, family-oriented, sensitive. Can be moody or protective.',
      img: '/assets/img/rashi/cancer.jpg'
    },
    {
      name: 'Simha Rasi (Leo)',
      element: 'Fire',
      ruler: 'Sun (Surya)',
      traits: 'Proud, confident, charismatic, natural leader. Likes attention and appreciation.',
      img: '/assets/img/rashi/leo.jpg'
    },
    {
      name: 'Kanni Rasi (Virgo)',
      element: 'Earth',
      ruler: 'Mercury (Budhan)',
      traits: 'Logical, detail-oriented, disciplined, helpful. Often health-conscious and critical.',
      img: '/assets/img/rashi/virgo.jpg'
    },
    {
      name: 'Thula Rasi (Libra)',
      element: 'Air',
      ruler: 'Venus (Sukran)',
      traits: 'Balanced, diplomatic, artistic. Loves social harmony and relationships.',
      img: '/assets/img/rashi/libra.jpg'
    },
    {
      name: 'Vrischika Rasi (Scorpio)',
      element: 'Water',
      ruler: 'Mars (Chevvai) & Ketu',
      traits: 'Intense, mysterious, passionate, focused, emotionally deep and determined.',
      img: '/assets/img/rashi/scorpio.jpg'
    },
    {
      name: 'Dhanusu Rasi (Sagittarius)',
      element: 'Fire',
      ruler: 'Jupiter (Guru)',
      traits: 'Optimistic, adventurous, freedom-loving, philosophical. Loves travel and truth-seeking.',
      img: '/assets/img/rashi/sagittarius.jpg'
    },
    {
      name: 'Makara Rasi (Capricorn)',
      element: 'Earth',
      ruler: 'Saturn (Shani)',
      traits: 'Ambitious, disciplined, responsible, practical. Hardworking and goal-focused.',
      img: '/assets/img/rashi/capricorn.jpg'
    },
    {
      name: 'Kumbha Rasi (Aquarius)',
      element: 'Air',
      ruler: 'Saturn (Shani)',
      traits: 'Innovative, humanitarian, independent, unconventional. Thinks ahead of the times.',
      img: '/assets/img/rashi/aquarius.jpg'
    },
    {
      name: 'Meena Rasi (Pisces)',
      element: 'Water',
      ruler: 'Jupiter (Guru)',
      traits: 'Compassionate, imaginative, spiritual, emotional. Strong intuition and artistic nature.',
      img: '/assets/img/rashi/pisces.jpg'
    }
  ];

  return (
    <div style={{ backgroundColor: '#003f5c', color: '#fff', fontFamily: 'Poppins, sans-serif' }}>
      <div style={{
        backgroundImage: `url('/assets/img/rashi/bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 0',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '60px', fontWeight: 700, color: '#fff', textShadow: '2px 2px 5px #000' }}>
          Rashi in Astrology
        </h1>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        {rashis.map((rashi, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
            alignItems: 'center',
            marginBottom: '60px',
            flexWrap: 'wrap',
            backgroundColor: '#2f4b7c',
            borderRadius: '20px',
            padding: '30px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
          }}>
            <div style={{ flex: '1 1 50%', padding: '0 20px' }}>
              <h2 style={{ fontSize: '30px', color: '#f9c74f', marginBottom: '15px' }}>{rashi.name}</h2>
              <p><b>Element:</b> {rashi.element}</p>
              <p><b>Ruler:</b> {rashi.ruler}</p>
              <p><b>Traits:</b> {rashi.traits}</p>
            </div>
            <div style={{ flex: '1 1 50%', textAlign: 'center' }}>
              <img
                src={rashi.img}
                alt={rashi.name}
                style={{ maxWidth: '80%', borderRadius: '20px' }}
              />
            </div>
          </div>
        ))}

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <h2 style={{ fontSize: '2em', marginBottom: '20px' }}>Click for video</h2>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/SKeF4Ymwt1Y"
            title="Astrology Video"
            frameBorder="0"
            allowFullScreen
            style={{ borderRadius: '8px' }}
          ></iframe>

          <div style={{ marginTop: '40px' }}>
            <p style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
              Astrological remedies if you were not able to buy a house
            </p>
            <button
              style={{
                backgroundColor: '#f94144',
                color: '#fff',
                padding: '12px 24px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              Check Now
            </button>
          </div>

          <div style={{ marginTop: '20px' }}>
            <p style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
              Ask a question talk to the best astrologer
            </p>
            <button
              style={{
                backgroundColor: '#25D366',
                color: '#fff',
                padding: '12px 24px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              Chat in WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RashiAstroBlog;
