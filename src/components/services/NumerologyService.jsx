import React from 'react'

const NumerologyService = () => {
    const publicUrl = process.env.PUBLIC_URL || "";

    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${publicUrl}/assets/img/service/numerology/BabaHeader.svg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
            height:"620px"
          }}
          className="background w-full "
        >
          <div style={{padding:"140px"}} className="lg:p-[140px] p-4 md:py-10 pr-0 md:w-3/4 ">
            <p className=" w-3/4 md:4/5 font-bold text-white text-sm md:text-3xl md:pt-10 md:pl-8">
            Is your date of birth revealing the secrets of your destiny? Every number in your life carries a vibration that shapes your path. Discover your true potential through a personalized Numerology Reading by              <span style={{ color: "#990091" }} className="text-[#FFE270]"> Baba Astro.</span>
            </p>
            <div className='md:pl-8'>
            <button style={{ backgroundColor: "#990091" }} className="p-3 md:px-6  mt-6 md:mt-20 text-md md:text-2xl font-bold text-white rounded-2xl bg-[#FFE270]">
              Order Your Report Now
            </button>
            </div>
         
          </div>
        </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
        <div style={{ background: "linear-gradient(to right, #000000, #000000)" }} className='w-full  flex justify-center items-center'>
  
  
        <div style={{ background: "linear-gradient(to bottom right,#990091, #5900A7)" }} className='rounded-3xl md:flex md:item-center w-4/5 p-10 my-20'>
        <div className='md:w-1/2 lg:pl-12'  >
              <p className='lg:text-3xl text-lg pt-4 lg:pt-8 font-bold text-white'>What is a Numerology Reading? </p>
              <p className='lg:text-xl text-md  md:pt-6  font-medium text-white'>Numerology is an ancient metaphysical science that decodes the hidden meanings behind numbers, especially those linked to your birth date and name. These numbers reveal insights about your personality, purpose, challenges, and life path.</p>
  
              <p className='lg:text-3xl text-lg pt-4 lg:pt-8 font-bold text-white'>During a personalized Numerology Reading with Baba Astro, you’ll receive:</p>
              <ul className='lg:text-xl text-sm pt-2 md:pt-6 font-medium text-white space-y-2  lg:space-y-4'>
                <li>✨ Life Path Analysis – Understand the core number that guides your destiny and long-term goals.</li>
                <li>💡 Personalized Number Insights – Learn what each number reveals about your strengths, challenges, and compatibility.
                </li>
                <li>🛠 Remedies & Guidance – Receive practical, easy-to-follow remedies based on your numerological profile.</li>
              </ul>
              <button style={{ backgroundColor: "#990091" }} className='p-3 mt-6 lg:ml-3xl md:px-6 text-sm text-start md:text-xl font-bold text-white rounded-2xl bg-[#FFE270] '>Let your numbers guide you—book your Numerology Reading today! </button>
  
  
            </div>
  
  
            <div className='md:w-1/2 md:relative md:overflow-visible flex items-center md:pt-6'>
              <div className='md:absolute md:right-[-100px]'>
              <img className='md:w-[688px] md:h-[688px]' src={`${publicUrl}/assets/img/service/mantrabook.svg`} alt="handmantra" />
              </div>
            </div>
          </div>
        </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
        <div style={{background: "linear-gradient(to right, #000000, #000000)" }} className=' w-full bg-gradient-to-r from-[#000000] to-[#19324E] flex flex-col lg:flex-row lg:flex lg:justify-around lg:px-42 px-10 pb-6 md:pb-20 gap-3 lg:gap-8'>
  
          <div className='lg:w-3/5'>
            <p style={{color:"#A6ECC3"}} className='md:text-3xl text-md pt-4 md:pt-8 font-bold text-[#FFE270]'>How Numerology Influences Your Life</p>
            <p className='text-white md:text-xl text-sm font-medium pb-3 md:pb-8 pt-2 md:pt-4'>Numbers are more than digits—they're cosmic codes influencing your choices, relationships, and success. A Numerology Reading reveals how these patterns shape your journey.  </p>
            <button style={{background:"#990091"}} className='p-3 px-6 text-md  font-bold text-white rounded-2xl bg-[#FFE270]'>Order Your report Now</button>
          </div>
  
          <div style={{background: "linear-gradient(to bottom right, #990091, #32005E)" }} className='border-2 bg-gradient-to-br from-[#000000] to-[#313131] rounded-2xl shadow-2xl'>
            <div className='flex items-center flex-col py-2 lg:py-5'>
              <img className="rounded-full w-16 h-16 lg:w-28 lg:h-28 " src="https://static0.futurepoint.in/1407219268/futurepointindia/images/zodiac/zodiac-sign/Libra-7.png" alt="" />
              <p className=' lg:text-2xl text-xl text-white font-extrabold'>Life Path Number </p>
              <p className='text-white text-sm lg:text-xl py-4 px-2 lg:py-12 text-center'>The blueprint of your soul’s mission and life’s direction..</p>
            </div>
          </div>
          <div style={{background: "linear-gradient(to bottom right, #990091, #32005E)" }}   className='border-2 bg-gradient-to-br from-[#000000] to-[#313131] rounded-2xl shadow-2xl '>
            <div className='flex items-center flex-col py-2 lg:py-5'>
              <img className="rounded-full w-16 h-16 lg:w-28 lg:h-28 " src="https://static0.futurepoint.in/1407219268/futurepointindia/images/zodiac/zodiac-sign/Libra-7.png" alt="" />
              <p className=' lg:text-2xl text-xl text-white font-extrabold'>Expression Number</p>
              <p className='text-white text-sm lg:text-xl py-4 px-2 lg:py-12 text-center'>Your talents, communication style, and personality traits.</p>
            </div>
          </div>
  
  
  
  
        </div>
  
        <div style={{background: "linear-gradient(to bottom, white, white)" }}  className='w-full bg-gradient-to-b from-[#2C79C5] to-[#1A2F6F]'>
          <div className='grid md:grid-cols-4 grid-cols-2'>
            <div className="flex flex-col items-center py-8 lg:py-14">
              <strong style={{color:"#990091"}} className=' text-md md:text-lg lg:text-3xl font-extrabold'>10,000/-</strong>
              <h2 className='text-black text-md md:text-xl lg:text-4xl font-extralight'>Consultancy</h2>
            </div>
            <div className="flex flex-col items-center py-8 lg:py-14">
              <strong style={{color:"#990091"}} className=' text-md md:text-lg lg:text-3xl font-extrabold'>10+</strong>
              <h2 className='text-black text-md md:text-xl lg:text-4xl font-extralight'>Years of Prediction</h2>
            </div>
            <div className="flex flex-col items-center  pb-8  md:py-8 lg:py-14">
              <strong style={{color:"#990091"}} className=' text-md md:text-lg lg:text-3xl font-extrabold'>100%</strong>
              <h2 className='text-black text-md md:text-xl lg:text-4xl font-extralight'>Accuracy Rate</h2>
            </div>
            <div className="flex flex-col items-center  pb-8 md:py-8 lg:py-14">
              <strong style={{color:"#990091"}} className=' text-md md:text-lg lg:text-3xl font-extrabold'>30+</strong>
              <h2 className='text-black text-md md:text-xl lg:text-4xl font-extralight'>Years of Legacy</h2>
            </div>
  
          </div>
  
  
        </div>
  
  
        <div style={{background: "linear-gradient(to bottom right, #000000, #000000)" }} className='w-full bg-gradient-to-br from-[#000000] to-[#19324E] px-10 lg:px-42'>
          <div className='flex  flex-col items-center'>
  
            <div className='w-full pb-16'>
              <h2 style={{color:"#A6ECC3"}} className='md:text-3xl text-md text-md pt-12 pb-4 font-bold text-[#FFE270] text-center'>How Numerology Reading Influences Different Aspects of Your Life</h2>
              <p className='text-white text-sm md:text-xl font-medium text-center px-4 lg:px-28'>Your numbers offer profound clarity on life’s biggest questions. Numerology helps you understand your true self, make better decisions, and align with your soul’s purpose.</p>
            </div>
  
            <div className='lg:pb-14'>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 flex  flex-col flex-wrap'>
                <div style={{boxShadow:"#2C79C5", background:"#990091"}} className=' bg-[#737373] rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                  <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                  <p className=' lg:text-2xl text-lg text-white font-extrabold py-3 pb-1'>Career & Business</p>
                  <p className='text-white text-md md:text-xl font-medium pr-2'>Confused about your ideal career path or business timing? Numerology reveals your strengths, challenges, and lucky periods for success</p>
                </div>
                <div style={{boxShadow:"#2C79C5", background:"#990091"}} className=' bg-[#737373] rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                  <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                  <p className=' lg:text-2xl text-lg text-white font-extrabold py-3 pb-1'>Relationships</p>
                  <p className='text-white text-md md:text-xl font-medium pr-2'>Struggling with communication or connection? Discover compatibility numbers and the best ways to nurture relationships.</p>
                </div>
                <div style={{boxShadow:"#2C79C5", background:"#990091"}} className=' bg-[#737373] rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                  <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                  <p className=' lg:text-2xl text-lg text-white font-extrabold py-3 pb-1'>Marriage & Family</p>
                  <p className='text-white text-md md:text-xl font-medium pr-2'>Facing marital issues or family stress? Numerology offers clarity on love life dynamics and how to strengthen bonds.</p>
                </div>
                <div style={{boxShadow:"#2C79C5", background:"#990091"}} className=' bg-[#737373]  rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                  <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                  <p className=' lg:text-2xl text-lg text-white font-extrabold py-3 pb-1'>Health & Well-being</p>
                  <p className='text-white text-md md:text-xl font-medium pr-2'>Worried about recurring health patterns? Your numbers can point to potential stress zones and offer balance strategies.</p>
                </div>
                <div style={{boxShadow:"#2C79C5", background:"#990091"}} className=' bg-[#737373] rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                  <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                  <p className=' lg:text-2xl text-lg text-white font-extrabold py-3 pb-1'>Financial Stability</p>
                  <p className='text-white text-md md:text-xl font-medium pr-2'>Want to know when to invest or save? Get number-based insights into periods of abundance and caution.</p>
                </div>
  
  
              </div>
  
            </div>
  
            <div className='w-full pb-8 lg:pb-16'>
              <h2 style={{color:"#A6ECC3"}} className='md:text-3xl text-md pt-12 pb-4 font-bold text-[#FFE270] text-center'>Align your life with the vibration of your numbers.
