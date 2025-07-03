 feature/blogupdate2
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
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
class Ascendantsinastrology extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        let imagealt = 'image'

        return (
            <div className="blog-page-area  pd-bottom-80 go-top">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-8 pd-top-50 Boxash" >
                            <div className="blog-details-page-inner">
                                <div className="single-blog-inner m-0">
                                    <div className="single-post-wrap style-overlay">
                                        <div className="thumb">
                                            <img src={publicUrl + "assets/img/blog/starss.png"} alt="img" />
                                        </div>
                                        <div className="details pb-4">
                                            <div className="post-meta-single mb-2">
                                                <ul>
                                                    <li><p><i className="fa fa-clock-o" />28 March 2025</p></li>
                                                </ul>
                                            </div>
                                            <h5 className="title mt-0">Stars In Astrology</h5>
                                        </div>
                                    </div>
                                    <div className="single-blog-details">
                                    </div>










                                    <div class="px-6 py-10 bg-white text-gray-800">
                                        {/* <!-- Section Heading --> */}
                                        <h1 class="text-3xl font-bold text-purple-700 mb-6">🌅 Ascendants in Astrology (Lagna / லக்னம்)</h1>
                                        <p class="mb-6 text-lg">The <strong>Ascendant</strong> or <strong>Lagna</strong> is the zodiac sign rising on the eastern horizon at the time of your birth. It sets the tone of your horoscope and plays a vital role in shaping your personality and life direction.</p>

                                        {/* <!-- What is Ascendant --> */}
                                        <div class="bg-purple-50 border-l-4 border-purple-400 p-5 rounded mb-8">
                                            <h2 class="text-2xl font-semibold mb-2">🧭 What is an Ascendant (Lagna)?</h2>
                                            <ul class="list-disc pl-5 text-base">
                                                <li><strong>Tamil:</strong> லக்னம்</li>
                                                <li><strong>Sanskrit:</strong> लग्न (Lagna)</li>
                                                <li><strong>English:</strong> Ascendant / Rising Sign</li>
                                                <li>Begins your <strong>1st house</strong> and defines the layout of your birth chart</li>
                                                <li>Changes every ~2 hours, so accurate <strong>birth time</strong> is essential</li>
                                            </ul>
                                        </div>

                                        {/* <!-- Why Important --> */}
                                        <div class="mb-8">
                                            <h2 class="text-2xl font-semibold text-purple-700 mb-4">🧬 Why is the Ascendant So Important?</h2>
                                            <div class="overflow-x-auto">
                                                <table class="w-full text-left table-auto border border-gray-300">
                                                    <thead class="bg-purple-100">
                                                        <tr>
                                                            <th class="px-4 py-2">🔹 Element</th>
                                                            <th class="px-4 py-2">🔍 Represents</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr class="even:bg-gray-50">
                                                            <td class="px-4 py-2 font-medium">🧍 Lagna (1st House)</td>
                                                            <td class="px-4 py-2">Personality, body, behavior, mindset</td>
                                                        </tr>
                                                        <tr class="even:bg-gray-50">
                                                            <td class="px-4 py-2 font-medium">🧭 Chart Foundation</td>
                                                            <td class="px-4 py-2">Sets signs for all 12 houses</td>
                                                        </tr>
                                                        <tr class="even:bg-gray-50">
                                                            <td class="px-4 py-2 font-medium">🌟 Planetary Strength</td>
                                                            <td class="px-4 py-2">Defines benefic/malefic planet roles</td>
                                                        </tr>
                                                        <tr class="even:bg-gray-50">
                                                            <td class="px-4 py-2 font-medium">🎯 Life Direction</td>
                                                            <td class="px-4 py-2">Soul’s intent and life path</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {/* <!-- Ascendants Table --> */}
                                        <div class="mb-8">
                                            <h2 class="text-2xl font-semibold text-purple-700 mb-4">🔟 12 Ascendants and Their Traits (with Tamil Names)</h2>
                                            <div class="overflow-x-auto">
                                                <table class="w-full table-auto text-left border border-gray-300">
                                                    <thead class="bg-purple-100">
                                                        <tr>
                                                            <th class="px-4 py-2">♈ Ascendant</th>
                                                            <th class="px-4 py-2">Tamil Name</th>
                                                            <th class="px-4 py-2">Personality Style</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Aries</td><td class="px-4 py-2">மேஷ லக்னம்</td><td class="px-4 py-2">Bold, energetic, direct</td></tr>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Taurus</td><td class="px-4 py-2">ரிஷப லக்னம்</td><td class="px-4 py-2">Calm, comfort-loving</td></tr>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Gemini</td><td class="px-4 py-2">மிதுன லக்னம்</td><td class="px-4 py-2">Witty, curious, smart</td></tr>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Cancer</td><td class="px-4 py-2">கடக லக்னம்</td><td class="px-4 py-2">Emotional, nurturing</td></tr>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Leo</td><td class="px-4 py-2">சிம்ம லக்னம்</td><td class="px-4 py-2">Confident, proud leader</td></tr>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Virgo</td><td class="px-4 py-2">கன்னி லக்னம்</td><td class="px-4 py-2">Analytical, precise</td></tr>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Libra</td><td class="px-4 py-2">துலாம் லக்னம்</td><td class="px-4 py-2">Balanced, charming</td></tr>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Scorpio</td><td class="px-4 py-2">விருச்சிக லக்னம்</td><td class="px-4 py-2">Intense, secretive</td></tr>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Sagittarius</td><td class="px-4 py-2">தனுசு லக்னம்</td><td class="px-4 py-2">Optimistic, wise</td></tr>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Capricorn</td><td class="px-4 py-2">மகரம் லக்னம்</td><td class="px-4 py-2">Ambitious, serious</td></tr>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Aquarius</td><td class="px-4 py-2">கும்ப லக்னம்</td><td class="px-4 py-2">Innovative, social</td></tr>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Pisces</td><td class="px-4 py-2">மீன லக்னம்</td><td class="px-4 py-2">Spiritual, artistic</td></tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {/* <!-- Lagna Lord --> */}
                                        <div class="bg-purple-50 border-l-4 border-purple-400 p-5 rounded mb-8">
                                            <h2 class="text-2xl font-semibold mb-3">🧘‍♀️ Lagna Lords Matter Too!</h2>
                                            <p class="mb-3">Each Ascendant is ruled by a planet, called the <strong>Lagna Lord</strong>. It influences your:</p>
                                            <ul class="list-disc pl-6 text-base space-y-1">
                                                <li>Core personality traits</li>
                                                <li>Life's key themes</li>
                                                <li>Health patterns</li>
                                                <li>Career and relationship tone</li>
                                            </ul>
                                            <div class="mt-4">
                                                <p><strong>Example:</strong></p>
                                                <ul class="list-disc pl-6">
                                                    <li>Aries Lagna → Mars is Lagna Lord → Bold & action-driven</li>
                                                    <li>Libra Lagna → Venus is Lagna Lord → Artistic, relationship-oriented</li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* <!-- Special Lagna Concepts --> */}
                                        <div class="mb-8">
                                            <h2 class="text-2xl font-semibold text-purple-700 mb-4">🌟 Special Lagna Concepts</h2>
                                            <div class="overflow-x-auto">
                                                <table class="w-full text-left table-auto border border-gray-300">
                                                    <thead class="bg-purple-100">
                                                        <tr>
                                                            <th class="px-4 py-2">Term</th>
                                                            <th class="px-4 py-2">Meaning</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Chandra Lagna</td><td class="px-4 py-2">Moon is the reference Lagna → mind-focused</td></tr>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Surya Lagna</td><td class="px-4 py-2">Sun as Lagna → from ego/self identity</td></tr>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Arudha Lagna</td><td class="px-4 py-2">How others see you</td></tr>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Karakamsha Lagna</td><td class="px-4 py-2">Jaimini Lagna → reveals soul's dharma</td></tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>











                                </div>
                            </div>
                        </div>
                        <Sidebar />
main
                    </div>
                </div>
            </div>

        )
    }
}

export default Ascendantsinastrology;
