import React from 'react';


const img1 = process.env.PUBLIC_URL + '/assets/img/blog/Destop65/Desktop55_1.png';
const img2 = process.env.PUBLIC_URL + '/assets/img/blog/Destop63/Desktop55_2.png';
// const img3 = process.env.PUBLIC_URL + '/assets/img/blog/Destop63/D63JanmaNakshatra.jpg';

const Desktop65 = () => {
  const publicUrl = process.env.PUBLIC_URL || "";

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${publicUrl}/assets/img/blog/Desktop65/Desktop65_1.png)`,
          // backgroundImage: img1,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '40vw',
          height: '40vh',
        }}
        className="w-full sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px] xl:min-h-[700px]"
      >
        <h1 style={{ fontSize: '7vw', minFontSize: '32px', textShadow: '2px 2px 3px black', paddingTop: "20vw", paddingBottom: "20vw" }} className="text-white font-extrabold sm:text-7xl md:text-9xl">
          Learn Astrology
        </h1>
      </div>



      {/* section -1 */}


      <div style={{ background: '#FFA8C7', width: '100%', padding: '40px 2vw', boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}>

        <div style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0' }}>

          <h2 style={{ color: '#920033', fontWeight: 700, fontSize: '2.6rem', marginBottom: '16px', textAlign: 'left', width: '100%' }}>
            Learn Vedic Astrology (ஜோதிடம்): A Step-by-Step Beginner's Guide<br />
            {/* <span style={{ fontWeight: 700, fontSize: '1.7rem', color: '#A23CA2', display: 'block', textAlign: 'left', width: '100%' }}>(வேத ஜோதிடம் / Jyotisha Shastra)</span> */}
          </h2>


          <div style={{ width: '100%', maxWidth: '900px', marginLeft: 0, textAlign: 'left', alignSelf: 'flex-start' }}>
            <p style={{ color: '#3D003D', fontSize: '1.35rem', margin: '0 0 32px 0', width: '100%', textAlign: 'left', marginLeft: 0 }}>
              Astrology, especially Vedic astrology (ஜோதிடம்), is more than just predicting the future — it’s about understanding the divine blueprint of life. Whether you're curious about your own destiny or want to help others, this ancient science opens a path to deep insight, timing, and spiritual awareness.
            </p>
          </div>

          <img
            src={publicUrl + '/assets/img/blog/Desktop65/Desktop65_2.png'}
            alt="Vedic Astrology"
            style={{ width: '100%', maxWidth: '1100px', height: 'auto', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', marginTop: '18px', marginBottom: '18px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
            className="w-full h-auto max-w-full rounded-2xl shadow-md my-4"
          />


          <h3 style={{ color: '#920033', fontWeight: 700, fontSize: '2rem', margin: '28px 0 18px 0', textAlign: 'left', width: '100%' }}>1: Understand the Foundations</h3>
          <p style={{ color: '#920033', fontWeight: 700, fontSize: '1.5rem', margin: '10px 0 18px 0', textAlign: 'left', width: '100%' }}>What is a Birth Chart (ஜாதகம்)?</p>


          <p style={{ color: '#000000', fontSize: '1.35rem', marginBottom: '24px', maxWidth: '900px', textAlign: 'left', width: '100%' }}>
            A birth chart is a cosmic snapshot of the sky at the exact time of your birth. It reveals your strengths, challenges, destiny, and potential.
          </p>

          <p style={{ color: '#000000', fontSize: '1.35rem', fontWeight: 700, marginBottom: '12px', textAlign: 'left' }}>
            The 4 Core Elements of a Chart:
          </p>

          <ul style={{ color: '#000000', fontSize: '1.35rem', marginBottom: '24px', textAlign: 'left', listStyleType: 'none', paddingLeft: '0' }}>
            <li style={{ paddingLeft: '1.5rem' }}><b>• 12 Zodiac Signs (ராசிகள்)</b> – Fire, Earth, Air, Water signs with unique energies.</li>
            <li style={{ paddingLeft: '1.5rem' }}><b>• 9 Planets (நவகிரகங்கள்)</b> – Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu.</li>
            <li style={{ paddingLeft: '1.5rem' }}><b>• 12 Houses (பாவங்கள்)</b> – Represent areas of life: self, family, money, career, etc.</li>
            <li style={{ paddingLeft: '1.5rem' }}><b>• 27 Nakshatras (நட்சத்திரங்கள்)</b> – Lunar constellations that influence behavior and destiny.</li>
          </ul>


        </div>
      </div>



      {/* section -2  */}


      <div style={{ background: '#FFA8C7', width: '100%', padding: '40px 2vw', boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0' }}>

          <h3 style={{ color: '#920033', fontWeight: 700, fontSize: '2rem', margin: '28px 0 18px 0', textAlign: 'left', width: '100%' }}>
            2: Learn the Chart Types (Varga Charts)
          </h3>

          <p style={{ color: '#000000', fontSize: '1.35rem', marginBottom: '24px', textAlign: 'left', width: '100%' }}>
            Vedic astrology goes beyond the main chart. It uses divisional charts for deeper understanding.
          </p>

          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', textAlign: 'center' }}>
            <table style={{ width: '100%', maxWidth: '1100px', background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', margin: '0 auto', borderCollapse: 'collapse', fontSize: '1.13rem' }} className="w-full max-w-full text-sm md:text-base">
              <thead>
                <tr style={{ background: 'white', color: 'black', fontWeight: 700 }}>
                  <th style={{ padding: '8px', border: '1px solid black' }}>Chart</th>
                  <th style={{ padding: '8px', border: '1px solid black' }}>Name</th>
                  <th style={{ padding: '8px', border: '1px solid black' }}>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '8px', border: '1px solid black' }}>D1</td>
                  <td style={{ padding: '8px', border: '1px solid black' }}>Rasi Chart</td>
                  <td style={{ padding: '8px', border: '1px solid black' }}>Life overview</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px', border: '1px solid black' }}>D9</td>
                  <td style={{ padding: '8px', border: '1px solid black' }}>Navamsa</td>
                  <td style={{ padding: '8px', border: '1px solid black' }}>Marriage & inner strength</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px', border: '1px solid black' }}>D10</td>
                  <td style={{ padding: '8px', border: '1px solid black' }}>Dasamsa</td>
                  <td style={{ padding: '8px', border: '1px solid black' }}>Career & profession</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px', border: '1px solid black' }}>D7</td>
                  <td style={{ padding: '8px', border: '1px solid black' }}>Saptamsa</td>
                  <td style={{ padding: '8px', border: '1px solid black' }}>Children & creativity</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px', border: '1px solid black' }}>D2</td>
                  <td style={{ padding: '8px', border: '1px solid black' }}>Hora</td>
                  <td style={{ padding: '8px', border: '1px solid black' }}>Wealth</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px', border: '1px solid black' }}>D60</td>
                  <td style={{ padding: '8px', border: '1px solid black' }}>Shashtiamsa</td>
                  <td style={{ padding: '8px', border: '1px solid black' }}>Past life & deep karma</td>
                </tr>
              </tbody>
            </table>

          </div>

          <p style={{ color: '#3D003D', fontSize: '1.35rem', marginTop: '24px', marginBottom: '0', maxWidth: '900px', textAlign: 'left', width: '100%' }}>
            Each chart reveals a specific layer of your life. Learn to interpret them gradually.
          </p>

        </div>
      </div>


      {/* section 3 and 4 */}
      <div style={{ background: '#FFA8C7', width: '100%', padding: '40px 2vw', boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0' }}>

          <h3 style={{ color: '#920033', fontWeight: 700, fontSize: '2rem', margin: '28px 0 18px 0', textAlign: 'left', width: '100%' }}>
            3: Master the Core Techniques
          </h3>

          <p style={{ color: '#000000', fontSize: '1.35rem', marginBottom: '12px', maxWidth: '900px', textAlign: 'left', width: '100%' }}>
            <b>Dasha System (தசா)</b><br />
            This is the timing system in Vedic astrology. Planets rule certain periods of life and bring their results during their time.
          </p>

          <p style={{ color: '#000000', fontSize: '1.35rem', marginBottom: '12px', maxWidth: '900px', textAlign: 'left', width: '100%' }}>
            <b>Transits (கோச்சாரம்)</b><br />
            Track how current planetary positions interact with your birth chart — very important for predictions.
          </p>

          <p style={{ color: '#000000', fontSize: '1.35rem', marginBottom: '12px', maxWidth: '900px', textAlign: 'left', width: '100%' }}>
            <b>Yogas (யோகங்கள்)</b><br />
            Special combinations that give wealth, fame, intelligence, devotion, or challenges. There are hundreds of yogas to learn!
          </p>

          <p style={{ color: '#000000', fontSize: '1.35rem', fontWeight: 700, marginTop: '8px', marginBottom: '8px', textAlign: 'left' }}>
            Advanced Tools:
          </p>

          <ul style={{ color: '#000000', fontSize: '1.35rem', marginBottom: '24px', textAlign: 'left', listStyleType: 'disc', paddingLeft: '3rem' }}>
            <li style={{ paddingLeft: '0.75rem' }}>
              <b>Ashtakavarga</b>: Scores for planetary strength in each sign.
            </li>
            <li style={{ paddingLeft: '0.75rem' }}>
              <b>Shadabala</b>: 6-fold planetary strength evaluation.
            </li>
          </ul>



          <h3 style={{ color: '#920033', fontWeight: 700, fontSize: '2rem', margin: '20px 0 18px 0', textAlign: 'left', width: '100%' }}>
            4: Learn Remedies (பரிகாரம்)
          </h3>

          <p style={{ color: '#000000', fontSize: '1.35rem', marginBottom: '12px', textAlign: 'left', width: '100%' }}>
            Astrology is not fatalistic — remedies can <b>balance negative effects</b> and <b>enhance positive karma</b>.
          </p>

          <ul style={{ color: '#000000', fontSize: '1.35rem', marginBottom: '24px', textAlign: 'left', listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li><b>Mantras</b>: Sacred chants for each planet.</li>
            <li><b>Gemstones</b>: Energized stones aligned with planetary energy.</li>
            <li><b>Donations</b>: Give to those in need related to the planet.</li>
            <li><b>Fasting</b>: On specific weekdays for planets.</li>
            <li><b>Pujas</b>: Rituals for blessings and peace.</li>
          </ul>

          <h3 style={{ color: '#920033', fontWeight: 700, fontSize: '1.7rem', margin: '0 0 16px 0', textAlign: 'left', width: '100%' }}>
            Recommended Books to Start
          </h3>

          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', textAlign: 'center' }}>
            <table style={{ width: '100%', maxWidth: '1100px', background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', margin: '0 auto', borderCollapse: 'collapse', fontSize: '1.13rem' }}>
              <thead>
                <tr style={{ background: 'white', color: 'black', fontWeight: 700 }}>
                  <th style={{ padding: '8px', border: '1px solid black' }}>Title</th>
                  <th style={{ padding: '8px', border: '1px solid black' }}>Author</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '8px', border: '1px solid black' }}>Light on Life</td>
                  <td style={{ padding: '8px', border: '1px solid black' }}>Hart de Fouw & Robert Svoboda</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px', border: '1px solid black' }}>Brihat Parashara Hora Shastra</td>
                  <td style={{ padding: '8px', border: '1px solid black' }}>Sage Parashara</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px', border: '1px solid black' }}>Phaladeepika</td>
                  <td style={{ padding: '8px', border: '1px solid black' }}>Mantreswara</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px', border: '1px solid black' }}>Jataka Parijata</td>
                  <td style={{ padding: '8px', border: '1px solid black' }}>Vaidyanatha Dikshita</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ color: '#3D003D', fontSize: '1.35rem', marginTop: '24px', marginBottom: '0', maxWidth: '900px', textAlign: 'left', width: '100%' }}>
            These books range from beginner–friendly to classic Sanskrit texts.
          </p>

          <h3 style={{ color: '#920033', fontWeight: 700, fontSize: '1.7rem', margin: '32px 0 12px 0', textAlign: 'left', width: '100%' }}>
            Online Learning Resources
          </h3>

          <ul style={{ color: '#000000', fontSize: '1.35rem', marginBottom: '12px', textAlign: 'left', listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li><b>YouTube Channels</b>: (search for Tamil astrology/ஜோதிடம்)</li>
            <li><b>Websites</b>: AstroSage, Drik Panchang, AstroVed</li>
            <li><b>Courses</b>: Udemy, personal astrologers, and Tamil astrology communities.</li>
          </ul>

          <h3 style={{ color: '#920033', fontWeight: 700, fontSize: '1.7rem', margin: '32px 0 12px 0', textAlign: 'left', width: '100%' }}>
            A Spiritual Attitude is Essential
          </h3>

          <ul style={{ color: '#000000', fontSize: '1.35rem', marginBottom: '12px', textAlign: 'left', listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li>
              <span>Astrology is a <b>sacred path</b>, not just a tool. It requires:</span>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '8px' }}>
                <li><b>Patience</b>: True learning takes time.</li>
                <li><b>Observation</b>: Track real-life events.</li>
                <li><b>Compassion</b>: Respect free will and human dignity.</li>
                <li><b>Self-awareness</b>: Start by studying your own chart.</li>
              </ul>
            </li>
            <li style={{ marginTop: '12px' }}>
              •Don’t rush into predictions — focus on understanding patterns and principles.
            </li>
          </ul>



        </div>
      </div>






      <div
        style={{
          background: "#FFA8C7"
        }}
        className="w-full pt-1 md:pt-2 pb-1 md:pb-2 flex flex-col justify-center items-center"
      >




        <div style={{ width: '100%', maxWidth: '1100px', margin: '4px auto 0 auto', padding: '0 2vw', boxSizing: 'border-box' }}>
          <h1 className="text-lg lg:text-4xl font-medium py-2 lg:py-4" style={{ textAlign: "left", marginBottom: "8px", color: '#000', fontWeight: 700 }}>
            Click for video
          </h1>
          <div className="w-full" style={{ aspectRatio: '16/9', borderRadius: '16px', overflow: 'hidden', background: '#000' }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/SKeF4Ymwt1Y?autoplay=1&mute=1&rel=0&showinfo=0"
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ display: 'block', width: '100%', height: '100%', borderRadius: '16px', border: 'none' }}
            ></iframe>
          </div>
        </div>

        <h1 style={{ paddingBlock: "", color: 'black' }} className='text-xl md:text-2xl lg:text-6xl font-extrabold py-1 md:py-2 px-4 md:px-8 lg:px-40 text-center'>Astrological remedies if you were not able to buy a house </h1>

        <button
          style={{ background: "#E90000" }}
          className="bg-[#E90000] border-4 border-white  px-8 md:px-20 py-2 md:py-3 lg:py-6 hover:text-white text-white text-lg md:text-xl lg:text-4xl hover:text-red shadow-lg hover:bg-white  transition duration-300"
        >
          Check Now
        </button>

        <h1 style={{ color: 'black' }} className='text-xl md:text-2xl lg:text-6xl font-extrabold py-1 md:py-2 px-4 md:px-8 lg:px-40 text-center'>Ask a question talk to the best astrologer</h1>
        <button onClick={() => window.open("https://wa.me/+919508801096", "_blank")}
          style={{ background: "#00980A" }}
          className='bg-[#00980A] border-4 border-white px-8 md:px-20 py-2 md:py-3 lg:py-6 hover:text-white text-white text-lg md:text-xl lg:text-4xl hover:text-red shadow-lg hover:bg-white  transition duration-300'>
          Chat in Whatsapp
        </button>

      </div>

    </div>
  );
};

export default Desktop65;