import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
class Muhurtha extends Component {
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


















                                    <div class="bg-gradient-to-br from-yellow-50 via-white to-pink-50 text-gray-800 leading-relaxed font-sans p-6">

                                        <div class="max-w-5xl mx-auto">
                                            <h1 class="text-3xl font-bold text-pink-700 mb-4">🕰️ Muhurtham (முஹூர்த்தம்)</h1>
                                            <p class="mb-4 text-lg">
                                                The powerful concept of choosing the right time to start something auspicious. This is a key part of Vedic astrology (ஜோதிடம்) and widely followed in Tamil culture.
                                            </p>

                                            <h2 class="text-2xl font-semibold text-pink-600 mt-8 mb-2">📖 What is Muhurtham (முஹூர்த்தம்)?</h2>
                                            <ul class="list-disc list-inside mb-4 space-y-1">
                                                <li>Marriage (திருமணம்)</li>
                                                <li>Housewarming (கிரஹப்பிரவேசம்)</li>
                                                <li>Naming ceremony (நாமகரணம்)</li>
                                                <li>Starting a business or signing contracts</li>
                                                <li>Traveling, buying property, etc.</li>
                                            </ul>
                                            <p class="mb-4">Choosing the right Muhurtham increases success, peace, and divine support, while avoiding bad timing protects from obstacles.</p>

                                            <h2 class="text-2xl font-semibold text-pink-600 mt-8 mb-2">📆 What Factors Decide a Good Muhurtham?</h2>
                                            <div class="space-y-3">
                                                <p><span class="font-bold text-green-600">✅ Tithi (திதி):</span> Some Tithis are considered auspicious like <span class="italic">Dwitiya, Tritiya, Panchami</span>, while <span class="text-red-600">Amavasya, Chaturdashi</span> are avoided.</p>
                                                <p><span class="font-bold text-green-600">✅ Nakshatra (நட்சத்திரம்):</span> Good stars include Rohini, Mrigashira, Pushya, Hasta, Anuradha, Revati. Avoid Moola, Aslesha, Bharani for weddings.</p>
                                                 <p><span class="font-bold text-green-600">✅ Yoga (யோகம்):</span> Favorable: Siddha, Amrita, Shubha. Avoid: Vyatipata, Vishkumbha.</p>
                                                <p><span class="font-bold text-green-600">✅ Karana (கரணம்):</span> Good Karanas: Bava, Balava, Kaulava.</p>
                                                <p><span class="font-bold text-green-600">✅ Weekday (வாரங்கள்):</span> <span class="text-purple-700">Thursday</span> (education), <span class="text-pink-600">Friday</span> (marriage), avoid <span class="text-red-600">Sunday/Tuesday</span> for weddings.</p>
                                                <p><span class="font-bold text-green-600">✅ Lagna (லக்னம்):</span> The Lagna should be strong and free from malefic influence.</p>
                                            </div>

                                            <h2 class="text-2xl font-semibold text-pink-600 mt-10 mb-2">🛑 Doshas to Avoid During Muhurtham</h2>
                                            <div class="overflow-x-auto mb-6">
                                                <table class="w-full text-left table-auto border border-gray-300">
                                                    <thead>
                                                        <tr class="bg-pink-100 text-pink-800">
                                                            <th class="p-3 border">Dosha</th>
                                                            <th class="p-3 border">Effect</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody class="bg-white">
                                                        <tr>
                                                            <td class="p-3 border font-medium">Rahu Kalam (ராகு காலம்)</td>
                                                            <td class="p-3 border">Avoid for any auspicious task – brings negative influence</td>
                                                        </tr>
                                                        <tr class="bg-gray-50">
                                                            <td class="p-3 border font-medium">Yama Gandam (யம கண்டம்)</td>
                                                            <td class="p-3 border">Associated with death and obstacles</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="p-3 border font-medium">Gulika Kalam (குளிகை)</td>
                                                            <td class="p-3 border">Neutral or negative depending on the activity</td>
                                                        </tr>
                                                        <tr class="bg-gray-50">
                                                            <td class="p-3 border font-medium">Durmuhurtham</td>
                                                            <td class="p-3 border">Inauspicious segments of time during a day</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <h2 class="text-2xl font-semibold text-pink-600 mt-8 mb-2">🌸 Types of Muhurtham in Tamil Tradition</h2>
                                            <div class="overflow-x-auto mb-6">
                                                <table class="w-full text-left table-auto border border-gray-300">
                                                    <thead>
                                                        <tr class="bg-pink-100 text-pink-800">
                                                            <th class="p-3 border">Purpose</th>
                                                            <th class="p-3 border">Tamil Name</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody class="bg-white">
                                                        <tr>
                                                            <td class="p-3 border">Marriage</td>
                                                            <td class="p-3 border">கல்யாண முஹூர்த்தம்</td>
                                                        </tr>
                                                        <tr class="bg-gray-50">
                                                            <td class="p-3 border">Housewarming</td>
                                                            <td class="p-3 border">கிரஹப்பிரவேசம்</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="p-3 border">Business Launch</td>
                                                            <td class="p-3 border">வியாபார ஆரம்பம்</td>
                                                        </tr>
                                                        <tr class="bg-gray-50">
                                                            <td class="p-3 border">Child Naming</td>
                                                            <td class="p-3 border">நாமகரணம்</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="p-3 border">Thread Ceremony</td>
                                                            <td class="p-3 border">பூணூல் முந்தானை</td>
                                                        </tr>
                                                        <tr class="bg-gray-50">
                                                            <td class="p-3 border">Journey Start</td>
                                                            <td class="p-3 border">பயண ஆரம்பம்</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <h2 class="text-2xl font-semibold text-pink-600 mt-8 mb-2">🔮 Marriage Muhurtham Checklist</h2>
                                            <ul class="list-disc list-inside mb-6 space-y-1">
                                                <li>✅ Auspicious Nakshatra</li>
                                                <li>✅ No Doshas (Rahu Kalam, etc.)</li>
                                                <li>✅ Saptapadi Muhurtham (moment for tying the knot)</li>
                                                <li>✅ Strong Lagna (Ascendant)</li>
                                                <li>✅ Good placement of Jupiter and Venus</li>
                                                <li>✅ Horoscope compatibility check</li>
                                            </ul>

                                            <blockquote class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 italic px-6 py-4 rounded shadow-md">
                                                “Time is energy. A right time unlocks divine flow. That’s the wisdom of Muhurtam.”
                                            </blockquote>
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

export default Muhurtha;
