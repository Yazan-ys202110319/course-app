"use client";

import { useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardLayout({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!loading && !user) {
      router.push('/auth/signin');
    }
  }, [user, loading, router]);

  // Show loading while checking authentication
  if (loading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b px-4 lg:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl">
          <span className="text-primary">QU</span> Dashboard
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm">
            Welcome, {user.name || user.email}
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}
