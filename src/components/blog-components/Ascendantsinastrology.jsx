import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
class Ascendantsinastrology extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        let imagealt = 'image'

        return (
            <div className="blog-page-area  pd-bottom-80 go-top">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-8 pd-top-50 Boxash" >
                            <div className="blog-details-page-inner">
                                <div className="single-blog-inner m-0">
                                    <div className="single-post-wrap style-overlay">
                                        <div className="thumb">
                                            <img src={publicUrl + "assets/img/blog/starss.png"} alt="img" />
                                        </div>
                                        <div className="details pb-4">
                                            <div className="post-meta-single mb-2">
                                                <ul>
                                                    <li><p><i className="fa fa-clock-o" />28 March 2025</p></li>
                                                </ul>
                                            </div>
                                            <h5 className="title mt-0">Stars In Astrology</h5>
                                        </div>
                                    </div>
                                    <div className="single-blog-details">
                                    </div>










                                    <div class="px-6 py-10 bg-white text-gray-800">
                                        {/* <!-- Section Heading --> */}
                                        <h1 class="text-3xl font-bold text-purple-700 mb-6">🌅 Ascendants in Astrology (Lagna / லக்னம்)</h1>
                                        <p class="mb-6 text-lg">The <strong>Ascendant</strong> or <strong>Lagna</strong> is the zodiac sign rising on the eastern horizon at the time of your birth. It sets the tone of your horoscope and plays a vital role in shaping your personality and life direction.</p>

                                        {/* <!-- What is Ascendant --> */}
                                        <div class="bg-purple-50 border-l-4 border-purple-400 p-5 rounded mb-8">
                                            <h2 class="text-2xl font-semibold mb-2">🧭 What is an Ascendant (Lagna)?</h2>
                                            <ul class="list-disc pl-5 text-base">
                                                <li><strong>Tamil:</strong> லக்னம்</li>
                                                <li><strong>Sanskrit:</strong> लग्न (Lagna)</li>
                                                <li><strong>English:</strong> Ascendant / Rising Sign</li>
                                                <li>Begins your <strong>1st house</strong> and defines the layout of your birth chart</li>
                                                <li>Changes every ~2 hours, so accurate <strong>birth time</strong> is essential</li>
                                            </ul>
                                        </div>

                                        {/* <!-- Why Important --> */}
                                        <div class="mb-8">
                                            <h2 class="text-2xl font-semibold text-purple-700 mb-4">🧬 Why is the Ascendant So Important?</h2>
                                            <div class="overflow-x-auto">
                                                <table class="w-full text-left table-auto border border-gray-300">
                                                    <thead class="bg-purple-100">
                                                        <tr>
                                                            <th class="px-4 py-2">🔹 Element</th>
                                                            <th class="px-4 py-2">🔍 Represents</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr class="even:bg-gray-50">
                                                            <td class="px-4 py-2 font-medium">🧍 Lagna (1st House)</td>
                                                            <td class="px-4 py-2">Personality, body, behavior, mindset</td>
                                                        </tr>
                                                        <tr class="even:bg-gray-50">
                                                            <td class="px-4 py-2 font-medium">🧭 Chart Foundation</td>
                                                            <td class="px-4 py-2">Sets signs for all 12 houses</td>
                                                        </tr>
                                                        <tr class="even:bg-gray-50">
                                                            <td class="px-4 py-2 font-medium">🌟 Planetary Strength</td>
                                                            <td class="px-4 py-2">Defines benefic/malefic planet roles</td>
                                                        </tr>
                                                        <tr class="even:bg-gray-50">
                                                            <td class="px-4 py-2 font-medium">🎯 Life Direction</td>
                                                            <td class="px-4 py-2">Soul’s intent and life path</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {/* <!-- Ascendants Table --> */}
                                        <div class="mb-8">
                                            <h2 class="text-2xl font-semibold text-purple-700 mb-4">🔟 12 Ascendants and Their Traits (with Tamil Names)</h2>
                                            <div class="overflow-x-auto">
                                                <table class="w-full table-auto text-left border border-gray-300">
                                                    <thead class="bg-purple-100">
                                                        <tr>
                                                            <th class="px-4 py-2">♈ Ascendant</th>
                                                            <th class="px-4 py-2">Tamil Name</th>
                                                            <th class="px-4 py-2">Personality Style</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Aries</td><td class="px-4 py-2">மேஷ லக்னம்</td><td class="px-4 py-2">Bold, energetic, direct</td></tr>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Taurus</td><td class="px-4 py-2">ரிஷப லக்னம்</td><td class="px-4 py-2">Calm, comfort-loving</td></tr>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Gemini</td><td class="px-4 py-2">மிதுன லக்னம்</td><td class="px-4 py-2">Witty, curious, smart</td></tr>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Cancer</td><td class="px-4 py-2">கடக லக்னம்</td><td class="px-4 py-2">Emotional, nurturing</td></tr>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Leo</td><td class="px-4 py-2">சிம்ம லக்னம்</td><td class="px-4 py-2">Confident, proud leader</td></tr>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Virgo</td><td class="px-4 py-2">கன்னி லக்னம்</td><td class="px-4 py-2">Analytical, precise</td></tr>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Libra</td><td class="px-4 py-2">துலாம் லக்னம்</td><td class="px-4 py-2">Balanced, charming</td></tr>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Scorpio</td><td class="px-4 py-2">விருச்சிக லக்னம்</td><td class="px-4 py-2">Intense, secretive</td></tr>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Sagittarius</td><td class="px-4 py-2">தனுசு லக்னம்</td><td class="px-4 py-2">Optimistic, wise</td></tr>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Capricorn</td><td class="px-4 py-2">மகரம் லக்னம்</td><td class="px-4 py-2">Ambitious, serious</td></tr>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Aquarius</td><td class="px-4 py-2">கும்ப லக்னம்</td><td class="px-4 py-2">Innovative, social</td></tr>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Pisces</td><td class="px-4 py-2">மீன லக்னம்</td><td class="px-4 py-2">Spiritual, artistic</td></tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {/* <!-- Lagna Lord --> */}
                                        <div class="bg-purple-50 border-l-4 border-purple-400 p-5 rounded mb-8">
                                            <h2 class="text-2xl font-semibold mb-3">🧘‍♀️ Lagna Lords Matter Too!</h2>
                                            <p class="mb-3">Each Ascendant is ruled by a planet, called the <strong>Lagna Lord</strong>. It influences your:</p>
                                            <ul class="list-disc pl-6 text-base space-y-1">
                                                <li>Core personality traits</li>
                                                <li>Life's key themes</li>
                                                <li>Health patterns</li>
                                                <li>Career and relationship tone</li>
                                            </ul>
                                            <div class="mt-4">
                                                <p><strong>Example:</strong></p>
                                                <ul class="list-disc pl-6">
                                                    <li>Aries Lagna → Mars is Lagna Lord → Bold & action-driven</li>
                                                    <li>Libra Lagna → Venus is Lagna Lord → Artistic, relationship-oriented</li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* <!-- Special Lagna Concepts --> */}
                                        <div class="mb-8">
                                            <h2 class="text-2xl font-semibold text-purple-700 mb-4">🌟 Special Lagna Concepts</h2>
                                            <div class="overflow-x-auto">
                                                <table class="w-full text-left table-auto border border-gray-300">
                                                    <thead class="bg-purple-100">
                                                        <tr>
                                                            <th class="px-4 py-2">Term</th>
                                                            <th class="px-4 py-2">Meaning</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Chandra Lagna</td><td class="px-4 py-2">Moon is the reference Lagna → mind-focused</td></tr>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Surya Lagna</td><td class="px-4 py-2">Sun as Lagna → from ego/self identity</td></tr>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Arudha Lagna</td><td class="px-4 py-2">How others see you</td></tr>
                                                        <tr class="even:bg-gray-50"><td class="px-4 py-2">Karakamsha Lagna</td><td class="px-4 py-2">Jaimini Lagna → reveals soul's dharma</td></tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>











                                </div>
                            </div>
                        </div>
                        <Sidebar />
                    </div>
                </div>
            </div>

        )
    }
}

export default Ascendantsinastrology;
