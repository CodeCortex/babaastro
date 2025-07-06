import React from "react";
const img1 = process.env.PUBLIC_URL + '/assets/img/blog/Destop63/D63Baby.jpg';
const img2 = process.env.PUBLIC_URL + '/assets/img/blog/Destop63/D63chakra.jpg';
const img3 = process.env.PUBLIC_URL + '/assets/img/blog/Destop63/D63JanmaNakshatra.jpg';
const img4 = process.env.PUBLIC_URL + '/assets/img/blog/Destop63/D63Rashi.jpg';
const img5 = process.env.PUBLIC_URL + '/assets/img/blog/Destop63/D63Numrology.jpg';
const img6 = process.env.PUBLIC_URL + '/assets/img/blog/Destop63/D63NameVib.jpg';
const img7 = process.env.PUBLIC_URL + '/assets/img/blog/Destop63/D63Namemeaning.jpg';
const img8 = process.env.PUBLIC_URL + '/assets/img/blog/Destop63/D63Remedies.jpg';
const img9 = process.env.PUBLIC_URL + '/assets/img/blog/Destop63/D63GodPic.jpg';
const img10 = process.env.PUBLIC_URL + '/assets/img/blog/Destop63/D63Lastimage.jpg';
// import img11 from "./assets/img11.jpg"; // Footer Astro Guru


