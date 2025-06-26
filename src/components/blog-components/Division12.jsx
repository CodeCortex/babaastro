import React from 'react';

const Division12 = () => {
    const publicUrl = process.env.PUBLIC_URL || "";

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${publicUrl}/assets/img/blog/division/d12/D12.png)`,
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
                    D12
                </h1>
            </div>

            <div
                style={{
                    background: "linear-gradient(to bottom, #A2D400 0%, #002509 100%)"
                }}
                className=" w-full pt-20 pb-20 flex flex-col justify-center items-center"
            >
                <div
                    style={{ backgroundColor: 'white', width: '90vw' }}
                    className="h-56 pt-20 rounded-2xl flex justify-end items-end overflow-visible relative"
                >
                    <img
                        src={`${publicUrl}/assets/img/blog/division/d12/D12.png`}
                        alt="D12 Main Chart"
                        className="w-[350px] transform scale-[3.5] origin-bottom object-contain"
                    />
                </div>

                <div style={{ backgroundColor: "white", width: "86vw" }} className='mt-8 p-10'>
                    <div className='w-full flex md:flex-row flex-col  items-start mt-20 pb-8 '>
                        <img src={`${publicUrl}/assets/img/blog/division/d12/Frame 268.png`} alt="D12 Table" className="md:w-1/2 w-full rounded-lg scale-[1.5]" />
                        <div className='md:w-1/2 w-full flex flex-col justify-center px-6 gap-3'>
                            <p className='text-2xl font-bold mt-4' style={{ color: "#5D0000" }}>What is the D12 – Dwadashamsa Chart and Why Does It Matter?</p>
                            <p className='text-black font-medium' style={{ fontSize: '30px' }}>
                                The D12 chart, or Dwadashamsa (द्वादशांश), is a key divisional chart in Vedic astrology for analyzing parental lineage, inherited traits, and ancestral blessings or challenges. While the D1 chart shows general potential, D12 reveals the deeper roots—why some inherit family strengths, face ancestral karma, or receive blessings from their lineage. It's especially important for those interested in family legacy, parental influence, or understanding inherited patterns.
                            </p>
                        </div>
                    </div>

                    <div className='w-full flex md:flex-row flex-col  items-start mt-20 pb-8 '>
                        <div className='md:w-1/2 w-full flex flex-col justify-center px-6 gap-3'>
                            <p className='text-2xl font-bold mt-4' style={{ color: "#5D0000" }}>How is D12 Calculated and What to Look For?</p>
                            <p className='text-black font-medium' style={{ fontSize: '30px' }}>
                                Each zodiac sign is divided into 12 equal parts of 2°30', creating 144 Dwadashamsas across the zodiac. The Lagna and Lagna Lord reflect inherited tendencies and family karma. The 4th house shows maternal legacy, the 9th house paternal blessings, and planets in D12 reveal ancestral gifts or challenges. For example, a strong 9th lord in D12 points to powerful paternal blessings, while afflictions may indicate ancestral struggles.
                            </p>
                        </div>
                        <img src={`${publicUrl}/assets/img/blog/division/d12/Frame 387.png`} alt="D12 Supporting" className='md:w-1/2 w-full rounded-lg' />
                    </div>

                    <div className='w-full flex md:flex-row flex-col  items-start mt-20 pb-8 '>
                        <img src={`${publicUrl}/assets/img/blog/division/d12/Frame 404.png`} alt="D12 Supporting 2" className='md:w-1/2 w-full rounded-lg' />
                        <div className='md:w-1/2 w-full flex flex-col justify-center px-6 gap-3'>
                            <p className='text-2xl font-bold mt-4' style={{ color: "#5D0000" }}>Practical Benefits of Analyzing the D12 Chart</p>
                            <p className='text-black font-medium' style={{ fontSize: '30px' }}>
                                The D12 chart is an essential tool for those seeking to understand family karma, ancestral blessings, and inherited patterns. It helps identify strengths and challenges passed down through generations, and guides individuals toward healing or harnessing their lineage. Whether you're exploring family roots or seeking insight into inherited gifts, the D12 chart reveals how your soul is connected to your ancestry.
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
                <h1 style={{ paddingBlock: "" }} className='text-white text-2xl lg:text-6xl font-extrabold py-10 px-8 lg:px-40 text-center'>Astrological remedies for ancestral issues</h1>
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

export default Division12;
