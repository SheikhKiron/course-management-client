'use client';

import { AuthContext } from './Auth/AuthContext';
import { useContext, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Spiner from '@/Components/Spiner';

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user) {
      router.replace(`/Login?redirect=${pathname}`);
    }
  }, [loading, user, pathname, router]);

  if (loading) return <Spiner></Spiner>;
  if (!user) return null;

  return children;
}
