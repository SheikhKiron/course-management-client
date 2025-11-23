'use client';
import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/firebase.config';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const handleLogut = () => {
    return signOut(auth)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  const authInfo = {
    user,
    handleLogut
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
}
