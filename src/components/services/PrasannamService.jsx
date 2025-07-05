import React from 'react'

const PrasannamService = () => {
    const publicUrl = process.env.PUBLIC_URL || "";

    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${publicUrl}/assets/img/service/prasannam/BabaHeader.svg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
            height:"620px"
          }}
          className="background w-full "
        >
          <div style={{padding:"140px"}} className="lg:p-[140px] p-4 md:py-10 pr-0 md:w-3/4 ">
            <p className=" w-3/4 md:4/5 font-bold text-white text-sm md:text-3xl md:pt-10 md:pl-8">
            Do you have unanswered questions about your life’s challenges?
 The cosmic energies at the moment of your inquiry hold the key to clarity! Get instant answers and divine guidance through a personalized Prasannam Reading by
               <span style={{ color: "#EAFF00" }} className="text-[#FFE270]"> Baba Astro.</span>
            </p>
            <div className='md:pl-8'>
            <button style={{ backgroundColor: "#390000" }} className="p-3 md:px-6  mt-6 md:mt-20 text-md md:text-2xl font-bold text-white rounded-2xl bg-[#FFE270]">
              Order Your Report Now
            </button>
            </div>
         
          </div>
        </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
        <div style={{ background: "linear-gradient(to right, #FFC800, #FF9000)" }} className='w-full  flex justify-center items-center'>
  
  
        <div style={{ background: "linear-gradient(to bottom right,#FF9000, #FFDE65)" }} className='rounded-3xl md:flex md:item-center w-4/5 p-10 my-20'>
        <div className='md:w-1/2 lg:pl-12'  >
              <p style={{color:"#390000"}} className='lg:text-3xl text-lg pt-4 lg:pt-8 font-bold '>What is a Prasannam Reading?</p>
              <p className='lg:text-xl text-md  md:pt-6  font-medium  text-black'>Prasannam is an ancient astrological technique that provides instant answers to pressing questions based on the cosmic energy at the time of inquiry. It helps you gain clarity on crucial aspects of life, guiding you toward the right decisions.</p>
  
              <p style={{color:"#390000"}} className='lg:text-3xl text-lg pt-4 lg:pt-8 font-bold '>During a personalized Prasannam Reading with Baba Astro, you’ll receive :</p>
              <ul className='lg:text-xl text-sm pt-2 md:pt-6 font-medium text-black space-y-2  lg:space-y-4'>
                <li>✨ Instant Divine Insights – Get precise answers to your most urgent questions using the powerful Prasannam method.
                </li>
                <li>💡 Personalized Guidance – Understand the deeper reasons behind your current situation and the best course of action.
                </li>
                <li>🛠 Effective Remedies & Solutions – Practical astrological remedies to resolve challenges and attract positive outcomes.
                .</li>
              </ul>
              <button style={{ backgroundColor: "#390000" }} className='p-3 mt-6 lg:ml-3xl md:px-6 text-sm text-start md:text-xl font-bold text-white rounded-2xl bg-[#FFE270] '>Take control of your future—book your astrology consultation today!</button>
  
  
            </div>
  
  
            <div className='md:w-1/2 md:relative md:overflow-visible flex items-center md:pt-6'>
              <div className='md:absolute md:right-[-100px]'>
              <img className='md:w-[688px] md:h-[688px]' src={`${publicUrl}/assets/img/service/mantrabook.svg`} alt="handmantra" />
              </div>
            </div>
          </div>
        </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
        <div style={{background: "linear-gradient(to right, #FFC800, #FF9000)" }} className=' w-full bg-gradient-to-r from-[#000000] to-[#19324E] flex flex-col lg:flex-row lg:flex lg:justify-around lg:px-42 px-10 pb-6 md:pb-20 gap-3 lg:gap-8'>
  
          <div className='lg:w-3/5'>
            <p style={{color:"#390000"}} className='md:text-3xl text-md pt-4 md:pt-8 font-bold text-[#FFE270]'>How Prasannam Reading Influences Your Life</p>
            <p className='text-black md:text-xl text-sm font-medium pb-3 md:pb-8 pt-2 md:pt-4'>The universe holds the answers to your most pressing questions, and Prasannam Reading helps unveil them with divine precision. The exact moment you seek guidance carries cosmic energy, shaping the outcome of your query. </p>
            <button style={{background:"#390000"}} className='p-3 px-6 text-md  font-bold text-white rounded-2xl bg-[#FFE270]'>Order Your report Now</button>
          </div>
  
          <div style={{background: "linear-gradient(to bottom right, #FF9000, #FFC800)" }} className='border-2 bg-gradient-to-br from-[#000000] to-[#313131] rounded-2xl shadow-2xl'>
            <div className='flex items-center flex-col py-2 lg:py-5'>
              <img className="rounded-full w-16 h-16 lg:w-28 lg:h-28 " src="https://static0.futurepoint.in/1407219268/futurepointindia/images/zodiac/zodiac-sign/Libra-7.png" alt="" />
              <p style={{color:"#390000"}} className=' lg:text-2xl text-xl  font-extrabold'>Timing & Opportunities</p>
              <p className='text-black text-sm lg:text-xl py-4 px-2 lg:py-12 text-center'>Understand whether this is the right time for a major decision in career, finance, or relationships.</p>
            </div>
          </div>
          <div style={{background: "linear-gradient(to bottom right, #FF9000, #FFC800)" }}   className='border-2 bg-gradient-to-br from-[#000000] to-[#313131] rounded-2xl shadow-2xl '>
            <div className='flex items-center flex-col py-2 lg:py-5'>
              <img className="rounded-full w-16 h-16 lg:w-28 lg:h-28 " src="https://static0.futurepoint.in/1407219268/futurepointindia/images/zodiac/zodiac-sign/Libra-7.png" alt="" />
              <p style={{color:"#390000"}} className=' lg:text-2xl text-xl  font-extrabold'>Relationships & Compatibility</p>
              <p className='text-black text-sm lg:text-xl py-4 px-2 lg:py-12 text-center'>Gain clarity on love, marriage, and partnerships to make informed choices.</p>
            </div>
          </div>
  
  
  
  
        </div>
  
        <div style={{background: "linear-gradient(to bottom, #FFFFFF, #FF9000)" }}  className='w-full bg-gradient-to-b from-[#2C79C5] to-[#1A2F6F]'>
          <div className='grid md:grid-cols-4 grid-cols-2'>
            <div className="flex flex-col items-center py-8 lg:py-14">
              <strong className='text-black text-md md:text-lg lg:text-3xl font-extrabold'>10,000/-</strong>
              <h2 className='text-black text-md md:text-xl lg:text-4xl font-extralight'>Consultancy</h2>
            </div>
            <div className="flex flex-col items-center py-8 lg:py-14">
              <strong className='text-black text-md md:text-lg lg:text-3xl font-extrabold'>10+</strong>
              <h2 className='text-black text-md md:text-xl lg:text-4xl font-extralight'>Years of Prediction</h2>
            </div>
            <div className="flex flex-col items-center  pb-8  md:py-8 lg:py-14">
              <strong className='text-black text-md md:text-lg lg:text-3xl font-extrabold'>100%</strong>
              <h2 className='text-black text-md md:text-xl lg:text-4xl font-extralight'>Accuracy Rate</h2>
            </div>
            <div className="flex flex-col items-center  pb-8 md:py-8 lg:py-14">
              <strong className='text-black text-md md:text-lg lg:text-3xl font-extrabold'>30+</strong>
              <h2 className='text-black text-md md:text-xl lg:text-4xl font-extralight'>Years of Legacy</h2>
            </div>
  
          </div>
  
  
        </div>
  
  
        <div style={{background: "linear-gradient(to bottom right, #FFC800, #FF9000)" }} className='w-full bg-gradient-to-br from-[#000000] to-[#19324E] px-10 lg:px-42'>
          <div className='flex  flex-col items-center'>
  
            <div className='w-full pb-16'>
              <h2 style={{color:"#390000"}} className='md:text-3xl text-md text-md pt-12 pb-4 font-bold text-[#FFE270] text-center'>How Prasannam Reading Influences Different Aspects of Your Life</h2>
              <p className='text-black text-sm md:text-xl font-medium text-center px-4 lg:px-28'>Every question you ask carries cosmic energy, and Prasannam Reading reveals the divine answers hidden in the moment of inquiry. Seek clarity and direction in all areas of life.</p>
            </div>
  
            <div className='lg:pb-14'>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 flex  flex-col flex-wrap'>
                <div style={{boxShadow:"#2C79C5", background:"#FF9000"}} className=' bg-[#737373] rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                  <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                  <p style={{color:"#390000"}} className=' lg:text-2xl text-lg  font-extrabold py-3 pb-1'>Career & Business</p>
                  <p className='text-black text-md md:text-xl font-medium pr-2'>Struggling with career stagnation or business losses? The placement of your workspace, entrance, and key elements can determine success. Align your office and home for maximum prosperity.</p>
                </div>
                <div style={{boxShadow:"#2C79C5", background:"#FF9000"}} className=' bg-[#737373] rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                  <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                  <p style={{color:"#390000"}} className=' lg:text-2xl text-lg  font-extrabold py-3 pb-1'>Relationships</p>
                  <p className='text-black text-md md:text-xl font-medium pr-2'>Facing misunderstandings or emotional distance? The energy flow in your home influences harmony in relationships. Correct imbalances to foster love and peace.</p>
                </div>
                <div style={{boxShadow:"#2C79C5", background:"#FF9000"}} className=' bg-[#737373] rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                  <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                  <p style={{color:"#390000"}} className=' lg:text-2xl text-lg  font-extrabold py-3 pb-1'>Marriage & Family</p>
                  <p className='text-black text-md md:text-xl font-medium pr-2'>Experiencing tensions in your marriage? Bedroom placement, sleeping direction, and home energy can affect marital happiness. Learn how to enhance positivity in your relationship.</p>
                </div>
                <div style={{boxShadow:"#2C79C5", background:"#FF9000"}} className=' bg-[#737373]  rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                  <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                  <p style={{color:"#390000"}} className=' lg:text-2xl text-lg  font-extrabold py-3 pb-1'>Health & Well-being</p>
                  <p className='text-black text-md md:text-xl font-medium pr-2'>Feeling drained, stressed, or facing health issues? The positioning of certain rooms and objects impacts physical and mental health. Optimize your living space for overall well-being.</p>
                </div>
                <div style={{boxShadow:"#2C79C5", background:"#FF9000"}} className=' bg-[#737373] rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                  <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                  <p style={{color:"#390000"}} className=' lg:text-2xl text-lg  font-extrabold py-3 pb-1'>Financial Stability</p>
                  <p className='text-black text-md md:text-xl font-medium pr-2'>Struggling with money flow or unexpected expenses? Vastu corrections in the South-East and North areas of your home can improve wealth accumulation and financial stability.</p>
                </div>
  
              </div>

            </div>
  
  
            <div className='w-full pb-8 lg:pb-16'>
              <h2 style={{color:"#390000"}} className='md:text-3xl text-md pt-12 pb-4 font-bold text-[#FFE270] text-center'>Ask the universe, receive divine answers, and move forward with confidence!

              Book your Prasannam Reading with Baba Astro today!</h2>
              <p style={{color:"#390000"}} className=' text-xl lg:text-3xl font-bold text-center lg:px-28'>What to Expect from Your Astrology Consultation</p>
            </div>
  
            <div className='w-full'>
              <div className='px-8'>
  
                {/* ................ */}
                <div className='flex flex-wrap items-center justify-around pb-12'>
                  <div >
                    <p className='text-black md:text-2xl font-medium py-2' >1. Personalized Prasannam Analysis</p>
                    <ul>
                      <li className='text-black text-md md:text-xl font-medium'>•	In-depth reading based on the moment of inquiry.
                      </li>
                      <li className='text-black text-md md:text-xl font-medium '>•	Identifying karmic influences and hidden energies.
                      </li>
                      <li className='text-black text-md md:text-xl font-medium pb-8'>•	Understanding how celestial forces shape your situation.</li>
                    </ul>
                    <p className='text-black md:text-2xl font-medium py-2' >2. Insights into Your Current Situations</p>
                    <ul>
                      <li className='text-black text-md md:text-xl font-medium'>•	Clarity on pressing concerns related to career, relationships, health, and finances.

                      </li>
                      <li className='text-black text-md md:text-xl font-medium '>•	Revealing unseen factors affecting your decisions.

                      </li>
                      <li className='text-black text-md md:text-xl font-medium pb-8'>•	Guidance on overcoming challenges and seizing opportunities.</li>
                    </ul>
                  </div>
                  <div className=''>
                  <img style={{width:"400px", height:"400px", boxShadow:"3px 3px 2px 2px purple"}} className='md:w-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl shadow-purple-400' src={`${publicUrl}/assets/img/service/prasannam/Picture1.svg`} alt="" />
                  </div>
                </div>
  
                {/* .................... */}
                <div className='flex flex-col lg:flex-row items-center lg:justify-around justify-center pb-12'>
                  <div className=''>
                  <img style={{width:"400px", height:"400px", boxShadow:"3px 3px 2px 2px pink"}} className='md:w-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl shadow-pink-400' src={`${publicUrl}/assets/img/service/prasannam/Picture2.svg`} alt="" />
                  </div>
  
                  <div >
                    <p className='text-black md:text-2xl font-medium py-2 pt-10 lg:pt-2' >3. Future Predictions & Timing</p>
                    <ul>
                      <li className='text-black text-md md:text-xl font-medium'>•	Identifying auspicious and inauspicious periods.

                      </li>
                      <li className='text-black text-md md:text-xl font-medium '>•	Best timeframes for job changes, investments, and personal growth.

                      </li>
                      <li className='text-black text-md md:text-xl font-medium pb-8'>•	Understanding planetary influences on your upcoming phases.</li>
                    </ul>
                    <p className='text-black md:text-2xl font-medium py-2' >4. Remedies & Spiritual Guidance</p>
                    <ul>
                      <li className='text-black text-md md:text-xl font-medium'>•	Sacred mantras, rituals, and offerings to align with divine energies.

                      </li>
                      <li className='text-black text-md md:text-xl font-medium '>•	Gemstone and yantra recommendations for protection and success.

                      </li>
                      <li className='text-black text-md md:text-xl font-medium pb-8'>•	Personalized prayers and meditation practices for peace and clarity.</li>
                    </ul>
                  </div>
  
  
  
                </div>
                {/* .................. */}
                <div className='flex flex-wrap items-center justify-around pb-10 md:pb-20'>
                  <div >
                    <p style={{color:"#390000"}} className=' md:text-2xl font-medium py-2' >5. Practical Life Guidance</p>
                    <ul>
                      <li className='text-black text-md md:text-xl font-medium'>•	Step-by-step advice for achieving goals and resolving conflicts.

                      </li>
                      <li className='text-black text-md md:text-xl font-medium '>•	Recommendations for career success, relationship harmony, and financial stability.

                      </li>
                      <li className='text-black text-md md:text-xl font-medium pb-8'>•	Well-being strategies to maintain physical, emotional, and spiritual balance.
                      </li>
                    </ul>
                    <p style={{color:"#390000"}} className=' md:text-2xl font-medium py-2' >6. Ongoing Support & Follow-Ups</p>
                    <ul>
                      <li className='text-black text-md md:text-xl font-medium'>•	Continued guidance as your situation evolves.

                      </li>
                      <li className='text-black text-md md:text-xl font-medium '>•	Follow-up readings for deeper insights and confirmation.

                      </li>
                      <li className='text-black text-md md:text-xl font-medium pb-8'>•	Long-term spiritual strategies for happiness and prosperity.</li>
                    </ul>
                  </div>
                  <div className=''>
                  <img style={{width:"400px", height:"400px", boxShadow:"3px 3px 2px 2px yellow"}} className='md:w-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl shadow-yellow-400' src={`${publicUrl}/assets/img/service/prasannam/Picture3.svg`} alt="" />
                  </div>
                </div>
              </div>
  
              <div>
                <p style={{color:"#390000"}} className=' text-md md:text-2xl lg:text-3xl font-extrabold text-center px-0 '> Find answers to your life’s most important questions!

                </p>
                <p  style={{color:"#390000"}}className=' text-md md:text-2xl lg:text-3xl font-extrabold py-3 text-center pb-10'>Book your Prasannam Reading with Baba Astro today! 
                </p>
              </div>
  
            </div>
          </div>
  
        </div>
  
  
  
        <div style={{background: "linear-gradient(to bottom, #FFFFFF, white" }}  className='w-full bg-gradient-to-b from-[#2C79C5] to-[#1A2F6F] px-8 pb-8 lg:px-42'>
          <div className='flex flex-wrap md:flex-row items-center justify-between'>
            <div className='md:w-3/4 '>
              <div className="flex flex-col py-8 lg:py-14">
                <p style={{color:"#390000"}} className=' text-xl md:text-2xl lg:text-3xl font-extrabold py-3'>Get Your Personalized Prasannam Reading Now!</p>
                <h2 className='text-black text-md md:text-xl lg:text-2xl font-extralight'>Unlock deep insights into your most pressing questions with ancient Prasannam astrology. Get clarity on career, relationships, health, and finances.</h2>
              </div>
            </div>
            <div className='md:1/4'>
  
              <button style={{background:"#390000"}} className='p-3   px-20 text-md  md:text-3xl font-bold text-white rounded-2xl bg-[#FFE270] shadow-2xl divide-fuchsia-50'>Order No</button>
            </div>
          </div>
  
  
  
        </div>
  
        <div style={{background: "linear-gradient(to bottom, #FF9000, #FFC800" }} className=' lg:px-42 px-8 pt-6 lg:pt-15'>
          <h1 className='text-black text-xl md:text-3xl font-extrabold text-center '>Choose Your Consultation Plan:</h1>
          <div className='flex flex-wrap  md:flex-row   flex-col gap-4 lg:items-center lg:justify-evenly py-8 lg:py-10'>
          <img style={{width:"320px", height:"430px", objectFit:"cover"}} className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-3xl' src={`${publicUrl}/assets/img/service/prasannam/Pricing.svg`} alt="" />
            {/* <img className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-4xl' src={buyNow} alt="" /> */}
            {/* <img className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-4xl' src={buyNow} alt="" /> */}
            {/* <img className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-4xl' src={buyNow} alt="" /> */}
            {/* <img className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-4xl' src={buyNow} alt="" /> */}
          </div>
        </div>
  
  
        <div style={{background: "linear-gradient(to bottom , white, white)" }} className=' w-full bg-gradient-to-r from-[#000000] to-[#19324E] flex flex-col lg:flex-row justify-around px-8 lg:px-42 pb-20 gap-8'>
  
          <div className='lg:w-1/3 pt-10'>
            <h2 style={{color:"#390000"}} className='md:text-3xl text-md font-bold text-[#FFE270] text-center md:text-start'>How accurate is the Prasannam reading?</h2>
            <p className='text-xl pt-6 pb-10  font-medium text-black'>Our readings follow traditional Prasannam astrology principles, providing highly accurate insights based on the planetary positions at the exact moment of your inquiry.</p>
            <button style={{background:"#390000"}} className='p-3  w-full px-20  text-xl md:text-3xl font-bold text-white rounded-2xl bg-[#FFE270] shadow-2xl divide-fuchsia-50'>Order No</button>
          </div>
  
          <div className='lg:w-2/3 pt-10'>
            <div className='md:grid md:grid-cols-2 flex flex-col  gap-6'>
  
              <div style={{background:"#FF9000", boxShadow:"3px 3px 2px 2px #390000"}} className=' bg-[#737373] rounded-3xl p-4 shadow shadow-2xl shadow-[#2C79C5]'>
                <h1 style={{color:"#390000"}} className=' lg:text-2xl text-lg  font-extrabold py-3'>How soon can I expect results from the remedies?</h1>
                <p className='text-black text-md font-medium pr-2'>The effectiveness of remedies varies depending on individual karmic influences and planetary alignments. Some effects may be immediate, while others take time to manifest.</p>
              </div>
              <div style={{background:"#FF9000", boxShadow:"3px 3px 2px 2px #390000"}} className=' bg-[#737373] rounded-3xl p-4 shadow shadow-2xl shadow-[#2C79C5]'>
                <h1 style={{color:"#390000"}} className=' lg:text-2xl text-lg  font-extrabold py-3'>Is the consultation personalized?</h1>
                <p className='text-black text-md font-medium pr-2'>Yes, each Prasannam reading is uniquely tailored to your specific question, offering precise guidance based on real-time planetary influences.</p>
              </div>
              <div style={{background:"#FF9000" , boxShadow:"3px 3px 2px 2px #390000"}} className=' bg-[#737373] rounded-3xl p-4 shadow shadow-2xl shadow-[#2C79C5]'>
                <h1 style={{color:"#390000"}} className=' lg:text-2xl text-lg  font-extrabold py-3'>In which format will I receive my Prasannam reading report?</h1>
                <p className='text-black text-md font-medium pr-2'>You will receive a detailed digital report (PDF format) via email, outlining key planetary insights, predictions, and recommended remedies.</p>
              </div>
              <div style={{background:"#FF9000", boxShadow:"3px 3px 2px 2px #390000"}} className=' bg-[#737373] rounded-3xl p-4 shadow shadow-2xl shadow-[#2C79C5]'>
                <h1 style={{color:"#390000"}} className=' lg:text-2xl text-lg  font-extrabold py-3'>When will I receive my consultation report?</h1>
                <p className='text-black text-md font-medium pr-2'>Your personalized Prasannam report will be delivered within 24-48 hours after the consultation.</p>
              </div>
  
  
            </div>
  
          </div>
        </div>
  
      </div>
      
    );
}

export default PrasannamService
