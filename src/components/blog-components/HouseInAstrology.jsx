import React from 'react';

const Division2 = () => {
    const publicUrl = process.env.PUBLIC_URL || "";

    return (
        <div style={{ fontFamily: "'Poppins', sans-serif" }}>
            <div style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/blog/houseinastrology/image1.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#A3CBFF',
                margin: 0,
                padding: 0,
                border: 'none',
            }}>
                <h1 style={{
                    fontSize: 'clamp(40px, 8vw, 80px)',
                    textShadow: '2px 2px 3px black',
                    color: 'white',
                    fontWeight: 700,
                    textAlign: 'center',
                    padding: 0,
                    margin: 0,
                    fontFamily: "'Poppins', sans-serif"
                }}>
                    Houses <br /> in Astrology
                </h1>
            </div>

            <div
                style={{
                    background: "linear-gradient(to bottom,#A3CBFF )",
                    fontFamily: "'Poppins', sans-serif"
                }}
                className="w-full pt-20 pb-100 flex flex-col justify-center items-center"
            >
                <h1 
                    className="text-5xl mb-8 text-left text-red-900"
                    style={{
                        textShadow: "2px 2px 4px rgba(0,0,0,0)",
                        lineHeight: "1.3",
                        fontWeight: 700
                    }}
                >
                    The 12 Houses in Vedic Astrology (Bhavas / பாவங்கள்)
                </h1>

                <p className="mb-8 text-3xl leading-relaxed text-red-900 px-8 md:px-12 lg:px-16 text-justify" style={{ fontWeight: 400 }}>
                    In Vedic Astrology, the 12 Houses — known as Bhavas (பாவங்கள்) in Tamil — form the core of any birth chart (ஜாதகம்). Each house governs a specific area of life and unfolds the story of our spiritual and material journey.
                </p>

                <div>
                    <img 
                        src={publicUrl + "assets/img/blog/houseinastrology/image2.png"} 
                        alt="Astrology Ascendant" 
                        className="rounded-lg"
                        style={{
                            width: '1400px',
                            height: 'auto',
                            maxWidth: '100%'
                        }}
                    />
                </div>
                <br></br>
                <br></br>
                <h1 
                    className="text-5xl mb-8 text-red-900 text-left"
                    style={{
                        paddingLeft: "3rem",
                        paddingRight: "5rem",
                        lineHeight: "1.3",
                        marginRight: "0rem",
                        marginLeft: "0",
                        width: "calc(100% - 2rem)",
                        fontWeight: 700
                    }}
                >
                    What Are the Houses?
                </h1>

                <br />

                <img 
                    src={publicUrl + "assets/img/blog//houseinastrology/image3.png"} 
                    alt="Astrology Ascendant" 
                    className="rounded-lg"
                    style={{
                        width: '1400px',
                        height: 'auto',
                        maxWidth: '100%'
                    }}
                />
                <br></br>
                <p className="mb-16 text-3xl leading-relaxed text-red-900 px-8 md:px-12 lg:px-16 text-justify" style={{ fontWeight: 400 }}>
                    Each house (பாவம்) begins from the Ascendant (Lagna / லக்னம்) and reflects a different domain of life — like career, marriage, money, health, and more. These houses not only shape our personality but also reveal our karmic patterns and life purpose.
                    <br></br>
                </p>

                <br></br>

                <h1 
                    className="text-5xl mb-8 text-red-900 text-left"
                    style={{
                        paddingLeft: "3rem",
                        paddingRight: "5rem",
                        lineHeight: "1.3",
                        marginRight: "0rem",
                        marginLeft: "0",
                        width: "calc(100% - 2rem)",
                        fontWeight: 700
                    }}
                >
                    Overview of the 12 Houses
                </h1>

                <br />

                {/* Ascendants Table - Expanded Width */}
                <div className="mb-8">
                    <div className="overflow-x-auto my-4 mx-auto" style={{ width: '100%', maxWidth: '2000px' }}>
                        <table className="w-full table-auto border-2 border-black text-lg" style={{ minWidth: '1400px', fontFamily: "'Poppins', sans-serif" }}>
                            <thead className="bg-white">
                                <tr className="border-b-2 border-black">
                                    <th className="px-4 py-3 border-r border-black text-center" style={{ fontWeight: 700 }}>House</th>
                                    <th className="px-4 py-3 border-r border-black text-center" style={{ fontWeight: 700 }}>Tamil Name</th>
                                    <th className="px-4 py-3 text-center" style={{ fontWeight: 700 }}>Represents</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {[
                                    ["1st", "லக்கன பாவம்", "Self, personality, body, health, beginnings"],
                                    ["2nd", "தன பாவம்", "Money, speech, family, values, food"],
                                    ["3rd", "சகோதர பாவம்", "Siblings, courage, communication, efforts"],
                                    ["4th", "மாண்ச பாவம்", "Mother, home, comforts, vehicles, emotions"],
                                    ["5th", "புத்திர பாவம்", "Children, education, intelligence, romance"],
                                    ["6th", "ஷட்ரு பாவம்", "Enemies, debts, diseases, obstacles"],
                                    ["7th", "கலத்ர பாவம்", "Marriage, spouse, business partnerships"],
                                    ["8th", "அஷ்டம பாவம்", "Longevity, secrets, transformation, inheritance"],
                                    ["9th", "பாக்ய பாவம்", "Luck, dharma, father, higher learning"],
                                    ["10th", "கர்ம பாவம்", "Career, reputation, status, public life"],
                                    ["11th", "லாப பாவம்", "Gains, income, friends, desires, success"],
                                    ["12th", "விருக்தி பாவம்", "Losses, moksha, foreign lands, sleep, expenses"]
                                ].map(([house, tamil, meaning], index) => (
                                    <tr key={index} className="border-b border-black even:bg-gray-100">
                                        <td className="px-4 py-3 border-r border-black text-center" style={{ fontWeight: 400 }}>{house}</td>
                                        <td className="px-4 py-3 border-r border-black text-center" style={{ fontWeight: 400 }}>{tamil}</td>
                                        <td className="px-4 py-3 text-center" style={{ fontWeight: 400 }}>{meaning}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <br></br>

                <h1 
                    className="text-5xl mb-8 text-red-900 text-left"
                    style={{
                        paddingLeft: "3rem",
                        paddingRight: "5rem",
                        lineHeight: "1.3",
                        marginRight: "0rem",
                        marginLeft: "0",
                        width: "calc(100% - 2rem)",
                        fontWeight: 700
                    }}
                >
                    How to Interpret the Houses
                </h1>

                <div className="overflow-x-auto my-8 mx-auto" style={{ width: '100%', maxWidth: '1400px' }}>
                    <table className="w-full table-auto border-2 border-black text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        <colgroup>
                            <col style={{ width: '50%' }} />
                            <col style={{ width: '50%' }} />
                        </colgroup>
                        <thead className="bg-white">
                            <tr className="border-b-2 border-black">
                                <th className="px-6 py-4 border-r border-black text-center text-lg" style={{ borderRight: '2px solid black', fontWeight: 700 }}>Element</th>
                                <th className="px-6 py-4 text-center text-lg" style={{ fontWeight: 700 }}>Explanation</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {[
                                ["House Lord", "The planet ruling the zodiac sign in that house"],
                                ["House Occupants", "Planets sitting in the house (they influence its results)"],
                                ["Aspects (Drishti)", "Planets that cast their aspect on the house (can enhance or challenge it)"],
                                ["Karaka (Significator)", "Natural planet associated with the house's theme (e.g., Venus for 7th)"]
                            ].map(([element, explanation], index) => (
                                <tr key={index} className="border-b border-black even:bg-gray-50">
                                    <td className="px-6 py-4 text-center" style={{ borderRight: '2px solid black', fontWeight: 400 }}>{element}</td>
                                    <td className="px-6 py-4 text-center" style={{ fontWeight: 400 }}>{explanation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <br></br>

                <h1 
                    className="text-5xl mb-8 text-red-900 text-left"
                    style={{
                        paddingLeft: "3rem",
                        paddingRight: "5rem",
                        lineHeight: "1.3",
                        marginRight: "0rem",
                        marginLeft: "0",
                        width: "calc(100% - 2rem)",
                        fontWeight: 700
                    }}
                >
                    Spiritual Insight
                    <br></br>
                    <p className="text-2xl text-red-900" style={{ fontWeight: 400 }}>
                        <br></br>
                        Each house is a stage in your soul's journey — from birth (1st) to liberation (12th).
                    </p>
                </h1>

                <br />

                <h1 
                    className="text-5xl mb-8 text-red-900 text-left"
                    style={{
                        paddingLeft: "3rem",
                        paddingRight: "5rem",
                        lineHeight: "1.3",
                        marginRight: "0rem",
                        marginLeft: "0",
                        width: "calc(100% - 2rem)",
                        fontWeight: 700
                    }}
                >
                    Bonus Tips for Beginners
                    <br></br>
                    <p className="text-2xl text-red-900" style={{ fontWeight: 400 }}>
                        <br></br>
                        The Kendra houses (1, 4, 7, 10) are power centers.<br></br>
                        Trikona houses (1, 5, 9) are most auspicious (Dharma).<br></br>
                        Dusthana houses (6, 8, 12) show challenges — but also great spiritual potential.
                    </p>
                </h1>

                <h1 
                    className="text-black mb-8 text-left"
                    style={{
                        fontSize: "50px",
                        paddingLeft: "3rem",
                        paddingRight: "5rem",
                        lineHeight: "1.3",
                        marginRight: "0rem",
                        marginLeft: "0",
                        width: "calc(100% - 2rem)",
                        fontWeight: 700
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