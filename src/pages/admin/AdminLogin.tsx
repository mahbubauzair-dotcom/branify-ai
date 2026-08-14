import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ShieldAlert,
  Lock,
  Mail,
  Eye,
  EyeOff,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  KeyRound,
  CheckCircle2
} from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { AdminService } from '../../services/adminService';

export const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/admin/dashboard';

  const [emailOrUsername, setEmailOrUsername] = useState('admin@branify.ai');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!emailOrUsername.trim()) {
      setErrorMessage('Please enter an admin email or username.');
      return;
    }

    setIsLoading(true);
    try {
      const res = await AdminService.login({
        emailOrUsername,
        password,
        remember
      });

      if (res.success) {
        navigate(from, { replace: true });
      } else {
        setErrorMessage(res.message || 'Authentication failed. Please verify your credentials.');
      }
    } catch {
      setErrorMessage('A network error occurred while connecting to the admin authority.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoAutofill = () => {
    setEmailOrUsername('admin@branify.ai');
    setPassword('SuperAdmin2026!');
    setErrorMessage(null);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F5F5] flex flex-col justify-center items-center p-4 relative overflow-hidden">
      {/* Subtle Background Radial Glows in Approved Colors */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#10B981]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-md space-y-6 relative z-10 animate-fadeIn">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#151515] border border-[#292929] shadow-xl shadow-black/60 mb-2">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37] flex items-center justify-center shadow-lg shadow-[#D4AF37]/20">
              <ShieldAlert className="w-5 h-5 text-[#080808]" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-xl font-extrabold tracking-tight text-[#F5F5F5]">BRANIFY AI</h1>
            <span className="px-2 py-0.5 rounded bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-black uppercase tracking-wider">
              Admin Console
            </span>
          </div>
          <p className="text-xs text-[#A3A3A3]">Restricted access portal for operations and platform governance.</p>
        </div>

        {/* Login Card */}
        <Card className="p-6 md:p-8 space-y-6 border-[#292929] bg-[#0D0D0D]">
          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-[#EF4444]/10 border border-[#EF4444]/30 flex items-start gap-2.5 text-xs text-[#EF4444] animate-fadeIn">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#A3A3A3] uppercase tracking-wider mb-2">
                Admin Username or Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#737373] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={emailOrUsername}
                  onChange={(e) => setEmailOrUsername(e.target.value)}
                  placeholder="admin@branify.ai"
                  required
                  className="w-full bg-[#151515] border border-[#292929] rounded-xl pl-10 pr-4 py-3 text-sm text-[#F5F5F5] placeholder-[#525252] focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#A3A3A3] uppercase tracking-wider mb-2">
                Security Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#737373] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter administrator secret..."
                  required
                  className="w-full bg-[#151515] border border-[#292929] rounded-xl pl-10 pr-10 py-3 text-sm text-[#F5F5F5] placeholder-[#525252] focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#737373] hover:text-[#F5F5F5] transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 text-[#A3A3A3] cursor-pointer">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-3.5 h-3.5 rounded bg-[#151515] border-[#292929] accent-[#D4AF37]"
                />
                <span>Remember session (30 days)</span>
              </label>
              <button
                type="button"
                onClick={handleDemoAutofill}
                className="text-[#D4AF37] hover:underline font-semibold cursor-pointer"
              >
                Autofill Demo
              </button>
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full py-3 bg-[#D4AF37] hover:bg-[#b89528] text-[#080808] font-bold shadow-lg shadow-[#D4AF37]/20"
              isLoading={isLoading}
              icon={<KeyRound className="w-4 h-4" />}
            >
              Authenticate & Enter Console
            </Button>
          </form>

          {/* Security Sentinel Note */}
          <div className="pt-4 border-t border-[#292929] flex items-center justify-between text-[11px] text-[#737373]">
            <span className="flex items-center gap-1.5 text-[#10B981]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>TLS 1.3 End-to-End Encrypted</span>
            </span>
            <span className="font-mono">Sentinel v4.2</span>
          </div>
        </Card>

        {/* Back to User Dashboard */}
        <div className="text-center">
          <button
            onClick={() => navigate('/dashboard')}
            className="text-xs text-[#737373] hover:text-[#A3A3A3] transition-colors cursor-pointer hover:underline"
          >
            ← Return to BRANIFY User Workspace
          </button>
        </div>
      </div>
    </div>
  );
};
