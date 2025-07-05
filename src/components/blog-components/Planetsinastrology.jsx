import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
class Planetinastrology extends Component {
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






                                    <div class="bg-gradient-to-br from-indigo-50 via-white to-purple-100 min-h-screen p-6 md:p-12 font-sans text-gray-800">
  <h1 class="text-3xl md:text-5xl font-bold mb-8 text-center text-purple-700">
    🌌 9 Planets in Vedic Astrology – Characteristics (with Tamil Names)
  </h1>

  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    
    {/* <!-- Planet Card --> */}
    <div class="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-orange-400">
      <h2 class="text-xl font-semibold mb-1">☀️ 1. Sun (சூரியன் / Surya)</h2>
      <ul class="text-sm space-y-1">
        <li><strong>Represents:</strong> Soul, ego, father, authority, government</li>
        <li><strong>Nature:</strong> Masculine, fiery, royal</li>
        <li><strong>Zodiac Sign:</strong> Leo (சிம்மம்)</li>
        <li><strong>Day:</strong> Sunday</li>
        <li><strong>Color:</strong> Orange/Red</li>
        <li><strong>Positive Traits:</strong> Leadership, confidence, dignity</li>
        <li><strong>Negative Traits:</strong> Ego, stubbornness, arrogance</li>
      </ul>
    </div>

    {/* <!-- Moon --> */}
    <div class="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-300">
      <h2 class="text-xl font-semibold mb-1">🌙 2. Moon (சந்திரன் / Chandra)</h2>
      <ul class="text-sm space-y-1">
        <li><strong>Represents:</strong> Mind, emotions, mother, sensitivity</li>
        <li><strong>Nature:</strong> Feminine, watery, nurturing</li>
        <li><strong>Zodiac Sign:</strong> Cancer (கடகம்)</li>
        <li><strong>Day:</strong> Monday</li>
        <li><strong>Color:</strong> White/Silver</li>
        <li><strong>Positive Traits:</strong> Intuition, care, peace</li>
        <li><strong>Negative Traits:</strong> Mood swings, insecurity</li>
      </ul>
    </div>

    {/* <!-- Mars --> */}
    <div class="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-red-500">
      <h2 class="text-xl font-semibold mb-1">♂️ 3. Mars (செவ்வாய் / Chevvai)</h2>
      <ul class="text-sm space-y-1">
        <li><strong>Represents:</strong> Energy, courage, siblings, aggression</li>
        <li><strong>Nature:</strong> Masculine, fiery, action-oriented</li>
        <li><strong>Zodiac Signs:</strong> Aries (மேஷம்), Scorpio (விருச்சிகம்)</li>
        <li><strong>Day:</strong> Tuesday</li>
        <li><strong>Color:</strong> Red</li>
        <li><strong>Positive Traits:</strong> Bravery, ambition, drive</li>
        <li><strong>Negative Traits:</strong> Anger, impulsiveness</li>
      </ul>
    </div>

    {/* <!-- Mercury --> */}
    <div class="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500">
      <h2 class="text-xl font-semibold mb-1">☿️ 4. Mercury (புதன் / Budhan)</h2>
      <ul class="text-sm space-y-1">
        <li><strong>Represents:</strong> Intelligence, communication, logic, youth</li>
        <li><strong>Nature:</strong> Neutral, dual-natured, quick</li>
        <li><strong>Zodiac Signs:</strong> Gemini (மிதுனம்), Virgo (கன்னி)</li>
        <li><strong>Day:</strong> Wednesday</li>
        <li><strong>Color:</strong> Green</li>
        <li><strong>Positive Traits:</strong> Smart, witty, versatile</li>
        <li><strong>Negative Traits:</strong> Nervous, trickster</li>
      </ul>
    </div>

