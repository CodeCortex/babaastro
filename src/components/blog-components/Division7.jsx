import React from 'react';

const Division7= () => {
    const publicUrl = process.env.PUBLIC_URL || "";

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${publicUrl}/assets/img/blog/division/D7.jpg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                    // height: '700px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}
            >
                <h1 style={{ fontSize: '180px', textShadow: '2px 2px 3px black', paddingTop: "180px", paddingBottom: "180px" }} className="text-white font-extrabold sm:text-7xl md:text-9xl">
                    D7
                </h1>
            </div>
            

            <div
                style={{
                    background: "linear-gradient(to bottom, #2B1FA6 0%, #0A0033 100%)"
                }}
                className="w-full pt-20 pb-20 flex flex-col justify-center items-center"
            >
                <div style={{ position: 'relative', width: '90vw', margin: '0 auto' }} className='flex flex-col items-center'>
                    <div style={{ backgroundColor: '#e6e6e6' }} className='h-32 w-full flex items-center justify-center rounded-2xl text-2xl font-semibold text-gray-700'>
                        Space for website ad
                    </div>
                    <img 
                        src={publicUrl + '/assets/img/blog/division/astrologer.png'}
                        alt="Astrologer" 
                        style={{ position: 'absolute', right: '0%', bottom: '-15px', height: '300px', width: 'auto' }} 
                        className='z-10'
                    />
                </div>

                <div style={{ backgroundColor: 'white', width: '100%', maxWidth: '86vw' }} className='mt-8 px-2 md:px-8 py-4 md:py-8 rounded-lg'>
                  <div className='flex flex-col md:flex-row items-start mb-6'>
                    <img src={publicUrl + '/assets/img/blog/division/D7Baby.jpg'} alt="D7 Baby" className='w-full md:w-1/3 max-w-xs md:max-w-xs rounded-lg shadow-lg mb-4 md:mb-0 md:mr-6' style={{objectFit: 'cover'}} />
                    <div className='md:w-2/3 w-full'>
                      <h2 className='text-lg md:text-2xl font-bold mb-2' style={{ color: '#7B1F1F' }}>What is the D7 – Saptamsa Chart and Why is It Important?</h2>
                      <p className='text-black font-medium text-sm md:text-base' style={{textAlign: 'justify'}}>
                        The D7 chart, or Saptamsa (சப்தம்சம்), is one of the most insightful divisional charts in Vedic astrology, particularly when it comes to understanding children, creativity, fertility, and legacy. While the 5th house in the main D1 chart offers a general view of progeny, the D7 chart dives deeper into the karmic, emotional, and spiritual connections tied to childbirth and parenting. This chart is not only about biological children—it also encompasses creative offspring such as art, writing, music, and any form of expressive legacy. It's especially valuable for couples trying to conceive, individuals exploring fertility timing, or those who feel a strong calling toward nurturing and mentoring.
                      </p>
                    </div>
                  </div>

                  <div className='flex flex-col items-center mb-6'>
                    <img src={publicUrl + '/assets/img/blog/division/D7Table.png'} alt="D7 Table" className='w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl rounded-lg shadow-lg border border-blue-400' style={{objectFit: 'contain'}} />
                  </div>

                  <div className='mb-6'>
                    <h2 className='text-lg md:text-2xl font-bold mb-2' style={{ color: '#7B1F1F' }}>How D7 Works and What to Analyze</h2>
                    <p className='text-black font-medium text-sm md:text-base' style={{textAlign: 'justify'}}>
                      The zodiac is divided into 84 Saptamsas, with each 30° sign split into 7 parts of about 4.29° each. In the D7 chart, key elements to examine include the Lagna and its lord (which show your approach and karma around children), the 5th house (the heart of progeny-related results), and planets like Jupiter (fatherhood blessings), Venus (motherhood potential), Moon, and Mars (fertility, nurturing). For example, a strong Jupiter in the 5th house of D7 may indicate multiple children or spiritual heirs, while an afflicted 5th house could point to karmic challenges in conceiving or raising children. In female charts, Venus conjunct malefics may suggest complications or the need for fertility treatments, while benefics aspecting the Lagna often bless the native with a joyful, dharmic bond with their children.
                    </p>
                  </div>

                  <div className='flex flex-col md:flex-row items-start border border-blue-400 rounded-lg p-2 md:p-4'>
                    <img src={publicUrl + '/assets/img/blog/division/D7God.jpg'} alt="D7 God" className='w-full md:w-1/2 max-w-xs sm:max-w-md md:max-w-md rounded-lg shadow-lg mb-4 md:mb-0 md:mr-6' style={{objectFit: 'cover'}} />
                    <div className='md:w-1/2 w-full'>
                      <h2 className='text-lg md:text-2xl font-bold mb-2' style={{ color: '#7B1F1F', borderBottom: '1px dashed #7B1F1F' }}>Practical Applications of the D7 Chart</h2>
                      <p className='text-black font-medium text-sm md:text-base' style={{textAlign: 'justify'}}>
                        Astrologers use the D7 chart to assess fertility windows, timing for childbirth, and the likelihood of parenting challenges or blessings. It also plays a key role in understanding one's spiritual lineage—such as the guru-shishya tradition in yogic paths—and one's emotional legacy, which may be passed down through teaching, mentoring, or creative pursuits. Whether you're planning a family, navigating unexplained fertility issues, or exploring your role as a parent or creator, the D7 chart offers rare insight into how your soul expresses love, nurtures life, and continues your dharmic path across generations.
                      </p>
                    </div>
                  </div>
                </div>
                <h1 className='text-white text-xl md:text-2xl lg:text-6xl font-extrabold py-6 md:py-10 lg:py-20 text-center'>Click for video</h1>
                <div>
                    <div className='' style={{ height: '80vh', width: "90vw" }}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/SKeF4Ymwt1Y?autoplay=1&mute=1&rel=0&showinfo=0"
                            title="YouTube video"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            className=''

                            style={{ borderRadius: '12px' }} // optional: adds rounded corners
                        ></iframe>
                    </div>

                </div>
                <h1 style={{ paddingBlock: "" }} className='text-white text-xl md:text-2xl lg:text-6xl font-extrabold py-6 md:py-10 px-4 md:px-8 lg:px-40 text-center'>Astrological remedies if you were not able to buy a house </h1>
                <div className='w-full flex justify-center'>
                  <button
                      style={{ backgroundColor: "#E90000" }}
                      className="bg-[#E90000] border-4 border-white rounded-2xl px-8 md:px-20 py-2 md:py-3 lg:py-6 hover:text-red-500 text-white text-base md:text-xl lg:text-4xl hover:text-red shadow-lg hover:bg-white  transition duration-300"
                  >
                      Check Now
                  </button>
                </div>
                <h1 className='text-white text-xl md:text-2xl lg:text-6xl font-extrabold py-6 md:py-10 px-4 md:px-8 lg:px-40 text-center'>Ask a question talk to the best astrologer</h1>
                <div className='w-full flex justify-center'>
                  <button onClick={() => window.open("https://wa.me/+919508801096", "_blank")}
                      style={{ background: "green" }} className='border-4 border-white rounded-2xl px-8 md:px-20 py-2 md:py-3 lg:py-6 hover:text-white text-white text-base md:text-xl lg:text-4xl hover:text-red shadow-lg hover:bg-white  transition duration-300'>Chat in Whatapp</button>
                </div>

            </div>

        </div>
    );
};

export default Division7;