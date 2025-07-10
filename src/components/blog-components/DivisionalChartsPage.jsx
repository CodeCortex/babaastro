import React from 'react';
import { Link } from 'react-router-dom';

const Division = () => {
    const publicUrl = process.env.PUBLIC_URL || "";
    const chartData = [
        'D1', 'D2', 'D3', 'D4',
        'D5', 'D6', 'D7', 'D9',
        'D10', 'D12', 'D16', 'D24',
        'D1', 'D1'
    ];

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${publicUrl}/assets/img/blog/division/Divisional_Chart_main_page/Background.webp)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    // height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}
            >
                <h1 style={{ fontSize: '90px', textShadow: '2px 2px 3px black', paddingTop: "180px", paddingBottom: "180px" }} className="text-white font-extrabold sm:text-7xl md:text-9xl">
                    Divisional Charts <br />(Verga Chakras)
                </h1>
            </div>

            <div
                style={{
                    // background: "linear-gradient(to bottom, #FFFFFF 0%)",
                    backgroundImage: `url(${publicUrl}/assets/img/blog/division/Divisional_Chart_main_page/Background2.webp)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    // height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}
                className=" w-full pt-20 pb-20 flex flex-col justify-center items-center"
            >

                {/* <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.8)', // adjust opacity as needed
                        mixBlendMode: 'lighten', // or 'screen', 'overlay', 'soft-light'
                        pointerEvents: 'none',
                    }}
                /> */}
                {/* <div style={{ backgroundColor: "white", width: "86vw" }} className='bg-white w-[86vw] mt-8 mt-8'> */}
                {/* Heading at top right */}
                <div className="w-full flex flex-col items-center px-4 pt-10 text-center">
                    <p
                        className="text-2xl md:text-3xl font-bold text-center max-w-3xl"
                        style={{ color: '#005F23' }}
                    >
                        What are Divisional Charts?
                    </p>

                    <p
                        className="text-lg md:text-xl font-normal max-w-3xl mt-4"
                        style={{ color: '#5D0000' }}
                    >
                        Divisional charts are charts created by dividing each sign of the natal chart into multiple vargas or divisions.
                        They provide deeper insights into different aspects of life.
                    </p>
                </div>




                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 px-4 sm:px-8 pt-20">
                    {chartData.slice(0, 12).map(id => (
                        <div
                            key={id}
                            className="relative max-h-[1rem] aspect-[2/2] rounded-2xl overflow-hidden bg-white shadow-lg"
                        >
                            <img
                                src={`${publicUrl}/assets/img/blog/division/Divisional_Chart_main_page/${id}.png`}
                                // src={`${publicUrl}/assets/img/blog/division/Divisional_Chart_main_page/D9.jpg`}
                                alt={id}
                                className="max-h-[1rem] w-full h-full object-cover "
                            />
                            <div className="absolute inset-0 z-10">
                                {/* “D4” centered */}
                                <div
                                    className="absolute"
                                    style={{
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                >
                                    <span className="text-white text-4xl font-bold">{id}</span>
                                </div>

                                {/* “More Details” at 75% down, centered horizontally */}
                                <div
                                    className="absolute"
                                    style={{
                                        top: '75%',
                                        left: '50%',
                                        transform: 'translateX(-50%)'
                                    }}
                                >
                                    <Link to={`/blog-components/${id}`}>
                                        <div className="bg-white px-3 py-1 rounded-lg hover:bg-gray-100 transition">
                                            <span className="text-black text-base font-normal">More Details</span>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Last row: centered */}
                {/* Last row: D30 & D60 centered, each in its own grid cell */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 px-4 sm:px-8 mt-6 pb-20">
                    {/* empty first cell */}
                    <div></div>

                    {/* D30 */}
                    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-white shadow-lg">
                        <img
                            src={`${publicUrl}/assets/img/blog/division/Divisional_Chart_main_page/D1.png`}
                            alt="D30"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 z-10">
                            {/* “D4” centered */}
                            <div
                                className="absolute"
                                style={{
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)'
                                }}
                            >
                                <span className="text-white text-4xl font-bold">D30</span>
                            </div>

                            {/* “More Details” at 75% down, centered horizontally */}
                            <div
                                className="absolute"
                                style={{
                                    top: '75%',
                                    left: '50%',
                                    transform: 'translateX(-50%)'
                                }}
                            >
                                <Link to={`/blog-components/D30`}>
                                    <div className="bg-white px-3 py-1 rounded-lg hover:bg-gray-100 transition">
                                        <span className="text-black text-base font-normal">More Details</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* D60 */}
                    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-white shadow-lg">
                        <img
                            src={`${publicUrl}/assets/img/blog/division/Divisional_Chart_main_page/D1.png`}
                            alt="D60"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 z-10">
                            {/* “D4” centered */}
                            <div
                                className="absolute"
                                style={{
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)'
                                }}
                            >
                                <span className="text-white text-4xl font-bold">D60</span>
                            </div>

                            {/* “More Details” at 75% down, centered horizontally */}
                            <div
                                className="absolute"
                                style={{
                                    top: '75%',
                                    left: '50%',
                                    transform: 'translateX(-50%)'
                                }}
                            >
                                <Link to={`/blog-components/D60`}>
                                    <div className="bg-white px-3 py-1 rounded-lg hover:bg-gray-100 transition">
                                        <span className="text-black text-base font-normal">More Details</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* empty last cell */}
                    <div></div>
                </div>




                <div style={{ backgroundColor: '#F0F0F0', width: "90vw" }} className=' h-56 pt-24 rounded-2xl '>

                </div>


                {/* <h1 className='text-white text-2xl lg:text-6xl font-extrabold py-10 lg:py-20'>Click for video</h1> */}
                <div
                    style={{ width: "84vw", maxWidth: "1100px", margin: "32px auto 0 auto" }}
                >
                    <h1
                        className="text-black text-2xl lg:text-6xl font-extrabold py-10 lg:py-20"
                        style={{ textAlign: "left", marginBottom: "8px" }}
                    >
                        Click for video
                    </h1>
                </div>

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

                            style={{ borderRadius: '12px' }} // optional: adds rounded corners
                        ></iframe>
                    </div>

                </div>

                <h1 style={{ paddingBlock: "" }} className='text-black text-2xl lg:text-6xl font-extrabold py-10 px-8 lg:px-40 text-center'>Astrological remedies if you were not able to buy a house </h1>

                <button
                    className="bg-[#E90000] border-4 border-white  px-20 py-3 lg:py-6 hover:text-red-500 text-black text-xl lg:text-4xl hover:text-red shadow-lg hover:bg-white  transition duration-300"
                >
                    Check Now
                </button>

                <h1 className='text-black text-2xl lg:text-6xl font-extrabold py-10 px-8 lg:px-40 text-center'>Ask a question talk to the best astrologer</h1>
                <button onClick={() => window.open("https://wa.me/+919508801096", "_blank")}
                    style={{ background: "#00980A" }} className='border-4 border-white  px-20 py-3 lg:py-6 hover:text-white text-black text-xl lg:text-4xl hover:text-red shadow-lg hover:bg-white  transition duration-300'>Chat in Whatapp</button>

            </div>

        </div>
    );
};

export default Division;
