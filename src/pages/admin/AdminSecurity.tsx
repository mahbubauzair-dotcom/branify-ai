import React, { useState } from 'react';
import {
  Shield,
  ShieldAlert,
  ShieldCheck,
  Lock,
  UserX,
  AlertTriangle,
  CheckCircle2,
  Trash2,
  Globe,
  Clock,
  KeyRound,
  RefreshCw,
  LogOut,
  Ban
} from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { AdminService, AdminSecurityEvent, AdminBlockedIP } from '../../services/adminService';

export const AdminSecurity: React.FC = () => {
  const [events, setEvents] = useState<AdminSecurityEvent[]>(AdminService.getSecurityEvents());
  const [blockedIPs, setBlockedIPs] = useState<AdminBlockedIP[]>(AdminService.getBlockedIPs());
  const [activeSessions, setActiveSessions] = useState([
    { id: 'sess-1', admin: 'Super Admin (You)', ip: '192.168.1.102', location: 'Austin, TX (USA)', device: 'Chrome 128 / macOS Sequoia', started: '18 minutes ago', current: true },
    { id: 'sess-2', admin: 'Security Officer', ip: '10.0.4.88', location: 'London (UK)', device: 'Firefox 130 / Ubuntu Linux', started: '2 hours ago', current: false }
  ]);

  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  const handleUnblockIP = (ipId: string, ipAddress: string) => {
    const updated = AdminService.unblockIP(ipId);
    setBlockedIPs(updated);
    showNotification(`IP ${ipAddress} has been unblocked.`);
  };

  const handleRevokeSession = (sessionId: string) => {
    setActiveSessions((prev) => prev.filter((s) => s.id !== sessionId));
    showNotification('Admin session successfully revoked.');
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
            <Shield className="w-3.5 h-3.5" />
            <span>SECURITY DEFENSE & ACCESS AUDIT</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#F5F5F5] tracking-tight">Security Center</h1>
          <p className="text-xs md:text-sm text-[#A3A3A3] mt-1">
            Audit intrusion attempts, manage IP blocklists, inspect active administrator sessions, and prevent API abuse.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3 py-2 rounded-xl bg-[#151515] border border-[#292929] text-xs flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span className="text-[#A3A3A3]">Firewall Shield: </span>
            <span className="font-bold text-[#10B981]">Active (WAF Layer 7)</span>
          </div>
        </div>
      </div>

      {/* 4 Threat Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card className="p-4 border-[#292929]">
          <div className="text-[11px] text-[#A3A3A3]">Active Admin Sessions</div>
          <div className="text-2xl font-black text-[#F5F5F5] font-mono mt-0.5">{activeSessions.length}</div>
          <div className="text-[10px] text-[#10B981] mt-1">MFA Enforced</div>
        </Card>
        <Card className="p-4 border-[#292929]">
          <div className="text-[11px] text-[#A3A3A3]">Blocked IP Addresses</div>
          <div className="text-2xl font-black text-[#EF4444] font-mono mt-0.5">{blockedIPs.length}</div>
          <div className="text-[10px] text-[#EF4444] mt-1">DDoS / Abuse Protection</div>
        </Card>
        <Card className="p-4 border-[#292929]">
          <div className="text-[11px] text-[#A3A3A3]">Failed Logins (24h)</div>
          <div className="text-2xl font-black text-[#D4AF37] font-mono mt-0.5">3</div>
          <div className="text-[10px] text-[#A3A3A3] mt-1">Rate limited automatically</div>
        </Card>
        <Card className="p-4 border-[#292929]">
          <div className="text-[11px] text-[#A3A3A3]">API Abuse Alerts</div>
          <div className="text-2xl font-black text-[#10B981] font-mono mt-0.5">0</div>
          <div className="text-[10px] text-[#10B981] mt-1">Normal Rate-limiting</div>
        </Card>
      </div>

      {/* 2 Cols: Active Admin Sessions & Blocked IPs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Sessions */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-[#F5F5F5]">Active Admin Sessions</h3>
            <Badge variant="emerald">2FA Verified</Badge>
          </div>

          <div className="space-y-3">
            {activeSessions.map((sess) => (
              <div
                key={sess.id}
                className="p-4 rounded-xl bg-[#080808] border border-[#292929] flex items-center justify-between gap-3 text-xs"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#F5F5F5]">{sess.admin}</span>
                    {sess.current && <Badge variant="champagne">Current Session</Badge>}
                  </div>
                  <div className="text-[11px] text-[#737373] font-mono">
                    {sess.ip} • {sess.location}
                  </div>
                  <div className="text-[10px] text-[#525252]">{sess.device}</div>
                </div>

                {!sess.current && (
                  <Button
                    variant="secondary"
                    className="text-[#EF4444] hover:border-[#EF4444] text-xs py-1"
                    onClick={() => handleRevokeSession(sess.id)}
                  >
                    Revoke
                  </Button>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Blocked IPs */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-[#F5F5F5]">Edge Blocked IPs (WAF)</h3>
            <Badge variant="orange">Automatic Quarantine</Badge>
          </div>

          <div className="space-y-3">
            {blockedIPs.map((ip) => (
              <div
                key={ip.id}
                className="p-3.5 rounded-xl bg-[#080808] border border-[#292929] flex items-center justify-between text-xs"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 font-mono font-bold text-[#EF4444]">
                    <span>{ip.ip}</span>
                    <span className="text-[10px] text-[#737373] font-normal font-sans">({ip.country})</span>
                  </div>
                  <div className="text-[11px] text-[#A3A3A3]">{ip.reason}</div>
                  <div className="text-[10px] text-[#525252] font-mono">Attempts: {ip.attempts} • {ip.blockedAt}</div>
                </div>

                <Button
                  variant="secondary"
                  className="text-[#10B981] hover:border-[#10B981] text-xs py-1"
                  onClick={() => handleUnblockIP(ip.id, ip.ip)}
                >
                  Unblock
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Security Threat & Event Audit Table */}
      <Card className="overflow-hidden p-0 border-[#292929]">
        <div className="p-4 border-b border-[#292929] flex items-center justify-between">
          <h3 className="text-sm font-bold text-[#F5F5F5]">Security Threat & Telemetry Feed</h3>
          <span className="text-xs text-[#737373] font-mono">Realtime WAF Guard</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#0D0D0D] border-b border-[#292929] text-[#737373] uppercase tracking-wider font-mono">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Event Type</th>
                <th className="py-3.5 px-4 font-semibold">Severity</th>
                <th className="py-3.5 px-4 font-semibold">Source IP</th>
                <th className="py-3.5 px-4 font-semibold">Location</th>
                <th className="py-3.5 px-4 font-semibold">Details</th>
                <th className="py-3.5 px-4 font-semibold text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#292929] bg-[#080808]">
              {events.map((ev) => (
                <tr key={ev.id} className="hover:bg-[#151515]/60 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-[#F5F5F5]">
                    {ev.type}
                  </td>

                  <td className="py-3.5 px-4">
                    <Badge
                      variant={
                        ev.severity === 'high'
                          ? 'orange'
                          : ev.severity === 'medium'
                          ? 'champagne'
                          : 'emerald'
                      }
                    >
                      {ev.severity.toUpperCase()}
                    </Badge>
                  </td>

                  <td className="py-3.5 px-4 font-mono text-[#F5F5F5]">
                    {ev.ip}
                  </td>

                  <td className="py-3.5 px-4 text-[#A3A3A3]">
                    {ev.location}
                  </td>

                  <td className="py-3.5 px-4 text-[#737373]">
                    {ev.details}
                  </td>

                  <td className="py-3.5 px-4 text-right font-mono text-[#737373]">
                    {ev.timestamp}
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
