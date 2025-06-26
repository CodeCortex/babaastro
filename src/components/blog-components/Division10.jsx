import React from 'react';

const Division10 = () => {
    const publicUrl = process.env.PUBLIC_URL || "";

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${publicUrl}/assets/img/blog/division/d10/D10.svg)`,
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
                <h1 style={{ fontSize: '180px', textShadow: '2px 2px 3px black', paddingTop: "180px", paddingBottom: "180px" }} className="text-white font-extrabold sm:text-7xl md:text-9xl">
                    D10
                </h1>
            </div>

            <div
                style={{
                    background: "linear-gradient(to bottom, #BD5F01 0%, #3F0000 70%)"
                }}
                className=" w-full pt-20 pb-20 flex flex-col justify-center items-center"
            >
                <div
                    style={{ backgroundColor: 'white', width: '90vw' }}
                    className="h-56 pt-20 rounded-2xl flex justify-end items-end overflow-visible relative"
                >
                    <img
                        src={`${publicUrl}/assets/img/blog/division/d10/D10 2.png`}
                        alt="D10 Main Chart"
                        className="w-[350px] transform scale-[3.5] origin-bottom object-contain"
                    />
                </div>

                <div style={{ backgroundColor: "white", width: "86vw" }} className='mt-8 p-10'>
                    <div className='w-full flex md:flex-row flex-col  items-start mt-20 pb-8 '>
                        <img src={`${publicUrl}/assets/img/blog/division/d10/Rectangle 39.png`} alt="D10 Table" className="md:w-1/2 w-full rounded-lg scale-[1.5]" />
                        <div className='md:w-1/2 w-full flex flex-col justify-center px-6 gap-3'>
                            <p className='text-2xl font-bold mt-4' style={{ color: "#5D0000" }}>What is the D10 – Dashamsa Chart and Why Does It Matter?</p>
                            <p className='text-black font-medium' style={{ fontSize: '30px' }}>
                                The D10 chart, or Dashamsa (தசம்ச சக்கரம்), is a key divisional chart in Vedic astrology for analyzing career, profession, reputation, and public achievements. While the D1 chart may show general potential, D10 reveals the deeper layers—why some people rise to the top in their field, achieve status, or gain public respect. It's especially important for those focused on career growth, leadership, or anyone seeking to understand their professional destiny.
                            </p>
                        </div>
                    </div>

                    <div className='w-full flex md:flex-row flex-col  items-start mt-20 pb-8 '>
                        <div className='md:w-1/2 w-full flex flex-col justify-center px-6 gap-3'>
                            <p className='text-2xl font-bold mt-4' style={{ color: "#5D0000" }}>How is D10 Calculated and What to Look For?</p>
                            <p className='text-black font-medium' style={{ fontSize: '30px' }}>
                                Each zodiac sign is divided into 10 equal parts of 3°, creating 120 Dashamsas across the zodiac. In this chart, the Lagna and Lagna Lord reflect your professional drive and public image. The 10th house governs career, status, and achievements, while the Sun and Saturn show leadership and discipline. Benefics in the 10th bring career blessings, while malefics may indicate struggles for recognition. For example, a strong Sun and 10th lord together point to natural leadership and public success, while an afflicted 10th may reflect career blocks or reputation struggles.
                            </p>
                        </div>
                        <img src={`${publicUrl}/assets/img/blog/division/d10/Frame 307.png`} alt="D10 Supporting" className='md:w-1/2 w-full rounded-lg' />
                    </div>

                    <div className='w-full flex md:flex-row flex-col  items-start mt-20 pb-8 '>
                        <img src={`${publicUrl}/assets/img/blog/division/d10/Frame 320.png`} alt="D10 Supporting 2" className='md:w-1/2 w-full rounded-lg' />
                        <div className='md:w-1/2 w-full flex flex-col justify-center px-6 gap-3'>
                            <p className='text-2xl font-bold mt-4' style={{ color: "#5D0000" }}>Practical Benefits of Analyzing the D10 Chart</p>
                            <p className='text-black font-medium' style={{ fontSize: '30px' }}>
                                The D10 chart is an essential tool for professionals, leaders, and anyone seeking recognition or to leave a mark in their field. It helps predict success in career, identify unique talents, and guide individuals toward public achievement. Whether you're planning a professional path or seeking insight into your public blessings, the D10 chart reveals how well your soul is aligned with the path of career, reputation, and accomplishment.
                            </p>
                        </div>
                    </div>
                </div>
                <h1 className='text-white text-2xl lg:text-6xl font-extrabold py-10 lg:py-20'>Click for video</h1>
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
                            style={{ borderRadius: '12px' }}
                        ></iframe>
                    </div>
                </div>
                <h1 style={{ paddingBlock: "" }} className='text-white text-2xl lg:text-6xl font-extrabold py-10 px-8 lg:px-40 text-center'>Astrological remedies if you were not able to buy a house </h1>
                <button
                    style={{ backgroundColor: "#E90000" }}
                    className="bg-[#E90000] border-4 border-white rounded-2xl px-20 py-3 lg:py-6 hover:text-red-500 text-white text-xl lg:text-4xl hover:text-red shadow-lg hover:bg-white  transition duration-300"
                >
                    Check Now
                </button>
                <h1 className='text-white text-2xl lg:text-6xl font-extrabold py-10 px-8 lg:px-40 text-center'>Ask a question talk to the best astrologer</h1>
                <button onClick={() => window.open("https://wa.me/+919508801096", "_blank")}
                    style={{ background: "#00980A" }} className='border-4 border-white rounded-2xl px-20 py-3 lg:py-6 hover:text-white text-white text-xl lg:text-4xl hover:text-red shadow-lg hover:bg-white  transition duration-300'>Chat in Whatapp</button>
            </div>
        </div>
    );
};

export default Division10;
