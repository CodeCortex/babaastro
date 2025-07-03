import React from 'react';

const Division2 = () => {
    const publicUrl = process.env.PUBLIC_URL || "";

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${publicUrl}/assets/img/blog/division/D3.svg)`,
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
                    D3
                </h1>
            </div>


            <div
                style={{
                    background: "linear-gradient(to bottom, #BD5F01 0%, #3F0000 70%)"
                }}
                className=" w-full pt-20 pb-20 flex flex-col justify-center items-center"
            >
                <div style={{ backgroundColor: 'white', width: "90vw" }} className=' h-56 pt-8 rounded-2xl '>

                </div>

                <div style={{ backgroundColor: "white", width: "86vw" }} className='mt-8 p-10'>
                    <div className='w-full flex md:flex-row flex-col items-start '>
                        <img src={`${publicUrl}/assets/img/blog/division/D3MID1.svg`} alt="" className='md:w-1/2 w-full rounded-lg' />
                        <div className='md:w-1/2 w-full  flex flex-col justify-center px-6 gap-3'>
                            <p className='text-3xl font-bold' style={{ color: "#5D0000" }}>Drekkana Chart (திரிகணம் / ட்ரைக்கானா சக்கரம்)</p>
                            <p className='text-black font-medium'>
                                An important divisional chart in Vedic astrology that reveals insights about siblings, courage, effort, and mental strength.
                            </p>
                            <p className='text-black font-medium'>🔍 <strong>D3 – Drekkana Chart</strong> is used to judge one’s strength, efforts, siblings, and social courage.</p>
                            <p className='text-black font-medium'>📏 <strong>How D3 is Calculated:</strong><br />
                                Each zodiac sign (30°) is divided into 3 equal parts of 10° each.<br />
                                So each sign gives 3 Drekkana divisions → total 36 Drekkana zones in the zodiac.
                            </p>
                            <p className='text-black font-medium'>🎯 <strong>What D3 Reveals:</strong></p>
                            <ul className='text-black font-medium list-disc pl-5'>
                                <li>👬 <strong>Siblings:</strong> Relationship with brothers and sisters</li>
                                <li>💪 <strong>Courage:</strong> Inner strength, willpower, bravery</li>
                                <li>🤝 <strong>Cooperation:</strong> Support from community/friends</li>
                                <li>⚔️ <strong>Struggles:</strong> How you face competition and enemies</li>
                                <li>🎯 <strong>Efforts:</strong> Success through personal action, karma</li>
                            </ul>
                            <p className='text-black font-medium'>🌟 <strong>Why D3 is Important:</strong><br />
                                Even if the Rasi (D1) chart shows strong planets, D3 tells how much effort you will put in to succeed.
                                <br />Especially useful to analyze:
                            </p>
                            <ul className='text-black font-medium list-disc pl-5'>
                                <li>Whether you’ll fight and win over obstacles</li>
                                <li>Support or conflict with siblings</li>
                                <li>Mental stamina and confidence</li>
                            </ul>

                        </div>
                    </div>


                    <div className='w-full flex md:flex-row flex-col  items-start mt-20 pb-8 '>
                        <div className='md:w-1/2 w-full flex flex-col justify-center px-6 gap-3'>
                            <p className='text-2xl font-bold mt-6' style={{ color: "#5D0000" }}>Key Points to Analyze in D3:</p>
                            <ul className='text-black font-medium list-disc pl-5'>
                                <li><strong>Lagna & Lagna lord:</strong> Personal strength and mental energy</li>
                                <li><strong>Mars:</strong> Fight/flight instincts, esp. in male charts</li>
                                <li><strong>3rd Lord in D3:</strong> Sibling relations and communication</li>
                                <li><strong>Benefics in good houses:</strong> Supportive siblings, strong will</li>
                                <li><strong>Malefics in key houses:</strong> Struggles, rivalries, inner conflict</li>
                            </ul>

                            <p className='text-black font-medium'>🧙 <strong>Example Reading Style:</strong><br />
                                If Mars is strong → the native is bold, competitive, warrior-like<br />
                                If Moon is afflicted → mental hesitation, fear of opposition<br />
                                If 3rd house is strong → supportive siblings and strong self-effort
                            </p>

                            <p className='text-black font-medium'>✅ <strong>Practical Uses:</strong><br />
                                Understand why some people succeed through hard work while others don’t push much.<br />
                                Clarify sibling-related karma (supportive or problematic).<br />
                                Predict success in fields like sports, politics, public speaking, marketing/media.
                            </p>
                        </div>
                        <img src={`${publicUrl}/assets/img/blog/division/D3MID1.svg`} alt="" className='md:w-1/2 w-full rounded-lg' />

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
