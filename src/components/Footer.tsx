import { ShieldCheck, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          {/* Brand Col */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-white font-extrabold text-lg mb-3">
              <span className="w-7 h-7 rounded bg-blue-600 flex items-center justify-center text-white text-sm font-black">
                R
              </span>
              <span>Riverside Plumbing</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              Licensed master plumbing contractors providing 24/7 emergency leak repair, hydro-jetting, water heaters, and repiping in Riverside, California.
            </p>
            <p className="text-slate-400 font-mono text-[11px]">
              CSLB License #982410 (C-36 Master Plumbing)
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white font-bold text-xs uppercase tracking-wider mb-3">Services</p>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white transition-colors">Tankless Water Heaters</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Hydro-Jetting & Sewer Scope</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Slab Leak Electronic Detection</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Whole-Home Copper & PEX Repipe</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Pressure Regulators (PRV)</a></li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <p className="text-white font-bold text-xs uppercase tracking-wider mb-3">Service Areas</p>
            <ul className="space-y-2">
              <li>Riverside & Victoria Woods</li>
              <li>Canyon Crest & Woodcrest</li>
              <li>Corona & Norco</li>
              <li>Moreno Valley & Jurupa Valley</li>
              <li>Grand Terrace & Highgrove</li>
            </ul>
          </div>

          {/* Contact Dispatch */}
          <div>
            <p className="text-white font-bold text-xs uppercase tracking-wider mb-3">Direct Dispatch</p>
            <a href="tel:+13072430040" className="text-white font-bold text-sm mb-1 hover:text-blue-400 block transition-colors">+1 (307) 243-0040</a>
            <p className="text-slate-400 mb-3">dispatch@riversideplumbingpro.com</p>
            <p className="text-slate-400 leading-relaxed">
              3487 Central Ave, Riverside, CA 92506<br />
              Open 24 Hours / 7 Days for Emergencies
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Riverside Plumbing. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-300 cursor-pointer">California Contractor Verification</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
