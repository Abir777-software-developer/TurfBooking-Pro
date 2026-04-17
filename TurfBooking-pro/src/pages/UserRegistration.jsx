import React from 'react';
import { Link } from 'react-router-dom';

const UserRegistration = () => {
  return (
    <div className="bg-background text-on-background selection:bg-primary selection:text-on-primary min-h-screen overflow-x-hidden flex flex-col font-body">
      <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-surface to-transparent">
        <nav className="flex justify-between items-center px-8 py-4 max-w-[1440px] mx-auto">
          <Link to="/" className="text-2xl font-black text-primary tracking-tighter uppercase font-headline">
            TurfBooking Pro
          </Link>
          <div className="hidden md:flex items-center gap-8 font-headline tracking-tight text-sm uppercase font-bold">
            <Link className="text-on-surface hover:text-on-surface transition-all duration-300" to="/find-arena">Find Turf</Link>
            <Link className="text-on-surface hover:text-on-surface transition-all duration-300" to="/leagues">Leagues</Link>
            <Link className="text-on-surface hover:text-on-surface transition-all duration-300" to="/reviews">Reviews</Link>
            <a className="text-on-surface hover:text-on-surface transition-all duration-300" href="#">Support</a>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-full glass-panel ghost-border text-xs font-bold font-headline uppercase tracking-widest text-on-surface hover:bg-surface-variant transition-all">
              Sign In
            </button>
          </div>
        </nav>
      </header>

      <main className="flex-grow flex items-center justify-center relative px-6 py-24 overflow-hidden mt-10">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[160px]"></div>
          
          <div className="absolute top-[20%] left-[10%] rotate-12 opacity-40 md:opacity-100">
            <div className="w-32 h-32 relative antigravity-float">
              <img className="w-full h-full object-contain rounded-full shadow-2xl shadow-primary/20" data-alt="3D render of a futuristic glowing green football soccer ball floating in dark space with neon accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJPA7ZofLgwhgjmTmzMLGV3XOv7Zi2-0evuWAst7xrzCGA9QRrbGE7LXgRwYSZ6Rmszj_DYDq2DTaszE-YbxJqQdBTFZ19Dp7-pJgHSPbEMzGpfYUgvVlBc2ZX1MksihY67OVN6kVyYraCMlZw9-8WqA-xDRe9n1KRjvaIHtZVNxn43jxCXTFkwc0I0UqCJH-Cbh2W6-Wz85rX-wUD1hQoxYLBbiKvnzeFrJiO0x20A1EySmtDJJQWwaFVCBP6wYPrnT4tM7_Qxco" alt="Ball" />
            </div>
          </div>
          <div className="absolute bottom-[15%] right-[15%] -rotate-12 opacity-30 md:opacity-100">
            <div className="w-24 h-24 relative antigravity-float">
              <img className="w-full h-full object-cover rounded-full ghost-border" data-alt="close-up of stadium turf textures with subtle light reflecting off the synthetic grass in a dark atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7J2voiIOz3zxYB2cXXI7lQh1vxscsHVKnwF65yVuZ7L4ynORa-_rlvYLBvSEC5L06w6uGl9Xrgq_Gvegqkk7PjxGc_EWl_zeGuh31KKRRWHXq6TJH0lmu92p5jFrTkAYOspklA8EtXtEkVyEOrVq-JAq1wAf3n9NbLdrAk3r9xmwbbwc5TvMmpHOTpmDpUu6o3EoVVdLqWgikL2F1lml3mf33v5K-gj3AnlQ-7AAAzxcS18MvMtqHX__TN60j7hh7y1-RLETS8Cg" alt="Texture" />
            </div>
          </div>
        </div>

        <div className="z-10 w-full max-w-lg mt-10">
          <div className="glass-panel ghost-border rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-black/40 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 kinetic-gradient"></div>
            <div className="mb-10 text-center">
              <span className="text-tertiary font-bold text-[0.65rem] tracking-[0.3em] uppercase mb-4 block">Player Registration</span>
              <h1 className="text-4xl md:text-5xl font-black font-headline tracking-tighter text-on-surface leading-tight">
                ENTER THE <br/><span className="text-primary italic">KINETIC VOID.</span>
              </h1>
            </div>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="block text-[0.65rem] font-bold uppercase tracking-widest text-on-surface-variant px-1">Full Name</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/50 text-sm">person</span>
                  <input className="w-full pl-12 pr-4 py-4 bg-surface-container-lowest border-none rounded-xl text-on-surface placeholder:text-outline/40 recessed-input focus:ring-2 focus:ring-secondary/50 focus:bg-surface-container-low transition-all duration-300 outline-none" placeholder="Cristiano Ronaldo" type="text" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-[0.65rem] font-bold uppercase tracking-widest text-on-surface-variant px-1">E-Mail Address</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/50 text-sm">alternate_email</span>
                  <input className="w-full pl-12 pr-4 py-4 bg-surface-container-lowest border-none rounded-xl text-on-surface placeholder:text-outline/40 recessed-input focus:ring-2 focus:ring-secondary/50 focus:bg-surface-container-low transition-all duration-300 outline-none" placeholder="striker@pitch.pro" type="email" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[0.65rem] font-bold uppercase tracking-widest text-on-surface-variant px-1">Mobile Phone</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/50 text-sm">smartphone</span>
                    <input className="w-full pl-12 pr-4 py-4 bg-surface-container-lowest border-none rounded-xl text-on-surface placeholder:text-outline/40 recessed-input focus:ring-2 focus:ring-secondary/50 focus:bg-surface-container-low transition-all duration-300 outline-none" placeholder="+1 (555) 000-000" type="tel" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-[0.65rem] font-bold uppercase tracking-widest text-on-surface-variant px-1">Password</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/50 text-sm">lock</span>
                    <input className="w-full pl-12 pr-4 py-4 bg-surface-container-lowest border-none rounded-xl text-on-surface placeholder:text-outline/40 recessed-input focus:ring-2 focus:ring-secondary/50 focus:bg-surface-container-low transition-all duration-300 outline-none" placeholder="••••••••" type="password" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <input className="w-5 h-5 rounded-md bg-surface-container border-none text-primary focus:ring-primary/20 cursor-pointer" id="terms" type="checkbox" />
                <label className="text-xs text-on-surface-variant leading-snug cursor-pointer" htmlFor="terms">
                  I accept the <a className="text-secondary hover:underline" href="#">Player Terms</a> and the Kinetic Void <a className="text-secondary hover:underline" href="#">Privacy Code</a>.
                </label>
              </div>
              <button className="w-full kinetic-gradient py-5 rounded-full text-on-primary font-black font-headline text-sm uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group" type="button">
                Join as Player
                <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </form>
            <div className="mt-10 pt-8 border-t border-outline-variant/10 text-center">
              <p className="text-xs text-on-surface-variant">
                Already have an athlete profile? <a className="text-primary font-bold hover:underline" href="#">Log In Here</a>
              </p>
            </div>
          </div>
          <div className="mt-8 flex justify-between px-4 text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant opacity-50">
            <span>EST. 2024</span>
            <span>SECURE ENCRYPTED PORTAL</span>
          </div>
        </div>
      </main>

      <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/10 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 max-w-[1440px] mx-auto">
          <div className="text-xl font-bold text-primary font-headline uppercase">TurfBooking Pro</div>
          <div className="flex gap-8 text-xs text-on-surface-variant font-body uppercase tracking-wider">
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-primary transition-colors" href="#">Partner with Us</a>
            <a className="hover:text-primary transition-colors" href="#">Careers</a>
          </div>
          <div className="text-xs text-on-surface-variant font-body">
            © 2024 TurfBooking Pro. The Kinetic Void.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UserRegistration;
