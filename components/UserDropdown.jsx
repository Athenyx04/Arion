import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '../context/AuthContext';

export default function UserDropdown() {
  const { currentUser, logOut } = useAuth();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
          <Image
            src={`https://avatars.dicebear.com/api/personas/${currentUser.uid}.svg`}
            className="w-8 h-8 rounded-full"
            alt="Ajustes de usuario"
            width={32}
            height={32}
          />
        </Menu.Button>
      </div>
      <Transition
        as="div"
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 divide-y divide-gray-200 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-3 px-4">
            <Menu.Item disabled>
              <div>
                <span className="block text-sm text-gray-900 dark:text-white">
                  {currentUser.uid}
                </span>
                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                  {currentUser.email}
                </span>
              </div>
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              <Link
                href="/"
                onClick={handleLogout}
                className="block px-4 py-2 text-sm hover:bg-red-600 hover:text-white transition-colors rounded"
              >
                Cerrar sesión
              </Link>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
