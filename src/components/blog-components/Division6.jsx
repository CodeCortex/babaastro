import React from 'react';

const Division6 = () => {
    const publicUrl = process.env.PUBLIC_URL || "";

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${publicUrl}/assets/img/blog/division/D6.png)`,
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
                    D6
                </h1>
            </div>


            <div
                style={{
                    background: "linear-gradient(to bottom, #0099A8 0%, #003C4D 100%)"
                }}
                className="w-full pt-10 md:pt-20 pb-10 md:pb-20 flex flex-col justify-center items-center"
            >
                <div style={{ position: 'relative', width: '100%', maxWidth: '90vw', margin: '0 auto' }} className='flex flex-col items-center'>
                    <div style={{ backgroundColor: '#e6e6e6' }} className='h-24 md:h-32 w-full flex items-center justify-center rounded-2xl text-lg md:text-2xl font-semibold text-gray-700'>
                        Space for website ad
                    </div>
                    <img 
                        src={publicUrl + '/assets/img/blog/division/astrologer.png'}
                        alt="Astrologer" 
                        style={{ position: 'absolute', right: '0%', bottom: '-15px', height: '300px', width: 'auto' }} 
                        className='z-10'
                    />
                </div>

                <div style={{ backgroundColor: "white", width: "100%", maxWidth: "86vw" }} className='mt-8 px-2 md:px-10 py-4 md:py-10 rounded-lg'>
                    {/* 1. Table left, intro text right */}
                    <div className='flex flex-col md:flex-row items-start mb-6'>
                        <img src={publicUrl + '/assets/img/blog/division/D6Table.jpg'} alt="D6 Table" className='w-full md:w-1/2 max-w-xs sm:max-w-md md:max-w-lg rounded-lg shadow-lg mb-0 md:mb-0 md:mr-6' style={{objectFit: 'contain'}} />
                        <div className='md:w-1/2 w-full'>
                            <h2 className='text-lg md:text-2xl font-bold mb-2' style={{ color: '#7B1F1F' }}>What is the D6 – Shashtamsa Chart and Why Does It Matter?</h2>
                            <p className='text-black font-medium text-sm md:text-base' style={{textAlign: 'justify'}}>
                                The D6 chart, or Shashtamsa (ஷஷ்ட்டம்சம்), is a powerful tool in Vedic astrology used to uncover hidden patterns related to health, suffering, and karmic imbalances from past lives. While the D1 chart might reflect general wellness and strength, the D6 chart digs deeper into chronic illnesses, unexplained ailments, and the subtle forces behind long-term health challenges. This divisional chart becomes especially crucial when individuals face persistent health problems, autoimmune conditions, or sudden deterioration in health despite a good lifestyle. It offers insights that go beyond physical diagnosis—shedding light on the karmic roots of suffering and the soul's ability to heal.
                            </p>
                        </div>
                    </div>

                    {/* 2. Calculation text left, body image right */}
                    <div className='flex flex-col md:flex-row items-start mb-6'>
                        <div className='md:w-1/2 w-full mb-4 md:mb-0 md:mr-6'>
                            <h2 className='text-lg md:text-2xl font-bold mb-2' style={{ color: '#7B1F1F' }}>How is D6 Calculated and What to Look For?</h2>
                            <p className='text-black font-medium text-sm md:text-base' style={{textAlign: 'justify'}}>
                                Each zodiac sign (30°) is divided into six equal parts of 5°, resulting in 72 distinct divisions across the zodiac. Within this finely detailed chart, astrologers focus on critical components: the Lagna and Lagna Lord (which reveal bodily strength), the 6th house and its lord (which show the type and cause of diseases), and the placement of malefics (like Saturn, Ketu, or Rahu), which signal areas of vulnerability or karmic health issues. Benefic planets like Jupiter and Venus, on the other hand, offer hope—they symbolize recovery potential and inner healing grace. For example, a strong Mars in D6 shows recovery power but a tendency toward inflammation, while an afflicted Moon may point to emotional instability or mental health concerns.
                            </p>
                        </div>
                        <img src={publicUrl + '/assets/img/blog/division/D6body.jpg'} alt="D6 Body" className='w-full md:w-1/2 max-w-xs sm:max-w-md md:max-w-lg rounded-lg shadow-lg mb-0' style={{objectFit: 'contain'}} />
                    </div>

                    {/* 3. DNA and body parts images left, practical benefits text right */}
                    <div className='flex flex-col md:flex-row items-start border border-blue-400 rounded-lg p-2 md:p-4'>
                        <div className='md:w-1/2 w-full flex flex-col items-center md:items-start mb-4 md:mb-0 md:mr-6'>
                            <img src={publicUrl + '/assets/img/blog/division/D6DNA.jpg'} alt="D6 DNA" className='w-full max-w-xs sm:max-w-md md:max-w-md rounded-lg shadow-lg mb-0' style={{objectFit: 'contain'}} />
                            <img src={publicUrl + '/assets/img/blog/division/D6BodyPart.jpg'} alt="D6 Body Parts" className='w-full max-w-xs sm:max-w-md md:max-w-md rounded-lg shadow-lg mb-0' style={{objectFit: 'contain'}} />
                        </div>
                        <div className='md:w-1/2 w-full'>
                            <h2 className='text-lg md:text-2xl font-bold mb-2' style={{ color: '#7B1F1F' }}>Practical Benefits of Analyzing the D6 Chart</h2>
                            <p className='text-black font-medium text-sm md:text-base' style={{textAlign: 'justify'}}>
                                The D6 chart is immensely useful in medical astrology. It aids in diagnosing the karmic origin of health issues, predicting recovery periods, and identifying vulnerable phases for illness or surgery. A strong Jupiter in the 6th house of D6 can indicate quick recovery and blessings from past life good deeds, whereas Rahu in the Lagna may signal rare or hard-to-diagnose conditions. This chart also supports holistic approaches such as Ayurveda, yoga therapy, and spiritual healing, helping individuals align with their body's natural intelligence and karmic journey. Ultimately, the D6 chart not only points to what may go wrong—it reveals how the soul can heal, learn, and transform through the path of physical health.
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

                <h1 style={{ paddingBlock: "" }} className='text-white text-2xl lg:text-6xl font-extrabold py-10 px-8 lg:px-40 text-center'>Astrological remedies if you were not able to buy a house </h1>

                <button
                    style={{ background: "#E90000" }}
                    className="bg-[#E90000] border-4 border-white rounded-2xl px-20 py-3 lg:py-6 hover:text-white text-white text-xl lg:text-4xl hover:text-red shadow-lg hover:bg-white  transition duration-300"
                >
                    Check Now
                </button>

                <h1 className='text-white text-2xl lg:text-6xl font-extrabold py-10 px-8 lg:px-40 text-center'>Ask a question talk to the best astrologer</h1>
                <button onClick={() => window.open("https://wa.me/+919508801096", "_blank")}
                    style={{ background: "#00980A" }} 
                    className='bg-[#00980A] border-4 border-white rounded-2xl px-20 py-3 lg:py-6 hover:text-white text-white text-xl lg:text-4xl hover:text-red shadow-lg hover:bg-white  transition duration-300'>
                    Chat in Whatsapp
                </button>

            </div>

        </div>
    );
};

export default Division6;