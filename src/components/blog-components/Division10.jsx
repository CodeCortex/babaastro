import React from 'react';

const Division10 = () => {
    const publicUrl = process.env.PUBLIC_URL || "";

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${publicUrl}/assets/img/blog/division/d10/Desktop-43.svg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <h1 style={{ fontSize: '180px', textShadow: '2px 2px 3px black', paddingTop: "180px", paddingBottom: "180px" }} className="text-white font-extrabold sm:text-7xl md:text-9xl">
                    D10
                </h1>
            </div>
            <div className="w-full pt-20 pb-20 flex flex-col justify-center items-center" style={{ background: "linear-gradient(to bottom, #A2D400 0%, #002509 100%)" }}>
                <div style={{ backgroundColor: 'white', width: "90vw" }} className='h-56 pt-8 rounded-2xl'></div>
                <div style={{ backgroundColor: "white", width: "86vw" }} className='mt-8 p-10'>
                    <div className='w-full flex md:flex-row flex-col items-start '>
                        <img src={`${publicUrl}/assets/img/blog/division/d10/Desktop-43.svg`} alt="D10" className='md:w-1/2 w-full rounded-lg' />
                        <div className='md:w-1/2 w-full flex flex-col justify-center px-6 gap-3'>
                            <p className='text-3xl font-bold' style={{ color: "#5D0000" }}>Dasamsa Chart (D10)</p>
                            <p className='text-black font-medium'>Content for D10 division goes here.</p>
                        </div>
                    </div>
                    <div className='w-full flex md:flex-row flex-col items-start mt-20 pb-8 '>
                        <div className='md:w-1/2 w-full flex flex-col justify-center px-6 gap-3'>
                            <p className='text-2xl font-bold mt-6' style={{ color: "#5D0000" }}>Key Points to Analyze in D10:</p>
                            <ul className='text-black font-medium list-disc pl-5'>
                                <li>Example point 1</li>
                                <li>Example point 2</li>
                            </ul>
                        </div>
                        <img src={`${publicUrl}/assets/img/blog/division/d10/Desktop-43.svg`} alt="D10" className='md:w-1/2 w-full rounded-lg' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Division10;
