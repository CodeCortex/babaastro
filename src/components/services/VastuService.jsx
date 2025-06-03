import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const VastuService = () => {
  const publicUrl = process.env.PUBLIC_URL || "";


  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${publicUrl}/assets/img/service/vastu/BabaHeader.svg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          height: "620px"
        }}
        className="background w-full "
      >
        <div style={{ padding: "140px" }} className="lg:p-[140px] p-4 md:py-10 pr-0 md:w-3/4 ">
          <p className=" w-3/4 md:4/5 font-bold text-white text-sm md:text-3xl md:pt-10 md:pl-8">
            Is your home or workplace causing stress and obstacles?
            The energy around you plays a crucial role in your success and well-being! Align your space with positive vibrations through a personalized Vastu consultation by
            <span style={{ color: "#EAFF00" }} className="text-[#FFE270]"> Baba Astro.</span>
          </p>
          <div className='md:pl-8'>
            <button style={{ backgroundColor: "#E8E8E8" }} className="p-3 md:px-6  mt-6 md:mt-20 text-md md:text-2xl font-bold text-black rounded-2xl bg-[#FFE270]">
              Order Your Report Now
            </button>
          </div>

        </div>
      </div>














      <div style={{ background: "linear-gradient(to right, #1B0101, #5E0000)" }} className='w-full  flex justify-center items-center'>


        <div style={{ background: "linear-gradient(to bottom right,#BE0000, #1E0000)" }} className='rounded-3xl md:flex md:item-center w-4/5 p-10 my-20'>
          <div className='md:w-1/2 lg:pl-12'  >
            <p className='lg:text-3xl text-lg pt-4 lg:pt-8 font-bold text-white'>What is a Vastu Consultation?</p>
            <p className='lg:text-xl text-md  md:pt-6  font-medium text-white'>Vastu Shastra is an ancient architectural science that helps create balance between your living or working space and natural energies. The right Vastu alignment can bring harmony, prosperity, and success into your life.</p>

            <p className='lg:text-3xl text-lg pt-4 lg:pt-8 font-bold text-white'>During a personalized Vastu consultation with Baba Astro, you’ll receive :</p>
            <ul className='lg:text-xl text-sm pt-2 md:pt-6 font-medium text-white space-y-2  lg:space-y-4'>
              <li>✨ Energy Flow Analysis – Understand how the structure and direction of your space affect different aspects of your life.
              </li>
              <li>💡 Personalized Recommendations – Get expert advice on optimizing your home, office, or business for success and well-being.
              </li>
              <li>🛠 Vastu Remedies & Solutions – Practical, easy-to-follow corrections to remove negative influences and enhance positivity
              </li>
            </ul>
            <Link className="hover:bg-slate-200" to="/vaastublog"><button style={{ backgroundColor: "#FFE270" }} className='p-3 mt-6 lg:ml-3xl md:px-6 text-sm text-start md:text-xl font-bold text-black rounded-2xl bg-[#FFE270] '>Transform your space, transform your life— Explore more about Vaastu</button>
            </Link>

          </div>


          <div className='md:w-1/2 md:relative md:overflow-visible flex items-center md:pt-6'>
            <div className='md:absolute md:right-[-100px]'>
              <img className='md:w-[688px] md:h-[688px]' src={`${publicUrl}/assets/img/service/mantrabook.svg`} alt="handmantra" />
            </div>
          </div>
        </div>
      </div>














      <div style={{ background: "linear-gradient(to right, #1B0101,#5E0000)" }} className=' w-full bg-gradient-to-r from-[#000000] to-[#19324E] flex flex-col lg:flex-row lg:flex lg:justify-around lg:px-42 px-10 pb-6 md:pb-20 gap-3 lg:gap-8'>

        <div className='lg:w-3/5'>
          <p style={{ color: "#FFE270" }} className='md:text-3xl text-md pt-4 md:pt-8 font-bold text-[#FFE270]'>How Vastu Influences Your Life</p>
          <p className='text-white md:text-xl text-sm font-medium pb-3 md:pb-8 pt-2 md:pt-4'>The energy of your surroundings plays a vital role in shaping your success, relationships, and well-being. The placement of rooms, furniture, and directions in your home or workplace can either support or hinder your growth.</p>
          <button className='p-3 px-6 text-md  font-bold text-black rounded-2xl bg-[#FFE270]'>Order Your report Now</button>
        </div>

        <div style={{ background: "linear-gradient(to bottom right, #BE0000, #1E0000)" }} className='border-2 bg-gradient-to-br from-[#000000] to-[#313131] rounded-2xl shadow-2xl'>
          <div className='flex items-center flex-col py-2 lg:py-5'>
            <img className="rounded-full w-16 h-16 lg:w-28 lg:h-28 " src="https://static0.futurepoint.in/1407219268/futurepointindia/images/zodiac/zodiac-sign/Libra-7.png" alt="" />
            <p className=' lg:text-2xl text-xl text-white font-extrabold'>North-East</p>
            <p className='text-white text-sm lg:text-xl py-4 px-2 lg:py-12 text-center'>Affects spiritual growth and mental clarity; keeping this area clutter-free enhances wisdom and peace..</p>
          </div>
        </div>
        <div style={{ background: "linear-gradient(to bottom right, #BE0000, #1E0000)" }} className='border-2 bg-gradient-to-br from-[#000000] to-[#313131] rounded-2xl shadow-2xl '>
          <div className='flex items-center flex-col py-2 lg:py-5'>
            <img className="rounded-full w-16 h-16 lg:w-28 lg:h-28 " src="https://static0.futurepoint.in/1407219268/futurepointindia/images/zodiac/zodiac-sign/Libra-7.png" alt="" />
            <p className=' lg:text-2xl text-xl text-white font-extrabold'>South-East</p>
            <p className='text-white text-sm lg:text-xl py-4 px-2 lg:py-12 text-center'>Governs financial stability and prosperity; an imbalanced kitchen or fire element here can lead to monetary struggles.</p>
          </div>
        </div>




      </div>

      <div style={{ background: "linear-gradient(to bottom, #BE0000, #1E0000)" }} className='w-full bg-gradient-to-b from-[#2C79C5] to-[#1A2F6F]'>
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


      <div style={{ background: "linear-gradient(to bottom right, #1B0101, #5E0000)" }} className='w-full bg-gradient-to-br from-[#000000] to-[#19324E] px-10 lg:px-42'>
        <div className='flex  flex-col items-center'>

          <div className='w-full pb-16'>
            <h2 style={{ color: "#FFE270" }} className='md:text-3xl text-md text-md pt-12 pb-4 font-bold text-[#FFE270] text-center'>How Vastu Influences Different Aspects of Your Life</h2>
            <p className='text-white text-sm md:text-xl font-medium text-center px-4 lg:px-28'>Your surroundings have a profound impact on your personal and professional well-being. A Vastu consultation can help you harness positive energies and eliminate obstacles to success.</p>
          </div>

          <div className='lg:pb-14'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 flex  flex-col flex-wrap'>
              <div style={{ boxShadow: "#2C79C5", background: "#BE0000" }} className=' bg-[#737373] rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                <p className=' lg:text-2xl text-lg text-white font-extrabold py-3 pb-1'>Career & Business</p>
                <p className='text-white text-md md:text-xl font-medium pr-2'>Struggling with career stagnation or business losses? The placement of your workspace, entrance, and key elements can determine success. Align your office and home for maximum prosperity.</p>
              </div>
              <div style={{ boxShadow: "#2C79C5", background: "#BE0000" }} className=' bg-[#737373] rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                <p className=' lg:text-2xl text-lg text-white font-extrabold py-3 pb-1'>Relationships</p>
                <p className='text-white text-md md:text-xl font-medium pr-2'>Facing misunderstandings or emotional distance? The energy flow in your home influences harmony in relationships. Correct imbalances to foster love and peace.</p>
              </div>
              <div style={{ boxShadow: "#2C79C5", background: "#BE0000" }} className=' bg-[#737373] rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                <p className=' lg:text-2xl text-lg text-white font-extrabold py-3 pb-1'>Marriage & Family</p>
                <p className='text-white text-md md:text-xl font-medium pr-2'>Experiencing tensions in your marriage? Bedroom placement, sleeping direction, and home energy can affect marital happiness. Learn how to enhance positivity in your relationship.</p>
              </div>
              <div style={{ boxShadow: "#2C79C5", background: "#BE0000" }} className=' bg-[#737373]  rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                <p className=' lg:text-2xl text-lg text-white font-extrabold py-3 pb-1'>Health & Well-being</p>
                <p className='text-white text-md md:text-xl font-medium pr-2'>Feeling drained, stressed, or facing health issues? The positioning of certain rooms and objects impacts physical and mental health. Optimize your living space for overall well-being.</p>
              </div>
              <div style={{ boxShadow: "#2C79C5", background: "#BE0000" }} className=' bg-[#737373] rounded-2xl p-4 lg:p-8 shadow-lg shadow-[#2C79C5]'>
                <img className="rounded-full w-14 h-14 bg-amber-50 " src="https://cdntc.mpanchang.com/mpnc/images/sign_libra.png" alt="" />
                <p className=' lg:text-2xl text-lg text-white font-extrabold py-3 pb-1'>Financial Stability</p>
                <p className='text-white text-md md:text-xl font-medium pr-2'>Struggling with money flow or unexpected expenses? Vastu corrections in the South-East and North areas of your home can improve wealth accumulation and financial stability.</p>
              </div>

            </div>

          </div>

          <div className='w-full pb-8 lg:pb-16'>
            <h2 style={{ color: "#FFE270" }} className='md:text-3xl text-md pt-12 pb-4 font-bold text-[#FFE270] text-center'>Book a personalized Vastu consultation with Baba Astro today!</h2>
            <p className='text-white text-xl lg:text-3xl font-bold text-center lg:px-28'>What to Expect from Your Vastu Consultation</p>
          </div>

          <div className='w-full'>
            <div className='px-8'>

              {/* ................ */}
              <div className='flex flex-wrap items-center justify-around pb-12'>
                <div >
                  <p className='text-white md:text-2xl font-medium py-2' >1. Personalized Vastu Analysis</p>
                  <ul>
                    <li className='text-white text-md md:text-xl font-medium'>•	Detailed assessment of your home, office, or business space.
                      .</li>
                    <li className='text-white text-md md:text-xl font-medium '>•	Identifying energy blockages and imbalances.
                    </li>
                    <li className='text-white text-md md:text-xl font-medium pb-8'>•	Understanding how spatial arrangements influence your success.</li>
                  </ul>
                  <p className='text-white md:text-2xl font-medium py-2' >2. Vastu Corrections & Their Effects</p>
                  <ul>
                    <li className='text-white text-md md:text-xl font-medium'>•	Key areas needing adjustment for better energy flow.

                    </li>
                    <li className='text-white text-md md:text-xl font-medium '>•	Remedies for financial growth, health, and relationships.

                    </li>
                    <li className='text-white text-md md:text-xl font-medium pb-8'>•	How Vastu alignments can create harmony and prosperity..</li>
                  </ul>
                </div>
                <div className=''>
                  <img style={{ width: "400px", height: "400px", boxShadow: "3px 3px 2px 2px purple" }} className='md:w-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl shadow-purple-400' src={`${publicUrl}/assets/img/service/vastu/Picture1.svg`} alt="" />
                </div>
              </div>

              {/* .................... */}
              <div className='flex flex-col lg:flex-row items-center lg:justify-around justify-center pb-12'>
                <div className=''>
                  <img style={{ width: "400px", height: "400px", boxShadow: "3px 3px 2px 2px pink" }} className='md:w-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl shadow-pink-400' src={`${publicUrl}/assets/img/service/vastu/Picture2.svg`} alt="" />
                </div>

                <div >
                  <p className='text-white md:text-2xl font-medium py-2 pt-10 lg:pt-2' >3. Future Success & Stability</p>
                  <ul>
                    <li className='text-white text-md md:text-xl font-medium'>•	Optimizing your space for career and business growth.
                      .
                    </li>
                    <li className='text-white text-md md:text-xl font-medium '>•	Enhancing relationships and family bonds through Vastu.

                    </li>
                    <li className='text-white text-md md:text-xl font-medium pb-8'>•	Strategies for financial stability and wealth accumulation.
                      .</li>
                  </ul>
                  <p className='text-white md:text-2xl font-medium py-2' >4. Remedies & Enhancements</p>
                  <ul>
                    <li className='text-white text-md md:text-xl font-medium'>•	Practical Vastu remedies for improving energy balance.

                    </li>
                    <li className='text-white text-md md:text-xl font-medium '>•	Placement of objects, colors, and materials for positivity.

                    </li>
                    <li className='text-white text-md md:text-xl font-medium pb-8'>•	Sacred rituals and tools like pyramids, yantras, and crystals.</li>
                  </ul>
                </div>



              </div>
              {/* .................. */}
              <div className='flex flex-wrap items-center justify-around pb-10 md:pb-20'>
                <div >
                  <p className='text-white md:text-2xl font-medium py-2' >5. Practical Home & Office Guidance</p>
                  <ul>
                    <li className='text-white text-md md:text-xl font-medium'>•	Actionable recommendations for immediate impact.

                    </li>
                    <li className='text-white text-md md:text-xl font-medium '>•	Tips on furniture placement, entrance positioning, and sleeping directions.

                    </li>
                    <li className='text-white text-md md:text-xl font-medium pb-8'>•	Well-being strategies for a stress-free and harmonious life.</li>
                  </ul>
                  <p className='text-white md:text-2xl font-medium py-2' >6. Ongoing Support & Consultations</p>
                  <ul>
                    <li className='text-white text-md md:text-xl font-medium'>•	Follow-up sessions for continuous improvement.

                    </li>
                    <li className='text-white text-md md:text-xl font-medium '>•	Personalized solutions based on your evolving needs.

                    </li>
                    <li className='text-white text-md md:text-xl font-medium pb-8'>•	Long-term Vastu planning for sustained success and happiness.</li>
                  </ul>
                </div>
                <div className=''>
                  <img style={{ width: "400px", height: "400px", boxShadow: "3px 3px 2px 2px yellow" }} className='md:w-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl shadow-yellow-400' src={`${publicUrl}/assets/img/service/vastu/Picture3.svg`} alt="" />
                </div>
              </div>
            </div>

            <div>
              <p className='text-white text-md md:text-2xl lg:text-3xl font-extrabold text-center px-0 '> Align your space with positive energy!

              </p>
              <p className='text-white text-md md:text-2xl lg:text-3xl font-extrabold py-3 text-center pb-10'>Book your personalized Vastu consultation with Baba Astro today!
              </p>
            </div>

          </div>
        </div>

      </div>



      <div style={{ background: "linear-gradient(to bottom , #BE0000, #1E0000)" }} className='w-full bg-gradient-to-b from-[#2C79C5] to-[#1A2F6F] px-8 pb-8 lg:px-42'>
        <div className='flex flex-wrap md:flex-row items-center justify-between'>
          <div className='md:w-3/4 '>
            <div className="flex flex-col py-8 lg:py-14">
              <p className='text-white text-xl md:text-2xl lg:text-3xl font-extrabold py-3'>Get Your Personalized Vastu Consultation Now!</p>
              <h2 className='text-white text-md md:text-xl lg:text-2xl font-extralight'>UAlign your home or workspace with positive energy to enhance success, well-being, and prosperity.</h2>
            </div>
          </div>
          <div className='md:1/4'>

            <button style={{ background: "#FFE270" }} className='p-3   px-20 text-md  md:text-3xl font-bold text-black rounded-2xl bg-[#FFE270] shadow-2xl divide-fuchsia-50'>Order Now</button>
          </div>
        </div>



      </div>

      <div className=' lg:px-42 px-8 pt-6 lg:pt-15'>
        <h1 className='text-black text-xl md:text-3xl font-extrabold text-center '>Choose Your Consultation Plan:</h1>
        <div className='flex flex-wrap  md:flex-row   flex-col gap-4 lg:items-center lg:justify-evenly py-8 lg:py-10'>
          <img style={{ width: "320px", height: "430px", objectFit: "cover" }} className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-3xl' src={`${publicUrl}/assets/img/service/vastu/Pricing.svg`} alt="" />
          {/* <img className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-4xl' src={buyNow} alt="" /> */}
          {/* <img className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-4xl' src={buyNow} alt="" /> */}
          {/* <img className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-4xl' src={buyNow} alt="" /> */}
          {/* <img className=' w-[320px] h-[400px] object-cover shadow shadow-2xl rounded-4xl' src={buyNow} alt="" /> */}
        </div>
      </div>


      <div style={{ background: "linear-gradient(to bottom , #1B0101, #5E0000)" }} className=' w-full bg-gradient-to-r from-[#000000] to-[#19324E] flex flex-col lg:flex-row justify-around px-8 lg:px-42 pb-20 gap-8'>

        <div className='lg:w-1/3 pt-10'>
          <h2 style={{ color: "#FFE270" }} className='md:text-3xl text-md font-bold text-[#FFE270] text-center md:text-start'>Transform your space, transform your life!</h2>
          <p className='text-xl pt-6 pb-10  font-medium text-white'>Book your Vastu consultation with Baba Astro today! </p>
          <button style={{ background: "#FFE270" }} className='p-3  w-full px-20  text-xl md:text-3xl font-bold text-black rounded-2xl bg-[#FFE270] shadow-2xl divide-fuchsia-50'>Order Your report Now</button>
        </div>

        <div className='lg:w-2/3 pt-10'>
          <div className='md:grid md:grid-cols-2 flex flex-col  gap-6'>

            <div style={{ background: "#BE0000", boxShadow: "3px 3px 2px 2px #EFEFEF" }} className=' bg-[#737373] rounded-3xl p-4 shadow shadow-2xl shadow-[#2C79C5]'>
              <h1 className=' lg:text-2xl text-lg text-white font-extrabold py-3'>How accurate is the Vastu consultation?</h1>
              <p className='text-white text-md font-medium pr-2'>Our consultations are based on ancient Vastu Shastra principles, ensuring highly accurate insights tailored to your home, office, or commercial space.</p>
            </div>
            <div style={{ background: "#BE0000", boxShadow: "3px 3px 2px 2px #EFEFEF" }} className=' bg-[#737373] rounded-3xl p-4 shadow shadow-2xl shadow-[#2C79C5]'>
              <h1 className=' lg:text-2xl text-lg text-white font-extrabold py-3'>How soon can I see results from Vastu corrections?</h1>
              <p className='text-white text-md font-medium pr-2'>The impact of Vastu remedies varies based on the severity of imbalances. Some improvements can be felt immediately, while others may take time to manifest as energy alignment stabilizes..</p>
            </div>
            <div style={{ background: "#BE0000", boxShadow: "3px 3px 2px 2px #EFEFEF" }} className=' bg-[#737373] rounded-3xl p-4 shadow shadow-2xl shadow-[#2C79C5]'>
              <h1 className=' lg:text-2xl text-lg text-white font-extrabold py-3'>Is the consultation personalized?</h1>
              <p className='text-white text-md font-medium pr-2'>Yes, each consultation is tailored to your specific space, considering layout, directions, and energy influences for customized recommendations..</p>
            </div>
            <div style={{ background: "#BE0000", boxShadow: "3px 3px 2px 2px #EFEFEF" }} className=' bg-[#737373] rounded-3xl p-4 shadow shadow-2xl shadow-[#2C79C5]'>
              <h1 className=' lg:text-2xl text-lg text-white font-extrabold py-3'>In which format will I receive my Vastu consultation report?</h1>
              <p className='text-white text-md font-medium pr-2'>You will receive a detailed digital report (PDF format) via email, outlining key observations, corrective measures, and step-by-step remedies</p>
            </div>


          </div>

        </div>
      </div>

    </div>

  );
}

export default VastuService
