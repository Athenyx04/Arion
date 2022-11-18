import Head from 'next/head';
import { useState, useEffect } from 'react';
import AnimalElement from '../components/AnimalElement';
import AnimalHead from '../components/AnimalHead';
import Layout from '../components/Layout';
import ProtectedRoute from '../components/ProtectedRoute';
import { useAuth } from '../context/AuthContext';
import { fetchAnimals } from '../firebase/firestoreClient';

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
        <div className="flex py-2 container mx-auto">
          <div className="text-gray-600 px-12 mx-auto">
            <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <AnimalHead />
              <tbody>
                {animalList.map(
                  ({ id, tagId, name, species, plot, weight }) => (
                    <AnimalElement
                      key={id}
                      tagId={tagId}
                      name={name}
                      species={species}
                      plot={plot}
                      weight={weight}
                    />
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
