export default function AnimalElement({ tagId, name, species, plot, weight }) {
  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {tagId}
      </th>
      <td className="py-4 px-6">{name}</td>
      <td className="py-4 px-6">{species}</td>
      <td className="py-4 px-6">{plot}</td>
      <td className="py-4 px-6">{weight} kg</td>
    </tr>
  );
}
