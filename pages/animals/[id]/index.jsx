import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../../components/Layout';
import ProtectedRoute from '../../../components/ProtectedRoute';
import { useAuth } from '../../../context/AuthContext';
import { fetchSingleAnimal } from '../../../firebase/firestoreClient';

export default function AnimalPage() {
  const router = useRouter();
  const { id } = router.query;

  const [animalInfo, setAnimalInfo] = useState({});
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      fetchSingleAnimal(id, currentUser.uid).then(setAnimalInfo);
    }
  }, [currentUser, id]);

  useEffect(() => {
    if (!animalInfo) router.push('/animals');
  });

  console.log(animalInfo.id);

  return (
    <ProtectedRoute>
      <Layout>
        <Head>
          <title>Animales</title>
        </Head>
        <div className="px-12 py-2 container mx-auto">
          <div className="flex justify-between items-center">
            <div className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              Sus animales · {animalInfo?.tagId}
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                A continuación se encuentran los datos de su animal.
              </p>
            </div>
            <Link
              href={{
                pathname: `/animals/${animalInfo?.tagId}/edit`,
              }}
              passHref
            >
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
              >
                Editar animal
              </button>
            </Link>
          </div>
          {/* Animal Card */}
          <div className="flex p-5 flex-col flex-wrap">
            <div className="">
              <p>Nombre: {animalInfo?.name}</p>
            </div>
            <div className="">
              <p>Especie: {animalInfo?.species}</p>
            </div>
            <div className="">
              <p>Raza: {animalInfo?.breed}</p>
            </div>
            <div className="">
              <p>Sexo: {animalInfo?.sex}</p>
            </div>
            <div className="">
              <p>Fecha de nacimiento: {animalInfo?.formattedDoB}</p>
            </div>
            <div className="">
              <p>Parcela: {animalInfo?.plot}</p>
            </div>
            <div className="">
              <p>Sensor: {animalInfo?.sensor}</p>
            </div>
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
