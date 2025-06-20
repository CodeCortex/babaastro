import React from 'react';

const Division10 = () => {
    const publicUrl = process.env.PUBLIC_URL || "";

    return (
        <div>
            {/* Header Section */}
            <div
                style={{
                    backgroundImage: `url(${publicUrl}/assets/img/blog/division/d10/Desktop - 48.svg)`,
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
                    D10
                </h1>
            </div>

            {/* Main Chart Section */}
            <div
                style={{ backgroundColor: 'white', width: '90vw' }}
                className="h-56 pt-20 rounded-2xl flex justify-end items-end overflow-visible relative mx-auto mt-12"
            >
            </div>

            {/* Content Sections */}
            <div style={{ background: "linear-gradient(to bottom, #A2D400 0%, #002509 100%)" }} className="w-full pt-20 pb-20 flex flex-col justify-center items-center">
                <div style={{ backgroundColor: 'white', width: '86vw' }} className='mt-8 p-10 rounded-2xl'>
                    {/* First Row: Chart & Text */}
                    <div className='w-full flex md:flex-row flex-col items-center mt-20 pb-8 gap-8'>
                        <div className="md:w-1/2 w-full flex flex-col items-center px-6 gap-3">
                            <img src={`${publicUrl}/assets/img/blog/division/d10/Desktop - 48.svg`} alt="D10 Chart" className="rounded-lg object-contain scale-[1.2] w-full" />
                        </div>
                        <div className='md:w-1/2 w-full flex flex-col justify-center px-6 gap-3'>
                            <p className='text-3xl font-bold' style={{ color: "#5D0000" }}>Dasamsa Chart (D10)</p>
                            <p className='text-black font-medium'>Content for D10 division goes here.</p>
                        </div>
                    </div>
                    {/* Second Row: Text & Chart */}
                    <div className='w-full flex md:flex-row flex-col items-center mt-20 pb-8 gap-8'>
                        <div className='md:w-1/2 w-full flex flex-col justify-center px-6 gap-3'>
                            <p className='text-2xl font-bold mt-6' style={{ color: "#5D0000" }}>Key Points to Analyze in D10:</p>
                            <ul className='text-black font-medium list-disc pl-5'>
                                <li>Example point 1</li>
                                <li>Example point 2</li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 w-full flex flex-col items-center px-6 gap-3">
                            <img src={`${publicUrl}/assets/img/blog/division/d10/Desktop - 48.svg`} alt="D10 Chart" className="rounded-lg object-contain scale-[1.2] w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Division10;
