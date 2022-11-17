import Link from 'next/link';
import BrandLogo from './BrandLogo';

export default function LandingNavbar() {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center">
          <BrandLogo />
        </Link>
        <div className="flex items-center md:order-2">
          <Link
            href="/signup"
            className="hidden whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 md:flex"
          >
            Registrarse
          </Link>
          <Link
            href="/login"
            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            <p className="hidden sm:flex">Iniciar sesión</p>
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
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}
