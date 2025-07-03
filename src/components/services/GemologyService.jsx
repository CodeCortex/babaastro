import React from 'react'

const GemologyService = () => {
    const publicUrl = process.env.PUBLIC_URL || "";

    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${publicUrl}/assets/img/service/gemology/BabaHeader.svg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
            height:"620px"
          }}
          className="background w-full "
        >
          <div style={{padding:"140px"}} className="lg:p-[140px] p-4 md:py-10 pr-0 md:w-3/4 ">
            <p className=" w-3/4 md:4/5 font-bold text-white text-sm md:text-3xl md:pt-10 md:pl-8">
            Are the gemstones you're wearing truly supporting your energy? 
            Each gem holds cosmic power that can transform your life—if chosen wisely. Discover the ideal gemstone for your success and well-being with a personalized Gemology Consultation by               <span style={{ color: "#00FFF7" }} className="text-[#FFE270]"> Baba Astro.</span>
            </p>
            <div className='md:pl-8'>
            <button style={{ backgroundColor: "#00615E" }} className="p-3 md:px-6  mt-6 md:mt-20 text-md md:text-2xl font-bold text-white rounded-2xl bg-[#FFE270]">
              Order Your Report Now
            </button>
            </div>
         
          </div>
        </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
        <div style={{ background: "linear-gradient(to right, #00827E, #00827E)" }} className='w-full  flex justify-center items-center'>
  
  
        <div style={{ background: "linear-gradient(to bottom right,#00615E, #25BFBB)" }} className='rounded-3xl md:flex md:item-center w-4/5 p-10 my-20'>
        <div className='md:w-1/2 lg:pl-12'  >
              <p className='lg:text-3xl text-lg pt-4 lg:pt-8 font-bold text-white'>What is a Gemology Consultation?</p>
              <p className='lg:text-xl text-md  md:pt-6  font-medium text-white'>Gemology, in Vedic astrology, is the study of how gemstones interact with planetary energies. Wearing the right gemstone strengthens beneficial planets and balances karmic influences, promoting prosperity, health, and protection.</p>
  
              <p className='lg:text-3xl text-lg pt-4 lg:pt-8 font-bold text-white'>During a personalized Gemology Consultation with Baba Astro, you’ll receive:</p>
              <ul className='lg:text-xl text-sm pt-2 md:pt-6 font-medium text-white space-y-2  lg:space-y-4'>
                <li>✨ Planetary Gem Recommendations – Discover which planet rules your destiny and which gem supports it.

                </li>
                <li>💡 Personalized Gemstone Prescription – Find your ideal stone based on your birth chart and life goals.
                </li>
                <li>🛠 Wearing Guidelines & Rituals – Learn the correct metal, finger, mantra, and day to energize your gem.
                </li>
              </ul>
              <button style={{ backgroundColor: "#00615E" }} className='p-3 mt-6 lg:ml-3xl md:px-6 text-sm text-start md:text-xl font-bold text-white rounded-2xl bg-[#FFE270] '>Align your aura with cosmic energy—book your Gemology Consultation today! </button>
  
  
            </div>
  
  
            <div className='md:w-1/2 md:relative md:overflow-visible flex items-center md:pt-6'>
              <div className='md:absolute md:right-[-100px]'>
              <img className='md:w-[688px] md:h-[688px]' src={`${publicUrl}/assets/img/service/mantrabook.svg`} alt="handmantra" />
              </div>
            </div>
          </div>
        </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
        <div style={{background: "linear-gradient(to right, #00827E, #00827E)" }} className=' w-full bg-gradient-to-r from-[#000000] to-[#19324E] flex flex-col lg:flex-row lg:flex lg:justify-around lg:px-42 px-10 pb-6 md:pb-20 gap-3 lg:gap-8'>
  
          <div className='lg:w-3/5'>
            <p style={{color:"#FFFFFF"}} className='md:text-3xl text-md pt-4 md:pt-8 font-bold text-[#FFE270]'>How Gemology Influences Your Life</p>
            <p className='text-white md:text-xl text-sm font-medium pb-3 md:pb-8 pt-2 md:pt-4'>Each gemstone vibrates with a specific planetary frequency. When worn correctly, it can amplify positivity and reduce planetary challenges in your life.</p>
            <button style={{background:"#00615E"}} className='p-3 px-6 text-md  font-bold text-white rounded-2xl bg-[#FFE270]'>Order Your report Now</button>
          </div>
  
          <div style={{background: "linear-gradient(to bottom right, #00615E, #00615E)" }} className='border-2 bg-gradient-to-br from-[#000000] to-[#313131] rounded-2xl shadow-2xl'>
            <div className='flex items-center flex-col py-2 lg:py-5'>
              <img className="rounded-full w-16 h-16 lg:w-28 lg:h-28 " src="https://static0.futurepoint.in/1407219268/futurepointindia/images/zodiac/zodiac-sign/Libra-7.png" alt="" />
              <p className=' lg:text-2xl text-xl text-white font-extrabold'>Career Growth & Confidence </p>
              <p className='text-white text-sm lg:text-xl py-4 px-2 lg:py-12 text-center'>Empower yourself with gems that attract recognition, leadership, and focus.</p>
            </div>
          </div>
          <div style={{background: "linear-gradient(to bottom right, #00615E, #00615E)" }}   className='border-2 bg-gradient-to-br from-[#000000] to-[#313131] rounded-2xl shadow-2xl '>
            <div className='flex items-center flex-col py-2 lg:py-5'>
              <img className="rounded-full w-16 h-16 lg:w-28 lg:h-28 " src="https://static0.futurepoint.in/1407219268/futurepointindia/images/zodiac/zodiac-sign/Libra-7.png" alt="" />
              <p className=' lg:text-2xl text-xl text-white font-extrabold'>Love & Relationships </p>
              <p className='text-white text-sm lg:text-xl py-4 px-2 lg:py-12 text-center'>Enhance emotional bonds and harmony with gems that boost Venus or Moon energies.</p>
            </div>
          </div>
  
  
  
  
        </div>
  
        <div style={{background: "linear-gradient(to bottom, white, white)" }}  className='w-full bg-gradient-to-b from-[#2C79C5] to-[#1A2F6F]'>
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
  
  
        <div style={{background: "linear-gradient(to bottom right, #00827E, #00827E)" }} className='w-full bg-gradient-to-br from-[#000000] to-[#19324E] px-10 lg:px-42'>
          <div className='flex  flex-col items-center'>
  
            <div className='w-full pb-16'>
              <h2 style={{color:"#FFFFFF"}} className='md:text-3xl text-md text-md pt-12 pb-4 font-bold text-[#FFE270] text-center'>How Gemology Supports Different Areas of Life</h2>
              <p className='text-white text-sm md:text-xl font-medium text-center px-4 lg:px-28'>Gemstones aren’t fashion—they’re tools of transformation. The right stone acts as an energetic bridge between you and the universe’s blessings.</p>
            </div>
  
            <div className='lg:pb-14'>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 flex  flex-col flex-wrap'>
                <div style={{boxShadow:"#808080", background:"#00615E"}} className=' bg-[#737373] rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                  <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                  <p className=' lg:text-2xl text-lg text-white font-extrabold py-3 pb-1'>Career & Business</p>
                  <p className='text-white text-md md:text-xl font-medium pr-2'>Struggling with self-doubt or growth blocks? Empower your Mercury, Sun, or Saturn with gems for communication, leadership, and perseverance.</p>
                </div>
                <div style={{boxShadow:"#808080", background:"#00615E"}} className=' bg-[#737373] rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                  <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                  <p className=' lg:text-2xl text-lg text-white font-extrabold py-3 pb-1'>Love & Relationships</p>
                  <p className='text-white text-md md:text-xl font-medium pr-2'>Feeling emotionally imbalanced? Gemstones like Diamond, Moonstone, or Emerald enhance love, empathy, and harmony.</p>
                </div>
                <div style={{boxShadow:"#808080", background:"#00615E"}} className=' bg-[#737373] rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                  <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                  <p className=' lg:text-2xl text-lg text-white font-extrabold py-3 pb-1'>Peace & Emotional Balance</p>
                  <p className='text-white text-md md:text-xl font-medium pr-2'>Overthinking, anxiety, or emotional stress? Calming gems like Blue Sapphire, Pearl, or Amethyst can stabilize your mind and spirit.</p>
                </div>
                <div style={{boxShadow:"#808080", background:"#00615E"}} className=' bg-[#737373]  rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                  <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                  <p className=' lg:text-2xl text-lg text-white font-extrabold py-3 pb-1'>Health & Vitality</p>
                  <p className='text-white text-md md:text-xl font-medium pr-2'>Facing recurring health issues? Strengthen weak planetary zones with the right gem-based support..</p>
                </div>
                <div style={{boxShadow:"#808080", background:"#00615E"}} className=' bg-[#737373] rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                  <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                  <p className=' lg:text-2xl text-lg text-white font-extrabold py-3 pb-1'>Protection & Spiritual Energy</p>
                  <p className='text-white text-md md:text-xl font-medium pr-2'>Worried about negativity or spiritual blocks? Protective stones like Hessonite, Cat’s Eye, and Coral shield your aura and uplift your soul.</p>
                </div>
  
  
              </div>
  
            </div>
  
            <div className='w-full pb-8 lg:pb-16'>
              <h2 style={{color:"#FFFFFF"}} className='md:text-3xl text-md pt-12 pb-4 font-bold text-[#FFE270] text-center'>Amplify what’s meant for you—wear your planetary ally.
              Book your Gemology Consultation with Baba Astro today!   </h2>
              <p className='text-white text-xl lg:text-3xl font-bold text-center lg:px-28'>What to Expect from Your Gemology Consultation</p>
            </div>
  
            <div className='w-full'>
              <div className='px-8'>
  
                {/* ................ */}
                <div className='flex flex-wrap items-center justify-around pb-12'>
                  <div >
                    <p className='text-white md:text-2xl font-medium py-2' >1. Birth Chart-Based Analysis</p>
                    <ul>
                      <li className='text-white text-md md:text-xl font-medium'>•	Study of planetary strengths and weaknesses.
                      </li>
                      <li className='text-white text-md md:text-xl font-medium '>• Identification of supportive and harmful planets.
                      .</li>
                      <li className='text-white text-md md:text-xl font-medium pb-8'>•	Mapping your karmic imbalances and opportunities.</li>
                    </ul>
                    <p className='text-white md:text-2xl font-medium py-2' >2. Personalized Gemstone Recommendation</p>
                    <ul>
                      <li className='text-white text-md md:text-xl font-medium'>•	Specific gems based on your Lagna, Moon sign, and planetary periods (Dasha).

                      </li>
                      <li className='text-white text-md md:text-xl font-medium '>•	Secondary and substitute options if primary gems are unaffordable or unavailable.

                      </li>
                      <li className='text-white text-md md:text-xl font-medium pb-8'>•	Explanation of gem impact on your current goals.</li>
                    </ul>
                  </div>
                  <div className=''>
                  <img style={{width:"400px", height:"400px", boxShadow:"3px 3px 2px 2px purple"}} className='md:w-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl shadow-purple-400' src={`${publicUrl}/assets/img/service/gemology/Picture1.svg`} alt="" />
                  </div>
                </div>
  
                {/* .................... */}
                <div className='flex flex-col lg:flex-row items-center lg:justify-around justify-center pb-12'>
                  <div className=''>
                  <img style={{width:"400px", height:"400px", boxShadow:"3px 3px 2px 2px pink"}} className='md:w-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl shadow-pink-400' src={`${publicUrl}/assets/img/service/gemology/Picture2.svg`} alt="" />
                  </div>
  
                  <div >
                    <p className='text-white md:text-2xl font-medium py-2 pt-10 lg:pt-2' >3. Dos & Don’ts for Wearing Gems</p>
                    <ul>
                      <li className='text-white text-md md:text-xl font-medium'>•	Correct metal (gold, silver, copper) for each stone.

                      </li>
                      <li className='text-white text-md md:text-xl font-medium '>•	Finger, hand, day, and planetary hour to wear the gem.

                      </li>
                      <li className='text-white text-md md:text-xl font-medium pb-8'>•	Energizing rituals and mantras for activation.</li>
                    </ul>
                    <p className='text-white md:text-2xl font-medium py-2' >4. Remedies & Enhancements</p>
                    <ul>
                      <li className='text-white text-md md:text-xl font-medium'>• Gemstone-powered rituals for wealth, health, and peace.

                      </li>
                      <li className='text-white text-md md:text-xl font-medium '>•	Combined usage of gems, yantras, and rudraksha for powerful results.

                      </li>
                      <li className='text-white text-md md:text-xl font-medium pb-8'>•	Protection strategies using specific stones.</li>
                    </ul>
                  </div>
  
  
  
                </div>
                {/* .................. */}
                <div className='flex flex-wrap items-center justify-around pb-10 md:pb-20'>
                  <div >
                    <p className='text-white md:text-2xl font-medium py-2' >5. Lifelong Maintenance & Guidance</p>
                    <ul>
                      <li className='text-white text-md md:text-xl font-medium'>•	Advice on gem cleansing, energizing, and long-term care.

                      </li>
                      <li className='text-white text-md md:text-xl font-medium '>•	Timelines for when to wear, replace, or remove gemstones.

                      </li>
                      <li className='text-white text-md md:text-xl font-medium pb-8'>•	Support for gem upgrades as life situations evolve.</li>
                    </ul>
                    <p className='text-white md:text-2xl font-medium py-2' >6. Ongoing Support & Follow-Ups</p>
                    <ul>
                      <li className='text-white text-md md:text-xl font-medium'>•	Follow-up readings during major life changes (job, marriage, health).

                      </li>
                      <li className='text-white text-md md:text-xl font-medium '>•	Assistance in sourcing 100% authentic and energized gemstones.

                      </li>
                      <li className='text-white text-md md:text-xl font-medium pb-8'>•	Long-term guidance for maximum gem efficacy.</li>
                    </ul>
                  </div>
                  <div className=''>
                  <img style={{width:"400px", height:"400px", boxShadow:"3px 3px 2px 2px yellow"}} className='md:w-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl shadow-yellow-400' src={`${publicUrl}/assets/img/service/gemology/Picture3.svg`} alt="" />
                  </div>
                </div>
              </div>
  
              <div>
                <p className='text-white text-md md:text-2xl lg:text-3xl font-extrabold text-center px-0 '>  Let the right gem become your cosmic companion.

                </p>
                <p className='text-white text-md md:text-2xl lg:text-3xl font-extrabold py-3 text-center pb-10'>Book your Gemology Consultation with Baba Astro today!  </p>
              </div>
  
            </div>
          </div>
  
        </div>
  
  
  
        <div style={{background: "linear-gradient(to bottom , #FFFFFF, #FFFFFF)" }}  className='w-full bg-gradient-to-b from-[#2C79C5] to-[#1A2F6F] px-8 pb-8 lg:px-42'>
          <div className='flex flex-wrap md:flex-row items-center justify-between'>
            <div className='md:w-3/4 '>
              <div className="flex flex-col py-8 lg:py-14">
                <p style={{color:"#00615E"}} className=' text-xl md:text-2xl lg:text-3xl font-extrabold py-3'>Get Your Personalized Gemology Report Now!</p>
                <h2 className='text-black text-md md:text-xl lg:text-2xl font-extralight'>Unlock the mystical power of the right gemstone and transform your life’s journey. Receive detailed insights, energized rituals, and the gem that aligns with your destiny.</h2>
              </div>
            </div>
            <div className='md:1/4'>
  
              <button style={{background:"#00615E"}} className='p-3   px-20 text-md  md:text-3xl font-bold text-white rounded-2xl bg-[#FFE270] shadow-2xl divide-fuchsia-50'>Order No</button>
            </div>
          </div>
  
  
  
        </div>
  
        <div style={{background:"#000000"}} className=' lg:px-42 px-8 pt-6 lg:pt-15'>
          <h1 className='text-white text-xl md:text-3xl font-extrabold text-center '>Choose Your Consultation Plan:</h1>
          <div className='flex flex-wrap  md:flex-row   flex-col gap-4 lg:items-center lg:justify-evenly py-8 lg:py-10'>
          <img style={{width:"320px", height:"430px", objectFit:"cover"}} className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-3xl' src={`${publicUrl}/assets/img/service/gemology/Pricing.svg`} alt="" />
            {/* <img className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-4xl' src={buyNow} alt="" /> */}
            {/* <img className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-4xl' src={buyNow} alt="" /> */}
            {/* <img className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-4xl' src={buyNow} alt="" /> */}
            {/* <img className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-4xl' src={buyNow} alt="" /> */}
          </div>
        </div>
  
  
        <div style={{background: "linear-gradient(to bottom , white, white)" }} className=' w-full bg-gradient-to-r from-[#000000] to-[#19324E] flex flex-col lg:flex-row justify-around px-8 lg:px-42 pb-20 gap-8'>
  
          <div className='lg:w-1/3 pt-10'>
            <h2 style={{color:"#00615E"}} className='md:text-3xl text-md font-bold text-[#FFE270] text-center md:text-start'>How accurate is the gemstone recommendation?</h2>
            <p className='text-xl pt-6 pb-10  font-medium text-black'>We follow authentic Vedic astrology and detailed horoscope analysis to match your exact planetary needs.</p>
            <button style={{background:"#00615E"}} className='p-3  w-full px-20  text-xl md:text-3xl font-bold text-white rounded-2xl bg-[#FFE270] shadow-2xl divide-fuchsia-50'>Order Your report Now</button>
          </div>
  
          <div className='lg:w-2/3 pt-10'>
            <div className='md:grid md:grid-cols-2 flex flex-col  gap-6'>
  
              <div style={{background:"#00615E", boxShadow:"3px 3px 2px 2px #808080"}} className=' bg-[#737373] rounded-3xl p-4 shadow shadow-2xl shadow-[#2C79C5]'>
                <h1 className=' lg:text-2xl text-lg text-white font-extrabold py-3'>Can I wear multiple gemstones?</h1>
                <p className='text-white text-md font-medium pr-2'>Yes, but only after compatibility analysis. Wearing the wrong combination can do more harm than good.</p>
              </div>
              <div style={{background:"#00615E", boxShadow:"3px 3px 2px 2px #808080"}} className=' bg-[#737373] rounded-3xl p-4 shadow shadow-2xl shadow-[#2C79C5]'>
                <h1 className=' lg:text-2xl text-lg text-white font-extrabold py-3'>Is the consultation personalized?</h1>
                <p className='text-white text-md font-medium pr-2'>Absolutely! Every gemstone recommendation is based on your birth chart, goals, and current planetary period.</p>
              </div>
              <div style={{background:"#00615E" , boxShadow:"3px 3px 2px 2px #808080"}} className=' bg-[#737373] rounded-3xl p-4 shadow shadow-2xl shadow-[#2C79C5]'>
                <h1 className=' lg:text-2xl text-lg text-white font-extrabold py-3'>In which format will I receive my report?</h1>
                <p className='text-white text-md font-medium pr-2'>You’ll receive a digital PDF report by email, with detailed gemstone suggestions, rituals, and guidelines.</p>
              </div>
              <div style={{background:"#00615E", boxShadow:"3px 3px 2px 2px #808080"}} className=' bg-[#737373] rounded-3xl p-4 shadow shadow-2xl shadow-[#2C79C5]'>
                <h1 className=' lg:text-2xl text-lg text-white font-extrabold py-3'>When will I receive my consultation report?</h1>
                <p className='text-white text-md font-medium pr-2'>Your personalized Gemology report will be delivered within 24–48 hours after the consultation..</p>
              </div>
  
  
            </div>
  
          </div>
        </div>
  
      </div>
      
    );
}

export default GemologyService
