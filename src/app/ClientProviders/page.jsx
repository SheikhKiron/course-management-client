'use client';
import AuthProvider from './Auth/AuthProvider';

export default function ClientProviders({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
