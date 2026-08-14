import React from 'react';
import { Users, Shield, DollarSign, Package, MapPin, HeartHandshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Experienced Barbers',
      description: 'Handpicked master barbers skilled in classic cuts, modern skin fades, razor shaves, and beard sculpting.',
    },
    {
      icon: Shield,
      title: 'Hygiene First',
      description: 'Single-use blades, hospital-grade UV sterilizers, sanitized cape laundries, and pristine barber chairs.',
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'Clear starting prices with zero hidden service charges. Honest advice tailored to your budget.',
    },
    {
      icon: Package,
      title: 'Quality Grooming Products',
      description: 'Premium imported pomades, organic beard oils, scalp tonics, and dermatologically tested facials.',
    },
    {
      icon: MapPin,
      title: 'Convenient Dubai Location',
      description: 'Central branches with ample parking, easy highway access, and close to major metro routes.',
    },
    {
      icon: HeartHandshake,
      title: 'International-Friendly Service',
      description: 'Multilingual staff welcoming residents, expats, tourists, and workers from all backgrounds.',
    },
  ];

  return (
    <section className="py-20 bg-stone-950 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase mb-2 block">
            Dubai Salon Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-stone-100">
            Why Men Choose Our Salon
          </h2>
          <p className="mt-2 text-stone-300 text-sm sm:text-base">
            Built on trust, hygiene, craftsmanship, and a warm welcome for every client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-stone-900/60 p-6 rounded-2xl border border-stone-800/80 hover:border-amber-500/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:bg-amber-500/20 transition-all">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-stone-100 text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
