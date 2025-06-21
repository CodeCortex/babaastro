import React from 'react';

const Division2 = () => {
    const publicUrl = process.env.PUBLIC_URL || "";

    return (
        <div>
     <div style={{ fontFamily: "'Poppins', sans-serif" }}>
  <div style={{
    backgroundImage: `url(${publicUrl}/assets/img/blog/planetstrength1.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
    height: '125vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start', // Align to top
    paddingTop: '25vh', // Adjust this value to position between top and center
    backgroundColor: '#B4EAFF',
    margin: 0,
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
        <br></br>
        <div></div>

      Planet strength <br /> 
    </h1>
  </div>
</div>
            <div
                style={{
                    background: "linear-gradient(to bottom,#B4EAFF)"
                }}
                className=" w-full pt-20 pb-100 flex flex-col justify-center items-center"
            >
               <h1 
    className="text-5xl font-bold mb-8 text-left text-[#005070]"
    style={{
        textShadow: "2px 2px 4px rgba(0,0,0,0)",
        lineHeight: "1.3",
        fontWeight: 700
    }}
>
    Planetary Strength in Astrology (Shadbala)
</h1>
                <p className="mb-8 text-3xl leading-relaxed text-black px-8 md:px-12 lg:px-16 text-justify" style={{ fontWeight: 400 }}>
                    In Vedic astrology, simply having a planet in a chart isn't enough. What truly matters is how strong or weak that planet is — because its strength determines the results it will deliver in your life.
                </p>

                
                <br />
                <br />










 <h1 
                    className="text-5xl font-bold mb-8 text-left text-[#005070]"
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
                    Why Planetary Strength (Bala) Matters
                    <br></br>
                    <br />
                    <p className="text-2xl text-black" style={{ fontWeight: 400 }}>
                        <strong>• A strong planet brings success in its domain:</strong><br />
                                  Example: Strong Venus = happy relationships, creativity, luxury.
                                  <br/>
                        <strong>• A weak or afflicted planet may:<br />
                                ▪ Delay your goals<br />
                                ▪ Cause struggles or blockages<br />
                                ▪ Produce opposite or twisted results<br /></strong>
                    </p>
                    <br></br>
                  <p className="font-poppins text-2xl text-black">
    Planetary strength influences yogas, dashas (timing), and your overall life journey.
</p>
                </h1>            
                

<br></br>
                <h1 
                    className="text-5xl font-bold mb-8 text-left text-[#005070]"
                    style={{
                        paddingLeft: "3rem",
                        paddingRight: "5rem",
                        lineHeight: "1.3",
                        marginRight: "0rem",
                        marginLeft: "0",
                        width: "calc(100% - 2rem)",
                        fontWeight: 700
                    }}
                ><div style={{ marginBottom: '1.5rem' }}>
                     The 6 Types of Planetary Strengths (Shadbala / ஷட்பல)
                                <br></br>
                            
                            </div>
                  <p className="font-poppins text-2xl text-black">
   In Sanskrit, “Shadbala” means "Six Strengths." These six types offer a comprehensive way to assess how powerful a planet really is.
</p>
                </h1>

    

      <div className="mb-8">
  <div className="overflow-x-auto my-4 mx-auto" style={{ width: '100%', maxWidth: '2000px' }}>
    <table
      className="w-full table-auto border-2 border-black text-lg"
      style={{ minWidth: '1400px', fontFamily: "'Poppins', sans-serif" }}
    >
      <thead className="bg-white">
        <tr className="border-b-2 border-black">
          <th className="px-4 py-3 border-r border-black text-center font-semibold" style={{ fontWeight: 700 }}>
            Type
          </th>
          <th className="px-4 py-3 border-r border-black text-center font-semibold" style={{ fontWeight: 700 }}>
            Tamil Name
          </th>
          <th className="px-4 py-3 text-center font-semibold" style={{ fontWeight: 700 }}>
            What It Means
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {[
          ["1. Sthana Bala", "ஸ்தான பலம்", "Positional strength (Exaltation, Own Sign, etc.)"],
          ["2. Dik Bala", "திசை பலம்", "Directional strength — planets strong in certain houses"],
          ["3. Kala Bala", "கால பலம்", "Time-based strength — depends on day/night, age, etc."],
          ["4. Chesta Bala", "சாஸ்த பலம்", "Motion-related — whether direct or retrograde"],
          ["5. Naisargika Bala", "இயற்கை பலம்", "Natural strength — based on the planet’s nature"],
          ["6. Drik Bala", "த்ரிக பலம்", "Aspect strength — positive or negative planetary aspects"],
        ].map(([type, tamil, meaning], index) => (
          <tr key={index} className="border-b border-black even:bg-gray-100">
            <td className="px-4 py-3 border-r border-black text-center" style={{ fontWeight: 500 }}>{type}</td>
            <td className="px-4 py-3 border-r border-black text-center" style={{ fontWeight: 500 }}>{tamil}</td>
            <td className="px-4 py-3 text-center" style={{ fontWeight: 500 }}>{meaning}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
  <p className="mb-10 text-3xl text-black text-left px-8 md:px-12 lg:px-16" style={{ fontWeight: 400, lineHeight: '1.6' }}>
    All these combine into a Shadbala Score. A planet with a score ≥ 1.0 Rupas is considered strong
</p>

<br></br>
             

                <h1 
                    className="text-5xl font-bold mb-8 text-left text-[#005070]"
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
                    General Rules for Planetary Strength
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
          Condition
        </th>
        <th 
          className="px-6 py-4 text-center font-semibold text-lg" 
          style={{ fontWeight: 700, width: '50%' }}
        >
          Effect
        </th>
      </tr>
    </thead>
    <tbody className="bg-white">
      {[
        ["Exalted (உச்சம்)", "Very strong"],
        ["Own Sign (சொந்தராசி/மூலத்ரிகோண)", "Strong"],
        ["Friendly Sign", "Moderately strong"],
        ["Debilitated (நீச்சம்)", "Very weak"],
        ["Combust (தீக்கிழும் நிலை)", "Weak (close to Sun)"],
        ["Retrograde (வக்கிரம்)", "Can enhance or distort strength"],
        ["In Enemy Sign", "Weak"],
        ["In Dushtana (6, 8, 12)", "Challenged, limited results"]
      ].map(([condition, effect], index) => (
        <tr key={index} className="border-b border-black even:bg-gray-50">
          <td 
            className="px-6 py-4 text-center" 
            style={{ 
              fontWeight: 500,
              width: '50%',
              borderRight: '2px solid black'
            }}
          >
            {condition}
          </td>
          <td 
            className="px-6 py-4 text-center" 
            style={{ fontWeight: 500, width: '50%' }}
          >
            {effect}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


<br></br>

 <h1 
                    className="text-5xl font-bold mb-8 text-left text-[#005070]"
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
                    Real-Life Examples
<br></br>
                    <br />
                    <p className="text-2xl text-black" style={{ fontWeight: 400 }}>
                        <strong>• Moon in Taurus </strong>= Exalted → Emotionally stable and secure<br/>
                                <strong>▪ Venus in Virgo</strong>  = Debilitated → Struggles in love, self-worth<br/>
                             <strong>   ▪ Mars in 10th House</strong>  = Directional strength → Excellent for career and leadership<br/>
                    </p>
                    <br></br>
                </h1> 



 <h1 
                    className="text-5xl font-bold mb-8 text-left text-[#005070]"
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
                   How to Use This in Chart Reading
<br></br>
                    <br />
                    <p className="text-2xl text-black" style={{ fontWeight: 400 }}>
                        <strong>1.Check Rasi (Sign) strength –</strong> Is it exalted, own sign, or debilitated?<br/>
                                <strong>2.Note planetary aspects –</strong>  Who’s influencing it? Benefics or malefics?<br/>
                             <strong>3.Use Shadbala –</strong> For deeper insights (available in advanced tools)<br/>
                             <strong>4.Time Matters – –</strong> Even a strong planet won't help if its Dasha isn't active<br/>
                    </p>
                </h1> 







                <br />

                <h1 
                    className="text-5xl font-bold mb-8 text-left text-[#005070]"
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
                    Bonus Tip:
                    <br />
                  <p className="text-4xl font-semibold" style={{ color: '#C84346', fontWeight: 600 }}>
  <br />
  "A weak planet can become strong through remedies, devotion, and time (dasha). Nothing is fixed forever."
</p>

                </h1>

                <br />

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