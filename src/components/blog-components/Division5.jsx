import React from 'react';

const Division2 = () => {
    const publicUrl = process.env.PUBLIC_URL || "";

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${publicUrl}/assets/img/blog/division/D5.svg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                    // height: '700px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}
            >
                <h1 style={{ fontSize: '180px', textShadow: '2px 2px 3px black', paddingTop: "180px", paddingBottom: "180px" }} className="text-white font-extrabold sm:text-7xl md:text-9xl">
                    D5
                </h1>
            </div>


            <div
                style={{
                    background: "linear-gradient(to bottom, #A2D400 0%, #002509 100%)"
                }}
                className=" w-full pt-20 pb-20 flex flex-col justify-center items-center"
            >
                <div style={{ backgroundColor: 'white', width: "90vw" }} className=' h-56 pt-8 rounded-2xl '>

                </div>

                <div style={{ backgroundColor: "white", width: "86vw" }} className='mt-8 p-10'>
                    <div className='w-full flex md:flex-row flex-col items-start '>
                        <img src={`${publicUrl}/assets/img/blog/division/D5MID1.svg`} alt="" className='md:w-1/2 w-full rounded-lg' />
                        <div className='md:w-1/2 w-full  flex flex-col justify-center px-6 gap-3'>
                            <p className='text-3xl font-bold' style={{ color: "#5D0000" }}>Panchamsa Chart (D5 – பஞ்சம்ஸ சக்கரம்)</p>
                            <p className='text-black font-medium'>
                                A powerful divisional chart in Vedic astrology used to analyze fame, power, talents, and self-expression.
                            </p>
                            <p className='text-black font-medium'>🔍 <strong>D5 – Panchamsa Chart</strong> is used to judge one’s creative energy, influence, and natural charisma.</p>
                            <p className='text-black font-medium'>📏 <strong>How D5 is Calculated:</strong><br />
                                Each zodiac sign (30°) is divided into 5 equal parts of 6° each.<br />
                                So each sign gives 5 Panchamsa divisions → total 60 Panchamsas in the zodiac.
                            </p>

                            <p className='text-black font-medium'>🌟 <strong>What D5 Reveals:</strong></p>
                            <ul className='text-black font-medium list-disc pl-5'>
                                <li>🌟 <strong>Fame & Brilliance:</strong> Natural spotlight, charisma, celebrity energy</li>
                                <li>🧠 <strong>Talent:</strong> Inner genius, creative spark, artistic ability</li>
                                <li>🎭 <strong>Self-expression:</strong> What you’re meant to showcase to the world</li>
                                <li>🔱 <strong>Power:</strong> Authority, command, and leadership influence</li>
                                <li>⚡ <strong>Confidence:</strong> How strongly you believe in and project yourself</li>
                            </ul>

                            <p className='text-black font-medium'>🎯 <strong>Why D5 is Important:</strong><br />
                                Even if someone has strong skills, D5 reveals if they’ll receive fame or recognition for it.<br />
                                Especially important to predict:
                            </p>
                            <ul className='text-black font-medium list-disc pl-5'>
                                <li>Rise to fame and public visibility</li>
                                <li>Leadership and influence in public life</li>
                                <li>Artistic or creative recognition</li>
                                <li>Inner brilliance and ability to stand out</li>
                            </ul>

                        </div>
                    </div>


                    <div className='w-full flex md:flex-row flex-col  items-start mt-20 pb-8 '>
                        <div className='md:w-1/2 w-full flex flex-col justify-center px-6 gap-3'>
                            <p className='text-2xl font-bold mt-6' style={{ color: "#5D0000" }}>Key Points to Analyze in D5:</p>
                            <ul className='text-black font-medium list-disc pl-5'>
                                <li><strong>Lagna & Lagna lord:</strong> Personal brilliance and identity projection</li>
                                <li><strong>Sun in D5:</strong> Signifies natural leadership and radiant fame</li>
                                <li><strong>5th house & 5th lord:</strong> Creative and intellectual expression</li>
                                <li><strong>Benefics like Venus/Jupiter:</strong> Artistic grace, blessings, magnetic charm</li>
                                <li><strong>Malefics in key houses:</strong> Ego clashes, fame issues, creative blocks</li>
                            </ul>

                            <p className='text-black font-medium'>🧙 <strong>Example Reading Style:</strong><br />
                                If Sun is strong → the native shines in public, gains leadership roles<br />
                                If Venus is exalted → talent in arts, music, luxury professions<br />
                                If malefics afflict Lagna → struggles with recognition, ego imbalance
                            </p>

                            <p className='text-black font-medium'>✅ <strong>Practical Uses:</strong><br />
                                Understand fame potential, creative brilliance, or lack thereof.<br />
                                Analyze careers in performance, leadership, politics, media, and entrepreneurship.<br />
                                Reveal how others perceive you and your unique expression.
                            </p>
                        </div>
                        <img src={`${publicUrl}/assets/img/blog/division/D5MID1.svg`} alt="" className='md:w-1/2 w-full rounded-lg' />

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

                            style={{ borderRadius: '12px' }} // optional: adds rounded corners
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

export default Division2;
