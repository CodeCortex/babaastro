import React from 'react';

const Division5 = () => {
    const publicUrl = process.env.PUBLIC_URL || "";

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${publicUrl}/assets/img/blog/division/d5/Desktop-43.svg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                    minHeight: '60vh',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <h1 style={{ fontSize: '180px', textShadow: '2px 2px 3px black', paddingTop: "120px", paddingBottom: "120px" }} className="text-white font-extrabold sm:text-7xl md:text-9xl">
                    D5
                </h1>
            </div>

            <div
                style={{ backgroundColor: 'white', width: '90vw' }}
                className="h-56 pt-20 rounded-2xl flex justify-end items-end overflow-visible relative mx-auto mt-12"
            >
                <img
                    src={`${publicUrl}/assets/img/blog/division/d5/D5 2.svg`}
                    alt="D5 2"
                    className="w-[350px] transform scale-[3.5] origin-bottom object-contain"
                />
            </div>

            <div style={{ background: "linear-gradient(to bottom, #A2D400 0%, #002509 100%)" }} className="w-full pt-20 pb-20 flex flex-col justify-center items-center">
                <div style={{ backgroundColor: 'white', width: '86vw' }} className='mt-8 p-10 rounded-2xl'>
                    <div className='w-full flex md:flex-row flex-col items-center mt-20 pb-8 gap-8'>
                        <div className="md:w-1/2 w-full flex flex-col items-center px-6 gap-3">
                            <img src={`${publicUrl}/assets/img/blog/division/d5/Rectangle 39.svg`} alt="Rectangle 39" className="rounded-lg object-contain scale-[1.2] w-full" />
                        </div>
                        <div className="md:w-1/2 w-full flex flex-col items-center px-6 gap-3">
                            <img src={`${publicUrl}/assets/img/blog/division/d5/Mask group (1).svg`} alt="Mask group (1)" className="rounded-lg object-contain max-w-xs scale-100 w-full" />
                        </div>
                    </div>
                    <div className='w-full flex md:flex-row flex-col items-center mt-20 pb-8 gap-8'>
                        <div className="md:w-1/2 w-full flex flex-col items-center px-6 gap-3">
                            <img src={`${publicUrl}/assets/img/blog/division/d5/WhatsApp Image 2025-04-22 at 2.00.40 PM 1.svg`} alt="WhatsApp Block" className="rounded-lg object-contain scale-[1.2] w-full" />
                        </div>
                        <div className="md:w-1/2 w-full flex flex-col items-center px-6 gap-3">
                            <img src={`${publicUrl}/assets/img/blog/division/d5/Frame 307.svg`} alt="Frame 307" className="rounded-lg object-contain scale-[1.2] w-full" />
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center mt-20 pb-8">
                        <img src={`${publicUrl}/assets/img/blog/division/d5/Frame 320.svg`} alt="Frame 320" className="w-full max-w-3xl rounded-lg object-contain scale-100" />
                    </div>
                    <div className='w-full flex md:flex-row flex-col items-center mt-20 pb-8 gap-8'>
                        <div className="md:w-1/2 w-full flex flex-col items-center px-6 gap-3">
                            <img src={`${publicUrl}/assets/img/blog/division/d5/Mask group.svg`} alt="Mask group" className="rounded-lg object-contain max-w-xs scale-100 w-full" />
                        </div>
                        <div className="md:w-1/2 w-full flex flex-col items-center px-6 gap-3">
                            <img src={`${publicUrl}/assets/img/blog/division/d5/Frame 281.svg`} alt="Frame 281" className="rounded-lg object-contain scale-[1.2] w-full" />
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

export default Division5;
