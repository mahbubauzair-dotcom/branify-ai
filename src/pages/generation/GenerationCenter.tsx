import React from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Cpu, CheckCircle2, ShieldCheck, Terminal, Download, Rocket } from 'lucide-react';
import { mockGenerationTasks } from '../../services/vectorEngine';

export const GenerationCenter: React.FC = () => {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto animate-fadeIn">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#151515] to-[#1C1C1C] border border-[#292929]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-semibold mb-3">
            <Cpu className="w-4 h-4" />
            <span>Autonomous Execution Engine</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#F5F5F5] tracking-tight">Generation Center</h1>
          <p className="text-sm text-[#A3A3A3] mt-1">Real-time pipeline monitoring for AI website and web app builds.</p>
        </div>
      </div>

      <div className="space-y-6">
        {mockGenerationTasks.map((task) => (
          <Card key={task.id} className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-base font-bold text-[#F5F5F5]">{task.title}</h3>
                  <Badge variant={task.stage === 'Completed' ? 'emerald' : 'orange'}>{task.stage}</Badge>
                </div>
                <p className="text-xs text-[#A3A3A3]">Type: {task.type} • Created {task.createdAt}</p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" icon={<Download className="w-4 h-4" />}>
                  Export Code
                </Button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-[#A3A3A3]">
                <span>Pipeline Progress</span>
                <span className="text-[#10B981] font-bold">{task.progress}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#080808] overflow-hidden">
                <div className="h-full bg-[#10B981] rounded-full transition-all duration-500" style={{ width: `${task.progress}%` }} />
              </div>
            </div>

            {/* Live Logs */}
            <div className="p-4 rounded-xl bg-[#080808] border border-[#292929] space-y-2 font-mono text-xs text-[#A3A3A3]">
              <div className="flex items-center gap-2 text-[#F5F5F5] font-bold mb-1">
                <Terminal className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Execution Logs</span>
              </div>
              {task.logs.map((log, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
                  <span>{log}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
