import React from 'react';

const Division4 = () => {
    const publicUrl = process.env.PUBLIC_URL || "";
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${publicUrl}/assets/img/blog/division/Division4/D4_background.webp)`,
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
                    D4
                </h1>
            </div>


            <div
                style={{
                    background: "linear-gradient(to bottom, #00D4A2 0%, #003321 70%)"
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
                                    {/* public\assets\img\blog\division\Division4\D4_image1.webp${n} */}
                                    <img
                                        src={`${publicUrl}/assets/img/blog/division/Division4/D4_image${n}.webp`}
                                        alt={`D4 part ${n}`}
                                        className="h-full w-auto object-contain border border-black rounded-md"
                                    // style={{ height: ' 18re' }}
                                    />
                                </div>
                            ))}
                        </div>








                        {/* heading + text here */}
                        <div className='md:w-1/2 w-full  flex flex-col justify-center px-6 gap-3'>
                            <p style={{ color: "#5D0000" }} className='text-3xl font-bold'>Chaturtamsa Chart (சதுர்தம்ச சக்கரம்)</p>
                            <p className='text-black font-medium'>a divisional chart in Vedic astrology used to understand property, inheritance, fixed assets, and fortune related to home and land.</p>
                            <p className='text-black font-medium'>🧬 D4 – Chaturtamsa Chart (சதுர்தம்ச சக்கரம்)</p>
                            <p className='text-black font-medium'>🔍 Used to judge property, land, fortune from family, and spiritual roots.</p>
                            <p className='text-black font-medium'><strong>📏 How D4 is Calculated:
                            </strong><br />
                                Each zodiac sign (30°) is divided into 4 equal parts of 7.5° each.
                                So each sign gives 4 Chaturtamsas → total 48 divisions in the zodiac.
                                Based on where a planet lies within these 7.5° divisions, it’s assigned a new sign in the D4 chart.
                            </p>

                            <p className='text-black font-medium'><strong>🧭 What D4 Reveals:</strong><br />
                                Aspect	Meaning
                            </p>

                            <p className='text-black font-medium'>
                                🏠 Property	Houses, land, real estate, vehicles
                                <br />
                                💎 Fixed Assets	Wealth that doesn’t move – like gold, plots <br />
                                🧬 Ancestral Fortune	What you receive from your lineage <br />
                                🌿 Spiritual Luck	How grounded and dharmic you are at the root level <br />
                                📈 Asset Growth	Whether your material life improves over time
                            </p>

                            <p className='text-black font-medium'>☀️ <strong>🏡 Why D4 is Important:</strong><br />
                                Even if the Rasi chart shows wealth, D4 shows if you will own real estate or land.<br />
                                It’s especially important in predicting:<br />
                                • Buying a house or land<br />
                                • Gaining property from parents/in-laws<br />
                                • Whether a person lives in comfort or struggles for assets
                                <br />
                                • Spiritual inheritance (for seekers)<br />

                            </p>


                        </div>
                    </div>


                    <div className='w-full flex md:flex-row flex-col  items-start mt-20 pb-8 '>
                        <div className='md:w-1/2 w-full flex flex-col justify-center  gap-1'>
                            <p className='text-2xl font-bold mt-4' style={{ color: "#5D0000" }}> What to Analyze in D4:</p>

                            <p className='text-black font-medium'>
                                <strong>Key Point	What it Shows</strong><br />
                                🔹Lagna and Lagna Lord in D4	Personal karma with land/property.<br />
                                🔹 4th house and 4th lord in D4	Comforts, home, happiness from propert.<br />
                                🔹 Jupiter & Venus in D4	Blessings from family, spiritual roots
                                .<br />
                                🔹 Malefics in D4	Trouble in owning land, legal property issues.<br />
                                🔹 Moon in D4	Connection to maternal property or homeland energy
                                .
                            </p>

                            <p className='text-black font-medium'>🧙‍♂ <strong> Example Predictions with D4:
                            </strong><br />
                                Jupiter in 4th house in D4 → native may inherit property or build a spiritual home.<br />
                                Saturn in Lagna of D4 → slow, delayed property gains, but long-lasting<br />
                                Strong Mars in D4 → success in real estate, engineering, architecture<br />
                            </p>
                            <p className='text-black font-medium'><strong> ✅ Practical Uses:
                            </strong><br />
                                Predicting:<br />
                                Real estate investments<br />
                                Property-related litigation<br />
                                Housewarming or Grihapravesh<br />
                                Moving to own house vs rental life<br />
                                Can also be used in Prashna charts to answer property-related questions.e<br />
                            </p>
                        </div>

                        {/* image here */}
                        {/* <img src={`${publicUrl}/assets/img/blog/division/D2MID1.svg`} alt="" className='md:w-1/2 w-full rounded-lg' /> */}
                        <div className="md:w-1/2 w-full flex flex-col gap-3 md:pr-4 "    >

                            <div
                                className="flex-1 w-full  flex items-center justify-center  "
                                style={{ height: '18em' }}

                            >
                                <img
                                    src={`${publicUrl}/assets/img/blog/division/Division4/D4_image4.webp`}
                                    alt={`D4 image 4`}
                                    className="h-full w-auto object-contain  rounded-lg "
                                    style={{ height: '18em' }}
                                />
                            </div>
                            {/* Table 1: Use Case */}
                            <div className="w-full overflow-x-auto rounded-md border border-gray-300 bg-white">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-400">
                                            <th className="px-4 py-2 font-bold text-black bg-white">Use Case</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-black text-sm bg-white">
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">Real estate investments</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">Property-related litigation</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">Housewarming or Grihapravesh</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">Moving to own house vs rental life</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2">Prashna chart usage</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>

                            {/* Table 2: Explanation */}
                            <div className="w-full overflow-x-auto  border border-gray-300 bg-white">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-700">
                                            <th className="px-4 py-2 font-bold text-black bg-white">Explanation</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-black text-sm bg-white">
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">Predict opportunities or challenges in property buying</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">Indicates legal issues or disputes over property</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">Helps identify favorable timing and success in new home entry</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">Shows likelihood of owning vs renting home</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2">Helps answer property-related questions via horary astrology</td>
                                        </tr>
                                    </tbody>
                                </table>



                            </div>

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
                    style={{ background: "#00980A" }} className='border-4 border-white px-20 py-3 lg:py-6 hover:text-white text-white text-xl lg:text-4xl hover:text-red shadow-lg hover:bg-white  transition duration-300'>Chat in Whatapp</button>

            </div>

        </div>
    );
};

export default Division4;
