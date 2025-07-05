import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
class KundaliMatching extends Component {
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







                                    <div class="bg-yellow-50 text-gray-800 px-6 py-10 font-sans">

                                        <h1 class="text-3xl font-bold text-red-700 mb-4">💑 Kundali Matching (ஜாதக பொருத்தம்)</h1>
                                        <p class="text-lg mb-6">An essential part of Vedic astrology, especially in marriage matching (திருமண பொருத்தம்) in Indian and Tamil traditions.</p>

                                        <h2 class="text-2xl font-semibold text-orange-700 mb-2">🔍 Kundali Matching in Vedic Astrology</h2>
                                        <p class="mb-4">Analyzes compatibility between two people — mainly for marriage — based on their <span class="bg-yellow-100 px-1 rounded">birth stars (Nakshatras)</span>, Moon signs, planetary positions, and other factors.</p>

                                        <h2 class="text-xl font-semibold text-purple-700 mt-8 mb-2">🕊️ Why Kundali Matching is Important?</h2>
                                        <ul class="list-disc list-inside space-y-1 text-base pl-4">
                                            <li>✅ Ensures emotional, physical & spiritual compatibility</li>
                                            <li>✅ Predicts harmony, love, longevity of marriage</li>
                                            <li>✅ Checks doshas like <span class="font-medium text-red-600">Mangal Dosh</span>, <span class="font-medium text-red-600">Nadi Dosh</span>, <span class="font-medium text-red-600">Dasa Sandhi</span></li>
                                            <li>✅ Determines strength of family life, progeny, finances, and peace</li>
                                        </ul>

                                        <h2 class="text-2xl font-semibold text-green-700 mt-10 mb-3">🌟 The 10 Poruthams (பொருத்தங்கள்)</h2>
                                        <p class="italic mb-3">Traditional Tamil method considers 10 types of compatibility matches.</p>

                                        <div class="overflow-x-auto shadow-md rounded-lg">
                                            <table class="table-auto w-full text-left border border-yellow-200 bg-white">
                                                <thead class="bg-yellow-100 text-yellow-900">
                                                    <tr>
                                                        <th class="px-4 py-2">No.</th>
                                                        <th class="px-4 py-2">Porutham Name</th>
                                                        <th class="px-4 py-2">Tamil Name</th>
                                                        <th class="px-4 py-2">Meaning</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="text-sm">
                                                    <tr><td class="px-4 py-2">1️⃣</td><td>Dina Porutham</td><td>தின பொருத்தம்</td><td>Health, daily happiness</td></tr>
                                                    <tr class="bg-yellow-50"><td class="px-4 py-2">2️⃣</td><td>Gana Porutham</td><td>கண பொருத்தம்</td><td>Nature, character match</td></tr>
                                                    <tr><td class="px-4 py-2">3️⃣</td><td>Mahendra Porutham</td><td>மஹேந்திர பொருத்தம்</td><td>Family growth, children</td></tr>
                                                    <tr class="bg-yellow-50"><td class="px-4 py-2">4️⃣</td><td>Sthree Dheerga Porutham</td><td>ஸ்த்ரீ தீர்க்க பொருத்தம்</td><td>Woman's welfare, longevity</td></tr>
                                                    <tr><td class="px-4 py-2">5️⃣</td><td>Yoni Porutham</td><td>யோனி பொருத்தம்</td><td>Physical compatibility</td></tr>
                                                    <tr class="bg-yellow-50"><td class="px-4 py-2">6️⃣</td><td>Rasi Porutham</td><td>ராசி பொருத்தம்</td><td>Zodiac sign match</td></tr>
                                                    <tr><td class="px-4 py-2">7️⃣</td><td>Rasi Adhipathi Porutham</td><td>ராசி அதிபதி பொருத்தம்</td><td>Planetary lord match</td></tr>
                                                    <tr class="bg-yellow-50"><td class="px-4 py-2">8️⃣</td><td>Vasya Porutham</td><td>வாச்ய பொருத்தம்</td><td>Mutual attraction</td></tr>
                                                    <tr><td class="px-4 py-2">9️⃣</td><td>Rajju Porutham</td><td>ரஜ்ஜு பொருத்தம்</td><td>Longevity of marriage</td></tr>
                                                    <tr class="bg-yellow-50"><td class="px-4 py-2">🔟</td><td>Vedha Porutham</td><td>வேத பொருத்தம்</td><td>Avoids inauspicious pairing</td></tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <p class="mt-4 text-green-700 font-medium">✅ Minimum 6–7 Poruthams are acceptable.</p>
                                        <p class="text-red-600 font-semibold">⚠️ Rajju, Nadi, and Dina are most crucial!</p>

                                        <h2 class="text-2xl font-semibold text-blue-700 mt-10 mb-3">🪐 Advanced Matching – Planetary Charts</h2>
                                        <div class="overflow-x-auto shadow rounded-lg">
                                            <table class="table-auto w-full text-left border border-blue-100 bg-white">
                                                <thead class="bg-blue-100 text-blue-900">
                                                    <tr>
                                                        <th class="px-4 py-2">Aspect</th>
                                                        <th class="px-4 py-2">What’s Checked</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="text-sm">
                                                    <tr><td class="px-4 py-2">Rashi & Nakshatra</td><td>Moon sign and star compatibility</td></tr>
                                                    <tr class="bg-blue-50"><td class="px-4 py-2">Dasha Balance</td><td>Major life phase alignment</td></tr>
                                                    <tr><td class="px-4 py-2">Manglik Dosha</td><td>Position of Mars in both charts</td></tr>
                                                    <tr class="bg-blue-50"><td class="px-4 py-2">Nadi Dosha</td><td>Body/energy type — duplication not advised</td></tr>
                                                    <tr><td class="px-4 py-2">Bhava Matching</td><td>House placements across charts</td></tr>
                                                    <tr class="bg-blue-50"><td class="px-4 py-2">Navamsa Chart (D9)</td><td>Deeper marital compatibility</td></tr>
                                                    <tr><td class="px-4 py-2">Kundali Gun Milan</td><td>North Indian 36-point Guna system</td></tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div class="mt-6 p-4 bg-pink-100 border-l-4 border-pink-400 italic text-pink-800 rounded">
                                            🧘‍♀️ <strong>Spiritual Note:</strong> “Kundali matching is a guidance tool, not a final judgment. True love, understanding, and mutual growth are above stars.”
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

export default KundaliMatching;
