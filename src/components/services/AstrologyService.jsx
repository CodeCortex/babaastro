import React from 'react';

const AstrologyService = () => {
  const publicUrl = process.env.PUBLIC_URL || "";

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${publicUrl}/assets/img/service/babaastro.svg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          height:"620px"
        }}
        className="background w-full "
      >
        <div style={{padding:"140px"}} className="lg:p-[140px] p-4 md:py-10 pr-0 md:w-3/4 ">
          <p className=" w-3/4 md:4/5 font-bold text-white text-sm md:text-3xl md:pt-10 md:pl-8">
            Is life feeling like an endless series of challenges? The stars may hold the answers! Discover the cosmic influences shaping your destiny with a personalized Vastu consultation by
            <span style={{ color: "#FFE270" }} className="text-[#FFE270]"> Baba Astro.</span>
          </p>
          <div className='md:pl-8'>
          <button style={{ backgroundColor: "#FFE270" }} className="p-3 md:px-6  mt-6 md:mt-20 text-md md:text-2xl font-bold text-black rounded-2xl bg-[#FFE270]">
            Order Your Report Now
          </button>
          </div>
       
        </div>
      </div>














      <div style={{ background: "linear-gradient(to right, #000000, #19324E)" }} className='w-full  flex justify-center items-center'>


      <div style={{ background: "linear-gradient(to bottom right,#2C79C5, #1A2F6F)" }} className='rounded-3xl md:flex md:item-center w-4/5 p-10 my-20'>
      <div className='md:w-1/2 lg:pl-12'  >
            <p className='lg:text-3xl text-lg pt-4 lg:pt-8 font-bold text-white'>What is an Astrology Consultation?</p>
            <p className='lg:text-xl text-md  md:pt-6  font-medium text-white'>Astrology is an ancient science that reveals how planetary movements influence different aspects of your life. From career and relationships to health and finances, the alignment of celestial bodies can shape your destiny.</p>

            <p className='lg:text-3xl text-lg pt-4 lg:pt-8 font-bold text-white'>During a personalized astrology consultation with Baba Astro, you’ll receive :</p>
            <ul className='lg:text-xl text-sm pt-2 md:pt-6 font-medium text-white space-y-2  lg:space-y-4'>
              <li>✨ Insightful Analysis – Understand how planetary transits impact your life.</li>
              <li>💡 Personalized Guidance – Get expert advice on career, relationships, and well-being.</li>
              <li>🛠 Remedies & Solutions – Practical astrological remedies to overcome challenges.</li>
            </ul>
            <button style={{ backgroundColor: "#FFE270" }} className='p-3 mt-6 lg:ml-3xl md:px-6 text-sm text-start md:text-xl font-bold text-black rounded-2xl bg-[#FFE270] '>Take control of your future—book your astrology consultation today!</button>


          </div>


          <div className='md:w-1/2 md:relative md:overflow-visible flex items-center md:pt-6'>
            <div className='md:absolute md:right-[-100px]'>
            <img className='md:w-[688px] md:h-[688px]' src={`${publicUrl}/assets/img/service/mantrabook.svg`} alt="handmantra" />
            </div>
          </div>
        </div>
      </div>














      <div style={{background: "linear-gradient(to right, #000000, #19324E)" }} className=' w-full bg-gradient-to-r from-[#000000] to-[#19324E] flex flex-col lg:flex-row lg:flex lg:justify-around lg:px-42 px-10 pb-6 md:pb-20 gap-3 lg:gap-8'>

        <div className='lg:w-3/5'>
          <p style={{color:"#FFE270"}} className='md:text-3xl text-md pt-4 md:pt-8 font-bold text-[#FFE270]'>How Planetary Movements Affect Your Life</p>
          <p className='text-white md:text-xl text-sm font-medium pb-3 md:pb-8 pt-2 md:pt-4'>Every zodiac sign experiences unique challenges and opportunities based on planetary transits. Understanding these influences can help you navigate life’s ups and downs with clarity and confidence. </p>
          <button className='p-3 px-6 text-md  font-bold text-black rounded-2xl bg-[#FFE270]'>Order Your report Now</button>
        </div>

        <div style={{background: "linear-gradient(to bottom right, #000000, #313131)" }} className='border-2 bg-gradient-to-br from-[#000000] to-[#313131] rounded-2xl shadow-2xl'>
          <div className='flex items-center flex-col py-2 lg:py-5'>
            <img className="rounded-full w-16 h-16 lg:w-28 lg:h-28 " src="https://static0.futurepoint.in/1407219268/futurepointindia/images/zodiac/zodiac-sign/Libra-7.png" alt="" />
            <p className=' lg:text-2xl text-xl text-white font-extrabold'>Aquarius</p>
            <p className='text-white text-sm lg:text-xl py-4 px-2 lg:py-12 text-center'>A period of self-reflection; embrace personal growth and align with your true purpose.</p>
          </div>
        </div>
        <div style={{background: "linear-gradient(to bottom right, #000000, #313131)" }}   className='border-2 bg-gradient-to-br from-[#000000] to-[#313131] rounded-2xl shadow-2xl '>
          <div className='flex items-center flex-col py-2 lg:py-5'>
            <img className="rounded-full w-16 h-16 lg:w-28 lg:h-28 " src="https://static0.futurepoint.in/1407219268/futurepointindia/images/zodiac/zodiac-sign/Libra-7.png" alt="" />
            <p className=' lg:text-2xl text-xl text-white font-extrabold'>Aquarius</p>
            <p className='text-white text-sm lg:text-xl py-4 px-2 lg:py-12 text-center'>A period of self-reflection; embrace personal growth and align with your true purpose.</p>
          </div>
        </div>




      </div>

      <div style={{background: "linear-gradient(to bottom, #2C79C5, #1A2F6F)" }}  className='w-full bg-gradient-to-b from-[#2C79C5] to-[#1A2F6F]'>
        <div className='grid md:grid-cols-4 grid-cols-2'>
          <div className="flex flex-col items-center py-8 lg:py-14">
            <strong className='text-white text-md md:text-lg lg:text-3xl font-extrabold'>10,000/-</strong>
            <h2 className='text-white text-md md:text-xl lg:text-4xl font-extralight'>Consultancy</h2>
          </div>
          <div className="flex flex-col items-center py-8 lg:py-14">
            <strong className='text-white text-md md:text-lg lg:text-3xl font-extrabold'>10+</strong>
            <h2 className='text-white text-md md:text-xl lg:text-4xl font-extralight'>Years of Prediction</h2>
          </div>
          <div className="flex flex-col items-center  pb-8  md:py-8 lg:py-14">
            <strong className='text-white text-md md:text-lg lg:text-3xl font-extrabold'>100%</strong>
            <h2 className='text-white text-md md:text-xl lg:text-4xl font-extralight'>Accuracy Rate</h2>
          </div>
          <div className="flex flex-col items-center  pb-8 md:py-8 lg:py-14">
            <strong className='text-white text-md md:text-lg lg:text-3xl font-extrabold'>30+</strong>
            <h2 className='text-white text-md md:text-xl lg:text-4xl font-extralight'>Years of Legacy</h2>
          </div>

        </div>


      </div>


      <div style={{background: "linear-gradient(to bottom right, #000000, #19324E)" }} className='w-full bg-gradient-to-br from-[#000000] to-[#19324E] px-10 lg:px-42'>
        <div className='flex  flex-col items-center'>

          <div className='w-full pb-16'>
            <h2 style={{color:"#FFE270"}} className='md:text-3xl text-md text-md pt-12 pb-4 font-bold text-[#FFE270] text-center'>How Do Planetary Transits Impact Your Life?</h2>
            <p className='text-white text-sm md:text-xl font-medium text-center px-4 lg:px-28'>Planetary movements influence various aspects of life, shaping experiences and challenges. A personalized astrology consultation can help you navigate these shifts with clarity and confidence.</p>
          </div>

          <div className='lg:pb-14'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 flex  flex-col flex-wrap'>
              <div style={{boxShadow:"#2C79C5", background:"#737373"}} className=' bg-[#737373] rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                <p className=' lg:text-2xl text-lg text-white font-extrabold py-3 pb-1'>Career</p>
                <p className='text-white text-md md:text-xl font-medium pr-2'>Planetary movements influence various aspects of life, shaping experiences and challenges. A personalized astrology consultation can help you navigate these shifts with clarity and confidence.</p>
              </div>
              <div style={{boxShadow:"#2C79C5", background:"#737373"}} className=' bg-[#737373] rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                <p className=' lg:text-2xl text-lg text-white font-extrabold py-3 pb-1'>Relationships</p>
                <p className='text-white text-md md:text-xl font-medium pr-2'>Misunderstandings and emotional ups and downs? Learn how celestial alignments impact your relationships and how to foster harmony.</p>
              </div>
              <div style={{boxShadow:"#2C79C5", background:"#737373"}} className=' bg-[#737373] rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                <p className=' lg:text-2xl text-lg text-white font-extrabold py-3 pb-1'>Marriage</p>
                <p className='text-white text-md md:text-xl font-medium pr-2'>Facing tensions in your marriage? Astrology can provide insights into relationship dynamics and help strengthen your bond.</p>
              </div>
              <div style={{boxShadow:"#2C79C5", background:"#737373"}} className=' bg-[#737373]  rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                <p className=' lg:text-2xl text-lg text-white font-extrabold py-3 pb-1'>Health</p>
                <p className='text-white text-md md:text-xl font-medium pr-2'>Stress, fatigue, or unexpected health concerns? Planetary shifts can influence your well-being—get personalized guidance on maintaining balance.</p>
              </div>
              <div style={{boxShadow:"#2C79C5", background:"#737373"}} className=' bg-[#737373] rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                <p className=' lg:text-2xl text-lg text-white font-extrabold py-3 pb-1'>Finances</p>
                <p className='text-white text-md md:text-xl font-medium pr-2'>Experiencing financial instability or unexpected expenses? Learn how astrological remedies can help you manage wealth and plan for stability</p>
              </div>


            </div>

          </div>

          <div className='w-full pb-8 lg:pb-16'>
            <h2 style={{color:"#FFE270"}} className='md:text-3xl text-md pt-12 pb-4 font-bold text-[#FFE270] text-center'>Gain deeper insights into your life’s journey!
              Book a personalized astrology consultation with Baba Astro today!</h2>
            <p className='text-white text-xl lg:text-3xl font-bold text-center lg:px-28'>What to Expect from Your Astrology Consultation</p>
          </div>

          <div className='w-full'>
            <div className='px-8'>

              {/* ................ */}
              <div className='flex flex-wrap items-center justify-around pb-12'>
                <div >
                  <p className='text-white md:text-2xl font-medium py-2' >1. Personalized Horoscope Analysis</p>
                  <ul>
                    <li className='text-white text-md md:text-xl font-medium'>•	Deep insights from your natal chart.</li>
                    <li className='text-white text-md md:text-xl font-medium '>•	Understanding planetary influences on your life.</li>
                    <li className='text-white text-md md:text-xl font-medium pb-8'>•	How celestial alignments shape your future.</li>
                  </ul>
                  <p className='text-white md:text-2xl font-medium py-2' >2. Planetary Transits & Their Effects</p>
                  <ul>
                    <li className='text-white text-md md:text-xl font-medium'>• Key challenge periods based on planetary movements.
                    </li>
                    <li className='text-white text-md md:text-xl font-medium '>• Understanding major astrological phases.
                    </li>
                    <li className='text-white text-md md:text-xl font-medium pb-8'>•	How these transitions impact different aspects of life.</li>
                  </ul>
                </div>
                <div className=''>
                <img style={{width:"400px", height:"400px", boxShadow:"3px 3px 2px 2px purple"}} className='md:w-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl shadow-purple-400' src={`${publicUrl}/assets/img/service/mantra.svg`} alt="" />
                </div>
              </div>

              {/* .................... */}
              <div className='flex flex-col lg:flex-row items-center lg:justify-around justify-center pb-12'>
                <div className=''>
                <img style={{width:"400px", height:"400px", boxShadow:"3px 3px 2px 2px pink"}} className='md:w-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl shadow-pink-400' src={`${publicUrl}/assets/img/service/mantrabook2.svg`} alt="" />
                </div>

                <div >
                  <p className='text-white md:text-2xl font-medium py-2 pt-10 lg:pt-2' >3. Future Predictions</p>
                  <ul>
                    <li className='text-white text-md md:text-xl font-medium'>•	Career growth opportunities and challenges.
                    </li>
                    <li className='text-white text-md md:text-xl font-medium '>•	Relationship dynamics and compatibility insights.
                    </li>
                    <li className='text-white text-md md:text-xl font-medium pb-8'>•	Financial stability and wealth-building guidance.</li>
                  </ul>
                  <p className='text-white md:text-2xl font-medium py-2' >4. Remedies & Gemstone Suggestions</p>
                  <ul>
                    <li className='text-white text-md md:text-xl font-medium'>•	Powerful Vedic remedies to balance planetary effects.
                    </li>
                    <li className='text-white text-md md:text-xl font-medium '>•	Gemstone recommendations for success and protection.
                    </li>
                    <li className='text-white text-md md:text-xl font-medium pb-8'>•	Rituals and spiritual practices for positive energy.</li>
                  </ul>
                </div>



              </div>
              {/* .................. */}
              <div className='flex flex-wrap items-center justify-around pb-10 md:pb-20'>
                <div >
                  <p className='text-white md:text-2xl font-medium py-2' >5. Practical Life Guidance</p>
                  <ul>
                    <li className='text-white text-md md:text-xl font-medium'>•	Actionable advice tailored to your astrological chart.
                    </li>
                    <li className='text-white text-md md:text-xl font-medium '>•	Well-being and stress management strategies.
                    </li>
                    <li className='text-white text-md md:text-xl font-medium pb-8'>•	Techniques to harness cosmic energy for success.</li>
                  </ul>
                  <p className='text-white md:text-2xl font-medium py-2' >6. Ongoing Support & Consultations</p>
                  <ul>
                    <li className='text-white text-md md:text-xl font-medium'>•	Continued guidance to help you navigate life’s changes.
                    </li>
                    <li className='text-white text-md md:text-xl font-medium '>•	Periodic follow-ups for deeper clarity.
                    </li>
                    <li className='text-white text-md md:text-xl font-medium pb-8'>•	Personalized astrology sessions for long-term growth.</li>
                  </ul>
                </div>
                <div className=''>
                <img style={{width:"400px", height:"400px", boxShadow:"3px 3px 2px 2px yellow"}} className='md:w-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl shadow-yellow-400' src={`${publicUrl}/assets/img/service/handmantra.webp`} alt="" />
                </div>
              </div>
            </div>

            <div>
              <p className='text-white text-md md:text-2xl lg:text-3xl font-extrabold text-center px-0 '> Unlock the secrets of your destiny!
              </p>
              <p className='text-white text-md md:text-2xl lg:text-3xl font-extrabold py-3 text-center pb-10'>Book your astrology consultation with Baba Astro today! </p>
            </div>

          </div>
        </div>

      </div>



      <div style={{background: "linear-gradient(to bottom , #2C79C5, #1A2F6F)" }}  className='w-full bg-gradient-to-b from-[#2C79C5] to-[#1A2F6F] px-8 pb-8 lg:px-42'>
        <div className='flex flex-wrap md:flex-row items-center justify-between'>
          <div className='md:w-3/4 '>
            <div className="flex flex-col py-8 lg:py-14">
              <p className='text-white text-xl md:text-2xl lg:text-3xl font-extrabold py-3'>Get Your Personalized Astrology Consultation Now!</p>
              <h2 className='text-white text-md md:text-xl lg:text-2xl font-extralight'>Unlock deep insights into your career, finances, relationships, and health with expert astrological guidance.</h2>
            </div>
          </div>
          <div className='md:1/4'>

            <button style={{background:"#FFE270"}} className='p-3   px-20 text-md  md:text-3xl font-bold text-black rounded-2xl bg-[#FFE270] shadow-2xl divide-fuchsia-50'>Order No</button>
          </div>
        </div>



      </div>

      <div className=' lg:px-42 px-8 pt-6 lg:pt-15'>
        <h1 className='text-black text-xl md:text-3xl font-extrabold text-center '>Choose Your Consultation Plan:</h1>
        <div className='flex flex-wrap  md:flex-row   flex-col gap-4 lg:items-center lg:justify-evenly py-8 lg:py-10'>
        <img style={{width:"320px", height:"430px", objectFit:"cover"}} className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-3xl' src={`${publicUrl}/assets/img/service/pricing/pricing1.jpg`} alt="" />
          {/* <img className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-4xl' src={buyNow} alt="" /> */}
          {/* <img className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-4xl' src={buyNow} alt="" /> */}
          {/* <img className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-4xl' src={buyNow} alt="" /> */}
          {/* <img className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-4xl' src={buyNow} alt="" /> */}
        </div>
      </div>


      <div style={{background: "linear-gradient(to bottom , #000000, #19324E)" }} className=' w-full bg-gradient-to-r from-[#000000] to-[#19324E] flex flex-col lg:flex-row justify-around px-8 lg:px-42 pb-20 gap-8'>

        <div className='lg:w-1/3 pt-10'>
          <h2 style={{color:"#FFE270"}} className='md:text-3xl text-md font-bold text-[#FFE270] text-center md:text-start'>How accurate is the astrology consultation?</h2>
          <p className='text-xl pt-6 pb-10  font-medium text-white'>Our consultations are based on precise planetary calculations and deep Vedic astrology principles, ensuring highly accurate insights tailored to your birth chart.</p>
          <button style={{background:"#FFE270"}} className='p-3  w-full px-20  text-xl md:text-3xl font-bold text-black rounded-2xl bg-[#FFE270] shadow-2xl divide-fuchsia-50'>Order No</button>
        </div>

        <div className='lg:w-2/3 pt-10'>
          <div className='md:grid md:grid-cols-2 flex flex-col  gap-6'>

            <div style={{background:"#73737", boxShadow:"3px 3px 2px 2px #2C79C5"}} className=' bg-[#737373] rounded-3xl p-4 shadow shadow-2xl shadow-[#2C79C5]'>
              <h1 className=' lg:text-2xl text-lg text-white font-extrabold py-3'>How soon can I see results from the remedies?</h1>
              <p className='text-white text-md font-medium pr-2'>The effectiveness of remedies varies based on individual charts and planetary influences. Some may experience immediate relief, while others see gradual improvements over time</p>
            </div>
            <div style={{background:"#73737", boxShadow:"3px 3px 2px 2px #2C79C5"}} className=' bg-[#737373] rounded-3xl p-4 shadow shadow-2xl shadow-[#2C79C5]'>
              <h1 className=' lg:text-2xl text-lg text-white font-extrabold py-3'>Is the consultation personalized?</h1>
              <p className='text-white text-md font-medium pr-2'>Yes, each consultation is tailored to your unique birth chart, ensuring insights and remedies specific to your life’s challenges and opportunities.</p>
            </div>
            <div style={{background:"#73737" , boxShadow:"3px 3px 2px 2px #2C79C5"}} className=' bg-[#737373] rounded-3xl p-4 shadow shadow-2xl shadow-[#2C79C5]'>
              <h1 className=' lg:text-2xl text-lg text-white font-extrabold py-3'>In which format will I receive my consultation report?</h1>
              <p className='text-white text-md font-medium pr-2'>You will receive a detailed digital report (PDF format) via email, summarizing key planetary influences, predictions, and remedies.</p>
            </div>
            <div style={{background:"#73737", boxShadow:"3px 3px 2px 2px #2C79C5"}} className=' bg-[#737373] rounded-3xl p-4 shadow shadow-2xl shadow-[#2C79C5]'>
              <h1 className=' lg:text-2xl text-lg text-white font-extrabold py-3'>When will I receive my consultation report?</h1>
              <p className='text-white text-md font-medium pr-2'>Your personalized astrology report will be delivered within 24-48 hours after the consultation.</p>
            </div>


          </div>

        </div>
      </div>

    </div>
    
  );
};

export default AstrologyService;
