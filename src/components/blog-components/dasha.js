import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
class Dasha extends Component {
	render() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'

		return (
			<div className="blog-page-area pd-bottom-80 go-top">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 pd-top-50 Boxash" >
							<div className="blog-details-page-inner">
								<div className="single-blog-inner m-0">
									<div className="single-post-wrap style-overlay">
										<div className="thumb">
											<img src={publicUrl + "assets/img/blog/dasha.png"} alt="img" />
										</div>
										<div className="details pb-4">
											<div className="post-meta-single mb-2">
												<ul>
													<li><p><i className="fa fa-clock-o" />28 March 2025</p></li>
												</ul>
											</div>
											<h5 className="title mt-0">Dasha System</h5>
										</div>
									</div>
									<div className="single-blog-details">

									</div>






									<section class="bg-gradient-to-br from-yellow-50 to-white py-12 px-6">
  <div class="max-w-5xl mx-auto">
    <h2 class="text-3xl font-bold text-yellow-700 mb-4">🕰️ Dasha System in Vedic Astrology</h2>
    <p class="text-gray-800 mb-6 italic">தசை (Dasha) means "Period" or "Phase" — it reveals when events unfold in your life like <span class="text-pink-600 font-medium">marriage</span>, <span class="text-green-600 font-medium">career success</span>, or <span class="text-red-600 font-medium">health challenges</span>.</p>

    <div class="bg-white border-l-4 border-yellow-400 shadow-md p-6 mb-6">
      <h3 class="text-2xl font-semibold text-yellow-800 mb-2">🌟 Vimshottari Dasha (விம்சோத்தரி தசை)</h3>
      <p class="text-gray-700">The most widely used system in Parashara Jyotish. Total cycle = <span class="font-semibold text-indigo-600">120 years</span>. Each planet rules for a fixed number of years.</p>
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-200 shadow-sm mb-8">
        <thead class="bg-yellow-200 text-yellow-900 font-semibold">
          <tr>
            <th class="px-4 py-2 border">Planet</th>
            <th class="px-4 py-2 border">Tamil Name</th>
            <th class="px-4 py-2 border">Years</th>
          </tr>
        </thead>
        <tbody class="text-gray-700 text-center">
          <tr class="hover:bg-yellow-50">
            <td class="px-4 py-2 border">☀️ Sun</td>
            <td class="px-4 py-2 border">சூரியன்</td>
            <td class="px-4 py-2 border">6</td>
          </tr>
          <tr class="hover:bg-yellow-50">
            <td class="px-4 py-2 border">🌙 Moon</td>
            <td class="px-4 py-2 border">சந்திரன்</td>
            <td class="px-4 py-2 border">10</td>
          </tr>
          <tr class="hover:bg-yellow-50">
            <td class="px-4 py-2 border">♂️ Mars</td>
            <td class="px-4 py-2 border">செவ்வாய்</td>
            <td class="px-4 py-2 border">7</td>
          </tr>
          <tr class="hover:bg-yellow-50">
            <td class="px-4 py-2 border">☿️ Mercury</td>
            <td class="px-4 py-2 border">புதன்</td>
            <td class="px-4 py-2 border">17</td>
          </tr>
          <tr class="hover:bg-yellow-50">
            <td class="px-4 py-2 border">♃ Jupiter</td>
            <td class="px-4 py-2 border">குரு</td>
            <td class="px-4 py-2 border">16</td>
          </tr>
          <tr class="hover:bg-yellow-50">
            <td class="px-4 py-2 border">♀️ Venus</td>
            <td class="px-4 py-2 border">சுக்ரன்</td>
            <td class="px-4 py-2 border">20</td>
          </tr>
          <tr class="hover:bg-yellow-50">
            <td class="px-4 py-2 border">♄ Saturn</td>
            <td class="px-4 py-2 border">சனி</td>
            <td class="px-4 py-2 border">19</td>
          </tr>
          <tr class="hover:bg-yellow-50">
            <td class="px-4 py-2 border">☊ Rahu</td>
            <td class="px-4 py-2 border">ராகு</td>
            <td class="px-4 py-2 border">18</td>
          </tr>
          <tr class="hover:bg-yellow-50">
            <td class="px-4 py-2 border">☋ Ketu</td>
            <td class="px-4 py-2 border">கேது</td>
            <td class="px-4 py-2 border">7</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="bg-indigo-50 border-l-4 border-indigo-400 p-5 mb-6">
      <h4 class="text-lg font-semibold text-indigo-700 mb-2">🔄 How Vimshottari Dasha is Calculated</h4>
      <ul class="list-disc list-inside text-gray-700 space-y-1">
        <li>Based on your Nakshatra (ஜனன நட்சத்திரம்) and Moon’s degree at birth.</li>
        <li>Ruler of your birth star = first Dasha lord.</li>
        <li>The remaining years in the Dasha depend on how much of the Nakshatra is left.</li>
        <li><strong>Example:</strong> Born in Rohini → Moon rules → You begin life with Moon Dasha.</li>
      </ul>
    </div>

    <div class="bg-pink-50 border-l-4 border-pink-400 p-5 mb-6">
      <h4 class="text-lg font-semibold text-pink-700 mb-2">📊 Antar Dasha & Pratyantar Dasha</h4>
      <p class="text-gray-700 mb-2">Each Mahadasha (main period) is subdivided into:</p>
      <ul class="list-disc list-inside text-gray-700 space-y-1">
        <li><strong>Antar Dasha</strong> – sub-period</li>
        <li><strong>Pratyantar Dasha</strong> – sub-sub period</li>
      </ul>
      <p class="mt-2 text-sm text-gray-600 italic">This creates highly accurate timelines — down to months and days!</p>
    </div>

    <div class="bg-green-50 border-l-4 border-green-400 p-5 mb-6">
      <h4 class="text-lg font-semibold text-green-700 mb-2">🧠 How to Interpret Dasha Results</h4>
      <table class="w-full text-sm text-left border-t border-gray-300">
        <thead class="text-gray-800 font-bold">
          <tr><th class="py-2">Step</th><th class="py-2">What to Check</th></tr>
        </thead>
        <tbody class="text-gray-700">
          <tr><td class="py-1">1️⃣</td><td>Planet’s nature (benefic or malefic)</td></tr>
          <tr><td class="py-1">2️⃣</td><td>Strength (exalted, combust, retrograde)</td></tr>
          <tr><td class="py-1">3️⃣</td><td>House ownership</td></tr>
          <tr><td class="py-1">4️⃣</td><td>House placement</td></tr>
          <tr><td class="py-1">5️⃣</td><td>Aspects and conjunctions</td></tr>
          <tr><td class="py-1">6️⃣</td><td>Yogas and planetary combinations</td></tr>
          <tr><td class="py-1">7️⃣</td><td>Position in Divisional Charts (D9, D10)</td></tr>
        </tbody>
      </table>
    </div>

    <div class="bg-purple-100 border-l-4 border-purple-500 p-5 mb-6">
      <h4 class="text-lg font-semibold text-purple-800 mb-2">🧘‍♂️ Spiritual Insight</h4>
      <p class="italic text-gray-800">“Planets don’t just give results — they awaken karma during their Dasha.”</p>
    </div>

    <div class="bg-gray-100 border-l-4 border-gray-400 p-5">
      <h4 class="text-lg font-semibold text-gray-700 mb-2">🔮 Examples:</h4>
      <ul class="list-disc list-inside text-gray-700 space-y-1">
        <li><strong>Venus Dasha:</strong> Brings love, marriage, art, luxury — if Venus is strong.</li>
        <li><strong>Saturn Dasha:</strong> Hard work, discipline, spiritual tests, delays.</li>
        <li><strong>Rahu Dasha:</strong> Sudden changes, obsession, foreign travel, illusion.</li>
        <li><strong>Jupiter Dasha:</strong> Expansion, education, marriage, dharma-based gains.</li>
      </ul>
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

export default Dasha;
