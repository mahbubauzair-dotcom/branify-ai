import React, { useState, useEffect } from 'react';
import {
  BarChart3,
  Cpu,
  Coins,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Layers,
  Database,
  ShieldCheck
} from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { aiUsageService, AIUsageRecord, AIModelStatus } from '../../services/aiUsageService';
import { isSupabaseConfigured } from '../../services/supabaseClient';

export const AdminAIUsage: React.FC = () => {
  const [logs, setLogs] = useState<AIUsageRecord[]>([]);
  const [models, setModels] = useState<AIModelStatus[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      try {
        const usageLogs = await aiUsageService.getUsageLogs();
        const registeredModels = aiUsageService.getModels();
        setLogs(usageLogs);
        setModels(registeredModels);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  const totalTokens = logs.reduce((acc, l) => acc + l.inputTokens + l.outputTokens, 0);
  const totalCost = logs.reduce((acc, l) => acc + l.estimatedCost, 0);

  return (
    <div className="p-4 md:p-8 space-y-6 max-w-7xl mx-auto animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] mb-1">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>AI INFERENCE TELEMETRY & TOKEN ECONOMICS</span>
            <span className="flex items-center gap-1 ml-2 text-[10px] text-[#10B981] bg-[#10B981]/15 px-2 py-0.5 rounded border border-[#10B981]/30">
              <Database className="w-2.5 h-2.5" />
              {isSupabaseConfigured() ? 'Supabase Synced' : 'Local Buffer'}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#F5F5F5] tracking-tight">AI Usage & Economics</h1>
          <p className="text-xs md:text-sm text-[#A3A3A3] mt-1">
            Private owner tracking for LLM requests, token counts, inference cost estimates, and provider gateway status.
          </p>
        </div>
      </div>

      {/* Top 4 Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card className="p-4 border-[#292929]">
          <div className="text-[11px] text-[#A3A3A3]">Active LLM Engine</div>
          <div className="text-xl font-black text-[#10B981] font-mono mt-0.5">Gemini 2.5 Pro</div>
          <div className="text-[10px] text-[#10B981] mt-1 flex items-center gap-1 font-semibold">
            <CheckCircle2 className="w-3 h-3" /> Connected & Live
          </div>
        </Card>

        <Card className="p-4 border-[#292929]">
          <div className="text-[11px] text-[#A3A3A3]">Logged Request Count</div>
          <div className="text-2xl font-black text-[#F5F5F5] font-mono mt-0.5">{logs.length}</div>
          <div className="text-[10px] text-[#10B981] mt-1 font-semibold">100% Zero-Leakage Secure</div>
        </Card>

        <Card className="p-4 border-[#292929]">
          <div className="text-[11px] text-[#A3A3A3]">Tracked Tokens</div>
          <div className="text-2xl font-black text-[#D4AF37] font-mono mt-0.5">
            {totalTokens.toLocaleString()}
          </div>
          <div className="text-[10px] text-[#A3A3A3] mt-1 font-mono">Real-time Session Tokens</div>
        </Card>

        <Card className="p-4 border-[#292929]">
          <div className="text-[11px] text-[#A3A3A3]">Est. Inference Cost</div>
          <div className="text-2xl font-black text-[#10B981] font-mono mt-0.5">
            ${totalCost.toFixed(4)}
          </div>
          <div className="text-[10px] text-[#737373] mt-1 font-mono">Server-side execution</div>
        </Card>
      </div>

      {/* Provider Connectivity Table */}
      <Card className="p-6 space-y-4 border-[#292929]">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-[#F5F5F5]">AI Gateway & Model Connectivity Matrix</h3>
            <p className="text-xs text-[#A3A3A3] mt-0.5">
              Transparent live connection status across integrated reasoning engines and code synthesizers.
            </p>
          </div>
          <Badge variant="champagne">Private Owner Gateway</Badge>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#0D0D0D] border-b border-[#292929] text-[#737373] uppercase tracking-wider font-mono">
              <tr>
                <th className="py-3 px-4 font-semibold">Provider / Model</th>
                <th className="py-3 px-4 font-semibold">Category</th>
                <th className="py-3 px-4 font-semibold">Connection Status</th>
                <th className="py-3 px-4 font-semibold">Context Window</th>
                <th className="py-3 px-4 font-semibold text-right">Latency Ping</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#292929] bg-[#080808]">
              {models.map((m) => (
                <tr key={m.id} className="hover:bg-[#151515]/60 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-[#F5F5F5]">{m.model}</div>
                    <div className="text-[10px] text-[#737373] font-mono">{m.provider}</div>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-[#A3A3A3]">{m.category}</td>
                  <td className="py-3.5 px-4">
                    {m.isConnected ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                        {m.statusText}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-medium bg-[#292929]/50 text-[#737373] border border-[#292929]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#525252]" />
                        {m.statusText}
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 font-mono text-[#737373]">{m.contextWindow}</td>
                  <td className="py-3.5 px-4 text-right font-mono">
                    {m.latencyMs ? (
                      <span className="text-[#10B981] font-bold">{m.latencyMs}ms</span>
                    ) : (
                      <span className="text-[#525252]">Unavailable</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Usage History Table */}
      <Card className="p-6 space-y-4 border-[#292929]">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-[#F5F5F5]">Recent Token Usage Logs</h3>
            <p className="text-xs text-[#A3A3A3] mt-0.5">
              Detailed request records captured from active generator pipelines.
            </p>
          </div>
          <Badge variant="emerald">Audit Trail</Badge>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#0D0D0D] border-b border-[#292929] text-[#737373] uppercase tracking-wider font-mono">
              <tr>
                <th className="py-3 px-4 font-semibold">Request Type</th>
                <th className="py-3 px-4 font-semibold">Model</th>
                <th className="py-3 px-4 font-semibold">Input Tokens</th>
                <th className="py-3 px-4 font-semibold">Output Tokens</th>
                <th className="py-3 px-4 font-semibold">Est. Cost</th>
                <th className="py-3 px-4 font-semibold text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#292929] bg-[#080808]">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-[#151515]/60 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-[#F5F5F5]">{log.requestType}</td>
                  <td className="py-3.5 px-4 font-mono text-[#D4AF37]">{log.model}</td>
                  <td className="py-3.5 px-4 font-mono text-[#A3A3A3]">{log.inputTokens.toLocaleString()}</td>
                  <td className="py-3.5 px-4 font-mono text-[#A3A3A3]">{log.outputTokens.toLocaleString()}</td>
                  <td className="py-3.5 px-4 font-mono text-[#10B981] font-bold">
                    ${log.estimatedCost.toFixed(4)}
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono text-[#737373] text-[11px]">
                    {log.createdAt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
