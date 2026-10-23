import { Mic, Sparkles, Volume2, ShieldCheck, CheckCircle } from 'lucide-react';

export default function VoiceAssistantBanner() {
  const triggerWidgetNotice = () => {
    // Attempt to interact with or highlight the DialDesk widget button in DOM
    const widgetEl = document.querySelector('iframe, [id*="dialdesk"], [class*="dialdesk"], button[aria-label*="voice"], button[aria-label*="assistant"]');
    if (widgetEl) {
      widgetEl.scrollIntoView({ behavior: 'smooth' });
      // If clickable
      if (widgetEl instanceof HTMLElement) {
        widgetEl.click();
      }
    } else {
      // Friendly toast or fallback indicator
      const notification = document.getElementById('voice-notice');
      if (notification) {
        notification.classList.remove('opacity-0');
        setTimeout(() => notification.classList.add('opacity-0'), 4000);
      }
    }
  };

  return (
    <section className="py-14 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Voice AI Enabled · 24/7 Hands-Free Service Dispatch</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Hands full of water or dealing with an urgent leak?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Riverside Plumbing features an integrated AI Voice Assistant powered by DialDesk. 
              Click the floating voice icon in the bottom right corner anytime to speak directly, describe your plumbing emergency, check dispatch times, or get instant assistance without typing.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Understands conversational plumbing questions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Zero wait times & instant dispatch alerts</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Always on 24/7/365</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
            <button
              type="button"
              onClick={triggerWidgetNotice}
              className="flex items-center gap-3 px-5 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-blue-900/50 cursor-pointer active:scale-95"
            >
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                <Mic className="w-4 h-4 text-white" />
              </div>
              <span>Open Voice Assistant (Bottom Right)</span>
            </button>
            <p id="voice-notice" className="text-xs text-blue-300 mt-2 opacity-0 transition-opacity duration-300">
              Tap the widget bubble at the lower-right corner of your screen!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
