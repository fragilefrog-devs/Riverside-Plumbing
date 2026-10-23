import { Star, ShieldCheck, MapPin, CheckCircle } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  service: string;
  date: string;
  text: string;
  metric: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'David & Sarah M.',
    location: 'Victoria Woods, Riverside',
    service: 'Slab Leak Tracing & PEX Bypass',
    date: 'Verified Customer · October 2026',
    text: 'We noticed a hot spot on our hallway hardwood floor and our water bill surged by $340 in one month. Marcus arrived in under an hour with acoustic sensors, located the copper pinhole under the master bath without tearing up the entire slab, and rerouted clean PEX through the ceiling. Outstanding professionalism.',
    metric: 'Saved ~$4,200 vs whole-slab jackhammer quote'
  },
  {
    name: 'Elena Rostova',
    location: 'Canyon Crest, Riverside',
    service: 'Navien Tankless Water Heater Install',
    date: 'Verified Customer · September 2026',
    text: 'Our 14-year-old 50-gallon tank gave out on a Sunday morning. Riverside Plumbing was the only crew that gave us a direct upfront flat quote over the phone without high-pressure sales games. The installation was immaculate with polished copper manifold joints and clean venting.',
    metric: 'Completed in 5.5 hours same day'
  },
  {
    name: 'Robert Chen',
    location: 'Woodcrest / Corona Border',
    service: 'Main Sewer Hydro-Jetting & Root Removal',
    date: 'Verified Customer · August 2026',
    text: 'Tree roots in our front yard clay pipe caused our main line to back up into the downstairs shower. The technician scoped it with a color camera monitor, showed me the blockage live, and hydro-jetted the pipe back to full 4-inch diameter. No repeat issues since.',
    metric: '100% Flow restored with video verification'
  }
];

export default function ReviewsAndProof() {
  return (
    <section id="reviews" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              <span>Customer Verification</span>
              <span aria-hidden="true">·</span>
              <span>Riverside Neighborhoods</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 text-balance">
              Proven results across 1,800+ Inland Empire residences.
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 p-3.5 rounded-xl shrink-0">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <div className="text-xs">
              <div className="font-bold text-slate-900 font-mono tabular-nums">4.9 / 5.0 Rating</div>
              <div className="text-slate-500">Google & Yelp Verified Reviews</div>
            </div>
          </div>
        </div>

        {/* 3 Detailed Testimonial Proof Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                {/* Clean unboxed metadata with typographic separators */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="font-medium text-slate-700">{item.location}</span>
                </div>

                <div className="flex text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1">
                  {item.service}
                </h3>

                <p className="text-xs text-slate-500 mb-4 font-mono">
                  {item.date}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">{item.name}</div>
                  <div className="text-[11px] text-emerald-700 font-medium flex items-center gap-1 mt-0.5">
                    <CheckCircle className="w-3 h-3" />
                    <span>{item.metric}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Areas Band */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Primary Service Coverage Area · Immediate Truck Dispatch
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-slate-700 font-medium">
            <span>Riverside (All ZIPs)</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Corona</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Moreno Valley</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Woodcrest</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Canyon Crest</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Jurupa Valley</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Norco</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Grand Terrace</span>
          </div>
        </div>
      </div>
    </section>
  );
}
