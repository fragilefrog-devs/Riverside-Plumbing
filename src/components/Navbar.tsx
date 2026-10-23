import { useState } from 'react';
import { Phone, Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (service?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly 3-Zone Top Bar Contract separated by gap-8 */}
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark (Single text element in display face, no subtitles or pills) */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-lg shadow-sm">
              R
            </span>
            <span>Riverside Plumbing</span>
          </a>

          {/* Zone 2: 4-5 Clean single-line text links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a
              href="#services"
              className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0"
            >
              Services
            </a>
            <a
              href="#calculator"
              className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0"
            >
              Price Estimator
            </a>
            <a
              href="#why-us"
              className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0"
            >
              Why Riverside
            </a>
            <a
              href="#reviews"
              className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action (Single-line control) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="tel:+13072430040"
              className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-sm hover:shadow whitespace-nowrap shrink-0 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>+1 (307) 243-0040</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:+13072430040"
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              aria-label="Call emergency hotline"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-100 flex flex-col gap-3 pb-6 animate-in fade-in duration-200">
            <div className="text-xs text-slate-500 font-medium px-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>CA License #982410 · 24/7 Emergency Dispatch</span>
            </div>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Services
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Price Estimator
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Why Riverside
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Reviews
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Contact
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Schedule Service Call
              </button>
              <a
                href="tel:+13072430040"
                className="w-full py-2.5 px-4 text-center text-sm font-semibold text-slate-900 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call +1 (307) 243-0040</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
