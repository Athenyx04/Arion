import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';

export default function LogoutElement() {
  const { logOut } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logOut();
      router.push('/');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="block px-4 py-2 text-sm hover:bg-red-600 hover:text-white transition-colors rounded"
    >
      Cerrar sesión
    </button>
  );
}
