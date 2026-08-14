import React from 'react';
import { Card } from '../../components/common/Card';
import { StatCard } from '../../components/common/StatCard';
import { Activity, Users, Building2, Globe, Code2, Rocket, TrendingUp } from 'lucide-react';

export const Analytics: React.FC = () => {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto animate-fadeIn">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#151515] to-[#1C1C1C] border border-[#292929]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-semibold mb-3">
            <Activity className="w-4 h-4" />
            <span>Platform Intelligence</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#F5F5F5] tracking-tight">Analytics & Growth</h1>
          <p className="text-sm text-[#A3A3A3] mt-1">Comprehensive performance metrics for leads, websites, and deployments.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Leads Discovered" value="4,820" change="+32.4%" trend="up" icon={<Users className="w-5 h-5 text-[#10B981]" />} />
        <StatCard title="Businesses Analyzed" value="1,248" change="+18.2%" trend="up" icon={<Building2 className="w-5 h-5 text-[#10B981]" />} />
        <StatCard title="Websites Generated" value="342" change="+24.5%" trend="up" icon={<Globe className="w-5 h-5 text-[#10B981]" />} />
        <StatCard title="Active Deployments" value="412" change="+12.8%" trend="up" icon={<Rocket className="w-5 h-5 text-[#10B981]" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="space-y-4">
          <h3 className="text-base font-bold text-[#F5F5F5]">Conversion Funnel Performance</h3>
          <div className="space-y-3">
            {[
              { label: 'Leads Scanned', count: '4,820', rate: '100%' },
              { label: 'Website Audit Qualified', count: '3,140', rate: '65%' },
              { label: 'AI Proposals Generated', count: '1,890', rate: '39%' },
              { label: 'Websites / Apps Deployed', count: '431', rate: '9.2%' }
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#080808] border border-[#292929] flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#F5F5F5]">{item.label}</p>
                  <p className="text-lg font-bold text-[#10B981]">{item.count}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-[#A3A3A3] bg-[#151515] px-2.5 py-1 rounded-lg border border-[#292929]">
                    {item.rate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="space-y-4">
          <h3 className="text-base font-bold text-[#F5F5F5]">AI Token & Credit Consumption</h3>
          <div className="p-6 rounded-xl bg-[#080808] border border-[#292929] space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-[#A3A3A3]">Monthly Allocation</span>
              <span className="text-[#F5F5F5] font-bold">84,500 / 100,000 Tokens</span>
            </div>
            <div className="w-full h-3 rounded-full bg-[#151515] overflow-hidden">
              <div className="w-[84.5%] h-full bg-[#10B981] rounded-full" />
            </div>
            <p className="text-xs text-[#737373]">VectorEngine v4.2 Pro consumes approximately 1,200 tokens per full-stack website generation.</p>
          </div>
        </Card>
      </div>
    </div>
  );
};
