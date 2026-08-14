import React, { useState, useEffect } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AdminSidebar } from './AdminSidebar';
import { AdminTopbar } from './AdminTopbar';
import { AdminService } from '../../services/adminService';

export const AdminLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // If user is accessing /admin/login, don't show layout
  if (location.pathname === '/admin/login') {
    return <Outlet />;
  }

  // Check auth
  const isAuthed = AdminService.isAuthenticated();

  if (!isAuthed) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return (
    <div className="flex h-screen bg-[#080808] text-[#F5F5F5] overflow-hidden">
      <AdminSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <AdminTopbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
