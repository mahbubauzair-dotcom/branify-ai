import { activityLogger } from './activityLogger';

export interface OwnerProfile {
  id: string;
  name: string;
  email: string;
  role: 'Platform Owner';
  avatarInitials: string;
  plan: 'Private Enterprise Edition';
  createdAt: string;
  lastLoginAt: string;
  mfaEnabled: boolean;
  securityShieldActive: boolean;
  isSupabaseConnected: boolean;
}

export interface OwnerSession {
  token: string;
  expiresAt: number; // Unix timestamp in ms
  owner: OwnerProfile;
  authenticatedAt: string;
  deviceFingerprint: string;
}

const OWNER_SESSION_KEY = 'branify_owner_session_v2';
const SESSION_TTL_MS = 24 * 60 * 60 * 1000; // 24 Hours default duration

export const AUTHORIZED_OWNER_EMAIL = 'mahbubauzair@gmail.com';

const DEFAULT_OWNER_PROFILE: OwnerProfile = {
  id: 'owner-mahbub-001',
  name: 'Mahbub Uzair',
  email: AUTHORIZED_OWNER_EMAIL,
  role: 'Platform Owner',
  avatarInitials: 'MU',
  plan: 'Private Enterprise Edition',
  createdAt: '2026-01-01T00:00:00Z',
  lastLoginAt: new Date().toISOString(),
  mfaEnabled: true,
  securityShieldActive: true,
  isSupabaseConnected: false
};

export const authService = {
  /**
   * Check if current private owner session exists and is unexpired
   */
  isAuthenticated(): boolean {
    const session = this.getSession();
    if (!session) return false;

    // Check expiration
    if (Date.now() > session.expiresAt) {
      this.logout();
      return false;
    }

    // Strict single-owner email enforcement
    if ((session.owner?.email || '').trim().toLowerCase() !== AUTHORIZED_OWNER_EMAIL) {
      this.logout();
      return false;
    }

    return true;
  },

  /**
   * Get current owner session if valid
   */
  getSession(): OwnerSession | null {
    try {
      const raw = localStorage.getItem(OWNER_SESSION_KEY);
      if (!raw) return null;
      const parsed: OwnerSession = JSON.parse(raw);
      if (!parsed.token || !parsed.expiresAt) return null;
      return parsed;
    } catch {
      return null;
    }
  },

  /**
   * Get owner profile
   */
  getOwner(): OwnerProfile {
    const session = this.getSession();
    const profile = session ? session.owner : DEFAULT_OWNER_PROFILE;
    return profile;
  },

  /**
   * Private Owner Login (Server-Side Secret Validation Only)
   */
  async login(credentials: { email: string; password?: string; rememberMe?: boolean }): Promise<{ success: boolean; session?: OwnerSession; error?: string }> {
    const trimmedEmail = (credentials.email || '').trim().toLowerCase();

    // 1. Strict single-owner account check
    if (trimmedEmail !== AUTHORIZED_OWNER_EMAIL) {
      return {
        success: false,
        error: `Access denied. Only the authorized owner (${AUTHORIZED_OWNER_EMAIL}) is permitted to log in.`
      };
    }

    if (!credentials.password || credentials.password.trim() === '') {
      return {
        success: false,
        error: 'Both email and owner password are required.'
      };
    }

    // 2. Validate password securely on the server
    try {
      const res = await fetch('/api/auth/owner-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: trimmedEmail,
          password: credentials.password,
          rememberMe: Boolean(credentials.rememberMe)
        })
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        return {
          success: false,
          error: data.error || 'Authentication failed. Please verify owner credentials.'
        };
      }

      if (data.session) {
        // Store session securely without ever saving the plaintext password
        localStorage.setItem(OWNER_SESSION_KEY, JSON.stringify(data.session));

        activityLogger.log({
          action: 'LOGIN',
          target: 'Private Owner Control Center',
          severity: 'info',
          details: `Authorized private owner session established for ${data.session.owner.email}`
        });

        return { success: true, session: data.session };
      }

      return {
        success: false,
        error: 'Invalid session response from server.'
      };
    } catch (err: any) {
      return {
        success: false,
        error: err.message || 'Unable to connect to authentication server. Please retry.'
      };
    }
  },

  /**
   * Refresh session TTL
   */
  refreshSession(): void {
    const session = this.getSession();
    if (session) {
      session.expiresAt = Date.now() + SESSION_TTL_MS;
      localStorage.setItem(OWNER_SESSION_KEY, JSON.stringify(session));
    }
  },

  /**
   * Private Owner Logout
   */
  async logout(): Promise<void> {
    const owner = this.getOwner();
    activityLogger.log({
      action: 'LOGOUT',
      target: 'Private Owner Control Center',
      severity: 'info',
      details: `Owner session locked for ${owner.email}`
    });

    try {
      await fetch('/api/auth/owner-logout', { method: 'POST' });
    } catch {
      // Ignore network errors on logout
    }

    try {
      localStorage.removeItem(OWNER_SESSION_KEY);
      localStorage.removeItem('branify_owner_session_v1');
    } catch {
      // Ignored
    }
  }
};
