import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
class HouseInAstrology extends Component {
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












                                    <section class="bg-white py-12">
                                        <div class="max-w-7xl mx-auto px-4">
                                            <h2 class="text-3xl font-bold text-gray-800 mb-6">🏠 12 Houses in Vedic Astrology (பாவங்கள்)</h2>
                                            <p class="text-gray-600 mb-8">Each house (பாவம்) reflects a different life domain — like career, marriage, money, health, etc. They are counted from the Ascendant (Lagna / லக்னம்).</p>
                                            <div class="overflow-x-auto">
                                                <table class="min-w-full table-auto border border-gray-200">
                                                    <thead class="bg-gray-100">
                                                        <tr>
                                                            <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">House</th>
                                                            <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Tamil Name</th>
                                                            <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Represents</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody class="divide-y divide-gray-200">
                                                        <tr>
                                                            <td class="px-4 py-2">1st House</td>
                                                            <td class="px-4 py-2">லக்ன பாவம்</td>
                                                            <td class="px-4 py-2">🧍 Self, personality, body, health, beginnings</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="px-4 py-2">2nd House</td>
                                                            <td class="px-4 py-2">தன பாவம்</td>
                                                            <td class="px-4 py-2">💰 Money, speech, family, values, food</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="px-4 py-2">3rd House</td>
                                                            <td class="px-4 py-2">சகோதர பாவம்</td>
                                                            <td class="px-4 py-2">📝 Siblings, courage, communication, efforts</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="px-4 py-2">4th House</td>
                                                            <td class="px-4 py-2">மான்ச பாவம்</td>
                                                            <td class="px-4 py-2">🏡 Mother, home, comforts, vehicles, emotions</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="px-4 py-2">5th House</td>
                                                            <td class="px-4 py-2">புத்திர பாவம்</td>
                                                            <td class="px-4 py-2">🎓 Children, education, intelligence, romance</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="px-4 py-2">6th House</td>
                                                            <td class="px-4 py-2">ஷட்ரு பாவம்</td>
                                                            <td class="px-4 py-2">⚔️ Enemies, debts, diseases, obstacles</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="px-4 py-2">7th House</td>
                                                            <td class="px-4 py-2">கலத்ர பாவம்</td>
                                                            <td class="px-4 py-2">💍 Marriage, spouse, business partnerships</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="px-4 py-2">8th House</td>
                                                            <td class="px-4 py-2">அஷ்டம பாவம்</td>
                                                            <td class="px-4 py-2">☠️ Longevity, secrets, transformation, inheritance</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="px-4 py-2">9th House</td>
                                                            <td class="px-4 py-2">பாக்ய பாவம்</td>
                                                            <td class="px-4 py-2">🙏 Luck, dharma, father, fortune, higher learning</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="px-4 py-2">10th House</td>
                                                            <td class="px-4 py-2">கர்ம பாவம்</td>
                                                            <td class="px-4 py-2">👔 Career, reputation, status, public life</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="px-4 py-2">11th House</td>
                                                            <td class="px-4 py-2">லாப பாவம்</td>
                                                            <td class="px-4 py-2">📈 Gains, income, friends, desires, success</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="px-4 py-2">12th House</td>
                                                            <td class="px-4 py-2">விருக்தி பாவம்</td>
                                                            <td class="px-4 py-2">🧘 Losses, moksha, foreign lands, sleep, expenses</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </section>






                                    <section class="bg-gray-50 py-12">
                                        <div class="max-w-4xl mx-auto px-4">
                                            <h3 class="text-2xl font-semibold text-gray-800 mb-4">🧭 How to Use the Houses in Reading:</h3>
                                            <ul class="list-disc list-inside text-gray-700 space-y-2">
                                                <li><strong>House Lord:</strong> The planet ruling the sign in that house</li>
                                                <li><strong>House Occupants:</strong> Which planets sit in the house</li>
                                                <li><strong>Aspects (Drishti):</strong> Which planets aspect the house</li>
                                                <li><strong>Karaka (Significator):</strong> Natural planet related to that house's theme (e.g., Venus for 7th, Jupiter for 5th)</li>
                                            </ul>
                                            <blockquote class="mt-6 border-l-4 border-blue-500 pl-4 italic text-gray-600">
                                                "Each house is a stage in your soul’s journey — from birth (1st) to liberation (12th)."
                                            </blockquote>
                                        </div>
                                    </section>




                                    <section class="bg-white py-12">
  <div class="max-w-4xl mx-auto px-4">
    <h3 class="text-2xl font-semibold text-gray-800 mb-4">✅ Bonus Tips</h3>
    <ul class="list-disc list-inside text-gray-700 space-y-2">
      <li>Analyze the strength of planets with <strong>Shadbala</strong> before judging their results.</li>
      <li>Retrograde planets often give different results in different houses.</li>
      <li>For career, examine 1st (self), 10th (profession), 6th (service), and 11th (gains).</li>
      <li>Marriage predictions use 1st (self), 7th (partner), 2nd (family), and Venus/Mars/Jupiter influence.</li>
    </ul>
  </div>
</section>

<section class="bg-gray-50 py-12">
  <div class="max-w-5xl mx-auto px-4">
    <h2 class="text-3xl font-bold text-gray-800 mb-6">🧠 Shadbala Summary (6-Fold Planetary Strength)</h2>
    <p class="text-gray-600 mb-6">Shadbala evaluates how strong a planet is to deliver its results effectively. It includes:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <h4 class="text-xl font-semibold text-blue-600 mb-2">1️⃣ Sthana Bala (Positional Strength)</h4>
        <p class="text-gray-700">Strength from position in exaltation, own sign, mooltrikona, etc.</p>
      </div>
      <div class="bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <h4 class="text-xl font-semibold text-green-600 mb-2">2️⃣ Dig Bala (Directional Strength)</h4>
        <p class="text-gray-700">Gained when planets are in their favorable directions (e.g., Jupiter in 1st, Mars in 10th).</p>
      </div>
      <div class="bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <h4 class="text-xl font-semibold text-purple-600 mb-2">3️⃣ Kala Bala (Temporal Strength)</h4>
        <p class="text-gray-700">Time-based strength — based on year, month, day, hora, etc.</p>
      </div>
      <div class="bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <h4 class="text-xl font-semibold text-yellow-600 mb-2">4️⃣ Chesta Bala (Motional Strength)</h4>
        <p class="text-gray-700">Gained when planets are retrograde or stationary — powerful states!</p>
      </div>
      <div class="bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <h4 class="text-xl font-semibold text-pink-600 mb-2">5️⃣ Naisargika Bala (Natural Strength)</h4>
        <p class="text-gray-700">Intrinsic strength by nature — e.g., Sun is stronger than Moon, Jupiter stronger than Mercury, etc.</p>
      </div>
      <div class="bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <h4 class="text-xl font-semibold text-red-600 mb-2">6️⃣ Drik Bala (Aspect Strength)</h4>
        <p class="text-gray-700">Gained when planets receive auspicious aspects and not malefic ones.</p>
      </div>
    </div>
  </div>
</section>


















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

export default HouseInAstrology;
