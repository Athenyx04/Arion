import Link from 'next/link';
import BrandLogo from './BrandLogo';

export default function Footer() {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link
          href="https://esalab.es/"
          className="flex items-center mb-4 sm:mb-0"
        >
          <BrandLogo />
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6">
              Sobre nosotros
            </Link>
          </li>
          <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6">
              Política de privacidad
            </Link>
          </li>
          <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6">
              Licencias
            </Link>
          </li>
          <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{' '}
        <Link href="https://esalab.es/" className="hover:underline">
          ESALab
        </Link>
      </span>
    </footer>
  );
}
