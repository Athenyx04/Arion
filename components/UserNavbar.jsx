import { useState } from 'react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import HamburgerMenu from './HamburgerMenu';
import NavbarElement from './NavbarElement';
import BrandLogo from './BrandLogo';

export default function UserNavbar() {
  const [mobileDropdown, setMobileDropdown] = useState(false);

  const handleHamburgerClick = () => {
    setMobileDropdown(!mobileDropdown);
  };

  return (
    <Navbar
      fluid
      rounded
      className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900"
    >
      <Navbar.Brand href="/" className="flex items-center">
        <BrandLogo />
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

        <HamburgerMenu onClick={handleHamburgerClick} />
      </div>

      {/* Desktop View with ternary operator */}
      <div
        className={`${
          mobileDropdown ? '' : 'hidden'
        } justify-between items-center w-full md:flex md:w-auto md:order-1`}
      >
        <div className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <NavbarElement element="Inicio" route="/" active />
          <NavbarElement element="Animales" route="/" />
          <NavbarElement element="Sensores" route="/" />
          <NavbarElement element="Parcelas" route="/" />
        </div>
      </div>
    </Navbar>
  );
}
