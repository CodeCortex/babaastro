import React from 'react'

const VaastuBlog = () => {
    const publicUrl = process.env.PUBLIC_URL || "";
    return (
        <div>
            <div style={{
                backgroundImage: `url(${publicUrl}/assets/img/service/blog/vaastu/babaHeader.svg)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "618px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}>
                <div className='flex flex-col items-center'>
                    <h1 style={{ fontSize: "80px" }} className='text-white font-extrabold text-4xl py-4 shadow-lg shadow-black'>Vastu</h1>
                    <h1 style={{ fontSize: "80px" }} className='text-white font-extrabold text-4xl shadow-lg shadow-black'>consultation</h1>
                </div>
            </div>
            <div style={{ backgroundColor: "#5F0101" }} className='p-20 '>

                <div className='bg-white flex flex-col justify-center  rounded-lg shadow-lg p-5'>
                    <img style={{ height: "45rem" }} className='rounded-lg shadow-lg w-full' src={`${publicUrl}/assets/img/service/blog/vaastu/picture1.webp`} alt="" />

                    <h1 style={{ fontSize: "30px", color: "#5D0000" }} className='text-lg font-bold py-6'>Understanding Vastu in Astrology: A Comprehensive Guide</h1>
                    <p className='pb-2 font-bold text-justify text-xl text-black'>In the world of astrology and traditional Indian sciences, there exists a fascinating concept that brings together architecture, energy flow, and cosmic alignment — Vastu Shastra. Rooted in the ancient Indian tradition, Vastu Shastra is the science of architecture and design that aims to harmonize the built environment with the natural elements and cosmic forces. While Vastu is not typically classified as a branch of astrology, its connection to astrology and its emphasis on cosmic influences make it a subject of great interest to those who explore the stars and planets.
                    </p>
                    <p className='pb-2 font-bold text-justify text-xl text-black'>In this blog, we will delve deeper into what Vastu is, how it relates to astrology, and why this combination plays a pivotal role in creating spaces that foster peace, prosperity, and overall well-being.
                    </p>

                    <div class="max-w-7xl mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* <!-- Mesha Rasi --> */}
                        <div class="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-red-500">
                            <h2 class="text-xl font-bold text-red-600">♈︎ Mesha Rasi (Aries)</h2>
                            <p class="mt-2 text-gray-700"><strong>Element:</strong> Fire</p>
                            <p class="text-gray-700"><strong>Ruler:</strong> Mars (Chevvai)</p>
                            <p class="mt-2 text-gray-600">Bold and energetic, Mesha natives are action-oriented leaders who embrace challenges fearlessly. Sometimes impulsive or quick-tempered.</p>
                        </div>

                        {/* <!-- Vrishabha Rasi --> */}
                        <div class="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-pink-500">
                            <h2 class="text-xl font-bold text-pink-600">♉︎ Vrishabha Rasi (Taurus)</h2>
                            <p class="mt-2 text-gray-700"><strong>Element:</strong> Earth</p>
                            <p class="text-gray-700"><strong>Ruler:</strong> Venus (Sukran)</p>
                            <p class="mt-2 text-gray-600">Stable, loyal, and pleasure-seeking, Taurus individuals love comfort and beauty. Though steady, they may resist change and become stubborn.</p>
                        </div>

                        {/* <!-- Mithuna Rasi --> */}
                        <div class="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-yellow-500">
                            <h2 class="text-xl font-bold text-yellow-600">♊︎ Mithuna Rasi (Gemini)</h2>
                            <p class="mt-2 text-gray-700"><strong>Element:</strong> Air</p>
                            <p class="text-gray-700"><strong>Ruler:</strong> Mercury (Budhan)</p>
                            <p class="mt-2 text-gray-600">Curious and quick-witted, Geminis are natural communicators. They enjoy variety, mental stimulation, and are highly adaptable.</p>
                        </div>

                        {/* <!-- Kataka Rasi --> */}
                        <div class="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-500">
                            <h2 class="text-xl font-bold text-blue-600">♋︎ Kataka Rasi (Cancer)</h2>
                            <p class="mt-2 text-gray-700"><strong>Element:</strong> Water</p>
                            <p class="text-gray-700"><strong>Ruler:</strong> Moon (Chandran)</p>
                            <p class="mt-2 text-gray-600">Emotional and nurturing, Cancerians value family, comfort, and tradition. They are intuitive and protective, but can be moody at times.</p>
                        </div>

                        {/* <!-- Simha Rasi --> */}
                        <div class="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-orange-500">
                            <h2 class="text-xl font-bold text-orange-600">♌︎ Simha Rasi (Leo)</h2>
                            <p class="mt-2 text-gray-700"><strong>Element:</strong> Fire</p>
                            <p class="text-gray-700"><strong>Ruler:</strong> Sun (Suryan)</p>
                            <p class="mt-2 text-gray-600">Proud and charismatic, Leos are natural-born leaders who shine with confidence and creativity. They seek recognition and thrive in the spotlight.</p>
                        </div>

                        {/* <!-- Kanni Rasi --> */}
                        <div class="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500">
                            <h2 class="text-xl font-bold text-green-600">♍︎ Kanni Rasi (Virgo)</h2>
                            <p class="mt-2 text-gray-700"><strong>Element:</strong> Earth</p>
                            <p class="text-gray-700"><strong>Ruler:</strong> Mercury (Budhan)</p>
                            <p class="mt-2 text-gray-600">Virgos are precise, analytical, and deeply reliable. Often perfectionists, they are dedicated to service and strive for order in everything.</p>
                        </div>

                        {/* <!-- Thula Rasi --> */}
                        <div class="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-500">
                            <h2 class="text-xl font-bold text-purple-600">♎︎ Thula Rasi (Libra)</h2>
                            <p class="mt-2 text-gray-700"><strong>Element:</strong> Air</p>
                            <p class="text-gray-700"><strong>Ruler:</strong> Venus (Sukran)</p>
                            <p class="mt-2 text-gray-600">Charming and diplomatic, Libras strive for balance and harmony. They value fairness, relationships, and beauty in all things.</p>
                        </div>

                        {/* <!-- Vrischika Rasi --> */}
                        <div class="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-red-700">
                            <h2 class="text-xl font-bold text-red-700">♏︎ Vrischika Rasi (Scorpio)</h2>
                            <p class="mt-2 text-gray-700"><strong>Element:</strong> Water</p>
                            <p class="text-gray-700"><strong>Ruler:</strong> Mars (Chevvai) & Ketu</p>
                            <p class="mt-2 text-gray-600">Scorpios are powerful and emotionally intense. Passionate and secretive, they are fearless and possess deep inner strength.</p>
                        </div>

                        {/* <!-- Dhanusu Rasi --> */}
                        <div class="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-yellow-600">
                            <h2 class="text-xl font-bold text-yellow-700">♐︎ Dhanusu Rasi (Sagittarius)</h2>
                            <p class="mt-2 text-gray-700"><strong>Element:</strong> Fire</p>
                            <p class="text-gray-700"><strong>Ruler:</strong> Jupiter (Guru)</p>
                            <p class="mt-2 text-gray-600">Adventurous and free-spirited, Sagittarians seek truth and knowledge. They are optimistic and love exploring new ideas and places.</p>
                        </div>

                        {/* <!-- Makara Rasi --> */}
                        <div class="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-gray-700">
                            <h2 class="text-xl font-bold text-gray-800">♑︎ Makara Rasi (Capricorn)</h2>
                            <p class="mt-2 text-gray-700"><strong>Element:</strong> Earth</p>
                            <p class="text-gray-700"><strong>Ruler:</strong> Saturn (Shani)</p>
                            <p class="mt-2 text-gray-600">Capricorns are practical, disciplined, and responsible. With a strong work ethic, they climb steadily toward success and mastery.</p>
                        </div>

                        {/* <!-- Kumbha Rasi --> */}
                        <div class="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-cyan-600">
                            <h2 class="text-xl font-bold text-cyan-700">♒︎ Kumbha Rasi (Aquarius)</h2>
                            <p class="mt-2 text-gray-700"><strong>Element:</strong> Air</p>
                            <p class="text-gray-700"><strong>Ruler:</strong> Saturn (Shani) & Rahu</p>
                            <p class="mt-2 text-gray-600">Innovative and futuristic, Aquarians are independent thinkers who love technology, freedom, and contributing to the greater good.</p>
                        </div>

                        {/* <!-- Meena Rasi --> */}
                        <div class="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-indigo-600">
                            <h2 class="text-xl font-bold text-indigo-700">♓︎ Meena Rasi (Pisces)</h2>
                            <p class="mt-2 text-gray-700"><strong>Element:</strong> Water</p>
                            <p class="text-gray-700"><strong>Ruler:</strong> Jupiter (Guru)</p>
                            <p class="mt-2 text-gray-600">Compassionate and dreamy, Pisceans are deeply intuitive and spiritual. They are artistic souls with a strong emotional world.</p>
                        </div>

                    </div>



                </div>

                <div className='flex w-full bg-slate-100 py-16'>
                    <div className='w-1/2 pr-16'>
                        <h1 style={{ fontSize: "30px" }} className='pb-2 font-bold text-justify text-white'>What is Vastu Shastra?</h1>
                        <p className='pb-2 font-bold text-xl text-justify text-white'>Vastu Shastra, derived from the Sanskrit word "Vastu" meaning "dwelling" or "house," is an ancient system of design that lays out guidelines on how to construct buildings in harmony with nature. It takes into account the directions, elemental forces (earth, water, fire, air, and space), and the placement of rooms, doors, windows, and furniture. Vastu aims to create an environment where the energies of the cosmos and the Earth flow smoothly, enhancing the lives of those who inhabit the space.
                        </p>
                        <p className='pb-2 font-bold text-xl text-justify text-white'>While the origins of Vastu Shastra date back over 5,000 years, it is still relevant today, especially in the realms of architecture and home design. Many people consult Vastu experts when constructing new homes, offices, or even spiritual spaces like temples to ensure that the space resonates with positive energy.</p>

                    </div>
                    <div className='w-1/2 flex justify-center '>
                        <img className='h-96 w-full' src={`${publicUrl}/assets/img/service/blog/vaastu/picture2.svg`} alt="" />

                    </div>
                </div>
            </div>

            <div style={{ background: "linear-gradient(to right bottom, #1B0101, #5E0000)" }} className='p-20 flex w-full'>
                <div className='w-1/2'>
                    <img className='h-96 w-full' src={`${publicUrl}/assets/img/service/blog/vaastu/picture3.svg`} alt="" />
                </div>

                <div className='w-1/2 flex-col justify-center'>
                    <p style={{ fontSize: "30px" }} className='pb-2 font-bold text-justify text-white'>The Connection Between Vastu and Astrology</p>
                    <p className='pb-2 font-bold text-xl text-justify text-white'>Vastu Shastra, derived from the Sanskrit word "Vastu" meaning "dwelling" or "house," is an ancient system of design that lays out guidelines on how to construct buildings in harmony with nature. It takes into account the directions, elemental forces (earth, water, fire, air, and space), and the placement of rooms, doors, windows, and furniture. Vastu aims to create an environment where the energies of the cosmos and the Earth flow smoothly, enhancing the lives of those who inhabit the space.
                    </p>
                    <p className='pb-2 font-bold text-xl text-justify text-white'>While the origins of Vastu Shastra date back over 5,000 years, it is still relevant today, especially in the realms of architecture and home design. Many people consult Vastu experts when constructing new homes, offices, or even spiritual spaces like temples to ensure that the space resonates with positive energy.</p>

                </div>

            </div>

            <p>hellow vaastublog</p>

        </div>
    )
}

export default VaastuBlog


