import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

export default function AlreadyLogged({ children }) {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user.uid) {
      router.push('/dashboard');
    }
  }, [router, user]);

  return <div>{!user ? children : null}</div>;
}
