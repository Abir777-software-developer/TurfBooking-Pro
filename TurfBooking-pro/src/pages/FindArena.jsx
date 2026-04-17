import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FindArena = () => {
  const [radius, setRadius] = useState(5);
  const [price, setPrice] = useState(0);

  return (
    <div className="bg-background text-on-background font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">
      {/* Top Navigation Shell */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-surface to-transparent">
        <div className="flex justify-between items-center px-8 py-4 max-w-[1440px] mx-auto bg-surface/60 backdrop-blur-xl shadow-2xl shadow-on-background/10">
          <Link to="/" className="text-2xl font-black text-primary tracking-tighter headline-font">TurfBooking Pro</Link>
          <div className="hidden md:flex items-center gap-8">
            <Link className="font-['Space_Grotesk'] tracking-tight text-sm uppercase font-bold text-on-surface border-b-2 border-primary pb-1 transition-all duration-300" to="/find-arena">Find Turf</Link>
            <Link className="font-['Space_Grotesk'] tracking-tight text-sm uppercase font-bold text-on-surface hover:text-on-surface transition-all duration-300" to="/leagues">Leagues</Link>
            <Link className="font-['Space_Grotesk'] tracking-tight text-sm uppercase font-bold text-on-surface hover:text-on-surface transition-all duration-300" to="/reviews">Reviews</Link>
            <a className="font-['Space_Grotesk'] tracking-tight text-sm uppercase font-bold text-on-surface hover:text-on-surface transition-all duration-300" href="#">Support</a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/register-user" className="font-['Space_Grotesk'] tracking-tight text-sm uppercase font-bold text-on-surface hover:text-on-surface transition-all">Sign In</Link>
            <button className="pulse-gradient text-on-primary px-6 py-2 rounded-full font-['Space_Grotesk'] tracking-tight text-sm uppercase font-bold hover:scale-95 active:scale-90 transition-all duration-300">Book Now</button>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-6 max-w-screen-2xl mx-auto flex-1 w-full">
        {/* Hero Search Section */}
        <header className="mb-12 relative mt-10">
          <div className="flex flex-col gap-4">
            <span className="text-primary-container font-label text-sm tracking-[0.2em] uppercase font-bold">The Arena Finder</span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter leading-tight max-w-3xl">
              FIND YOUR <span className="text-transparent bg-clip-text kinetic-gradient">NEXT ARENA</span>
            </h1>
          </div>
          
          {/* Filters Bar: Glassmorphic Floating Panel */}
          <div className="mt-12 glass-panel p-2 rounded-full flex flex-col md:flex-row items-center gap-2 border border-outline-variant/15">
            <div className="flex-1 w-full flex items-center bg-surface-container-lowest rounded-full px-6 py-3 border border-transparent focus-within:border-primary-container/30 transition-all">
              <span className="material-symbols-outlined text-outline mr-3">search</span>
              <input className="bg-transparent border-none outline-none focus:ring-0 text-on-surface w-full font-body placeholder:text-outline" placeholder="Search by venue or sport..." type="text" />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto no-scrollbar px-2 md:px-0">
              <div className="flex items-center gap-2 px-6 py-3 bg-surface-container-high rounded-full whitespace-nowrap border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary-container text-sm">map</span>
                <button onClick={() => setRadius(Math.max(1, radius - 1))} className="font-headline font-black hover:text-primary-container transition-colors px-1 text-lg">-</button>
                <span className="font-label text-sm font-medium w-20 text-center">{radius}km Radius</span>
                <button onClick={() => setRadius(radius + 1)} className="font-headline font-black hover:text-primary-container transition-colors px-1 text-lg">+</button>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 bg-surface-container-high rounded-full whitespace-nowrap border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary-container text-sm">payments</span>
                <button onClick={() => setPrice(Math.max(0, price - 10))} className="font-headline font-black hover:text-primary-container transition-colors px-1 text-lg">-</button>
                <span className="font-label text-sm font-medium w-20 text-center">{price === 0 ? 'Any Price' : `< $${price}/hr`}</span>
                <button onClick={() => setPrice(price + 10)} className="font-headline font-black hover:text-primary-container transition-colors px-1 text-lg">+</button>
              </div>
            </div>
            <button className="kinetic-gradient w-full md:w-14 h-12 md:h-14 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all">
              <span className="material-symbols-outlined text-on-primary">tune</span>
            </button>
          </div>
        </header>

        {/* Arena Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group relative bg-surface-container-low rounded-xl overflow-hidden hover:shadow-[0_0_40px_rgba(0,255,148,0.06)] transition-all duration-300">
            <div className="aspect-[16/10] overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Modern floodlit artificial grass football pitch at night with deep shadows and vibrant electric green turf" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ-dkTijRtQ8hNhTAUGZ4BFQfxKAWoKk_Q9kA6lJ_0cTKTu3klebpywg5XO-2lBXh_AMPwdKQ804XeG6zrzXPnSJmDGD8gDIN0yAI0kVpkvw0nwD2UjbN5rDKTnnrEsiSGLsziG4vm4RIytlQqb31oP3mFOTPws5M_yXGYQtbXjrn63SEkympgw2VCZtf9sj3GqyeoB6Wtkl3xzLEqwb41tOMJVqxy_stCTmBnEuKzg8oFOgKDDNpu9EvAm-e9D5qvLVv43LloOYc" alt="Pitch" />
              <div className="absolute top-4 left-4 bg-primary-container/90 backdrop-blur text-on-primary-container px-3 py-1 rounded-full font-label font-black text-[10px] tracking-wider uppercase">Live Now</div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="bg-black/40 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">Football</span>
                <span className="bg-black/40 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">5-a-side</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-headline font-bold">The Velocity Arena</h3>
                <div className="flex items-center gap-1 text-primary-container">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-label text-sm font-bold">4.9</span>
                </div>
              </div>
              <p className="text-on-surface-variant text-sm mb-6 font-body">Premium synthetic turf with tournament-grade lighting and locker facilities.</p>
              <div className="flex items-center justify-between pt-6 border-t border-outline-variant/10">
                <div>
                  <span className="text-outline text-xs block font-label uppercase font-bold tracking-tighter">Starting at</span>
                  <span className="text-xl font-headline font-extrabold">$45/hr</span>
                </div>
                <Link to="/turf-details" className="bg-surface-container-highest px-6 py-2 rounded-full font-label font-bold text-xs hover:bg-primary-container hover:text-on-primary-container transition-all inline-block">Details</Link>
              </div>
            </div>
          </div>

          <div className="group relative bg-surface-container-low rounded-xl overflow-hidden hover:shadow-[0_0_40px_rgba(0,255,148,0.06)] transition-all duration-300">
            <div className="aspect-[16/10] overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Indoor cricket net facility with blue flooring and professional bowling machines under bright stadium lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh0u6qMETr_H2S62EH2K9-UIGx9JVLUe-Ygo1e4YNQ-C8WeUT-z-7WzvjggMgS7lGzFUMProtBD417PmLywi9ffcus2F0APJok0KjLS1r07q8JNeXDLXPq4uArvjGX81phcSqezl2W8ntLGQh4T3n9KBapFeqAZEzfYh-yC6nGhjqAwkHLOX2P50uwykUP4HPOx0T0kUQYnUC9Mxuqp2Dflx2pyJk2efas_yHeI4FYu72QoyTLwz6VDJCwJBGPpr1673SxR-FSstA" alt="Cricket net" />
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="bg-black/40 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">Cricket</span>
                <span className="bg-black/40 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">Indoor</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-headline font-bold">Skyline Cricket Nets</h3>
                <div className="flex items-center gap-1 text-primary-container">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-label text-sm font-bold">4.8</span>
                </div>
              </div>
              <p className="text-on-surface-variant text-sm mb-6 font-body">High-performance bowling machines and speed tracking sensors available.</p>
              <div className="flex items-center justify-between pt-6 border-t border-outline-variant/10">
                <div>
                  <span className="text-outline text-xs block font-label uppercase font-bold tracking-tighter">Starting at</span>
                  <span className="text-xl font-headline font-extrabold">$30/hr</span>
                </div>
                <Link to="/turf-details" className="bg-surface-container-highest px-6 py-2 rounded-full font-label font-bold text-xs hover:bg-primary-container hover:text-on-primary-container transition-all inline-block">Details</Link>
              </div>
            </div>
          </div>

          <div className="group relative bg-surface-container-low rounded-xl overflow-hidden hover:shadow-[0_0_40px_rgba(0,255,148,0.06)] transition-all duration-300">
            <div className="aspect-[16/10] overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="High-end padel court with glass walls and blue flooring in a modern industrial sports complex" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_pfFVwFdI01VgZ3TQAHkZaBSci0cxAum8FH7D_dbVQewXP5jgM-XKrbL0E5hjgVAA6L2w7S28O_U2mlSyBqzDntahwgFrlEypYW01ZJdwvrDD1sURqKghhuz_9xj31Cg_VXYBNJuI5idchyXI9WEJjjPL9ZzYL2ymnXsQQhrCaaY1KRnVTO3uwiC1FmQVDTJdL4infBQfHrkwo48tlwuzbA_FNMIqMkkLBqRQCtqeMw72FE00-kgOfsZ--hZJ9uW8LK0LReJjtew" alt="Padel court" />
              <div className="absolute top-4 left-4 bg-tertiary-container/90 backdrop-blur text-on-tertiary-container px-3 py-1 rounded-full font-label font-black text-[10px] tracking-wider uppercase">New Opening</div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="bg-black/40 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">Padel</span>
                <span className="bg-black/40 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">Court</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-headline font-bold">Neon Padel Hub</h3>
                <div className="flex items-center gap-1 text-primary-container">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-label text-sm font-bold">5.0</span>
                </div>
              </div>
              <p className="text-on-surface-variant text-sm mb-6 font-body">Exclusive glass-walled courts with panoramic city views and premium lounge.</p>
              <div className="flex items-center justify-between pt-6 border-t border-outline-variant/10">
                <div>
                  <span className="text-outline text-xs block font-label uppercase font-bold tracking-tighter">Starting at</span>
                  <span className="text-xl font-headline font-extrabold">$60/hr</span>
                </div>
                <Link to="/turf-details" className="bg-surface-container-highest px-6 py-2 rounded-full font-label font-bold text-xs hover:bg-primary-container hover:text-on-primary-container transition-all inline-block">Details</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Layout for Stats/Discovery */}
        <section className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 bg-surface-container p-8 rounded-xl relative overflow-hidden group">
            <div className="relative z-10">
              <h4 className="text-3xl font-headline font-black mb-2 uppercase tracking-tighter">Peak Performance <span className="text-primary-container">Unlocked</span></h4>
              <p className="text-on-surface-variant max-w-xs mb-8">Analyze your game play with our AI-powered tracking cameras available at select venues.</p>
              <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-label font-black text-xs uppercase tracking-widest hover:scale-105 transition-all">Join Beta</button>
            </div>
            <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-[180px]">monitoring</span>
            </div>
          </div>
          <div className="md:col-span-1 bg-surface-container-high p-8 rounded-xl flex flex-col justify-between">
            <span className="material-symbols-outlined text-primary-container text-4xl">emoji_events</span>
            <div>
              <div className="text-4xl font-headline font-black text-primary-container">12</div>
              <div className="text-xs font-label uppercase font-bold tracking-widest text-outline">Leagues Open</div>
            </div>
          </div>
          <div className="md:col-span-1 bg-surface-container-high p-8 rounded-xl flex flex-col justify-between">
            <span className="material-symbols-outlined text-primary-container text-4xl">groups</span>
            <div>
              <div className="text-4xl font-headline font-black text-primary-container">2.4k</div>
              <div className="text-xs font-label uppercase font-bold tracking-widest text-outline">Active Players</div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#131313] w-full py-12 px-8 border-t border-white/5 font-['Manrope'] text-sm mt-auto">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-lg font-black text-primary">TurfBooking Pro</span>
            <p className="text-neutral-500">© 2024 TurfBooking Pro. The Kinetic Void.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="text-neutral-500 hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="text-neutral-500 hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="text-neutral-500 hover:text-primary transition-colors" href="#">Contact Us</a>
            <a className="text-neutral-500 hover:text-primary transition-colors" href="#">Partner with Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FindArena;
