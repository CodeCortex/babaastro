import React from 'react';

const Division16 = () => {
    const publicUrl = process.env.PUBLIC_URL || "";

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${publicUrl}/assets/img/blog/division/d16/cde9c7335becd495a5887ef47d6077ebb8f74dca.png)`,
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
                    D16
                </h1>
            </div>

            {/* Ad Section */}
            <div
                style={{
                    background: '#D40044',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem 2rem',
                    borderRadius: '12px',
                    width: '90%',
                    margin: '-80px auto 40px',
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                <p
                    style={{
                        backgroundColor: 'white',
                        padding: '1.5rem',
                        fontWeight: 'bold',
                        fontSize: '20px',
                        flex: 1,
                    }}
                >
                    Space for website ad
                </p>
                <img
                    src={`${publicUrl}/assets/img/blog/division/d16/1298f8baccd5eddd42bb45413c2c169e7e7f2dfc.png`} // replace with your ad image
                    alt="Ad"
                    style={{ width: '120px', marginLeft: '1rem', borderRadius: '100%' }}
                />
            </div>

            <div
                style={{
                    background: "linear-gradient(to bottom, #D40044 0%, #2D0001 100%)"
                }}
                className=" w-full pt-20 pb-20 flex flex-col justify-center items-center"
            >
                

                <div style={{ backgroundColor: "white", width: "86vw" }} className='mt-8 p-10'>
                    <div className='w-full flex md:flex-row flex-col  items-start mt-20 pb-8 '>
                        <img src={`${publicUrl}/assets/img/blog/division/d16/0cfd18947dd2ec81bb5916f82d1c7988be45f8ad.jpg`} alt="D16 Table" className="md:w-1/2 w-full rounded-lg scale-[1.5]" />
                        <div className='md:w-1/2 w-full flex flex-col justify-center px-6 gap-3'>
                            <p className='text-2xl font-bold mt-4' style={{ color: "#5D0000" }}>What is the D16 – Shodasamsa Chart and Why Does It Matter?</p>
                            <p className='text-black font-medium' style={{ fontSize: '30px' }}>
                                The D16 chart, or Shodasamsa (षोडशांश), is a key divisional chart in Vedic astrology for analyzing vehicles, comforts, luxuries, and happiness derived from material possessions. While the D1 chart shows general potential, D16 reveals the deeper layers—why some enjoy great comforts, vehicles, or face obstacles in acquiring luxuries. It's especially important for those interested in vehicles, property, or understanding their capacity for enjoyment.
                            </p>
                        </div>
                    </div>

                    <div className='w-full flex md:flex-row flex-col  items-start mt-20 pb-8 '>
                        <div className='md:w-1/2 w-full flex flex-col justify-center px-6 gap-3'>
                            <p className='text-2xl font-bold mt-4' style={{ color: "#5D0000" }}>How is D16 Calculated and What to Look For?</p>
                            <p className='text-black font-medium' style={{ fontSize: '30px' }}>
                                Each zodiac sign is divided into 16 equal parts of 1°52'30", creating 192 Shodasamsas across the zodiac. The Lagna and Lagna Lord reflect your capacity for enjoyment and comfort. The 4th house governs vehicles and happiness, while Venus and the Moon show luxuries and pleasures. Benefics in the 4th bring comforts, while malefics may indicate obstacles. For example, a strong Venus and 4th lord together point to luxury and happiness, while afflictions may reflect struggles for comfort.
                            </p>
                        </div>
                        <img src={`${publicUrl}/assets/img/blog/division/d16/40b30d1a094f2a0fa9e074545396ffd0fb4d26ad.jpg`} alt="D16 Supporting" className='md:w-1/2 w-full rounded-lg' />
                    </div>

                    <div className='w-full flex md:flex-row flex-col  items-start mt-20 pb-8 '>
                        <img src={`${publicUrl}/assets/img/blog/division/d16/b5f7d85742a002ae72e8c962994e4de6e42b2942.jpg`} alt="D16 Supporting 2" className='md:w-1/2 w-full rounded-lg' />
                        <div className='md:w-1/2 w-full flex flex-col justify-center px-6 gap-3'>
                            <p className='text-2xl font-bold mt-4' style={{ color: "#5D0000" }}>Practical Benefits of Analyzing the D16 Chart</p>
                            <p className='text-black font-medium' style={{ fontSize: '30px' }}>
                                The D16 chart is an essential tool for those seeking to understand their capacity for comfort, luxury, and happiness. It helps identify strengths and challenges in acquiring vehicles, property, and pleasures, and guides individuals toward fulfillment. Whether you're planning to acquire a vehicle or seeking insight into your capacity for enjoyment, the D16 chart reveals how well your soul is aligned with material happiness.
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
                <h1 style={{ paddingBlock: "" }} className='text-white text-2xl lg:text-6xl font-extrabold py-10 px-8 lg:px-40 text-center'>Astrological remedies for comfort and luxury</h1>
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

export default Division16;
