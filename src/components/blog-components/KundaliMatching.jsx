import React from 'react';

const KundaliMatching = () => {
    const publicUrl = process.env.PUBLIC_URL + "/";

    return (
        <div style={{ backgroundColor: "#FFA600" }}>
            <div style={{
                width: '100vw',
                overflow: 'hidden'
            }}>
                <img
                    src={publicUrl + "assets/img/kundalimatching/image1.png"}
                    alt="Kundali matching"
                    style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block'
                    }}
                />
            </div>
            <section style={{ padding: "24px" }}>
                <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
                    <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#614600", marginBottom: "1rem" }}>Kundali Matching in Vedic Astrology: Finding the Right Life Partner through ஜாதக பொருத்தம்</h2>
                    <div>
                        <img src={publicUrl + "assets/img/kundalimatching/image2.png"} alt="img" />
                    </div>
                    <p style={{ color: "#000000", marginBottom: "1.5rem" }}>In the ancient wisdom of Vedic astrology, Kundali Matching (ஜாதக பொருத்தம்) plays a vital role, especially in Indian and Tamil matrimonial traditions. It’s more than just matching birth charts — it's about ensuring harmony, happiness, and a stable future together.
                        Let’s dive into what Kundali Matching is, how it works, and why it’s still incredibly relevant today.</p>

                    <div>
                        <img src={publicUrl + "assets/img/kundalimatching/image3.png"} alt="img" />
                    </div>

                    <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#614600", marginBottom: "1rem" }}>What is Kundali Matching?</h2>
                    <p style={{ color: "#000000", marginBottom: "1.5rem" }}>Kundali Matching is the process of comparing two individuals’ birth charts (ஜாதகம்) to analyze their compatibility — emotionally, physically, spiritually, and astrologically. It is primarily used for marriage compatibility (திருமண பொருத்தம்).</p>

                    {/* <div style={{ overflowX: "auto" }}>
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
                    </div> */}

                    <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#614600", marginBottom: "1rem" }}>Kundali Matching Considers:</h2>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li> Nakshatra (birth star)</li>
                        <li> Moon sign (Chandra Rashi)</li>
                        <li> Planetary positions at </li>
                        <li>Doshas (flaws) like Mangal Dosh, Nadi Dosh</li>
                        <li> Dasha periods and life </li>
                    </ul>
                    <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#614600", marginBottom: "1rem" }}> Why is Kundali Matching Important?</h2>
                    <p style={{ color: "#000000", marginBottom: "1.5rem" }}> Kundali Matching isn’t just about tradition — it's about preventing future conflicts and ensuring a compatible bond. It offers guidance on: </p>

                    <div>
                        <img src={publicUrl + "assets/img/kundalimatching/image4.png"} alt="img" />
                    </div>
                    <ul >
                        <li> Emotional & psychological compatibility</li>
                        <li>Health, family happiness & children</li>
                        <li>  Long-term love & bonding</li>
                        <li>  Financial stability and mutual respect</li>
                        <li>  Avoiding serious doshas or planetary flaws</li>
                        <li>  Ensuring peace of mind and spiritual </li>
                    </ul>

                    <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#614600", marginBottom: "1rem,", marginTop: "1rem" }}>The 10 Poruthams (பொருத்தங்கள்) – Tamil Compatibility System</h2>
                    <p style={{ color: "#000000", marginBottom: "1.5rem" }}>In Tamil astrology, 10 Poruthams are used to judge the overall match between bride and groom. Let’s look at each one:</p>

                    <div style={{
                        padding: '6px',
                        boxSizing: 'border-box'
                    }}>
                        <div style={{ overflowX: "auto" }}>
                            <table style={{
                                minWidth: "100%",
                                backgroundColor: "white",
                                border: "1px solid #E5E7EB",
                                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
                            }}>
                                <thead style={{
                                    backgroundColor: "#FEF08A",
                                    color: "#713F12",
                                    fontWeight: "600"
                                }}>
                                    <tr>
                                        <th style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>No.</th>
                                        <th style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>Porutham Name</th>
                                        <th style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>Tamil Name</th>
                                        <th style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>Meaning</th>
                                    </tr>
                                </thead>
                                <tbody style={{ color: "#374151", textAlign: "center" }}>
                                    {[
                                        { no: 1, name: 'Dina Porutham', tamil: 'தின பொருத்தம்', meaning: 'Health, day-to-day happiness' },
                                        { no: 2, name: 'Gana Porutham', tamil: 'கண பொருத்தம்', meaning: 'Temperament and personality' },
                                        { no: 3, name: 'Mahendra Porutham', tamil: 'மஹேந்திர பொருத்தம்', meaning: 'Prosperity, children, growth' },
                                        { no: 4, name: 'Sthree Dheerga Porutham', tamil: 'ஸ்த்ரீ தீர்க்க பொருத்தம்', meaning: "Woman's well-being & longevity" },
                                        { no: 5, name: 'Yoni Porutham', tamil: 'யோனி பொருத்தம்', meaning: 'Physical & sensual compatibility' },
                                        { no: 6, name: 'Rasi Porutham', tamil: 'ராசி பொருத்தம்', meaning: 'Zodiac sign match' },
                                        { no: 7, name: 'Rasi Adhipathi Porutham', tamil: 'ராசி அதிபதி பொருத்தம்', meaning: 'Ruling planets compatibility' },
                                        { no: 8, name: 'Vasya Porutham', tamil: 'வாச்ய பொருத்தம்', meaning: 'Attraction and bonding' },
                                        { no: 9, name: 'Rajju Porutham', tamil: 'ரஜ்ஜு பொருத்தம்', meaning: 'Marital longevity' },
                                        { no: 10, name: 'Vedha Porutham', tamil: 'வேத பொருத்தம்', meaning: 'Avoids inauspicious pairings' }
                                    ].map((item) => (
                                        <tr key={item.no} style={{ hover: { backgroundColor: "#FEF9C3" } }}>
                                            <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>{item.no}</td>
                                            <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB", textAlign: 'left' }}>{item.name}</td>
                                            <td style={{
                                                padding: "0.5rem 1rem",
                                                border: "1px solid #E5E7EB",
                                                fontFamily: "'Noto Sans Tamil', sans-serif",
                                                textAlign: 'left'
                                            }}>{item.tamil}</td>
                                            <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB", textAlign: 'left' }}>{item.meaning}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <p style={{ color: "#000000", marginBottom: "1.5rem" }}>Minimum 6–7 Poruthams are generally acceptable
                        Rajju, Nadi, and Dina are considered crucial!
                    </p>

                    <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#614600", marginTop: "1rem", marginBottom: "1rem" }}>Advanced Kundali Matching Techniques</h2>
                    <p style={{ color: "#000000", marginBottom: "1.5rem" }}>While the 10 Poruthams provide a traditional base, modern Vedic astrology uses more detailed techniques for deeper analysis:</p>
                    {/* table  */}

                    <div style={{

                        overflow: 'auto',
                        padding: '8px',
                        boxSizing: 'border-box'
                    }}>
                        <div style={{
                            overflowX: 'auto',
                            maxHeight: '100%'
                        }}>
                            <table style={{
                                width: '100%',
                                borderCollapse: 'collapse',
                                backgroundColor: 'white',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                            }}>
                                <thead style={{
                                    backgroundColor: '#FFD770',
                                    color: '#614600',
                                    fontWeight: 'bold',
                                    position: 'sticky',
                                    top: 0
                                }}>
                                    <tr>
                                        <th style={{
                                            padding: '16px',
                                            border: '1px solid #E5E7EB',
                                            textAlign: 'left',
                                            width: '30%'
                                        }}>Aspect</th>
                                        <th style={{
                                            padding: '16px',
                                            border: '1px solid #E5E7EB',
                                            textAlign: 'left'
                                        }}>What's Checked</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { aspect: 'Moon Signs & Nakshatras', checked: 'Emotional & psychological compatibility' },
                                        { aspect: 'Dasha Balance', checked: 'Life timelines – will major life phases sync?' },
                                        { aspect: 'Manglik Dosha', checked: 'Mars placement – risk of conflict or delay' },
                                        { aspect: 'Nadi Dosha', checked: 'Energetic compatibility – avoid same energy type' },
                                        { aspect: 'Bhava Matching', checked: 'House-to-house impact in both horoscopes' },
                                        { aspect: 'Navamsa Chart (D9)', checked: 'Deep insight into soul-level and married life match' },
                                        { aspect: '36 Guna Milan (North India)', checked: 'Point-based scoring system for compatibility' }
                                    ].map((item, index) => (
                                        <tr key={index} style={{
                                            borderBottom: '1px solid #E5E7EB',
                                            ':hover': {
                                                backgroundColor: '#FFF8E1'
                                            }
                                        }}>
                                            <td style={{
                                                padding: '16px',
                                                fontWeight: '500'
                                            }}>{item.aspect}</td>
                                            <td style={{
                                                padding: '16px',
                                                color: '#555'
                                            }}>{item.checked}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>


                    <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#614600", fontFamily: "Poppins", marginTop: "1rem", marginBottom: "1rem" }}>Spiritual Insight</h2>
                    <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#B62E00", fontFamily: "Poppins", marginTop: "1rem", marginBottom: "1rem" }}>“Kundali matching is a tool — not a verdict. It offers guidance, not a guarantee. True love, trust, and respect can overcome even the toughest planetary challenges.” </h2>

                    {/* // youtube  */}

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

export default KundaliMatching;
