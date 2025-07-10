import React from 'react';

const Division2 = () => {
    


    return (
        <div>
   <div style={{
         backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/blog/planetstrength/image.png)`,
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
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 0,
    margin: 0
  }}>
  Planet strength<br />
  </h1>
</div>


          <div
    style={{
        background: "linear-gradient(to bottom, #B4EAFF)"
    }}
    className="w-full pt-20 pb-20 flex flex-col justify-center items-center"
>
    <h1 
        className="text-5xl font-bold mb-8 text-left"
        style={{
            color: "#005070",
            textShadow: "2px 2px 4px rgba(0,0,0,0)",
            lineHeight: "1.3",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700
        }}
    >
        Planetary Strength in Astrology (Shadbala)
    </h1>

                 

<p className="mb-8 text-2xl leading-relaxed text-black px-8 md:px-12 lg:px-16 text-justify">
    In Vedic astrology, simply having a planet in a chart isn't enough. What truly matters is how strong or weak that planet is — because its strength determines the results it will deliver in your life.
</p>


  
<h1 
    className="text-5xl font-bold mb-8 text-red-900 text-left"
    style={{
        color: "#005070",
        paddingLeft: "3rem",  // 24px padding
        paddingRight: "5rem",   // 32px padding
        lineHeight: "1.3",
        marginRight: "0rem",     // Right margin
        marginLeft: "0",         // No left margin
        width: "calc(100% - 2rem)" // Compensate for right margin
    }}
>
    Why Planetary Strength (Bala) Matters
    <br></br>
      <p className="text-2xl  text-black">
        <br></br>
    •A strong planet brings success in its domain<br></br>
        Example: Strong Venus = happy relationships, creativity, luxury.
•A weak or afflicted planet may:<br></br>
•Delay your goals.<br></br>
•Cause struggles or blockages<br></br>
•Produce opposite or twisted results<br></br>
  </p>
  <br></br>
  <p className="font-poppins text-2xl text-black font-normal">
  Planetary strength influences yogas, dashas (timing), and your overall life journey.
</p>
</h1>

<br></br>
<br></br>
<h1 
    className="text-5xl font-bold mb-8 text text-left"
    style={{
        color: "#005070",
        paddingLeft: "3rem",  // 24px padding
        paddingRight: "5rem",   // 32px padding
        lineHeight: "1.3",
        marginRight: "0rem",     // Right margin
        marginLeft: "0",         // No left margin
        width: "calc(100% - 2rem)" // Compensate for right margin
    }}
>
    The 6 Types of Planetary Strengths (Shadbala / ஷட்பல)
  <br></br>
  <p className="font-poppins text-2xl text-black font-normal">
In Sanskrit, “Shadbala” means "Six Strengths." These six types offer a comprehensive way to assess how powerful a planet really is.
</p>
</h1>







{/* Shadabala Types Table */}
<div className="mb-8">
  <div className="overflow-x-auto my-4 mx-auto" style={{ width: '100%', maxWidth: '2000px' }}>
    <table className="w-full table-auto border-2 border-black text-lg" style={{ minWidth: '1400px' }}>
      <thead className="bg-white">
        <tr className="border-b-2 border-black">
          <th className="px-4 py-3 border-r border-black text-center font-semibold">House</th>
          <th className="px-4 py-3 border-r border-black text-center font-semibold">Tamil Name</th>
          <th className="px-4 py-3 text-center font-semibold">Represents</th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {[
          ["1. Sthana Bala", "ஸ்தான பலம்", "Positional strength (Exaltation, Own Sign, etc.)"],
          ["2. Dik Bala", "திசை பலம்", "Directional strength — planets strong in certain houses"],
          ["3. Kala Bala", "கால பலம்", "Time-based strength — depends on day/night, age, etc."],
          ["4. Chesta Bala", "சாஞ்ச பலம்", "Motion-related — whether direct or retrograde"],
          ["5. Naisargika Bala", "இயற்கை பலம்", "Natural strength — based on the planet’s nature"],
          ["6. Drik Bala", "திரிக பலம்", "Aspect strength — positive or negative planetary aspects"]
        ].map(([type, tamil, meaning], index) => (
          <tr key={index} className="border-b border-black even:bg-gray-100">
            <td className="px-4 py-3 border-r border-black">{type}</td>
            <td className="px-4 py-3 border-r border-black">{tamil}</td>
            <td className="px-4 py-3 text-left">{meaning}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

<h1 
    className="text-5xl font-bold mb-8 text text-left"
    style={{
        color: "#005070",
        paddingLeft: "3rem",  // 24px padding
        paddingRight: "5rem",   // 32px padding
        lineHeight: "1.3",
        marginRight: "0rem",     // Right margin
        marginLeft: "0",         // No left margin
        width: "calc(100% - 2rem)" // Compensate for right margin
    }}
>
  <p className="font-poppins text-2xl text-black font-normal">
All these combine into a Shadbala Score. A planet with a score ≥ 1.0 Rupas is considered strong.
</p>
</h1>



<br></br>

<h1 
    className="text-5xl font-bold mb-8 text-red-900 text-left"
    style={{
        color: "#005070",
        paddingLeft: "3rem",  // 24px padding
        paddingRight: "5rem",   // 32px padding
        lineHeight: "1.3",
        marginRight: "0rem",     // Right margin
        marginLeft: "0",         // No left margin
        width: "calc(100% - 2rem)" // Compensate for right margin
    }}
>
    General Rules for Planetary Strength
</h1>



<div className="overflow-x-auto my-8 mx-auto" style={{ width: '100%', maxWidth: '1400px' }}>
  <table className="w-full table-auto border-2 border-black text-base">
    <colgroup>
      <col style={{ width: '50%' }} />
      <col style={{ width: '50%' }} />
    </colgroup>
    <thead className="bg-white">
      <tr className="border-b-2 border-black">
        <th className="px-6 py-4 border-r border-black text-center font-semibold text-lg" style={{ borderRight: '2px solid black' }}> condition</th>
        <th className="px-6 py-4 text-center font-semibold text-lg">  Effect</th>
      </tr>
    </thead>
    <tbody className="bg-white">
      {[
        ["Exalted (உச்சம்)", "Very strong"],
          ["Own Sign (ஸ்வக்ஷேத்ரத்தில்)", "Strong"],
          ["Friendly Sign", "Moderately strong"],
          ["Debilitated (நீசம்)", "Very weak"],
          ["Combust (தீக்கிழியும் நிலை)", "Weak (close to Sun)"],
          ["Retrograde (வக்கிரம்)", "Can enhance or distort strength"],
          ["In Enemy Sign", "Weak"],
          ["In Dushtana (6, 8, 12)", "Challenged, limited results"]
      ].map(([element, explanation], index) => (
        <tr key={index} className="border-b border-black even:bg-gray-50">
          <td className="px-6 py-4 text-center" style={{ borderRight: '2px solid black' }}>{element}</td>
          <td className="px-6 py-4 text-center">{explanation}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

<br></br>









<h1 
    className="text-5xl font-bold mb-8 text-red-900 text-left"
    style={{
        color: "#005070",
        paddingLeft: "3rem",  // 24px padding
        paddingRight: "5rem",   // 32px padding
        lineHeight: "1.3",
        marginRight: "0rem",     // Right margin
        marginLeft: "0",         // No left margin
        width: "calc(100% - 2rem)" // Compensate for right margin
    }}
>
    Real-Life Examples
    <br></br>
      <p className="text-2xl font-semibold text-black">
        <br>
        </br>
    • <strong>Moon in Taurus =</strong> Exalted → Emotionally stable and secure.<br></br>
    • <strong>Venus in Virgo =</strong> Debilitated → Struggles in love, self-worth<br></br>
    • <strong>Mars in 10th House =</strong> Directional strength → Excellent for career and leadership<br></br>

  </p>
</h1>

<br />



<h1 
    className="text-5xl font-bold mb-8 text-red-900 text-left"
    style={{
        color: "#005070",
        paddingLeft: "3rem",  // 24px padding
        paddingRight: "5rem",   // 32px padding
        lineHeight: "1.3",
        marginRight: "0rem",     // Right margin
        marginLeft: "0",         // No left margin
        width: "calc(100% - 2rem)" // Compensate for right margin
    }}
>
    How to Use This in Chart Reading
    <br></br>
      <p className="text-2xl font-semibold text-black">
        <br>
        </br>
    1. <strong>Check Rasi (Sign) strength – </strong>Is it exalted, own sign, or debilitated?<br></br>
    2.<strong>Note planetary aspects – </strong> Who’s influencing it? Benefics or malefics?<br></br>
    3. <strong>Use Shadbala - </strong>For deeper insights (available in advanced tools)<br></br>
    4. <strong>Time Matters - </strong>Even a strong planet won't help if its Dasha isn't active<br></br>

  </p>
</h1>

<br />



<h1 
    className="text-5xl font-bold mb-8 text-red-900 text-left"
    style={{
        color: "#005070",
        paddingLeft: "3rem",  // 24px padding
        paddingRight: "5rem",   // 32px padding
        lineHeight: "1.3",
        marginRight: "0rem",     // Right margin
        marginLeft: "0",         // No left margin
        width: "calc(100% - 2rem)" // Compensate for right margin
    }}
>
     Bonus Tip:
    <br></br>

      <p className="text-4xl font-semibold" style={{ color: '#C84346' }}>
 
  A weak planet can become strong through remedies, devotion, and time (dasha). Nothing is fixed forever.
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
                        <h1 className='text-black text-xl lg:text-5xl py-8 lg:py-16 mx-auto' style={{ fontWeight: 700 }}>
                            Astrological remedies if you were not able to buy a house
                        </h1>
                    </div>
                </div>

                <div className="flex flex-col items-center space-y-5">
                    <button
                        style={{ backgroundColor: "#E90000", fontWeight: 400, width: "450px" }}
                        className="w-full max-w-[200px] border-4 border-white px-4 py-2 lg:py-4 hover:text-red-500 text-white text-lg lg:text-3xl shadow-lg hover:bg-white transition duration-300"
                    >
                        Check Now
                    </button>

                    <h1 className="text-black text-xl lg:text-5xl py-5 lg:py-12 mx-auto text-center" style={{ fontWeight: 700 }}>
                        Ask a question talk to the best astrologer
                    </h1>

                    <button
                        onClick={() => window.open("https://wa.me/+919508801096", "_blank")}
                        style={{ background: "#00980A", fontWeight: 400, width: "450px" }}
                        className="w-full max-w-[140px] border-4 border-white px-4 py-2 lg:py-4 hover:text-white text-white text-lg lg:text-3xl shadow-lg hover:bg-white transition duration-300"
                    >
                        Chat on WhatsApp
                    </button>
                    <br>


                    </br>
                </div>
            </div>
        </div>
    
    );
    
};

export default Division2;