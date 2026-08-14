import React from 'react';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Bell, CheckCircle2 } from 'lucide-react';

export const NotificationsPage: React.FC = () => {
  return (
    <div className="p-8 space-y-8 max-w-4xl mx-auto animate-fadeIn">
      <div className="flex items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-[#151515] to-[#1C1C1C] border border-[#292929]">
        <div>
          <h1 className="text-2xl font-extrabold text-[#F5F5F5]">Notifications Center</h1>
          <p className="text-sm text-[#A3A3A3] mt-1">All platform alerts, deployments, and lead discovery updates.</p>
        </div>
      </div>

      <div className="space-y-3">
        {[
          { title: 'Website Deployed Successfully', desc: 'Aura Luxury Spa is now live at auraspa.branify.app', time: '10 mins ago' },
          { title: 'Lead Discovery Completed', desc: 'Discovered 42 high-opportunity dental leads in Austin, TX', time: '1 hour ago' },
          { title: 'VectorEngine AI Updated', desc: 'v4.2 models are now fully operational with enhanced speed', time: '3 hours ago' }
        ].map((notif, idx) => (
          <Card key={idx} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center text-[#10B981]">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#F5F5F5]">{notif.title}</h3>
                <p className="text-xs text-[#A3A3A3]">{notif.desc}</p>
              </div>
            </div>
            <span className="text-xs text-[#737373]">{notif.time}</span>
          </Card>
        ))}
      </div>
    </div>
  );
};
