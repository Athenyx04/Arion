import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      router.push('/login');
    }
  }, [router, currentUser]);

  return <div>{currentUser ? children : null}</div>;
}
