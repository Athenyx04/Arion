import Image from 'next/image';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';

export default function UserNavbar() {
  return (
    <Navbar
      fluid
      rounded
      className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900"
    >
      <Navbar.Brand href="/" className="flex items-center">
        <Image
          src="https://esalab.es/wp-content/uploads/2019/07/logo_horizontal.svg"
          className="mr-3 h-6 sm:h-9"
          alt="ESALab Logo"
          width={200}
          height={200}
        />
      </Navbar.Brand>
      <div className="flex items-center md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="Ajustes de usuario"
              img="https://avatars.dicebear.com/api/personas/esalab.svg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm text-gray-900 dark:text-white">
              Manuel Calvo
            </span>
            <span className="block font-medium text-gray-500 truncate text-sm">
              manucalvom@gmail.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item className="hover:bg-red-600 hover:text-white transition-colors rounded">
            Cerrar sesión
          </Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
  );
}
