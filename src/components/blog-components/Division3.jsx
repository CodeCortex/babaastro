import React from 'react';

const Division3 = () => {
    const publicUrl = process.env.PUBLIC_URL || "";

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${publicUrl}/assets/img/blog/division/D3.svg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                    // height: '700px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}
            >
                <h1 style={{ fontSize: '180px', textShadow: '2px 2px 3px black', paddingTop: "180px", paddingBottom: "180px" }} className="text-white font-extrabold sm:text-7xl md:text-9xl">
                    D3
                </h1>
            </div>


            <div
                style={{
                    background: "linear-gradient(to bottom, #BD5F01 0%, #3F0000 70%)"
                }}
                className=" w-full pt-20 pb-20 flex flex-col justify-center items-center"
            >
                <div style={{ position: 'relative', width: '90vw', margin: '0 auto' }} className='flex flex-col items-center'>
                    <div style={{ backgroundColor: '#e6e6e6' }} className='h-32 w-full flex items-center justify-center rounded-2xl text-2xl font-semibold text-gray-700'>
                        Space for website ad
                    </div>
                    <img 
                        src={publicUrl + '/assets/img/blog/division/astrologer.png'}
                        alt="Astrologer" 
                        style={{ position: 'absolute', right: '0%', bottom: '-15px', height: '300px', width: 'auto' }} 
                        className='z-10'
                    />
                </div>

                <div style={{ backgroundColor: "white", width: "86vw" }} className='mt-8 p-10'>
                    <div className='w-full flex md:flex-row flex-col items-start '>
                    <div className='md:w-1/3 w-full flex flex-col items-start mr-6 mb-6'>
  <img
    src={publicUrl + '/assets/img/blog/division/drekkana.jpg'}
    alt="Drekkana"
    className='w-full rounded-lg mb-0'
  />
  <img
    src={publicUrl + '/assets/img/blog/division/image.png'}
    alt="D3 Table"
    className='w-full rounded-lg mb-0'
  />
</div>

                        <div className='md:w-2/3 w-full  flex flex-col justify-center px-6 gap-3'>
                            <p className='text-3xl font-bold' style={{ color: "#5D0000" }}>Drekkana Chart (திரிகணம் / ட்ரைக்கானா சக்கரம்)</p>
                            <p className='text-black font-medium'>
                                An important divisional chart in Vedic astrology that reveals insights about siblings, courage, effort, and mental strength.
                            </p>
                            <p className='text-black font-medium'>🔍 <strong>D3 – Drekkana Chart</strong> is used to judge one's strength, efforts, siblings, and social courage.</p>
                            <p className='text-black font-medium'>📏 <strong>How D3 is Calculated:</strong><br />
                                Each zodiac sign (30°) is divided into 3 equal parts of 10° each.<br />
                                So each sign gives 3 Drekkana divisions → total 36 Drekkana zones in the zodiac.
                            </p>
                            <p className='text-black font-medium'>🎯 <strong>What D3 Reveals:</strong></p>
                            <ul className='text-black font-medium list-disc pl-5'>
                                <li>👬 <strong>Siblings:</strong> Relationship with brothers and sisters</li>
                                <li>💪 <strong>Courage:</strong> Inner strength, willpower, bravery</li>
                                <li>🤝 <strong>Cooperation:</strong> Support from community/friends</li>
                                <li>⚔ <strong>Struggles:</strong> How you face competition and enemies</li>
                                <li>🎯 <strong>Efforts:</strong> Success through personal action, karma</li>
                            </ul>
                            <p className='text-black font-medium'>🌟 <strong>Why D3 is Important:</strong><br />
                                Even if the Rasi (D1) chart shows strong planets, D3 tells how much effort you will put in to succeed.
                                <br />Especially useful to analyze:
                            </p>
                            <ul className='text-black font-medium list-disc pl-5'>
                                <li>Whether you'll fight and win over obstacles</li>
                                <li>Support or conflict with siblings</li>
                                <li>Mental stamina and confidence</li>
                            </ul>
                        </div>
                    </div>

                    <div className='w-full flex md:flex-row flex-col items-start mt-20 pb-8 md:gap-2'>
  {/* 📘 Paragraph Section */}
  <div className='md:w-1/2 w-full flex flex-col justify-center px-2 gap-3'>
    <p className='text-2xl font-bold mt-6 mb-2' style={{ color: "#5D0000" }}>Key Points to Analyze in D3:</p>
    <div className='text-black font-medium'>
      <p><strong>Point Meaning</strong></p>
      <ul className='list-none pl-0 mb-2'>
        <li>Lagna & Lagna lord Indicates your personal strength and mental energy</li>
        <li>Mars Shows fight/flight instincts, especially in male charts</li>
        <li>3rd Lord in D3 Reveals sibling relations and communication skills</li>
        <li>Benefics in good houses Indicates supportive siblings, strong will</li>
        <li>Malefics in key houses May bring struggles, rivalries, inner conflict</li>
      </ul>
      <p className='mt-2'><strong>Example Reading Style:</strong></p>
      <ul className='list-none pl-0 mb-2'>
        <li>If Mars is strong in D3 → the native is bold, competitive, warrior-like</li>
        <li>If Moon is afflicted in D3 → mental hesitation, fear of opposition</li>
        <li>If 3rd house in D3 is strong → the person has helpful siblings and strong self-effort</li>
      </ul>
      <p className='mt-2'><span className='inline-block mr-2'>✅</span><strong>Practical Uses:</strong></p>
      <ul className='list-none pl-0 mb-2'>
        <li>Understand why some people succeed through hard work while others don't push much.</li>
        <li>Clarify sibling-related karma (supportive or problematic)</li>
        <li>Used to predict success in fields like:</li>
        <ul className='list-disc pl-5'>
          <li>Sports</li>
          <li>Politics</li>
          <li>Public speaking</li>
          <li>Marketing, media</li>
        </ul>
      </ul>
    </div>
  </div>

  {/* 🖼 Image Section */}

 <div className='md:w-1/2 w-full flex flex-col items-center md:items-start px-2 mt-6 md:mt-0'>
    <img src={publicUrl + '/assets/img/blog/division/wheel.jpg'} alt="D3 Drekkana Wheel" className='rounded-lg shadow-lg mb-0' style={{ maxWidth: '420px', width: '100%', height: 'auto' }} />
    <img src={publicUrl + '/assets/img/blog/division/zodiac.jpg'} alt="Zodiac" className='rounded-lg shadow-lg mb-0' style={{ maxWidth: '420px', width: '100%', height: 'auto' }} />
    <img src={publicUrl + '/assets/img/blog/division/table.png'} alt="D3 Additional Image" className='rounded-lg shadow-lg mb-0' style={{ maxWidth: '420px', width: '100%', height: 'auto' }} />
  </div>
</div>

                </div>
                <div style={{ width: "84vw", maxWidth: "1100px", margin: "32px auto 0 auto" }}>
                    <h1 className="text-white text-lg lg:text-4xl font-medium py-2 lg:py-4" style={{ textAlign: "left", marginBottom: "8px" }}>
                        Click for video
                    </h1>
                    <div style={{ height: '70vh', width: "100%" }}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/SKeF4Ymwt1Y?autoplay=1&mute=1&rel=0&showinfo=0"
                            title="YouTube video"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            style={{ borderRadius: '12px', display: 'block' }}
                        ></iframe>
                    </div>
                </div>

                <h1 style={{ paddingBlock: "" }} className='text-white text-2xl lg:text-6xl font-extrabold py-10 px-8 lg:px-40 text-center'>Astrological remedies if you were not able to buy a house </h1>

              
                <button
                    style={{ backgroundColor: "#E90000" }}
                    className="bg-[#E90000] border-4 border-white rounded-2xl px-20 py-3 lg:py-6 hover:text-red-500 text-white text-xl lg:text-4xl hover:text-red shadow-lg hover:bg-white  transition duration-300"
                >
                    Check Now
                </button>

                <h1 className='text-white text-2xl lg:text-6xl font-extrabold py-10 px-8 lg:px-40 text-center'>Ask a question talk to the best astrologer</h1>
                <button onClick={() => window.open("https://wa.me/+919508801096", "_blank")}
                    style={{ background: "#00980A" }} className='border-4 border-white rounded-2xl px-20 py-3 lg:py-6 hover:text-white text-white text-xl lg:text-4xl hover:text-red shadow-lg hover:bg-white  transition duration-300'>Chat in Whatapp</button>

            </div>

        </div>
    );
};

export default Division3;