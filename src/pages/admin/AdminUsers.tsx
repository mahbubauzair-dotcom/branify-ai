import React, { useState } from 'react';
import {
  Users,
  Search,
  Filter,
  UserCheck,
  UserX,
  KeyRound,
  Shield,
  Coins,
  FolderGit2,
  Calendar,
  Clock,
  MoreVertical,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { AdminService, AdminUser } from '../../services/adminService';

export const AdminUsers: React.FC = () => {
  const [users, setUsers] = useState<AdminUser[]>(AdminService.getUsers());
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [planFilter, setPlanFilter] = useState<string>('all');

  // Selected user for details modal
  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null);

  // Confirmation dialog state
  const [confirmDialog, setConfirmDialog] = useState<{
    isOpen: boolean;
    user: AdminUser | null;
    action: 'suspend' | 'activate' | 'reset';
  }>({
    isOpen: false,
    user: null,
    action: 'suspend'
  });

  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.country.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'all' || u.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesPlan = planFilter === 'all' || u.plan.toLowerCase() === planFilter.toLowerCase();
    return matchesSearch && matchesStatus && matchesPlan;
  });

  const handleExecuteAction = () => {
    if (!confirmDialog.user) return;
    const target = confirmDialog.user;

    if (confirmDialog.action === 'suspend') {
      const updated = AdminService.updateUserStatus(target.id, 'Suspended');
      setUsers(updated);
      showNotification(`User account ${target.name} has been suspended.`);
    } else if (confirmDialog.action === 'activate') {
      const updated = AdminService.updateUserStatus(target.id, 'Active');
      setUsers(updated);
      showNotification(`User account ${target.name} is now Active.`);
    } else if (confirmDialog.action === 'reset') {
      const res = AdminService.resetUserAccess(target.id);
      showNotification(`Password reset token generated for ${target.email}`);
    }

    setConfirmDialog({ isOpen: false, user: null, action: 'suspend' });
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
            <Users className="w-3.5 h-3.5" />
            <span>IDENTITY & ACCESS GOVERNANCE</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#F5F5F5] tracking-tight">User Management</h1>
          <p className="text-xs md:text-sm text-[#A3A3A3] mt-1">
            Inspect accounts, manage subscription tiers, audit AI credit usage, and moderate active platform access.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3 py-2 rounded-xl bg-[#151515] border border-[#292929] text-xs">
            <span className="text-[#737373]">Total Accounts: </span>
            <span className="font-bold text-[#F5F5F5]">{users.length}</span>
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <Card className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1 flex items-center gap-3 bg-[#080808] border border-[#292929] rounded-xl px-3 py-2">
          <Search className="w-4 h-4 text-[#737373]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search users by name, email, or country..."
            className="w-full bg-transparent text-xs md:text-sm text-[#F5F5F5] placeholder-[#525252] focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-3">
          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-[#080808] border border-[#292929] rounded-xl px-3 py-2 text-xs text-[#F5F5F5] focus:outline-none cursor-pointer"
          >
            <option value="all">All Statuses</option>
            <option value="active">Active</option>
            <option value="suspended">Suspended</option>
            <option value="pending">Pending</option>
          </select>

          {/* Plan Filter */}
          <select
            value={planFilter}
            onChange={(e) => setPlanFilter(e.target.value)}
            className="bg-[#080808] border border-[#292929] rounded-xl px-3 py-2 text-xs text-[#F5F5F5] focus:outline-none cursor-pointer"
          >
            <option value="all">All Plans</option>
            <option value="enterprise">Enterprise</option>
            <option value="agency pro">Agency Pro</option>
            <option value="growth">Growth</option>
            <option value="free starter">Free Starter</option>
          </select>
        </div>
      </Card>

      {/* Users High-Density Table */}
      <Card className="overflow-hidden p-0 border-[#292929]">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#0D0D0D] border-b border-[#292929] text-[#737373] uppercase tracking-wider font-mono">
              <tr>
                <th className="py-3.5 px-4 font-semibold">User & Identity</th>
                <th className="py-3.5 px-4 font-semibold">Role & Plan</th>
                <th className="py-3.5 px-4 font-semibold">Status</th>
                <th className="py-3.5 px-4 font-semibold">AI Credits (Used / Limit)</th>
                <th className="py-3.5 px-4 font-semibold">Projects</th>
                <th className="py-3.5 px-4 font-semibold">Last Active</th>
                <th className="py-3.5 px-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#292929] bg-[#080808]">
              {filteredUsers.map((u) => {
                const percentCredits = Math.round((u.aiCreditsUsed / u.aiCreditsLimit) * 100);
                return (
                  <tr key={u.id} className="hover:bg-[#151515]/60 transition-colors">
                    {/* User */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#151515] border border-[#292929] flex items-center justify-center text-[#D4AF37] font-bold text-xs shrink-0">
                          {u.avatarInitials}
                        </div>
                        <div className="min-w-0">
                          <div className="font-bold text-[#F5F5F5]">{u.name}</div>
                          <div className="text-[11px] text-[#737373]">{u.email}</div>
                        </div>
                      </div>
                    </td>

                    {/* Role & Plan */}
                    <td className="py-3.5 px-4">
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-[#F5F5F5]">{u.plan}</span>
                        <span className="text-[10px] text-[#A3A3A3]">{u.role}</span>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="py-3.5 px-4">
                      <Badge variant={u.status === 'Active' ? 'emerald' : u.status === 'Suspended' ? 'orange' : 'champagne'}>
                        {u.status}
                      </Badge>
                    </td>

                    {/* AI Credits */}
                    <td className="py-3.5 px-4">
                      <div className="w-36 space-y-1">
                        <div className="flex items-center justify-between text-[10px] font-mono">
                          <span className="text-[#F5F5F5] font-bold">{u.aiCreditsUsed.toLocaleString()}</span>
                          <span className="text-[#737373]">/ {u.aiCreditsLimit.toLocaleString()}</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-[#1C1C1C] overflow-hidden">
                          <div
                            style={{ width: `${percentCredits}%` }}
                            className={`h-full rounded-full ${
                              percentCredits > 85 ? 'bg-[#EF4444]' : percentCredits > 60 ? 'bg-[#D4AF37]' : 'bg-[#10B981]'
                            }`}
                          />
                        </div>
                      </div>
                    </td>

                    {/* Projects */}
                    <td className="py-3.5 px-4">
                      <span className="font-mono font-bold text-[#F5F5F5]">{u.projectsCount}</span>
                    </td>

                    {/* Last Active */}
                    <td className="py-3.5 px-4 text-[#A3A3A3] font-mono text-[11px]">
                      {u.lastActive}
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => setSelectedUser(u)}
                          className="px-2.5 py-1 rounded bg-[#151515] border border-[#292929] hover:border-[#383838] text-[#F5F5F5] text-[11px] font-medium transition-colors cursor-pointer"
                        >
                          Inspect
                        </button>

                        {u.status === 'Active' ? (
                          <button
                            onClick={() => setConfirmDialog({ isOpen: true, user: u, action: 'suspend' })}
                            className="p-1 rounded bg-[#151515] border border-[#292929] text-[#737373] hover:text-[#EF4444] hover:border-[#EF4444]/40 transition-colors cursor-pointer"
                            title="Suspend User"
                          >
                            <UserX className="w-3.5 h-3.5" />
                          </button>
                        ) : (
                          <button
                            onClick={() => setConfirmDialog({ isOpen: true, user: u, action: 'activate' })}
                            className="p-1 rounded bg-[#151515] border border-[#292929] text-[#737373] hover:text-[#10B981] hover:border-[#10B981]/40 transition-colors cursor-pointer"
                            title="Activate User"
                          >
                            <UserCheck className="w-3.5 h-3.5" />
                          </button>
                        )}

                        <button
                          onClick={() => setConfirmDialog({ isOpen: true, user: u, action: 'reset' })}
                          className="p-1 rounded bg-[#151515] border border-[#292929] text-[#737373] hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-colors cursor-pointer"
                          title="Reset Credentials"
                        >
                          <KeyRound className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      {/* User Inspection Modal */}
      {selectedUser && (
        <Modal
          isOpen={!!selectedUser}
          onClose={() => setSelectedUser(null)}
          title={`User Diagnostic: ${selectedUser.name}`}
          size="lg"
        >
          <div className="space-y-6 text-xs">
            <div className="flex items-center justify-between p-4 rounded-xl bg-[#080808] border border-[#292929]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] font-black text-sm">
                  {selectedUser.avatarInitials}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#F5F5F5]">{selectedUser.name}</h3>
                  <p className="text-[#A3A3A3]">{selectedUser.email}</p>
                </div>
              </div>
              <Badge variant={selectedUser.status === 'Active' ? 'emerald' : 'orange'}>
                {selectedUser.status}
              </Badge>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-lg bg-[#151515] border border-[#292929]">
                <span className="text-[#737373] block text-[10px]">Plan Tier</span>
                <span className="font-bold text-[#F5F5F5] text-sm mt-0.5 block">{selectedUser.plan}</span>
              </div>
              <div className="p-3 rounded-lg bg-[#151515] border border-[#292929]">
                <span className="text-[#737373] block text-[10px]">Role</span>
                <span className="font-bold text-[#D4AF37] text-sm mt-0.5 block">{selectedUser.role}</span>
              </div>
              <div className="p-3 rounded-lg bg-[#151515] border border-[#292929]">
                <span className="text-[#737373] block text-[10px]">Signup Date</span>
                <span className="font-bold text-[#F5F5F5] text-sm mt-0.5 block font-mono">{selectedUser.signupDate}</span>
              </div>
              <div className="p-3 rounded-lg bg-[#151515] border border-[#292929]">
                <span className="text-[#737373] block text-[10px]">Country</span>
                <span className="font-bold text-[#F5F5F5] text-sm mt-0.5 block">{selectedUser.country}</span>
              </div>
            </div>

            {/* AI Credits Audit */}
            <div className="p-4 rounded-xl bg-[#080808] border border-[#292929] space-y-3">
              <div className="flex items-center justify-between font-semibold text-[#F5F5F5]">
                <span className="flex items-center gap-2">
                  <Coins className="w-4 h-4 text-[#D4AF37]" /> AI Quota & Consumption
                </span>
                <span className="font-mono text-[#10B981]">
                  {selectedUser.aiCreditsUsed.toLocaleString()} / {selectedUser.aiCreditsLimit.toLocaleString()} credits
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#1C1C1C] overflow-hidden">
                <div
                  style={{ width: `${Math.round((selectedUser.aiCreditsUsed / selectedUser.aiCreditsLimit) * 100)}%` }}
                  className="h-full rounded-full bg-[#10B981]"
                />
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-end gap-3 pt-2">
              {selectedUser.status === 'Active' ? (
                <Button
                  variant="secondary"
                  className="text-[#EF4444] hover:border-[#EF4444]"
                  onClick={() => {
                    setSelectedUser(null);
                    setConfirmDialog({ isOpen: true, user: selectedUser, action: 'suspend' });
                  }}
                >
                  Suspend Account
                </Button>
              ) : (
                <Button
                  variant="primary"
                  onClick={() => {
                    setSelectedUser(null);
                    setConfirmDialog({ isOpen: true, user: selectedUser, action: 'activate' });
                  }}
                >
                  Activate Account
                </Button>
              )}
              <Button variant="secondary" onClick={() => setSelectedUser(null)}>
                Close
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Confirmation Dialog */}
      {confirmDialog.isOpen && confirmDialog.user && (
        <Modal
          isOpen={confirmDialog.isOpen}
          onClose={() => setConfirmDialog({ isOpen: false, user: null, action: 'suspend' })}
          title={`Confirm Action: ${confirmDialog.action.toUpperCase()}`}
          size="sm"
        >
          <div className="space-y-4 text-xs">
            <div className="p-3.5 rounded-xl bg-[#151515] border border-[#292929] flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
              <div>
                <p className="text-[#F5F5F5] font-semibold">
                  Are you sure you want to {confirmDialog.action} user account <span className="text-[#D4AF37]">{confirmDialog.user.name}</span>?
                </p>
                <p className="text-[#737373] mt-1 text-[11px]">
                  {confirmDialog.action === 'suspend'
                    ? 'This will immediately revoke their active sessions and suspend generation pipelines.'
                    : confirmDialog.action === 'activate'
                    ? 'This will restore their platform generation and builder capabilities.'
                    : 'This will invalidate current security tokens and issue a fresh one-time reset link.'}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <Button
                variant="secondary"
                onClick={() => setConfirmDialog({ isOpen: false, user: null, action: 'suspend' })}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                className={confirmDialog.action === 'suspend' ? 'bg-[#EF4444] text-[#F5F5F5]' : 'bg-[#10B981] text-[#080808]'}
                onClick={handleExecuteAction}
              >
                Confirm {confirmDialog.action}
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
