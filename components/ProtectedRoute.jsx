import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      // Replace en lugar de push porque no tiene sentido almacenar al historial una página a la que no tienes acceso
      router.replace('/login');
    }
  }, [router, currentUser]);

  return <div>{currentUser ? children : null}</div>;
}
