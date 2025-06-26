import React from 'react';

const Division2 = () => {
    const publicUrl = process.env.PUBLIC_URL || "";

    return (
        <div className="w-full min-h-screen">
            <div
                style={{
                    backgroundImage: `url(${publicUrl}/assets/img/blog/division/BG_Cover.jpg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                    minHeight: '100vh',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <h1
                    style={{
                        fontSize: 'clamp(3rem, 20vw, 12rem)',
                        textShadow: '2px 2px 3px black',
                        paddingTop: "clamp(3rem, 15vw, 11rem)",
                        paddingBottom: "clamp(3rem, 15vw, 11rem)"
                    }}
                    className="text-white font-extrabold"
                >
                    D60
                </h1>
            </div>

            <div
                style={{
                    background: "linear-gradient(to bottom, #00D47F 0%, #003721 70%)"
                }}
                className="w-full pt-10 pb-10 flex flex-col justify-center items-center"
            >
                <div
                    style={{ backgroundColor: 'white', width: '95vw', maxWidth: '1200px' }}
                    className="h-40 sm:h-56 md:h-64 lg:h-72 pt-10 rounded-2xl flex justify-end items-end overflow-visible relative"
                >
                    <img
                        src={`${publicUrl}/assets/img/blog/division/BabaG.jpg`}
                        alt="BabaG"
                        className="w-32 sm:w-44 md:w-56 lg:w-72 transform scale-150 sm:scale-[2.5] md:scale-[3.5] origin-bottom object-contain absolute bottom-0 right-20"
                    />
                </div>

                <div style={{ backgroundColor: "white", width: "95vw", maxWidth: "1200px" }} className='mt-8 p-4 sm:p-10 rounded-xl'>
                    <div className='w-full flex md:flex-row flex-col items-start mt-5 pb-8 gap-6'>
                        <img src={`${publicUrl}/assets/img/blog/division/D60_001.jpg`} alt="" className="md:w-1/2 w-full rounded-lg object-cover scale-100" />
                        <div className='md:w-1/2 w-full flex flex-col justify-center px-0 md:px-6 gap-3'>
                            <p className='text-2xl font-bold mt-4' style={{ color: "#5D0000" }}>What is the D60 – Shashtiamsa Chart and Why Is It So Supreme?</p>
                            <p className='text-black font-medium text-lg md:text-2xl' style={{ lineHeight: 1.5 }}>
                                The D60 chart, or Shashtiamsa (ஷஷ்டியம்ச சக்கரம்), is the most subtle, spiritual, and karmically significant chart in all of Vedic astrology. It reveals the deepest past-life karma, unresolved debts, soul contracts, and hidden forces that shape your current life experiences. Often called the “soul’s blueprint,” the D60 explains why certain events occur even when there’s no logical indication in the D1 chart. It gives astrologers the final verdict on planetary strength and the true source of recurring struggles or blessings. However, it’s incredibly time-sensitive—even a one-minute error in birth time can drastically alter the chart.
                            </p>
                        </div>
                    </div>

                    <div className='w-full flex md:flex-row flex-col items-start mt-0  gap-6'>

                        <img src={`${publicUrl}/assets/img/blog/division/D60_table1.jpg`} alt="" className='w-full rounded-lg object-cover mt-4 md:mt-0' />
                    </div>



                    <div className='w-full flex md:flex-row flex-col items-start mt-0 pb-8 gap-6'>
                        <div className='w-full flex flex-col justify-center px-0 md:px-6 gap-3'>
                            <p className='text-2xl font-bold mt-0' style={{ color: "#5D0000" }}>How is D60 Calculated and What to Look For?</p>
                            <p className='text-black font-medium text-lg md:text-2xl' style={{ lineHeight: 1.5 }}>
                                Each zodiac sign is divided into 24 equal parts of 1°15′, creating 288 Siddhamsas across the zodiac. In this chart, the Lagna and Lagna Lord reflect your learning approach and mental strength. The 4th house governs foundational education and memory, while the 9th house shows higher learning, divine guidance, and philosophical depth. Mercury is vital for intellectual clarity and expression, Jupiter for wisdom and spiritual learning, and Saturn for discipline—or delays if afflicted. For example, strong Mercury and Jupiter together point to natural teaching ability, while an afflicted 4th house might reflect early learning blocks or distractions.
                            </p>
                        </div>
                    </div>


                    <div className='w-full flex md:flex-row flex-col items-start mt-0 pb-8 gap-6'>

                        <img src={`${publicUrl}/assets/img/blog/division/D60_table2.png`} alt="" className='w-full rounded-lg object-cover mt-4 md:mt-0' />
                    </div>

                    <div className='w-full flex md:flex-row flex-col items-start mt-0 pb-8 gap-6'>
                        <div className='w-full flex flex-col justify-center px-0 md:px-6 gap-3'>
                            <p className='text-2xl font-bold mt-4' style={{ color: "#5D0000" }}>Practical Benefits of Analyzing the D60 Chart</p>
                            <p className='text-black font-medium text-lg md:text-2xl' style={{ lineHeight: 1.5 }}>
                               The D60 chart is invaluable for understanding life patterns that don’t make sense in your main chart (D1). It confirms the true strength of yogas and doshas, especially when evaluating planetary dignity, Neecha Bhanga Raj Yoga, or spiritual blocks. It’s also used for deep remedial suggestions like ancestral healing, mantra sadhana, fasting, and pilgrimages. Above all, the D60 gives you a glimpse of your soul’s journey toward moksha—revealing the blessings you’ve earned, the debts you must clear, and the mission your spirit carries. In spiritual astrology, this chart isn’t just predictive—it’s transformative.
                            </p>
                        </div>
                    </div>

                </div>

                <h1 className='text-white text-2xl lg:text-6xl font-extrabold py-10 lg:py-20 text-center'>Click for video</h1>

                <div className="w-[95vw] max-w-6xl" style={{ height: '50vh', width: `90vh`, minHeight: 250, minWidth: 100 }}>
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/SKeF4Ymwt1Y?autoplay=1&mute=1&rel=0&showinfo=0"
                        title="YouTube video"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className='rounded-xl w-full h-full'
                        style={{ borderRadius: '12px', border: 0 }}
                    ></iframe>
                </div>

                <h1 className='text-white text-2xl lg:text-6xl font-extrabold py-10 px-4 lg:px-40 text-center'>Astrological remedies if you were not able to buy a house </h1>

                <button
                    style={{ backgroundColor: "#E90000" }}
                    className="bg-[#E90000] border-4 border-white rounded-2xl px-10 py-3 lg:py-6 hover:text-red-500 text-white text-xl lg:text-4xl hover:text-red shadow-lg hover:bg-white  transition duration-300 mb-8"
                >
                    Check Now
                </button>

                <h1 className='text-white text-2xl lg:text-6xl font-extrabold py-10 px-4 lg:px-40 text-center'>Ask a question talk to the best astrologer</h1>
                <button onClick={() => window.open("https://wa.me/+919508801096", "_blank")}
                    style={{ background: "#00980A" }} className='border-4 border-white rounded-2xl px-10 py-3 lg:py-6 hover:text-white text-white text-xl lg:text-4xl hover:text-red shadow-lg hover:bg-white  transition duration-300'>Chat in Whatapp</button>
            </div>
        </div>
    );
};

export default Division2;