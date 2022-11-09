import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Dropdown } from 'flowbite-react';

export default function LoggedNavbar() {
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const [userMenu, setUserMenu] = useState(false);

  const handleHamburgerClick = () => {
    setMobileDropdown(!mobileDropdown);
  };

  const handleUserMenuClick = () => {
    setUserMenu(!userMenu);
  };

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        {/* Navbar Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://esalab.es/wp-content/uploads/2019/07/logo_horizontal.svg"
            className="mr-3 h-6 sm:h-9"
            alt="ESALab Logo"
            width={200}
            height={200}
          />
        </Link>

        {/* User Menu */}
        <div className="flex items-center md:order-2">
          <button
            type="button"
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
            onClick={handleUserMenuClick}
          >
            <span className="sr-only">Open user menu</span>
            <Image
              className="w-8 h-8 rounded-full"
              src="https://avatars.dicebear.com/api/personas/esalab.svg"
              alt="user photo"
              width={200}
              height={200}
            />
          </button>

          {/* Dropdown Menu with ternary operator */}
          <Dropdown label="Dropdown button">
            <Dropdown.Item>
              <span className="block text-sm text-gray-900 dark:text-white">
                Manuel Calvo
              </span>
            </Dropdown.Item>
            <Dropdown.Item>
              <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                manucalvom@gmail.com
              </span>
            </Dropdown.Item>
          </Dropdown>

          {/* Mobile Hamburger Menu */}
          <button
            type="button"
            className="inline-flex items-center p-2 text-sm hover:bg-gray-100 rounded md:hidden text-white ml-auto hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={handleHamburgerClick}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Desktop View with ternary operator */}
        <div
          className={`${
            mobileDropdown ? '' : 'hidden'
          } justify-between items-center w-full md:flex md:w-auto md:order-1`}
        >
          <div className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <Link
              href="/"
              className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              aria-current="page"
            >
              Inicio
            </Link>
            <Link
              href="/"
              className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Animales
            </Link>
            <Link
              href="/"
              className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Sensores
            </Link>
            <Link
              href="/"
              className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Parcelas
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
