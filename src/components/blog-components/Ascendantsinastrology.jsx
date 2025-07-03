import React from 'react';

const Division2 = () => {
    const publicUrl = process.env.PUBLIC_URL || "";

    return (
        <div style={{ fontFamily: "'Poppins', sans-serif" }}>
            <div
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/blog/ascendent.png)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    width: '100%',
                    height: '125vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#A3CBFF',
                    margin: 0,
                    padding: 0,
                    border: 'none',
                }}
            >
                <div>
                    {/* your content here */}
                </div>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <h1
                        style={{
                            fontSize: '80px',
                            textShadow: '2px 2px 3px black',
                            paddingTop: '250px',
                            paddingBottom: '10px',
                            marginBottom: '250px',
                            fontWeight: 700,
                            fontFamily: "'Poppins', sans-serif"
                        }}
                        className="text-white text-center"
                    >
                        Ascendant <br /> in Astrology
                    </h1>
                </div>
            </div>

            <div
                style={{
                    background: "linear-gradient(to bottom, #EEFE61)",
                    fontFamily: "'Poppins', sans-serif"
                }}
                className="w-full pt-20 pb-20 flex flex-col justify-center items-center"
            >
                <h1 
                    className="text-5xl mb-8 text-center text-black"
                    style={{
                        textShadow: "2px 2px 4px rgba(0,0,0,0)",
                        lineHeight: "1.3",
                        fontWeight: 700,
                    }}
                >
                    What Is an Ascendant (Lagna) in Astrology?
                </h1>
                
                <div className="thumb mb-6 flex justify-center">
                    <img 
                        src={publicUrl + "assets/img/blog/ascendent1.png"} 
                        alt="Astrology Ascendant" 
                        className="rounded-lg"
                        style={{
                            width: '1400px',
                            height: 'auto',
                            maxWidth: '100%'
                        }}
                    />
                </div>
                
                <p className="mb-8 text-2xl leading-relaxed text-gray-800 px-8 md:px-12 lg:px-16 text-justify" style={{ fontWeight: 400 }}>
                    The <strong style={{ fontWeight: 600 }}>Ascendant</strong> isn't just about your Sun sign. 
                    One of the most important – and often overlooked – aspects of your birth chart is 
                    your Ascendant, also known as <span style={{ fontStyle: 'italic' }}>Lagna</span> (லக்னம்). 
                    This powerful point shapes how the world sees you, how you respond to life's challenges, 
                    and the fundamental structure of your entire horoscope.
                </p>

                <h1 
                    className="text-5xl mb-8 text-black text-left"
                    style={{
                        paddingLeft: "3rem",
                        paddingRight: "5rem",
                        lineHeight: "1.3",
                        marginRight: "0rem",
                        marginLeft: "0",
                        width: "calc(100% - 2rem)",
                        fontWeight: 700,
                    }}
                >
                    What Exactly Is the Ascendant?
                </h1>
                
                <p className="mb-8 text-2xl leading-relaxed text-gray-800 px-8 md:px-12 lg:px-16 text-justify" style={{ fontWeight: 400 }}>
                    The Ascendant (or Rising Sign) is the zodiac sign that was rising in the eastern horizon at the exact moment of your birth. It's the starting point of your 1st house and forms the foundation of your entire chart
                    <br></br>
                    <strong style={{ fontWeight: 600 }}>Changes every ~2 hours - so your exact birth time is crucial!</strong>
                    <br></br>
                    <strong style={{ fontWeight: 600 }}>Sets the structure for all 12 houses in your horoscope.</strong>
                </p>

                <img 
                    src={publicUrl + "assets/img/blog/ascendent2.png"} 
                    alt="Astrology Ascendant" 
                    className="rounded-lg"
                    style={{
                        width: '1400px',
                        height: 'auto',
                        maxWidth: '100%'
                    }}
                />
                
                <br></br>
                <br></br>
                
                <h1 
                    className="text-5xl mb-8 text-black text-left"
                    style={{
                        paddingLeft: "3rem",
                        paddingRight: "5rem",
                        lineHeight: "1.3",
                        marginRight: "0rem",
                        marginLeft: "0",
                        width: "calc(100% - 2rem)",
                        fontWeight: 700,
                    }}
                >
                    Why Is the Ascendant So Important? 
                </h1>
                
                <div className="overflow-x-auto my-8 mx-auto" style={{ width: '100%', maxWidth: '1400px', fontFamily: "'Poppins', sans-serif" }}>
                    <table className="w-full table-auto border-2 border-black text-lg">
                        <thead className="bg-white">
                            <tr className="border-b-2 border-black">
                                <th className="px-6 py-4 border-r border-black text-xl text-center" style={{ fontWeight: 700 }}> Element</th>
                                <th className="px-6 py-4 text-xl text-center" style={{ fontWeight: 700 }}> Represents</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr className="border-b border-black even:bg-gray-50">
                                <td className="px-6 py-4 border-r border-black text-center" style={{ fontWeight: 400 }}> Lagna (1st House)</td>
                                <td className="px-6 py-4 text-center" style={{ fontWeight: 400 }}>Personality, body, behavior, mindset</td>
                            </tr>
                            <tr className="border-b border-black even:bg-gray-50">
                                <td className="px-6 py-4 border-r border-black text-center" style={{ fontWeight: 400 }}> Chart Foundation</td>
                                <td className="px-6 py-4 text-center" style={{ fontWeight: 400 }}>Sets signs for all 12 houses</td>
                            </tr>
                            <tr className="border-b border-black even:bg-gray-50">
                                <td className="px-6 py-4 border-r border-black text-center" style={{ fontWeight: 400 }}> Planetary Strength</td>
                                <td className="px-6 py-4 text-center" style={{ fontWeight: 400 }}>Defines benefic/malefic planet roles</td>
                            </tr>
                            <tr className="border-b border-black even:bg-gray-50">
                                <td className="px-6 py-4 border-r border-black text-center" style={{ fontWeight: 400 }}> Life Direction</td>
                                <td className="px-6 py-4 text-center" style={{ fontWeight: 400 }}>Soul's intent and life path</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <br></br>
                
                <h1 
                    className="text-5xl mb-8 text-black text-left"
                    style={{
                        paddingLeft: "3rem",
                        paddingRight: "5rem",
                        lineHeight: "1.3",
                        marginRight: "0rem",
                        marginLeft: "0",
                        width: "calc(100% - 2rem)",
                        fontWeight: 700,
                    }}
                >
                    The 12 Ascendants and Their Traits (With Tamil Names)
                </h1>
                
                <div className="mb-8">
                    <div className="overflow-x-auto my-4 mx-auto" style={{ width: '100%', maxWidth: '2000px', fontFamily: "'Poppins', sans-serif" }}>
                        <table className="w-full table-auto border-2 border-black text-lg" style={{ minWidth: '1400px' }}>
                            <thead className="bg-white">
                                <tr className="border-b-2 border-black">
                                    <th className="px-6 py-4 border-r border-black text-xl text-center" style={{ width: '25%', fontWeight: 700 }}>Ascendant</th>
                                    <th className="px-6 py-4 border-r border-black text-xl text-center" style={{ width: '35%', fontWeight: 700 }}>Tamil Name</th>
                                    <th className="px-6 py-4 text-xl text-center" style={{ width: '40%', fontWeight: 700 }}>Personality Style</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {[
                                    { sign: "Aries", tamil: "மேஷ லக்னம்", trait: "Bold, energetic, direct" },
                                    { sign: "Taurus", tamil: "ரிஷப லக்னம்", trait: "Calm, comfort-loving" },
                                    { sign: "Gemini", tamil: "மிதுன லக்னம்", trait: "Witty, curious, smart" },
                                    { sign: "Cancer", tamil: "கடக லக்னம்", trait: "Emotional, nurturing" },
                                    { sign: "Leo", tamil: "சிம்ம லக்னம்", trait: "Confident, proud leader" },
                                    { sign: "Virgo", tamil: "கன்னி லக்னம்", trait: "Analytical, precise" },
                                    { sign: "Libra", tamil: "துலாம் லக்னம்", trait: "Balanced, charming" },
                                    { sign: "Scorpio", tamil: "விருச்சிக லக்னம்", trait: "Intense, secretive" },
                                    { sign: "Sagittarius", tamil: "தனுசு லக்னம்", trait: "Optimistic, wise" },
                                    { sign: "Capricorn", tamil: "மகரம் லக்னம்", trait: "Ambitious, serious" },
                                    { sign: "Aquarius", tamil: "கும்ப லக்னம்", trait: "Innovative, social" },
                                    { sign: "Pisces", tamil: "மீன லக்னம்", trait: "Spiritual, artistic" }
                                ].map((row, index) => (
                                    <tr key={index} className="border-b border-black even:bg-gray-50">
                                        <td className="px-6 py-4 border-r border-black text-center" style={{ width: '25%', fontWeight: 400 }}>{row.sign}</td>
                                        <td className="px-6 py-4 border-r border-black text-center" style={{ width: '35%', fontWeight: 400 }}>{row.tamil}</td>
                                        <td className="px-6 py-4 text-center" style={{ width: '40%', fontWeight: 400 }}>{row.trait}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <h1 
                    className="text-5xl mb-8 text-black text-left"
                    style={{
                        paddingLeft: "3rem",
                        paddingRight: "5rem",
                        lineHeight: "1.3",
                        marginRight: "0rem",
                        marginLeft: "0",
                        width: "calc(100% - 2rem)",
                        fontWeight: 700,
                    }}
                >
                    Lagna Lords: The Planet That Rules You
                </h1>

                <p className="mb-8 text-xl leading-relaxed text-gray-800 px-8 md:px-12 lg:px-16 text-justify" style={{ fontWeight: 400 }}>
                    Each Ascendant has a ruling planet, called the Lagna Lord. This planet colors your personality, sets life themes, and impacts your health, relationships, and career path
                    <br></br>
                    <br></br>
                    <p className="mb-6">
                        <strong className="text-2xl text-black" style={{ fontWeight: 700 }}>Examples:</strong>
                    </p>
                    <p className="mb-8 text-xl leading-relaxed text-gray-800 px-8 md:px-12 lg:px-16 text-justify" style={{ fontWeight: 400 }}>
                        • Aries Lagna → Mars is Lagna Lord → Bold, action-oriented, fiery
                        <br></br>
                    </p>
                    <p className="mb-8 text-xl leading-relaxed text-gray-800 px-8 md:px-12 lg:px-16 text-justify" style={{ fontWeight: 400 }}>
                        • Libra Lagna → Venus is Lagna Lord → Values love, beauty, and harmony
                        <br></br>
                    </p>
                </p>

                <h1 
                    className="text-5xl mb-8 text-black text-left"
                    style={{
                        paddingLeft: "3rem",
                        paddingRight: "5rem",
                        lineHeight: "1.3",
                        marginRight: "0rem",
                        marginLeft: "0",
                        width: "calc(100% - 2rem)",
                        fontWeight: 700,
                    }}
                >
                    Special Lagna Concepts to Know
                </h1>

                <div className="overflow-x-auto my-8 mx-auto" style={{ width: '100%', maxWidth: '1400px', fontFamily: "'Poppins', sans-serif" }}>
                    <table className="w-full table-auto border-2 border-black text-lg">
                        <thead className="bg-white">
                            <tr className="border-b-2 border-black">
                                <th className="px-6 py-4 border-r border-black text-xl text-center" style={{ fontWeight: 700 }}>Term</th>
                                <th className="px-6 py-4 text-xl text-center" style={{ fontWeight: 700 }}> What It Means</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr className="border-b border-black even:bg-gray-50">
                                <td className="px-6 py-4 border-r border-black text-center" style={{ fontWeight: 400 }}>Chandra Lagna Moon as the Ascendant</td>
                                <td className="px-6 py-4 text-center" style={{ fontWeight: 400 }}>focuses on the emotional self</td>
                            </tr>
                            <tr className="border-b border-black even:bg-gray-50">
                                <td className="px-6 py-4 border-r border-black text-center" style={{ fontWeight: 400 }}>Surya Lagna  Sun as the Ascendant</td>
                                <td className="px-6 py-4 text-center" style={{ fontWeight: 400 }}>reflects outward personality</td>
                            </tr>
                            <tr className="border-b border-black even:bg-gray-50">
                                <td className="px-6 py-4 border-r border-black text-center" style={{ fontWeight: 400 }}>Karakamsha Lagna</td>
                                <td className="px-6 py-4 text-center" style={{ fontWeight: 400 }}>Used in Jaimini astrology for soul's purpose</td>
                            </tr>
                            <tr className="border-b border-black even:bg-gray-50">
                                <td className="px-6 py-4 border-r border-black text-center" style={{ fontWeight: 400 }}>Arudha Lagna</td>
                                <td className="px-6 py-4 text-center" style={{ fontWeight: 400 }}>Represents your perceived personality by others</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h1 
                    className="text-5xl mb-8 text-black text-left"
                    style={{
                        paddingLeft: "3rem",
                        paddingRight: "5rem",
                        lineHeight: "1.3",
                        marginRight: "0rem",
                        marginLeft: "0",
                        width: "calc(100% - 2rem)",
                        fontWeight: 700,
                    }}
                >
                    Final Thoughts 
                </h1>
                
                <p className="mb-8 text-2xl leading-relaxed text-gray-800 px-8 md:px-12 lg:px-16 text-justify" style={{ fontWeight: 400 }}>
                    Your Ascendant is you — the face you show the world, the way you carry yourself, and how you begin everything in life. While your Sun sign shows your core essence, and your Moon sign reveals your emotions, your Lagna is how your entire life plays out
                    <br></br>
                </p>
                
                <p className="mb-8 text-2xl leading-relaxed text-gray-800 px-8 md:px-12 lg:px-16 text-justify" style={{ fontWeight: 400 }}>
                    Tip: Always consult a Vedic astrologer or use accurate birth chart software to find your exact Lagna, especially since it changes every 2 hours!
                    <br></br>
                </p>

                <h1 
                    className="mb-8 text-left"
                    style={{
                        fontSize: "50px",
                        paddingLeft: "3rem",
                        paddingRight: "5rem",
                        lineHeight: "1.3",
                        marginRight: "0rem",
                        marginLeft: "0",
                        width: "calc(100% - 2rem)",
                        fontWeight: 700,
                    }}
                >
                    Click for video
                </h1>
                
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
                
                <div className="w-full text-center">
                    <div className="w-full text-center">
                        <h1 className='text-black text-xl lg:text-4xl py-8 lg:py-16 mx-auto' style={{ fontWeight: 700 }}>
                            Astrological remedies if you were not able to buy a house
                        </h1>
                    </div>
                </div>
                
                <div className="flex flex-col items-center space-y-8">
                    <button
                        style={{ backgroundColor: "#E90000", fontWeight: 400 }}
                        className="w-full max-w-[200px] border-4 border-white px-4 py-2 lg:py-4 hover:text-red-500 text-white text-lg lg:text-3xl shadow-lg hover:bg-white transition duration-300"
                    >
                        Check Now
                    </button>

                    <h1 className="text-black text-xl lg:text-4xl py-8 lg:py-16 mx-auto text-center" style={{ fontWeight: 700 }}>
                        Ask a question talk to the best astrologer
                    </h1>

                    <button
                        onClick={() => window.open("https://wa.me/+919508801096", "_blank")}
                        style={{ background: "#00980A", fontWeight: 400 }}
                        className="w-full max-w-[200px] border-4 border-white px-4 py-2 lg:py-4 hover:text-white text-white text-lg lg:text-3xl shadow-lg hover:bg-white transition duration-300"
                    >
                        Chat on WhatsApp
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Division2;