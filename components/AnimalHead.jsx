export default function AnimalHead() {
  return (
    <>
      <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        Sus animales
        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
          A continuación encuentra una lista de sus animales.
        </p>
      </caption>
      <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="py-3 px-6">
            Código de crotal
          </th>
          <th scope="col" className="py-3 px-6">
            Nombre
          </th>
          <th scope="col" className="py-3 px-6">
            Especie
          </th>
          <th scope="col" className="py-3 px-6">
            Parcela
          </th>
          <th scope="col" className="py-3 px-6">
            Peso actual
          </th>
        </tr>
      </thead>
    </>
  );
}
