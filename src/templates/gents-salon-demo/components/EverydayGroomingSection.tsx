import React from 'react';
import { Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { TemplateConfig, ServiceItem, NavigationPage } from '../types';
import { useSalon } from '../context/SalonContext';

interface EverydayGroomingSectionProps {
  config: TemplateConfig;
  onNavigate: (page: NavigationPage) => void;
  onOpenBooking: (serviceId?: string) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const EverydayGroomingSection: React.FC<EverydayGroomingSectionProps> = ({
  config,
  onNavigate,
  onOpenBooking,
  onSelectService
}) => {
  const { services } = useSalon();
  const everydayServices = services
    .filter((s) => s.tier === 'essential' && s.isActive !== false)
    .slice(0, 4);

  return (
    <section className="py-16 bg-stone-900/80 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Everyday Value Grooming</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-stone-100">
              Fresh Look. Fair Price.
            </h2>
            <p className="mt-1 text-sm text-stone-300">
              Professional grooming for your everyday routine. Fast, clean, and reliable cuts for every hardworking man in Dubai.
            </p>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="text-zinc-400 hover:text-zinc-300 text-sm font-semibold flex items-center gap-1.5 shrink-0 hover:underline"
          >
            <span>View All Everyday Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Everyday Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {everydayServices.map((service) => (
            <div
              key={service.id}
              className="bg-stone-950 rounded-2xl border border-stone-800 p-5 flex flex-col justify-between hover:border-zinc-500/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold text-stone-400 bg-stone-900 px-2.5 py-1 rounded-md border border-stone-800">
                    ⏱ {service.duration}
                  </span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                    From {config.currency} {service.startingPrice}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-stone-100 text-base group-hover:text-zinc-400 transition-colors mb-2">
                  {service.name}
                </h3>

                <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-900 flex items-center gap-2">
                <button
                  onClick={() => onSelectService(service)}
                  className="flex-1 bg-stone-900 hover:bg-stone-800 text-stone-200 text-xs py-2 rounded-lg border border-stone-800 font-medium transition-colors"
                >
                  Details
                </button>
                <button
                  onClick={() => onOpenBooking(service.id)}
                  className="bg-zinc-500 hover:bg-zinc-400 text-stone-950 text-xs py-2 px-3 rounded-lg font-bold flex items-center gap-1 transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
