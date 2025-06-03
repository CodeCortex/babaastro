import React from "react";

const App = () => {
  // Inline styles as JavaScript objects
  const mainContainerStyle = {
    display: "flex",
    height: "100vh", // Full height of the viewport
    overflow: "hidden",
    
  };

  const leftRightFixedStyle = {
    width: "20%", // Adjust width as needed
    backgroundColor: "#f4f4f4",
    position: "relative",
  };

  const scrollableContentStyle = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    overflowY: "auto", // Enable vertical scrolling
    padding: "1rem",
  };

  const centerContentStyle = {
    flex: 1, // Take remaining space
    backgroundColor: "#fff",
    padding: "1rem",
    overflowY: "auto", // Optional if main content can scroll
  };
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
    flexWrap: 'wrap',
	
};

const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    width: '300px',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
};

const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '5px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
};

const buttonStyle = {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#f67c22',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
};

  return (
    <div style={mainContainerStyle }>
      <div style={leftRightFixedStyle}>
        <div style={scrollableContentStyle}>
          {/* Left Content */}
          
          <p>Consepts Overview</p>
          <p>Vedic Astrology Overview</p>
          <p>Astrology Roadmap Introduction</p>
          <p>Nadi Astrology</p>
          <p>Birthtime Rectification Research</p>
          <p>Astrology Books</p>
          <p>Vastu Shastra</p>
          <p>Palmistry</p>
          <p>Nimitta & Shakun</p>
          <p>Lizard Astrology</p>
          <p>Dream Astrology</p>
          <p>Parihara & Renedies</p>
          <p>Signs in Astrology</p>
          <p>Stars in Astrology</p>
          <p>Planets in Astrology</p>
          <p>Ascendants in Astrology</p>
          <p>Houses in Astrology</p>
          <p>Yogas & Doshas</p>
          <p>Divisional Charts</p>
          <p>Planets Strength</p>
          <p>Dasha Systems</p>
          <p>Fast Horoscope Reading</p>
          <p>Fast Horoscope Reading 2 </p>
          <p>How to Read Horoscope</p>
          <p>Kundali Matching</p>
          <p>Muhurtha</p>

        </div>
      </div>
      <div style={centerContentStyle}>
      <div className="post-area bg-sky pd-top-50 pd-bottom-50">
        <div className="container">
          <div className="section-title" style={{ textAlign: "center" }}>
            <h6 className="title">Our Latest Events and Pictures</h6>
          </div>
          <div className="post-slider owl-carousel">
            <div className="item">
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                }}
              >
                <img src="assets/img/post/list/1.png"></img>
                <img src="assets/img/post/list/1.png"></img>
                <img src="assets/img/post/list/1.png"></img>
                {/* <img src={publicUrl + "assets/img/post/list/1.png"} alt="img" />
                <img src={publicUrl + "assets/img/post/list/1.png"} alt="img" />
                <img src={publicUrl + "assets/img/post/list/1.png"} alt="img" /> */}
              </div>
            </div>

            <div
              style={{ display: "flex", gap: "20px", justifyContent: "center" }}
            >
               <img src="assets/img/post/list/1.png"></img>
                <img src="assets/img/post/list/1.png"></img>
                <img src="assets/img/post/list/1.png"></img>
              {/* <img src={publicUrl + "assets/img/post/list/1.png"} alt="img" />
              <img src={publicUrl + "assets/img/post/list/1.png"} alt="img" />
              <img src={publicUrl + "assets/img/post/list/1.png"} alt="img" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="">
                <div className="section-title" style={{ textAlign: 'center' }}>
                    <h6 className="title">Astrological services for accurate answers and better future</h6>
                </div>

                <div style={containerStyle}>
                    {/* Kundli / Birth Chart */}
                    <div style={cardStyle}>
                        <h6 style={{ marginBottom: '20px' }}>Finance</h6>
						<p>Are money matters a reason for the dark-circles under your eyes?</p>
                        <input type="text" placeholder="Name" style={inputStyle} />
                       
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <input type="text" placeholder="23" style={{ ...inputStyle, width: '30%' }} />
                            <input type="text" placeholder="1" style={{ ...inputStyle, width: '30%' }} />
                            <input type="text" placeholder="2025" style={{ ...inputStyle, width: '30%' }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                            <input type="text" placeholder="12" style={{ ...inputStyle, width: '30%' }} />
                            <input type="text" placeholder="13" style={{ ...inputStyle, width: '30%' }} />
                            <input type="text" placeholder="55" style={{ ...inputStyle, width: '30%' }} />
                        </div>
                        <input type="text" placeholder="Birth place" style={{ ...inputStyle, marginTop: '10px' }} />
                        <button style={buttonStyle}>CHECK NOW</button>
                    </div>

                    {/* Kundli Matching */}
                    <div style={cardStyle}>
                        <h6 style={{ marginBottom: '20px' }}>Career/Job</h6>
						<p>Worried about your Career? Don't know what is ?</p>
                        <input type="text" placeholder="Name" style={inputStyle} />
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <input type="text" placeholder="23" style={{ ...inputStyle, width: '30%' }} />
                            <input type="text" placeholder="1" style={{ ...inputStyle, width: '30%' }} />
                            <input type="text" placeholder="2025" style={{ ...inputStyle, width: '30%' }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                            <input type="text" placeholder="12" style={{ ...inputStyle, width: '30%' }} />
                            <input type="text" placeholder="13" style={{ ...inputStyle, width: '30%' }} />
                            <input type="text" placeholder="55" style={{ ...inputStyle, width: '30%' }} />
                        </div>
                        <input type="text" placeholder="Birth place" style={{ ...inputStyle, marginTop: '10px' }} />
                        
                        <button style={buttonStyle}>CHECK NOW</button>
                    </div>
                </div>
				<br></br><br></br><br></br>

                <style>
                    {`
                        @media (max-width: 768px) {
                            .container {
                                flex-direction: column;
                                gap: 10px;
                            }
                            .card {
                                width: 100%;
                            }
                        }
                    `}
                </style>
            </div>
      </div>
       
      <div style={leftRightFixedStyle}>
        <div style={scrollableContentStyle}>
          {/* Right Content */}
          <p>Right fixed content goes here. Add more content to test the scroll.</p>
          <p>Content 1</p>
          <p>Content 2</p>
          <p>Content 3</p>
          <p>Content 4</p>
        </div>
      </div>
    </div>
  );
};

export default App;
