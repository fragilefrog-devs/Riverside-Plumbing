import { motion } from 'motion/react';
import { 
  Zap, 
  Droplets, 
  Flame, 
  Search, 
  Layers, 
  Wrench, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';

interface OurServicesProps {
  onSelectService: (serviceName: string) => void;
}

interface ServiceCardItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  features: string[];
  highlight?: boolean;
}

const CORE_SERVICES: ServiceCardItem[] = [
  {
    id: 'emergency',
    title: 'Emergency Repairs',
    description: 'Rapid 24/7 on-call dispatch for burst pipes, sudden water line ruptures, failing main valves, and overflowing fixtures to halt water damage immediately.',
    icon: Zap,
    tag: '24/7 Rapid Response',
    features: ['Under 60-min priority dispatch', 'Immediate shutoff & water mitigation', 'All pipe materials serviced'],
    highlight: true,
  },
  {
    id: 'drain',
    title: 'Drain Cleaning',
    description: 'High-velocity hydro-jetting and motorized snaking that obliterates stubborn kitchen grease, tree root intrusion, and chronic sewer line clogs.',
    icon: Droplets,
    tag: 'Video Scope Included',
    features: ['High-pressure 4,000 PSI jetting', 'Real-time color camera inspection', 'Complete line descaling'],
  },
  {
    id: 'water_heater',
    title: 'Water Heater Installation',
    description: 'Expert replacement and repair for both high-efficiency tankless units and standard gas or electric tank water heaters with full permit compliance.',
    icon: Flame,
    tag: 'Same-Day Replacement',
    features: ['Navien & Rheem certified', 'Continuous endless hot water', 'Up to 40% energy efficiency gain'],
  },
  {
    id: 'slab_leak',
    title: 'Slab Leak Detection',
    description: 'Non-invasive acoustic sensors and thermal imaging to pinpoint hidden pressurized water leaks beneath concrete slabs without destructive guesswork.',
    icon: Search,
    tag: 'Non-Destructive Tracing',
    features: ['Electronic acoustic detection', 'Direct bypass & reroute options', 'Protects foundation integrity'],
  },
  {
    id: 'repipe',
    title: 'Whole-Home Repiping',
    description: 'Replace aging galvanized, rusted, or leaking polybutylene pipes with long-lasting American-made copper or Grade-A Uponor PEX-a piping systems.',
    icon: Layers,
    tag: '10-Year Warranty',
    features: ['Zero-patch drywall guarantee', 'Full home water pressure restoration', 'Clean drinking water assurance'],
  },
  {
    id: 'fixtures',
    title: 'Fixture & Valve Services',
    description: 'Precision installation of pressure reducing valves (PRVs), earthquake shutoffs, smart automated leak sensors, garbage disposals, and master bath fixtures.',
    icon: Wrench,
    tag: 'Code Compliance',
    features: ['Calibrated PRV regulation', 'Smart Flo by Moen auto-shutoff', 'Heavy-duty brass ball valves'],
  },
];

export default function OurServices({ onSelectService }: OurServicesProps) {
  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            <span>Our Services</span>
            <span aria-hidden="true">·</span>
            <span>Licensed Master Plumbers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 text-balance">
            Comprehensive plumbing solutions for every home and facility.
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            From urgent 24/7 leak suppression to complete whole-structure system upgrades, 
            our certified technicians deliver transparent pricing, guaranteed workmanship, and zero dispatch surprises.
          </p>
        </div>

        {/* Card-Based Layout Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_SERVICES.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 border ${
                  service.highlight
                    ? 'bg-gradient-to-b from-blue-50/60 to-white border-blue-200 shadow-sm hover:shadow-md hover:border-blue-300'
                    : 'bg-white border-slate-200 shadow-xs hover:shadow-md hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Card Header: Icon & Subdued Metadata */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        service.highlight
                          ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                          : 'bg-blue-50 text-blue-600 border border-blue-100'
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="text-xs font-medium text-slate-500 font-mono">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Button */}
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className={`w-full py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] ${
                    service.highlight
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                      : 'bg-slate-50 text-slate-800 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 hover:border-blue-200'
                  }`}
                >
                  <span>Request {service.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust Adjacency Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0" />
            <p className="text-sm text-slate-700">
              <strong className="font-semibold text-slate-900">Need a custom installation or commercial quote?</strong> Our licensed master plumbers provide on-site evaluations with guaranteed upfront flat rates.
            </p>
          </div>
          <a
            href="tel:+13072430040"
            className="px-5 py-2.5 bg-slate-900 text-white hover:bg-slate-800 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Call +1 (307) 243-0040
          </a>
        </div>
      </div>
    </section>
  );
}
