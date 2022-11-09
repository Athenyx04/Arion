import { useState } from 'react';
import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu';
import NavbarElement from './NavbarElement';
import BrandLogo from './BrandLogo';
import UserDropdown from './UserDropdown';

export default function UserNavbar() {
  const [mobileDropdown, setMobileDropdown] = useState(false);

  const handleHamburgerClick = () => {
    setMobileDropdown(!mobileDropdown);
  };

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center">
          <BrandLogo />
        </Link>
        <div className="flex items-center md:order-2">
          <UserDropdown />
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
      </div>
    </nav>
  );
}
