import React from 'react';

const Division9= () => {
    const publicUrl = process.env.PUBLIC_URL || "";

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${publicUrl}/assets/img/blog/division/D9.jpg)`,
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
                    D9
                </h1>
            </div>
            

            <div
                style={{
                    background: "linear-gradient(to bottom, #5B1FA6 0%, #1A0033 100%)"
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
                    <img src={publicUrl + '/assets/img/blog/division/D9vergottamma.png'} alt="Potential of Vargottama" className='w-full md:w-1/3 max-w-xs md:max-w-xs rounded-lg shadow-lg mb-0 md:mb-0 md:mr-6' style={{objectFit: 'cover'}} />
                    <div className='md:w-2/3 w-full'>
                      <h2 className='text-lg md:text-2xl font-bold mb-2' style={{ color: '#7B1F1F' }}>What is the D9 – Navamsa Chart and Why Does It Matter?</h2>
                      <p className='text-black font-medium text-sm md:text-base' style={{textAlign: 'justify'}}>
                        The D9 chart, or Navamsa (நவம்ச சக்கரம்), is one of the most revered divisional charts in Vedic astrology. Known as the "soul chart," it reveals the hidden strength of planets, the evolution of your dharma, and the true essence of your marriage life. While the D1 chart outlines the surface-level personality and events, the D9 unveils your inner growth, emotional maturity, and the deeper karmic path your soul is meant to walk—especially after age 30. It's essential for understanding spiritual direction, relationship outcomes, and the long-term unfolding of life's purpose.
                      </p>
                    </div>
                  </div>

                  <div className='flex flex-col md:flex-row items-start mb-6'>
                    <div className='md:w-1/2 w-full mb-4 md:mb-0 md:mr-6'>
                      <h2 className='text-lg md:text-2xl font-bold mb-2' style={{ color: '#7B1F1F' }}>How is D9 Calculated and What to Look For?</h2>
                      <p className='text-black font-medium text-sm md:text-base' style={{textAlign: 'justify'}}>
                        Each zodiac sign (30°) is divided into nine equal parts of 3°20', resulting in 108 Navamsa divisions. A planet's placement in the D1 chart determines its new sign in D9, providing a refined view of its real potency. Key areas to analyze include the Lagna and Lagna Lord (for spiritual identity), 7th house and its lord (for marriage quality), and Vargottama planets, which hold great strength when occupying the same sign in D1 and D9. Venus (for men) and Jupiter (for women) are particularly significant in D9, revealing marital bliss or lessons. Benefics in the 7th house indicate bonding and harmony, while malefics suggest challenges or karmic adjustments in relationships.
                      </p>
                    </div>
                    <img src={publicUrl + '/assets/img/blog/division/D9Table.jpg'} alt="D9 Table" className='w-full md:w-1/2 max-w-xs sm:max-w-md md:max-w-lg rounded-lg shadow-lg border border-gray-300 mb-0' style={{objectFit: 'contain'}} />
                  </div>

                  <div className='flex flex-col md:flex-row items-start border border-red-400 rounded-lg p-2 md:p-4'>
                    <img src={publicUrl + '/assets/img/blog/division/D9Chart.jpg'} alt="D9 Chart" className='w-full md:w-1/2 max-w-xs sm:max-w-md md:max-w-md rounded-lg shadow-lg mb-0 md:mb-0 md:mr-6' style={{objectFit: 'cover'}} />
                    <div className='md:w-1/2 w-full'>
                      <h2 className='text-lg md:text-2xl font-bold mb-2' style={{ color: '#7B1F1F', borderBottom: '1px dashed #7B1F1F' }}>Practical Benefits of Analyzing the D9 Chart</h2>
                      <p className='text-black font-medium text-sm md:text-base' style={{textAlign: 'justify'}}>
                        The D9 chart is invaluable for marriage timing, compatibility assessment, and confirming planetary yogas found in the D1 chart. It shows not just the kind of spouse you may attract, but how your relationships evolve with time and maturity. A strong Jupiter or Ketu in D9, or a powerful 9th house, points to guru blessings and a path of spiritual growth. Whether you're navigating love, searching for your life purpose, or verifying the strength of yogas, the D9 chart offers clarity about the soul's mission and the grace that unfolds through dharma, devotion, and inner evolution.
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "84vw", maxWidth: "1100px", margin: "32px auto 0 auto" }}>
                    <h1 className="text-white text-lg lg:text-4xl font-medium py-2 lg:py-4" style={{ textAlign: "left", marginBottom: "8px" }}>
                        Click for video
                    </h1>
                    <div style={{ height: '70vh', width: "100%" }}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/SKeF4Ymwt1Y?autoplay=1&mute=1&rel=0&showinfo=0"
                            title="YouTube video"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            style={{ borderRadius: '12px', display: 'block' }}
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

export default Division9;