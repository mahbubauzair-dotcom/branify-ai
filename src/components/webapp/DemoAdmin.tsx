import React, { useState } from 'react';
import { CategoryConfig, AdminModuleId, Theme } from '../../data/webapp/types';

interface DemoAdminProps {
  config: CategoryConfig;
  customization?: {
    businessName?: string;
    primaryColor?: string;
  };
}

/**
 * Universal demo admin dashboard renderer.
 * Renders modules based on the category config's `adminModules` array.
 * Each category gets the same admin shell but the data is category-specific.
 */
export const DemoAdmin: React.FC<DemoAdminProps> = ({ config, customization }) => {
  const [activeModule, setActiveModule] = useState<AdminModuleId>('overview');

  const theme: Theme = {
    ...config.theme,
    primary: customization?.primaryColor || config.theme.primary
  };

  const businessName = customization?.businessName || config.business.name;
  const { admin, adminModules, admin: { metrics, appointments, customers, recentActivity, staff, services, revenueChart, bookingsChart } } = config;

  const moduleLabels: Record<AdminModuleId, string> = {
    overview: 'Overview',
    analytics: 'Analytics',
    appointments: config.id === 'restaurants-cafes' ? 'Reservations' : 'Appointments',
    customers: 'Customers',
    services: config.id === 'restaurants-cafes' ? 'Menu' : config.id === 'fitness-gyms' ? 'Programs' : 'Services',
    staff: config.id === 'pet-grooming-boarding' ? 'Pets & Staff' : 'Staff',
    reviews: 'Reviews',
    messages: 'Messages',
    gallery: 'Gallery',
    offers: 'Offers',
    settings: 'Settings',
    profile: 'Business Profile',
    hours: 'Opening Hours',
    whatsapp: 'WhatsApp Config',
    'pwa-settings': 'PWA Settings'
  };

  const moduleIcons: Record<AdminModuleId, string> = {
    overview: '📊', analytics: '📈', appointments: '📅', customers: '👥',
    services: '🛠️', staff: '👷', reviews: '⭐', messages: '💬',
    gallery: '🖼️', offers: '🎁', settings: '⚙️', profile: '🏢',
    hours: '🕒', whatsapp: '💬', 'pwa-settings': '📱'
  };

  return (
    <div style={{
      minHeight: '100%',
      background: '#0A0A0A',
      color: '#F5F5F5',
      fontFamily: "'Inter', sans-serif",
      display: 'flex'
    }}>
      {/* Sidebar */}
      <aside style={{
        width: '260px',
        background: '#0F0F0F',
        borderRight: '1px solid #292929',
        padding: '24px 16px',
        flexShrink: 0,
        overflowY: 'auto'
      }} className="admin-sidebar">
        <div style={{ marginBottom: '32px', padding: '0 8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: theme.primary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 800,
              fontSize: '15px'
            }}>
              {businessName.charAt(0)}
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#F5F5F5' }}>{businessName}</div>
              <div style={{ fontSize: '10px', color: '#737373' }}>Demo Admin</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {adminModules.map((mod) => (
            <button
              key={mod}
              onClick={() => setActiveModule(mod)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 12px',
                background: activeModule === mod ? `${theme.primary}22` : 'transparent',
                border: 'none',
                borderRadius: '8px',
                color: activeModule === mod ? theme.primary : '#A3A3A3',
                fontSize: '13px',
                fontWeight: activeModule === mod ? 600 : 500,
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.15s'
              }}
            >
              <span style={{ fontSize: '14px' }}>{moduleIcons[mod]}</span>
              {moduleLabels[mod]}
            </button>
          ))}
        </div>

        <div style={{
          marginTop: '32px',
          padding: '12px',
          background: 'rgba(255,255,255,0.04)',
          borderRadius: '10px',
          fontSize: '11px',
          color: '#737373',
          textAlign: 'center'
        }}>
          <div style={{ fontWeight: 600, color: '#A3A3A3', marginBottom: '4px' }}>DEMO MODE</div>
          <div>Preview only. No real data is processed.</div>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, overflowY: 'auto', padding: '32px' }} className="admin-main">
        {/* Top bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '32px'
        }}>
          <div>
            <h1 style={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#F5F5F5',
              marginBottom: '4px'
            }}>
              {moduleLabels[activeModule]}
            </h1>
            <div style={{ fontSize: '13px', color: '#737373' }}>
              {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{
              padding: '8px 14px',
              background: '#151515',
              borderRadius: '8px',
              border: '1px solid #292929',
              fontSize: '13px',
              color: '#A3A3A3'
            }}>
              🔔 <span style={{ color: theme.primary, fontWeight: 600 }}>3</span>
            </div>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${theme.primary}, ${theme.accent})`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 700,
              fontSize: '13px'
            }}>
              {config.team[0]?.avatarInitials || 'A'}
            </div>
          </div>
        </div>

        {/* Module content */}
        {activeModule === 'overview' && <OverviewModule metrics={metrics} recentActivity={recentActivity} theme={theme} appointments={appointments} />}
        {activeModule === 'analytics' && <AnalyticsModule revenueChart={revenueChart} bookingsChart={bookingsChart} theme={theme} />}
        {activeModule === 'appointments' && <AppointmentsModule appointments={appointments} theme={theme} />}
        {activeModule === 'customers' && <CustomersModule customers={customers} theme={theme} />}
        {activeModule === 'services' && <ServicesModule services={services} theme={theme} />}
        {activeModule === 'staff' && <StaffModule staff={staff} theme={theme} />}
        {activeModule === 'reviews' && <ReviewsModule config={config} theme={theme} />}
        {activeModule === 'messages' && <MessagesModule theme={theme} />}
        {activeModule === 'gallery' && <GalleryModule config={config} theme={theme} />}
        {activeModule === 'offers' && <OffersModule theme={theme} />}
        {activeModule === 'settings' && <SettingsModule theme={theme} />}
        {activeModule === 'profile' && <ProfileModule config={config} theme={theme} businessName={businessName} />}
        {activeModule === 'hours' && <HoursModule config={config} theme={theme} />}
        {activeModule === 'whatsapp' && <WhatsAppModule config={config} theme={theme} />}
        {activeModule === 'pwa-settings' && <PwaSettingsModule config={config} theme={theme} />}
      </main>
    </div>
  );
};

