import React, { useState, useEffect } from 'react';
import {
  FileText,
  Search,
  Download,
  CheckCircle2,
  Database
} from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { activityLogger, ActivityLogEntry } from '../../services/activityLogger';
import { isSupabaseConfigured } from '../../services/supabaseClient';

export const AdminAuditLogs: React.FC = () => {
  const [logs, setLogs] = useState<ActivityLogEntry[]>([]);
  const [search, setSearch] = useState('');
  const [severityFilter, setSeverityFilter] = useState('all');
  const [actionFilter, setActionFilter] = useState('all');
  const [notification, setNotification] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadLogs() {
      setIsLoading(true);
      try {
        const data = await activityLogger.getLogs();
        setLogs(data);
      } finally {
        setIsLoading(false);
      }
    }
    loadLogs();
  }, []);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  const filteredLogs = logs.filter((log) => {
    const matchesSearch =
      log.action.toLowerCase().includes(search.toLowerCase()) ||
      log.target.toLowerCase().includes(search.toLowerCase()) ||
      (log.details || '').toLowerCase().includes(search.toLowerCase());
    const matchesSeverity = severityFilter === 'all' || (log.severity || 'info').toLowerCase() === severityFilter.toLowerCase();
    const matchesAction = actionFilter === 'all' || log.action.toLowerCase().includes(actionFilter.toLowerCase());
    return matchesSearch && matchesSeverity && matchesAction;
  });

  const handleExportLogs = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      ['Timestamp,Action,Target,Severity,IP,Details']
        .concat(
          filteredLogs.map(
            (l) =>
              `"${l.created_at || ''}","${l.action}","${l.target}","${l.severity || 'info'}","${l.ip_address || ''}","${l.details || ''}"`
          )
        )
        .join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `branify_activity_logs_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showNotification(`Exported ${filteredLogs.length} activity records to CSV.`);
  };

  return (
    <div className="p-4 md:p-8 space-y-6 max-w-7xl mx-auto animate-fadeIn">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-[#10B981] text-[#080808] font-bold text-xs shadow-2xl flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{notification}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] mb-1">
            <FileText className="w-3.5 h-3.5" />
            <span>IMMUTABLE OWNER AUDIT & ACTIVITY TRAIL</span>
            <span className="flex items-center gap-1 ml-2 text-[10px] text-[#10B981] bg-[#10B981]/15 px-2 py-0.5 rounded border border-[#10B981]/30">
              <Database className="w-2.5 h-2.5" />
              {isSupabaseConfigured() ? 'Supabase Synchronized' : 'Local Storage Fallback'}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#F5F5F5] tracking-tight">Activity & Audit Logs</h1>
          <p className="text-xs md:text-sm text-[#A3A3A3] mt-1">
            Forensic logs for logins, project generations, deployment triggers, security scans, and settings updates.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            icon={<Download className="w-4 h-4" />}
            onClick={handleExportLogs}
          >
            Export Activity Trail (CSV)
          </Button>
        </div>
      </div>

      {/* Search & Filters */}
      <Card className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1 flex items-center gap-3 bg-[#080808] border border-[#292929] rounded-xl px-3 py-2">
          <Search className="w-4 h-4 text-[#737373]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search logs by action type, target, or details..."
            className="w-full bg-transparent text-xs md:text-sm text-[#F5F5F5] placeholder-[#525252] focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <select
            value={severityFilter}
            onChange={(e) => setSeverityFilter(e.target.value)}
            className="bg-[#080808] border border-[#292929] rounded-xl px-3 py-2 text-xs text-[#F5F5F5] focus:outline-none cursor-pointer"
          >
            <option value="all">All Severities</option>
            <option value="info">Info</option>
            <option value="warning">Warning</option>
            <option value="critical">Critical</option>
          </select>

          <select
            value={actionFilter}
            onChange={(e) => setActionFilter(e.target.value)}
            className="bg-[#080808] border border-[#292929] rounded-xl px-3 py-2 text-xs text-[#F5F5F5] focus:outline-none cursor-pointer"
          >
            <option value="all">All Action Types</option>
            <option value="login">Authentication</option>
            <option value="project">Projects</option>
            <option value="website">Website Generator</option>
            <option value="lead">Lead Radar</option>
            <option value="deployment">Deployments</option>
            <option value="settings">Settings</option>
          </select>
        </div>
      </Card>

      {/* Audit Logs Table */}
      <Card className="overflow-hidden p-0 border-[#292929]">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#0D0D0D] border-b border-[#292929] text-[#737373] uppercase tracking-wider font-mono">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Action & Target</th>
                <th className="py-3.5 px-4 font-semibold">Severity</th>
                <th className="py-3.5 px-4 font-semibold">Source Client</th>
                <th className="py-3.5 px-4 font-semibold">Details</th>
                <th className="py-3.5 px-4 font-semibold text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#292929] bg-[#080808]">
              {isLoading ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-[#737373]">
                    Loading activity records...
                  </td>
                </tr>
              ) : filteredLogs.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-[#737373]">
                    No activity logs matching current filters.
                  </td>
                </tr>
              ) : (
                filteredLogs.map((log, index) => (
                  <tr key={log.id || index} className="hover:bg-[#151515]/60 transition-colors">
                    {/* Action & Target */}
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-[#F5F5F5]">{log.action}</div>
                      <div className="text-[11px] text-[#D4AF37] font-mono">{log.target}</div>
                    </td>

                    {/* Severity */}
                    <td className="py-3.5 px-4">
                      <Badge
                        variant={
                          log.severity === 'critical'
                            ? 'orange'
                            : log.severity === 'warning'
                            ? 'champagne'
                            : 'emerald'
                        }
                      >
                        {(log.severity || 'INFO').toUpperCase()}
                      </Badge>
                    </td>

                    {/* Source IP / Client */}
                    <td className="py-3.5 px-4 font-mono text-[#A3A3A3]">
                      {log.ip_address || '127.0.0.1 (Owner Edge Client)'}
                    </td>

                    {/* Details */}
                    <td className="py-3.5 px-4 text-[#A3A3A3] max-w-xs truncate">
                      {log.details}
                    </td>

                    {/* Timestamp */}
                    <td className="py-3.5 px-4 text-right font-mono text-[#737373] text-[11px]">
                      {log.created_at}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
