import React from 'react'

const MarriageMatchingService = () => {
    const publicUrl = process.env.PUBLIC_URL || "";

    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${publicUrl}/assets/img/service/marriagematching/BabaHeader.svg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
            height:"620px"
          }}
          className="background w-full "
        >
          <div style={{padding:"140px"}} className="lg:p-[140px] p-4 md:py-10 pr-0 md:w-3/4 ">
            <p className=" w-3/4 md:4/5 font-bold text-white text-sm md:text-3xl md:pt-10 md:pl-8">
            Will your marriage bring harmony and lifelong happiness? 
            Your compatibility with your partner goes beyond emotionsit’s written in the stars! Discover the strengths and challenges of your bond with a personalized Marriage Matching Report by              <span style={{ color: "#00FF4C" }} className="text-[#FFE270]"> Baba Astro.</span>
            </p>
            <div className='md:pl-8'>
            <button style={{ backgroundColor: "#015825" }} className="p-3 md:px-6  mt-6 md:mt-20 text-md md:text-2xl font-bold text-white rounded-2xl bg-[#FFE270]">
              Order Your Report Now
            </button>
            </div>
         
          </div>
        </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
        <div style={{ background: "linear-gradient(to right, #004226, #004226)" }} className='w-full  flex justify-center items-center'>
  
  
        <div style={{ background: "linear-gradient(to bottom right,#005825, #BBFFD8)" }} className='rounded-3xl md:flex md:item-center w-4/5 p-10 my-20'>
        <div className='md:w-1/2 lg:pl-12'  >
              <p className='lg:text-3xl text-lg pt-4 lg:pt-8 font-bold text-white'>What is Marriage Matching?</p>
              <p className='lg:text-xl text-md  md:pt-6  font-medium text-white'>Marriage Matching (also known as Kundali Milan or Porutham) is an ancient Vedic method used to analyze the compatibility between two individuals based on their birth charts. It helps assess emotional, physical, and spiritual alignment for a harmonious married life.</p>
  
              <p className='lg:text-3xl text-lg pt-4 lg:pt-8 font-bold text-white'>During a personalized Marriage Matching session with Baba Astro, you’ll receive:</p>
              <ul className='lg:text-xl text-sm pt-2 md:pt-6 font-medium text-white space-y-2  lg:space-y-4'>
                <li>✨ Astrological Compatibility Analysis – Assess the key aspects of your match through 10+ traditional Poruthams.
                </li>
                <li>💡 Dosha Check & Remedies – Identify Mangal Dosha, Nadi Dosha, or other astrological obstacles, with effective solutions.
                </li>
                <li>🛠 Personalized Insights & Guidance – Know the strengths of your union, areas to work on, and tips for a successful marriage.</li>
              </ul>
              <button style={{ backgroundColor: "#015825" }} className='p-3 mt-6 lg:ml-3xl md:px-6 text-sm text-start md:text-xl font-bold text-white rounded-2xl bg-[#FFE270] '>Ensure a strong foundation for your future together—book your Marriage Matching with Baba Astro today!</button>
  
  
            </div>
  
  
            <div className='md:w-1/2 md:relative md:overflow-visible flex items-center md:pt-6'>
              <div className='md:absolute md:right-[-100px]'>
              <img className='md:w-[688px] md:h-[688px]' src={`${publicUrl}/assets/img/service/mantrabook.svg`} alt="handmantra" />
              </div>
            </div>
          </div>
        </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
        <div style={{background: "linear-gradient(to right, #004226, #004226)" }} className=' w-full bg-gradient-to-r from-[#000000] to-[#19324E] flex flex-col lg:flex-row lg:flex lg:justify-around lg:px-42 px-10 pb-6 md:pb-20 gap-3 lg:gap-8'>
  
          <div className='lg:w-3/5'>
            <p style={{color:"#A6ECC3"}} className='md:text-3xl text-md pt-4 md:pt-8 font-bold text-[#FFE270]'>How Marriage Matching Influences Your Life</p>
            <p className='text-white md:text-xl text-sm font-medium pb-3 md:pb-8 pt-2 md:pt-4'>Marriage is a sacred bond that affects every part of your life—emotions, finances, family, and destiny. Matching horoscopes reveals how compatible you and your partner are on every level.</p>
            <button style={{background:"#015825"}} className='p-3 px-6 text-md  font-bold text-white rounded-2xl bg-[#FFE270]'>Order Your report Now</button>
          </div>
  
          <div style={{background: "linear-gradient(to bottom right, #015825, #015825)" }} className='border-2 bg-gradient-to-br from-[#000000] to-[#313131] rounded-2xl shadow-2xl'>
            <div className='flex items-center flex-col py-2 lg:py-5'>
              <img className="rounded-full w-16 h-16 lg:w-28 lg:h-28 " src="https://static0.futurepoint.in/1407219268/futurepointindia/images/zodiac/zodiac-sign/Libra-7.png" alt="" />
              <p className=' lg:text-2xl text-xl text-white font-extrabold'>Emotional & Mental Compatibility </p>
              <p className='text-white text-sm lg:text-xl py-4 px-2 lg:py-12 text-center'>Understand how well your personalities align for a peaceful relationship.</p>
            </div>
          </div>
          <div style={{background: "linear-gradient(to bottom right, #015825, #015825)" }}   className='border-2 bg-gradient-to-br from-[#000000] to-[#313131] rounded-2xl shadow-2xl '>
            <div className='flex items-center flex-col py-2 lg:py-5'>
              <img className="rounded-full w-16 h-16 lg:w-28 lg:h-28 " src="https://static0.futurepoint.in/1407219268/futurepointindia/images/zodiac/zodiac-sign/Libra-7.png" alt="" />
              <p className=' lg:text-2xl text-xl text-white font-extrabold'>Guna Milan Score </p>
              <p className='text-white text-sm lg:text-xl py-4 px-2 lg:py-12 text-center'>Based on 36 points, see how your charts align in terms of values, health, desires, and temperament.</p>
            </div>
          </div>
  
  
  
  
        </div>
  
        <div style={{background: "linear-gradient(to bottom, #FFFFFF,#FFFFFF)" }}  className='w-full bg-gradient-to-b from-[#2C79C5] to-[#1A2F6F]'>
          <div className='grid md:grid-cols-4 grid-cols-2'>
            <div className="flex flex-col items-center py-8 lg:py-14">
              <strong style={{color:"#015825"}} className=' text-md md:text-lg lg:text-3xl font-extrabold'>10,000/-</strong>
              <h2 className='text-black text-md md:text-xl lg:text-4xl font-extralight'>Consultancy</h2>
            </div>
            <div className="flex flex-col items-center py-8 lg:py-14">
              <strong style={{color:"#015825"}} className=' text-md md:text-lg lg:text-3xl font-extrabold'>10+</strong>
              <h2 className='text-black text-md md:text-xl lg:text-4xl font-extralight'>Years of Prediction</h2>
            </div>
            <div className="flex flex-col items-center  pb-8  md:py-8 lg:py-14">
              <strong style={{color:"#015825"}} className=' text-md md:text-lg lg:text-3xl font-extrabold'>100%</strong>
              <h2 className='text-black text-md md:text-xl lg:text-4xl font-extralight'>Accuracy Rate</h2>
            </div>
            <div className="flex flex-col items-center  pb-8 md:py-8 lg:py-14">
              <strong style={{color:"#015825"}} className=' text-md md:text-lg lg:text-3xl font-extrabold'>30+</strong>
              <h2 className='text-black text-md md:text-xl lg:text-4xl font-extralight'>Years of Legacy</h2>
            </div>
  
          </div>
  
  
        </div>
  
  
        <div style={{background: "linear-gradient(to bottom right, #004226, #004226)" }} className='w-full bg-gradient-to-br from-[#000000] to-[#19324E] px-10 lg:px-42'>
          <div className='flex  flex-col items-center'>
  
            <div className='w-full pb-16'>
              <h2 style={{color:"#FFE270"}} className='md:text-3xl text-md text-md pt-12 pb-4 font-bold text-[#FFE270] text-center'>How Marriage Matching Helps in Different Aspects of Life</h2>
              <p className='text-white text-sm md:text-xl font-medium text-center px-4 lg:px-28'>Marriage Matching isn’t just about finding the “right partner”—it’s about creating a fulfilling, lasting union that supports your personal growth and happiness.</p>
            </div>
  
            <div className='lg:pb-14'>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 flex  flex-col flex-wrap'>
                <div style={{boxShadow:"#808080", background:"#015825"}} className=' bg-[#737373] rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                  <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                  <p className=' lg:text-2xl text-lg text-white font-extrabold py-3 pb-1'>Career & Prosperity</p>
                  <p className='text-white text-md md:text-xl font-medium pr-2'>A compatible marriage supports your mental peace and financial growth. Learn how your partner's energy aligns with your career path.</p>
                </div>
                <div style={{boxShadow:"#808080", background:"#015825"}} className=' bg-[#737373] rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                  <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                  <p className=' lg:text-2xl text-lg text-white font-extrabold py-3 pb-1'>Emotional & Physical Bond </p>
                  <p className='text-white text-md md:text-xl font-medium pr-2'>Discover how your emotional connection and intimacy are influenced by your astrological makeup.</p>
                </div>
                <div style={{boxShadow:"#808080", background:"#015825"}} className=' bg-[#737373] rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                  <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                  <p className=' lg:text-2xl text-lg text-white font-extrabold py-3 pb-1'>Peace & Stability</p>
                  <p className='text-white text-md md:text-xl font-medium pr-2'>A mismatched marriage can lead to friction and instability. Matching horoscopes helps identify and avoid such challenges early on.</p>
                </div>
                <div style={{boxShadow:"#808080", background:"#015825"}} className=' bg-[#737373]  rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                  <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                  <p className=' lg:text-2xl text-lg text-white font-extrabold py-3 pb-1'>Health & Family</p>
                  <p className='text-white text-md md:text-xl font-medium pr-2'>Evaluate compatibility on the level of shared well-being, fertility, and family growth.</p>
                </div>
                <div style={{boxShadow:"#808080", background:"#015825"}} className=' bg-[#737373] rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                  <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                  <p className=' lg:text-2xl text-lg text-white font-extrabold py-3 pb-1'>Karma & Destiny</p>
                  <p className='text-white text-md md:text-xl font-medium pr-2'>Your partner plays a role in your karmic journey. Understand the deeper, spiritual connection and its impact on your life’s direction.</p>
                </div>
  
  
              </div>
  
            </div>
  
            <div className='w-full pb-8 lg:pb-16'>
              <h2 style={{color:"#A6ECC3"}} className='md:text-3xl text-md pt-12 pb-4 font-bold text-[#FFE270] text-center'>Align your partnership with cosmic harmony.
 Book your Marriage Matching session with Baba Astro today! 