// ============================================================================
// ADMIN MODULE COMPONENTS
// ============================================================================

const OverviewModule: React.FC<any> = ({ metrics, recentActivity, appointments, theme }) => (
  <div>
    {/* Metrics */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '16px',
      marginBottom: '32px'
    }}>
      {metrics.map((m: any) => (
        <div key={m.label} style={{
          padding: '20px',
          background: '#151515',
          borderRadius: '14px',
          border: '1px solid #292929'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <span style={{ fontSize: '20px' }}>{m.icon === 'calendar' ? '📅' : m.icon === 'trending-up' ? '📈' : m.icon === 'users' ? '👥' : m.icon === 'star' ? '⭐' : m.icon === 'receipt' ? '🧾' : m.icon === 'car' ? '🚗' : m.icon === 'package' ? '📦' : m.icon === 'check-square' ? '✅' : m.icon === 'film' ? '🎬' : m.icon === 'mail' ? '📧' : m.icon === 'paw' ? '🐾' : m.icon === 'graduation' ? '🎓' : m.icon === 'repeat' ? '🔁' : '📊'}</span>
            {m.delta && (
              <span style={{
                fontSize: '11px',
                fontWeight: 700,
                padding: '2px 8px',
                borderRadius: '999px',
                background: m.positive ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)',
                color: m.positive ? '#10B981' : '#EF4444'
              }}>
                {m.delta}
              </span>
            )}
          </div>
          <div style={{ fontSize: '24px', fontWeight: 800, color: '#F5F5F5', marginBottom: '4px' }}>
            {m.value}
          </div>
          <div style={{ fontSize: '12px', color: '#737373', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {m.label}
          </div>
        </div>
      ))}
    </div>

    {/* Two-column: Upcoming appointments + Recent activity */}
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }} className="admin-grid">
      <div style={{
        background: '#151515',
        borderRadius: '14px',
        border: '1px solid #292929',
        overflow: 'hidden'
      }}>
        <div style={{
          padding: '16px 20px',
          borderBottom: '1px solid #292929',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#F5F5F5' }}>Upcoming Appointments</h3>
          <button style={{
            padding: '4px 10px',
            background: theme.primary,
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            fontSize: '11px',
            fontWeight: 600,
            cursor: 'pointer'
          }}>
            + New
          </button>
        </div>
        <div>
          {appointments.slice(0, 5).map((apt: any) => (
            <div key={apt.id} style={{
              padding: '14px 20px',
              borderBottom: '1px solid #1F1F1F',
              display: 'flex',
              alignItems: 'center',
              gap: '14px'
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${theme.primary}, ${theme.accent})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 700,
                fontSize: '12px',
                flexShrink: 0
              }}>
                {apt.initials}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#F5F5F5', marginBottom: '2px' }}>
                  {apt.customerName}
                </div>
                <div style={{ fontSize: '11px', color: '#737373', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {apt.service}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '12px', color: '#A3A3A3', fontWeight: 600 }}>{apt.time}</div>
                <div style={{ fontSize: '10px', color: '#737373' }}>{apt.date}</div>
              </div>
              <span style={{
                padding: '3px 8px',
                borderRadius: '6px',
                fontSize: '10px',
                fontWeight: 700,
                textTransform: 'uppercase',
                background: apt.status === 'confirmed' ? 'rgba(16,185,129,0.15)' :
                  apt.status === 'pending' ? 'rgba(245,158,11,0.15)' :
                  apt.status === 'completed' ? 'rgba(59,130,246,0.15)' :
                  apt.status === 'in-progress' ? 'rgba(168,85,247,0.15)' :
                  'rgba(239,68,68,0.15)',
                color: apt.status === 'confirmed' ? '#10B981' :
                  apt.status === 'pending' ? '#F59E0B' :
                  apt.status === 'completed' ? '#3B82F6' :
                  apt.status === 'in-progress' ? '#A855F7' :
                  '#EF4444'
              }}>
                {apt.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        background: '#151515',
        borderRadius: '14px',
        border: '1px solid #292929',
        overflow: 'hidden'
      }}>
        <div style={{
          padding: '16px 20px',
          borderBottom: '1px solid #292929'
        }}>
          <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#F5F5F5' }}>Recent Activity</h3>
        </div>
        <div style={{ padding: '8px' }}>
          {recentActivity.map((a: any, i: number) => (
            <div key={i} style={{
              padding: '10px 12px',
              borderRadius: '8px',
              display: 'flex',
              gap: '10px',
              alignItems: 'flex-start'
            }}>
              <div style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: a.type === 'success' ? '#10B981' : a.type === 'warning' ? '#F59E0B' : '#3B82F6',
                marginTop: '6px',
                flexShrink: 0
              }} />
              <div>
                <div style={{ fontSize: '12px', color: '#D4D4D4', lineHeight: 1.4 }}>{a.text}</div>
                <div style={{ fontSize: '10px', color: '#737373', marginTop: '2px' }}>{a.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const AnalyticsModule: React.FC<any> = ({ revenueChart, bookingsChart, theme }) => {
  const maxRev = Math.max(...revenueChart.map((p: any) => p.value));
  const maxBook = Math.max(...bookingsChart.map((p: any) => p.value));

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="admin-grid">
      <div style={{ background: '#151515', borderRadius: '14px', border: '1px solid #292929', padding: '24px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#F5F5F5', marginBottom: '4px' }}>Revenue (This Week)</h3>
        <div style={{ fontSize: '28px', fontWeight: 800, color: theme.primary, marginBottom: '20px' }}>
          AED {revenueChart.reduce((s: number, p: any) => s + p.value, 0).toLocaleString()}
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '160px' }}>
          {revenueChart.map((p: any) => (
            <div key={p.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <div style={{
                width: '100%',
                background: `linear-gradient(to top, ${theme.primary}, ${theme.accent})`,
                borderRadius: '6px 6px 0 0',
                height: `${(p.value / maxRev) * 100}%`,
                minHeight: '4px',
                transition: 'height 0.3s'
              }} />
              <span style={{ fontSize: '10px', color: '#737373' }}>{p.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: '#151515', borderRadius: '14px', border: '1px solid #292929', padding: '24px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#F5F5F5', marginBottom: '4px' }}>Bookings (This Week)</h3>
        <div style={{ fontSize: '28px', fontWeight: 800, color: theme.accent, marginBottom: '20px' }}>
          {bookingsChart.reduce((s: number, p: any) => s + p.value, 0)}
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '160px' }}>
          {bookingsChart.map((p: any) => (
            <div key={p.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <div style={{
                width: '100%',
                background: `linear-gradient(to top, ${theme.accent}, ${theme.primary})`,
                borderRadius: '6px 6px 0 0',
                height: `${(p.value / maxBook) * 100}%`,
                minHeight: '4px'
              }} />
              <span style={{ fontSize: '10px', color: '#737373' }}>{p.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        gridColumn: '1 / -1',
        background: '#151515',
        borderRadius: '14px',
        border: '1px solid #292929',
        padding: '24px'
      }}>
        <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#F5F5F5', marginBottom: '16px' }}>Performance Insights</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
          {[
            { label: 'Conversion Rate', value: '12.4%', trend: '+2.1%' },
            { label: 'Avg. Order Value', value: 'AED 320', trend: '+8%' },
            { label: 'Repeat Customer Rate', value: '47%', trend: '+5%' },
            { label: 'Customer Lifetime Value', value: 'AED 2,840', trend: '+12%' }
          ].map((insight) => (
            <div key={insight.label} style={{ padding: '16px', background: '#0A0A0A', borderRadius: '10px' }}>
              <div style={{ fontSize: '11px', color: '#737373', marginBottom: '6px' }}>{insight.label}</div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#F5F5F5', marginBottom: '4px' }}>{insight.value}</div>
              <div style={{ fontSize: '11px', color: '#10B981', fontWeight: 600 }}>↑ {insight.trend}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AppointmentsModule: React.FC<any> = ({ appointments, theme }) => {
  const [filter, setFilter] = useState('all');
  const statuses = ['all', 'confirmed', 'pending', 'in-progress', 'completed'];
  const filtered = filter === 'all' ? appointments : appointments.filter((a: any) => a.status === filter);

  return (
    <div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {statuses.map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            style={{
              padding: '6px 14px',
              background: filter === s ? theme.primary : '#151515',
              color: filter === s ? '#fff' : '#A3A3A3',
              border: '1px solid #292929',
              borderRadius: '999px',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              textTransform: 'capitalize'
            }}
          >
            {s} {filter === s && `(${filtered.length})`}
          </button>
        ))}
      </div>

      <div style={{ background: '#151515', borderRadius: '14px', border: '1px solid #292929', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #292929' }}>
              {['ID', 'Customer', 'Service', 'Staff', 'Date', 'Time', 'Amount', 'Status'].map((h) => (
                <th key={h} style={{ padding: '14px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 700, color: '#737373', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((apt: any) => (
              <tr key={apt.id} style={{ borderBottom: '1px solid #1F1F1F' }}>
                <td style={{ padding: '12px 16px', fontSize: '12px', color: '#737373', fontFamily: 'monospace' }}>{apt.id}</td>
                <td style={{ padding: '12px 16px', fontSize: '13px', color: '#F5F5F5', fontWeight: 500 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: `linear-gradient(135deg, ${theme.primary}, ${theme.accent})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '9px', fontWeight: 700 }}>{apt.initials}</div>
                    {apt.customerName}
                  </div>
                </td>
                <td style={{ padding: '12px 16px', fontSize: '12px', color: '#A3A3A3' }}>{apt.service}</td>
                <td style={{ padding: '12px 16px', fontSize: '12px', color: '#A3A3A3' }}>{apt.staff}</td>
                <td style={{ padding: '12px 16px', fontSize: '12px', color: '#A3A3A3' }}>{apt.date}</td>
                <td style={{ padding: '12px 16px', fontSize: '12px', color: '#A3A3A3' }}>{apt.time}</td>
                <td style={{ padding: '12px 16px', fontSize: '12px', color: theme.accent, fontWeight: 700 }}>{apt.amount}</td>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{
                    padding: '3px 8px',
                    borderRadius: '6px',
                    fontSize: '10px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    background: apt.status === 'confirmed' ? 'rgba(16,185,129,0.15)' :
                      apt.status === 'pending' ? 'rgba(245,158,11,0.15)' :
                      apt.status === 'completed' ? 'rgba(59,130,246,0.15)' :
                      apt.status === 'in-progress' ? 'rgba(168,85,247,0.15)' :
                      'rgba(239,68,68,0.15)',
                    color: apt.status === 'confirmed' ? '#10B981' :
                      apt.status === 'pending' ? '#F59E0B' :
                      apt.status === 'completed' ? '#3B82F6' :
                      apt.status === 'in-progress' ? '#A855F7' :
                      '#EF4444'
                  }}>
                    {apt.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const CustomersModule: React.FC<any> = ({ customers, theme }) => (
  <div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '24px' }}>
      {[
        { label: 'Total Customers', value: customers.length, icon: '👥' },
        { label: 'VIP Customers', value: customers.filter((c: any) => c.status === 'vip').length, icon: '⭐' },
        { label: 'New This Month', value: customers.filter((c: any) => c.status === 'new').length, icon: '✨' },
        { label: 'Active', value: customers.filter((c: any) => c.status === 'active').length, icon: '✅' }
      ].map((s) => (
        <div key={s.label} style={{ padding: '16px', background: '#151515', borderRadius: '10px', border: '1px solid #292929' }}>
          <div style={{ fontSize: '18px', marginBottom: '6px' }}>{s.icon}</div>
          <div style={{ fontSize: '22px', fontWeight: 800, color: '#F5F5F5' }}>{s.value}</div>
          <div style={{ fontSize: '11px', color: '#737373' }}>{s.label}</div>
        </div>
      ))}
    </div>

    <div style={{ background: '#151515', borderRadius: '14px', border: '1px solid #292929', overflow: 'hidden' }}>
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #292929', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#F5F5F5' }}>Customer Directory</h3>
        <input type="text" placeholder="Search..." style={{ padding: '6px 12px', background: '#0A0A0A', border: '1px solid #292929', borderRadius: '6px', color: '#F5F5F5', fontSize: '12px' }} />
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #292929' }}>
            {['Customer', 'Contact', 'Bookings', 'Total Spent', 'Last Visit', 'Status'].map((h) => (
              <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 700, color: '#737373', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {customers.map((c: any) => (
            <tr key={c.id} style={{ borderBottom: '1px solid #1F1F1F' }}>
              <td style={{ padding: '12px 16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: `linear-gradient(135deg, ${theme.primary}, ${theme.accent})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '11px', fontWeight: 700 }}>{c.initials}</div>
                  <div>
                    <div style={{ fontSize: '13px', color: '#F5F5F5', fontWeight: 600 }}>{c.name}</div>
                    <div style={{ fontSize: '10px', color: '#737373' }}>{c.id}</div>
                  </div>
                </div>
              </td>
              <td style={{ padding: '12px 16px', fontSize: '12px', color: '#A3A3A3' }}>
                <div>{c.email}</div>
                <div style={{ fontSize: '11px', opacity: 0.7 }}>{c.phone}</div>
              </td>
              <td style={{ padding: '12px 16px', fontSize: '13px', color: '#F5F5F5', fontWeight: 600 }}>{c.totalBookings}</td>
              <td style={{ padding: '12px 16px', fontSize: '13px', color: theme.accent, fontWeight: 700 }}>{c.totalSpent}</td>
              <td style={{ padding: '12px 16px', fontSize: '12px', color: '#A3A3A3' }}>{c.lastVisit}</td>
              <td style={{ padding: '12px 16px' }}>
                <span style={{
                  padding: '3px 8px',
                  borderRadius: '6px',
                  fontSize: '10px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  background: c.status === 'vip' ? 'rgba(212,175,55,0.15)' :
                    c.status === 'new' ? 'rgba(168,85,247,0.15)' :
                    c.status === 'active' ? 'rgba(16,185,129,0.15)' :
                    'rgba(115,115,115,0.15)',
                  color: c.status === 'vip' ? '#D4AF37' :
                    c.status === 'new' ? '#A855F7' :
                    c.status === 'active' ? '#10B981' :
                    '#737373'
                }}>
                  {c.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ServicesModule: React.FC<any> = ({ services, theme }) => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
      <p style={{ fontSize: '13px', color: '#A3A3A3' }}>Manage your service catalog. {services.length} services active.</p>
      <button style={{ padding: '8px 16px', background: theme.primary, color: '#fff', border: 'none', borderRadius: '8px', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>+ Add Service</button>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
      {services.map((s: any) => (
        <div key={s.name} style={{ padding: '20px', background: '#151515', borderRadius: '12px', border: '1px solid #292929' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#F5F5F5' }}>{s.name}</h4>
            {s.popular && <span style={{ padding: '2px 8px', background: 'rgba(212,175,55,0.15)', color: '#D4AF37', borderRadius: '6px', fontSize: '10px', fontWeight: 700 }}>POPULAR</span>}
          </div>
          <p style={{ fontSize: '12px', color: '#A3A3A3', marginBottom: '12px', lineHeight: 1.5 }}>{s.description}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid #292929' }}>
            <div>
              <div style={{ fontSize: '16px', fontWeight: 800, color: theme.accent }}>{s.price}</div>
              <div style={{ fontSize: '10px', color: '#737373' }}>{s.duration}</div>
            </div>
            <div style={{ display: 'flex', gap: '6px' }}>
              <button style={{ padding: '4px 10px', background: '#0A0A0A', color: '#A3A3A3', border: '1px solid #292929', borderRadius: '6px', fontSize: '11px', cursor: 'pointer' }}>Edit</button>
              <button style={{ padding: '4px 10px', background: 'rgba(239,68,68,0.1)', color: '#EF4444', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '6px', fontSize: '11px', cursor: 'pointer' }}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const StaffModule: React.FC<any> = ({ staff, theme }) => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
      <p style={{ fontSize: '13px', color: '#A3A3A3' }}>{staff.length} team members</p>
      <button style={{ padding: '8px 16px', background: theme.primary, color: '#fff', border: 'none', borderRadius: '8px', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>+ Add Staff</button>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
      {staff.map((m: any) => (
        <div key={m.name} style={{ padding: '24px', background: '#151515', borderRadius: '14px', border: '1px solid #292929', textAlign: 'center' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: `linear-gradient(135deg, ${theme.primary}, ${theme.accent})`, margin: '0 auto 14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '22px', fontWeight: 800 }}>{m.avatarInitials}</div>
          <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#F5F5F5', marginBottom: '4px' }}>{m.name}</h4>
          <div style={{ fontSize: '12px', color: theme.accent, fontWeight: 600, marginBottom: '8px' }}>{m.role}</div>
          <div style={{ display: 'inline-block', padding: '3px 8px', background: 'rgba(212,175,55,0.15)', color: '#D4AF37', borderRadius: '6px', fontSize: '11px', marginBottom: '10px' }}>★ {m.rating} • {m.specialty}</div>
          <p style={{ fontSize: '12px', color: '#A3A3A3', lineHeight: 1.5 }}>{m.bio}</p>
        </div>
      ))}
    </div>
  </div>
);

const ReviewsModule: React.FC<any> = ({ config, theme }) => (
  <div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '24px' }}>
      {[
        { label: 'Avg Rating', value: '4.93', icon: '⭐' },
        { label: 'Total Reviews', value: '1,840', icon: '💬' },
        { label: '5-Star', value: '1,612', icon: '🌟' },
        { label: 'Response Rate', value: '98%', icon: '✅' }
      ].map((s) => (
        <div key={s.label} style={{ padding: '16px', background: '#151515', borderRadius: '10px', border: '1px solid #292929' }}>
          <div style={{ fontSize: '18px', marginBottom: '6px' }}>{s.icon}</div>
          <div style={{ fontSize: '22px', fontWeight: 800, color: '#F5F5F5' }}>{s.value}</div>
          <div style={{ fontSize: '11px', color: '#737373' }}>{s.label}</div>
        </div>
      ))}
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {config.testimonials.map((t: any, i: number) => (
        <div key={i} style={{ padding: '20px', background: '#151515', borderRadius: '12px', border: '1px solid #292929' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: `linear-gradient(135deg, ${theme.primary}, ${theme.accent})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>{t.name.charAt(0)}</div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#F5F5F5' }}>{t.name}</div>
                <div style={{ fontSize: '11px', color: '#737373' }}>{t.location} • {t.date}</div>
              </div>
            </div>
            <div style={{ color: '#D4AF37', fontSize: '13px' }}>{'★'.repeat(t.rating)}</div>
          </div>
          <p style={{ fontSize: '13px', color: '#A3A3A3', lineHeight: 1.6, fontStyle: 'italic' }}>"{t.text}"</p>
          {t.service && <div style={{ marginTop: '10px', fontSize: '11px', color: theme.accent }}>Service: {t.service}</div>}
        </div>
      ))}
    </div>
  </div>
);

const MessagesModule: React.FC<any> = ({ theme }) => {
  const messages = [
    { from: 'Olivia Bennett', text: 'Hi! Can I reschedule my appointment to next Tuesday?', time: '2 min ago', unread: true },
    { from: 'James Whitfield', text: 'Thank you for the amazing service today!', time: '1 hour ago', unread: true },
    { from: 'Aisha Al Mansoori', text: 'Do you have any availability this weekend?', time: '3 hours ago', unread: false },
    { from: 'Sarah Goldberg', text: 'Quick question about the membership benefits', time: '5 hours ago', unread: false },
    { from: 'Yusuf Rahman', text: 'Loved the experience! Will recommend to friends.', time: '1 day ago', unread: false }
  ];

  return (
    <div style={{ background: '#151515', borderRadius: '14px', border: '1px solid #292929', overflow: 'hidden' }}>
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #292929', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#F5F5F5' }}>Inbox</h3>
        <span style={{ padding: '3px 10px', background: theme.primary, color: '#fff', borderRadius: '999px', fontSize: '11px', fontWeight: 700 }}>2 unread</span>
      </div>
      <div>
        {messages.map((m, i) => (
          <div key={i} style={{ padding: '14px 20px', borderBottom: '1px solid #1F1F1F', display: 'flex', gap: '12px', alignItems: 'flex-start', background: m.unread ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: m.unread ? theme.accent : 'transparent', marginTop: '6px', flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '13px', fontWeight: m.unread ? 700 : 500, color: '#F5F5F5' }}>{m.from}</span>
                <span style={{ fontSize: '10px', color: '#737373' }}>{m.time}</span>
              </div>
              <p style={{ fontSize: '12px', color: '#A3A3A3', lineHeight: 1.4 }}>{m.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const GalleryModule: React.FC<any> = ({ config, theme }) => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
      <p style={{ fontSize: '13px', color: '#A3A3A3' }}>{config.gallery.length} items in gallery</p>
      <button style={{ padding: '8px 16px', background: theme.primary, color: '#fff', border: 'none', borderRadius: '8px', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>+ Upload</button>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
      {config.gallery.map((g: any) => (
        <div key={g.title} style={{
          aspectRatio: '4/3',
          borderRadius: '10px',
          background: g.gradient,
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer'
        }}>
          <div style={{ position: 'absolute', inset: 0, padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent 60%)' }}>
            <div style={{ color: '#fff', fontSize: '13px', fontWeight: 700 }}>{g.title}</div>
            <div style={{ color: '#fff', opacity: 0.7, fontSize: '11px' }}>{g.caption}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const OffersModule: React.FC<any> = ({ theme }) => {
  const offers = [
    { name: 'New Client 20% Off', code: 'WELCOME20', uses: 47, expiry: 'Dec 31, 2026', status: 'active' },
    { name: 'Ramadan Special - 15% Off', code: 'RAMADAN15', uses: 128, expiry: 'Mar 30, 2026', status: 'active' },
    { name: 'Bring a Friend - Both 10% Off', code: 'FRIEND10', uses: 22, expiry: 'No expiry', status: 'active' },
    { name: 'Summer Promo - Free Upgrade', code: 'SUMMER', uses: 89, expiry: 'Sep 1, 2026', status: 'expired' }
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <p style={{ fontSize: '13px', color: '#A3A3A3' }}>{offers.length} promotional offers</p>
        <button style={{ padding: '8px 16px', background: theme.primary, color: '#fff', border: 'none', borderRadius: '8px', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>+ Create Offer</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {offers.map((o) => (
          <div key={o.code} style={{ padding: '16px 20px', background: '#151515', borderRadius: '12px', border: '1px solid #292929', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#F5F5F5', marginBottom: '4px' }}>{o.name}</div>
              <div style={{ display: 'flex', gap: '12px', fontSize: '11px', color: '#737373' }}>
                <span>Code: <strong style={{ color: theme.accent, fontFamily: 'monospace' }}>{o.code}</strong></span>
                <span>•</span>
                <span>{o.uses} uses</span>
                <span>•</span>
                <span>Expires: {o.expiry}</span>
              </div>
            </div>
            <span style={{
              padding: '4px 10px',
              borderRadius: '6px',
              fontSize: '10px',
              fontWeight: 700,
              textTransform: 'uppercase',
              background: o.status === 'active' ? 'rgba(16,185,129,0.15)' : 'rgba(115,115,115,0.15)',
              color: o.status === 'active' ? '#10B981' : '#737373'
            }}>
              {o.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SettingsModule: React.FC<any> = ({ theme }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="admin-grid">
    {[
      { title: 'Notifications', items: ['Email notifications', 'WhatsApp alerts', 'SMS reminders', 'Push notifications'] },
      { title: 'Booking Rules', items: ['Require deposit', 'Auto-confirm bookings', 'Allow online reschedule', 'Cancellation window (hours)'] },
      { title: 'Payments', items: ['Accept card payments', 'Accept cash', 'Auto-send invoices', 'Late payment fees'] },
      { title: 'Localization', items: ['Currency (AED)', 'Time zone (GST)', 'Language (English)', 'Date format'] }
    ].map((section) => (
      <div key={section.title} style={{ padding: '24px', background: '#151515', borderRadius: '14px', border: '1px solid #292929' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#F5F5F5', marginBottom: '16px' }}>{section.title}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {section.items.map((item, i) => (
            <label key={item} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: '#A3A3A3' }}>
              {item}
              <div style={{
                width: '36px',
                height: '20px',
                borderRadius: '999px',
                background: i % 2 === 0 ? theme.primary : '#292929',
                position: 'relative',
                cursor: 'pointer'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '2px',
                  left: i % 2 === 0 ? '18px' : '2px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: '#fff',
                  transition: 'left 0.2s'
                }} />
              </div>
            </label>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const ProfileModule: React.FC<any> = ({ config, theme, businessName }) => (
  <div style={{ maxWidth: '700px' }}>
    <div style={{ padding: '24px', background: '#151515', borderRadius: '14px', border: '1px solid #292929' }}>
      <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#F5F5F5', marginBottom: '20px' }}>Business Profile</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="admin-grid">
        {[
          { label: 'Business Name', value: businessName },
          { label: 'Tagline', value: config.business.tagline },
          { label: 'Phone', value: config.business.phone },
          { label: 'WhatsApp', value: config.business.whatsapp },
          { label: 'Email', value: config.business.email },
          { label: 'Website', value: config.business.website },
          { label: 'City', value: config.business.city },
          { label: 'Country', value: config.business.country },
          { label: 'Address', value: config.business.address, full: true },
          { label: 'Description', value: config.business.description, full: true, textarea: true }
        ].map((field) => (
          <div key={field.label} style={{ gridColumn: field.full ? '1 / -1' : 'auto' }}>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#737373', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{field.label}</label>
            {field.textarea ? (
              <textarea defaultValue={field.value} rows={3} style={{ width: '100%', padding: '10px 12px', background: '#0A0A0A', color: '#F5F5F5', border: '1px solid #292929', borderRadius: '8px', fontSize: '13px', resize: 'vertical', boxSizing: 'border-box' }} />
            ) : (
              <input type="text" defaultValue={field.value} style={{ width: '100%', padding: '10px 12px', background: '#0A0A0A', color: '#F5F5F5', border: '1px solid #292929', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box' }} />
            )}
          </div>
        ))}
      </div>
      <button style={{ marginTop: '20px', padding: '10px 24px', background: theme.primary, color: '#fff', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>Save Changes</button>
    </div>
  </div>
);

const HoursModule: React.FC<any> = ({ config, theme }) => (
  <div style={{ maxWidth: '600px' }}>
    <div style={{ padding: '24px', background: '#151515', borderRadius: '14px', border: '1px solid #292929' }}>
      <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#F5F5F5', marginBottom: '20px' }}>Opening Hours</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {config.business.hours.map((h: any) => (
          <div key={h.day} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: '#0A0A0A', borderRadius: '8px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#F5F5F5' }}>{h.day}</span>
            <span style={{ fontSize: '13px', color: '#A3A3A3' }}>{h.time}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(16,185,129,0.08)', borderRadius: '10px', border: '1px solid rgba(16,185,129,0.3)' }}>
        <div style={{ fontSize: '12px', fontWeight: 700, color: '#10B981', marginBottom: '4px' }}>✓ Currently Open</div>
        <div style={{ fontSize: '11px', color: '#A3A3A3' }}>Auto-detected based on current time and timezone (GST)</div>
      </div>
    </div>
  </div>
);

const WhatsAppModule: React.FC<any> = ({ config, theme }) => (
  <div style={{ maxWidth: '600px' }}>
    <div style={{ padding: '24px', background: '#151515', borderRadius: '14px', border: '1px solid #292929' }}>
      <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#F5F5F5', marginBottom: '20px' }}>WhatsApp Configuration</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#737373', marginBottom: '6px', textTransform: 'uppercase' }}>WhatsApp Number</label>
          <input type="text" defaultValue={config.business.whatsapp} style={{ width: '100%', padding: '10px 12px', background: '#0A0A0A', color: '#F5F5F5', border: '1px solid #292929', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box' }} />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#737373', marginBottom: '6px', textTransform: 'uppercase' }}>Default Message</label>
          <textarea defaultValue={config.whatsappMessage} rows={3} style={{ width: '100%', padding: '10px 12px', background: '#0A0A0A', color: '#F5F5F5', border: '1px solid #292929', borderRadius: '8px', fontSize: '13px', resize: 'vertical', boxSizing: 'border-box' }} />
        </div>
        <div style={{ padding: '16px', background: '#0A0A0A', borderRadius: '10px' }}>
          <div style={{ fontSize: '12px', fontWeight: 600, color: '#10B981', marginBottom: '8px' }}>✓ Auto-reminders enabled</div>
          <div style={{ fontSize: '11px', color: '#A3A3A3', lineHeight: 1.5 }}>Customers receive WhatsApp confirmation immediately after booking, and a reminder 2 hours before their appointment.</div>
        </div>
      </div>
    </div>
  </div>
);

const PwaSettingsModule: React.FC<any> = ({ config, theme }) => (
  <div style={{ maxWidth: '600px' }}>
    <div style={{ padding: '24px', background: '#151515', borderRadius: '14px', border: '1px solid #292929' }}>
      <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#F5F5F5', marginBottom: '20px' }}>PWA Settings</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="admin-grid">
        <div>
          <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#737373', marginBottom: '6px' }}>App Name</label>
          <input type="text" defaultValue={config.pwa.appName} style={{ width: '100%', padding: '10px 12px', background: '#0A0A0A', color: '#F5F5F5', border: '1px solid #292929', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box' }} />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#737373', marginBottom: '6px' }}>Short Name</label>
          <input type="text" defaultValue={config.pwa.shortName} style={{ width: '100%', padding: '10px 12px', background: '#0A0A0A', color: '#F5F5F5', border: '1px solid #292929', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box' }} />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#737373', marginBottom: '6px' }}>Theme Color</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: config.pwa.themeColor }} />
            <input type="text" defaultValue={config.pwa.themeColor} style={{ flex: 1, padding: '10px 12px', background: '#0A0A0A', color: '#F5F5F5', border: '1px solid #292929', borderRadius: '8px', fontSize: '13px' }} />
          </div>
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#737373', marginBottom: '6px' }}>Background Color</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: config.pwa.backgroundColor }} />
            <input type="text" defaultValue={config.pwa.backgroundColor} style={{ flex: 1, padding: '10px 12px', background: '#0A0A0A', color: '#F5F5F5', border: '1px solid #292929', borderRadius: '8px', fontSize: '13px' }} />
          </div>
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#737373', marginBottom: '6px' }}>Description</label>
          <textarea defaultValue={config.pwa.description} rows={2} style={{ width: '100%', padding: '10px 12px', background: '#0A0A0A', color: '#F5F5F5', border: '1px solid #292929', borderRadius: '8px', fontSize: '13px', resize: 'vertical', boxSizing: 'border-box' }} />
        </div>
      </div>
      <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(16,185,129,0.08)', borderRadius: '10px', border: '1px solid rgba(16,185,129,0.3)' }}>
        <div style={{ fontSize: '12px', fontWeight: 700, color: '#10B981', marginBottom: '4px' }}>✓ PWA Enabled</div>
        <div style={{ fontSize: '11px', color: '#A3A3A3' }}>Manifest.json generated. Service worker registered. App is installable on iOS and Android.</div>
      </div>
    </div>
  </div>
);
