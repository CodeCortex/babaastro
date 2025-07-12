import React from 'react';

const Division10 = () => {
  const publicUrl = process.env.PUBLIC_URL || "";

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${publicUrl}/assets/img/blog/division/d10/cde9c7335becd495a5887ef47d6077ebb8f74dca.png)`,
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
          D10
        </h1>
      </div>

      {/* Ad Section */}
      <div
        style={{
          background: '#B400A2',
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
          src={`${publicUrl}/assets/img/blog/division/d10/1298f8baccd5eddd42bb45413c2c169e7e7f2dfc.png`}
          alt="Ad"
          style={{ width: '120px', marginLeft: '1rem', borderRadius: '100%' }}
        />
      </div>

      {/* Content Section */}
      <div
        style={{
          background: 'linear-gradient(to bottom, #B400A2 0%, rgb(48, 2, 54) 40%)',
          minHeight: '100vh',
          paddingBottom: '40px'
        }}
        className="w-full py-20 px-4 flex flex-col justify-center items-center"
      >
        <div
          style={{
            backgroundColor: 'white',
            width: '90%',
            borderRadius: '24px',
            padding: '2.5rem',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)'
          }}
        >
          {/* Section 1 */}
          <div className='flex flex-col md:flex-row items-center gap-6 mb-16'>
            <div className='md:w-1/2 w-full flex flex-col justify-center gap-4'>
              <h2 className='text-2xl font-bold text-[#5D0000]'>What is the D10 – Dasamsa Chart and Why Is It Crucial?</h2>
              <p className='text-base text-black font-medium'>
                The D10 chart, or Dasamsa (தசம்ச சக்கரம்), is one of the most significant divisional charts in Vedic astrology when it comes to understanding your career, profession, and public status. While the D1 chart may suggest success, it’s the D10 that reveals whether that success will translate into actual recognition, job satisfaction, and growth. This chart comes into greater effect after the age of 28–30, when most individuals begin to stabilize and define their professional direction. If you're wondering about your ideal career path, promotion timing, or professional karma, the D10 holds the key.
              </p>
            </div>
            <img
              src={`${publicUrl}/assets/img/blog/division/d10/00459b1c8cc32674516ff2abf62ea64b0c62edcb.jpg`}
              alt="D10 Chart"
              className='md:w-1/2 w-full rounded-lg object-cover'
              style={{ maxHeight: '320px' }}
            />
          </div>

          {/* Section 2 */}
          <div className='flex flex-col md:flex-row-reverse items-center gap-6 mb-16'>
            <div className='md:w-1/2 w-full flex flex-col justify-center gap-4'>
              <h2 className='text-2xl font-bold text-[#5D0000]'>How is D10 Calculated and What to Look For?</h2>
              <p className='text-base text-black font-medium'>
                Each sign of 30° is divided into 10 parts of 3°, resulting in 120 Dasamsa divisions. A planet’s placement in the D1 chart determines where it lands in the D10 chart, according to standard divisional rules. Important points to analyze include the Lagna and Lagna Lord (which show your attitude toward work), the 6th and 10th houses (for job stress and career success), and the strength of planets like Sun, Saturn, Jupiter, and Mercury. Benefics placed in Kendras (angular houses) can lead to a stable career, while malefics may bring ambition-driven stress or intense challenges. A well-placed Mars indicates roles in defense or engineering; Mercury supports communication and business, and Venus in the D10 Lagna suggests artistic or beauty-related careers.
              </p>
            </div>
            <img
              src={`${publicUrl}/assets/img/blog/division/d10/7682e69d1bec03ed2d6119a2baf7694a768ac62d.png`}
              alt="Career"
              className='md:w-1/2 w-full rounded-lg object-cover'
              style={{ maxHeight: '320px' }}
            />
          </div>
          <div className="flex justify-center mb-16">
            <img
              src={`${publicUrl}/assets/img/blog/division/d10/73914ccab79574b526e36760cbb6a48c6701c1da.png`}
              alt="Advertisement"
              style={{
                width: '100%',
                maxWidth: '600px',
                borderRadius: '16px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.12)'
              }}
            />
          </div>
          <div className="flex justify-center mb-16">
            <img
              src={`${publicUrl}/assets/img/blog/division/d10/55d990a0c2d8623569d36ed989861fdb39702ff2.jpg`}
              alt="Additional Visual"
              style={{
                width: '100%',
                maxWidth: '600px',
                borderRadius: '16px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.12)'
              }}
            />
          </div>

          {/* Section 3 */}
          <div className='flex flex-col md:flex-row items-center gap-6 mb-16'>
            <div className='md:w-1/2 w-full flex flex-col justify-center gap-4'>
              <h2 className='text-2xl font-bold text-[#5D0000]'>Practical Benefits of Analyzing the D10 Chart</h2>
              <p className='text-base text-black font-medium'>
                The D10 chart is incredibly helpful for career decision-making. It can reveal your field of strength, timing of promotions, and even the nature of your work environment. For those facing repeated career blocks or professional uncertainty, the D10 offers insight into karmic patterns tied to work life. It’s also useful for matching career compatibility in marriage and gauging how your career will evolve over time. In fact, a strong D10 can even uplift a weaker D1 chart when supported by the right dasha periods, making it a go-to chart for astrologers assessing long-term success and public achievement.
              </p>
            </div>
            <img
              src={`${publicUrl}/assets/img/blog/division/d10/fcdc762cb9c46f2129b4cdea40a6268b1becb3c7.jpg`}
              alt="Yogi"
              className='md:w-1/2 w-full rounded-lg object-cover'
              style={{ maxHeight: '320px' }}
            />
          </div>
        </div>
      </div>

      {/* YouTube Video Section */}
      <div className="w-full flex flex-col items-center">
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
      </div>

      {/* Remedies and Chat Section */}
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

export default Division10;
