import { useState, useEffect } from 'react';
import { X, Calendar, Clock, Phone, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function BookingModal({ isOpen, onClose, initialService }: BookingModalProps) {
  const [service, setService] = useState(initialService || 'Water Heater Repair / Replacement');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [urgency, setUrgency] = useState('Standard');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Priority Dispatch Booking</span>
            </div>
            <h3 id="booking-modal-title" className="text-xl font-bold text-slate-900 mt-1">
              Schedule Riverside Master Plumber
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/50 transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                Service Required
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
              >
                <option value="Water Heater Installation / Repair">Water Heater Installation / Repair</option>
                <option value="Hydro-Jetting & Sewer Line Inspection">Hydro-Jetting & Sewer Line Inspection</option>
                <option value="Slab Leak Detection / Repiping">Slab Leak Detection / Repiping</option>
                <option value="Pressure Regulator (PRV) Replacement">Pressure Regulator (PRV) Replacement</option>
                <option value="Emergency Water Leak / Pipe Burst">Emergency Water Leak / Pipe Burst</option>
                <option value="Faucet, Toilet or Valve Replacement">Faucet, Toilet or Valve Replacement</option>
                <option value="Gas Piping / Backflow Testing">Gas Piping / Backflow Testing</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                  Mobile Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(951) 555-0192"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                  Address / City *
                </label>
                <input
                  type="text"
                  required
                  placeholder="123 Magnolia Ave, Riverside"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                  Urgency Window
                </label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
                >
                  <option value="Urgent 24/7 (Within 60 Mins)">Urgent 24/7 (Within 60 Mins)</option>
                  <option value="Today (Morning / Afternoon)">Today (Morning / Afternoon)</option>
                  <option value="Tomorrow">Tomorrow</option>
                  <option value="Flexible this week">Flexible this week</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                Issue Details (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Give us any details on signs of leakage, water heater age, or affected fixtures..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg transition-colors shadow-md disabled:opacity-50 cursor-pointer"
              >
                {loading ? 'Submitting Request...' : 'Confirm Appointment Request'}
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
              <span>Or call for immediate live dispatch:</span>
              <a href="tel:+13072430040" className="text-blue-600 font-bold hover:underline">
                +1 (307) 243-0040
              </a>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
            <h4 className="text-xl font-bold text-slate-900 mb-2">Request Received!</h4>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Thank you, <span className="font-semibold text-slate-900">{name}</span>. We dispatched a priority alert 
              to our Riverside on-call plumbing lead. We will call you at <span className="font-semibold text-slate-900">{phone}</span> to 
              confirm your exact ETA.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-slate-900 text-white font-medium text-sm rounded-lg hover:bg-slate-800 transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
