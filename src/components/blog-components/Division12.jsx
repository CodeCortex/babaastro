import React from 'react';

const Division12 = () => {
    const publicUrl = process.env.PUBLIC_URL || "";

    return (
        <div>
            {/* Hero Section */}
            <div
                style={{
                    backgroundImage: `url(${publicUrl}/assets/img/blog/division/d12/cde9c7335becd495a5887ef47d6077ebb8f74dca.png)`,
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
                <h1 style={{ fontSize: '120px', textShadow: '2px 2px 3px black', paddingTop: "120px", paddingBottom: "120px" }} className="text-white font-extrabold sm:text-7xl md:text-9xl">
                    D12
                </h1>
            </div>

            {/* Ad Section */}
            <div
                style={{
                    background: '#D40075',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem 2rem',
                    borderRadius: '12px',
                    width: '90%',
                    margin: '-40px auto 24px',
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                <p
                    style={{
                        backgroundColor: 'white',
                        padding: '1rem',
                        fontWeight: 'bold',
                        fontSize: '18px',
                        flex: 1,
                        margin: 0,
                    }}
                >
                    Space for website ad
                </p>
                <img
                    src={`${publicUrl}/assets/img/blog/division/d12/1298f8baccd5eddd42bb45413c2c169e7e7f2dfc.png`}
                    alt="Ad"
                    style={{ width: '100px', marginLeft: '1rem', borderRadius: '100%' }}
                />
            </div>

            <div
                style={{
                    background: "linear-gradient(to bottom, #D40075 0%, #30001A 100%)"
                }}
                className="w-full pt-10 pb-10 flex flex-col justify-center items-center"
            >
                <div style={{ backgroundColor: "white", width: "86vw" }} className='mt-4 p-6'>
                    {/* Section: What is the D12 – Dwadashamsa Chart and Why Does It Matter? */}
                    <div className='w-full flex flex-col md:flex-row items-center mt-10 pb-8 gap-8'>
                        {/* Images stacked vertically on the left, centered */}
                        <div className="md:w-1/2 w-full flex flex-col items-center justify-center gap-6">
                            <img
                                src={`${publicUrl}/assets/img/blog/division/d12/c5af9d3dc6dac11f7059a547016af020ee7d1993.jpg`}
                                alt="D12 Table 1"
                                className="w-full max-w-[350px] rounded-lg"
                                style={{ objectFit: 'cover' }}
                            />
                            <img
                                src={`${publicUrl}/assets/img/blog/division/d12/a902950a280f4910d8fa74041b45e59522d18c80.jpg`}
                                alt="D12 Table 2"
                                className="w-full max-w-[350px] rounded-lg"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        {/* Text on the right, vertically centered */}
                        <div className="md:w-1/2 w-full flex flex-col justify-center gap-4 px-4">
                            <p className='text-2xl font-bold mt-2' style={{ color: "#5D0000" }}>
                                What is the D12 – Dwadashamsa Chart and Why Does It Matter?
                            </p>
                            <p className='text-black font-medium' style={{ fontSize: '22px' }}>
                                The D12 chart, or Dwadashamsa (द्वादशांश), is a key divisional chart in Vedic astrology for analyzing parental lineage, inherited traits, and ancestral blessings or challenges. While the D1 chart shows general potential, D12 reveals the deeper roots—why some inherit family strengths, face ancestral karma, or receive blessings from their lineage. It's especially important for those interested in family legacy, parental influence, or understanding inherited patterns.
                            </p>
                        </div>
                    </div>

                    <div className='w-full flex md:flex-row flex-col items-start mt-10 pb-4'>
                        <div className='md:w-1/2 w-full flex flex-col justify-center px-4 gap-2'>
                            <p className='text-2xl font-bold mt-2' style={{ color: "#5D0000" }}>How is D12 Calculated and What to Look For?</p>
                            <p className='text-black font-medium' style={{ fontSize: '22px' }}>
                                Each zodiac sign is divided into 12 equal parts of 2°30', creating 144 Dwadashamsas across the zodiac. The Lagna and Lagna Lord reflect inherited tendencies and family karma. The 4th house shows maternal legacy, the 9th house paternal blessings, and planets in D12 reveal ancestral gifts or challenges. For example, a strong 9th lord in D12 points to powerful paternal blessings, while afflictions may indicate ancestral struggles.
                            </p>
                        </div>
                        <img src={`${publicUrl}/assets/img/blog/division/d12/db9beb500dd5f509385702632ed0ab538f28330f.jpg`} alt="D12 Supporting" className='md:w-1/2 w-full rounded-lg' />
                    </div>

                    <div className='w-full flex md:flex-row flex-col items-start mt-10 pb-4'>
                        <img src={`${publicUrl}/assets/img/blog/division/d12/f1b2aa27134d993b23444a91a554a4fc7c177113.jpg`} alt="D12 Supporting 2" className='md:w-1/2 w-full rounded-lg' />
                        <div className='md:w-1/2 w-full flex flex-col justify-center px-4 gap-2'>
                            <p className='text-2xl font-bold mt-2' style={{ color: "#5D0000" }}>Practical Benefits of Analyzing the D12 Chart</p>
                            <p className='text-black font-medium' style={{ fontSize: '22px' }}>
                                The D12 chart is an essential tool for those seeking to understand family karma, ancestral blessings, and inherited patterns. It helps identify strengths and challenges passed down through generations, and guides individuals toward healing or harnessing their lineage. Whether you're exploring family roots or seeking insight into inherited gifts, the D12 chart reveals how your soul is connected to your ancestry.
                            </p>
                        </div>
                    </div>
                </div>
                <h1 className='text-white text-2xl lg:text-5xl font-extrabold py-6 lg:py-10'>Click for video</h1>
                <div>
                    <div style={{ height: '60vh', width: "90vw" }}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/SKeF4Ymwt1Y?autoplay=1&mute=1&rel=0&showinfo=0"
                            title="YouTube video"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            style={{ borderRadius: '12px' }}
                        ></iframe>
                    </div>
                </div>
                <h1 className='text-white text-2xl lg:text-5xl font-extrabold py-6 px-8 lg:px-40 text-center'>Astrological remedies for ancestral issues</h1>
                <button
                    style={{ backgroundColor: "#E90000" }}
                    className="bg-[#E90000] border-4 border-white rounded-2xl px-12 py-3 lg:py-4 hover:text-red-500 text-white text-xl lg:text-3xl hover:text-red shadow-lg hover:bg-white  transition duration-300"
                >
                    Check Now
                </button>
                <h1 className='text-white text-2xl lg:text-5xl font-extrabold py-6 px-8 lg:px-40 text-center'>Ask a question talk to the best astrologer</h1>
                <button onClick={() => window.open("https://wa.me/+919508801096", "_blank")}
                    style={{ background: "#00980A" }} className='border-4 border-white rounded-2xl px-12 py-3 lg:py-4 hover:text-white text-white text-xl lg:text-3xl hover:text-red shadow-lg hover:bg-white  transition duration-300'>Chat in Whatapp</button>
            </div>
        </div>
    );
};

export default Division12;
