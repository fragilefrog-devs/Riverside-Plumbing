import { motion } from 'motion/react';
import { ArrowUpRight, Wrench, Droplets, Flame, Search, CheckCircle2, ShieldAlert, Sparkles } from 'lucide-react';
import heaterImg from '../assets/images/service_tankless_heater_1792780862135.jpg';
import drainImg from '../assets/images/service_drain_cleaning_1792780863074.jpg';

interface ServicesBentoProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesBento({ onSelectService }: ServicesBentoProps) {
  return (
    <section id="capabilities" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with quiet editorial style */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            <span>Core Capabilities</span>
            <span aria-hidden="true">·</span>
            <span>Residential & Commercial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 text-balance">
            Engineered plumbing solutions built for durability.
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Every repair, repipe, and system installation adheres strictly to California Uniform Plumbing Code. 
            We dispatch fully-stocked mobile workshops equipped with advanced diagnostic cameras and specialized tooling.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Bento Card 1 (Large - Col Span 7): Water Heaters & Tankless Systems */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-colors shadow-sm"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-semibold text-slate-400">01. WATER HEATING SYSTEMS</span>
                <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Same-Day Install</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Tankless & High-Efficiency Water Heater Installation
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Continuous endless hot water with up to 40% energy savings. Factory-certified installations 
                for Navien, Rinnai, Rheem, and Bradford White, including gas manifold upgrades, expansion tanks, and code-compliant venting.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs text-slate-700 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Tankless conversion specialists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Annual descaling & flush service</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Gas & electric standard tanks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>6 to 12-year factory warranties</span>
                </div>
              </div>

              <button
                onClick={() => onSelectService('Water Heater Installation / Repair')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 group cursor-pointer"
              >
                <span>Request Water Heater Assessment</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            <div className="relative h-60 sm:h-72 w-full bg-slate-100 overflow-hidden border-t border-slate-100">
              <img
                src={heaterImg}
                alt="Neat tankless water heater installation with clean copper piping in modern home"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Bento Card 2 (Col Span 5): Drain Cleaning & Hydro-Jetting */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-colors shadow-sm"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-semibold text-slate-400">02. SEWER & DRAIN</span>
                <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded">4K Video Scope</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                Hydro-Jetting & Camera Sewer Line Diagnostics
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                4,000 PSI commercial hydro-jetting obliterates intrusive tree roots, heavy grease buildup, 
                and calcified scale without digging up your landscape or hardscape.
              </p>

              <div className="space-y-2 text-xs text-slate-700 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Real-time color camera recording provided</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Main sewer line clogs cleared same-day</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Trenchless sewer pipe restoration</span>
                </div>
              </div>

              <button
                onClick={() => onSelectService('Hydro-Jetting & Sewer Line Inspection')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 group cursor-pointer"
              >
                <span>Book Drain Scope</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            <div className="relative h-56 sm:h-64 w-full bg-slate-100 overflow-hidden border-t border-slate-100">
              <img
                src={drainImg}
                alt="Plumbing technician conducting live high-definition drain camera diagnosis"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Bento Card 3 (Col Span 4): Whole-Home Repiping & Slab Leaks */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-colors shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-semibold text-slate-400">03. REPIPING & LEAKS</span>
                <Droplets className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Slab Leak Detection & Whole-Home Repiping
              </h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Non-invasive acoustic and thermal imaging finds hidden pinhole leaks beneath concrete slabs. 
                Full Grade-A Uponor PEX-a or USA Type-L Copper repiping with zero-patch drywall repair guarantee.
              </p>
              <div className="text-xs font-mono text-slate-500 space-y-1 mb-6">
                <div>· Electronic acoustic leak tracing</div>
                <div>· 10-year transferable repiping warranty</div>
                <div>· Minimal drywall incisions</div>
              </div>
            </div>

            <button
              onClick={() => onSelectService('Slab Leak Detection / Repiping')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
            >
              <span>Schedule Slab Leak Check</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Bento Card 4 (Col Span 4): Emergency Fixtures & Pressure Regulators */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-colors shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-semibold text-slate-400">04. VALVES & PRESSURE</span>
                <Wrench className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Pressure Regulators & Smart Shut-Off Valves
              </h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Riverside municipal water pressure frequently exceeds 110 PSI, which blows out water heater tanks and toilet lines. 
                We install commercial Watts PRVs and Flo by Moen smart auto-shutoff valves.
              </p>
              <div className="text-xs font-mono text-slate-500 space-y-1 mb-6">
                <div>· Calibrated to 55-65 PSI safe range</div>
                <div>· Smartphone leak detection notifications</div>
                <div>· Main shutoff valve replacement</div>
              </div>
            </div>

            <button
              onClick={() => onSelectService('Pressure Regulator (PRV) Replacement')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
            >
              <span>Inspect Pressure Valve</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Bento Card 5 (Col Span 4): Commercial & Gas Line Plumbing */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-colors shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-semibold text-slate-400">05. GAS & COMMERCIAL</span>
                <Flame className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Gas Line Piping & Backflow Certification
              </h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Earthquake seismic shutoff valves, outdoor gas lines for BBQ islands and fire pits, 
                plus certified commercial annual backflow preventer testing and city compliance filings.
              </p>
              <div className="text-xs font-mono text-slate-500 space-y-1 mb-6">
                <div>· Certified California backflow tester</div>
                <div>· Gas leak pressure drop testing</div>
                <div>· Restaurant & retail tenant improvements</div>
              </div>
            </div>

            <button
              onClick={() => onSelectService('Gas Piping / Backflow Testing')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
            >
              <span>Commercial & Gas Service</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
