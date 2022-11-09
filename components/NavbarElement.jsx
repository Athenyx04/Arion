import Link from 'next/link';

export default function NavbarElement({ element, route, active }) {
  return (
    <Link
      href={route}
      className={`block py-2 pr-4 pl-3 md:p-0 rounded ${
        active
          ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white'
          : 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
      }`}
      aria-current={`${active ? 'page' : 'false'}`}
    >
      {element}
    </Link>
  );
}
