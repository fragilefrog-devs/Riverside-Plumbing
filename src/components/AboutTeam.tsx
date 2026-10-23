import { motion } from 'motion/react';
import { ShieldCheck, Award, FileText, Check, Phone } from 'lucide-react';
import teamImg from '../assets/images/team_riverside_plumber_1792780862811.jpg';

interface AboutTeamProps {
  onOpenBooking: () => void;
}

export default function AboutTeam({ onOpenBooking }: AboutTeamProps) {
  return (
    <section id="why-us" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white">
              <img
                src={teamImg}
                alt="Master Plumber Marcus Vance of Riverside Plumbing holding professional pipe wrench"
                className="w-full h-[440px] sm:h-[500px] object-cover object-top"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 shadow-md">
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wide">California C-36 Master Plumbing License</p>
                <h4 className="text-base font-extrabold text-slate-900 mt-0.5">Marcus Vance · Founder & Lead Master Plumber</h4>
                <p className="text-xs text-slate-600 mt-1">22+ Years serving Riverside, Corona, and Inland Empire communities.</p>
              </div>
            </div>
          </motion.div>

          {/* Copy Column */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              <span>Why Riverside Plumbing</span>
              <span aria-hidden="true">·</span>
              <span>Our Workmanship Standard</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 text-balance mb-6">
              The honest, clean-boot plumbing company Inland Empire homeowners trust.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Too many homeowners experience plumbing dispatch calls that turn into high-pressure sales pitches 
              from commissioned technicians. At Riverside Plumbing, our team is composed of licensed journeymen 
              and master plumbers paid on craftsmanship—not on commission.
            </p>

            {/* 4 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Licensed & Bonded</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Full $2M commercial general liability coverage, worker's comp, and state bonded under CSLB #982410.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-1">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span>USA-Made Materials</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We install genuine Cerro copper, Uponor ProPEX, and Watts lead-free valves—never low-grade thin-wall imports.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-1">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span>Written Itemized Quotes</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clear breakdowns of parts, labor, permits, and inspection fees before work begins. No hidden line items.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-1">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Clean Jobsite Guarantee</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Shoe covers inside homes, heavy-duty floor drop cloths, and full cleanup after every job.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg transition-colors cursor-pointer"
              >
                Schedule an On-Site Consultation
              </button>
              <a
                href="tel:+13072430040"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-semibold text-sm rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Speak to Master Plumber: +1 (307) 243-0040</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
