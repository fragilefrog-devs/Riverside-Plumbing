import { useState } from 'react';
import { Calculator, Check, Clock, ShieldCheck, ArrowRight, Phone, Send, CheckCircle2 } from 'lucide-react';

interface ServiceOption {
  id: string;
  name: string;
  baseMin: number;
  baseMax: number;
  timeEstimate: string;
  description: string;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  {
    id: 'drain',
    name: 'Drain Cleaning & Camera Scope',
    baseMin: 145,
    baseMax: 380,
    timeEstimate: '1 – 2 hours',
    description: 'Electric snake or high-pressure hydro-jetting with HD camera inspection.'
  },
  {
    id: 'water_heater_repair',
    name: 'Water Heater Diagnostic & Repair',
    baseMin: 180,
    baseMax: 420,
    timeEstimate: '1 – 3 hours',
    description: 'Thermocouple, gas control valve, heating element, or anode rod replacement.'
  },
  {
    id: 'water_heater_install',
    name: 'Tankless or Tank Replacement',
    baseMin: 1850,
    baseMax: 3600,
    timeEstimate: '4 – 6 hours',
    description: 'Turnkey installation with city permit, expansion tank, and code venting.'
  },
  {
    id: 'slab_leak',
    name: 'Slab Leak Detection & Spot Repair',
    baseMin: 550,
    baseMax: 1450,
    timeEstimate: '2 – 5 hours',
    description: 'Electronic acoustic leak locating and direct copper line bypass / spot repair.'
  },
  {
    id: 'repiping',
    name: 'Whole-Home PEX-A Repiping',
    baseMin: 4200,
    baseMax: 7800,
    timeEstimate: '1 – 2 days',
    description: 'Complete replacement of deteriorating galvanized/poly pipes with 10-year warranty.'
  },
  {
    id: 'prv_valves',
    name: 'Pressure Regulator (PRV) Replacement',
    baseMin: 320,
    baseMax: 580,
    timeEstimate: '1 – 2 hours',
    description: 'Calibrated Watts lead-free regulator installation with shut-off ball valve.'
  }
];

export default function EstimateCalculator() {
  const [selectedService, setSelectedService] = useState<string>('drain');
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial'>('residential');
  const [urgency, setUrgency] = useState<'standard' | 'sameday' | 'emergency'>('standard');

  // Lead capture state
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const activeService = SERVICE_OPTIONS.find((s) => s.id === selectedService) || SERVICE_OPTIONS[0];

  // Pricing multiplier calculation
  const propertyMultiplier = propertyType === 'commercial' ? 1.25 : 1.0;
  const urgencyMultiplier = urgency === 'emergency' ? 1.35 : urgency === 'sameday' ? 1.1 : 1.0;

  const minPrice = Math.round((activeService.baseMin * propertyMultiplier * urgencyMultiplier) / 5) * 5;
  const maxPrice = Math.round((activeService.baseMax * propertyMultiplier * urgencyMultiplier) / 5) * 5;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || !fullName) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="calculator" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            <span>Instant Cost Estimator</span>
            <span aria-hidden="true">·</span>
            <span>Upfront Flat-Rate Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 text-balance">
            Transparent pricing without surprise dispatch invoices.
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Select your plumbing issue below for a real-time Riverside County market estimate. 
            All final repair quotes are confirmed on-site in writing before any wrench turns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
              Step 1: Choose Service Requirement
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {SERVICE_OPTIONS.map((opt) => {
                const isSelected = opt.id === selectedService;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedService(opt.id)}
                    className={`p-3.5 text-left rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-semibold text-sm leading-snug">{opt.name}</div>
                    <div className={`text-xs mt-1 font-mono tabular-nums ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                      Est. ${opt.baseMin} – ${opt.baseMax}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Property Type Selection */}
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
              Step 2: Property Type
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-8">
              <button
                type="button"
                onClick={() => setPropertyType('residential')}
                className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                  propertyType === 'residential'
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                Residential Home / Condo
              </button>
              <button
                type="button"
                onClick={() => setPropertyType('commercial')}
                className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                  propertyType === 'commercial'
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                Commercial / Facility
              </button>
            </div>

            {/* Urgency Selection */}
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
              Step 3: Required Timeline
            </h3>
            <div className="grid grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setUrgency('standard')}
                className={`py-2.5 px-3 rounded-lg border text-xs sm:text-sm font-medium transition-all text-center cursor-pointer ${
                  urgency === 'standard'
                    ? 'bg-white text-blue-700 border-blue-600 ring-2 ring-blue-600/20 font-semibold'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                }`}
              >
                Standard (Next 2-3 Days)
              </button>
              <button
                type="button"
                onClick={() => setUrgency('sameday')}
                className={`py-2.5 px-3 rounded-lg border text-xs sm:text-sm font-medium transition-all text-center cursor-pointer ${
                  urgency === 'sameday'
                    ? 'bg-white text-blue-700 border-blue-600 ring-2 ring-blue-600/20 font-semibold'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                }`}
              >
                Same-Day Priority
              </button>
              <button
                type="button"
                onClick={() => setUrgency('emergency')}
                className={`py-2.5 px-3 rounded-lg border text-xs sm:text-sm font-medium transition-all text-center cursor-pointer ${
                  urgency === 'emergency'
                    ? 'bg-red-50 text-red-700 border-red-500 ring-2 ring-red-500/20 font-semibold'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                }`}
              >
                Immediate 24/7 Dispatch
              </button>
            </div>
          </div>

          {/* Result & Quick Booking Column */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between text-xs text-blue-400 font-semibold tracking-wider uppercase mb-3">
              <span>Estimated Price Bracket</span>
              <span className="text-slate-400 font-mono">Riverside, CA</span>
            </div>

            {/* Price Output with strict Tabular Numerals */}
            <div className="py-4 border-b border-slate-800">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono tabular-nums text-white">
                ${minPrice} – ${maxPrice}
              </div>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {activeService.description}
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-slate-300 mt-3 pt-3 border-t border-slate-800/60">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>Time: {activeService.timeEstimate}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Warranty Included</span>
                </div>
              </div>
            </div>

            {/* Booking / Lock-in Form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Lock in this estimate & request slot
                </p>

                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-800/90 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Phone Number (for technician ETA)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-800/90 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Service Address / ZIP Code (Riverside Area)"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-800/90 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <textarea
                    rows={2}
                    placeholder="Describe issue (e.g. water shutoff valve leak in garage, drain bubbling)..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-800/90 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/30 cursor-pointer active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Confirming Dispatch Slot...</span>
                  ) : (
                    <>
                      <span>Lock In Estimate & Request Dispatch</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  Zero obligation. An on-duty master plumber will call you within 15 minutes to confirm arrival window.
                </p>
              </form>
            ) : (
              <div className="mt-6 p-6 rounded-xl bg-slate-800 border border-emerald-500/30 text-center animate-in fade-in duration-300">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white mb-1">Dispatch Request Confirmed</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Thank you, <span className="font-semibold text-white">{fullName}</span>. We logged your request for{' '}
                  <span className="font-semibold text-blue-400">{activeService.name}</span> in our priority queue. 
                  A dispatch coordinator will contact you at <span className="font-semibold text-white">{phone}</span> immediately.
                </p>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href="tel:+13072430040"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white rounded-lg transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Directly: +1 (307) 243-0040</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                  >
                    Calculate Another
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
