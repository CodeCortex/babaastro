import React from 'react';

const Division2 = () => {
    const publicUrl = process.env.PUBLIC_URL || "";

    return (
        <div>
            <div style={{ fontFamily: "'Poppins', sans-serif" }}>
            <div style={{
                backgroundImage: `url(${publicUrl}/assets/img/blog/ascendent.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                width: '100%',
                height: '130vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#A3CBFF',
                margin: 0,
                padding: 0,
                border: 'none'
            }}>
                <h1 style={{
                    fontSize: 'clamp(40px, 8vw, 80px)',
                    textShadow: '2px 2px 3px black',
                    color: 'white',
                    fontWeight: 700,
                    textAlign: 'center',
                    padding: 0,
                    margin: 0
                }}>
                    Ascendant<br /> in Astrology
                </h1>
            </div>



            </div>


            <div
                style={{
                    background: "linear-gradient(to bottom, #EEFE61 )"
                }}
                className=" w-full pt-20 pb-20 flex flex-col justify-center items-center"
            >
                 <h1 
            className="text-5xl font-bold mb-8 text-center text-black"
            style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0)",
                lineHeight: "1.3"
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
            width: '1400px',  // Adjust this value to your preferred size
            height: 'auto',  // Maintains aspect ratio
            maxWidth: '100%' // Ensures responsiveness
        }}
    />
</div>
<p className="mb-8 text-xl leading-relaxed text-gray-800 px-8 md:px-12 lg:px-16 text-justify">
    The <strong className="font-semibold text-gray-900">Ascendant</strong> isn't just about your Sun sign. 
    One of the most important – and often overlooked – aspects of your birth chart is 
    your Ascendant, also known as <span className="italic">Lagna</span> (லக்னம்). 
    This powerful point shapes how the world sees you, how you respond to life's challenges, 
    and the fundamental structure of your entire horoscope.
</p>

<h1 
    className="text-5xl font-bold mb-8 text-black text-left"
    style={{
        paddingLeft: "3rem",  // 24px padding
        paddingRight: "5rem",   // 32px padding
        lineHeight: "1.3",
        marginRight: "0rem",     // Right margin
        marginLeft: "0",         // No left margin
        width: "calc(100% - 2rem)" // Compensate for right margin
    }}
>
    What Exactly Is the Ascendant?
</h1>
<p className="mb-8 text-xl leading-relaxed text-gray-800 px-8 md:px-12 lg:px-16 text-justify">
  The Ascendant (or Rising Sign) is the zodiac sign that was rising in the eastern horizon at the exact moment of your birth. It's the starting point of your 1st house and forms the foundation of your entire chart
  <br></br>
  <strong>Changes every ~2 hours - so your exact birth time is crucial!</strong>
  <br></br>
  <strong>Sets the structure for all 12 houses in your horoscope.</strong>
</p>

<img 
        src={publicUrl + "assets/img/blog/ascendent2.png"} 
        alt="Astrology Ascendant" 
        className="rounded-lg"
        style={{
            width: '1400px',  // Adjust this value to your preferred size
            height: 'auto',  // Maintains aspect ratio
            maxWidth: '100%' // Ensures responsiveness
        }}
    />

<div></div>
<h1 
    className="text-5xl font-bold mb-8 text-black text-left"
    style={{
        paddingLeft: "3rem",  // 24px padding
        paddingRight: "5rem",   // 32px padding
        lineHeight: "1.3",
        marginRight: "0rem",
        marginTop:"4rem",     // Right margin
        marginLeft: "0",         // No left margin
        width: "calc(100% - 2rem)" // Compensate for right margin
    }}
>
     Why Is the Ascendant So Important?
</h1>


<div className="overflow-x-auto my-8 mx-auto" style={{ width: '100%', maxWidth: '1400px' }}>
  <table className="w-full table-auto border-2 border-black text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>
    <thead className="bg-white">
      <tr className="border-b-2 border-black">
        <th 
          className="px-6 py-4 text-center font-semibold text-lg"
          style={{ 
            fontWeight: 700,
            width: '50%',
            borderRight: '2px solid black'
          }}
        >
           Element
        </th>
        <th 
          className="px-6 py-4 text-center font-semibold text-lg"
          style={{ fontWeight: 700, width: '50%' }}
        >
           Represents
        </th>
      </tr>
    </thead>
    <tbody className="bg-white">
      {[
        [" Lagna (1st House)", "Personality, body, behavior, mindset"],
        [" Chart Foundation", "Sets signs for all 12 houses"],
        [" Planetary Strength", "Defines benefic/malefic planet roles"],
        [" Life Direction", "Soul's intent and life path"]
      ].map(([element, represents], index) => (
        <tr key={index} className="border-b border-black even:bg-gray-50">
          <td 
            className="px-6 py-4 text-center"
            style={{ 
              fontWeight: 500,
              width: '50%',
              borderRight: '2px solid black'
            }}
          >
            {element}
          </td>
          <td 
            className="px-6 py-4 text-center"
            style={{ fontWeight: 500, width: '50%' }}
          >
            {represents}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>




<h1 
    className="text-5xl font-bold mb-8 text-black text-left"
    style={{
        paddingLeft: "3rem",  // 24px padding
        paddingRight: "5rem",   // 32px padding
        lineHeight: "1.3",
        marginRight: "0rem",
        marginTop:"3rem",     // Right margin
        marginLeft: "0",         // No left margin
        width: "calc(100% - 2rem)" // Compensate for right margin
    }}
>
     The 12 Ascendants and Their Traits (With Tamil Names)
</h1>
{/* Ascendants Table - Expanded Width */}
<div className="mb-8">
  <div className="overflow-x-auto my-4 mx-auto" style={{ width: '100%', maxWidth: '2000px' }}>
    <table className="w-full table-auto border-2 border-black text-lg" style={{ minWidth: '1400px' }}>
      <tbody className="bg-white">
        {[
          { sign: "Aries", tamil: "மேஷ லக்னம்", trait: "Bold, energetic, assertive – a natural warrior" },
          { sign: "Taurus", tamil: "ரிஷப லக்னம்", trait: "Calm, comfort-loving, practical, grounded" },
          { sign: "Gemini", tamil: "மிதுன லக்னம்", trait: "Witty, curious, talkative, mentally agile" },
          { sign: "Cancer", tamil: "கடக லக்னம்", trait: "Emotional, nurturing, intuitive, home-focused" },
          { sign: "Leo", tamil: "சிம்ம லக்னம்", trait: "Confident, royal, proud, leadership-oriented" },
          { sign: "Virgo", tamil: "கன்னி லக்னம்", trait: "Perfectionist, detail-driven, logical" },
          { sign: "Libra", tamil: "துலாம் லக்னம்", trait: "Balanced, social, beauty- and peace-loving" },
          { sign: "Scorpio", tamil: "விருச்சிக லக்னம்", trait: "Intense, mysterious, powerful, emotionally deep" },
          { sign: "Sagittarius", tamil: "தனுசு லக்னம்", trait: "Optimistic, wise, loves freedom and travel" },
          { sign: "Capricorn", tamil: "மகரம் லக்னம்", trait: "Hardworking, serious, disciplined" },
          { sign: "Aquarius", tamil: "கும்ப லக்னம்", trait: "Innovative, social" },
          { sign: "Pisces", tamil: "மீன லக்னம்", trait: "Spiritual, artistic" }
        ].map((row, index) => (
          <tr key={index} className="border-b border-black even:bg-gray-50">
            <td
              className="px-6 py-4 font-medium text-center"
              style={{
                width: '50%',
                borderRight: '2px solid black',
              }}
            >
              <div className="flex justify-center items-center">
                {row.sign} – {row.tamil}
              </div>
            </td>
            <td
              className="px-6 py-4 text-center"
              style={{ width: '50%' }}
            >
              <div className="flex justify-center items-center">
                {row.trait}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>




<h1 
    className="text-5xl font-bold mb-8 text-black text-left"
    style={{
        paddingLeft: "3rem",  // 24px padding
        paddingRight: "5rem",   // 32px padding
        lineHeight: "1.3",
        marginRight: "0rem",     // Right margin
        marginLeft: "0",         // No left margin
        width: "calc(100% - 2rem)" // Compensate for right margin
    }}
>
    Lagna Lords: The Planet That Rules You
</h1>

<p className="mb-8 text-xl leading-relaxed text-gray-800 px-8 md:px-12 lg:px-16 text-justify">
  Each Ascendant has a ruling planet, called the Lagna Lord. This planet colors your personality, sets life themes, and impacts your health, relationships, and career path
  <br></br>
  <br></br>
  <p className="mb-6">
  <strong className="text-2xl font-bold text-black">Examples:</strong>
</p>
<p className="mb-8 text-xl leading-relaxed text-gray-800 px-8 md:px-12 lg:px-16 text-justify">
 • Aries Lagna → Mars is Lagna Lord → Bold, action-oriented, fiery
  <br></br>
</p>
<p className="mb-8 text-xl leading-relaxed text-gray-800 px-8 md:px-12 lg:px-16 text-justify">
• Libra Lagna → Venus is Lagna Lord → Values love, beauty, and harmony
  <br></br>
</p>
</p>

<h1 
    className="text-5xl font-bold mb-8 text-black text-left"
    style={{
        paddingLeft: "3rem",  // 24px padding
        paddingRight: "5rem",   // 32px padding
        lineHeight: "1.3",
        marginRight: "0rem",
        marginTop:"0rem",     // Right margin
        marginLeft: "0",         // No left margin
        width: "calc(100% - 2rem)" // Compensate for right margin
    }}
>
     Special Lagna Concepts to Know
</h1>

<div className="mb-8">
  <div className="overflow-x-auto my-4 mx-auto" style={{ width: '100%', maxWidth: '2000px' }}>
    <table className="w-full table-auto border-2 border-black text-lg" style={{ minWidth: '1400px' }}>
      <thead className="bg-white">
        <tr className="border-b-2 border-black">
          <th 
            className="px-6 py-4 font-medium text-center" 
            style={{ width: '50%', borderRight: '2px solid black' }}
          >
            <div className="flex justify-center items-center text-xl">Term</div>
          </th>
          <th 
            className="px-6 py-4 text-center" 
            style={{ width: '50%' }}
          >
            <div className="flex justify-center items-center text-xl">What It Means</div>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        <tr className="border-b border-black even:bg-gray-50">
          <td 
            className="px-6 py-4 font-medium text-center" 
            style={{ width: '50%', borderRight: '2px solid black' }}
          >
            <div className="flex justify-center items-center">Chandra Lagna Moon as the Ascendant</div>
          </td>
          <td 
            className="px-6 py-4 text-center" 
            style={{ width: '50%' }}
          >
            <div className="flex justify-center items-center">focuses on the emotional self</div>
          </td>
        </tr>
        <tr className="border-b border-black even:bg-gray-50">
          <td 
            className="px-6 py-4 font-medium text-center" 
            style={{ width: '50%', borderRight: '2px solid black' }}
          >
            <div className="flex justify-center items-center">Surya Lagna Sun as the Ascendant</div>
          </td>
          <td 
            className="px-6 py-4 text-center" 
            style={{ width: '50%' }}
          >
            <div className="flex justify-center items-center">reflects outward personality</div>
          </td>
        </tr>
        <tr className="border-b border-black even:bg-gray-50">
          <td 
            className="px-6 py-4 font-medium text-center" 
            style={{ width: '50%', borderRight: '2px solid black' }}
          >
            <div className="flex justify-center items-center">Karakamsha Lagna</div>
          </td>
          <td 
            className="px-6 py-4 text-center" 
            style={{ width: '50%' }}
          >
            <div className="flex justify-center items-center">Used in Jaimini astrology for soul's purpose</div>
          </td>
        </tr>
        <tr className="border-b border-black even:bg-gray-50">
          <td 
            className="px-6 py-4 font-medium text-center" 
            style={{ width: '50%', borderRight: '2px solid black' }}
          >
            <div className="flex justify-center items-center">Arudha Lagna</div>
          </td>
          <td 
            className="px-6 py-4 text-center" 
            style={{ width: '50%' }}
          >
            <div className="flex justify-center items-center">Represents your perceived personality by others</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<h1 
    className="text-5xl font-bold mb-8 text-black text-left"
    style={{
        paddingLeft: "3rem",  // 24px padding
        paddingRight: "5rem",   // 32px padding
        lineHeight: "1.3",
        marginRight: "0rem",     // Right margin
        marginLeft: "0",         // No left margin
        width: "calc(100% - 2rem)" // Compensate for right margin
    }}
>
    Final Thoughts 
</h1>
<p className="mb-8 text-xl leading-relaxed text-gray-800 px-8 md:px-12 lg:px-16 text-justify">
 Your Ascendant is you — the face you show the world, the way you carry yourself, and how you begin everything in life. While your Sun sign shows your core essence, and your Moon sign reveals your emotions, your Lagna is how your entire life plays out
  <br></br>
</p>
<p className="mb-8 text-xl leading-relaxed text-gray-800 px-8 md:px-12 lg:px-16 text-justify">
Tip: Always consult a Vedic astrologer or use accurate birth chart software to find your exact Lagna, especially since it changes every 2 hours!
  <br></br>
</p>


               <h1 
    className="mb-8 text-left text-black"
    style={{
        fontWeight: 700,
        fontSize: "50px",
        paddingLeft: "3rem",
        paddingRight: "5rem",
        lineHeight: "1.3",
        marginRight: "0rem",
        marginLeft: "0",
        width: "calc(100% - 2rem)",
        color: "#000000" // Explicit black color
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
                    <h1 className='text-black text-xl lg:text-4xl font-bold py-8 lg:py-16 mx-auto' style={{ fontWeight: 700 }}>
                        Astrological remedies if you were not able to buy a house
                    </h1>
                </div>
                
                <div className="flex flex-col items-center space-y-8">
                    <button
                        style={{ backgroundColor: "#E90000", fontFamily: "'Poppins', sans-serif" }}
                        className="w-full max-w-[200px] border-4 border-white px-4 py-2 lg:py-4 hover:text-red-500 text-white text-lg lg:text-3xl shadow-lg hover:bg-white transition duration-300"
                    >
                        Check Now
                    </button>

                    <h1 className="text-black text-xl lg:text-4xl font-bold py-8 lg:py-16 mx-auto text-center" style={{ fontWeight: 700 }}>
                        Ask a question talk to the best astrologer
                    </h1>

                    <button
                        onClick={() => window.open("https://wa.me/+919508801096", "_blank")}
                        style={{ background: "#00980A", fontFamily: "'Poppins', sans-serif" }}
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
