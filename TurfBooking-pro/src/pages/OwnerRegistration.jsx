import React from 'react';
import { Link } from 'react-router-dom';

const OwnerRegistration = () => {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl no-border bg-gradient-to-b from-surface to-transparent shadow-2xl shadow-on-background/10">
        <div className="flex justify-between items-center px-8 py-4 max-w-[1440px] mx-auto">
          <Link to="/" className="text-2xl font-black text-primary tracking-tighter font-headline">TurfBooking Pro</Link>
          <div className="hidden md:flex items-center gap-8">
            <Link className="font-['Space_Grotesk'] tracking-tight text-sm uppercase font-bold text-on-surface hover:text-on-surface transition-all" to="/find-arena">Find Turf</Link>
            <Link className="font-['Space_Grotesk'] tracking-tight text-sm uppercase font-bold text-on-surface hover:text-on-surface transition-all" to="/leagues">Leagues</Link>
            <Link className="font-['Space_Grotesk'] tracking-tight text-sm uppercase font-bold text-on-surface hover:text-on-surface transition-all" to="/reviews">Reviews</Link>
            <a className="font-['Space_Grotesk'] tracking-tight text-sm uppercase font-bold text-on-surface hover:text-on-surface transition-all" href="#">Support</a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/register-user" className="px-6 py-2 rounded-full font-headline text-sm font-bold transition-all scale-95 active:scale-90 text-on-surface-variant hover:text-on-surface">Sign In</Link>
            <button className="px-6 py-2 rounded-full kinetic-gradient text-on-primary font-headline text-sm font-bold transition-all scale-95 active:scale-90 shadow-[0_0_15px_rgba(162,255,191,0.3)]">Book Now</button>
          </div>
        </div>
      </nav>

      <main className="flex-1 pt-32 pb-20 px-6 relative overflow-hidden flex flex-col items-center">
        {/* Ambient Background Textures */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] -z-10"></div>
        
        <div className="max-w-4xl w-full mx-auto z-10">
          <div className="mb-12 text-center md:text-left">
            <h1 className="font-headline text-5xl md:text-6xl font-black tracking-tighter mb-4 leading-tight">
              Partner with the <br/><span className="text-primary italic">Kinetic Void</span>
            </h1>
            <p className="text-on-surface-variant text-lg max-w-xl">Join the elite network of professional turf owners. Fast-track your registration in three seamless steps.</p>
          </div>

          <div className="glass-card rounded-[2rem] p-8 md:p-12 shadow-2xl relative">
            <div className="flex items-center gap-4 mb-12">
              <div className="flex flex-col gap-2 flex-1">
                <div className="h-1 bg-primary rounded-full"></div>
                <span className="text-[10px] font-headline font-bold text-primary uppercase tracking-widest">Personal Details</span>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <div className="h-1 bg-surface-container-highest rounded-full"></div>
                <span className="text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-widest">Turf Info</span>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <div className="h-1 bg-surface-container-highest rounded-full"></div>
                <span className="text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-widest">Verification</span>
              </div>
            </div>

            <form className="space-y-12">
              <section>
                <h2 className="font-headline text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="text-tertiary">01</span> Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold font-headline uppercase tracking-widest text-on-surface-variant ml-1">Full Name</label>
                    <div className="bg-surface-container-lowest p-1 rounded-xl focus-within:ring-1 ring-secondary/50 transition-all">
                      <input className="w-full bg-transparent border-none focus:ring-0 text-on-surface px-4 py-3 placeholder:text-outline-variant font-medium outline-none" placeholder="John Doe" type="text" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold font-headline uppercase tracking-widest text-on-surface-variant ml-1">Email Address</label>
                    <div className="bg-surface-container-lowest p-1 rounded-xl focus-within:ring-1 ring-secondary/50 transition-all">
                      <input className="w-full bg-transparent border-none focus:ring-0 text-on-surface px-4 py-3 placeholder:text-outline-variant font-medium outline-none" placeholder="john@kineticvoid.com" type="email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold font-headline uppercase tracking-widest text-on-surface-variant ml-1">Phone Number</label>
                    <div className="bg-surface-container-lowest p-1 rounded-xl focus-within:ring-1 ring-secondary/50 transition-all">
                      <input className="w-full bg-transparent border-none focus:ring-0 text-on-surface px-4 py-3 placeholder:text-outline-variant font-medium outline-none" placeholder="+1 (555) 000-0000" type="tel" />
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-headline text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="text-tertiary">02</span> Turf Identity
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-3 space-y-2">
                    <label className="text-xs font-bold font-headline uppercase tracking-widest text-on-surface-variant ml-1">Turf Name</label>
                    <div className="bg-surface-container-lowest p-1 rounded-xl focus-within:ring-1 ring-secondary/50 transition-all">
                      <input className="w-full bg-transparent border-none focus:ring-0 text-on-surface px-4 py-3 placeholder:text-outline-variant font-medium outline-none" placeholder="The Kinetic Arena" type="text" />
                    </div>
                  </div>
                  <div className="md:col-span-3 space-y-2">
                    <label className="text-xs font-bold font-headline uppercase tracking-widest text-on-surface-variant ml-1">Road / Street</label>
                    <div className="bg-surface-container-lowest p-1 rounded-xl focus-within:ring-1 ring-secondary/50 transition-all">
                      <input className="w-full bg-transparent border-none focus:ring-0 text-on-surface px-4 py-3 placeholder:text-outline-variant font-medium outline-none" placeholder="123 Performance Way" type="text" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold font-headline uppercase tracking-widest text-on-surface-variant ml-1">City</label>
                    <div className="bg-surface-container-lowest p-1 rounded-xl focus-within:ring-1 ring-secondary/50 transition-all">
                      <input className="w-full bg-transparent border-none focus:ring-0 text-on-surface px-4 py-3 placeholder:text-outline-variant font-medium outline-none" placeholder="Neo City" type="text" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold font-headline uppercase tracking-widest text-on-surface-variant ml-1">Pincode</label>
                    <div className="bg-surface-container-lowest p-1 rounded-xl focus-within:ring-1 ring-secondary/50 transition-all">
                      <input className="w-full bg-transparent border-none focus:ring-0 text-on-surface px-4 py-3 placeholder:text-outline-variant font-medium outline-none" placeholder="90210" type="text" />
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-headline text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="text-tertiary">03</span> KYC Verification
                </h2>
                <div className="border-2 border-dashed border-outline-variant rounded-2xl p-12 text-center bg-surface-container-lowest/30 hover:bg-surface-container-lowest/50 transition-colors group cursor-pointer">
                  <div className="w-16 h-16 bg-surface-container-highest rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary text-3xl">cloud_upload</span>
                  </div>
                  <h3 className="font-headline text-lg font-bold mb-2">Upload Legal Documentation</h3>
                  <p className="text-on-surface-variant text-sm mb-6">Drag and drop your business license or ownership deeds (PDF, JPG up to 10MB)</p>
                  <button className="text-sm font-bold font-headline py-3 px-8 rounded-full border border-outline-variant hover:border-primary transition-colors" type="button">Select Files</button>
                </div>
              </section>

              <div className="pt-8 border-t border-outline-variant/10">
                <button className="w-full py-6 rounded-full kinetic-gradient text-on-primary font-headline text-xl font-black tracking-tight transition-all scale-[0.98] hover:scale-100 active:scale-95 shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex items-center justify-center gap-4" type="button">
                  Register Your Turf
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <p className="text-center text-[10px] text-on-surface-variant mt-6 uppercase tracking-widest">By registering, you agree to our <a className="text-primary hover:underline" href="#">Terms of Service</a></p>
              </div>
            </form>
          </div>
        </div>
      </main>

      <footer className="bg-surface w-full border-t border-outline-variant/10 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-xl font-bold text-primary font-headline">TurfBooking Pro</div>
            <p className="font-['Manrope'] text-xs text-on-surface-variant max-w-[200px] text-center md:text-left">Elevate your venue management with the orbital power of Kinetic Void.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="font-['Manrope'] text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="font-['Manrope'] text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="font-['Manrope'] text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">Partner with Us</a>
            <a className="font-['Manrope'] text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">Careers</a>
          </div>
          <div className="font-['Manrope'] text-xs text-on-surface-variant">© 2024 TurfBooking Pro. The Kinetic Void.</div>
        </div>
      </footer>
    </div>
  );
};

export default OwnerRegistration;
