import React from 'react';

const Division = () => {
    const publicUrl = process.env.PUBLIC_URL || "";
    const chartData = [
        { id: 'D1', image: 'd1.jpg' },
        { id: 'D2', image: 'd2.jpg' },
        { id: 'D3', image: 'd3.jpg' },
        { id: 'D4', image: 'd4.jpg' },
        { id: 'D5', image: 'd5.jpg' },
        { id: 'D6', image: 'd6.jpg' },
        { id: 'D7', image: 'd7.jpg' },
        { id: 'D9', image: 'd9.jpg' },
        { id: 'D10', image: 'd10.jpg' },
        { id: 'D12', image: 'd12.jpg' },
        { id: 'D16', image: 'd16.jpg' },
        { id: 'D24', image: 'd24.jpg' },
        { id: 'D30', image: 'd30.jpg' },
        { id: 'D60', image: 'd60.jpg' },
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


                <div style={{ backgroundColor: "white", width: "86vw" }} className='bg-white w-[86vw] mt-8 mt-8'>
                    {/* Heading at top right */}
                    <div className="w-full flex justify-center md:justify-end px-20 md:px-8 pt-10">
                        <p
                            className="text-2xl md:text-3xl font-bold text-center md:text-right"
                            style={{ color: '#5D0000', fontWeight: 'bold' }}
                        >
                            Why the D1 Chart is Important
                        </p>
                    </div>


                    {/* Image + Text side-by-side */}
                    <div className="flex flex-col md:flex-row items-start gap-6 px-4 md:px-8 pt-4">
                        {/* Left Image with border and rounded corners */}
                        <img
                            src={`${publicUrl}/assets/img/blog/division/Divison1/D1_image1.jpg`}
                            alt="D1 Chart"
                            className="md:w-1/2 w-full rounded-xl border border-red-400 p-1 object-cover"
                        />

                        {/* Right text block */}
                        <div className="md:w-1/2 w-full flex flex-col gap-4 justify-center font-medium" style={{ color: 'black' }}>
                            <span>
                                The D1 chart, also known as the Rasi chart (ஜன்ம ராசி சக்கரம்), is the foundation of all astrological analysis in Vedic astrology. Every other divisional chart like D9 (Navamsa), D10 (Dasamsa), and others are derived from this core chart.
                            </span>

                            <span>
                                ✨ <strong>Key Reasons Why D1 Matters:</strong><br />
                            </span>
                            <span>
                                🏗️ <strong>Foundation of All Divisional Charts:</strong><br />
                                Without a strong D1 chart, the other divisional charts hold less weight. This is the blueprint from which everything else unfolds.
                            </span>

                            <span>
                                🌌 <strong>Real-Life Manifestations:</strong><br />
                                If a planet is strong in the D1 chart, its effects are much more visible in the material world.
                            </span>

                            <span>
                                🧭 <strong>Reveals Core Life Themes:</strong><br />
                                The D1 chart reflects whether a person is spiritual, family-focused, ambitious, or inclined towards creativity and knowledge.
                            </span>
                        </div>
                    </div>






                    {/* Image + Text Row */}
                    {/* Section 2 Heading */}
                    <div className="w-full flex justify-start px-4 md:px-8 pt-10">
                        <p
                            className="text-2xl md:text-3xl font-bold text-left"
                            style={{ color: '#5D0000', fontWeight: 'bold' }}
                        >
                            Key Elements to Analyze in the D1 Chart
                        </p>
                    </div>

                    {/* Section 2: Text Left + Image Right */}
                    <div className="flex flex-col md:flex-row items-start gap-6 px-4 md:px-8 pt-4">

                        {/* Left Column: Text */}
                        <div className="md:w-1/2 w-full flex flex-col gap-4 justify-center font-medium">
                            <span style={{ color: 'black' }}>
                                Each part of the D1 chart reveals a unique aspect of one’s personality, mental state, strengths, and challenges.
                            </span>

                            <span style={{ color: 'black' }}>
                                <strong>🔹 Lagna & Lagna Lord (Ascendant & Ruler):</strong><br />
                                🧱 The backbone of your chart – determines your personality, approach to life, health, and vitality.<br />
                                💫 A strong Lagna or Lagna Lord brings self-confidence and favorable life circumstances.
                            </span>
                            <br />
                            <span style={{ color: 'black' }}>
                                <strong>🔹 Moon Sign:</strong><br />
                                🌙 Represents your emotional and mental nature.<br />
                                💭 It shows how you process emotions, your intuition, and your psychological well-being.
                            </span>
                            <br />
                            <span style={{ color: 'black' }}>
                                <strong>🔹 Sun Placement:</strong><br />
                                ☀️ Symbolizes your soul, ego, and vitality.<br />
                                🪷 A strong Sun gives leadership qualities, willpower, and charisma.
                            </span>
                            <br />
                            <span style={{ color: 'black' }}>
                                <strong>🔹 Strength of Planets:</strong><br />
                                📈 Pay attention to whether planets are:<br /><br /><br />
                                Ucham (Exalted) 🏆 – they give their best results.<br /><br /><br />
                                Neecham (Debilitated) ⚠️ – they may cause challenges or delays.
                            </span>
                            <br />
                            <span style={{ color: 'black' }}>
                                <strong>🔹 Aspects & Yogas (Drishti & Combinations):</strong><br />
                                🔭 Planetary aspects (Drishti) show who influences whom in your chart.<br />
                                💎 Yogas like Rajayoga (success & authority) and Dhanayoga (wealth) arise when specific planets align powerfully.
                            </span>
                        </div>

                        {/* Right Column: Image */}
                        <div className="md:w-1/2 w-full pt-6 md:pt-0">
                            <div className="bg-white border border-black p-2">
                                <img
                                    src={`${publicUrl}/assets/img/blog/division/Divison1/D1_image2.jpg`}
                                    alt="D1 Chart"
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>
                        </div>

                    </div>




                </div>

                <div style={{ backgroundColor: 'white', width: "90vw" }} className=' mt-8 mb-8 h-56  pt-8 pb-8 rounded-2xl '>

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
                    className="bg-[#E90000] border-4 border-white  px-20 py-3 lg:py-6 hover:text-red-500 text-black text-xl lg:text-4xl hover:text-red shadow-lg hover:bg-white  transition duration-300"
                >
                    Check Now
                </button>

                <h1 className='text-white text-2xl lg:text-6xl font-extrabold py-10 px-8 lg:px-40 text-center'>Ask a question talk to the best astrologer</h1>
                <button onClick={() => window.open("https://wa.me/+919508801096", "_blank")}
                    style={{ background: "#00980A" }} className='border-4 border-white  px-20 py-3 lg:py-6 hover:text-white text-black text-xl lg:text-4xl hover:text-red shadow-lg hover:bg-white  transition duration-300'>Chat in Whatapp</button>

            </div>

        </div>
    );
};

export default Division;
