import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
class Starss extends Component {
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








									<div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6, fontSize: 16 }}>
										<h2 className="font-semibold text-xl underline decoration-wavy decoration-indigo-500 mb-4">
											🌟 Using Nakshatra Symbols for Success
										</h2>

										<p className="mb-2">
											Incorporating the symbols of your <strong>Moon Nakshatra</strong> into your study or workspace can enhance personal growth and success. For example:
										</p>
										<ul className="list-disc list-inside mb-4">
											<li><strong>Moon in Mrigashira</strong>: 🦌 Place a painting of a deer's head in your study.</li>
											<li><strong>Moon in Dhanishta</strong>: 🎶 Keep an actual flute in your workspace.</li>
											<li><strong>Moon in Chitra</strong>: 💎 Carry a pearl with you or place it nearby.</li>
										</ul>

										<p className="mb-4">
											Alternatively, you can use the symbol of your <strong>10th lord Nakshatra</strong> or <strong>Lagna Nakshatra</strong>. For instance, if your 10th lord is in <strong>Purvashada</strong>, you might keep a painting of an elephant tusk in your study starting on a Tuesday.
										</p>

										<h3 className="text-lg font-semibold underline decoration-pink-500 mb-2">
											🗓️ Nakshatra Symbols Based on Nature, Day, and Activities
										</h3>
										<p className="mb-4">For overall success in specific areas, consider using these Nakshatra symbols starting on the assigned days:</p>

										<div className="bg-blue-50 rounded-lg p-4 mb-4">
											<h4 className="font-bold text-blue-800">1. Tikshna (Sharp)</h4>
											<p className="mb-2"><strong>Nakshatras:</strong> Moola, Jyeshta, Ardra, Ashlesha</p>
											<p>💀 Suitable for destructive activities such as incantations or ending toxic relationships, performed on a Saturday. You might keep a circular amulet, umbrella, or earring starting Saturday.</p>
										</div>

										<div className="bg-green-50 rounded-lg p-4 mb-4">
											<h4 className="font-bold text-green-800">2. Sthira (Fixed)</h4>
											<p className="mb-2"><strong>Nakshatras:</strong> Rohini, Uttaraphalguni, Uttarashadha, Uttarabhadra</p>
											<p>🌳 Ideal for stable activities like laying foundations or planting trees, on a Sunday. Use a chariot planter or garden decor in your backyard starting Sunday.</p>
										</div>

										<div className="bg-yellow-50 rounded-lg p-4 mb-4">
											<h4 className="font-bold text-yellow-700">3. Chara (Movable)</h4>
											<p className="mb-2"><strong>Nakshatras:</strong> Sravana, Dhanishta, Satabhisha, Punarvasu, Swati</p>
											<p>🚗 Best for movement-based activities like acquiring vehicles or traveling, on a Monday. Use a painting of an empty circle, stars, or flute at your office or garage.</p>
										</div>

										<div className="bg-red-50 rounded-lg p-4 mb-4">
											<h4 className="font-bold text-red-700">4. Ugra (Violent)</h4>
											<p className="mb-2"><strong>Nakshatras:</strong> Bharani, Magha, Purvaphalguni, Purvashadha, Purvabhadra</p>
											<p>🔥 Suited for confrontational activities like demolishing or interviews, on a Tuesday. Keep a picture of a hammock, elephant tusk, or throne in your pocket or desk.</p>
										</div>

										<div className="bg-purple-50 rounded-lg p-4 mb-4">
											<h4 className="font-bold text-purple-800">5. Mishra (Mixed)</h4>
											<p className="mb-2"><strong>Nakshatras:</strong> Krittika, Vishakha</p>
											<p>🌀 Great for buying electronics or worship on a Wednesday. Decorate your media room or store with a triumphal arch or potter's wheel symbol.</p>
										</div>

										<div className="bg-orange-50 rounded-lg p-4 mb-4">
											<h4 className="font-bold text-orange-800">6. Kshipra (Swift)</h4>
											<p className="mb-2"><strong>Nakshatras:</strong> Ashvini, Pushya, Hasta, Abhijit</p>
											<p>⚡ Perfect for quick actions like medicine or travel, on a Thursday. Use a horse’s head, lotus, arrow, or circle symbol in gyms, pharmacies, or travel zones.</p>
										</div>

										<div className="bg-pink-50 rounded-lg p-4 mb-4">
											<h4 className="font-bold text-pink-800">7. Mrdu (Tender)</h4>
											<p className="mb-2"><strong>Nakshatras:</strong> Chitra, Anuradha, Mrigashira, Revati</p>
											<p>🎨 Suitable for subtle work like learning arts or ceremonies on a Friday. Decorate your space with a triumphal arch, lotus, pair of fishes, or simply a pearl.</p>
										</div>

										<h3 className="text-lg font-semibold underline decoration-indigo-500 mb-2">
											🌌 27 Nakshatras and Their Symbols
										</h3>

										<table className="table-auto border-collapse border border-gray-400 w-full mb-8">
											<thead>
												<tr className="bg-gray-200">
													<th className="border border-gray-400 px-4 py-2">Nakshatra</th>
													<th className="border border-gray-400 px-4 py-2">Lord</th>
													<th className="border border-gray-400 px-4 py-2">Symbol</th>
												</tr>
											</thead>
											<tbody>
												{[
													["Ashwini", "Ketu", "🐴 Horse's head"],
													["Bharani", "Venus (Shukra)", "🔻 Yoni"],
													["Krittika", "Sun (Surya)", "🔪 Knife"],
													["Rohini", "Moon (Chandra)", "🛺 Chariot"],
													["Mrigashira", "Mars (Mangal)", "🦌 Deer's head"],
													["Ardra", "Rahu", "💧 Teardrop"],
													["Punarvasu", "Jupiter (Guru)", "📦 Quiver of arrows"],
													["Pushya", "Saturn (Shani)", "🌸 Cow's udder"],
													["Ashlesha", "Mercury (Budh)", "🐍 Serpent"],
													["Magha", "Ketu", "👑 Royal throne"],
													["Purva Phalguni", "Venus (Shukra)", "🛏️ Hammock"],
													["Uttara Phalguni", "Sun (Surya)", "🔗 Cot legs"],
													["Hasta", "Moon (Chandra)", "✋ Hand"],
													["Chitra", "Mars (Mangal)", "💎 Jewel"],
													["Swati", "Rahu", "🌬️ Coral"],
													["Vishakha", "Jupiter (Guru)", "🌿 Arch"],
													["Anuradha", "Saturn (Shani)", "🔱 Staff"],
													["Jyeshta", "Mercury (Budh)", "💍 Circular amulet"],
													["Mula", "Ketu", "🌱 Tied roots"],
													["Purva Ashadha", "Venus (Shukra)", "🐘 Elephant tusk"],
													["Uttara Ashadha", "Sun (Surya)", "🏳️ Small bed"],
													["Shravana", "Moon (Chandra)", "👂 Ear"],
													["Dhanishta", "Mars (Mangal)", "🎶 Drum or flute"],
													["Shatabhisha", "Rahu", "💠 Circle"],
													["Purva Bhadrapada", "Jupiter (Guru)", "🔥 Front legs of cot"],
													["Uttara Bhadrapada", "Saturn (Shani)", "💦 Twins or snake"],
													["Revati", "Mercury (Budh)", "🐟 Pair of fishes"],
												].map(([nakshatra, lord, symbol], idx) => (
													<tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
														<td className="border px-4 py-2">{nakshatra}</td>
														<td className="border px-4 py-2">{lord}</td>
														<td className="border px-4 py-2">{symbol}</td>
													</tr>
												))}
											</tbody>
										</table>
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

export default Starss;
