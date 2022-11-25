import Head from 'next/head';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import Layout from '../../components/Layout';
import ProtectedRoute from '../../components/ProtectedRoute';
import UserPlotOptions from '../../components/UserPlotOptions';
import { useAuth } from '../../context/AuthContext';
import { addAnimal } from '../../firebase/firestoreClient';

export default function AddAnimal() {
  const router = useRouter();
  const methods = useForm({ mode: 'onBlur' });
  const { currentUser } = useAuth();

  const { register, handleSubmit } = methods;

  const onSubmit = async (data) => {
    try {
      addAnimal(
        currentUser.uid,
        data.tagId,
        data.name,
        data.sex,
        data.species,
        data.breed,
        data.dob,
        'ES373571100061',
        '1234'
      );
      router.push('/animals');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <ProtectedRoute>
      <Layout>
        <Head>
          <title>Añadir animal</title>
        </Head>
        <div className="px-12 py-2 container mx-auto">
          <div className="flex justify-between items-center">
            <div className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              Añadir un animal
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                Use el siguiente formulario para añadir un nuevo animal.
              </p>
            </div>
          </div>
          <FormProvider {...methods}>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div>
                    <label
                      htmlFor="tagId"
                      className="block text-sm text-gray-700"
                    >
                      <p className="font-semibold">Identificador del animal</p>
                      <input
                        id="tagId"
                        type="text"
                        {...register('tagId', {
                          required: true,
                        })}
                        className="mt-1 block w-full rounded-md py-2 px-3 border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="ESXXXXXXXXXXXX"
                      />
                    </label>
                  </div>

                  <div className="mt-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      <p className="font-semibold">Nombre</p>
                      <input
                        id="name"
                        type="text"
                        {...register('name', {})}
                        className="mt-1 block w-full rounded-md px-3 py-2 border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </label>
                  </div>

                  <div className="mt-2">
                    <label
                      htmlFor="sex"
                      className="block text-sm font-medium text-gray-700"
                    >
                      <p className="font-semibold">Sexo</p>
                      <select
                        id="sex"
                        {...register('sex', {})}
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>Macho</option>
                        <option>Hembra</option>
                      </select>
                    </label>
                  </div>

                  <div className="mt-2">
                    <label
                      htmlFor="species"
                      className="block text-sm font-medium text-gray-700"
                    >
                      <p className="font-semibold">Especie</p>
                      <select
                        id="species"
                        {...register('species', {})}
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>Bovino</option>
                        <option>Porcino</option>
                        <option>Ovino</option>
                        <option>Caprino</option>
                        <option>Equino</option>
                      </select>
                    </label>
                  </div>

                  <div className="mt-2">
                    <label
                      htmlFor="breed"
                      className="block text-sm font-medium text-gray-700"
                    >
                      <p className="font-semibold">Raza</p>
                      <input
                        id="breed"
                        type="text"
                        {...register('breed', {})}
                        className="mt-1 block w-full rounded-md px-3 py-2 border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </label>
                  </div>

                  <div className="mt-2">
                    <label
                      htmlFor="dob"
                      className="block text-sm font-medium text-gray-700"
                    >
                      <p className="font-semibold">Fecha de nacimiento</p>
                      <input
                        id="dob"
                        type="text"
                        {...register('dob', {})}
                        className="mt-1 block w-full rounded-md px-3 py-2 border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="22-10-2022"
                      />
                      {/* Usar React-Day-Picker con un dropdown */}
                    </label>
                  </div>

                  <div className="mt-2">
                    <label
                      htmlFor="plot"
                      className="block text-sm font-medium text-gray-700"
                    >
                      <p className="font-semibold">Parcela</p>
                      <select
                        id="plot"
                        {...register('plot', {})}
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <UserPlotOptions user={currentUser.uid} />
                      </select>
                    </label>
                  </div>

                  <div className="mt-2">
                    <label
                      htmlFor="sensor"
                      className="block text-sm font-medium text-gray-700"
                    >
                      <p className="font-semibold">Sensor</p>
                      <select
                        id="sensor"
                        {...register('sensor', {})}
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>Usar sensores disponibles</option>
                      </select>
                    </label>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Añadir
                  </button>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
