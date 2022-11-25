export default function AnimalHead() {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="py-3 px-6">
          Identificador
        </th>
        <th scope="col" className="py-3 px-6">
          Nombre
        </th>
        <th scope="col" className="py-3 px-6">
          Sexo
        </th>
        <th scope="col" className="py-3 px-6">
          Especie
        </th>
        <th scope="col" className="py-3 px-6">
          Raza
        </th>
      </tr>
    </thead>
  );
}
