import React from 'react';

const Division2 = () => {
    const publicUrl = process.env.PUBLIC_URL || "";

    return (
        <div style={{ fontFamily: "'Poppins', sans-serif" }}>
            <div
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/blog/astrologyroadmap/image1.png)`,
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
                    fontFamily: "'Poppins', sans-serif"
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
                        fontFamily: "'Poppins', sans-serif"
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
                        Astrology Road Map
                    </h1>
                </div>
            </div>


            <div
                style={{
                    background: "linear-gradient(to bottom,#76D4FF )",
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
    color: "#003E5B"  // Added color here
  }}
>
Astrology Blog Series: Roadmap to Mastery (Tamil-English)

</h1>



<div
  style={{
    background: "#76D4FF", // blue background
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
        color: "#003E5B", // updated color
        fontWeight: 700,
        fontSize: "3rem", // 5xl
        marginBottom: "1rem"
      }}
    >
      Blog 1: Introduction to Vedic Astrology (ஜோதிடம்)
    </h2>
    <p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
      <strong>Title:</strong> “ஜோதித்தின் ஆரம்பம்: What is Vedic Astrology & Why is it Powerful?”
    </p>
    <p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
      <strong>Topics:</strong>
    </p>

    <ul style={{ fontSize: "1.875rem", marginLeft: "1.5rem", listStyleType: "disc" }}>
      <li>Origin and uniqueness of Vedic astrology</li>
      <li>Difference between Vedic & Western astrology</li>
      <li>Importance of astrology in daily life</li>
    </ul>
  </div>

  {/* Image Section */}
  <img
    src={publicUrl + "assets/img/blog/astrologyroadmap/image2.png"} // update with correct path to your new image
    alt="Vedic Astrology Overview"
    style={{
      width: "28%",
      maxWidth: "700px",
      height: "auto",
      display: "block",
      margin: "0 auto",
      background: "none",
      marginTop: "3rem" // Adjust this value as needed for perfect alignment
    }}
  />
</div>

<br></br>



<div
  style={{
    background: "#76D4FF", // blue background
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
        color: "#003E5B", // same heading color as before
        fontWeight: 700,
        fontSize: "3rem", // 5xl
        marginBottom: "1rem"
      }}
    >
      Blog 2: Know Your Cosmic Influencers – Planets & Rasis
    </h2>
    <p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
      <strong>Title:</strong> “நவகிரகங்கள் & ராசிகள்: Meet Your Celestial Influencers”
    </p>
    <p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
      <strong>Topics:</strong>
    </p>

    <ul style={{ fontSize: "1.875rem", marginLeft: "1.5rem", listStyleType: "disc" }}>
      <li>Introduction to 9 planets (with Tamil names)</li>
      <li>12 zodiac signs and their characteristics</li>
      <li>Sun = Soul, Moon = Mind – meanings explained</li>
    </ul>
  </div>

  {/* Image Section */}
  <img
    src={publicUrl + "assets/img/blog/astrologyroadmap/image3.png"} // update to correct image path
    alt="Rasi Chart"
    style={{
      width: "33%",
      maxWidth: "700px",
      height: "auto",
      display: "block",
      margin: "0 auto",
      background: "none",
      marginTop: "6rem" // same alignment
    }}
  />
</div>


<br></br>


<div
  style={{
    background: "#76D4FF", // blue background
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
        color: "#003E5B", // heading color
        fontWeight: 700,
        fontSize: "3rem", // 5xl
        marginBottom: "1rem"
      }}
    >
      Blog 3: Unlocking the 12 Houses (பாவங்கள்)
    </h2>
    <p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
      <strong>Title:</strong> “ஜாதகத்தின் 12 பாவங்கள்: What Each House Reveals”
    </p>
    <p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
      <strong>Topics:</strong>
    </p>

    <ul style={{ fontSize: "1.875rem", marginLeft: "1.5rem", listStyleType: "disc" }}>
      <li>What each house represents</li>
      <li>Real-life meanings (1st house = body, 10th = job)</li>
      <li>Importance of house-lordship</li>
    </ul>
  </div>

  {/* Image Section */}
  <img
    src={publicUrl + "assets/img/blog/astrologyroadmap/image4.png"} // update with actual image path
    alt="12 Houses of the Birth Chart"
    style={{
      width: "28%",
      maxWidth: "700px",
      height: "auto",
      display: "block",
      margin: "0 auto",
      background: "none",
      marginTop: "2rem" // align with content
    }}
  />
</div>


<br></br>



<div
  style={{
    background: "#76D4FF", // blue background
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
        color: "#003E5B", // heading color
        fontWeight: 700,
        fontSize: "3rem", // 5xl
        marginBottom: "1rem"
      }}
    >
      Blog 4: Basic Chart Interpretation Formula
    </h2>
    <p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
      <strong>Title:</strong> “ராசி + பாவம் + கிரகம் = ஜோதிட நுட்பம்”
    </p>
    <p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
      <strong>Topics:</strong>
    </p>

    <ul style={{ fontSize: "1.875rem", marginLeft: "1.5rem", listStyleType: "disc" }}>
      <li>How to combine sign, house & planet</li>
      <li>Examples like Mars in 10th = career courage</li>
      <li>Friendly vs enemy sign logic</li>
    </ul>
  </div>

  {/* Image Section */}
  <img
    src={publicUrl + "assets/img/blog/astrologyroadmap/image5.png"} // updated image path
    alt="Basic Chart Interpretation Formula"
    style={{
      width: "30%",
      maxWidth: "700px",
      height: "auto",
      display: "block",
      margin: "0 auto",
      background: "none",
      marginTop: "5rem" // align with content
    }}
  />
</div>

<br></br>

<div
  style={{
    background: "#76D4FF", // blue background
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
        color: "#003E5B", // heading color
        fontWeight: 700,
        fontSize: "3rem", // 5xl
        marginBottom: "1rem"
      }}
    >
      Blog 5: Understanding Planetary Strength & Yogas
    </h2>
    <p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
      <strong>Title:</strong> “உச்சம், நீச்சம் & யோகங்கள் Explained”
    </p>
    <p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
      <strong>Topics:</strong>
    </p>

    <ul style={{ fontSize: "1.875rem", marginLeft: "1.5rem", listStyleType: "disc" }}>
      <li>Exalted/Debilitated planets</li>
      <li>Important Yogas: Raja Yoga, Dhana Yoga</li>
      <li>Conjunctions, aspects (Drishti) simplified</li>
    </ul>
  </div>

  {/* Image Section */}
  <img
    src={publicUrl + "assets/img/blog/astrologyroadmap/image6.png"} // updated image path
    alt="Planetary Strength and Yogas"
    style={{
      width: "29%",
      maxWidth: "700px",
      height: "auto",
      display: "block",
      margin: "0 auto",
      background: "none",
      marginTop: "3rem" // align with content
    }}
  />
</div>

<br></br>

<div
  style={{
    background: "#76D4FF", // blue background
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
        color: "#003E5B", // heading color
        fontWeight: 700,
        fontSize: "3rem", // 5xl
        marginBottom: "1rem"
      }}
    >
      Blog 6: Mastering the Dasha System (தசாபலம்)
    </h2>
    <p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
      <strong>Title:</strong> “விம்ஶோத்தரி தசை: Time Periods That Shape Life”
    </p>
    <p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
      <strong>Topics:</strong>
    </p>

    <ul style={{ fontSize: "1.875rem", marginLeft: "1.5rem", listStyleType: "disc" }}>
      <li>What is Dasha?</li>
      <li>Mahadasha & Antardasha effects</li>
      <li>Life events and Dasha match</li>
    </ul>
  </div>

  {/* Image Section */}
  <img
    src={publicUrl + "assets/img/blog/astrologyroadmap/image.png"} // updated image path
    alt="Mastering the Dasha System"
    style={{
      width: "30%",
      maxWidth: "700px",
      height: "auto",
      display: "block",
      margin: "0 auto",
      background: "none",
      marginTop: "4rem" // align with content
    }}
  />
</div>
<br></br>
<div
  style={{
    background: "#76D4FF", // blue background
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
        color: "#003E5B",
        fontWeight: 700,
        fontSize: "3rem",
        marginBottom: "1rem"
      }}
    >
      Blog 7: Dive into Divisional Charts (Varga Charts)
    </h2>
    <p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
      <strong>Title:</strong> “D9, D10 & More: ஜாதகத்தின் ரகசியமான பகுதி”
    </p>
    <p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
      <strong>Topics:</strong>
    </p>

    <ul style={{ fontSize: "1.875rem", marginLeft: "1.5rem", listStyleType: "disc" }}>
      <li>D1, D9, D10 and what they mean</li>
      <li>How Navamsa refines marriage prediction</li>
      <li>Why use Varga charts in serious readings</li>
    </ul>
  </div>

  {/* Image Section */}
  <img
    src={publicUrl + "assets/img/blog/astrologyroadmap/image7.png"} // updated image path
    alt="Divisional Charts (Varga Charts)"
    style={{
      width: "28%",
      maxWidth: "700px",
      height: "auto",
      display: "block",
      margin: "0 auto",
      background: "none",
      marginTop: "3rem"
    }}
  />
</div>

<br></br>


<div
  style={{
    background: "#76D4FF", // blue background
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
        color: "#003E5B",
        fontWeight: 700,
        fontSize: "3rem",
        marginBottom: "1rem"
      }}
    >
      Blog 8: Special Doshas & Remedies
    </h2>
    <p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
      <strong>Title:</strong> “காலசர்ப்பம் முதல் சனி சடேசாதி வரை – பரிகாரம் Included”
    </p>
    <p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
      <strong>Topics:</strong>
    </p>

    <ul style={{ fontSize: "1.875rem", marginLeft: "1.5rem", listStyleType: "disc" }}>
      <li>Kala Sarpa, Manglik, Sade Sati</li>
      <li>Pariharam methods (temples, mantras, rituals)</li>
      <li>How to analyze doshas in charts</li>
    </ul>
  </div>

  {/* Image Section */}
  <img
    src={publicUrl + "assets/img/blog/astrologyroadmap/image8.png"} // updated image path
    alt="Special Doshas & Remedies"
    style={{
      width: "28%",
      maxWidth: "700px",
      height: "auto",
      display: "block",
      margin: "0 auto",
      background: "none",
      marginTop: "3rem"
    }}
  />
</div>

<br></br>
<div
  style={{
    background: "#76D4FF", // blue background
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
        color: "#003E5B",
        fontWeight: 700,
        fontSize: "3rem",
        marginBottom: "1rem"
      }}
    >
      Blog 9: Advanced Tools in Astrology
    </h2>
    <p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
      <strong>Title:</strong> “முஹூர்த்தம், குணமாலை, மற்றும் Transit Future Prediction”
    </p>
    <p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
      <strong>Topics:</strong>
    </p>

    <ul style={{ fontSize: "1.875rem", marginLeft: "1.5rem", listStyleType: "disc" }}>
      <li>Kundali Matching (Porutham types)</li>
      <li>Muhurtam – choosing good times</li>
      <li>Gochar (transit) and Prashna basics</li>
    </ul>
  </div>

  {/* Image Section */}
  <img
    src={publicUrl + "assets/img/blog/astrologyroadmap/image9.png"} // updated image path
    alt="Advanced Tools in Astrology"
    style={{
      width: "28%",
      maxWidth: "700px",
      height: "auto",
      display: "block",
      margin: "0 auto",
      background: "none",
      marginTop: "3rem"
    }}
  />
</div>
<br></br>
<div
  style={{
    background: "#76D4FF", // blue background
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
        color: "#003E5B",
        fontWeight: 700,
        fontSize: "3rem",
        marginBottom: "1rem"
      }}
    >
      Blog 10: Practical Astrology – Case Studies & Self Tracking
    </h2>
    <p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
      <strong>Title:</strong> “வாழ்க்கையில் ஜோதிடம்: Case Studies You Can Try”
    </p>
    <p style={{ fontSize: "1.875rem", marginBottom: "0.5rem", color: "#000" }}>
      <strong>Topics:</strong>
    </p>

    <ul style={{ fontSize: "1.875rem", marginLeft: "1.5rem", listStyleType: "disc" }}>
      <li>Read celebrity charts</li>
      <li>Match your life events with Dasha</li>
      <li>Keep your own astrology journal</li>
    </ul>
  </div>

  {/* Image Section */}
  <img
    src={publicUrl + "assets/img/blog/astrologyroadmap/image10.png"} // updated image path
    alt="Case Studies and Self Tracking"
    style={{
      width: "28%",
      maxWidth: "700px",
      height: "auto",
      display: "block",
      margin: "0 auto",
      background: "none",
      marginTop: "3rem"
    }}
  />
</div>













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