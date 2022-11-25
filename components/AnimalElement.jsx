import Link from 'next/link';

export default function AnimalElement({ tagId, name, species, sex, breed }) {
  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th
        scope="row"
        className="py-4 px-6 font-medium text-indigo-600 hover:text-indigo-500 whitespace-nowrap dark:text-white"
      >
        <Link href={`/animals/${tagId}`}>{tagId}</Link>
      </th>
      <td className="py-4 px-6">{name}</td>
      <td className="py-4 px-6">{sex}</td>
      <td className="py-4 px-6">{species}</td>
      <td className="py-4 px-6">{breed}</td>
    </tr>
  );
}
