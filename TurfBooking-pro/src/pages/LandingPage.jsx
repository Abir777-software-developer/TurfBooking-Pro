import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="overflow-x-hidden min-h-screen flex flex-col">
      {/* Top Navigation Shell */}
      <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl no-border bg-gradient-to-b from-surface to-transparent shadow-2xl shadow-on-background/10">
        <div className="flex justify-between items-center px-8 py-4 max-w-[1440px] mx-auto">
          <div className="text-2xl font-black text-primary tracking-tighter">TurfBooking Pro</div>
          <div className="hidden md:flex gap-8 font-['Space_Grotesk'] tracking-tight text-sm uppercase font-bold">
            <Link className="text-on-surface border-b-2 border-primary pb-1 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" to="/find-arena">Find Turf</Link>
            <Link className="text-on-surface hover:text-on-surface transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" to="/leagues">Leagues</Link>
            <Link className="text-on-surface hover:text-on-surface transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" to="/reviews">Reviews</Link>
            <a className="text-on-surface hover:text-on-surface transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" href="#">Support</a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/register-user" className="text-on-surface font-['Space_Grotesk'] text-sm uppercase font-bold hover:text-on-surface transition-all">Sign In</Link>
            <button className="bg-[#00fd93] text-[#006437] px-6 py-2 rounded-full font-['Space_Grotesk'] text-sm uppercase font-bold scale-95 active:scale-90 transition-all shadow-[0_0_20px_rgba(0,253,147,0.3)]">Book Now</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary orb-blur rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-tertiary orb-blur rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at center, #161a21 0%, transparent 70%)" }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-8 border-outline-variant/10">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant font-bold">Live Booking Engine Active</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
            BOOK YOUR TURF <br />
            <span className="text-transparent bg-clip-text kinetic-gradient">IN SECONDS</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            The high-performance platform for the modern athlete. Real-time availability, instant confirmations, and premium facilities at your fingertips.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link to="/register-user" className="w-full md:w-auto kinetic-gradient text-on-primary font-headline font-bold text-lg px-10 py-5 rounded-full hover:shadow-[0_0_30px_rgba(162,255,191,0.4)] transition-all duration-300 transform hover:-translate-y-1">
              Sign In as User
            </Link>
            <Link to="/register-owner" className="w-full md:w-auto glass-card px-10 py-5 rounded-full font-headline font-bold text-lg border-outline-variant/20 hover:bg-surface-container-highest transition-all duration-300">
              Register as Owner
            </Link>
          </div>
          {/* Dashboard Mockup/Hero Image */}
          <div className="mt-20 relative max-w-5xl mx-auto group">
            <div className="absolute -inset-1 kinetic-gradient rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative rounded-3xl overflow-hidden glass-card border-outline-variant/10 shadow-2xl">
              <img className="w-full h-[400px] object-cover opacity-80" data-alt="high-angle shot of a vibrant green professional football turf stadium illuminated by bright floodlights at night with dramatic atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8yeUbbg5hcg-JYBivpXTx2rW-WbPi5zRMRsbrj2JTIZIYyXqBfsEMEmcjOoJ-lmCzZ3khZ6bWzsBBVrd6SXdHTYXY_ZAMGmZeTduIDuBlsbbOxqjMjfkmj0wt5187Qn6s8GEit-cnSysI4qSaNEGKGaKCTw9990KT6zgJldfRmUvPRv56jUo9dE6YwfRwA6tbMB7hYtQ_JXf30TEOq42FyDHauePXONSCCq8rJvCwWpgrFb4D8Z6Ad00QcoyyXcVjbYNo8wxukj0" alt="turf stadium" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="text-left">
                  <h3 className="text-3xl font-bold font-headline">Elite Sports Arena</h3>
                  <p className="text-on-surface-variant">London, UK • 5-a-side • FIFA Grade</p>
                </div>
                <div className="bg-primary/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-primary/20">
                  <p className="text-xs uppercase font-bold text-primary tracking-widest">Starts from</p>
                  <p className="text-2xl font-black font-headline text-primary">$45/hr</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-32 relative bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <span className="text-tertiary font-headline font-bold uppercase tracking-[0.3em] text-sm">Engine Capabilities</span>
            <h2 className="text-5xl font-black tracking-tighter mt-4">ENGINEERED FOR PERFORMANCE</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 row-span-2 glass-card p-10 rounded-[2rem] flex flex-col justify-between group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary orb-blur -mr-20 -mt-20 group-hover:opacity-30 transition-opacity"></div>
              <div>
                <span className="material-symbols-outlined text-4xl text-primary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <h3 className="text-3xl font-bold font-headline mb-4">Verified Turfs</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed">Every pitch on our platform undergoes a 50-point quality inspection. We guarantee surface integrity and lighting standards for every match.</p>
              </div>
              <img className="rounded-2xl mt-8 w-full h-48 object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" data-alt="close-up detail of synthetic sports grass texture with clean white boundary lines and high definition synthetic fibers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCWALCK_VmIpCtBQq6sjgn7oDFtyaRW_FYzcr0gdyLPjj7ljkz_-FoyjDODZyNNyj63i54MbeeAkO5EOAKJw9Iemtwka357AOIsvoJLkGzsQgxy-IARk1Zal3pmMb0tP9i99KaMJ9O6xmS6dPpzaxF-UbCLhVYhw4wGd1n3l62A-IMxYD0oX5PsPUPpwxJYiK6NwQHZI5ZK_Yj4ksAlfF-svpPPOe7S2wtDt9m6POxITbrqu6WasGGWdBUx3ZOamljXaavt2r00j0" alt="turf texture" />
            </div>
            <div className="glass-card p-8 rounded-[2rem] group hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined text-3xl text-secondary mb-4">payments</span>
              <h4 className="text-xl font-bold font-headline mb-2">Secure Payments</h4>
              <p className="text-on-surface-variant text-sm">Military-grade encryption for all transactions with instant refunds for cancellations.</p>
            </div>
            <div className="glass-card p-8 rounded-[2rem] group hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined text-3xl text-tertiary mb-4">schedule</span>
              <h4 className="text-xl font-bold font-headline mb-2">Real-time Slots</h4>
              <p className="text-on-surface-variant text-sm">Direct synchronization with arena calendars. What you see is exactly what is available.</p>
            </div>
            <div className="md:col-span-2 glass-card p-8 rounded-[2rem] flex flex-col md:flex-row gap-8 items-center border-primary/10">
              <div className="flex-1">
                <span className="material-symbols-outlined text-3xl text-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                <h4 className="text-2xl font-bold font-headline mb-2">AI Recommendations</h4>
                <p className="text-on-surface-variant">Our engine learns your playstyle and preferences to suggest the best pitches and peak times for your squad.</p>
              </div>
              <div className="w-full md:w-48 h-32 bg-surface-container-lowest rounded-xl flex items-center justify-center border border-outline-variant/20 relative overflow-hidden">
                <div className="absolute inset-0 kinetic-gradient opacity-5 animate-pulse"></div>
                <span className="material-symbols-outlined text-primary text-5xl opacity-40">query_stats</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works: Kinetic Timeline */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black tracking-tighter">THE PLAYBOOK</h2>
            <p className="text-on-surface-variant mt-4">Four steps to the ultimate match day.</p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
              <div className="text-center group">
                <div className="w-20 h-20 rounded-full glass-card mx-auto mb-6 flex items-center justify-center border-2 border-outline-variant/20 group-hover:border-primary transition-all duration-500 relative">
                  <span className="text-2xl font-black font-headline group-hover:text-primary">01</span>
                  <div className="absolute -inset-2 rounded-full kinetic-gradient blur opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <h4 className="text-xl font-bold font-headline mb-2">Search</h4>
                <p className="text-on-surface-variant text-sm">Filter by location, turf type, and player capacity.</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 rounded-full glass-card mx-auto mb-6 flex items-center justify-center border-2 border-outline-variant/20 group-hover:border-secondary transition-all duration-500 relative">
                  <span className="text-2xl font-black font-headline group-hover:text-secondary">02</span>
                  <div className="absolute -inset-2 rounded-full bg-secondary blur opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <h4 className="text-xl font-bold font-headline mb-2">Select</h4>
                <p className="text-on-surface-variant text-sm">Pick your perfect slot from the live calendar.</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 rounded-full glass-card mx-auto mb-6 flex items-center justify-center border-2 border-outline-variant/20 group-hover:border-tertiary transition-all duration-500 relative">
                  <span className="text-2xl font-black font-headline group-hover:text-tertiary">03</span>
                  <div className="absolute -inset-2 rounded-full bg-tertiary blur opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <h4 className="text-xl font-bold font-headline mb-2">Pay</h4>
                <p className="text-on-surface-variant text-sm">Instant secure checkout via card or digital wallet.</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 rounded-full kinetic-gradient mx-auto mb-6 flex items-center justify-center border-2 border-primary group-hover:scale-110 transition-all duration-500 shadow-xl shadow-primary/20">
                  <span className="text-2xl font-black font-headline text-on-primary">04</span>
                </div>
                <h4 className="text-xl font-bold font-headline mb-2 text-primary">Play</h4>
                <p className="text-on-surface-variant text-sm">Receive your QR entry code and hit the pitch.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Preview */}
      <section className="py-32 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex justify-between items-end mb-10">
                <div>
                  <span className="text-primary font-headline font-bold uppercase tracking-widest text-xs">Hall of Fame</span>
                  <h3 className="text-4xl font-black tracking-tighter mt-2">ELITE PITCHES</h3>
                </div>
                <a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest" href="#">View All</a>
              </div>
              <div className="space-y-4">
                <div className="glass-card p-5 rounded-2xl flex items-center gap-6 group hover:translate-x-2 transition-transform">
                  <div className="w-24 h-24 rounded-xl overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform" data-alt="professional night-time soccer field under stadium lights with high quality turf and empty seating in distance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEODaeuY6a7QPjedYpqh_wNsPBaCIf7-dWwp33t_aPRXEJsXXtOaXS9vcZS6LPX8VnQd_tcrDjBbjq7Ruy7Z7jDsUIgyVetApiZnuAkrQxRMVtMAOlVeWT-g1cHWlPrBP6rMW-yDnkPJgfjpqigaLheaAIGQaPI08KCRKJKF13kDunnzf7actUgoRnzF3u7xxA59u5UIINIYukuruj6JwqwXqU7VHieAlYQqBtUPKFXB_lietir95a_JDCnrHUReesHZJtjIjKhtI" alt="pitch" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xl font-bold font-headline">The Wembley Hub</h5>
                    <p className="text-on-surface-variant text-sm">South London • 4.9 ★ (1.2k Reviews)</p>
                  </div>
                  <div className="text-right">
                    <p className="text-primary font-black font-headline text-lg">$60/hr</p>
                    <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-tighter">Premium Grade</span>
                  </div>
                </div>
                <div className="glass-card p-5 rounded-2xl flex items-center gap-6 group hover:translate-x-2 transition-transform">
                  <div className="w-24 h-24 rounded-xl overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform" data-alt="vibrant indoor soccer pitch with bright artificial lighting and clean professional lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxz52BezqRTtZQMvwdiUA4iVQijws-aZhJ7kggsEgtQrqEorVkFROclZ_3B6koyIUEv0-4e9dfR5XM4LWw8rHH006EBlrb7m7Om7PtcUyvn5Q3aPpRnDKSfCff3o6KqR_Qyt36oNr0pY8MG6rk6DmDPKVUMso5HGEQflSRjdEnC1sGtl0wwJzt8azRS951TbWOWWtTMtGMWieIgfJeutOw9VuMrFPDgO4oXK2emDP8bOaE5ctuFG3_u6R2Kv-huZU12LGycqf9n4Y" alt="indoor soccer" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xl font-bold font-headline">Apex Sports Arena</h5>
                    <p className="text-on-surface-variant text-sm">North London • 4.8 ★ (850 Reviews)</p>
                  </div>
                  <div className="text-right">
                    <p className="text-primary font-black font-headline text-lg">$55/hr</p>
                    <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-tighter">Indoor FIFA</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Top Users */}
            <div>
              <div className="flex justify-between items-end mb-10">
                <div>
                  <span className="text-secondary font-headline font-bold uppercase tracking-widest text-xs">MVP Rankings</span>
                  <h3 className="text-4xl font-black tracking-tighter mt-2">TOP PLAYERS</h3>
                </div>
                <a className="text-on-surface-variant hover:text-secondary transition-colors text-sm font-bold uppercase tracking-widest" href="#">Global Rankings</a>
              </div>
              <div className="space-y-4">
                <div className="glass-card p-4 rounded-2xl flex items-center gap-4 border-l-4 border-primary">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-highest flex items-center justify-center">
                    <img className="w-full h-full object-cover" data-alt="portrait of a young athletic male smiling with short dark hair in front of a neutral studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPbZ67Z6BxH5OSa1IL7Ujh_04iStNxAbMdgw1FJxQVuV3B-zJXqXxvvDneE-1xUkKtJg1e6gwzE_4c49Tc5K9yNbeFji-DVOhFVRC1FWgYmygovNOIO_mWSjpGyCsex0tzDPk3wdH7oDNYNZEx1L1HkbWjpBDwMzdz7DNs6fEtgUFhaTZRlW6H3_vJFmmJb3Oc3fBix3pCx8Nf9DtMkZdB6odvwtXKVrZ7O0YYJ5v6rl8DCe2n2VQZZj0Ik1hMRqISe0_mdEea5rI" alt="marcus" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold font-headline">Marcus Rashford</h5>
                    <p className="text-xs text-on-surface-variant">128 Matches • Pro Striker</p>
                  </div>
                  <div className="px-3 py-1 bg-primary/10 rounded-full">
                    <span className="text-primary font-black text-xs">Rank #1</span>
                  </div>
                </div>
                <div className="glass-card p-4 rounded-2xl flex items-center gap-4 border-l-4 border-secondary">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-highest flex items-center justify-center">
                    <img className="w-full h-full object-cover" data-alt="portrait of a young woman athlete with tied back hair in athletic wear looking confident" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv5G-h07tfot42rBfTGAnmWxJXo9WkEMf5Zv-tBy0HAN1gDWtc6pXyZMjUz1u1fd94l0BTrAvubvcFFzccnpbSsCVCXrFE57-hgyP5ST19oJZT36D8mHAdSIHe8S7M-0wN_BgOuOA3PVVc3f3lPG_ejPbrqotYa_83ubn9UsXXfqaX5X2_ery5OOkG16rE4M3ddaxR8wZ01wVvBqkusUqCD2Do37vKpB9UQVuc2Dc8SyEQ73TIP7tnCu6afTzOXj8GDKwrClHOf2Q" alt="sarah" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold font-headline">Sarah Jenkins</h5>
                    <p className="text-xs text-on-surface-variant">115 Matches • Midfield Maestro</p>
                  </div>
                  <div className="px-3 py-1 bg-secondary/10 rounded-full">
                    <span className="text-secondary font-black text-xs">Rank #2</span>
                  </div>
                </div>
                <div className="glass-card p-4 rounded-2xl flex items-center gap-4 border-l-4 border-tertiary">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-highest flex items-center justify-center">
                    <img className="w-full h-full object-cover" data-alt="professional portrait of a man in casual attire smiling with light beard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz0l51Z6sTXthTq6vjzOeRvwXG-z3op4Mdsie1wVerMLb9BzaHvTp_wlq5a34Ayg71JR85GIeuFyX5fW5-6L9NHqqy_XaEke4aC9CpXKl3Wc6rlnvRiByxFq0PqmdL8C_6H1abFStFkFKsWPTqlN6Kng4QaG1LNhG-uoHjobf1A-jrhNEBmQVXTPR0CPu2Ld9Kdm-0FSVQJRAsf0KMc7PiQYb_x15ZEg9Tp1j980qOr33Cwxt56YNG3-7mqzzw8OA47gpJ9lwSZ9w" alt="david" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold font-headline">David Alaba</h5>
                    <p className="text-xs text-on-surface-variant">92 Matches • Wall of Defense</p>
                  </div>
                  <div className="px-3 py-1 bg-tertiary/10 rounded-full">
                    <span className="text-tertiary font-black text-xs">Rank #3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black tracking-tighter">PLAYER VOICES</h2>
            <p className="text-on-surface-variant mt-4">Don't just take our word for it—join the league.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-[2.5rem] overflow-hidden p-8 flex flex-col group relative">
              <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full border border-primary/30 flex items-center gap-1.5 z-10">
                <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">Verified Review</span>
              </div>
              <div className="mb-8 relative rounded-2xl overflow-hidden aspect-video">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="cinematic shot of a basketball player in mid-air performing a slam dunk on a professional court at night" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB53b1t0l3rTS6MsoBtKdVsu4lfpQ-nM60oEVzZPEbNChruC7TLFmpVXCpli4_eLdqH5XKWKv9w6G4XvEb9m1LgQ5WxnYEYT8npb5My3tXe1yhUur-8SQ5K3TLdzUCRCRX-Yy8gd5MSvIIPv5aYeo_7IEkhzRBuD5csncfZRbR0I6_UOLYMFuO1Ji21-qsBWqiA7otWuwo430z4uWVD0UwjTjQTZ9HVAV5Z8kmpJGsgkSw5MVx3WrdukyHoDj0hRFgV5ytDHx0Z8Do" alt="basketball" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-on-surface text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </div>
                </div>
              </div>
              <blockquote className="text-lg font-light leading-relaxed mb-6 italic">"Managing team rosters and court times used to be chaos. Now we book our weekly run in seconds."</blockquote>
              <div className="mt-auto flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest"></div>
                <div>
                  <p className="font-bold font-headline">Marcus Thompson</p>
                  <p className="text-xs text-on-surface-variant">Captain • City Elite Basketball</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-[2.5rem] overflow-hidden p-8 flex flex-col group relative md:translate-y-8">
              <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full border border-primary/30 flex items-center gap-1.5 z-10">
                <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">Verified Review</span>
              </div>
              <div className="mb-8 relative rounded-2xl overflow-hidden aspect-video">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="professional tennis player serving on a blue hard court with dramatic sunlight and sharp shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnO7Tz7jEDnZAXhsWp2i9ZRBExfs_bkhyBfNf8OOs1COt2YmIIKqqt4AuUArXCb2ive_0nq1CAarhSj3gQAAPwn_URo2yVTTJmfFUsSrBSAdX-yz5xPvVjEeGijRM8BiAsjW6LbxS03CoxWL9jMMZKISP9LiQNyYNhnskne-gZ0lTa9SjoMR-12L1LDPIa0GQPP0Bxh3oSm7lFu1F1Htqk-Npno3hAkBUK_f6MwNTYFhSgplpx5msSc8mDtrJ26w9MyKY6FTK98zY" alt="tennis" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-on-surface text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </div>
                </div>
              </div>
              <blockquote className="text-lg font-light leading-relaxed mb-6 italic">"The AI suggestion for premium hard courts nearby is incredible. I've discovered the best playing surfaces in the city."</blockquote>
              <div className="mt-auto flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest"></div>
                <div>
                  <p className="font-bold font-headline">Elena Kostova</p>
                  <p className="text-xs text-on-surface-variant">Club Member • Grand Slam Tennis</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-[2.5rem] overflow-hidden p-8 flex flex-col group relative">
              <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full border border-primary/30 flex items-center gap-1.5 z-10">
                <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">Verified Review</span>
              </div>
              <div className="mb-8 relative rounded-2xl overflow-hidden aspect-video">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="close up of a red cricket ball on a pristine grass pitch with stadium lights in the background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT_xEGXU4q0EtXxDy6VUJZEc97fxSQ_2eWzvaPX_CvEzL5WioMhBvuQAJRC-3hITxhRKyksRAGiDNWKVtBoPPi2Ne3WKq8BwE_T_vUvBs1AbcWncxVn-HQZXP0ERZzclaL_DccKrU3BrGIXMwaDQ66iBxb9huF-qScnoAQZLG7NXqImde5uun_EV-XkKIWFVIVfqkLXxUvvDJvdb9LHMiYl3oabWG-5E6jvGco9j1vZPpbtQ2k-yPL6fNANpJclQ6OGIiVa9GgeZA" alt="cricket" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-on-surface text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </div>
                </div>
              </div>
              <blockquote className="text-lg font-light leading-relaxed mb-6 italic">"Scaling our academy operations was tough until we integrated this platform. Pitch utilization has never been higher."</blockquote>
              <div className="mt-auto flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest"></div>
                <div>
                  <p className="font-bold font-headline">Rajiv Mehta</p>
                  <p className="text-xs text-on-surface-variant">Owner • Premier Cricket Academy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-outline-variant/10 tonal-shift bg-surface-container-lowest mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-4">
            <div className="text-xl font-bold text-primary">TurfBooking Pro</div>
            <p className="font-['Manrope'] text-xs text-on-surface-variant max-w-xs">Building the kinetic future of community sports. The pitch is yours.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="font-['Manrope'] text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="font-['Manrope'] text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="font-['Manrope'] text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">Partner with Us</a>
            <a className="font-['Manrope'] text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">Careers</a>
          </div>
          <div className="text-on-surface-variant font-['Manrope'] text-xs">
            © 2024 TurfBooking Pro. The Kinetic Void.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