const Desktop63 = () => {
    const publicUrl = process.env.PUBLIC_URL || "";

    return (
    <div className="m-0 p-0" style={{ fontFamily: 'Roboto, Arial, sans-serif', backgroundColor: '#3EFFB1', minHeight: '100vh' }}>
   
            <div
                style={{
                  backgroundImage: `url(${publicUrl}/assets/img/blog/Destop63/D63Baby.jpg)`,
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
        <h1
          style={{
            fontSize: '7vw',
            minFontSize: '32px',
            textShadow: '2px 2px 3px black',
            paddingTop: '20vw',
            paddingBottom: '20vw',
            textAlign: 'center',
            width: '100%',
            fontWeight: 800,
          }}
          className="text-white text-2xl md:text-4xl lg:text-6xl px-2 md:px-8"
        >
          Get baby name <br /> suggestion
                </h1>
            </div>


      <div className="py-8 text-black px-4 md:px-8" style={{width: '100%', maxWidth: '1100px', margin: '0 auto', boxSizing: 'border-box', marginTop: '32px'}}>
        <h1 className="font-bold mb-3 leading-snug text-xl md:text-2xl lg:text-3xl" style={{textAlign: 'left'}}>
          Baby Name Selection Guide in Tamil & Vedic Tradition | Meaningful Naming Based on Astrology
        </h1>
        <p className="mb-5 text-base md:text-lg" style={{textAlign: 'left'}}>
          Choosing a baby name is not just about style — it's about identity, vibration, destiny, and culture. In Tamil, Sanskrit, and Vedic traditions, a name is considered a sacred gift that carries energy and blessings for life. Let's explore how to choose a name aligned with astrology (ஜோதிடம்), numerology (எண் ஜோதிடம்), family values, and spiritual vibration.
        </p>
        <div className="overflow-hidden rounded-2xl w-full" style={{margin: '2rem 0'}}>
          <img
            src={img2}
            alt="Baby Chart"
            className="w-full h-auto object-cover max-h-[40vw] md:max-h-[400px] lg:max-h-[500px]"
          />
        </div>
        <h2 className="font-bold mb-4 mt-6 text-lg md:text-xl lg:text-2xl" style={{textAlign: 'left', color: '#1a3d2f'}}>
          8 Key Things to Consider When Naming Your Baby (பெயர் தேர்வு செய்யும் போது கவனிக்க வேண்டியவை)
        </h2>
        <div className="flex flex-col md:flex-row gap-0 items-start mb-8">
          <div className="flex-1 min-w-[200px] md:min-w-[260px]">
            <h3 style={{fontSize: '1.3rem', fontWeight: 'bold', color: '#000', marginBottom: '8px', textAlign: 'left', whiteSpace: 'nowrap'}}>
              1. Nakshatra <span style={{fontWeight: 'bold'}}>(நட்சத்திரம்)</span> – Birth Star-Based Naming
            </h3>
            <div style={{height: '8px'}}></div>
            <p className="text-base md:text-lg" style={{color: '#222', marginBottom: '10px', textAlign: 'left'}}>
              Each Nakshatra (birth star) has<br />recommended syllables for starting a<br />baby's name.
            </p>
            <p className="text-base md:text-lg" style={{color: '#222', marginBottom: '10px', textAlign: 'left'}}>
              These syllables help align the baby's<br />name with their soul blueprint.
            </p>
            <div className="text-base md:text-lg" style={{color: '#222', marginBottom: '10px', textAlign: 'left'}}>
              Example:
              <ul style={{marginLeft: '1.2em', marginTop: '6px', marginBottom: '6px'}}>
                <li><b>Ashwini Nakshatra</b> – Name may begin with "Chu", "Che", "La", "Le"</li>
                <li><b>Rohini Nakshatra</b> – Use "O", "Va", "Vi", "Vu"</li>
              </ul>
            </div>
            <p className="text-base md:text-lg" style={{color: '#222', textAlign: 'left'}}>
              Consult your child's Janma Nakshatra<br />for the exact starting syllables.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-start">
            <img
              src={process.env.PUBLIC_URL + '/assets/img/blog/Destop63/D63JanmaNakshatra.jpg'}
              alt="Janma Nakshatra"
              className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto object-contain mx-auto mb-6"
              style={{borderRadius: '16px', display: 'block', margin: '36px auto 12px auto', maxHeight: '380px', objectFit: 'contain'}}
            />
          </div>
        </div>

        {/* Section 2: Rashi */}
        <div style={{marginBottom: 0}}>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4" style={{color: '#0a3d2f', marginBottom: '18px', textAlign: 'left'}}>
            2. Rashi <span style={{fontWeight: 'bold'}}>(ராசி)</span> – Moon Sign–Based Naming
          </h3>
          <div className="flex flex-col md:flex-row gap-6 items-start" style={{marginBottom: 0}}>
            <div className="flex-1 min-w-[200px] md:min-w-[260px]">
              <p className="text-base md:text-lg" style={{color: '#222', marginBottom: '10px', textAlign: 'left'}}>
                The Moon sign at the time of birth<br />reflects the child's mind and emotion.
              </p>
              <p className="text-base md:text-lg" style={{color: '#222', marginBottom: '10px', textAlign: 'left'}}>
                Naming based on Rashi brings mental<br />harmony and emotional strength.
              </p>
              <div className="text-base md:text-lg" style={{color: '#222', marginBottom: '10px', textAlign: 'left'}}>
                Example:
                <ul style={{marginLeft: '1.2em', marginTop: '6px', marginBottom: '6px'}}>
                  <li><b>Mesha Rashi (Aries)</b> – Use "A", "E", "La"</li>
                  <li><b>Vrishabha Rashi (Taurus)</b> – Use "Ba", "Va", "U"</li>
                </ul>
              </div>
              <p className="text-base md:text-lg" style={{color: '#222', textAlign: 'left'}}>
                This is more common in North Indian traditions, but can be blended with Nakshatra-based naming.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-start">
              <img
                src={img4}
                alt="Rashi Letters"
                className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto object-contain mx-auto mb-6"
                style={{borderRadius: '16px', display: 'block', margin: '0 auto', marginBottom: '12px', maxHeight: '380px', objectFit: 'contain'}}
              />
            </div>
          </div>
        </div>

       
        <div style={{marginTop: 0}}>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4" style={{color: '#0a3d2f', marginBottom: '18px', textAlign: 'left'}}>
            3. Numerology <span style={{fontWeight: 'bold'}}>(எண்ணியல்)</span> – The Vibration of Numbers
          </h3>
          <div className="flex flex-col md:flex-row gap-6 items-start" style={{marginTop: 0}}>
            <div className="flex-1 min-w-[200px] md:min-w-[260px]">
              <p className="text-base md:text-lg" style={{color: '#222', marginBottom: '10px', textAlign: 'left'}}>
                Each letter in a name carries a numeric value. The name number should match or complement:
              </p>
              <ul className="text-base md:text-lg" style={{marginLeft: '1.2em', marginTop: '6px', marginBottom: '6px', color: '#222', textAlign: 'left'}}>
                <li>The birth number (DOB)</li>
                <li>The life path number (from full date of birth)</li>
              </ul>
              <div className="text-base md:text-lg" style={{color: '#222', marginBottom: '10px', textAlign: 'left'}}>
                Example:
                <ul style={{marginLeft: '1.2em', marginTop: '6px', marginBottom: '6px'}}>
                  <li><b>Number 1 (Sun)</b> – Names that reflect leadership and confidence (Aryan, Diya)</li>
                  <li><b>Number 6 (Venus)</b> – Names reflecting love, beauty (Kavya, Aarna)</li>
                </ul>
              </div>
              <p className="text-base md:text-lg" style={{color: '#222', textAlign: 'left'}}>
                A numerologist can calculate the best name number for health, prosperity, and balance.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-start">
              <img
                src={img5}
                alt="Numerology Chart"
                className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto object-contain mx-auto mb-6"
                style={{borderRadius: '16px', display: 'block', margin: '0 auto', marginBottom: '12px', maxHeight: '380px', objectFit: 'contain'}}
              />
            </div>
          </div>
        </div>

        <div style={{marginBottom: 0}}>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4" style={{color: '#0a3d2f', marginBottom: '18px', textAlign: 'left'}}>
            4. Sound Vibration <span style={{fontWeight: 'bold'}}>(நாதம்)</span> – How the Name Feels
          </h3>
          <div className="flex flex-col md:flex-row gap-6 items-start" style={{marginBottom: 0}}>
            <div className="flex-1 min-w-[200px] md:min-w-[260px]">
              <p className="text-base md:text-lg" style={{color: '#222', marginBottom: '10px', textAlign: 'left'}}>
                Names should be <b>easy to pronounce</b>,<br />carry pleasant <b>sound</b>, and not<br />resemble harsh or negative words.
              </p>
              <p className="text-base md:text-lg" style={{color: '#222', marginBottom: '10px', textAlign: 'left'}}>
                In <b>Sanskrit</b>, every syllable has <b>mantric power</b> — so even how the name "feels" matters deeply.
              </p>
              <p className="text-base md:text-lg" style={{color: '#222', textAlign: 'left'}}>
                Say the name aloud. Does it sound peaceful, confident, joyful, or strong?
              </p>
            </div>
            <div className="flex-1 flex justify-center items-start">
              <img src={img6} alt="Sound Vibration" className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto object-contain mx-auto mb-6" style={{borderRadius: '16px', display: 'block', margin: '0 auto', marginBottom: '24px', maxHeight: '260px', objectFit: 'contain'}} />
            </div>
          </div>
        </div>

        
        <div style={{marginBottom: 0}}>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4" style={{color: '#0a3d2f', marginBottom: '18px', textAlign: 'left'}}>
            5. Meaning of the Name <span style={{fontWeight: 'bold'}}>(பெயரின் அர்த்தம்)</span>
          </h3>
          <div className="flex flex-col md:flex-row gap-6 items-start" style={{marginBottom: 0}}>
            <div className="flex-1 min-w-[200px] md:min-w-[260px]">
              <p className="text-base md:text-lg" style={{color: '#222', marginBottom: '10px', textAlign: 'left'}}>
                The meaning of a name affects how the person sees themselves — their <b>self-identity and life story</b>.
              </p>
              <p className="text-base md:text-lg" style={{color: '#222', marginBottom: '10px', textAlign: 'left'}}>
                Choose names that reflect:
              </p>
              <ul className="text-base md:text-lg" style={{marginLeft: '1.2em', marginTop: '6px', marginBottom: '6px', color: '#222', textAlign: 'left'}}>
                <li>Peace (e.g., Shanvika)</li>
                <li>Knowledge (e.g., Veda)</li>
                <li>Joy (e.g., Anaya)</li>
                <li>Strength (e.g., Veer, Aditya)</li>
                <li>Devotion (e.g., Bhakti, Sharvani)</li>
              </ul>
              <p className="text-base md:text-lg" style={{color: '#222', textAlign: 'left'}}>
                Avoid names with aggressive or unlucky meanings.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-start">
              <img src={img7} alt="Name Meaning" className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto object-contain mx-auto mb-6" style={{borderRadius: '16px', display: 'block', margin: '0 auto', marginBottom: '24px', maxHeight: '260px', objectFit: 'contain'}} />
            </div>
          </div>
        </div>

       
        <div style={{marginBottom: 0}}>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4" style={{color: '#0a3d2f', marginBottom: '18px', textAlign: 'left'}}>
            6. Astrological Yogas or Doshas <span style={{fontWeight: 'bold'}}>(தோஷ நிவாரண பெயர்கள்)</span>
          </h3>
          <div className="flex flex-col md:flex-row gap-6 items-start" style={{marginBottom: 0}}>
            <div className="flex-1 min-w-[200px] md:min-w-[260px]">
              <p className="text-base md:text-lg" style={{color: '#222', marginBottom: '10px', textAlign: 'left'}}>
                Sometimes, astrologers suggest <b>adjusted names</b> to reduce effects of <b>doshas</b> (defects) in the birth chart.
              </p>
              <ul className="text-base md:text-lg" style={{marginLeft: '1.2em', marginTop: '6px', marginBottom: '6px', color: '#222', textAlign: 'left'}}>
                <li><b>Graha Dosha</b> (planetary issues): Use deity names to invoke divine protection</li>
              </ul>
              <p className="text-base md:text-lg" style={{color: '#222', textAlign: 'left'}}>
                Use is a <b>remedial approach</b>, typically guided by expert astrologers.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-start">
              <img src={img8} alt="Yogas Doshas" className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto object-contain mx-auto mb-6" style={{borderRadius: '16px', display: 'block', margin: '0 auto', marginBottom: '24px', maxHeight: '260px', objectFit: 'contain'}} />
            </div>
          </div>
        </div>

      
        <div style={{marginBottom: 0}}>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4" style={{color: '#0a3d2f', marginBottom: '18px', textAlign: 'left'}}>
            7. Cultural & Family Traditions <span style={{fontWeight: 'bold'}}>(குடும்ப பாரம்பரியம்)</span>
          </h3>
          <div className="flex flex-col md:flex-row gap-6 items-start" style={{marginBottom: 0}}>
            <div className="flex-1 min-w-[200px] md:min-w-[260px]">
              <p className="text-base md:text-lg" style={{color: '#222', marginBottom: '10px', textAlign: 'left'}}>
                Some Tamil families follow traditions like:
              </p>
              <ul className="text-base md:text-lg" style={{marginLeft: '1.2em', marginTop: '6px', marginBottom: '6px', color: '#222', textAlign: 'left'}}>
                <li>Naming after a <b>grandparent or ancestor</b></li>
                <li>Adding family deity (kuladeivam) names</li>
                <li>Using suffixes like <b>-nathan</b>, <b>-vani</b>, <b>-kumar</b>, <b>-priya</b></li>
              </ul>
              <p className="text-base md:text-lg" style={{color: '#222', textAlign: 'left'}}>
                These traditions preserve <b>lineage, culture, and blessings</b> from elders.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-start">
              <img src={img9} alt="Family Traditions" className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto object-contain mx-auto mb-6" style={{borderRadius: '16px', display: 'block', margin: '0 auto', marginBottom: '24px', maxHeight: '260px', objectFit: 'contain'}} />
            </div>
          </div>
        </div>
        
       
        <div style={{marginBottom: 0}}>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4" style={{color: '#0a3d2f', marginBottom: '18px', textAlign: 'left'}}>
            8. Spiritual or Devotional Names <span style={{fontWeight: 'bold'}}>(பக்தி வழி பெயர்கள்)</span>
          </h3>
          <div className="flex flex-col md:flex-row gap-6 items-start" style={{marginBottom: 0}}>
            <div className="flex-1 min-w-[200px] md:min-w-[260px]">
              <p className="text-base md:text-lg" style={{color: '#222', marginBottom: '10px', textAlign: 'left'}}>
                Spiritual names keep the soul connected to divine energy throughout life.
              </p>
              <p className="text-base md:text-lg" style={{color: '#222', marginBottom: '10px', textAlign: 'left'}}>
                Popular deity names:
              </p>
              <ul className="text-base md:text-lg" style={{marginLeft: '1.2em', marginTop: '6px', marginBottom: '6px', color: '#222', textAlign: 'left'}}>
                <li>Vishnu (e.g. Krishna, Narayana)</li>
                <li>Shiva (e.g. Shivani, Ishaan)</li>
                <li>Lakshmi (e.g. Vaishnavi, Deepa Lakshmi)</li>
                <li>Durga (e.g. Sharvani, Parvathi)</li>
              </ul>
              <p className="text-base md:text-lg" style={{color: '#222', textAlign: 'left'}}>
                Many of these names double as <b>mantras</b> that bring calm, confidence, or courage.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-start">
              <img src={img10} alt="Spiritual Names" className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto object-contain mx-auto mb-6" style={{borderRadius: '16px', display: 'block', margin: '24px auto 36px auto', maxHeight: '260px', objectFit: 'contain'}} />
            </div>
          </div>
        </div>
        
       
        <div style={{marginBottom: 0}}>
          <h3 className="text-base md:text-lg font-bold mb-3" style={{color: '#0a3d2f', marginBottom: '12px', textAlign: 'left'}}>
            Bonus: Mantra-Compatible Names
          </h3>
          <p className="text-base md:text-lg" style={{color: '#222', marginBottom: '10px', textAlign: 'left'}}>
            Some names activate spiritual energy through their sound:
          </p>
          <ul className="text-base md:text-lg" style={{marginLeft: '1.2em', marginTop: '6px', marginBottom: '6px', color: '#222', textAlign: 'left'}}>
            <li><b>Omkar</b> – Sound of the universe</li>
            <li><b>Vani</b> – Goddess of speech (Saraswati)</li>
            <li><b>Ishaan</b> – Lord Shiva's direction</li>
            <li><b>Sharani</b> – Durga's name</li>
          </ul>
          <p className="text-base md:text-lg" style={{color: '#222', textAlign: 'left'}}>
            These names carry a <b>built-in vibration</b> that blesses the child constantly.
          </p>
        </div>

        <div className="mt-8 mb-0">
          <h3 className="text-base md:text-lg font-bold mb-3" style={{color: '#111', marginBottom: '12px', textAlign: 'left'}}>
            Final Tips for Choosing the Right Name
          </h3>
          <ul className="text-base md:text-lg" style={{marginLeft: '1.2em', marginTop: '6px', marginBottom: '18px', color: '#111', textAlign: 'left', listStyle: 'disc'}}>
            <li>Say the name aloud — does it feel good?</li>
            <li>Check spelling and pronunciation in Tamil and English</li>
            <li>Avoid confusing or awkward-sounding names</li>
            <li>Make sure it ages well — fits a baby, a teen, and an adult</li>
            <li>Don't rush — the name is a gift for life</li>
          </ul>
        </div>

   
        <div className="mt-6 mb-0 text-center">
          <h3 className="text-base md:text-lg font-bold mb-3 text-center" style={{color: '#111', marginBottom: '12px'}}>
            Closing Thought:
          </h3>
          <p className="text-base md:text-lg font-bold text-center" style={{color: '#1aaf7a', margin: 0}}>
            "A child's name is their first blessing — let it be filled with light, love, and destiny."
          </p>
        </div>

               
              
                <div className="w-full max-w-5xl mx-auto mt-8">
                      <h1 className="text-black text-lg lg:text-4xl font-medium py-2 lg:py-4 text-left mb-2">
                        Click for video
                    </h1>
                    <div className="relative w-full" style={{paddingTop: '56.25%'}}>
                        <iframe
                            className="absolute top-0 left-0 w-full h-full min-h-[220px] max-h-[70vh]"
                            src="https://www.youtube.com/embed/SKeF4Ymwt1Y?autoplay=1&mute=1&rel=0&showinfo=0"
                            title="YouTube video"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            style={{ borderRadius: '12px', display: 'block' }}
                        ></iframe>
                    </div>
                </div>
                  <h1 className='text-black text-xl md:text-2xl lg:text-6xl font-extrabold py-6 md:py-10 px-4 md:px-8 lg:px-40 text-center'>Astrological remedies if you were not able to buy a house </h1>
                  <div className='w-full flex justify-center'>
                <button
                        style={{ backgroundColor: "#E90000" }}
                        className="bg-[#E90000] border-4 border-white rounded-2xl px-8 md:px-20 py-2 md:py-3 lg:py-6 hover:text-red-500 text-white text-base md:text-xl lg:text-4xl hover:text-red shadow-lg hover:bg-white  transition duration-300"
                >
                    Check Now
                </button>
                  </div>
                  <h1 className='text-black text-xl md:text-2xl lg:text-6xl font-extrabold py-6 md:py-10 px-4 md:px-8 lg:px-40 text-center'>Ask a question talk to the best astrologer</h1>
                  <div className='w-full flex justify-center'>
                <button onClick={() => window.open("https://wa.me/+919508801096", "_blank")}
                        style={{ background: "green" }} className='border-4 border-white rounded-2xl px-8 md:px-20 py-2 md:py-3 lg:py-6 hover:text-white text-white text-base md:text-xl lg:text-4xl hover:text-red shadow-lg hover:bg-white  transition duration-300'>Chat in Whatapp</button>
            </div>

      </div>
        </div>
    );
};

export default Desktop63;