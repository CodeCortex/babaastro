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
                    D30
                </h1>
            </div>

            <div
                style={{
                    background: "linear-gradient(to bottom, #D45100 0%, #4D1F03 70%)"
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
                    <div className='w-full flex md:flex-row flex-col items-start mt-10 pb-8 gap-6'>
                        <div className="flex flex-col md:w-1/2 w-full gap-4 mt-6 mb-2  inline-block">
                            <img
                                src={`${publicUrl}/assets/img/blog/division/D30_table.jpg`}
                                alt=""
                                className="w-full rounded-lg object-cover scale-100 "
                            />
                            <img
                                src={`${publicUrl}/assets/img/blog/division/D30_001.jpg`}
                                alt=""
                                className="w-full rounded-lg object-cover scale-100 border-2 "
                            />
                        </div>
                        <div className='md:w-1/2 w-full flex flex-col justify-center px-0 md:px-6 gap-3'>
                            <p className='text-2xl font-bold mt-4' style={{ color: "#5D0000" }}>What is the D30 – Trimsamsa Chart and Why Is It So Karmic?</p>
                            <p className='text-black font-medium text-lg md:text-2xl' style={{ lineHeight: 1.5 }}>
                                The D30 chart, or Trimsamsa (திரிம்சம்ச சக்கரம்), is one of the most sensitive and karmically intense divisional charts in Vedic astrology. It exposes the hidden causes of suffering, misfortune, curses, and inner psychological turmoil. While your D1 chart may show strength, D30 often reveals the underlying reasons for unexplained losses, illnesses, or emotional pain. Known as the chart of the “inner shadow,” it highlights spiritual debts from past lives and the darker aspects of the soul’s journey—things we must face and heal to evolve.
                            </p>
                        </div>
                    </div>

                    <div className='w-full flex md:flex-row flex-col items-start mt-10 pb-8 gap-6'>
                        <div className='md:w-1/2 w-full flex flex-col justify-center px-0 md:px-6 gap-3'>
                            <p className='text-2xl font-bold mt-4' style={{ color: "#5D0000" }}>How is D30 Calculated and What to Look For?</p>
                            <p className='text-black font-medium text-lg md:text-2xl' style={{ lineHeight: 1.5 }}>
                                Each zodiac sign is divided into 30 parts of 1°, resulting in 360 Trimsamsa divisions, but unlike other charts, it follows different rules for odd and even signs (as per the Parashara system). In this chart, key areas to examine include the Lagna and its lord (your inner resilience), the 6th, 8th, and 12th houses (for disease, enemies, and hidden suffering), and malefics like Mars, Saturn, Rahu, and Ketu, which often act as karmic triggers. Planets like Moon and Mercury reveal mental and emotional stability, while benefics in Kendras point to the ability to heal and transcend. For example, an afflicted Moon may indicate anxiety or insomnia, while a well-placed Ketu in the 12th house might suggest spiritual liberation through loss.
                            </p>
                        </div>
                        <img src={`${publicUrl}/assets/img/blog/division/D30_table2.jpg`} alt="" className='md:w-1/2 w-full rounded-lg object-cover mt-4 md:mt-0' />
                    </div>

                    <div className='w-full flex md:flex-row flex-col items-stretch mt-10 pb-8 gap-6'>
                        <img
                            src={`${publicUrl}/assets/img/blog/division/D30_002.jpg`}
                            alt=""
                            className='md:w-1/2 w-full rounded-lg object-cover scale-100 h-full'
                            style={{ objectFit: 'cover' }}
                        />
                        <div className='md:w-1/2 w-full flex flex-col justify-center px-0 md:px-6 gap-3 h-full'>
                            <p className='text-2xl font-bold mt-4' style={{ color: "#5D0000" }}>
                                Practical Benefits of Analyzing the D24 Chart
                            </p>
                            <p className='text-black font-medium text-lg md:text-2xl' style={{ lineHeight: 1.5 }}>
                                The D24 chart is an essential tool for students, scholars, and anyone on a learning path—academic or spiritual. It helps predict success in education, identify the right stream of study, and even guide aspirants toward teaching or guru roles. It also explains why certain individuals struggle in formal education yet thrive in self-taught spiritual or intuitive learning paths. Whether you’re planning your academic future or seeking insight into your deeper wisdom channels, the D24 chart reveals how well your soul is aligned with the path of knowledge, discipline, and inner enlightenment.
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