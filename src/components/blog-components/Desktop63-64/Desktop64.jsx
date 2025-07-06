import React from 'react';

const Desktop64 = () => {
    const publicUrl = process.env.PUBLIC_URL || "";

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${publicUrl}/assets/img/blog/Destop64/D64.jpg)`,
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
                About vedic astrology
                </h1>
            </div>

           
            <div style={{ background: '#E9A8F2', width: '100%', padding: '40px 2vw', boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0' }}>
                    <h2 style={{ color: '#8B1C8B', fontWeight: 700, fontSize: '2.6rem', marginBottom: '16px', textAlign: 'left', width: '100%' }}>
                        A Beautiful Introduction to Vedic Astrology<br/>
                        <span style={{ fontWeight: 700, fontSize: '1.7rem', color: '#A23CA2', display: 'block', textAlign: 'left', width: '100%' }}>(வேத ஜோதிடம் / Jyotisha Shastra)</span>
                    </h2>
                    <div style={{ width: '100%', maxWidth: '900px', marginLeft: 0, textAlign: 'left', alignSelf: 'flex-start' }}>
                        <p style={{ color: '#3D003D', fontSize: '1.35rem', margin: '0 0 32px 0', width: '100%', textAlign: 'left', marginLeft: 0 }}>
                            Vedic Astrology – known as Jyotisha Shastra (ஜோதிடம், ஜோதிஷம்) in Sanskrit and Tamil – is the ancient Indian science of celestial influence and divine timing. Rooted in the Vedas, it is not just about prediction but also self-awareness, spiritual insight, and aligning with the cosmic rhythm.
                        </p>
                    </div>
                    <img
                        src={publicUrl + '/assets/img/blog/Destop64/D64Vedic.png'}
                        alt="Vedic Astrology"
                        style={{ width: '100%', maxWidth: '1100px', height: 'auto', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', marginTop: '18px', marginBottom: '18px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                        className="w-full h-auto max-w-full rounded-2xl shadow-md my-4"
                    />
                    <h3 style={{ color: '#8B1C8B', fontWeight: 700, fontSize: '2rem', margin: '28px 0 18px 0', textAlign: 'left', width: '100%' }}>What is Vedic Astrology?</h3>
                    <p style={{ color: '#3D003D', fontSize: '1.35rem', marginBottom: '24px', maxWidth: '900px', textAlign: 'left', width: '100%' }}>
                        Vedic Astrology is a sacred science from India that examines how planets, stars, and constellations influence human life. It offers insight into our:
                    </p>
                    <ul style={{ color: '#3D003D', fontSize: '1.35rem', marginBottom: '24px', textAlign: 'left', display: 'block', fontWeight: 700, width: '100%' }}>
                        <li><b>• Personality</b></li>
                        <li><b>• Life path</b></li>
                        <li><b>• Karmic patterns</b></li>
                        <li><b>• Challenges and strengths</b></li>
                    </ul>
                    <p style={{ color: '#3D003D', fontSize: '1.35rem', marginBottom: '0', maxWidth: '900px', textAlign: 'left', width: '100%' }}>
                        Unlike modern astrology, Vedic astrology is sideral, meaning it aligns with the actual constellations in the sky.
                    </p>
                </div>
            </div>

    
            <div style={{ background: '#E9A8F2', width: '100%', padding: '10px 2vw', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', marginTop: '-32px' }}>
                <div style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0' }}>
                    <h2 style={{ color: '#8B1C8B', fontWeight: 700, fontSize: '2.2rem', marginBottom: '28px', textAlign: 'left', width: '100%' }}>Key Concepts of Vedic Astrology</h2>
                    <p style={{ color: '#3D003D', fontSize: '1.25rem', marginBottom: '18px', textAlign: 'left', width: '100%' }}>
                        <b>1. Birth Chart (ஜாதகம் / Kundali)</b><br/>
                        A Kundali is a celestial map drawn at the moment of your birth. It shows the placement of:
                    </p>
                    <ul style={{ color: '#3D003D', fontSize: '1.25rem', marginBottom: '18px', textAlign: 'left', width: '100%', paddingLeft: '24px', fontWeight: 700 }}>
                        <li><b>• 9 Planets (Navagrahas)</b></li>
                        <li><b>• 12 Zodiac Signs (Rashis)</b></li>
                        <li><b>• 12 Houses (Bhavas)</b></li>
                        <li><b>• 27 Nakshatras (Stars)</b></li>
                    </ul>
                    <p style={{ color: '#3D003D', fontSize: '1.25rem', marginBottom: '22px', textAlign: 'left', width: '100%' }}>
                        It is your unique cosmic fingerprint, revealing your destiny, behavior patterns, and karmic lessons.
                    </p>
                    <h2 style={{ color: '#A23CA2', fontWeight: 700, fontSize: '2rem', margin: '44px 0 22px 0', textAlign: 'left', width: '100%' }}>2. The 9 Planets (நவகிரகங்கள்)</h2>
                    <p style={{ color: '#3D003D', fontSize: '1.25rem', marginBottom: '22px', textAlign: 'left', width: '100%' }}>
                        Each planet (Graha) governs different aspects of your life:
                    </p>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
                        
                        <table style={{ width: '100%', maxWidth: '1100px', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', margin: '0 auto', borderCollapse: 'collapse', fontSize: '1.13rem' }} className="w-full max-w-full text-sm md:text-base">
                            <thead>
                                <tr style={{ background: 'white', color: 'black', fontWeight: 700 }}>
                                    <th style={{ padding: '8px', border: '1px solidrgb(6, 6, 6)' }}>Planet</th>
                                    <th style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Sanskrit Name</th>
                                    <th style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Represents</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Sun</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Surya</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Soul, ego, authority</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Moon</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Chandra</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Mind, emotions, nurturing</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Mars</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Mangala</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Energy, courage, drive</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Mercury</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Budha</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Intellect, communication</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Jupiter</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Guru</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Wisdom, wealth, dharma</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Venus</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Shukra</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Love, art, beauty</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Saturn</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Shani</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Karma, discipline, endurance</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Rahu</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Rahu</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Desire, illusion, foreign matters</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Ketu</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Ketu</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Detachment, spirituality, moksha</td></tr>
                            </tbody>
                        </table>
                    </div>

                   
                    <h2 style={{ color: '#A23CA2', fontWeight: 700, fontSize: '2rem', margin: '44px 0 22px 0', textAlign: 'left', width: '100%' }}>3. 12 Zodiac Signs (ராசிகள்)</h2>
                    <p style={{ color: '#3D003D', fontSize: '1.25rem', marginBottom: '22px', textAlign: 'left', width: '100%' }}>
                        The zodiac signs are fixed constellations. In Vedic astrology, the Moon Sign (Janma Rashi) is most important.
                    </p>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                      
                        <table style={{ width: '100%', maxWidth: '1100px', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', margin: '0 auto', borderCollapse: 'collapse', fontSize: '1.13rem' }} className="w-full max-w-full text-sm md:text-base">
                            <thead>
                                <tr style={{ background: 'white', color: 'black', fontWeight: 700 }}>
                                    <th style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Sign</th>
                                    <th style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Sanskrit</th>
                                    <th style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Tamil Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Aries</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Mesha</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>மேஷம்</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Taurus</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Vrishabha</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>ரிஷபம்</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Gemini</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Mithuna</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>மிதுனம்</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Cancer</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Karka</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>கடகம்</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Leo</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Simha</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>சிம்மம்</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Virgo</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Kanya</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>கன்னி</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Libra</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Tula</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>துலாம்</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Scorpio</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Vrishchika</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>விருச்சிகம்</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Sagittarius</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Dhanu</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>தனுசு</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Capricorn</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Makara</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>மகரம்</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Aquarius</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Kumbha</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>கும்பம்</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Pisces</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Meena</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>மீனம்</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 style={{ color: '#A23CA2', fontWeight: 700, fontSize: '2rem', margin: '44px 0 22px 0', textAlign: 'left', width: '100%' }}>4. 27 Nakshatras (நட்சத்திரங்கள்)</h2>
                    <p style={{ color: '#3D003D', fontSize: '1.25rem', marginBottom: '22px', textAlign: 'left', width: '100%' }}>
                        These are lunar constellations, each carrying unique energy. Your Nakshatra (birth star) shapes your personality, desires, and life purpose.<br/>Some examples:
                    </p>
                    <ul style={{ color: '#3D003D', fontSize: '1.25rem', marginBottom: '22px', textAlign: 'left', width: '100%', paddingLeft: '24px', fontWeight: 700 }}>
                        <li><b>• Ashwini</b></li>
                        <li><b>• Bharani</b></li>
                        <li><b>• Mrigashira</b></li>
                        <li><b>• Rohini</b></li>
                        <li><b>• Pushya</b></li>
                        <li>...and 22 more!</li>
                    </ul>

                  
                    <h2 style={{ color: '#8B1C8B', fontWeight: 700, fontSize: '2rem', margin: '44px 0 22px 0', textAlign: 'left', width: '100%' }}>5. 12 Houses (பாவங்கள்)</h2>
                    <p style={{ color: '#3D003D', fontSize: '1.25rem', marginBottom: '22px', textAlign: 'left', width: '100%' }}>
                        Each house in the birth chart governs a different life domain:
                    </p>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                    
                        <table style={{ width: '100%', maxWidth: '1100px', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', margin: '0 auto', borderCollapse: 'collapse', fontSize: '1.13rem' }} className="w-full max-w-full text-sm md:text-base">
                            <thead>
                                <tr style={{ background: 'white', color: 'black', fontWeight: 700 }}>
                                    <th style={{ padding: '8px', border: '1px solid #E9A8F2' }}>House</th>
                                    <th style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Represents</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>1st</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Self, body, personality</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>2nd</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Speech, wealth, family</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>3rd</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Siblings, communication, courage</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>4th</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Home, mother, emotions</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>5th</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Creativity, children, education</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>6th</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Health, debts, enemies</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>7th</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Marriage, partnerships</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>8th</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Death, rebirth, secrets</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>9th</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Luck, dharma, higher knowledge</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>10th</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Career, karma, reputation</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>11th</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Gains, friendships, desires</td></tr>
                                <tr><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>12th</td><td style={{ padding: '8px', border: '1px solid #E9A8F2' }}>Moksha, loss, foreign travel</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 style={{ color: '#A23CA2', fontWeight: 700, fontSize: '1.7rem', margin: '44px 0 22px 0', textAlign: 'left', width: '100%' }}>A Spiritual Tool, Not a Cage</h2>
                    <p style={{ color: '#3D003D', fontSize: '1.25rem', marginBottom: '0', textAlign: 'left', width: '100%' }}>
                        Vedic Astrology isn't fatalistic. It doesn't bind you — it reveals your karmic map and offers tools to navigate life with awareness. Think of it as:<br/><br/>
                        <b>A cosmic mirror, not a prison.</b><br/><br/>
                        By understanding your birth chart, you align more deeply with your soul's journey, make wiser choices, and live in harmony with the universe.
                    </p>
                </div>
            </div>
          

            <div
                style={{
                    background: "#E9A8F2"
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
                    className="bg-[#E90000] border-4 border-white rounded-2xl px-8 md:px-20 py-2 md:py-3 lg:py-6 hover:text-white text-white text-lg md:text-xl lg:text-4xl hover:text-red shadow-lg hover:bg-white  transition duration-300"
                >
                    Check Now
                </button>

                <h1 style={{ color: 'black' }} className='text-xl md:text-2xl lg:text-6xl font-extrabold py-1 md:py-2 px-4 md:px-8 lg:px-40 text-center'>Ask a question talk to the best astrologer</h1>
                <button onClick={() => window.open("https://wa.me/+919508801096", "_blank")}
                    style={{ background: "#00980A" }} 
                    className='bg-[#00980A] border-4 border-white rounded-2xl px-8 md:px-20 py-2 md:py-3 lg:py-6 hover:text-white text-white text-lg md:text-xl lg:text-4xl hover:text-red shadow-lg hover:bg-white  transition duration-300'>
                    Chat in Whatsapp
                </button>

            </div>

        </div>
    );
};

export default Desktop64;