import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Shield, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
              <span>Direct Contact</span>
              <span aria-hidden="true">·</span>
              <span>Fast Dispatch Hub</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6">
              Get in touch with Riverside's trusted plumbing crew.
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              Whether you need to replace an aging water heater, schedule an exploratory sewer line camera inspection, 
              or require urgent late-night burst pipe shutoff, our master technicians are ready to roll.
            </p>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Emergency & General Dispatch</p>
                  <a href="tel:+13072430040" className="text-lg font-bold text-white hover:text-blue-400 transition-colors">
                    +1 (307) 243-0040
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Live operator answered 24/7/365</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Dispatch Operations Hub</p>
                  <p className="text-sm font-semibold text-white">3487 Central Ave, Riverside, CA 92506</p>
                  <p className="text-xs text-slate-400 mt-0.5">Stationed trucks throughout Riverside & Corona</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Operating Hours</p>
                  <p className="text-sm font-semibold text-white">Standard Service: Mon – Sat 7:00 AM – 7:00 PM</p>
                  <p className="text-xs text-emerald-400 font-medium mt-0.5">Emergency Dispatch: 24 Hours / 7 Days</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Contractor License & Insurance</p>
                  <p className="text-sm font-semibold text-white">California C-36 Lic #982410</p>
                  <p className="text-xs text-slate-400 mt-0.5">CSLB Verified · $2,000,000 Commercial Liability</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7 bg-slate-800/80 p-6 sm:p-8 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-2">Send an Inquiry or Non-Emergency Request</h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill out this quick form and our office coordinator will get back to you within 30 minutes during business hours.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 uppercase tracking-wide mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 uppercase tracking-wide mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(951) 555-0123"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 uppercase tracking-wide mb-1">
                    How Can We Help?
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your plumbing questions or requested appointment dates..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            ) : (
              <div className="p-8 text-center bg-slate-900/60 rounded-xl border border-emerald-500/40">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
                <h4 className="text-lg font-bold text-white mb-1">Message Received</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto mb-4">
                  Thank you, {name}. Our customer care representative will call you back at {phone} shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-blue-400 hover:text-blue-300 underline"
                >
                  Send another inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