    {/* <!-- Jupiter --> */}
    <div class="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-yellow-400">
      <h2 class="text-xl font-semibold mb-1">♃ 5. Jupiter (குரு / Guru)</h2>
      <ul class="text-sm space-y-1">
        <li><strong>Represents:</strong> Wisdom, teacher, wealth, dharma</li>
        <li><strong>Nature:</strong> Masculine, benefic, spiritual</li>
        <li><strong>Zodiac Signs:</strong> Sagittarius (தனுசு), Pisces (மீனம்)</li>
        <li><strong>Day:</strong> Thursday</li>
        <li><strong>Color:</strong> Yellow</li>
        <li><strong>Positive Traits:</strong> Generous, wise, optimistic</li>
        <li><strong>Negative Traits:</strong> Over-promising, careless spending</li>
      </ul>
    </div>

    {/* <!-- Venus --> */}
    <div class="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-pink-400">
      <h2 class="text-xl font-semibold mb-1">♀️ 6. Venus (சுக்கிரன் / Sukran)</h2>
      <ul class="text-sm space-y-1">
        <li><strong>Represents:</strong> Love, beauty, luxury, art, wife</li>
        <li><strong>Nature:</strong> Feminine, gentle, attractive</li>
        <li><strong>Zodiac Signs:</strong> Taurus (ரிஷபம்), Libra (துலாம்)</li>
        <li><strong>Day:</strong> Friday</li>
        <li><strong>Color:</strong> White/Pink</li>
        <li><strong>Positive Traits:</strong> Charming, creative, romantic</li>
        <li><strong>Negative Traits:</strong> Overindulgent, materialistic</li>
      </ul>
    </div>

    {/* <!-- Saturn --> */}
    <div class="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-gray-600">
      <h2 class="text-xl font-semibold mb-1">♄ 7. Saturn (சனி / Shani)</h2>
      <ul class="text-sm space-y-1">
        <li><strong>Represents:</strong> Karma, delay, hard work, discipline</li>
        <li><strong>Nature:</strong> Masculine, slow, strict, karmic</li>
        <li><strong>Zodiac Signs:</strong> Capricorn (மகரம்), Aquarius (கும்பம்)</li>
        <li><strong>Day:</strong> Saturday</li>
        <li><strong>Color:</strong> Black, Blue</li>
        <li><strong>Positive Traits:</strong> Patient, responsible, structured</li>
        <li><strong>Negative Traits:</strong> Fearful, pessimistic, harsh</li>
      </ul>
    </div>

    {/* <!-- Rahu --> */}
    <div class="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-indigo-700">
      <h2 class="text-xl font-semibold mb-1">☊ 8. Rahu (ராகு)</h2>
      <ul class="text-sm space-y-1">
        <li><strong>Represents:</strong> Desire, obsession, foreign things, illusion</li>
        <li><strong>Nature:</strong> Mysterious, malefic, out-of-box</li>
        <li><strong>Zodiac Influence:</strong> Aquarius and Virgo (modern links)</li>
        <li><strong>Day:</strong> Saturday or Thursday</li>
        <li><strong>Color:</strong> Smoky, dark blue</li>
        <li><strong>Positive Traits:</strong> Innovative, ambitious</li>
        <li><strong>Negative Traits:</strong> Addictive, deceptive</li>
      </ul>
    </div>

    {/* <!-- Ketu --> */}
    <div class="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-gray-400">
      <h2 class="text-xl font-semibold mb-1">☋ 9. Ketu (கேது)</h2>
      <ul class="text-sm space-y-1">
        <li><strong>Represents:</strong> Detachment, spirituality, moksha</li>
        <li><strong>Nature:</strong> Mysterious, malefic, spiritual</li>
        <li><strong>Zodiac Influence:</strong> Scorpio and Pisces (modern links)</li>
        <li><strong>Day:</strong> Tuesday or Thursday</li>
        <li><strong>Color:</strong> Grey, ash</li>
        <li><strong>Positive Traits:</strong> Introspective, enlightened</li>
        <li><strong>Negative Traits:</strong> Isolation, confusion</li>
      </ul>
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

export default Planetinastrology;
