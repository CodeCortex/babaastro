import React from 'react';

const Division2 = () => {
    const publicUrl = process.env.PUBLIC_URL || "";

    return (
        <div style={{ fontFamily: "'Poppins', sans-serif" }}>
            <div style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/blog/vedicastrologyoverview/image1.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#EABC00',
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
                   vedic astrology <br /> overview 
                </h1>
            </div>

            <div
                style={{
                    background: "linear-gradient(to bottom,#EABC00 )",
                    fontFamily: "'Poppins', sans-serif"
                }}
                className="w-full pt-20 pb-100 flex flex-col justify-center items-center"
            >



               <h1
  className="text-5xl mb-8 text-left"
  style={{
    paddingLeft: "3rem",
    paddingRight: "5rem",
    lineHeight: "1.3",
    marginRight: "0rem",
    marginLeft: "0",
    width: "calc(100% - 2rem)",
    fontWeight: 700,
    color: "#6C5600"  // Added color here
  }}
>
  Vedic Astrology (ஜோதிட ஶாஸ்திரம்): A Complete Beginner's Guide
</h1>


                <p className="mb-8 text-3xl leading-relaxed text-black px-8 md:px-12 lg:px-16 text-justify" style={{ fontWeight: 400 }}>
                    Vedic Astrology, also known as Jyotish Shastra, is the ancient science of light and cosmic order. It’s not just about predicting your future — it’s about understanding your karma, purpose, and path in this life.
                   <br></br> Let’s break it down step-by-step in simple terms!
                </p>

                <div>
                    <img 
                        src={publicUrl + "assets/img/blog/vedicastrologyoverview/image2.png"} 
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
  className="text-5xl mb-8 text-left"
  style={{
    paddingLeft: "3rem",
    paddingRight: "5rem",
    lineHeight: "1.3",
    marginRight: "0rem",
    marginLeft: "0",
    width: "calc(100% - 2rem)",
    fontWeight: 700,
    color: "#6C5600"  // Added color here
  }}
>
 What Is Vedic Astrology?
</h1>


            <p className="mb-8 text-3xl leading-relaxed text-black px-8 md:px-12 lg:px-16 text-justify" style={{ fontWeight: 400 }}>
  Vedic Astrology is the traditional Hindu system of astrology. Unlike Western astrology, which uses the tropical zodiac, Vedic astrology uses the sidereal zodiac, which is aligned with the actual constellations in the sky.
<br/>
  <strong>Origin:</strong>
  <ul style={{ marginLeft: "4rem", listStyleType: "disc" }}>
    <li>Rooted in the Vedas, over 5,000 years old</li>
    <li>Developed by sages like Parashara, Bhrigu, and Jaimini</li>
    <li>Written in Sanskrit</li>
    <li>Deeply spiritual and karmic in approach</li>
  </ul>
</p>




<br></br>

  <h1
  className="text-5xl mb-8 text-left"
  style={{
    paddingLeft: "3rem",
    paddingRight: "5rem",
    lineHeight: "1.3",
    marginRight: "0rem",
    marginLeft: "0",
    width: "calc(100% - 2rem)",
    fontWeight: 700,
    color: "#6C5600"  // Added color here
  }}
>
Core Concepts of Vedic Astrology

       <p className="mb- text-3xl leading-relaxed text-black px-1 md:px-12 lg:px-16 text-justify" style={{ fontWeight: 400 }}>
 Here are the 7 essential building blocks of Jyotish Shastra:

</p>

</h1>





<div
  style={{
    background: "#EABC00", // yellow background
    padding: "0rem 3rem",
    borderRadius: "0.5rem",
    display: "flex",
    alignItems: "flex-start",
    gap: "2rem",
    margin: "1rem"
  }}
>
  {/* Text Section */}
  <div style={{ flex: 1 }}>
    <h2
      style={{
        color: "#6C5600",
        fontWeight: 700,
        fontSize: "3rem", // 5xl
        marginBottom: "1rem"
      }}
    >
      1. Rāsi Chakra (Zodiac Signs)
    </h2>
   <p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
  There are <strong>12 zodiac signs</strong> from <strong>Mesha (Aries) to Meena (Pisces)</strong>.<br />
  Each sign has its own energy and governs certain traits and life areas.
</p>
<p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
  <strong>Example:</strong>
</p>

    <ul style={{ fontSize: "1.875rem", marginLeft: "1.5rem", listStyleType: "disc" }}> {/* 3xl */}
    
      <li>
        <strong>Mesha (Aries)</strong> – Bold, energetic, pioneering
      </li>
      <li>
        <strong>Vrishabha (Taurus)</strong> – Stable, sensual, material-loving
      </li>
    </ul>
  </div>

  {/* Image Section */}
  <img
  src={publicUrl + "assets/img/blog/vedicastrologyoverview/image3.png"}
  alt="Rasi Chakra Zodiac Signs"
  style={{
    width: "22%",
    maxWidth: "700px",
    height: "auto",
    display: "block",
    margin: "0 auto",
    background: "none",
    marginTop: "4rem" // Adjust this value as needed for perfect alignment
  }}
/>

</div>





<br></br>



<div
  style={{
    background: "#EABC00", // yellow background
    padding: "0rem 3rem",
    borderRadius: "0.5rem",
    display: "flex",
    alignItems: "flex-start",
    gap: "2rem",
    margin: "1rem"
  }}
>
  {/* Text Section */}
  <div style={{ flex: 1 }}>
    <h2
      style={{
        color: "#6C5600",
        fontWeight: 700,
        fontSize: "3rem", // 5xl
        marginBottom: "1rem"
      }}
    >
      2. Nakshatras (நட்சத்திரங்கள்)
    </h2>
   <p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
  There are <strong>27 Nakshatras (lunar mansions)</strong>, which divide the zodiac into smaller sections.
 Each Nakshatra has a ruling deity, unique symbols, and <strong> karmic influence</strong>.
</p>
<p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
  <strong>Example:</strong>
</p>

    <ul style={{ fontSize: "1.875rem", marginLeft: "1.5rem", listStyleType: "disc" }}> {/* 3xl */}
  <li>
        <strong>Ashwini </strong> –  Quick, healer energy
      </li>
      <li>
        <strong>Bharani </strong> –  Duty, transformation
      </li>
      <li>
        <strong>Rohini</strong> –  Beauty, attraction
      </li>

    </ul>
  </div>

  {/* Image Section */}
  <img
  src={publicUrl + "assets/img/blog/vedicastrologyoverview/image4.png"}
  alt="Rasi Chakra Zodiac Signs"
  style={{
    width: "22%",
    maxWidth: "700px",
    height: "auto",
    display: "block",
    margin: "0 auto",
    background: "none",
    marginTop: "5rem" // Adjust this value as needed for perfect alignment
  }}
/>

</div>

<br></br>
<div
  style={{
    background: "#EABC00", // yellow background
    padding: "0rem 3rem",
    borderRadius: "0.5rem",
    display: "flex",
    alignItems: "flex-start",
    gap: "2rem",
    margin: "1rem"
  }}
>
  {/* Text Section */}
  <div style={{ flex: 1 }}>
    <h2
      style={{
        color: "#6C5600",
        fontWeight: 700,
        fontSize: "3rem", // 5xl
        marginBottom: "1rem"
      }}
    >
      3. Lagna (லக்னம்) – Ascendant Sign
    </h2>
   <p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
  This is the zodiac sign rising on the eastern horizon at your birth time.<br/>
It sets the <strong>blueprint for your birth chart</strong> and affects your:
</p>
<p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
  <strong>Example:</strong>
</p>

    <ul style={{ fontSize: "1.875rem", marginLeft: "1.5rem", listStyleType: "disc" }}> {/* 3xl */}
      <li>
        Physical body
      </li>
      <li>
        Personality
      </li>
      <li>
       
          Life direction
      </li>
    </ul>
 <p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
  <strong>Lagna is just as important as your Rāsi.</strong>
</p>
  </div>

  {/* Image Section */}
  <img
  src={publicUrl + "assets/img/blog/vedicastrologyoverview/image5.png"}
  alt="Rasi Chakra Zodiac Signs"
  style={{
    width: "22%",
    maxWidth: "700px",
    height: "auto",
    display: "block",
    margin: "0 auto",
    background: "none",
    marginTop: "5rem" // Adjust this value as needed for perfect alignment
  }}
/>

</div>
  





<br></br>


                 <h1
  className="text-5xl mb-8 text-left"
  style={{
    paddingLeft: "3rem",
    paddingRight: "5rem",
    lineHeight: "1.3",
    marginRight: "0rem",
    marginLeft: "0",
    width: "calc(100% - 2rem)",
    fontWeight: 700,
    color: "#6C5600"  // Added color here
  }}
>
4. Bhavas (பாவங்கள்) – Houses

       <p className="mb- text-3xl leading-relaxed text-black px-1 md:px-12 lg:px-16 text-justify" style={{ fontWeight: 400 }}>
The chart has 12 houses, and each house represents a specific area of life:

</p>




<div className="mb-8">
  <div className="overflow-x-auto my-4 mx-auto" style={{ width: '100%', maxWidth: '2000px' }}>
    <table
      className="w-full table-auto border-2 border-black text-lg text-black"
      style={{ minWidth: '768px', fontFamily: "'Poppins', sans-serif" }}
    >
      <thead className="bg-white">
        <tr className="border-b-2 border-black">
          <th className="px-4 py-3 border-r border-black text-left text-black" style={{ fontWeight: 700 }}>
            House
          </th>
          <th className="px-4 py-3 text-left text-black" style={{ fontWeight: 700 }}>
            Area of Life
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {[
          ["1st", "Self, health, personality"],
          ["2nd", "Wealth, family, speech"],
          ["3rd", "Siblings, courage"],
          ["4th", "Mother, home, emotions"],
          ["5th", "Love, children, creativity"],
          ["6th", "Enemies, diseases, debts"],
          ["7th", "Marriage, partnerships"],
          ["8th", "Transformation, longevity"],
          ["9th", "Luck, higher knowledge"],
          ["10th", "Career, fame"],
          ["11th", "Gains, friends"],
          ["12th", "Moksha, loss, spirituality"]
        ].map(([house, area], index) => (
          <tr key={index} className="border-b border-black">
            <td className="px-4 py-3 border-r border-black text-left text-black" style={{ fontWeight: 400 }}>
              {house}
            </td>
            <td className="px-4 py-3 text-left text-black" style={{ fontWeight: 400 }}>
              {area}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

</h1>

<br></br>



                 <h1
  className="text-5xl mb-8 text-left"
  style={{
    paddingLeft: "3rem",
    paddingRight: "5rem",
    lineHeight: "1.3",
    marginRight: "0rem",
    marginLeft: "0",
    width: "calc(100% - 2rem)",
    fontWeight: 700,
    color: "#6C5600"  // Added color here
  }}
>
5. Grahas (கிரகங்கள்) – Planets

       <p className="mb- text-3xl leading-relaxed text-black px-1 md:px-12 lg:px-16 text-justify" style={{ fontWeight: 400 }}>
Vedic astrology considers 9 Grahas:

</p>




{/* Planet Role Table (Image Reference Style) */}
<div className="mb-8">
  <div className="overflow-x-auto my-4 mx-auto" style={{ width: '100%', maxWidth: '2000px' }}>
    <table
      className="w-full table-auto border-2 border-black text-lg text-black"
      style={{ minWidth: '768px', fontFamily: "'Poppins', sans-serif" }}
    >
      <thead className="bg-white">
        <tr className="border-b-2 border-black">
          <th className="px-4 py-3 border-r border-black text-left text-black" style={{ fontWeight: 700 }}>
            Planet
          </th>
          <th className="px-4 py-3 text-left text-black" style={{ fontWeight: 700 }}>
            Role
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {[
          ["Sun", "Soul, leadership, ego"],
          ["Moon", "Emotions, mind, mother"],
          ["Mars", "Energy, courage, anger"],
          ["Mercury", "Intelligence, speech"],
          ["Jupiter", "Wisdom, children, growth"],
          ["Venus", "Love, beauty, luxury"],
          ["Saturn", "Discipline, karma, patience"],
          ["Rahu", "Obsession, illusion, future karma"],
          ["Ketu", "Detachment, spirituality, past karma"]
        ].map(([planet, role], index) => (
          <tr key={index} className="border-b border-black">
            <td className="px-4 py-3 border-r border-black text-left text-black" style={{ fontWeight: 400 }}>
              {planet}
            </td>
            <td className="px-4 py-3 text-left text-black" style={{ fontWeight: 400 }}>
              {role}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
  <p className="mb- text-3xl leading-relaxed text-black px-1 md:px-12 lg:px-16 text-justify" style={{ fontWeight: 400 }}>
These indicate when certain life events will occur.<br></br>
Example: A <strong>Jupiter Mahadasha </strong>might bring growth, wisdom, or children.

</p>


</h1>




<div
  style={{
    background: "#EABC00",          // Yellow background
    padding: "0rem 3rem",
    borderRadius: "0.5rem",
    display: "flex",
    alignItems: "flex-start",
    gap: "2rem",
    margin: "1rem"
  }}
>
  {/* Text Section */}
  <div style={{ flex: 1 }}>
    <h2
      style={{
        color: "#6C5600",
        fontWeight: 700,
        fontSize: "3rem",           // ~48px (5xl)
        marginBottom: "1rem"
      }}
    >
      6. Dasha System (தசை பரிசோதனை)
    </h2>

    <p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
      The <strong>Dasha system</strong> divides your life into <strong>planetary periods</strong>.
    </p>

    <ul style={{ fontSize: "1.875rem", marginLeft: "1.5rem", listStyleType: "disc" }}>
      <li><strong>Mahadasha</strong> – Main period of a planet</li>
      <li><strong>Antardasha</strong> – Sub-periods within it</li>
    </ul>

    <p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
      These indicate when certain life events will occur.
    </p>

    <p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
      <strong>Example:</strong> A <strong>Jupiter Mahadasha</strong> might bring growth, wisdom, or children.
    </p>
  </div>

  {/* Image Section */}
  <img
    src={publicUrl + "assets/img/blog/vedicastrologyoverview/image6.png"} // Adjusted image path
    alt="Dasha System"
    style={{
      width: "22%",
      maxWidth: "700px",
      height: "auto",
      display: "block",
      margin: "0 auto",
      background: "none",
      marginTop: "4rem"
    }}
  />
</div>




<div
  style={{
    background: "#EABC00",          // Yellow background
    padding: "0rem 3rem",
    borderRadius: "0.5rem",
    display: "flex",
    alignItems: "flex-start",
    gap: "2rem",
    margin: "1rem"
  }}
>
  {/* Text Section */}
  <div style={{ flex: 1 }}>
    <h2
      style={{
        color: "#6C5600",
        fontWeight: 700,
        fontSize: "3rem",           // ~48px (5xl)
        marginBottom: "1rem"
      }}
    >
      7. Transits (Peyarchi / Gochara)
    </h2>

    <p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
      Planets constantly <strong>move</strong> (transit) through the zodiac. These movements affect your
      day-to-day experiences and can bring both opportunities and challenges.
    </p>

    <p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
      Examples:
    </p>

    <ul style={{ fontSize: "1.875rem", marginLeft: "1.5rem", listStyleType: "disc" }}>
      <li><strong>Sani Peyarchi</strong> (Saturn Transit) – Tests, delays, karmic lessons</li>
      <li><strong>Guru Peyarchi</strong> (Jupiter Transit) – Blessings, new opportunities</li>
      <li><strong>Rahu–Ketu Peyarchi</strong> – Major karmic shifts</li>
    </ul>
  </div>

  {/* Image Section */}
  <img
    src={publicUrl + "assets/img/blog/vedicastrologyoverview/image7.png"} // Update to your path
    alt="Transit Planets"
    style={{
      width: "22%",
      maxWidth: "700px",
      height: "auto",
      display: "block",
      margin: "0 auto",
      background: "none",
      marginTop: "4rem"
    }}
  />
</div>



<br></br>








             <h1
  className="text-5xl mb-8 text-left"
  style={{
    paddingLeft: "3rem",
    paddingRight: "5rem",
    lineHeight: "1.3",
    marginRight: "0rem",
    marginLeft: "0",
    width: "calc(100% - 2rem)",
    fontWeight: 700,
    color: "#6C5600"  // Added color here
  }}
>
   Why Vedic Astrology Is Special



           <p className="mb-8 text-3xl leading-relaxed text-black px-1 md:px-2 lg:px-4 text" style={{ fontWeight: 400 }}>
  Unlike other systems, <strong>Jyotish</strong> isn’t just about prediction — it’s about <strong>transformation</strong>.
  <br/>
  <strong>Origin:</strong>
  <ul style={{ marginLeft: "4rem", listStyleType: "disc" }}>
    <li>Strong <strong>karmic and spiritual base</strong></li>
    <li>Accurate <strong>timing of events</strong></li>
    <li>Offers <strong>personalized remedies</strong></li>
    <li>Used in <strong>marriage matching, health, career, and spiritual growth</strong></li>
  </ul>
</p>


</h1>


<h1
  className="text-5xl mb-8 text-left"
  style={{
    paddingLeft: "3rem",
    paddingRight: "5rem",
    lineHeight: "1.3",
    marginRight: "0rem",
    marginLeft: "0",
    width: "calc(100% - 2rem)",
    fontWeight: 700,
    color: "#6C5600"  // Added color here
  }}
>
  Remedies in Vedic Astrology (Pariharams)

  <p className="mb-8 text-3xl leading-relaxed text-black px-1 md:px-2 lg:px-4 text" style={{ fontWeight: 400 }}>
    Vedic astrology also provides <strong>remedial solutions</strong> to overcome problems or strengthen positive energy.
    <br />
    Common Remedies:
    <ul style={{ marginLeft: "4rem", listStyleType: "disc" }}>
      <li><strong>Mantras</strong> (e.g., Om Namah Shivaya, Om Shukraya Namah)</li>
      <li><strong>Gemstone therapy</strong></li>
      <li><strong>Homams and Poojas</strong> (like Navagraha Shanti)</li>
      <li><strong>Temple visits</strong> (like Kalahasti, Thirunageswaram)</li>
      <li><strong>Fasting on specific days</strong> (e.g., Fridays for Venus, Saturdays for Saturn)</li>
    </ul>
  </p>
</h1>






















                <br></br>

              
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
                        style={{ backgroundColor: "#E90000", fontWeight: 400,width: "450px" }}
                        className="w-full max-w-[200px] border-4 border-white px-4 py-2 lg:py-4 hover:text-red-500 text-white text-lg lg:text-3xl shadow-lg hover:bg-white transition duration-300"
                    >
                        Check Now
                    </button>

                    <h1 className="text-black text-xl lg:text-5xl py-5 lg:py-12 mx-auto text-center" style={{ fontWeight: 700 }}>
                        Ask a question talk to the best astrologer
                    </h1>

                    <button
    onClick={() => window.open("https://wa.me/+919508801096", "_blank")}
    style={{ background: "#00980A", fontWeight: 400 , width: "450px"}}
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