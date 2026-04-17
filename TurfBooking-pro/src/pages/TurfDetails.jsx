import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TurfDetails = () => {
  const [selectedSlotIndex, setSelectedSlotIndex] = useState(3); // Default to 06:00 PM
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingDate, setBookingDate] = useState("2024-05-20");
  const [formData, setFormData] = useState({
    bookerName: '',
    bookerEmail: '',
    receiverEmail: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generatedToken, setGeneratedToken] = useState(null);
  const [error, setError] = useState(null);



  const timeSlots = [
    { time: "06:00 AM", price: 65, type: "Morning", available: true },
    { time: "08:00 AM", price: 70, type: "Morning", available: true },
    { time: "12:00 PM", price: 75, type: "Midday", available: true },
    { time: "06:00 PM", price: 85, type: "Evening", available: true },
    { time: "08:00 PM", price: 90, type: "Night", available: true },
    { time: "10:00 PM", price: 80, type: "Late Night", available: true },
    { time: "11:00 PM", price: 80, type: "Late Night", available: false },
  ];

  const currentPrice = timeSlots[selectedSlotIndex]?.price || 85;

  const handleSendBooking = async () => {
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:5000/api/send-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          slotDate: bookingDate,
          slotTime: timeSlots[selectedSlotIndex].time
        })
      });

      const data = await response.json();
      if (data.success) {
        setGeneratedToken(data.token);
      } else {
        setError(data.message || 'Something went wrong');
      }
    } catch (err) {
      setError('Connection to server failed. Please ensure the backend is running.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen flex flex-col">
      {/* Top Navigation Shell */}
      <header className="fixed top-0 w-full z-50 no-border bg-gradient-to-b from-surface to-transparent">
        <nav className="flex justify-between items-center px-8 py-4 max-w-[1440px] mx-auto bg-surface/60 backdrop-blur-xl shadow-2xl shadow-on-background/10">
          <Link to="/" className="text-2xl font-black text-primary tracking-tighter font-headline">TurfBooking Pro</Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link className="font-headline tracking-tight text-sm uppercase font-bold text-on-surface border-b-2 border-primary pb-1" to="/find-arena">Find Turf</Link>
            <Link className="font-headline tracking-tight text-sm uppercase font-bold text-on-surface hover:text-on-surface transition-all duration-300" to="/leagues">Leagues</Link>
            <Link className="font-headline tracking-tight text-sm uppercase font-bold text-on-surface hover:text-on-surface transition-all duration-300" to="/reviews">Reviews</Link>
            <a className="font-headline tracking-tight text-sm uppercase font-bold text-on-surface hover:text-on-surface transition-all duration-300" href="#">Support</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-6 py-2 rounded-full font-headline font-bold text-sm kinetic-gradient text-on-primary uppercase scale-95 active:scale-90 transition-all">Book Now</button>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-20 flex-1">
        {/* Hero Image Carousel Section */}
        <section className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mt-10">
          <div className="md:col-span-8 relative rounded-xl overflow-hidden group h-[500px]">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Ultra-modern indoor football turf with neon green markings and professional stadium lighting under a high tech ceiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsukzrNhaZHr-Cxrv64sfCwX74PV7oIfZDYoO8-0xi_9TJ5WeLqtr3ySLWPQpW_CtvY2d4bDzCZCngGbyGi6Wx2PncZDUirlJbHGAxXsoINgNRRnnjprN09xgIXq2O8j-Rcjs0EDa7yU9kQGX_oRCAB1Z-dO6_omxH7bHDQVOnaVQlqHGfis3xmP5JkNTAGj4rynY9nw3DVPGiuE3AuCAz3nO-ewZ_do0Z3cBdcIHb6Cqcbc7xXyuQpxp98MFiZkd8LB7RlYKfRo8" alt="Arena Image" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-8">
              <div className="space-y-2">
                <h1 className="text-5xl font-black font-headline tracking-tighter uppercase text-primary">Kinetic Arena 01</h1>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 text-secondary font-bold">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    4.9 (128 reviews)
                  </span>
                  <span className="text-on-surface-variant">•</span>
                  <span className="text-on-surface-variant font-medium">Premium FIFA-Grade Synthetic</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 right-8 flex gap-2">
              <button className="w-10 h-10 rounded-full bg-surface-container-highest/80 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-10 h-10 rounded-full bg-surface-container-highest/80 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          
          <div className="md:col-span-4 flex flex-col gap-6">
            {/* Booking Card */}
            <div className="bg-surface-container h-full rounded-xl p-8 flex flex-col justify-between border border-outline-variant/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-9xl">stadium</span>
              </div>
              <div>
                <span className="text-tertiary text-xs font-bold uppercase tracking-widest block mb-2">Live Pricing</span>
                <div className="flex items-baseline gap-2 transition-all duration-500 transform">
                  <span className={`text-4xl font-black font-headline text-on-surface transition-all duration-300 ${selectedSlotIndex !== null ? 'text-primary scale-105' : ''}`}>
                    ${currentPrice.toFixed(2)}
                  </span>
                  <span className="text-on-surface-variant font-medium">/ hour</span>
                </div>

                <p className="mt-4 text-on-surface-variant text-sm leading-relaxed">
                  Experience the pinnacle of urban football. Professional lighting, premium drainage, and climate-controlled waiting zones included.
                </p>
              </div>
              <div className="space-y-4 relative z-10">
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase text-on-surface-variant tracking-widest" htmlFor="booking-date">Select Play Date</label>
                  <div className="relative">
                    <input 
                      className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 text-sm font-bold focus:border-primary focus:ring-0 transition-colors cursor-pointer" 
                      id="booking-date" 
                      type="date" 
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                    />

                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none text-xl">calendar_today</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-4 rounded-full kinetic-gradient font-black font-headline uppercase tracking-tight text-on-primary shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95"
                >
                  Secure Slot
                </button>

                <div className="flex justify-center gap-6 text-xs font-bold uppercase text-on-surface-variant tracking-tighter">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">bolt</span> Instant Booking</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">verified</span> Verified Field</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="max-w-[1440px] mx-auto px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Details & Map */}
          <div className="lg:col-span-8 space-y-12">
            {/* Address & Map Section */}
            <div className="bg-surface-container-low rounded-xl p-8 space-y-6">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h2 className="text-xl font-headline font-bold uppercase tracking-tight">Location Velocity</h2>
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined">location_on</span>
                    <span className="text-sm">Sector 7, Velocity District, Cyber-Hub East</span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-surface-container-highest rounded-lg text-xs font-bold uppercase text-primary hover:bg-primary hover:text-on-primary transition-all">Get Directions</button>
              </div>
              <div className="w-full h-64 bg-surface-container-lowest rounded-xl overflow-hidden relative group">
                <div className="absolute inset-0 grayscale contrast-125 opacity-40">
                  <img className="w-full h-full object-cover" data-alt="Dark stylized aerial map view of an urban grid at night with glowing blue and green transit lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6rEUHW1d_LYq5lnYMkHvc666xx5oxVcSbdNBryQXNQlfJ-Xu5BXaifwbBXeqlcTdt0cNl-iwdoGEZ8p3n6qb-d_O98BpFkEKhOQ49dxy83DcDluKduvsW5uMHluRLo2ehdRN0jya7IRxkTbgp9fKDfTbT7aelGNbT1-iaPpiKzduGL-ZNjSdEdLhIiuY3eUWl2nRZxFYDUHU8q6UNdwhj-oXojfMFT7m6_zpnBPrnRSFB_NIIH9YaJjqfgQLs-njWVACflfs2kYw" alt="Map" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_#a2ffbf]"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 glass-panel px-3 py-1.5 rounded-full text-[10px] font-bold uppercase text-on-surface-variant tracking-wider">
                  Mapbox Rendering: Kinetic Void Engine
                </div>
              </div>
            </div>

            {/* Available Slots Grid */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-headline font-bold uppercase tracking-tight">Available Time Rings</h2>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-surface-container-highest text-primary rounded-full text-xs font-bold border border-primary/20">Today</button>
                  <button className="px-4 py-2 bg-surface-container-low text-on-surface-variant rounded-full text-xs font-bold hover:bg-surface-container-highest transition-colors">Tomorrow</button>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {timeSlots.map((slot, idx) => (
                  <button
                    key={idx}
                    disabled={!slot.available}
                    onClick={() => setSelectedSlotIndex(idx)}
                    className={`
                      p-4 rounded-xl border transition-all duration-300 text-center relative overflow-hidden group
                      ${!slot.available 
                        ? 'bg-surface-container-lowest border-outline-variant/5 opacity-40 cursor-not-allowed' 
                        : selectedSlotIndex === idx
                          ? 'bg-surface-container border-primary shadow-[0_0_20px_rgba(0,255,148,0.1)]'
                          : 'bg-surface-container-lowest border-outline-variant/5 hover:border-primary/50'}
                    `}
                  >
                    {selectedSlotIndex === idx && slot.available && (
                      <div className="absolute top-0 right-0 p-1">
                        <span className="material-symbols-outlined text-xs text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      </div>
                    )}
                    <span className={`
                      block text-[10px] uppercase font-bold mb-1 transition-colors
                      ${!slot.available 
                        ? 'text-on-surface-variant' 
                        : selectedSlotIndex === idx ? 'text-primary' : 'text-on-surface-variant'}
                    `}>
                      {!slot.available ? 'Sold Out' : slot.type}
                    </span>
                    <span className={`
                      block text-lg font-headline font-bold transition-all
                      ${!slot.available 
                        ? 'text-on-surface-variant line-through' 
                        : selectedSlotIndex === idx ? 'text-primary' : 'text-on-surface group-hover:text-primary'}
                    `}>
                      {slot.time}
                    </span>
                  </button>
                ))}
              </div>

            </div>
          </div>

          {/* Right Column: Stats & Features */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-surface-container-highest/30 rounded-xl p-8 border border-outline-variant/10">
              <h3 className="text-sm font-headline font-black uppercase text-secondary tracking-widest mb-6">Facility Essentials</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low border border-outline-variant/5 hover:border-primary/30 transition-colors">
                  <span className="material-symbols-outlined text-primary text-xl">wc</span>
                  <span className="text-xs font-bold uppercase tracking-tight">Washrooms</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low border border-outline-variant/5 hover:border-primary/30 transition-colors">
                  <span className="material-symbols-outlined text-secondary text-xl">medical_services</span>
                  <span className="text-xs font-bold uppercase tracking-tight">Health Care</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low border border-outline-variant/5 hover:border-primary/30 transition-colors">
                  <span className="material-symbols-outlined text-primary-dim text-xl">local_drink</span>
                  <span className="text-xs font-bold uppercase tracking-tight">Pure Water</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low border border-outline-variant/5 hover:border-primary/30 transition-colors">
                  <span className="material-symbols-outlined text-tertiary text-xl">local_parking</span>
                  <span className="text-xs font-bold uppercase tracking-tight">Safe Parking</span>
                </div>
              </div>
            </div>
            
            <div className="bg-surface-container-highest/30 rounded-xl p-8 border border-outline-variant/10">
              <h3 className="text-sm font-headline font-black uppercase text-tertiary tracking-widest mb-6">Field Specifications</h3>
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">groups</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-on-surface-variant">Player Count</p>
                    <p className="font-bold">5-a-side / 6-a-side</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined">lightbulb</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-on-surface-variant">Lighting</p>
                    <p className="font-bold">4000K LED Floodlights</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary-dim">
                    <span className="material-symbols-outlined">shower</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-on-surface-variant">Premium Services</p>
                    <p className="font-bold">Showers & Lockers</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative rounded-xl overflow-hidden h-48 group">
              <img className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" data-alt="Close up of professional football boots on lush green artificial grass with stadium lights bokeh in background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw-6a-fvz-YsH9uun_dTZbgVzh1axK_Cz5AJTD_rdWC2rmNObp542WgXcX-hB-A7knQ_R2Z_0i18LNs3RMnJ6xJ6N4i38pRJH2eKHneD4vS_ZwMdGsWJzwbg9iQfYC-FRnTwDoK5gFno3xK9kp-SW4AXQxltQmcZEchuqQ5oWQj18owkq_GYgb_LXY6_1rjYEXXM-D7AiAYBZwqoB2Y4zzpFgorbVzfZKxtgYlCkslh_gGTBzSclt4IO9hpBZhnx83oLc4_lLbPPs" alt="Shoes" />
              <div className="absolute inset-0 bg-secondary/20 flex items-center justify-center">
                <span className="bg-surface px-4 py-2 rounded-full text-xs font-black uppercase text-secondary border border-secondary/50">Pro Shop Available</span>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 mt-0">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-background/80 backdrop-blur-md transition-opacity duration-300"
              onClick={() => setIsModalOpen(false)}
            />
            
            {/* Modal Content */}
            <div className="relative w-full max-w-xl bg-surface-container rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/10 animate-in fade-in zoom-in duration-300">
              <div className="kinetic-gradient p-8 text-on-primary relative overflow-hidden">
                <div className="relative z-10 flex justify-between items-center">
                  <div>
                    <h2 className="text-3xl font-headline font-black uppercase tracking-tighter">Confirm Booking</h2>
                    <p className="text-on-primary/70 text-xs font-bold uppercase tracking-widest mt-1">Fill in the details to secure your arena</p>
                  </div>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  >
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
                {/* Abstract shape */}
                <div className="absolute top-0 right-0 p-4 opacity-20 translate-x-12 translate-y-[-20px]">
                  <span className="material-symbols-outlined text-9xl">stadium</span>
                </div>
              </div>

              <div className="p-8 space-y-6">
                {generatedToken ? (
                  <div className="text-center space-y-6 py-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto text-primary">
                      <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-headline font-black uppercase">Booking Confirmed!</h3>
                      <p className="text-on-surface-variant text-sm mt-1">Check your inbox for the confirmation email.</p>
                    </div>
                    <div className="bg-surface-container-lowest p-6 rounded-2xl border-2 border-dashed border-primary/30 relative">
                      <span className="text-[10px] font-bold uppercase text-outline tracking-widest block mb-2">Your Unique Token</span>
                      <div className="text-4xl font-headline font-black text-primary tracking-[0.2em]">
                        {generatedToken}
                      </div>
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText(generatedToken);
                          alert("Token copied to clipboard!");
                        }}
                        className="absolute top-2 right-2 p-2 text-outline hover:text-primary transition-colors"
                      >
                        <span className="material-symbols-outlined text-sm">content_copy</span>
                      </button>
                    </div>
                    <button 
                      onClick={() => {
                        setIsModalOpen(false);
                        setGeneratedToken(null);
                        setFormData({ bookerName: '', bookerEmail: '', receiverEmail: '' });
                      }}
                      className="w-full py-4 rounded-full bg-surface-container-highest font-bold uppercase text-xs tracking-widest hover:bg-primary hover:text-on-primary transition-all"
                    >
                      Close and Continue
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="block text-[10px] font-bold uppercase text-on-surface-variant tracking-widest">Selected Date</label>
                        <div className="bg-surface-container-lowest px-4 py-3 rounded-xl border border-outline-variant/20 flex items-center gap-2 opacity-70">
                          <span className="material-symbols-outlined text-sm text-primary">calendar_today</span>
                          <span className="text-sm font-bold">{bookingDate}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-[10px] font-bold uppercase text-on-surface-variant tracking-widest">Selected Time</label>
                        <div className="bg-surface-container-lowest px-4 py-3 rounded-xl border border-outline-variant/20 flex items-center gap-2 opacity-70">
                          <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                          <span className="text-sm font-bold">{timeSlots[selectedSlotIndex].time}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="block text-[10px] font-bold uppercase text-on-surface-variant tracking-widest">Booker Name</label>
                        <input 
                          type="text" 
                          placeholder="Enter your full name"
                          className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 text-sm font-bold focus:border-primary focus:ring-0 transition-colors"
                          value={formData.bookerName}
                          onChange={(e) => setFormData({...formData, bookerName: e.target.value})}
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-[10px] font-bold uppercase text-on-surface-variant tracking-widest">Booker Email</label>
                          <input 
                            type="email" 
                            placeholder="your@email.com"
                            className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 text-sm font-bold focus:border-primary focus:ring-0 transition-colors"
                            value={formData.bookerEmail}
                            onChange={(e) => setFormData({...formData, bookerEmail: e.target.value})}
                            disabled={isSubmitting}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-[10px] font-bold uppercase text-on-surface-variant tracking-widest">Receiver Email</label>
                          <input 
                            type="email" 
                            placeholder="recipient@email.com"
                            className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 text-sm font-bold focus:border-primary focus:ring-0 transition-colors"
                            value={formData.receiverEmail}
                            onChange={(e) => setFormData({...formData, receiverEmail: e.target.value})}
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>
                    </div>

                    {error && (
                      <div className="p-4 bg-error/10 border border-error/20 rounded-xl flex items-center gap-3 text-error text-xs font-bold animate-pulse">
                        <span className="material-symbols-outlined text-sm">error</span>
                        {error}
                      </div>
                    )}

                    <button 
                      onClick={handleSendBooking}
                      disabled={isSubmitting || !formData.bookerEmail || !formData.receiverEmail}
                      className={`
                        w-full py-4 rounded-full kinetic-gradient font-black font-headline uppercase tracking-tight text-on-primary shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95 flex items-center justify-center gap-2
                        ${(isSubmitting || !formData.bookerEmail || !formData.receiverEmail) ? 'opacity-50 grayscale cursor-not-allowed' : ''}
                      `}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <span className="material-symbols-outlined text-xl">send</span>
                          Send Booking Request
                        </>
                      )}
                    </button>
                  </>
                )}
              </div>

            </div>
          </div>
        )}

      </main>

      <footer className="w-full border-t border-outline-variant/10 bg-surface-container-lowest mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 max-w-[1440px] mx-auto">
          <div className="space-y-4">
            <div className="text-xl font-bold text-primary font-headline">TurfBooking Pro</div>
            <p className="text-xs text-on-surface-variant font-body max-w-xs">Engineered for the modern athlete. The world's fastest turf booking ecosystem.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="font-body text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="font-body text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="font-body text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">Partner with Us</a>
            <a className="font-body text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">Careers</a>
          </div>
          <div className="text-xs text-on-surface-variant font-body">
            © 2024 TurfBooking Pro. The Kinetic Void.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TurfDetails;
