import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import AlreadyLogged from '../components/AlreadyLogged';
import BrandLogo from '../components/BrandLogo';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const methods = useForm({ mode: 'onBlur' });
  const { logIn } = useAuth();
  const [errorMessage, setErrorMessage] = useState(false);

  const { register, handleSubmit } = methods;

  const onSubmit = async (data) => {
    try {
      await logIn(data.email, data.password);
    } catch (error) {
      console.error(error.message);
      setErrorMessage(true);
    }
  };

  return (
    <AlreadyLogged>
      <Head>
        <title>Iniciar sesión</title>
      </Head>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <Link href="/">
              <BrandLogo />
            </Link>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Inicia sesión en tu cuenta
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Si no tienes una cuenta, puedes registrarte{' '}
              <Link
                href="/signup"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                aquí
              </Link>
              .
            </p>
          </div>
          {errorMessage && (
            <div className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 items-center">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="times-circle"
                className="flex-shrink-0 inline w-5 h-5 mr-3"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
                />
              </svg>
              <div>
                <span className="font-semibold">¡Error al iniciar sesión!</span>
                <br />
                Revisa tu dirección de correo electrónico y contraseña.
              </div>
            </div>
          )}
          <FormProvider {...methods}>
            <form
              action=""
              className="mt-8 space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="space-y-0">
                <div>
                  <label htmlFor="email-address">
                    <p className="sr-only">Dirección de correo electrónico</p>
                    <input
                      id="email-address"
                      type="email"
                      autoComplete="email"
                      {...register('email', {
                        required: true,
                      })}
                      className="relative block w-full rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Correo electrónico"
                    />
                  </label>
                  {}
                </div>

                <div>
                  <label htmlFor="password">
                    <p className="sr-only">Contraseña</p>
                    <input
                      id="password"
                      type="password"
                      autoComplete="password"
                      {...register('password', {
                        required: true,
                      })}
                      className="relative block w-full rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Contraseña"
                    />
                  </label>
                </div>
              </div>

              <div className="text-sm">
                <Link
                  href="/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Iniciar sesión
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </AlreadyLogged>
  );
}