</h2>
              <p className='text-white text-xl lg:text-3xl font-bold text-center lg:px-28'>What to Expect from Your Astrology Consultation</p>
            </div>
  
            <div className='w-full'>
              <div className='px-8'>
  
                {/* ................ */}
                <div className='flex flex-wrap items-center justify-around pb-12'>
                  <div >
                    <p style={{color:"#A6ECC3"}} className=' md:text-2xl font-medium py-2' >1. Personalized Horoscope Matching</p>
                    <ul>
                      <li className='text-white text-md md:text-xl font-medium'>•	Kundali Milan based on time, date, and place of birth.
                      </li>
                      <li className='text-white text-md md:text-xl font-medium '>•	Evaluation of 36 Guna points and core compatibility indicators.
                      </li>
                      <li className='text-white text-md md:text-xl font-medium pb-8'>•	Insights into shared traits, desires, and values.
                      </li>
                    </ul>
                    <p style={{color:"#A6ECC3"}} className=' md:text-2xl font-medium py-2' >2. Dosha Detection & Remedies</p>
                    <ul>
                      <li className='text-white text-md md:text-xl font-medium'>•	Check for Mangal Dosha, Nadi Dosha, and other astrological issues.

                      </li>
                      <li className='text-white text-md md:text-xl font-medium '>•	Suggested pujas, rituals, and remedies to overcome dosha effects.

                      </li>
                      <li className='text-white text-md md:text-xl font-medium pb-8'>•	Remedies for both prospective and existing couples.</li>
                    </ul>
                  </div>
                  <div className=''>
                  <img style={{width:"400px", height:"400px", boxShadow:"3px 3px 2px 2px purple"}} className='md:w-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl shadow-purple-400' src={`${publicUrl}/assets/img/service/marriagematching/Picture1.svg`} alt="" />
                  </div>
                </div>
  
                {/* .................... */}
                <div className='flex flex-col lg:flex-row items-center lg:justify-around justify-center pb-12'>
                  <div className=''>
                  <img style={{width:"400px", height:"400px", boxShadow:"3px 3px 2px 2px pink"}} className='md:w-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl shadow-pink-400' src={`${publicUrl}/assets/img/service/marriagematching/Picture2.svg`} alt="" />
                  </div>
  
                  <div >
                    <p style={{color:"#A6ECC3"}} className=' md:text-2xl font-medium py-2 pt-10 lg:pt-2' >3. Future Relationship Insights</p>
                    <ul>
                      <li className='text-white text-md md:text-xl font-medium'>•	Long-term compatibility forecast.

                      </li>
                      <li className='text-white text-md md:text-xl font-medium '>•	Predictions for harmony, family life, and joint prosperity.

                      </li>
                      <li className='text-white text-md md:text-xl font-medium pb-8'>•	Best timeframes for engagement, wedding, and starting a family.</li>
                    </ul>
                    <p style={{color:"#A6ECC3"}} className=' md:text-2xl font-medium py-2' >4. Spiritual & Emotional Alignment</p>
                    <ul>
                      <li className='text-white text-md md:text-xl font-medium'>•	Analysis of emotional maturity and karmic bonds.

                      </li>
                      <li className='text-white text-md md:text-xl font-medium '>•	Recommendations to build trust, understanding, and love.

                      </li>
                      <li className='text-white text-md md:text-xl font-medium pb-8'>•	Personalized rituals and prayers to strengthen the relationship.</li>
                    </ul>
                  </div>
  
  
  
                </div>
                {/* .................. */}
                <div className='flex flex-wrap items-center justify-around pb-10 md:pb-20'>
                  <div >
                    <p style={{color:"#A6ECC3"}} className=' md:text-2xl font-medium py-2' >5. Practical Partnership Advice</p>
                    <ul>
                      <li className='text-white text-md md:text-xl font-medium'>•	Advice on navigating challenges in communication, expectations, and family life.

                      </li>
                      <li className='text-white text-md md:text-xl font-medium '>•	Suggestions for balancing work-life and supporting each other’s growth.

                      </li>
                      <li className='text-white text-md md:text-xl font-medium pb-8'>•	Vedic lifestyle tips for long-term harmony.</li>
                    </ul>
                    <p style={{color:"#A6ECC3"}} className=' md:text-2xl font-medium py-2' >6. Ongoing Support & Follow-Up</p>
                    <ul>
                      <li className='text-white text-md md:text-xl font-medium'>•	Further consultations post-marriage for continued guidance.

                      </li>
                      <li className='text-white text-md md:text-xl font-medium '>•	Remedies and alignments for marital issues as life evolves.

                      </li>
                      <li className='text-white text-md md:text-xl font-medium pb-8'>•	Annual check-ins for relationship health and astrological updates.
                      .</li>
                    </ul>
                  </div>
                  <div className=''>
                  <img style={{width:"400px", height:"400px", boxShadow:"3px 3px 2px 2px yellow"}} className='md:w-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl shadow-yellow-400' src={`${publicUrl}/assets/img/service/marriagematching/Picture3.svg`} alt="" />
                  </div>
                </div>
              </div>
  
              <div>
                <p style={{color:"#A6ECC3"}} className=' text-md md:text-2xl lg:text-3xl font-extrabold text-center px-0 '> Make your sacred bond stronger with the power of astrology.

                </p>
                <p style={{color:"#A6ECC3"}} className=' text-md md:text-2xl lg:text-3xl font-extrabold py-3 text-center pb-10'>Book your personalized Marriage Matching with Baba Astro today! 
                </p>
              </div>
  
            </div>
          </div>
  
        </div>
  
  
  
        <div style={{background: "linear-gradient(to bottom , #FFFFFF, #FFFFFF)" }}  className='w-full bg-gradient-to-b from-[#2C79C5] to-[#1A2F6F] px-8 pb-8 lg:px-42'>
          <div className='flex flex-wrap md:flex-row items-center justify-between'>
            <div className='md:w-3/4 '>
              <div className="flex flex-col py-8 lg:py-14">
                <p style={{color:"#015825"}} className=' text-xl md:text-2xl lg:text-3xl font-extrabold py-3'>Get Your Personalized Marriage Matching Report Now!</p>
                <h2 className='text-black text-md md:text-xl lg:text-2xl font-extralight'>Build your marriage on the foundation of divine harmony. Discover strengths, avoid challenges, and unlock the secrets to a loving, lifelong relationship.</h2>
              </div>
            </div>
            <div className='md:1/4'>
  
              <button style={{background:"#015825"}} className='p-3   px-20 text-md  md:text-3xl font-bold text-white rounded-2xl bg-[#FFE270] shadow-2xl divide-fuchsia-50'>Order No</button>
            </div>
          </div>
  
  
  
        </div>
  
        <div style={{background: "linear-gradient(to bottom , black, black)" }} className=' lg:px-42 px-8 pt-6 lg:pt-15'>
          <h1 className='text-black text-xl md:text-3xl font-extrabold text-center '>Choose Your Consultation Plan:</h1>
          <div className='flex flex-wrap  md:flex-row   flex-col gap-4 lg:items-center lg:justify-evenly py-8 lg:py-10'>
          <img style={{width:"320px", height:"430px", objectFit:"cover"}} className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-3xl' src={`${publicUrl}/assets/img/service/marriagematching/Pricing.svg`} alt="" />
            {/* <img className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-4xl' src={buyNow} alt="" /> */}
            {/* <img className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-4xl' src={buyNow} alt="" /> */}
            {/* <img className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-4xl' src={buyNow} alt="" /> */}
            {/* <img className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-4xl' src={buyNow} alt="" /> */}
          </div>
        </div>
  
  
        <div style={{background: "linear-gradient(to bottom , white, white)" }} className=' w-full bg-gradient-to-r from-[#000000] to-[#19324E] flex flex-col lg:flex-row justify-around px-8 lg:px-42 pb-20 gap-8'>
  
          <div className='lg:w-1/3 pt-10'>
            <h2 style={{color:"#015825"}} className='md:text-3xl text-md font-bold text-[#FFE270] text-center md:text-start'>How accurate is the Marriage Matching report?</h2>
            <p className='text-xl pt-6 pb-10  font-medium text-black'>Our analysis follows authentic Vedic astrology and Porutham principles, ensuring deeply accurate insights tailored to both individuals.</p>
            <button style={{background:"#015825"}} className='p-3  w-full px-20  text-xl md:text-3xl font-bold text-white rounded-2xl bg-[#FFE270] shadow-2xl divide-fuchsia-50'>Order No</button>
          </div>
  
          <div className='lg:w-2/3 pt-10'>
            <div className='md:grid md:grid-cols-2 flex flex-col  gap-6'>
  
              <div style={{background:"#015825", boxShadow:"3px 3px 2px 2px #808080"}} className=' bg-[#737373] rounded-3xl p-4 shadow shadow-2xl shadow-[#2C79C5]'>
                <h1 className=' lg:text-2xl text-lg text-white font-extrabold py-3'>What if our compatibility score is low?</h1>
                <p className='text-white text-md font-medium pr-2'>Don’t worry—there are powerful remedies and rituals to balance mismatches and enhance harmony.</p>
              </div>
              <div style={{background:"#015825", boxShadow:"3px 3px 2px 2px #808080"}} className=' bg-[#737373] rounded-3xl p-4 shadow shadow-2xl shadow-[#2C79C5]'>
                <h1 className=' lg:text-2xl text-lg text-white font-extrabold py-3'>Is the consultation personalized?</h1>
                <p className='text-white text-md font-medium pr-2'>Yes, each report is based on the birth details of both partners, offering customized insights and remedies.</p>
              </div>
              <div style={{background:"#015825" , boxShadow:"3px 3px 2px 2px #808080"}} className=' bg-[#737373] rounded-3xl p-4 shadow shadow-2xl shadow-[#2C79C5]'>
                <h1 className=' lg:text-2xl text-lg text-white font-extrabold py-3'>In which format will I receive the report?</h1>
                <p className='text-white text-md font-medium pr-2'>You’ll receive a comprehensive digital PDF report via email, complete with compatibility scores, doshas, and guidance.</p>
              </div>
              <div style={{background:"#015825", boxShadow:"3px 3px 2px 2px #808080"}} className=' bg-[#737373] rounded-3xl p-4 shadow shadow-2xl shadow-[#2C79C5]'>
                <h1 className=' lg:text-2xl text-lg text-white font-extrabold py-3'>When will I receive my consultation report?</h1>
                <p className='text-white text-md font-medium pr-2'>Your personalized Marriage Matching report will be delivered within 24–48 hours after receiving both birth details.</p>
              </div>
  
  
            </div>
  
          </div>
        </div>
  
      </div>
      
    );
}

export default MarriageMatchingService
