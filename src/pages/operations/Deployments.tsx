import React from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Rocket, Globe, RotateCcw, ExternalLink } from 'lucide-react';
import { mockDeployments } from '../../services/vectorEngine';

export const Deployments: React.FC = () => {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto animate-fadeIn">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#151515] to-[#1C1C1C] border border-[#292929]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-semibold mb-3">
            <Rocket className="w-4 h-4" />
            <span>Global Edge Infrastructure</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#F5F5F5] tracking-tight">Deployments</h1>
          <p className="text-sm text-[#A3A3A3] mt-1">Manage production and preview deployments across global edge servers.</p>
        </div>
      </div>

      <div className="space-y-4">
        {mockDeployments.map((dep) => (
          <Card key={dep.id} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#080808] border border-[#292929] flex items-center justify-center text-[#10B981]">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-base font-bold text-[#F5F5F5]">{dep.projectName}</h3>
                  <Badge variant={dep.status === 'Live' ? 'emerald' : dep.status === 'Building' ? 'orange' : 'red'}>
                    {dep.status}
                  </Badge>
                  <Badge variant="gray">{dep.type}</Badge>
                </div>
                <p className="text-xs text-[#A3A3A3] font-mono">{dep.domain} • Version {dep.version} • Deployed {dep.deployedAt}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <Button variant="outline" size="sm" icon={<RotateCcw className="w-4 h-4" />}>
                Rollback
              </Button>
              <a href={`https://${dep.domain}`} target="_blank" rel="noreferrer">
                <Button variant="primary" size="sm" icon={<ExternalLink className="w-4 h-4" />}>
                  Visit URL
                </Button>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
