import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const cyclicReviews = [
  {
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsC82V3Sg_pxJmfPoUx1HKzaPuKZ58Di8tDE3_tvBOQCJhX1YoKtOusQhyXD-zRNuBUeRryr4GqghdHHjvMkJyse-OB5X19Q96YA_g5WOM_bpPvUGvJqteeFNC2bdQy8CF4ym73u7JEQui0JEL22MBk-hcrLcu1bpPQf1vRSkZQapEXzHQeOZI6BhqFCdLJddNm7iG_RAT0bqmsxmMGX0YKM7BRa3A3y1la3Nt1bh0imYyh3btKYRngnrqu9sweJ-WqWqm0tB3S-Q",
    text: "Transitioned from amateur to league play here. The surface density is perfect for reducing joint impact. My go-to spot.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAT_xEGXU4q0EtXxDy6VUJZEc97fxSQ_2eWzvaPX_CvEzL5WioMhBvuQAJRC-3hITxhRKyksRAGiDNWKVtBoPPi2Ne3WKq8BwE_T_vUvBs1AbcWncxVn-HQZXP0ERZzclaL_DccKrU3BrGIXMwaDQ66iBxb9huF-qScnoAQZLG7NXqImde5uun_EV-XkKIWFVIVfqkLXxUvvDJvdb9LHMiYl3oabWG-5E6jvGco9j1vZPpbtQ2k-yPL6fNANpJclQ6OGIiVa9GgeZA"
  },
  {
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOf9pt3qbx9t0ygiMR4jcoAkSMyFBCp1E_bxjbKD5mvSCc74rqvAjTrOXyE4kk0ppRAQKIztPvBNoW2mpN1965_rzjEPAqtBI5GVN6DtQErSoTlzYCjSvaxPHrs7K5qvCzCJZgMX_jcETpq6S3TLh-We1xtOkSP37re4MyktX1SwXLTVB_5-u3pm1gA1QT8MJA2w3cqNDCxLAoHRPwy92IneiX5kvmDm5ctpmPaQa7FJmEG7a5A3y6u5QNcxXCLI9JMxyqrpabYn0",
    text: "The hard court traction is insane. Easily the best bounce consistency I've played on this season.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnO7Tz7jEDnZAXhsWp2i9ZRBExfs_bkhyBfNf8OOs1COt2YmIIKqqt4AuUArXCb2ive_0nq1CAarhSj3gQAAPwn_URo2yVTTJmfFUsSrBSAdX-yz5xPvVjEeGijRM8BiAsjW6LbxS03CoxWL9jMMZKISP9LiQNyYNhnskne-gZ0lTa9SjoMR-12L1LDPIa0GQPP0Bxh3oSm7lFu1F1Htqk-Npno3hAkBUK_f6MwNTYFhSgplpx5msSc8mDtrJ26w9MyKY6FTK98zY"
  },
  {
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPbZ67Z6BxH5OSa1IL7Ujh_04iStNxAbMdgw1FJxQVuV3B-zJXqXxvvDneE-1xUkKtJg1e6gwzE_4c49Tc5K9yNbeFji-DVOhFVRC1FWgYmygovNOIO_mWSjpGyCsex0tzDPk3wdH7oDNYNZEx1L1HkbWjpBDwMzdz7DNs6fEtgUFhaTZRlW6H3_vJFmmJb3Oc3fBix3pCx8Nf9DtMkZdB6odvwtXKVrZ7O0YYJ5v6rl8DCe2n2VQZZj0Ik1hMRqISe0_mdEea5rI",
    text: "Perfect lighting and floor grip for our late-night squad matches. Highly recommended.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB53b1t0l3rTS6MsoBtKdVsu4lfpQ-nM60oEVzZPEbNChruC7TLFmpVXCpli4_eLdqH5XKWKv9w6G4XvEb9m1LgQ5WxnYEYT8npb5My3tXe1yhUur-8SQ5K3TLdzUCRCRX-Yy8gd5MSvIIPv5aYeo_7IEkhzRBuD5csncfZRbR0I6_UOLYMFuO1Ji21-qsBWqiA7otWuwo430z4uWVD0UwjTjQTZ9HVAV5Z8kmpJGsgkSw5MVx3WrdukyHoDj0hRFgV5ytDHx0Z8Do"
  }
];

