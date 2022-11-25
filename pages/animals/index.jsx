import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import AnimalElement from '../../components/AnimalElement';
import AnimalHead from '../../components/AnimalHead';
import Layout from '../../components/Layout';
import ProtectedRoute from '../../components/ProtectedRoute';
import { useAuth } from '../../context/AuthContext';
import { fetchAnimals } from '../../firebase/firestoreClient';

export default function Animals() {
  const [animalList, setAnimalList] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      fetchAnimals(currentUser.uid).then(setAnimalList);
    }
  }, [currentUser]);

  return (
    <ProtectedRoute>
      <Layout>
        <Head>
          <title>Animales</title>
        </Head>
        <div className="px-12 py-2 container mx-auto">
          <div className="flex justify-between items-center">
            <div className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              Sus animales
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                A continuación se encuentra una lista de sus animales.
                <br />
                Pulse sobre el identificador para obtener más información o
                editarlos.
              </p>
            </div>
            <Link href="/animals/add" passHref>
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
              >
                Añadir animal
              </button>
            </Link>
          </div>
          <div className="text-gray-600 mx-auto overflow-x-scroll">
            <table className="table-auto text-sm text-left w-full text-gray-500 dark:text-gray-400">
              <AnimalHead />
              <tbody>
                {animalList.map(({ id, tagId, name, sex, species, breed }) => (
                  <AnimalElement
                    key={id}
                    tagId={tagId}
                    name={name}
                    sex={sex}
                    species={species}
                    breed={breed}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
