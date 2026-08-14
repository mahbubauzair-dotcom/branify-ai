import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { Topbar } from './components/layout/Topbar';
import { AIChatDrawer } from './components/layout/AIChatDrawer';
import { CommandPalette } from './components/layout/CommandPalette';
import { ProtectedRoute } from './components/auth/ProtectedRoute';

import { Login } from './pages/auth/Login';

// Integrated Templates (self-contained sub-apps)
import { GentsSalonTemplate } from './templates/gents-salon/GentsSalonTemplate';

// Main Workspace & Builder Pages
import { Dashboard } from './pages/dashboard/Dashboard';
import { AIAssistant } from './pages/ai/AIAssistant';
import { ProjectsList } from './pages/projects/ProjectsList';
import { LeadGenerator } from './pages/leads/LeadGenerator';
import { BusinessIntelligence } from './pages/businesses/BusinessIntelligence';
import { WebsiteBuilder } from './pages/build/WebsiteBuilder';
import { WebAppBuilder } from './pages/build/WebAppBuilder';
import { BrandStudio } from './pages/build/BrandStudio';
import { GenerationCenter } from './pages/generation/GenerationCenter';
import { Deployments } from './pages/operations/Deployments';
import { Analytics } from './pages/operations/Analytics';
import { Settings } from './pages/settings/Settings';
import { NotificationsPage } from './pages/utility/NotificationsPage';
import { HelpPage } from './pages/utility/HelpPage';

// Operational & Infrastructure Control Modules (Integrated into Owner Workspace)
import { AdminAIUsage } from './pages/admin/AdminAIUsage';
import { AdminAIModels } from './pages/admin/AdminAIModels';
import { AdminSystemHealth } from './pages/admin/AdminSystemHealth';
import { AdminSecurity } from './pages/admin/AdminSecurity';
import { AdminAuditLogs } from './pages/admin/AdminAuditLogs';

function MainLayout() {
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#080808] text-[#F5F5F5] overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <Topbar onOpenSearch={() => setIsSearchOpen(true)} onOpenAIChat={() => setIsAIChatOpen(true)} />
        <main className="flex-1">
          <Routes>
            {/* Core Workspace */}
            <Route path="/dashboard" element={<Dashboard onOpenAIChat={() => setIsAIChatOpen(true)} />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
            <Route path="/projects" element={<ProjectsList />} />
            <Route path="/projects/:id" element={<ProjectsList />} />

            {/* Discovery & Lead Radar (10 Categories) */}
            <Route path="/lead-generator" element={<LeadGenerator />} />
            <Route path="/lead-generator/search" element={<LeadGenerator />} />
            <Route path="/lead-generator/results" element={<LeadGenerator />} />
            <Route path="/lead-generator/leads/:id" element={<LeadGenerator />} />
            <Route path="/businesses" element={<BusinessIntelligence />} />
            <Route path="/businesses/:id" element={<BusinessIntelligence />} />
            <Route path="/business-intelligence" element={<BusinessIntelligence />} />
            <Route path="/business-intelligence/:id" element={<BusinessIntelligence />} />

            {/* AI Builders */}
            <Route path="/website-builder" element={<WebsiteBuilder />} />
            <Route path="/website-builder/:id" element={<WebsiteBuilder />} />
            <Route path="/web-app-builder" element={<WebAppBuilder />} />
            <Route path="/web-app-builder/:id" element={<WebAppBuilder />} />
            <Route path="/brand-studio" element={<BrandStudio />} />
            <Route path="/brand-studio/:id" element={<BrandStudio />} />
            <Route path="/generation-center" element={<GenerationCenter />} />
            <Route path="/generation-center/:id" element={<GenerationCenter />} />

            {/* Operations & Cloud Infrastructure */}
            <Route path="/deployments" element={<Deployments />} />
            <Route path="/deployments/:id" element={<Deployments />} />
            <Route path="/ai-usage" element={<AdminAIUsage />} />
            <Route path="/ai-models" element={<AdminAIModels />} />
            <Route path="/system-health" element={<AdminSystemHealth />} />
            <Route path="/analytics" element={<Analytics />} />

            {/* Security & Governance */}
            <Route path="/security" element={<AdminSecurity />} />
            <Route path="/audit-logs" element={<AdminAuditLogs />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/settings/account" element={<Settings />} />
            <Route path="/settings/ai" element={<Settings />} />
            <Route path="/settings/integrations" element={<Settings />} />
            <Route path="/settings/notifications" element={<Settings />} />
            <Route path="/settings/usage" element={<Settings />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/search" element={<Dashboard />} />
            <Route path="/help" element={<HelpPage />} />

            {/* Internal Aliases / Legacy redirects to Unified Owner Paths */}
            <Route path="/admin/dashboard" element={<Navigate to="/dashboard" replace />} />
            <Route path="/admin/ai-models" element={<Navigate to="/ai-models" replace />} />
            <Route path="/admin/ai-usage" element={<Navigate to="/ai-usage" replace />} />
            <Route path="/admin/system-health" element={<Navigate to="/system-health" replace />} />
            <Route path="/admin/security" element={<Navigate to="/security" replace />} />
            <Route path="/admin/audit-logs" element={<Navigate to="/audit-logs" replace />} />
            <Route path="/admin/deployments" element={<Navigate to="/deployments" replace />} />
            <Route path="/admin/projects" element={<Navigate to="/projects" replace />} />
            <Route path="/admin/leads" element={<Navigate to="/lead-generator" replace />} />
            <Route path="/admin/businesses" element={<Navigate to="/businesses" replace />} />
            <Route path="/admin/settings" element={<Navigate to="/settings" replace />} />
            <Route path="/admin/*" element={<Navigate to="/dashboard" replace />} />

            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>

      <AIChatDrawer isOpen={isAIChatOpen} onClose={() => setIsAIChatOpen(false)} />
      <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Private Owner Login */}
        <Route path="/login" element={<Login />} />
        
        {/* Redirect public signup/onboarding to private login or dashboard */}
        <Route path="/signup" element={<Navigate to="/login" replace />} />
        <Route path="/forgot-password" element={<Navigate to="/login" replace />} />
        <Route path="/onboarding" element={<Navigate to="/dashboard" replace />} />
        <Route path="/admin/login" element={<Navigate to="/login" replace />} />

        {/* Integrated Template Demos — public, self-contained sub-apps */}
        {/* The Afroza Gents Salon app handles its own internal routing via */}
        {/* window.location.pathname (including /template/gents-salon/admin/*) */}
        <Route path="/template/gents-salon/*" element={<GentsSalonTemplate />} />

        {/* Protected Private Owner Workspace */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
