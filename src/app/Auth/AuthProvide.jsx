
'use client';
import { createContext, useEffect, useState } from 'react';
import { auth } from '@/Firebase/firebase.config';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!auth) return; 
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    if (!auth) return;
    return signOut(auth);
  };

  return <AuthContext.Provider value={{ user, handleLogout }}>{children}</AuthContext.Provider>;
}
