import React from 'react';
import { useRef, useState, useEffect } from 'react';

const Division2 = () => {
    const publicUrl = process.env.PUBLIC_URL || "";
    const textRef = useRef(null);
    const imgColRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState(0);
    useEffect(() => {
        const updateHeights = () => {
            if (textRef.current && imgColRef.current) {
                const h = textRef.current.getBoundingClientRect().height;
                setMaxHeight(h);
            }
        };
        updateHeights();
        window.addEventListener('resize', updateHeights);
        return () => window.removeEventListener('resize', updateHeights);
    }, []);
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${publicUrl}/assets/img/blog/division/D2.svg)`,
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
                    D2
                </h1>
            </div>


            <div
                style={{
                    background: "linear-gradient(to bottom, #002CB0 0%, #00054A 70%)"
                }}
                className=" w-full pt-20 pb-20 flex flex-col justify-center items-center"
            >
                <div style={{ backgroundColor: '#F0F0F0', width: "90vw" }} className=' h-56 pt-8 rounded-2xl '>

                </div>

                <div style={{ backgroundColor: "#F0F0F0", width: "86vw" }} className='mt-8 p-10'>
                    <div className='w-full flex md:flex-row flex-col items-start '>
                        {/* image from here */}

                        {/* <img src={`${publicUrl}/assets/img/blog/division/D2MID1.svg`} alt="" className='md:w-1/2 w-full rounded-lg' /> */}
                        {/* Image Column with max height constraint */}
                        <div className="md:w-1/2 w-full flex flex-col gap-3 md:pr-4">
                            {[1, 2, 3].map((n) => (
                                <div
                                    key={n}
                                    className="flex-1 w-full  flex items-center justify-center"
                                >
                                    <img
                                        src={`${publicUrl}/assets/img/blog/division/Divison2/image_${n}.webp`}
                                        alt={`Hora Part ${n}`}
                                        className="h-full w-auto object-contain border border-black rounded-md"
                                    // style={{ height: ' 18re' }}
                                    />
                                </div>
                            ))}
                        </div>








                        {/* heading + text here */}
                        <div className='md:w-1/2 w-full  flex flex-col justify-center px-6 gap-3'>
                            <p style={{ color: "#5D0000" }} className='text-3xl font-bold'>Hora Chart (ஹோரா சக்கரம்)</p>
                            <p className='text-black font-medium'>Derived from “Aho-Ratra” (Day-Night), the Hora Chart (D2) divides each Rasi (30°) into 2 parts of 15°.</p>
                            <p className='text-black font-medium'>It determines whether a planet falls under the:</p>
                            <p className='text-black font-medium'>☀️ Sun’s Hora (Masculine) or 🌙 Moon’s Hora (Feminine)</p>
                            <p className='text-black font-medium'>🔍 <strong>How It Works:</strong><br />
                                Planets are placed in Sun or Moon Hora based on:
                                <br />• Whether the sign is odd or even
                                <br />• Degree of the planet within the sign</p>

                            <p className='text-black font-medium'>✅ <strong>Example Rule:</strong></p>
                            <p className='text-black font-medium'>
                                🔹 In odd signs (1,3,5…): <br />
                                0°–15° = ☀️ Sun’s Hora <br />
                                15°–30° = 🌙 Moon’s Hora
                            </p>
                            <p className='text-black font-medium'>
                                🔹 In even signs (2,4,6…): <br />
                                0°–15° = 🌙 Moon’s Hora <br />
                                15°–30° = ☀️ Sun’s Hora
                            </p>

                            <p className='text-black font-medium'>☀️ <strong>Sun’s Hora Traits:</strong><br />
                                • Relates to ambition, self-earned wealth, and effort-driven success.<br />
                                • Best suited for leaders, business people, risk-takers.<br />
                                • Can bring fame and power, but wealth requires effort.
                            </p>

                            <p className='text-black font-medium'>🌙 <strong>Moon’s Hora Traits:</strong><br />
                                • Indicates comfort, inheritance, and emotional wealth.<br />
                                • Suits service-oriented people, artists, and homemakers.<br />
                                • Promotes easier wealth flow and emotional satisfaction.
                            </p>

                        </div>
                    </div>


                    <div className='w-full flex md:flex-row flex-col  items-start mt-20 pb-8 '>
                        <div className='md:w-1/2 w-full flex flex-col justify-center px-6 gap-3'>
                            <p className='text-2xl font-bold mt-4' style={{ color: "#5D0000" }}>What to Look for in D2 Chart:</p>

                            <p className='text-black font-medium'>
                                <strong>Factor Interpretation:</strong><br />
                                🔹 Strong planets in Moon’s Hora → Easier wealth flow, luxury, and comfort.<br />
                                🔹 Strong planets in Sun’s Hora → Hard-earned money and leadership qualities.<br />
                                🔹 Lagna Lord in good Hora → Stable income and financial security.<br />
                                🔹 Malefics in Hora → Sudden expenses, wealth instability.<br />
                                🔹 Strong Venus/Moon → Luxury, art, and family wealth.
                            </p>

                            <p className='text-black font-medium'>🧘‍♂️ <strong>Quick Tips:</strong><br />
                                Even if your D1 chart shows wealth, check D2 to see how easily you attract and retain it.<br />
                                ⚠️ A weak D2 may show someone who earns well but struggles to save or manage money properly.
                            </p>
                        </div>

                        {/* image here */}
                        {/* <img src={`${publicUrl}/assets/img/blog/division/D2MID1.svg`} alt="" className='md:w-1/2 w-full rounded-lg' /> */}
                        <div className="md:w-1/2 w-full flex flex-col gap-3 md:pr-4 "    >
                            {[4, 5].map((n) => (
                                <div
                                    key={n}
                                    className="flex-1 w-full  flex items-center justify-center  "
                                    style={{ height: '18em' }}

                                >
                                    <img
                                        src={`${publicUrl}/assets/img/blog/division/Divison2/image_${n}.webp`}
                                        alt={`Hora Part ${n}`}
                                        className="h-full w-auto object-contain border border-black rounded-lg "
                                        style={{ height: '18em' }}
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                <div
                    style={{ width: "84vw", maxWidth: "1100px", margin: "32px auto 0 auto" }}
                >
                    <h1
                        className="text-white text-2xl lg:text-6xl font-extrabold py-10 lg:py-20"
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

                <h1 style={{ paddingBlock: "" }} className='text-white text-2xl lg:text-6xl font-extrabold py-10 px-8 lg:px-40 text-center'>Astrological remedies if you were not able to buy a house </h1>

                <button
                    style={{ backgroundColor: "#E90000" }}
                    className="bg-[#E90000] border-4 border-white  px-20 py-3 lg:py-6 hover:text-red-500 text-white text-xl lg:text-4xl hover:text-red shadow-lg hover:bg-white  transition duration-300"
                >
                    Check Now
                </button>

                <h1 className='text-white text-2xl lg:text-6xl font-extrabold py-10 px-8 lg:px-40 text-center'>Ask a question talk to the best astrologer</h1>
                <button onClick={() => window.open("https://wa.me/+919508801096", "_blank")}
                    style={{ background: "#00980A" }} className='border-4 border-white  px-20 py-3 lg:py-6 hover:text-white text-white text-xl lg:text-4xl hover:text-red shadow-lg hover:bg-white  transition duration-300'>Chat in Whatapp</button>

            </div>

        </div>
    );
};

export default Division2;
