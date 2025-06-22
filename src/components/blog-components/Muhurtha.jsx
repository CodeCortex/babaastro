import React from 'react';

const Muhurtha = () => {
    const publicUrl = process.env.PUBLIC_URL + "/";

    return (
        <div style={{ background: "#FFAC63" }}>











            <div style={{
                width: '100vw',
                overflow: 'hidden',
                position: 'relative',  // Needed for absolute positioning of text
                textAlign: 'center'    // Center the text horizontally
            }}>
                <img
                    src={publicUrl + "assets/img/muhurtha/image1.jpg"}
                    alt="Kundali matching"
                    style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block'
                    }}
                />
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: '#E2E2E2',
                    fontSize: '4rem',
                    fontWeight: 'bold',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    width: '100%'
                }}>
                    Muhurtham
                </div>
            </div>






            <section style={{ padding: "24px" }}>
                <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
                    <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#894000", marginBottom: "1rem" }}>What is Muhurtham? | The Power of Auspicious Timing in Vedic Astrology (முஹூர்த்தம் Explained)</h2>
                    <p style={{ color: "#000000"}}>In Vedic astrology and Tamil tradition, Muhurtham (முஹூர்த்தம்) is more than just picking a time — it's about aligning your actions with divine timing for success, peace, and prosperity.</p>
                    <p style={{ color: "#000000", marginBottom: "1.5rem" }}> From marriage ceremonies to starting a business, choosing the right Muhurtham is believed to invite blessings and remove obstacles. Let's explore how and why it works.</p>

                    <div style={{ marginBottom: "1rem" }}>
                        <img src={publicUrl + "assets/img/muhurtha/image2.jpg"} alt="img" />
                    </div>

                    <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#894000", marginBottom: "1rem" }}>What is Muhurtham (முஹூர்த்தம்)?</h2>
                    <p style={{ color: "#000000", marginBottom: ".3rem" }}>Muhurtham means an auspicious time selected based on astrological calculations to begin something important or sacred.
                        It is commonly used before:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li style={{ fontWeight: 'bold' }}>  <span style={{ color: "#AE5100", fontWeight: "bold" }}>Marriage</span> (திருமணம்)</li>
                        <li style={{ fontWeight: 'bold' }}><span style={{ color: "#AE5100", fontWeight: "bold" }}> Housewarming</span>(கிரஹப்பிரவேசம்)</li>
                        <li style={{ fontWeight: 'bold' }}><span style={{ color: "#AE5100", fontWeight: "bold" }}> Naming ceremony</span>(நாமகரணம்)</li>
                        <li style={{ fontWeight: 'bold' }}><span style={{ color: "#AE5100", fontWeight: "bold" }}> Business launch </span>or contract signing</li>
                        < li style={{ fontWeight: 'bold' }}><span style={{ color: "#AE5100", fontWeight: "bold" }}>Travel,</span> property purchase, spiritual rituals, etc.</li>
                        <li style={{ fontWeight: 'bold' }}>Right time = Right energy. Choosing the right Muhurtham ensures smoother outcomes and better support from cosmic forces.</li>
                    </ul>

                    <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#894000", marginBottom: "1rem" }}>Key Factors That Decide a Good Muhurtham</h2>
                    <p style={{ color: "#000000", marginBottom: "1.5rem" }}>Muhurtham is not chosen randomly. It's based on six core astrological elements:</p>








                    {/* 88888888888888888888888888888888888888888888888888888 */}







                    {/* Tithi Section */}
                    <div style={{
                        padding: "0 15px",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "flex-start",
                        gap: "2rem",
                        marginBottom: "2.5rem"
                    }}>
                        <div style={{ flex: "0 0 60%" }}>
                            <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#894000", marginBottom: "1rem" }}>
                                1. Tithi (திதி) – Lunar Day
                            </h2>
                            <p style={{ color: "#000000", marginBottom: "1rem" }}>
                                Each day of the lunar month has a unique energy.
                            </p>
                            <ul style={{
                                listStyleType: 'disc',
                                paddingLeft: '20px',
                                marginBottom: "1rem"
                            }}>
                                <li style={{ fontWeight: 'bold' }}> <span style={{ color: "#AE5100", fontWeight: "bold" }}>Auspicious: </span>Dwitiya, Tritiya, Panchami, Dashami, Ekadoshi</li>
                                <li style={{ fontWeight: 'bold' }}> <span style={{ color: "#AE5100", fontWeight: "bold" }}>Avoid:</span> Amavasya (New Moon), Chaturdashi (14th day)</li>
                            </ul>
                        </div>
                        <div style={{ flex: "0 0 35%" }}>
                            <div style={{
                                width: "100%",
                                aspectRatio: "4/3",
                                overflow: "hidden",
                                borderRadius: "8px",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                            }}>
                                <img
                                    src={publicUrl + "assets/img/muhurtha/image3.jpg"}
                                    alt="Tithi Table"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover"
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Nakshatra Section */}
                    <div style={{
                        padding: "0 15px",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "flex-start",
                        gap: "2rem",
                        marginBottom: "2.5rem"
                    }}>
                        <div style={{ flex: "0 0 60%" }}>
                            <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#894000", marginBottom: "1rem" }}>
                                2. Nakshatra (நட்சத்திரம்) - Star of the Day
                            </h2>
                            <p style={{ color: "#000000", marginBottom: "1rem" }}>
                                Some stars support positive beginnings.
                            </p>
                            <ul style={{
                                listStyleType: 'disc',
                                paddingLeft: '20px',
                                marginBottom: "1rem"
                            }}>
                                <li style={{ fontWeight: 'bold' }}>   <span style={{ color: "#AE5100", fontWeight: "bold" }}>Good Nakshatras: </span> Rohini, Mrigashira, Pushya, Hasta, Anuradha, Revati</li>
                                <li style={{ fontWeight: 'bold' }}>  <span style={{ color: "#AE5100", fontWeight: "bold" }}> Avoid for Marriage:</span> Moda, Aslesha, Bharani</li>
                            </ul>
                        </div>
                        <div style={{ flex: "0 0 35%" }}>
                            <div style={{
                                width: "100%",
                                aspectRatio: "4/3",
                                overflow: "hidden",
                                borderRadius: "8px",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                            }}>
                                <img
                                    src={publicUrl + "assets/img/muhurtha/image4.jpg"}
                                    alt="Nakshatra Chart"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover"
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Yoga Section */}
                    <div style={{
                        padding: "0 15px",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "flex-start",
                        gap: "2rem",
                        marginBottom: "2.5rem"
                    }}>
                        <div style={{ flex: "0 0 60%" }}>
                            <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#894000", marginBottom: "1rem" }}>
                                3. Yoga (யோகம்) - Planetary Combinations
                            </h2>
                            <p style={{ color: "#000000", marginBottom: "1rem" }}>
                                Yogas determine the planetary energy of the day.
                            </p>
                            <ul style={{
                                listStyleType: 'disc',
                                paddingLeft: '20px',
                                marginBottom: "1rem"
                            }}>
                                <li style={{ fontWeight: 'bold' }}> <span style={{ color: "#AE5100", fontWeight: "bold" }}> Good Yogas: </span>Siddha Yoga, Amrita Yoga, Shubha Yoga</li>
                                <li style={{ fontWeight: 'bold' }}> <span style={{ color: "#AE5100", fontWeight: "bold" }}>  Avoid:</span> Vyatipata, Vishkumbha, Atiganda</li>
                            </ul>
                        </div>
                        <div style={{ flex: "0 0 35%" }}>
                            <div style={{
                                width: "100%",
                                aspectRatio: "4/3",
                                overflow: "hidden",
                                borderRadius: "8px",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                            }}>
                                <img
                                    src={publicUrl + "assets/img/muhurtha/image5.jpg"}
                                    alt="Yoga Chart"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover"
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Karana Section */}
                    <div style={{
                        padding: "0 15px",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "flex-start",
                        gap: "2rem",
                        marginBottom: "2.5rem"
                    }}>
                        <div style={{ flex: "0 0 60%" }}>
                            <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#894000", marginBottom: "1rem" }}>
                                4. Karana (கரணம்) - Half of a Tithi
                            </h2>
                            <p style={{ color: "#000000", marginBottom: "1rem" }}>
                                A Tithi has two Karanas. Some are considered auspicious.
                            </p>
                            <ul style={{
                                listStyleType: 'disc',
                                paddingLeft: '20px',
                                marginBottom: "1rem"
                            }}>
                                <li style={{ fontWeight: 'bold' }}> <span style={{ color: "#AE5100", fontWeight: "bold" }}>Auspicious Karanas:</span> Bava, Balava, Koulava</li>
                                <li style={{ fontWeight: 'bold' }}> <span style={{ color: "#AE5100", fontWeight: "bold" }}>Avoid:</span> Vishti(Bhadra)</li>

                            </ul>
                        </div>
                        <div style={{ flex: "0 0 35%" }}>
                            <div style={{
                                width: "100%",
                                aspectRatio: "4/3",
                                overflow: "hidden",
                                borderRadius: "8px",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                            }}>
                                <img
                                    src={publicUrl + "assets/img/muhurtha/image6.jpg"}
                                    alt="Karana Chart"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover"
                                    }}
                                />
                            </div>
                        </div>
                    </div>







































                    <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#894000", marginBottom: "1rem" }}>5. Weekday (வாரங்கள்)</h2>
                    <p style={{ color: "#000000", marginBottom: "1.5rem" }}>Each weekday has a planetary ruler and influence.</p>






                    {/* **************************** */}


                    <div style={{ overflowX: "auto" }}>
                        <table
                            style={{
                                minWidth: "100%",
                                backgroundColor: "white",
                                border: "1px solid #E5E7EB",
                                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <thead
                                style={{
                                    backgroundColor: "#FEF08A",
                                    color: "#713F12",
                                    fontWeight: "600",
                                }}
                            >
                                <tr>
                                    <th style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Day
                                    </th>
                                    <th style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Best For
                                    </th>
                                    <th style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Avoid For
                                    </th>
                                </tr>
                            </thead>
                            <tbody style={{ color: "#374151", textAlign: "center" }}>
                                <tr>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Monday
                                    </td>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Health rituals, family bonding
                                    </td>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Legal contracts
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Tuesday
                                    </td>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Courage-based rituals
                                    </td>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Weddings, peace rituals
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Wednesday
                                    </td>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Communication, business
                                    </td>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        -
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Thursday
                                    </td>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Spiritual activities, education
                                    </td>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        -
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Friday
                                    </td>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Marriage, wealth, beauty
                                    </td>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        -
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Saturday
                                    </td>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Discipline, karmic remedies
                                    </td>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Celebrations
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Sunday
                                    </td>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Leadership, government-related
                                    </td>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Marriage
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#894000", marginBottom: "1rem", marginTop: "1rem" }}>6. Lagna (லக்னம்) – Ascendant at the Time</h2>
                    <p style={{ color: "#000000", marginBottom: "1.5rem" }}>The Ascendant sign during Muhurtham must be strong and free of malefic aspects (like Saturn, Rahu, Ketu). A good Lagna ensures long-term impact of the event is positive.</p>

                    <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#894000", marginBottom: "1rem" }}>Doshas to Avoid During Muhurtham</h2>
                    <p style={{ color: "#000000", marginBottom: "1.5rem" }}>Even a good day can turn bad if these Doshas are present:</p>
                    <div style={{ overflowX: "auto" }}>
                        <table
                            style={{
                                minWidth: "100%",
                                backgroundColor: "white",
                                border: "1px solid #E5E7EB",
                                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <thead
                                style={{
                                    backgroundColor: "#FEF08A",
                                    color: "#713F12",
                                    fontWeight: "600",
                                }}
                            >
                                <tr>
                                    <th style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Dosha
                                    </th>
                                    <th style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Impact
                                    </th>
                                </tr>
                            </thead>
                            <tbody style={{ color: "#374151", textAlign: "center" }}>
                                <tr>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Rahu Kalam (ராகு காலம்)
                                    </td>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Rahu's influence – avoid starting anything
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Yama Gandam (யம கண்டம்)
                                    </td>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Linked with death and obstacles
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Gulika Kalam (குளிகை)
                                    </td>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Neutral to malefic, avoid if unsure
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Durmuhurtham
                                    </td>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Small bad timings throughout the day
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p style={{ color: "#000000", marginBottom: "1.5rem", marginTop: "0.7rem" }}>These periods are calculated daily and vary based on location and time zone.</p>

                    <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#894000", marginBottom: "1rem" }}>Common Types of Muhurtham in Tamil Culture</h2>

                    <div style={{ overflowX: "auto" }}>
                        <table
                            style={{
                                minWidth: "100%",
                                backgroundColor: "white",
                                border: "1px solid #E5E7EB",
                                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <thead
                                style={{
                                    backgroundColor: "#FEF08A",
                                    color: "#713F12",
                                    fontWeight: "600",
                                }}
                            >
                                <tr>
                                    <th style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Purpose
                                    </th>
                                    <th style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Tamil Name
                                    </th>
                                </tr>
                            </thead>
                            <tbody style={{ color: "#374151", textAlign: "center" }}>
                                <tr>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Marriage
                                    </td>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        கல்யாண முஹூர்த்தம்
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Housewarming
                                    </td>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        கிரஹப்பிரவேசம்
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Business Launch
                                    </td>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        வியாபார ஆரம்பம்
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Naming Ceremony
                                    </td>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        நாமகரணம்
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Thread Ceremony
                                    </td>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        பூணூல் முந்தானை
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        Travel
                                    </td>
                                    <td style={{ padding: "0.5rem 1rem", border: "1px solid #E5E7EB" }}>
                                        பயண ஆரம்பம்
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#894000", marginBottom: "0.5rem", marginTop: "1.5rem" }}>Marriage Muhurtham Checklist</h2>
                    <p style={{ color: "#000000" }}>When selecting a marriage Muhurtham:</p>

                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Auspicious Nakshatra (like Rohini, Revati)</li>
                        <li>Strong Lagna and Lagna Lord</li>
                        <li>No Rahu Kalam, Yama Gandam, or Durmuhurtham</li>
                        <li>Good Jupiter (Guru) and Venus (Shukra) position</li>
                        <li>Saptapadi Muhurtham – correct time to tie the knot</li>
                        <li>Compatibility confirmed by both horoscopes</li>
                    </ul>

                    <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#894000", fontFamily: "Poppins", marginTop: "1rem", marginBottom: "1rem" }}>Spiritual Tip:</h2>
                    <h2 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#894000", fontFamily: "Poppins", marginTop: "1rem", marginBottom: "1rem" }}>"Kundali matching is a tool — not a verdict. It offers guidance, not a guarantee. True love, trust, and respect can overcome even the toughest planetary challenges." </h2>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
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
                            color: "#894000",
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
                            color: "#894000",
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

export default Muhurtha;