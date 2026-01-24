import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { useAuthStore } from '../../store/auth.store';

export default function Layout({ children, showSidebar = false }) {
  const { user } = useAuthStore();

  // DEBUG: Add console logs
  console.log('Layout rendered with:', { 
    showSidebar, 
    hasUser: !!user, 
    userRole: user?.role 
  });

  // Cast user.role to match Sidebar's expected type
  const userRole = user?.role;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        {showSidebar && user && (
          <>
            {/* DEBUG: Log when rendering sidebar */}
            {console.log('Rendering sidebar with role:', userRole)}
            <Sidebar userRole={userRole} />
          </>
        )}
        <main className={`flex-1 ${showSidebar && user ? 'ml-64' : ''}`}>
          <div className="container mx-auto px-4 py-8">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}