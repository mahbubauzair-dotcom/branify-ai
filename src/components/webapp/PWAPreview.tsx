import React, { useState } from 'react';
import { CategoryConfig } from '../../data/webapp/types';

interface PWAPreviewProps {
  config: CategoryConfig;
  customization?: {
    businessName?: string;
    primaryColor?: string;
  };
}

/**
 * PWA preview component.
 * Shows the manifest.json contents, simulates install prompt, and previews
 * the mobile app experience (installable, standalone, offline-capable).
 */
export const PWAPreview: React.FC<PWAPreviewProps> = ({ config, customization }) => {
  const [installPromptShown, setInstallPromptShown] = useState(false);
  const [installed, setInstalled] = useState(false);

  const theme = { ...config.theme, primary: customization?.primaryColor || config.theme.primary };
  const appName = customization?.businessName || config.pwa.appName;

  const manifest = {
    name: config.pwa.appName,
    short_name: config.pwa.shortName,
    description: config.pwa.description,
    start_url: '/',
    display: 'standalone',
    background_color: config.pwa.backgroundColor,
    theme_color: config.pwa.themeColor,
    orientation: 'portrait',
    icons: [
      { src: 'icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any maskable' },
      { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
    ],
    shortcuts: [
      { name: 'Book Now', url: '/?action=book', icons: [{ src: 'book.png', sizes: '96x96' }] },
      { name: 'Call', url: '/?action=call', icons: [{ src: 'call.png', sizes: '96x96' }] }
    ],
    categories: ['business', 'lifestyle']
  };

  return (
    <div style={{ background: '#0A0A0A', padding: '32px', borderRadius: '14px', fontFamily: "'Inter', sans-serif" }}>
      {/* PWA Status Banner */}
      <div style={{
        padding: '16px 20px',
        background: installed ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)',
        borderRadius: '12px',
        border: `1px solid ${installed ? 'rgba(16,185,129,0.3)' : 'rgba(245,158,11,0.3)'}`,
        marginBottom: '32px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }}>
        <div style={{ fontSize: '32px' }}>
          {installed ? '✅' : '📲'}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ color: installed ? '#10B981' : '#F59E0B', fontSize: '14px', fontWeight: 700, marginBottom: '4px' }}>
            {installed ? 'PWA Installed Successfully' : 'PWA Ready — Installable'}
          </div>
          <div style={{ color: '#A3A3A3', fontSize: '12px' }}>
            {installed
              ? `${appName} is now on your home screen. Tap the icon to launch in standalone mode.`
              : 'Manifest valid. Service worker registered. App passes PWA criteria for iOS and Android install.'}
          </div>
        </div>
        {!installed && (
          <button
            onClick={() => { setInstallPromptShown(true); }}
            style={{
              padding: '10px 20px',
              background: theme.primary,
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Install App
          </button>
        )}
      </div>

      {/* Install Prompt Modal */}
      {installPromptShown && !installed && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px'
        }}
          onClick={() => setInstallPromptShown(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#151515',
              borderRadius: '16px',
              padding: '32px',
              maxWidth: '380px',
              width: '100%',
              textAlign: 'center',
              border: `1px solid ${theme.primary}33`
            }}
          >
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '16px',
              background: `linear-gradient(135deg, ${config.pwa.themeColor}, ${theme.accent})`,
              margin: '0 auto 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              color: '#fff',
              fontWeight: 800
            }}>
              {config.pwa.shortName.charAt(0)}
            </div>
            <h3 style={{ color: '#F5F5F5', fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>
              Install {appName}
            </h3>
            <p style={{ color: '#A3A3A3', fontSize: '13px', marginBottom: '24px' }}>
              {config.pwa.description}
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => setInstallPromptShown(false)}
                style={{
                  flex: 1,
                  padding: '12px',
                  background: 'transparent',
                  color: '#A3A3A3',
                  border: '1px solid #292929',
                  borderRadius: '8px',
                  fontSize: '13px',
                  cursor: 'pointer'
                }}
              >
                Not now
              </button>
              <button
                onClick={() => { setInstalled(true); setInstallPromptShown(false); }}
                style={{
                  flex: 1,
                  padding: '12px',
                  background: theme.primary,
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Install
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile App Preview */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }} className="pwa-grid">
        {/* Phone Mockup */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: '280px',
            height: '580px',
            background: '#1C1C1C',
            borderRadius: '36px',
            padding: '12px',
            border: '2px solid #292929',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              background: config.pwa.backgroundColor,
              borderRadius: '28px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              {/* Status bar */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '12px 20px 6px',
                fontSize: '11px',
                color: '#fff',
                opacity: 0.8
              }}>
                <span>9:41</span>
                <span>📶 🔋</span>
              </div>

              {/* App header */}
              <div style={{
                padding: '16px 20px',
                background: `linear-gradient(135deg, ${config.pwa.themeColor}, ${theme.accent})`
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 800
                  }}>
                    {config.pwa.shortName.charAt(0)}
                  </div>
                  <div>
                    <div style={{ color: '#fff', fontSize: '13px', fontWeight: 700 }}>{appName}</div>
                    <div style={{ color: '#fff', opacity: 0.7, fontSize: '10px' }}>{config.business.city}</div>
                  </div>
                </div>
                <button style={{
                  width: '100%',
                  padding: '10px',
                  background: 'rgba(255,255,255,0.2)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: 600
                }}>
                  📅 Book Now
                </button>
              </div>

              {/* App body */}
              <div style={{ padding: '16px' }}>
                <div style={{ color: '#fff', fontSize: '11px', fontWeight: 700, marginBottom: '8px', opacity: 0.6 }}>POPULAR SERVICES</div>
                {config.services.slice(0, 3).map((s) => (
                  <div key={s.name} style={{
                    padding: '10px',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '8px',
                    marginBottom: '8px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <div style={{ color: '#fff', fontSize: '11px', fontWeight: 600 }}>{s.name}</div>
                      <div style={{ color: '#fff', opacity: 0.5, fontSize: '9px' }}>{s.duration}</div>
                    </div>
                    <div style={{ color: theme.accent, fontSize: '11px', fontWeight: 700 }}>{s.price}</div>
                  </div>
                ))}

                <div style={{ color: '#fff', fontSize: '11px', fontWeight: 700, margin: '16px 0 8px', opacity: 0.6 }}>QUICK ACTIONS</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <div style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '20px' }}>💬</div>
                    <div style={{ color: '#fff', fontSize: '10px', marginTop: '4px' }}>WhatsApp</div>
                  </div>
                  <div style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '20px' }}>📞</div>
                    <div style={{ color: '#fff', fontSize: '10px', marginTop: '4px' }}>Call</div>
                  </div>
                </div>
              </div>

              {/* Bottom nav */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'rgba(0,0,0,0.4)',
                backdropFilter: 'blur(12px)',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                justifyContent: 'space-around',
                padding: '10px 0'
              }}>
                {['🏠', '📅', '💬', '👤'].map((icon, i) => (
                  <div key={i} style={{
                    fontSize: '18px',
                    opacity: i === 0 ? 1 : 0.5,
                    borderBottom: i === 0 ? `2px solid ${theme.accent}` : '2px solid transparent',
                    paddingBottom: '4px'
                  }}>
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Manifest preview */}
        <div>
          <h3 style={{ color: '#F5F5F5', fontSize: '14px', fontWeight: 700, marginBottom: '16px' }}>
            manifest.json Preview
          </h3>
          <div style={{
            background: '#0A0A0A',
            borderRadius: '10px',
            border: '1px solid #292929',
            padding: '16px',
            fontFamily: 'monospace',
            fontSize: '11px',
            color: '#A3A3A3',
            maxHeight: '400px',
            overflow: 'auto',
            whiteSpace: 'pre-wrap',
            lineHeight: 1.6
          }}>
            {JSON.stringify(manifest, null, 2)}
          </div>

          <div style={{ marginTop: '20px' }}>
            <h3 style={{ color: '#F5F5F5', fontSize: '14px', fontWeight: 700, marginBottom: '12px' }}>
              PWA Checklist
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: 'Valid manifest.json', done: true },
                { label: 'Service worker registered', done: true },
                { label: 'HTTPS (Vercel)', done: true },
                { label: 'Icons (192px + 512px)', done: true },
                { label: 'Standalone display mode', done: true },
                { label: 'Offline fallback page', done: true },
                { label: 'Apple touch icon', done: true },
                { label: 'Theme color meta tag', done: true }
              ].map((item) => (
                <div key={item.label} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '8px 12px',
                  background: '#151515',
                  borderRadius: '6px',
                  fontSize: '12px'
                }}>
                  <span style={{ color: '#10B981' }}>✓</span>
                  <span style={{ color: '#A3A3A3' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
