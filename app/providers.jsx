"use client";

import { AuthProvider } from '@/app/context/AuthContext';

export function Providers({ children }) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}
