import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
class SignInAstrology extends Component {
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
                            </div>
                        </div>
                        <Sidebar />
                    </div>
                </div>
            </div>

        )
    }
}

export default SignInAstrology;
