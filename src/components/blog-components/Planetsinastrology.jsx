import React from 'react';

const BabaAstroBlog = () => {
  const planets = [
    {
      name: 'Sun (சூரியன் / Surya)',
      details: [
        ['Represents', 'Soul, ego, father, authority, government'],
        ['Nature', 'Masculine, fiery, royal'],
        ['Zodiac Sign', 'Leo (சிம்மம்)'],
        ['Day', 'Sunday'],
        ['Color', 'Orange/Red'],
        ['Positive Traits', 'Leadership, confidence, dignity'],
        ['Negative Traits', 'Egotism, arrogance']
      ],
      img: '/assets/img/pla_in_asr/1a.jpg'
    },
    {
      name: 'Moon (சந்திரன் / Chandra)',
      details: [
        ['Represents', 'Mind, emotions, mother, sensitivity'],
        ['Nature', 'Feminine, watery, nurturing'],
        ['Zodiac Sign', 'Cancer (கடகம்)'],
        ['Day', 'Monday'],
        ['Color', 'White/Silver'],
        ['Positive Traits', 'Intuition, peace, empathy'],
        ['Negative Traits', 'Mood swings, insecurity']
      ],
      img: '/assets/img/pla_in_asr/2a.jpg'
    },
    {
      name: 'Mars (செவ்வாய் / Chevai)',
      details: [
        ['Represents', 'Energy, courage, siblings, aggression'],
        ['Nature', 'Masculine, fiery, action-oriented'],
        ['Zodiac Signs', 'Aries (மேஷம்), Scorpio (விருச்சிகம்)'],
        ['Day', 'Tuesday'],
        ['Color', 'Red'],
        ['Positive Traits', 'Bravery, ambition, drive'],
        ['Negative Traits', 'Anger, impulsiveness']
      ],
      img: '/assets/img/pla_in_asr/3a.jpg'
    },
    {
      name: 'Mercury (புதன் / Budhan)',
      details: [
        ['Represents', 'Intelligence, communication, logic, youth'],
        ['Nature', 'Dual-natured, quick'],
        ['Zodiac Signs', 'Gemini (மிதுனம்), Virgo (கன்னி)'],
        ['Day', 'Wednesday'],
        ['Color', 'Green'],
        ['Positive Traits', 'Smart, witty, versatile'],
        ['Negative Traits', 'Nervous, trickster']
      ],
      img: '/assets/img/pla_in_asr/4a.jpg'
    },
    {
      name: 'Jupiter (குரு / Guru)',
      details: [
        ['Represents', 'Wisdom, teacher, wealth, dharma'],
        ['Nature', 'Masculine, benefic, spiritual'],
        ['Zodiac Signs', 'Sagittarius (தனுசு), Pisces (மீனம்)'],
        ['Day', 'Thursday'],
        ['Color', 'Yellow'],
        ['Positive Traits', 'Generous, wise, optimistic'],
        ['Negative Traits', 'Careless, over-promising']
      ],
      img: '/assets/img/pla_in_asr/5a.jpg'
    },
    {
      name: 'Venus (சுக்கிரன் / Sukran)',
      details: [
        ['Represents', 'Love, beauty, luxury, art, wife'],
        ['Nature', 'Feminine, gentle, artistic'],
        ['Zodiac Signs', 'Taurus (ரிஷபம்), Libra (துலாம்)'],
        ['Day', 'Friday'],
        ['Color', 'White/Pink'],
        ['Positive Traits', 'Charming, romantic, creative'],
        ['Negative Traits', 'Overindulgent, materialistic']
      ],
      img: '/assets/img/pla_in_asr/6a.jpg'
    },
    {
      name: 'Saturn (சனி / Shani)',
      details: [
        ['Represents', 'Karma, delay, hard work, discipline'],
        ['Nature', 'Masculine, slow, strict, karmic'],
        ['Zodiac Signs', 'Capricorn (மகரம்), Aquarius (கும்பம்)'],
        ['Day', 'Saturday'],
        ['Color', 'Blue/Black'],
        ['Positive Traits', 'Patient, responsible, structured'],
        ['Negative Traits', 'Fearful, pessimistic, harsh']
      ],
      img: '/assets/img/pla_in_asr/7a.jpg'
    },
    {
      name: 'Rahu (ராகு) – Shadow Planet',
      details: [
        ['Represents', 'Desire, obsession, foreign things, illusion'],
        ['Nature', 'Mysterious, malefic, high risk'],
        ['Zodiac Influence', 'Aquarius (உக்ரம்)'],
        ['Day', 'Saturday'],
        ['Color', 'Smoky'],
        ['Positive Traits', 'Innovative, ambitious'],
        ['Negative Traits', 'Addictive, deceptive']
      ],
      img: '/assets/img/pla_in_asr/8a.jpg'
    },
    {
      name: 'Ketu (கேது) – Shadow Planet',
      details: [
        ['Represents', 'Detachment, spirituality, moksha'],
        ['Nature', 'Mystical, malefic, spiritual'],
        ['Zodiac Influence', 'Scorpio and Pisces (மீனம்)'],
        ['Day', 'Saturday'],
        ['Color', 'Gray/Ash'],
        ['Positive Traits', 'Introspective, enlightened'],
        ['Negative Traits', 'Isolation, confusion']
      ],
      img: '/assets/img/pla_in_asr/9a.jpg'
    }
  ];

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: '#7a0000', color: '#fff' }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/pla_in_asr/bg.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          width: '100%',
          height: '125vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#A3CBFF',
          margin: 0,
          padding: 0,
          border: 'none'
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <h1
            style={{
              fontSize: '80px',
              textShadow: '2px 2px 3px black',
              paddingTop: '250px',
              paddingBottom: '10px',
              marginBottom: '250px',
              fontWeight: 700,
              fontFamily: "'Poppins', sans-serif"
            }}
            className="text-white text-center"
          >
            Planets in Vedic <br /> Astrology
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
        {planets.map((planet, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: index % 2 === 1 ? 'row-reverse' : 'row',
              alignItems: 'center',
              marginBottom: '60px',
              flexWrap: 'wrap',
              backgroundColor: '#7a0000',
              borderRadius: '20px',
              padding: '30px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
            }}
          >
            <div style={{ flex: '1 1 50%', padding: '0 20px' }}>
              <h2 style={{ fontSize: '40px', color: '#ffe066', marginBottom: '20px' }}>{planet.name}</h2>
              {planet.details.map(([label, value], i) => (
                <p key={i} style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '15px' }}>
                  <b>{label}:</b> {value}
                </p>
              ))}
            </div>

            <div style={{ flex: '1 1 50%', textAlign: 'center' }}>
              <img
                src={process.env.PUBLIC_URL + planet.img}
                alt={planet.name}
                style={{ maxWidth: '80%', borderRadius: '20px' }}
              />
            </div>
          </div>
        ))}

        {/* Final Call-to-Action Section */}
        <div style={{ marginTop: '60px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2em',marginBottom: '20px', color: '#fff' }}>Click for video</h1>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/SKeF4Ymwt1Y"
            title="Astrological Video"
            frameBorder="0"
            allowFullScreen
            style={{ borderRadius: 8 }}
          ></iframe>

          <div style={{ marginTop: '40px' }}>
            <p style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#fff' }}>
              Astrological remedies if you were not able to buy a house
            </p>
            <button
              style={{
                backgroundColor: '#ff0000',
                color: 'white',
                padding: '12px 24px',
                border: 'none',
                borderRadius: 5,
                fontSize: 16,
                cursor: 'pointer'
              }}
            >
              Check Now
            </button>
          </div>

          <div style={{ marginTop: '20px' }}>
            <p style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#fff' }}>
              Ask a question talk to the best astrologer
            </p>
            <button
              style={{
                backgroundColor: '#25D366',
                color: 'white',
                padding: '12px 24px',
                border: 'none',
                borderRadius: 5,
                fontSize: 16,
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

export default BabaAstroBlog;
