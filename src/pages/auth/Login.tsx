import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { Lock, ShieldCheck, ArrowRight, Eye, EyeOff, KeyRound, Sparkles, AlertCircle } from 'lucide-react';
import { authService, AUTHORIZED_OWNER_EMAIL } from '../../services/authService';

export const Login: React.FC = () => {
  const [email, setEmail] = useState(AUTHORIZED_OWNER_EMAIL);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: { pathname?: string } })?.from?.pathname || '/dashboard';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    if (!email.trim() || !password.trim()) {
      setErrorMessage('Please enter both the authorized owner email and master password.');
      setIsLoading(false);
      return;
    }

    try {
      const res = await authService.login({ email, password, rememberMe });
      if (res.success) {
        navigate(from, { replace: true });
      } else {
        setErrorMessage(res.error || 'Authentication failed. Please verify credentials.');
      }
    } catch {
      setErrorMessage('Unexpected connection error during authentication. Please retry.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center p-4 selection:bg-[#10B981] selection:text-black">
      {/* Subtle Background Radial Glow */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.10),rgba(255,255,255,0))]" />

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#10B981] text-[#080808] font-black text-2xl shadow-xl shadow-[#10B981]/25 mb-4 border border-[#10B981]/40">
            BA
          </div>
          <div className="flex items-center justify-center gap-2 mb-1">
            <h1 className="text-2xl font-black text-[#D4AF37] tracking-tight">BRANIFY AI</h1>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
              OWNER PORTAL
            </span>
          </div>
          <p className="text-xs text-[#A3A3A3] mt-1">Private Enterprise Control Center • Single-Owner Access</p>
        </div>

        {/* Login Card */}
        <Card className="p-8 border-[#292929] bg-[#0D0D0D] shadow-2xl rounded-2xl">
          {/* Security Notice Pill */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#151515] border border-[#292929] mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <div>
                <p className="text-[11px] font-bold text-[#F5F5F5]">Protected Environment</p>
                <p className="text-[10px] text-[#737373]">Single-Owner Direct Gateway</p>
              </div>
            </div>
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
          </div>

          {errorMessage && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-950/40 border border-red-800/60 text-xs text-red-300 flex items-start gap-2.5 leading-relaxed">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold text-[#A3A3A3] uppercase tracking-wider mb-2">
                Authorized Owner Email *
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder={AUTHORIZED_OWNER_EMAIL}
                  className="w-full bg-[#151515] border border-[#292929] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#525252] focus:outline-none focus:border-[#10B981] transition-colors font-mono text-xs"
                />
              </div>
              <p className="text-[10px] text-[#737373] mt-1">
                Only <strong className="text-[#A3A3A3]">{AUTHORIZED_OWNER_EMAIL}</strong> is authorized to log in.
              </p>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#A3A3A3] uppercase tracking-wider mb-2">
                Master Owner Password *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your master password"
                  className="w-full bg-[#151515] border border-[#292929] rounded-xl pl-4 pr-11 py-3 text-sm text-[#F5F5F5] placeholder-[#525252] focus:outline-none focus:border-[#10B981] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#737373] hover:text-[#F5F5F5] transition-colors cursor-pointer"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-[#292929] bg-[#151515] text-[#10B981] accent-[#10B981]"
                />
                <span className="text-xs text-[#A3A3A3]">Remember private session (7 days)</span>
              </label>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full mt-4 bg-[#10B981] hover:bg-[#059669] text-[#080808] font-bold py-3.5 rounded-xl shadow-lg shadow-[#10B981]/20 cursor-pointer"
              icon={isLoading ? <Sparkles className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}
              disabled={isLoading}
            >
              {isLoading ? 'Verifying Credentials...' : 'Unlock Control Center'}
            </Button>
          </form>

          {/* Owner Identity Footnote */}
          <div className="mt-6 pt-5 border-t border-[#292929]/70 flex items-center justify-between text-[11px] text-[#737373]">
            <div className="flex items-center gap-2">
              <KeyRound className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Owner: <strong className="text-[#A3A3A3]">Mahbub Uzair</strong></span>
            </div>
            <span className="text-[#10B981] font-mono">single-owner</span>
          </div>
        </Card>

        {/* Private Platform Disclaimer */}
        <div className="text-center mt-6">
          <p className="text-[11px] text-[#525252]">
            Private Internal System • Public registration is disabled. Unauthorized access attempts are prohibited.
          </p>
        </div>
      </div>
    </div>
  );
};
