import React from 'react';

const Division = () => {
    const publicUrl = process.env.PUBLIC_URL || "";

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${publicUrl}/assets/img/blog/division/D1.svg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                    // height: '700px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    
                }}
            >
                <h1 style={{ fontSize: '180px', textShadow: '2px 2px 3px black', paddingTop:"180px", paddingBottom:"180px" }} className="text-white font-extrabold sm:text-7xl md:text-9xl">
                    D1
                </h1>
            </div>

            <div
                style={{
                    background: "linear-gradient(to bottom, #1C0000 0%, #C70000 70%)"
                }}
                className=" w-full pt-20 pb-20 flex flex-col justify-center items-center"
            >
                <div style={{ backgroundColor: 'white', width: "90vw" }} className=' h-56 pt-8 rounded-2xl '>

                </div>

                <div style={{ backgroundColor: "white", width: "86vw" }} className='mt-8'>
                    <div className='w-full flex md:flex-row flex-col items-center '>
                        <img src={`${publicUrl}/assets/img/blog/division/picture1.svg`} alt="" className='md:w-1/2 w-full'  />
                        <div className='md:w-1/2 w-full  flex flex-col justify-center px-6 gap-3'>
                            <p style={{ color: "#5D0000" }} className='text-3xl font-bold'>Why the D1 Chart is Important ? </p>
                            <p className='text-black  font-medium'>The D1 chart, also known as the Rasi chart (ஜன்ம ராசி சக்கரம்), is the foundation of all astrological analysis in Vedic astrology. Every other divisional chart like D9 (Navamsa), D10 (Dasamsa), and others are derived from this core chart.</p>
                            <p className='text-black  font-medium'>✨ Key Reasons Why D1 Matters: <br></br>
                                🏗️ Foundation of All Divisional Charts:
                                Without a strong D1 chart, the other divisional charts hold less weight. This is the blueprint from which everything else unfolds.</p>
                            <p className='text-black  font-medium'>🌌 Real-Life Manifestations:<br></br>
                                If a planet is strong in the D1 chart, its effects are much more visible in the material world.</p>
                            <p className='text-black  font-medium'>🧭 Reveals Core Life Themes:<br></br>
                                The D1 chart reflects whether a person is spiritual, family-focused, ambitious, or inclined towards creativity and knowledge.</p>
                        </div>
                    </div>


                    <div className='w-full flex md:flex-row flex-col  items-center mt-20 pb-8 '>
                        <div className='md:w-1/2 w-full flex flex-col justify-center px-6 gap-3'>
                            <p style={{ color: "#5D0000" }} className='text-3xl font-bold'>Key Elements to Analyze in the D1 Chart</p>
                            <p className='text-black  font-medium'>Each part of the D1 chart reveals a unique aspect of one’s personality, mental state, strengths, and challenges.</p>
                            <p className='text-black  font-medium'>🔹 Lagna & Lagna Lord (Ascendant & Ruler): <br></br>
                                🧱 The backbone of your chart – determines your personality, approach to life, health, and vitality.<br></br>
                                💫 A strong Lagna or Lagna Lord brings self-confidence and favorable life circumstances.</p>

                            <p className='text-black  font-medium'>🔹 Moon Sign:<br></br>
                                🌙 Represents your emotional and mental nature. <br></br>
                                💭 It shows how you process emotions, your intuition, and your psychological well-being.</p>

                            <p className='text-black  font-medium'>
                                🔹 Sun Placement: <br></br>
                                ☀️ Symbolizes your soul, ego, and vitality. <br></br>
                                🪷 A strong Sun gives leadership qualities, willpower, and charisma. <br></br>
                            </p>


                            <p className='text-black  font-medium'>
                                🔹 Strength of Planets: <br></br>
                                📈 Pay attention to whether planets are: <br></br>

                                Ucham (Exalted) 🏆 – they give their best results. <br></br>
                            </p>

                            <p className='text-black  font-medium'>Neecham (Debilitated) ⚠️ – they may cause challenges or delays.</p>

                            <p className='text-black  font-medium'>🔹 Aspects & Yogas (Drishti & Combinations): <br></br>
                                🔭 Planetary aspects (Drishti) show who influences whom in your chart. <br></br>
                                💎 Yogas like Rajayoga (success & authority) and Dhanayoga (wealth) arise when specific planets align powerfully.</p>
                        </div>
                        <img src={`${publicUrl}/assets/img/blog/division/picture1.svg`} alt="" className='md:w-1/2 w-full' />

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
                    className="bg-[#E90000] border-4 border-white rounded-2xl px-20 py-3 lg:py-6 hover:text-red-500 text-black text-xl lg:text-4xl hover:text-red shadow-lg hover:bg-white  transition duration-300"
                >
                    Check Now
                </button>

                <h1 className='text-white text-2xl lg:text-6xl font-extrabold py-10 px-8 lg:px-40 text-center'>Ask a question talk to the best astrologer</h1>
                <button onClick={() => window.open("https://wa.me/+919508801096", "_blank")}
 style={{background:"#00980A"}} className='border-4 border-white rounded-2xl px-20 py-3 lg:py-6 hover:text-white text-black text-xl lg:text-4xl hover:text-red shadow-lg hover:bg-white  transition duration-300'>Chat in Whatapp</button>

            </div>

        </div>
    );
};

export default Division;
