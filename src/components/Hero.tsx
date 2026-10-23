import { motion } from 'motion/react';
import { Phone, Calendar, Shield, Clock, Award, Star, Mic, ArrowRight } from 'lucide-react';
import heroImg from '../assets/images/hero_riverside_plumbing_1792780862018.jpg';

interface HeroProps {
  onOpenBooking: (service?: string) => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle background ambient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.25),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value proposition and CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Clean unboxed metadata (NO static pills) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-blue-400 mb-4">
              <span>Licensed & Insured Master Plumbers</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Riverside County</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-400">CA Lic #982410</span>
            </div>

            {/* Headline with balanced wrap */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-[1.12] mb-6">
              Master Plumbing for Homes & Commercial Facilities.
            </h1>

            {/* Concrete Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              From high-efficiency tankless water heater installations and slab leak detection to 
              24/7 urgent burst pipe repairs and camera-guided drain clearing. Upfront flat-rate pricing, 
              zero dispatch fees on approved repairs, and guaranteed workmanship.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="tel:+13072430040"
                className="flex items-center gap-3 px-6 py-3.5 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/40 active:scale-[0.98] whitespace-nowrap"
              >
                <Phone className="w-5 h-5 text-blue-200" />
                <span>Call +1 (307) 243-0040</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-100 bg-slate-800/90 border border-slate-700 rounded-lg hover:bg-slate-700/80 transition-all active:scale-[0.98] whitespace-nowrap"
              >
                <Calendar className="w-5 h-5 text-blue-400" />
                <span>Schedule an Estimate</span>
              </button>
            </div>

            {/* DialDesk Voice Assistant Helper Note */}
            <div className="p-3.5 rounded-lg bg-blue-950/60 border border-blue-800/60 flex items-start sm:items-center gap-3 max-w-xl text-xs sm:text-sm text-slate-300">
              <div className="w-8 h-8 rounded-full bg-blue-600/30 border border-blue-500/40 flex items-center justify-center shrink-0 text-blue-300">
                <Mic className="w-4 h-4 text-blue-300" />
              </div>
              <div className="leading-snug">
                <span className="font-semibold text-white">24/7 Voice Assistant Active: </span>
                Click the microphone icon in the bottom right corner anytime to speak hands-free with our automated dispatch assistant.
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Impact Visual Carrier */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-800">
              <img
                src={heroImg}
                alt="Riverside Master Plumber inspecting high-precision water pressure valves and copper manifold"
                className="w-full h-[380px] sm:h-[460px] object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              
              {/* Bottom Card Annotation */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold text-blue-400 tracking-wide">ON-CALL RAPID RESPONSE</p>
                    <p className="text-sm font-bold text-white mt-0.5">Average Arrival Time: Under 45 Mins</p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400 font-mono text-xs font-bold tabular-nums bg-slate-800 px-2.5 py-1.5 rounded border border-slate-700">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>4.9 / 5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column KPI / Trust Strip below the Hero Split */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 pt-10 border-t border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-blue-900/40 border border-blue-700/50 flex items-center justify-center shrink-0 text-blue-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">24 / 7 / 365</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">Emergency Dispatch Fleet</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-blue-900/40 border border-blue-700/50 flex items-center justify-center shrink-0 text-blue-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">10-Year</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">Repiping & Line Warranty</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-blue-900/40 border border-blue-700/50 flex items-center justify-center shrink-0 text-blue-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">100% Upfront</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">Flat-Rate Honest Pricing</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-blue-900/40 border border-blue-700/50 flex items-center justify-center shrink-0 text-blue-400">
              <Star className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">520+ Reviews</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">5-Star Verified Local Clients</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
