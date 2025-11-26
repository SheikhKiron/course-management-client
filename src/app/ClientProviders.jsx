'use client';

import AuthProvider from "./Auth/AuthProvide";


export default function ClientProviders({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