const Reviews = () => {
  const [hoverIndex, setHoverIndex] = useState(0);

  const handleHoverCycle = () => {
    setHoverIndex((prev) => (prev + 1) % cyclicReviews.length);
  };

  return (
    <div className="bg-surface text-on-surface selection:bg-primary selection:text-on-primary min-h-screen">
      {/* Top Navigation Shell */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-surface to-transparent">
        <div className="flex justify-between items-center px-8 py-4 max-w-[1440px] mx-auto bg-surface/60 backdrop-blur-xl shadow-2xl shadow-on-background/10">
          <Link to="/" className="text-2xl font-black text-primary tracking-tighter headline-font">TurfBooking Pro</Link>
          <div className="hidden md:flex items-center gap-8">
            <Link className="font-['Space_Grotesk'] tracking-tight text-sm uppercase font-bold text-on-surface hover:text-on-surface transition-all duration-300" to="/find-arena">Find Turf</Link>
            <Link className="font-['Space_Grotesk'] tracking-tight text-sm uppercase font-bold text-on-surface hover:text-on-surface transition-all duration-300" to="/leagues">Leagues</Link>
            <Link className="font-['Space_Grotesk'] tracking-tight text-sm uppercase font-bold text-on-surface border-b-2 border-primary pb-1 transition-all duration-300" to="/reviews">Reviews</Link>
            <a className="font-['Space_Grotesk'] tracking-tight text-sm uppercase font-bold text-on-surface hover:text-on-surface transition-all duration-300" href="#">Support</a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/register-user" className="font-['Space_Grotesk'] tracking-tight text-sm uppercase font-bold text-on-surface hover:text-on-surface transition-all">Sign In</Link>
            <button className="pulse-gradient text-on-primary px-6 py-2 rounded-full font-['Space_Grotesk'] tracking-tight text-sm uppercase font-bold hover:scale-95 active:scale-90 transition-all duration-300">Book Now</button>
          </div>
        </div>
      </nav>
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto min-h-screen">
        {/* Hero Header */}
        <header className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
              <span className="text-tertiary font-bold tracking-widest text-xs uppercase mb-4 block headline-font">The Kinetic Feed</span>
              <h1 className="text-5xl md:text-7xl headline-font font-extrabold tracking-tighter mb-6 leading-none">
                PRO <span className="text-transparent bg-clip-text pulse-gradient kinetic-gradient">INSIGHTS</span>
              </h1>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-lg font-body">
                Experience the pitch through the eyes of the community. Raw, unedited footage from the fastest turfs in the city.
              </p>
            </div>
            {/* Upload Trigger */}
            <div className="w-full md:w-auto">
              <div className="surface-container rounded-xl p-6 ghost-border relative overflow-hidden group border border-outline-variant/20 bg-surface-container-high/50">
                <div className="absolute inset-0 pulse-gradient opacity-5"></div>
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <span className="material-symbols-outlined text-primary text-4xl" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>video_call</span>
                  <div className="text-center">
                    <h3 className="font-bold headline-font uppercase text-sm tracking-widest text-on-surface">Share Your Game</h3>
                    <p className="text-xs text-on-surface-variant mt-1 font-body">Upload a 30s video review</p>
                  </div>
                  <button className="w-full py-3 px-8 rounded-full bg-surface-container-highest ghost-border text-primary font-bold headline-font text-xs uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-500 border border-outline-variant/30">
                    Upload Video Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-surface-container-low p-6 rounded-xl ghost-border border border-outline-variant/10">
            <div className="text-3xl headline-font font-black text-primary mb-1">4.9/5</div>
            <div className="text-xs uppercase tracking-tighter text-on-surface-variant font-bold">Avg Pitch Quality</div>
          </div>
          <div className="bg-surface-container-low p-6 rounded-xl ghost-border border border-outline-variant/10">
            <div className="text-3xl headline-font font-black text-secondary mb-1">1.2k+</div>
            <div className="text-xs uppercase tracking-tighter text-on-surface-variant font-bold">Video Reviews</div>
          </div>
          <div className="bg-surface-container-low p-6 rounded-xl ghost-border border border-outline-variant/10">
            <div className="text-3xl headline-font font-black text-tertiary mb-1">98%</div>
            <div className="text-xs uppercase tracking-tighter text-on-surface-variant font-bold">Verified Athletes</div>
          </div>
          <div className="bg-surface-container-low p-6 rounded-xl ghost-border border border-outline-variant/10">
            <div className="text-3xl headline-font font-black text-on-surface mb-1 text-on-surface">24/7</div>
            <div className="text-xs uppercase tracking-tighter text-on-surface-variant font-bold">Live Support</div>
          </div>
        </div>
        {/* Video Grid (Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Feature Review (Large) */}
          <div className="md:col-span-8 group relative rounded-3xl overflow-hidden aspect-[16/10] ghost-border bg-surface-container-high transition-transform duration-500 hover:-translate-y-2 border border-outline-variant/20">
            <img alt="Athletic turf highlights" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" data-alt="High-end padel court with glass walls" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_pfFVwFdI01VgZ3TQAHkZaBSci0cxAum8FH7D_dbVQewXP5jgM-XKrbL0E5hjgVAA6L2w7S28O_U2mlSyBqzDntahwgFrlEypYW01ZJdwvrDD1sURqKghhuz_9xj31Cg_VXYBNJuI5idchyXI9WEJjjPL9ZzYL2ymnXsQQhrCaaY1KRnVTO3uwiC1FmQVDTJdL4infBQfHrkwo48tlwuzbA_FNMIqMkkLBqRQCtqeMw72FE00-kgOfsZ--hZJ9uW8LK0LReJjtew" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent"></div>
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full glass-card border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                <span className="material-symbols-outlined text-primary text-4xl" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
              </div>
            </div>
            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary/20 text-primary text-[10px] font-black uppercase tracking-widest rounded-full border border-primary/30 backdrop-blur-md">
                  Verified Review
                </span>
                <div className="flex gap-1 text-primary">
                  <span className="material-symbols-outlined text-xs" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-xs" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-xs" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-xs" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-xs" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
              </div>
              <h2 className="text-3xl headline-font font-bold mb-2 text-on-surface">"The lighting at night is insane. Best turf in the district."</h2>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-outline-variant p-0.5">
                  <img className="w-full h-full rounded-full object-cover" data-alt="headshot portrait of a confident young athlete smiling with soft studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOf9pt3qbx9t0ygiMR4jcoAkSMyFBCp1E_bxjbKD5mvSCc74rqvAjTrOXyE4kk0ppRAQKIztPvBNoW2mpN1965_rzjEPAqtBI5GVN6DtQErSoTlzYCjSvaxPHrs7K5qvCzCJZgMX_jcETpq6S3TLh-We1xtOkSP37re4MyktX1SwXLTVB_5-u3pm1gA1QT8MJA2w3cqNDCxLAoHRPwy92IneiX5kvmDm5ctpmPaQa7FJmEG7a5A3y6u5QNcxXCLI9JMxyqrpabYn0" alt="Player" />
                </div>
                <div>
                  <p className="text-sm font-bold headline-font tracking-tight text-on-surface">Marcus V. — Pro Striker</p>
                  <p className="text-[10px] text-on-surface-variant uppercase font-bold">Turf: Neo-Central Arena</p>
                </div>
              </div>
            </div>
          </div>
          {/* Secondary Review (Vertical) */}
          <div className="md:col-span-4 flex flex-col gap-6 cursor-pointer" onMouseEnter={handleHoverCycle}>
            <div className="flex-1 glass-card bg-surface-container-low/40 rounded-3xl p-6 ghost-border flex flex-col justify-between group transition-all duration-500 hover:border-primary/40 border border-outline-variant/10 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,255,148,0.1)]">
              <div key={`text-${hoverIndex}`} className="animate-[fade-in_0.3s_ease-out]">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl overflow-hidden ghost-border border border-outline-variant/20">
                    <img className="w-full h-full object-cover" data-alt="athlete" src={cyclicReviews[hoverIndex].avatar} alt="Athlete" />
                  </div>
                  <span className="material-symbols-outlined text-tertiary" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <div className="flex gap-0.5 text-tertiary mb-3">
                  <span className="material-symbols-outlined text-[10px]" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[10px]" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[10px]" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[10px]" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[10px]" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="text-sm italic text-on-surface-variant leading-relaxed font-body">
                  "{cyclicReviews[hoverIndex].text}"
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-outline-variant/10">
                <div key={`img-${hoverIndex}`} className="relative rounded-2xl overflow-hidden aspect-video ghost-border border border-outline-variant/20 animate-[fade-in_0.3s_ease-out]">
                  <img className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105" src={cyclicReviews[hoverIndex].image} alt="Gameplay" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-surface text-2xl group-hover:scale-125 transition-transform duration-500 shadow-xl">play_circle</span>
                  </div>
                </div>
                <p className="text-[10px] text-center mt-3 uppercase tracking-widest font-black text-on-surface-variant font-body group-hover:text-primary transition-colors">Watch Gameplay Clip</p>
              </div>
            </div>
          </div>
          {/* Grid Row 2 */}
          <div className="md:col-span-4 group relative rounded-3xl overflow-hidden aspect-square ghost-border bg-surface-container-high hover:translate-y-[-8px] transition-all duration-500 border border-outline-variant/20">
            <img className="w-full h-full object-cover opacity-40" data-alt="cinematic shot of a basketball player in mid-air performing a slam dunk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB53b1t0l3rTS6MsoBtKdVsu4lfpQ-nM60oEVzZPEbNChruC7TLFmpVXCpli4_eLdqH5XKWKv9w6G4XvEb9m1LgQ5WxnYEYT8npb5My3tXe1yhUur-8SQ5K3TLdzUCRCRX-Yy8gd5MSvIIPv5aYeo_7IEkhzRBuD5csncfZRbR0I6_UOLYMFuO1Ji21-qsBWqiA7otWuwo430z4uWVD0UwjTjQTZ9HVAV5Z8kmpJGsgkSw5MVx3WrdukyHoDj0hRFgV5ytDHx0Z8Do" alt="Review 1" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest to-transparent p-6 flex flex-col justify-end">
              <div className="flex gap-1 text-secondary mb-2">
                <span className="material-symbols-outlined text-xs" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-xs" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-xs" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-xs" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-xs" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <h4 className="font-bold headline-font text-lg mb-1 text-on-surface">Seamless Booking</h4>
              <p className="text-xs text-on-surface-variant font-body">Review by Sarah K.</p>
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full glass-card flex items-center justify-center bg-surface-container/50">
                <span className="material-symbols-outlined text-secondary" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 group relative rounded-3xl overflow-hidden aspect-square ghost-border bg-surface-container-high hover:translate-y-[-8px] transition-all duration-500 border border-outline-variant/20">
            <img className="w-full h-full object-cover opacity-40" data-alt="professional tennis player serving on a blue hard court with dramatic sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnO7Tz7jEDnZAXhsWp2i9ZRBExfs_bkhyBfNf8OOs1COt2YmIIKqqt4AuUArXCb2ive_0nq1CAarhSj3gQAAPwn_URo2yVTTJmfFUsSrBSAdX-yz5xPvVjEeGijRM8BiAsjW6LbxS03CoxWL9jMMZKISP9LiQNyYNhnskne-gZ0lTa9SjoMR-12L1LDPIa0GQPP0Bxh3oSm7lFu1F1Htqk-Npno3hAkBUK_f6MwNTYFhSgplpx5msSc8mDtrJ26w9MyKY6FTK98zY" alt="Review 2" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest to-transparent p-6 flex flex-col justify-end">
              <div className="flex gap-1 text-primary mb-2">
                <span className="material-symbols-outlined text-xs" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-xs" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-xs" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-xs" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-xs" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
              </div>
              <h4 className="font-bold headline-font text-lg mb-1 text-on-surface">League Standard</h4>
              <p className="text-xs text-on-surface-variant font-body">Review by David L.</p>
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full glass-card flex items-center justify-center bg-surface-container/50">
                <span className="material-symbols-outlined text-primary" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 bg-surface-container rounded-3xl p-8 ghost-border flex flex-col justify-center items-center text-center border border-outline-variant/10">
            <div className="w-16 h-16 rounded-full bg-surface-container-highest border border-outline-variant flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-surface-variant text-3xl">add_circle</span>
            </div>
            <h3 className="text-xl headline-font font-bold mb-3 uppercase tracking-tight text-on-surface">Your Voice Matters</h3>
            <p className="text-sm text-on-surface-variant mb-8 px-4 font-body">
              Join 500+ athletes who shared their experience this month.
            </p>
            <button className="kinetic-gradient text-on-primary px-8 py-3 rounded-full font-bold headline-font text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(162,255,191,0.4)] transition-all">
              Leave a Review
            </button>
          </div>
        </div>
      </main>
      {/* Footer Shell */}
      <footer className="w-full border-t border-outline-variant/10 bg-surface-container-lowest mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 max-w-[1440px] mx-auto">
          <div className="text-xl font-bold text-primary headline-font">TurfBooking Pro</div>
          <div className="flex gap-8">
            <a className="font-['Manrope'] text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="font-['Manrope'] text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="font-['Manrope'] text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">Partner with Us</a>
            <a className="font-['Manrope'] text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">Careers</a>
          </div>
          <div className="font-['Manrope'] text-xs text-on-surface-variant">
            © 2024 TurfBooking Pro. The Kinetic Void.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Reviews;