Book your Numerology Reading with Baba Astro today! 

</h2>
              <p className='text-white text-xl lg:text-3xl font-bold text-center lg:px-28'>What to Expect from Your Astrology Consultation</p>
            </div>
  
            <div className='w-full'>
              <div className='px-8'>
  
                {/* ................ */}
                <div className='flex flex-wrap items-center justify-around pb-12'>
                  <div >
                    <p style={{color:"#A6ECC3"}} className=' md:text-2xl font-medium py-2' >1. Personalized Number Profile</p>
                    <ul>
                      <li className='text-white text-md md:text-xl font-medium'>•	In-depth decoding of your birth date and name.
                      </li>
                      <li className='text-white text-md md:text-xl font-medium '>•	Understanding planetary influences on your life.</li>
                      <li className='text-white text-md md:text-xl font-medium pb-8'>•	Insights into personality, destiny, and soul urge numbers.
                      .</li>
                    </ul>
                    <p style={{color:"#A6ECC3"}} className=' md:text-2xl font-medium py-2' >2. Clarity on Current Life Phase</p>
                    <ul>
                      <li className='text-white text-md md:text-xl font-medium'>•	Guidance on present challenges in career, love, and health.

                      </li>
                      <li className='text-white text-md md:text-xl font-medium '>•	Understanding your personal year and what to expect.

                      </li>
                      <li className='text-white text-md md:text-xl font-medium pb-8'>•	Navigating decisions using number-based clarity.</li>
                    </ul>
                  </div>
                  <div className=''>
                  <img style={{width:"400px", height:"400px", boxShadow:"3px 3px 2px 2px purple"}} className='md:w-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl shadow-purple-400' src={`${publicUrl}/assets/img/service/numerology/Picture1.svg`} alt="" />
                  </div>
                </div>
  
                {/* .................... */}
                <div className='flex flex-col lg:flex-row items-center lg:justify-around justify-center pb-12'>
                  <div className=''>
                  <img style={{width:"400px", height:"400px", boxShadow:"3px 3px 2px 2px pink"}} className='md:w-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl shadow-pink-400' src={`${publicUrl}/assets/img/service/numerology/Picture2.svg`} alt="" />
                  </div>
  
                  <div >
                    <p style={{color:"#A6ECC3"}} className=' md:text-2xl font-medium py-2 pt-10 lg:pt-2' >3. Future Predictions</p>
                    <ul>
                      <li className='text-white text-md md:text-xl font-medium'>•	Knowing your lucky numbers and peak cycles.

                      </li>
                      <li className='text-white text-md md:text-xl font-medium '>•	Ideal times for job changes, travel, or financial planning.

                      </li>
                      <li className='text-white text-md md:text-xl font-medium pb-8'>•	Avoiding karmic traps through number awareness..</li>
                    </ul>
                    <p style={{color:"#A6ECC3"}} className=' md:text-2xl font-medium py-2' >4. Remedies & Enhancements</p>
                    <ul>
                      <li className='text-white text-md md:text-xl font-medium'>•	Simple numerological remedies like lucky colors, names, and dates.

                      </li>
                      <li className='text-white text-md md:text-xl font-medium '>•	Use of crystals, mantras, and symbols to balance your energy.

                      </li>
                      <li className='text-white text-md md:text-xl font-medium pb-8'>•	Personalized number vibrations for protection and manifestation.</li>
                    </ul>
                  </div>
  
  
  
                </div>
                {/* .................. */}
                <div className='flex flex-wrap items-center justify-around pb-10 md:pb-20'>
                  <div >
                    <p style={{color:"#A6ECC3"}} className=' md:text-2xl font-medium py-2' >5. Life Guidance You Can Apply</p>
                    <ul>
                      <li className='text-white text-md md:text-xl font-medium'>•	Actionable tips for career, love, and health decisions.

                      </li>
                      <li className='text-white text-md md:text-xl font-medium '>•	Personalized tools to overcome your core challenges.

                      </li>
                      <li className='text-white text-md md:text-xl font-medium pb-8'>•	Balanced lifestyle strategies aligned with your numbers.</li>
                    </ul>
                    <p style={{color:"#A6ECC3"}} className=' md:text-2xl font-medium py-2' > 6. Ongoing Support & Follow-Ups</p>
                    <ul>
                      <li className='text-white text-md md:text-xl font-medium'>•	Continued guidance based on yearly number shifts.

                      </li>
                      <li className='text-white text-md md:text-xl font-medium '>•	Follow-up sessions to navigate major life phases.

                      </li>
                      <li className='text-white text-md md:text-xl font-medium pb-8'>•	Long-term numerological planning for growth and peace.</li>
                    </ul>
                  </div>
                  <div className=''>
                  <img style={{width:"400px", height:"400px", boxShadow:"3px 3px 2px 2px yellow"}} className='md:w-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl shadow-yellow-400' src={`${publicUrl}/assets/img/service/numerology/Picture3.svg`} alt="" />
                  </div>
                </div>
              </div>
  
              <div>
                <p style={{color:"#A6ECC3"}} className=' text-md md:text-2xl lg:text-3xl font-extrabold text-center px-0 '> Let the wisdom of numbers guide your life.

                </p>
                <p style={{color:"#A6ECC3"}} className=' text-md md:text-2xl lg:text-3xl font-extrabold py-3 text-center pb-10'>Book your personalized Numerology Reading with Baba Astro today! </p>
              </div>
  
            </div>
          </div>
  
        </div>
  
  
  
        <div style={{background: "linear-gradient(to bottom , #FFFFFF, #FFFFFF)" }}  className='w-full bg-gradient-to-b from-[#2C79C5] to-[#1A2F6F] px-8 pb-8 lg:px-42'>
          <div className='flex flex-wrap md:flex-row items-center justify-between'>
            <div className='md:w-3/4 '>
              <div className="flex flex-col py-8 lg:py-14">
                <p style={{color:"#015825"}} className=' text-xl md:text-2xl lg:text-3xl font-extrabold py-3'>Get Your Personalized Numerology Reading Now!</p>
                <h2 className='text-black text-md md:text-xl lg:text-2xl font-extralight'>Decode the divine blueprint of your life through your birth numbers. Discover your true path, unlock your strengths, and receive practical remedies for life’s challenges.</h2>
              </div>
            </div>
            <div className='md:1/4'>
  
              <button style={{background:"#990091"}} className='p-3   px-20 text-md  md:text-3xl font-bold text-white rounded-2xl bg-[#FFE270] shadow-2xl divide-fuchsia-50'>Order No</button>
            </div>
          </div>
  
  
  
        </div>
  
        <div style={{background: "linear-gradient(to bottom , #000000, #000000)" }}  className=' lg:px-42 px-8 pt-6 lg:pt-15'>
          <h1 className='text-black text-xl md:text-3xl font-extrabold text-center '>Choose Your Consultation Plan:</h1>
          <div className='flex flex-wrap  md:flex-row   flex-col gap-4 lg:items-center lg:justify-evenly py-8 lg:py-10'>
          <img style={{width:"320px", height:"430px", objectFit:"cover"}} className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-3xl' src={`${publicUrl}/assets/img/service/numerology/Pricing.svg`} alt="" />
            {/* <img className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-4xl' src={buyNow} alt="" /> */}
            {/* <img className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-4xl' src={buyNow} alt="" /> */}
            {/* <img className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-4xl' src={buyNow} alt="" /> */}
            {/* <img className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-4xl' src={buyNow} alt="" /> */}
          </div>
        </div>
  
  
        <div style={{background: "linear-gradient(to bottom , white, white)" }} className=' w-full bg-gradient-to-r from-[#000000] to-[#19324E] flex flex-col lg:flex-row justify-around px-8 lg:px-42 pb-20 gap-8'>
  
          <div className='lg:w-1/3 pt-10'>
            <h2 style={{color:"#990091"}} className='md:text-3xl text-md font-bold text-[#FFE270] text-center md:text-start'>How accurate is the Numerology Reading?</h2>
            <p className='text-xl pt-6 pb-10  font-medium text-black'>Our readings are based on time-tested numerology principles, offering personalized insights rooted in your birth data and name vibration.</p>
            <button style={{background:"#990091"}} className='p-3  w-full px-20  text-xl md:text-3xl font-bold text-white rounded-2xl bg-[#FFE270] shadow-2xl divide-fuchsia-50'>Order Your report Now</button>
          </div>
  
          <div className='lg:w-2/3 pt-10'>
            <div className='md:grid md:grid-cols-2 flex flex-col  gap-6'>
  
              <div style={{background:"#990091", boxShadow:"3px 3px 2px 2px #808080"}} className=' bg-[#737373] rounded-3xl p-4 shadow shadow-2xl shadow-[#2C79C5]'>
                <h1 className=' lg:text-2xl text-lg text-white font-extrabold py-3'>How soon can I see results from numerology remedies?</h1>
                <p className='text-white text-md font-medium pr-2'>Results vary based on the alignment of your name, actions, and life cycles. Some effects are immediate, while others unfold over time.</p>
              </div>
              <div style={{background:"#990091", boxShadow:"3px 3px 2px 2px #808080"}} className=' bg-[#737373] rounded-3xl p-4 shadow shadow-2xl shadow-[#2C79C5]'>
                <h1 className=' lg:text-2xl text-lg text-white font-extrabold py-3'>Is the consultation personalized?</h1>
                <p className='text-white text-md font-medium pr-2'>Yes, every reading is tailored to your birth details, name, and question, offering deep individual insight.</p>
              </div>
              <div style={{background:"#990091" , boxShadow:"3px 3px 2px 2px #808080"}} className=' bg-[#737373] rounded-3xl p-4 shadow shadow-2xl shadow-[#2C79C5]'>
                <h1 className=' lg:text-2xl text-lg text-white font-extrabold py-3'>In which format will I receive my Numerology report?</h1>
                <p className='text-white text-md font-medium pr-2'>You will receive a digital PDF report via email, containing in-depth analysis, insights, and remedies.</p>
              </div>
              <div style={{background:"#990091", boxShadow:"3px 3px 2px 2px #808080"}} className=' bg-[#737373] rounded-3xl p-4 shadow shadow-2xl shadow-[#2C79C5]'>
                <h1 className=' lg:text-2xl text-lg text-white font-extrabold py-3'>When will I receive my consultation report?</h1>
                <p className='text-white text-md font-medium pr-2'>You’ll receive your personalized Numerology report within 24–48 hours after the consultation.</p>
              </div>
  
  
            </div>
  
          </div>
        </div>
  
      </div>
      
    );
}

export default NumerologyService
