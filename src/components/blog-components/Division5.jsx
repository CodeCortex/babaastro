import React from 'react';

const Division5 = () => {
    const publicUrl = process.env.PUBLIC_URL || "";

    return (
        <div className="relative w-full min-h-screen bg-[#0B3B0B] overflow-x-hidden">
            {/* Hero Section with Mask Group */}
            <div className="relative w-full min-h-[100vh] flex justify-center items-center"
                style={{
                    backgroundImage: `url(${publicUrl}/assets/img/blog/division/d5/D5.png)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                }}>
                {/* Mask Group SVG Overlay */}
                <div className="absolute inset-0 pointer-events-none z-10">
                    {/* Example SVG mask, replace with your actual mask asset */}
                    <svg width="100%" height="100%" viewBox="0 0 1920 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <defs>
                            <linearGradient id="maskGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#A3C635" stopOpacity="0.7" />
                                <stop offset="100%" stopColor="#0B3B0B" stopOpacity="0.9" />
                            </linearGradient>
                        </defs>
                        <path d="M0,0 L1920,0 L1920,300 Q960,400 0,300 Z" fill="url(#maskGradient)" />
                    </svg>
                </div>
                <h1
                    className="relative z-20 text-white font-extrabold sm:text-7xl md:text-9xl"
                    style={{
                        fontSize: '180px',
                        textShadow: '2px 2px 3px black',
                        paddingTop: "180px",
                        paddingBottom: "180px"
                    }}
                >
                    D5
                </h1>
            </div>

            {/* Website Ad/Banner Placeholder */}
            <div className="w-full flex justify-center items-center py-6 bg-transparent z-30 relative">
                {/* Replace below with your ad component or image */}
                <div className="w-[90vw] h-20 bg-gray-200 rounded-xl flex items-center justify-center shadow-md text-xl font-bold text-gray-700">
                    [Website Ad/Banner Space]
                </div>
            </div>

            {/* Main Content Section with Layered Card */}
            <div
                style={{
                    background: "linear-gradient(to bottom, #A3C635 0%, #0B3B0B 100%)"
                }}
                className="w-full pt-20 pb-20 flex flex-col justify-center items-center relative"
            >
                <div style={{
                    backgroundColor: "white",
                    width: "90vw",
                    borderRadius: "20px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
                }}
                    className='p-8 md:p-12 mt-[-120px] z-20 relative'
                >
                    {/* 1. Image left, text right */}
                    <div className='w-full flex md:flex-row flex-col items-start mb-10 gap-8'>
                        <img src={publicUrl + '/assets/img/blog/division/d5/D5img1.jpg'} alt="D5 Chart" className='md:w-1/2 w-full rounded-lg shadow-md mb-4 md:mb-0' style={{ objectFit: 'cover', maxWidth: '320px' }} />
                        <div className='md:w-1/2 w-full flex flex-col justify-center'>
                            <h2 className='text-lg md:text-xl font-bold mb-2' style={{ color: '#7B1F1F' }}>Why the D5 Chart Matters in Vedic Astrology</h2>
                            <p className='text-black font-medium text-xs md:text-sm' style={{ textAlign: 'justify' }}>
                                The D5 chart, known as Poorvapunya Varga, plays a vital role in revealing the spiritual legacy and hidden merits of past lives. Even when a person faces material or worldly struggles, a strong D5 chart indicates divine protection and inner strength to overcome karmic obstacles. This chart is especially relevant for individuals pursuing spiritual paths—such as astrologers, teachers, yogis, artists, and spiritual seekers—because it highlights the reserves of spiritual power and grace that guide one through life. It reflects not just external success, but the inner capacity for spiritual growth and resilience.
                            </p>
                        </div>
                    </div>

                    {/* 2. Text left, image right */}
                    <div className='w-full flex md:flex-row flex-col items-start mb-10 gap-8'>
                        <div className='md:w-1/2 w-full flex flex-col justify-center'>
                            <h2 className='text-lg md:text-xl font-bold mb-2' style={{ color: '#7B1F1F' }}>What to Analyze in the D5 Chart</h2>
                            <p className='text-black font-medium text-xs md:text-sm' style={{ textAlign: 'justify' }}>
                                When interpreting the D5 chart, certain key elements provide deep insight. The Lagna (ascendant) and its lord reveal your personal spiritual identity and how you channel divine energy. The 5th house signifies creativity, mantra power, and blessings from previous births. Jupiter represents wisdom, dharma, and the grace of a guru; Venus signifies love, devotion, and artistic brilliance; and Ketu points to moksha, mysticism, and detachment from worldly attachments. For instance, a strong Jupiter in D5 suggests a person with a natural guru quality and high ethical standards, while Venus in the D5 Lagna often indicates artistic genius paired with deep spiritual romanticism. On the flip side, malefics in the D5 Lagna can imply struggles with faith and spiritual trials. A strong 5th lord in D5 typically points to powerful past-life punya (merit) and spiritual blessings.
                            </p>
                        </div>
                        <img src={publicUrl + '/assets/img/blog/division/d5/D5img2.jpg'} alt="D5 Analysis" className='md:w-1/2 w-full rounded-lg shadow-md mb-4 md:mb-0' style={{ objectFit: 'contain', maxWidth: '320px', maxHeight: '260px', display: 'block', margin: '0 auto' }} />
                    </div>

                    {/* 3. Image left, text right */}
                    <div className='w-full flex md:flex-row flex-col items-start mb-10 gap-8'>
                        <img src={publicUrl + '/assets/img/blog/division/d5/D5img3.jpg'} alt="D5 Practice" className='md:w-1/2 w-full rounded-lg shadow-md mb-4 md:mb-0' style={{ objectFit: 'cover', border: '3px solid #4A90E2', maxWidth: '320px' }} />
                        <div className='md:w-1/2 w-full flex flex-col justify-center'>
                            <h2 className='text-lg md:text-xl font-bold mb-2' style={{ color: '#7B1F1F' }}>How the D5 Chart Can Be Used in Practice</h2>
                            <p className='text-black font-medium text-xs md:text-sm' style={{ textAlign: 'justify' }}>
                                The D5 chart serves as a valuable tool to understand your deeper purpose and latent gifts. It helps evaluate your devotional nature, artistic capabilities, and potential for spiritual evolution. Whether you're inclined towards music, poetry, yoga, astrology, or mantra practice, this chart reveals the subtle energies guiding your journey. It is especially helpful in identifying how divine help manifests in this life and the spiritual resources available to you. In essence, the D5 chart doesn't just speak to who you are—it speaks to the divine force that walks with you, often silently, through every challenge and triumph.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Video Section */}
                <h1 className='text-white text-2xl lg:text-6xl font-extrabold py-10 lg:py-20 text-center'>Click for video</h1>
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
                            style={{ borderRadius: '12px', display: 'block' }}
                        ></iframe>
                    </div>
                </div>

                {/* Buttons Section */}
                <h1 className='text-white text-2xl lg:text-6xl font-extrabold py-10 px-8 lg:px-40 text-center'>Astrological remedies if you were not able to buy a house</h1>
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

export default Division5;