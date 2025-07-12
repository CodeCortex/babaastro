import React from 'react';

const Division5 = () => {
  const publicUrl = process.env.PUBLIC_URL || "";

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${publicUrl}/assets/img/blog/division/d5/cde9c7335becd495a5887ef47d6077ebb8f74dca.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '12vw',
            textShadow: '4px 4px 8px rgba(0,0,0,0.8)',
          }}
          className="text-white font-extrabold"
        >
          D5
        </h1>
      </div>

      {/* Ad Section */}
      <div
        style={{
          background: '#A2D400',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          borderRadius: '12px',
          width: '90%',
          margin: '-80px auto 40px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <p
          style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            fontWeight: 'bold',
            fontSize: '20px',
            flex: 1,
          }}
        >
          Space for website ad
        </p>
        <img
          src={`${publicUrl}/assets/img/blog/division/d5/1298f8baccd5eddd42bb45413c2c169e7e7f2dfc.png`}
          alt="Ad"
          style={{ width: '120px', marginLeft: '1rem', borderRadius: '100%' }}
        />
      </div>

      {/* Content Section */}
      <div
        className="w-full py-20 px-4 flex flex-col justify-center items-center"
        style={{ background: 'linear-gradient(to bottom, #A2D400 0%, rgb(5, 79, 24) 40%)' }}
      >
        <div style={{ backgroundColor: 'white', width: '90%', borderRadius: '16px', padding: '2rem' }}>
          <div className='flex flex-col md:flex-row gap-6 mb-16'>
            <img
              src={`${publicUrl}/assets/img/blog/division/d5/337d07dba3554d0e05b127fe896d8fa0d19360fc.jpg`}
              alt="D5 Chart"
              className='md:w-1/2 w-full rounded-lg'
            />
            <div className='md:w-1/2 w-full flex flex-col justify-center gap-4'>
              <h2 className='text-2xl font-bold text-[#5D0000]'>Why the D5 Chart Matters in Vedic Astrology</h2>
              <p className='text-base text-black font-medium'>
                The D5 chart, known as Poorvapunya Varga, plays a vital role in revealing the spiritual legacy and hidden merits of past lives. Even when a person faces material or worldly struggles, a strong D5 chart indicates divine protection and inner strength to overcome karmic obstacles. This chart is especially relevant for individuals pursuing spiritual paths—such as astrologers, teachers, yogis, artists, and spiritual seekers—because it highlights the reserves of spiritual power and grace that guide one through life. It reflects not just external success, but the inner capacity for spiritual growth and resilience.
              </p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row-reverse gap-6 mb-16'>
            <img
              src={`${publicUrl}/assets/img/blog/division/d5/5a3d62dca12e70dd84b00436f1555b02935ce2a7.jpg`}
              alt="D5 Analysis"
              className='md:w-1/2 w-full rounded-lg'
            />
            <div className='md:w-1/2 w-full flex flex-col justify-center gap-4'>
              <h2 className='text-2xl font-bold text-[#5D0000]'>What to Analyze in the D5 Chart</h2>
              <p className='text-base text-black font-medium'>
                When interpreting the D5 chart, certain key elements provide deep insight. The Lagna (ascendant) and its lord reveal your personal spiritual identity and how you channel divine energy. The 5th house signifies creativity, mantra power, and blessings from previous births. Jupiter represents wisdom, dharma, and the grace of a guru; Venus signifies love, devotion, and artistic brilliance; and Ketu points to moksha, mysticism, and detachment from worldly attachments. For instance, a strong Jupiter in D5 suggests a person with a natural guru quality and high ethical standards, while Venus in the D5 Lagna often indicates artistic genius paired with deep spiritual romanticism. On the flip side, malefics in the D5 Lagna can imply struggles with faith and spiritual trials. A strong 5th lord in D5 typically points to powerful past-life punya (merit) and spiritual blessings.
              </p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row gap-6 mb-16'>
            <img
              src={`${publicUrl}/assets/img/blog/division/d5/833bc16db418fb949732cd6fdec5438afcbbef12.jpg`}
              alt="D5 Practice"
              className='md:w-1/2 w-full rounded-lg'
            />
            <div className='md:w-1/2 w-full flex flex-col justify-center gap-4'>
              <h2 className='text-2xl font-bold text-[#5D0000]'>How the D5 Chart Can Be Used in Practice</h2>
              <p className='text-base text-black font-medium'>
                The D5 chart serves as a valuable tool to understand your deeper purpose and latent gifts. It helps evaluate your devotional nature, artistic capabilities, and potential for spiritual evolution. Whether you're inclined towards music, poetry, yoga, astrology, or mantra practice, this chart reveals the subtle energies guiding your journey. It is especially helpful in identifying how divine help manifests in this life and the spiritual resources available to you. In essence, the D5 chart doesn't just speak to who you are—it speaks to the divine force that walks with you, often silently, through every challenge and triumph.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <h2 className='text-[#E6FF00] text-2xl lg:text-4xl font-bold py-10 text-center'>Click for video</h2>
      <div className='w-full flex justify-center mb-10'>
        <div className='w-full max-w-[700px] h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg flex justify-center items-center bg-black'>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/SKeF4Ymwt1Y?autoplay=1&mute=1&rel=0&showinfo=0"
            title="YouTube video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ borderRadius: '12px', width: '100%', height: '100%' }}
          ></iframe>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="w-full flex flex-col items-center">
        <h1 className='text-white text-2xl lg:text-4xl font-bold text-center mb-4'>
          Astrological remedies if you were not able to buy a house
        </h1>
        <button
          className="bg-red-600 hover:bg-white hover:text-red-600 text-white font-bold py-3 px-8 rounded-xl border-4 border-white transition mb-10"
        >
          Check Now
        </button>

        <h1 className='text-white text-2xl lg:text-4xl font-bold text-center mb-4'>
          Ask a question talk to the best astrologer
        </h1>
        <button
          onClick={() => window.open("https://wa.me/+919508801096", "_blank")}
          className='bg-green-600 hover:bg-white hover:text-green-600 text-white font-bold py-3 px-8 rounded-xl border-4 border-white transition'
        >
          Chat in WhatsApp
        </button>
      </div>
    </div>
  );
};

export default Division5;
