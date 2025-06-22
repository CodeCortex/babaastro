import React from 'react';

const Dasha = () => {
  const publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <div style={{ background: "#FFD770" }}>
      <div>
        <img src={publicUrl + "assets/img/dashaimage/image1.png"} alt="img" />
      </div>
      <section style={{ padding: "24px" }}>
        <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#614600", marginBottom: "1rem" }}>Dosho System in Vedic Astrology: Unlocking the Timeline of Your Destiny</h2>
          <p style={{ color: "#000000", marginBottom: "1.5rem" }}>One of the most powerful and fascinating aspects of Vedic astrology (ஜோதிடம்) is the Dasha system — a unique method that reveals when key events will unfold in your life. Whether it's marriage, career success, health concerns, or spiritual awakening, the Dasha system helps you understand the timing of these life events.</p>

          <div>
            <img src={publicUrl + "assets/img/dashaimage/image2.png"} alt="img" />
          </div>

          <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#614600", marginBottom: "1rem" }}>What is Dasha (தசை)?</h2>
          <p style={{ color: "#000000", marginBottom: "1.5rem" }}>Dasha means "period" or "phase" — it refers to the cycle of planetary influences in a person's life. Based on your birth star (ஜனன நட்சத்திரம்) and the position of the Moon, you enter a series of planetary periods that shape your life experiences over time.</p>

          <div>
            <img src={publicUrl + "assets/img/dashaimage/image3.png"} alt="img" />
          </div>

          <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#614600", marginBottom: "1rem" }}>The Most Common: Vimshottari Dasha System</h2>
          <p style={{ color: "#000000", marginBottom: "1.5rem" }}>Among several Dasha systems in Vedic astrology, the Vimshottari Dasha is the most widely used, especially in Parashara astrology.</p>

          <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#614600", marginBottom: "1rem" }}>Total Length: 120 Years</h2>
          <p style={{ color: "#000000", marginBottom: "1.5rem" }}>In this system, each planet rules a specific number of years. Here's a quick breakdown:</p>

          <div style={{ overflowX: "auto" }}>
            <table style={{ minWidth: "100%", backgroundColor: "white", border: "1px solid #E5E7EB", boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)" }}>
              <thead style={{ backgroundColor: "#FEF08A", color: "#713F12", fontWeight: "600" }}>
                <tr>
                  <th style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>Planet</th>
                  <th style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>Tamil Name</th>
                  <th style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>Dasha Period</th>
                </tr>
              </thead>
              <tbody style={{ color: "#374151", textAlign: "center" }}>
                <tr style={{ hover: { backgroundColor: "#FEF9C3" } }}>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>Sun</td>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>சூரியன்</td>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>6 years</td>
                </tr>
                <tr style={{ hover: { backgroundColor: "#FEF9C3" } }}>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>Moon</td>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>சந்திரன்</td>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>10 years</td>
                </tr>
                <tr style={{ hover: { backgroundColor: "#FEF9C3" } }}>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>Mars</td>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>செவ்வாய்</td>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>7 years</td>
                </tr>
                <tr style={{ hover: { backgroundColor: "#FEF9C3" } }}>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>Mercury</td>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>புதன்</td>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>17 years</td>
                </tr>
                <tr style={{ hover: { backgroundColor: "#FEF9C3" } }}>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>Jupiter</td>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>குரு</td>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>16 years</td>
                </tr>
                <tr style={{ hover: { backgroundColor: "#FEF9C3" } }}>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>Venus</td>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>சுக்ரன்</td>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>20 years</td>
                </tr>
                <tr style={{ hover: { backgroundColor: "#FEF9C3" } }}>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>Saturn</td>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>சனி</td>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>19 years</td>
                </tr>
                <tr style={{ hover: { backgroundColor: "#FEF9C3" } }}>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>Icarus</td>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>ராகு</td>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>18 years</td>
                </tr>
                <tr style={{ hover: { backgroundColor: "#FEF9C3" } }}>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>Ketus</td>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>கேது</td>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>7 years</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#614600", marginBottom: "1rem" }}>How is Vimshottari Dasha Calculated?</h2>
          <p style={{ color: "#000000", marginBottom: "1.5rem" }}>Your Dasha sequence starts with the ruler of your birth star (Nakshatra Lord). The balance of the first Dasha depends on how far the Moon had moved through the star at the time of birth.</p>

          <div>
            <img src={publicUrl + "assets/img/dashaimage/image4.png"} alt="img" />
          </div>

          <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#614600", marginBottom: "1rem" }}>Example:</h2>
          <p style={{ color: "#000000", marginBottom: "1.5rem" }}>If you were born in Rohini Nakshatra, ruled by the Moon, your first Mahadasha (main period) will be Moon Dasha, and the duration will depend on the Moon's degree in that Nakshatra.</p>

          <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#614600", marginBottom: "1rem" }}>Dasha Levels: Sub-Periods for Precision</h2>
          <p style={{ color: "#000000", marginBottom: "0.25rem" }}>Each Mahadasha (major period) is divided into:</p>
          <ul>
            <li>Antar Dasha (sub-period)</li>
            <li>Pratyantar Dasha (sub-sub-period)</li>
          </ul>
          <p style={{ color: "#000000", marginBottom: "1.5rem" }}>
            This multi-level structure allows astrologers to predict events with remarkable accuracy — even to the exact month or day!
          </p>

          <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#614600", marginBottom: "1rem" }}>How to Interpret a Dasha</h2>
          <p style={{ color: "#000000", marginBottom: "1.5rem" }}>Understanding the Dasha's effects requires a deep analysis of the planet involved. Here's a simple step-by-step approach:</p>

          <div style={{ overflowX: "auto" }}>
            <table style={{ minWidth: "100%", backgroundColor: "white", border: "1px solid #E5E7EB", boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)" }}>
              <thead style={{ backgroundColor: "#FEF08A", color: "#713F12", fontWeight: "600" }}>
                <tr>
                  <th style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>Step</th>
                  <th style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>What to Analyze</th>
                </tr>
              </thead>
              <tbody style={{ color: "#374151", textAlign: "center" }}>
                <tr style={{ hover: { backgroundColor: "#FEF9C3" } }}>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>1</td>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>Nature of the planet (Benefic or Malefic)</td>
                </tr>
                <tr style={{ hover: { backgroundColor: "#FEF9C3" } }}>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>2</td>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>Strength (Exalted, Combust, Retrograde, etc.)</td>
                </tr>
                <tr style={{ hover: { backgroundColor: "#FEF9C3" } }}>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>3</td>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>House ownership (e.g. does it rule good/bad houses?)</td>
                </tr>
                <tr style={{ hover: { backgroundColor: "#FEF9C3" } }}>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>4</td>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>House placement (in which house is it located?)</td>
                </tr>
                <tr style={{ hover: { backgroundColor: "#FEF9C3" } }}>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>5</td>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>Aspects and conjunctions with other planets</td>
                </tr>
                <tr style={{ hover: { backgroundColor: "#FEF9C3" } }}>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>6</td>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>Yogas (planetary combinations)</td>
                </tr>
                <tr style={{ hover: { backgroundColor: "#FEF9C3" } }}>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>7</td>
                  <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>Role in divisional charts (D9 for marriage, D10 for career, etc.)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#614600", marginBottom: "1rem" }}>Dasha Effects – Quick Glance</h2>
          <div style={{ marginTop: "0.25rem", marginBottom: "0.25rem" }}>
            <p style={{ fontSize: "1.125rem", fontWeight: "600", color: "#000000", marginBottom: "0" }}>Here are some examples of how different Dashas can impact your life:</p>
            <div style={{ marginTop: "0.25rem", marginBottom: "0.25rem" }}>
              <h3 style={{ fontSize: "1.125rem", fontWeight: "500", color: "#000000" }}>Venus Mahadasha</h3>
              <p style={{ color: "#000000" }}>Love, luxury, beauty, marriage, creativity (if Venus is strong and well-placed)</p>

              <h3 style={{ fontSize: "1.125rem", fontWeight: "500", color: "#000000" }}>Saturn Mahadasha</h3>
              <p style={{ color: "#000000" }}>Hard work, discipline, detachment, slow progress, karmic lessons</p>

              <h3 style={{ fontSize: "1.125rem", fontWeight: "500", color: "#000000" }}>Rahu Mahadasha</h3>
              <p style={{ color: "#000000" }}>Foreign connections, ambition, sudden events, illusions, transformation</p>

              <h3 style={{ fontSize: "1.125rem", fontWeight: "500", color: "#000000" }}>Jupiter Mahadasha</h3>
              <p style={{ color: "#000000" }}>Wisdom, growth, spirituality, family, teaching, children</p>
            </div>
          </div>

          <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#614600", marginTop: "1rem", marginBottom: "1rem" }}>Conclusion</h2>

          <div>
            <img src={publicUrl + "assets/img/dashaimage/image5.jpg"} alt="img" />
          </div>

          <p style={{ color: "#000000", marginBottom: "1.5rem" }}>The Dasha system is like a cosmic clock that tells you when the planets will influence you the most. With the right guidance and interpretation, it can be a powerful tool to navigate life's ups and downs with clarity and confidence.
            If you're curious about your own Dasha periods and want personalized predictions, consulting a knowledgeable astrologer with your birth chart (ஜாதகம்) is highly recommended.</p>

          <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#000000", fontFamily: "Poppins", marginTop: "1rem", marginBottom: "1rem" }}>Click for video</h2>



          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // minHeight: '100vh',
            // width: '100%',
            padding: "6px",
            boxSizing: 'border-box'
          }}>
            <div style={{
              height: '80vh',
              width: '90vw',
              maxWidth: '1200px'
            }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/SKeF4Ymwt1Y?autoplay=1&mute=1&rel=0&showinfo=0"
                title="YouTube video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }}
              ></iframe>
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',

          }}>
            <h1 style={{
              fontSize: "1.875rem",
              fontWeight: "700",
              color: "#614600",
              margin: 0
            }}>
              Astrological remedies if you were not able to buy a house
            </h1>

            <button
              style={{
                background: "#E90000",
                border: "4px solid white",
                borderRadius: "1rem",
                padding: "0.75rem 3rem",
                color: "white",
                fontSize: "1.25rem",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "white";
                e.currentTarget.style.color = "#E90000";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "#E90000";
                e.currentTarget.style.color = "white";
              }}
            >
              Check Now
            </button>

            <h1 style={{
              fontSize: "1.875rem",
              fontWeight: "700",
              color: "#614600",
              margin: 0
            }}>
              Ask a question talk to the best astrologer
            </h1>

            <button
              onClick={() => window.open("https://wa.me/+919508801096", "_blank")}
              style={{
                background: "#00980A",
                border: "4px solid white",
                borderRadius: "1rem",
                padding: "0.75rem 3rem",
                color: "white",
                fontSize: "1.25rem",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "white";
                e.currentTarget.style.color = "#00980A";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "#00980A";
                e.currentTarget.style.color = "white";
              }}
            >
              Chat in WhatsApp
            </button>
          </div>



        </div>

      </section>
    </div>
  );
};

export default Dasha;