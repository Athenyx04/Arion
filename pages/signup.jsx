import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import AlreadyLogged from '../components/AlreadyLogged';
import BrandLogo from '../components/BrandLogo';
import { useAuth } from '../context/AuthContext';

export default function Signup() {
  const methods = useForm({ mode: 'onBlur' });
  const { signUp } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await signUp(data.email, data.password);
      router.push('/dashboard');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <AlreadyLogged>
      <Head>
        <title>Regístrate</title>
      </Head>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <BrandLogo className="mx-auto h-12 w-auto" />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Registra una nueva cuenta
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Si ya tienes una cuenta, puedes iniciar sesión{' '}
              <Link
                href="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                aquí
              </Link>
              .
            </p>
          </div>
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
                        required: 'El correo electrónico es obligatorio',
                      })}
                      className="relative block w-full rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Correo electrónico"
                    />
                  </label>
                </div>

                <div>
                  <label htmlFor="password">
                    <p className="sr-only">Contraseña</p>
                    <input
                      id="password"
                      type="password"
                      autoComplete="password"
                      {...register('password', {
                        required: 'La contraseña es obligatoria',
                      })}
                      className="relative block w-full border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Contraseña"
                    />
                  </label>
                </div>

                <div>
                  <label htmlFor="password_confirm">
                    <p className="sr-only">Confirmar contraseña</p>
                    <input
                      id="password_confirm"
                      type="password"
                      autoComplete="password"
                      {...register('password_confirm', {
                        required: 'Verifica tu contraseña',
                      })}
                      className="relative block w-full rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Repite tu contraseña"
                    />
                  </label>
                </div>
              </div>

              {(errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )) ||
                (errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )) ||
                (errors.password_confirm && (
                  <p className="text-red-500">
                    {errors.password_confirm.message}
                  </p>
                ))}

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Regístrate
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </AlreadyLogged>
  );
}
