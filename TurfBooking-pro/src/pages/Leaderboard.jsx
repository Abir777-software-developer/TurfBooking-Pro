import React from 'react';
import { Link } from 'react-router-dom';

const Leaderboard = () => {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 no-border bg-gradient-to-b from-surface to-transparent shadow-2xl shadow-on-background/10">
        <div className="flex justify-between items-center px-8 py-4 max-w-[1440px] mx-auto hover:backdrop-blur-2xl transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]">
          <Link to="/" className="text-2xl font-black text-primary tracking-tighter font-headline">TurfBooking Pro</Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link className="font-headline tracking-tight text-sm uppercase font-bold text-on-surface-variant hover:text-on-surface" to="/find-arena">Find Turf</Link>
            <Link className="font-headline tracking-tight text-sm uppercase font-bold text-on-surface border-b-2 border-primary pb-1" to="/leagues">Leagues</Link>
            <Link className="font-headline tracking-tight text-sm uppercase font-bold text-on-surface-variant hover:text-on-surface" to="/reviews">Reviews</Link>
            <a className="font-headline tracking-tight text-sm uppercase font-bold text-on-surface-variant hover:text-on-surface" href="#">Support</a>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/register-user" className="font-headline tracking-tight text-sm uppercase font-bold text-on-surface-variant hover:text-on-surface scale-95 active:scale-90 transition-all">Sign In</Link>
            <button className="bg-primary text-on-primary font-headline tracking-tight text-sm uppercase font-bold px-6 py-2 rounded-full hover:shadow-[0_0_15px_rgba(162,255,191,0.5)] transition-all scale-95 active:scale-90 shadow-[0_0_15px_rgba(162,255,191,0.3)]">Book Now</button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto">
        {/* Hero Header */}
        <header className="mb-16">
          <span className="text-tertiary font-headline font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Hall of Fame</span>
          <h1 className="text-5xl md:text-7xl font-headline font-black tracking-tighter text-on-surface mb-6">The Kinetic <span className="text-primary italic">Leaderboard</span></h1>
          <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">Recognizing the most elite venues and high-performance athletes across the network. Updated in real-time based on verified play data.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Section: Top Turfs */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-headline font-bold text-on-surface flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>stadium</span>
                Top Turfs
              </h2>
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest bg-surface-container px-3 py-1 rounded-full border border-outline-variant/20">Ranked by Rating</span>
            </div>
            <div className="space-y-4">
              {/* Rank 1: Gold */}
              <div className="group relative p-6 rounded-2xl glass-card border-l-4 border-primary transition-all duration-300 hover:-translate-y-1 bg-surface-container/40 hover:bg-surface-container backdrop-blur-xl border border-outline-variant/10">
                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-[#FFD700]" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
                    <span className="text-xs font-headline font-black text-[#FFD700]">01</span>
                  </div>
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-surface-container-high">
                    <img className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" data-alt="high-end indoor soccer pitch with neon green lighting and professional artificial turf" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtPh8ZLUcI09DQjbNa0kkE0dKUXVApKg6I6YniJeVMjjosWw3XzEaj4MDN7F2TCopbQTp4ztVzWsIGfGRq71AgOEDSLMkQgHpDayOt6zEeQYv_xZnaXwEhSFdS-pr3y5ysN59bn3hKozQIjdooZ2B_k8TeB3M6WZ-GpQ5cB69-v_ySpSVFfspNzzRBy2PIiU-TX3EMEYIXjs5wlShNzGwwCXN254OhNkIKIpkpI9Zr9LBVdKuzidY3XVFNyGT9ITW0qdbBGZNwmNM" alt="Arena" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-headline font-bold text-on-surface">Apex Arena Pro</h3>
                      <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1 text-primary"><span className="material-symbols-outlined text-xs">star</span> 4.97</span>
                      <span className="text-on-surface-variant">2.4k Bookings</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[0.65rem] font-bold text-tertiary uppercase mb-1">Trust Score</div>
                    <div className="w-12 h-1 bg-surface-container-lowest rounded-full overflow-hidden inline-[block]">
                      <div className="h-full bg-primary w-[98%]"></div>
                    </div>
                    <span className="text-xs font-bold text-on-surface mt-1 block">99%</span>
                  </div>
                </div>
              </div>

              {/* Rank 2: Silver */}
              <div className="group p-6 rounded-2xl glass-card transition-all duration-300 hover:bg-surface-container bg-surface-container/40 backdrop-blur-xl border border-outline-variant/10">
                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-[#C0C0C0]" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
                    <span className="text-xs font-headline font-black text-[#C0C0C0]">02</span>
                  </div>
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-surface-container-high">
                    <img className="w-full h-full object-cover opacity-80" data-alt="modern outdoor football stadium floodlights and pristine grass field at night" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABOoaB1Ps8UbUNxTqkRrF8MO0_EWWopmAR5BEe4Tzs1DoyEAaOM5435fGZx9X1ZHppOkhMjq29N_kINQtNcyAH8PKU6zjG101of8P0so2KnLbF9pL4uiJokim35eai0bgXafaC-b7EEqAyn9hTtltEQeZYrCou5jZyGgEBtDevt-m0c43CxgHejBji2l8LDMlfVi8xlXaXA5i5tciXb9wzf8SVyEk6XqpLIaddwKSNAcXfCwxzCZaGmU2I8tl0f7n4-nAujPZQYN4" alt="Arena" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-headline font-bold text-on-surface">The Kinetic Void Pitch</h3>
                      <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1 text-primary-dim"><span className="material-symbols-outlined text-xs">star</span> 4.89</span>
                      <span className="text-on-surface-variant">1.8k Bookings</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[0.65rem] font-bold text-on-surface-variant uppercase mb-1">Trust Score</div>
                    <div className="w-12 h-1 bg-surface-container-lowest rounded-full overflow-hidden inline-[block]">
                      <div className="h-full bg-secondary w-[92%]"></div>
                    </div>
                    <span className="text-xs font-bold text-on-surface mt-1 block">94%</span>
                  </div>
                </div>
              </div>

              {/* Rank 3: Bronze */}
              <div className="group p-6 rounded-2xl glass-card transition-all duration-300 hover:bg-surface-container bg-surface-container/40 backdrop-blur-xl border border-outline-variant/10">
                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-[#CD7F32]" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
                    <span className="text-xs font-headline font-black text-[#CD7F32]">03</span>
                  </div>
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-surface-container-high">
                    <img className="w-full h-full object-cover opacity-80" data-alt="minimalist sport complex architecture with modern materials and sleek lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUrXrWDjqCoHBDDD-p0uuEVrAJSWfDcgtl6Qc5L8U6xLWdGEDGBWs5gLyGKsiedbQ1_htSNlkOX84qwrkjfaf6suK0zldpmt_2WSIGJ8AS9TyLhSWyWcU7r8qc3RJ259sIQO1XDztsxcp_xiBOFudqDz-1e0N8Amb_eUSZNHdpLQZFt54Idduxpq2WbuiWUO5HwQnaPp9x2GkXNqhinaDLa2d3Nna7sHWq0631pHChW-8nLVTROkpv7IxrmBq4W2AX9IE4-r2PBiU" alt="Arena" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-headline font-bold text-on-surface">Titan Turf Hub</h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1 text-primary-dim"><span className="material-symbols-outlined text-xs">star</span> 4.85</span>
                      <span className="text-on-surface-variant">1.5k Bookings</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[0.65rem] font-bold text-on-surface-variant uppercase mb-1">Trust Score</div>
                    <div className="w-12 h-1 bg-surface-container-lowest rounded-full overflow-hidden inline-[block]">
                      <div className="h-full bg-secondary w-[88%]"></div>
                    </div>
                    <span className="text-xs font-bold text-on-surface mt-1 block">91%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Top Users */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-headline font-bold text-on-surface flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
                Top Players
              </h2>
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest bg-surface-container px-3 py-1 rounded-full border border-outline-variant/20">Ranked by Sessions</span>
            </div>
            <div className="space-y-4">
              {/* Player Rank 1 */}
              <div className="group relative p-6 rounded-2xl glass-card border-l-4 border-secondary transition-all duration-300 hover:-translate-y-1 bg-surface-container/40 hover:bg-surface-container backdrop-blur-xl border border-outline-variant/10">
                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-[#FFD700]" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                    <span className="text-xs font-headline font-black text-[#FFD700]">01</span>
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-secondary/30 p-1">
                    <img className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500" data-alt="portrait of a focused young male athlete with athletic gear in a modern studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfUSrBkiQmULQRnTSRS-APqypoSoBdMgxrMMnOXeCBhBoWM2CkL8b-5TV98WnelGVeaS8uWOmRkoskymGNuB7cCDx4p_Txw49BfyRLoQt1zXOOLMbddhs4gFqBPHsGRXSkH9iM_YwQP3_no1oJiORcGKWPo1zOApNRDZUTBgS09knOtC2YVxXfGNqaQYJDrZzOp27i7a0ACDNFrrvm0UtzJ1EbN7P_t1To9YrM9sU6qLFouAGssq_6PANRK7-WSalbD5nxHaOEBTI" alt="Player" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-headline font-bold text-on-surface">Soubhik Roy</h3>
                      <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </div>
                    <div className="flex gap-3 mt-1">
                      <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">ELITE</span>
                      <span className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">142 Completed Bookings</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-headline font-black text-secondary leading-none">8.2k</span>
                    <span className="text-[0.6rem] block text-on-surface-variant font-bold uppercase tracking-widest mt-1">XP points</span>
                  </div>
                </div>
              </div>

              {/* Player Rank 2 */}
              <div className="group p-6 rounded-2xl glass-card transition-all duration-300 hover:bg-surface-container bg-surface-container/40 backdrop-blur-xl border border-outline-variant/10">
                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-[#C0C0C0]" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                    <span className="text-xs font-headline font-black text-[#C0C0C0]">02</span>
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-outline-variant/30 p-1">
                    <img className="w-full h-full object-cover rounded-full" data-alt="professional woman athlete in running gear smiling confidently toward the camera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxPK_FHvs_JHIw07In-pztK93-d0e8Fo8agiYwvV5b41pBU_5pxvn75ucz65gFioPHzF7_CmjTGIKXahjF2TPqvZGDra2goHLwam-0w-nZYBVQnlHVR72ywUDUh_gRnIxsiG3hc_kv8zibiFHubtg5fFpKTRQgejBLQIs1QNrwo5r8GUGvzFfEpjnIvFL94xQsOPzjfAmC72v9v1dwWZOBVRfRfXYLIk4ZpCeAP-YzrI5oJGjAj_oRIqWL_-_hZYb2firTrzGVFlk" alt="Player" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-headline font-bold text-on-surface">Abir Dey</h3>
                      <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </div>
                    <div className="flex gap-3 mt-1">
                      <span className="text-[10px] font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded">VETERAN</span>
                      <span className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">128 Completed Bookings</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-headline font-black text-on-surface leading-none">7.5k</span>
                    <span className="text-[0.6rem] block text-on-surface-variant font-bold uppercase tracking-widest mt-1">XP points</span>
                  </div>
                </div>
              </div>

              {/* Player Rank 3 */}
              <div className="group p-6 rounded-2xl glass-card transition-all duration-300 hover:bg-surface-container bg-surface-container/40 backdrop-blur-xl border border-outline-variant/10">
                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-[#CD7F32]" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                    <span className="text-xs font-headline font-black text-[#CD7F32]">03</span>
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-outline-variant/30 p-1">
                    <img className="w-full h-full object-cover rounded-full" data-alt="headshot of a stylish male sports enthusiast with a modern haircut" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEd61_axXt0aGIE67BzZe-OhPQ65g-mGSCIFiULK6zF9JIktEsZnMqG_WJD76M4-XM1d9vJelwL0XuokkPjjTMzldvnCJ3_igoI1CoiKkxbzWtGyx-ouZLh9rTlTdsx594la9m4n6rqEyTz3i6Y396QkfQlHQO0ORvpvsPZUVOm0FTOdn4-q_kW4oQ6w2CdAXBa7smIbe9A2ln_EwrZvW3jiQIQibxySnYO6HeMEMf8Aeop-o35U4L8m_rYeQfTD0CLEvK_-USh1o" alt="Player" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-headline font-bold text-on-surface">Dibasis Pradhan</h3>
                    </div>
                    <div className="flex gap-3 mt-1">
                      <span className="text-[10px] font-bold text-on-surface-variant bg-surface-container-high px-2 py-0.5 rounded">RISING STAR</span>
                      <span className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">98 Completed Bookings</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-headline font-black text-on-surface leading-none">6.1k</span>
                    <span className="text-[0.6rem] block text-on-surface-variant font-bold uppercase tracking-widest mt-1">XP points</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Bento Grid: Stats Highlights */}
        <section className="mt-24">
          <h2 className="text-3xl font-headline font-black text-on-surface mb-10 tracking-tight">Seasonal <span className="text-secondary">Insights</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 bg-surface-container-low p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 kinetic-gradient blur-[80px] opacity-20"></div>
              <span className="material-symbols-outlined text-primary text-4xl mb-4">bolt</span>
              <h4 className="text-on-surface font-headline text-2xl font-bold mb-2">Most Kinetic Venue</h4>
              <p className="text-on-surface-variant text-sm mb-6">Apex Arena Pro has maintained a 100% occupancy rate for 12 consecutive days.</p>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-headline font-black text-on-surface">100%</span>
                <span className="text-primary text-xs font-bold mb-1">+12% from last month</span>
              </div>
            </div>

            <div className="bg-surface-container-high p-8 rounded-3xl border border-outline-variant/10">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">history</span>
              <h4 className="text-on-surface font-headline text-lg font-bold mb-2">Network Time</h4>
              <div className="text-3xl font-headline font-black text-on-surface">4.2k <span className="text-xs text-on-surface-variant font-medium">Hours</span></div>
              <p className="text-xs text-on-surface-variant mt-2">Total play time across all turfs this week.</p>
            </div>

            <div className="bg-[#be0dff] p-8 rounded-3xl flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-black text-4xl">local_fire_department</span>
                <span className="text-[0.65rem] font-black bg-black text-on-surface px-2 py-1 rounded">LIVE</span>
              </div>
              <div>
                <h4 className="text-black font-headline text-xl font-black mb-1">Hot Zone</h4>
                <p className="text-black/70 text-xs font-bold">Midtown Manhattan pitches are currently in peak demand.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Highest Views Dummy Image Section */}
        <section className="mt-12">
          <div className="relative rounded-3xl overflow-hidden aspect-[21/9] group border border-outline-variant/20 bg-surface-container-high transition-transform duration-500 hover:-translate-y-1">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ-dkTijRtQ8hNhTAUGZ4BFQfxKAWoKk_Q9kA6lJ_0cTKTu3klebpywg5XO-2lBXh_AMPwdKQ804XeG6zrzXPnSJmDGD8gDIN0yAI0kVpkvw0nwD2UjbN5rDKTnnrEsiSGLsziG4vm4RIytlQqb31oP3mFOTPws5M_yXGYQtbXjrn63SEkympgw2VCZtf9sj3GqyeoB6Wtkl3xzLEqwb41tOMJVqxy_stCTmBnEuKzg8oFOgKDDNpu9EvAm-e9D5qvLVv43LloOYc"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
              alt="Highest Views Turf"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent flex flex-col justify-end p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary/20 text-primary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-primary/30 backdrop-blur-md">Highest Views This Month</span>
                <span className="flex items-center gap-1 text-on-surface bg-white/10 px-3 py-1 rounded-full backdrop-blur-md text-[10px] uppercase font-bold tracking-widest border border-white/10">
                  <span className="material-symbols-outlined text-xs">visibility</span> 25.4k
                </span>
              </div>
              <h3 className="text-3xl md:text-5xl font-headline font-black text-on-surface mb-2">The Velocity Arena</h3>
              <p className="text-on-surface-variant font-body max-w-lg">The community's absolute favorite turf this month. Featuring state-of-the-art cinematic lighting that goes viral on every upload.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-outline-variant/10 tonal-shift bg-surface-container-lowest mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 max-w-[1440px] mx-auto">
          <div>
            <div className="text-xl font-bold text-primary mb-2 font-headline">TurfBooking Pro</div>
            <p className="font-body text-xs text-on-surface-variant">© 2024 TurfBooking Pro. The Kinetic Void.</p>
          </div>
          <div className="flex gap-8">
            <a className="font-body text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="font-body text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="font-body text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">Partner with Us</a>
            <a className="font-body text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">Careers</a>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-sm">share</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-sm">public</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Leaderboard;
