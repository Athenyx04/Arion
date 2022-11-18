import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';
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
    watch,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await signUp(data.email, data.password, data.name);
      router.push('/dashboard');
    } catch (error) {
      console.error(error.message);
    }
  };

  const password = useRef({});
  password.current = watch('password', '');
  const emailValidation = /\S+@\S+\.\S+/g;
  const passwordValidation =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g;
  const atLeastOneUppercase = /[A-Z]/g; // capital letters from A to Z
  const atLeastOneLowercase = /[a-z]/g; // small letters from a to z
  const atLeastOneNumeric = /[0-9]/g; // numbers from 0 to 9
  const atLeastOneSpecialChar = /[#?!@$%^&*-]/g; // any of the special characters within the square brackets
  const eightCharsOrMore = /.{8,}/g; // six characters or more

  return (
    <AlreadyLogged>
      <Head>
        <title>Regístrate</title>
      </Head>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <Link href="/">
              <BrandLogo />
            </Link>
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

          {(errors.email ||
            errors.password ||
            errors.password_confirm ||
            errors.name) && (
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
                <span className="font-semibold">
                  {(errors.email && <div>{errors.email.message}</div>) ||
                    (errors.password &&
                      password.current.match(eightCharsOrMore) && (
                        <div>
                          {errors.password.message}:
                          <ul className="mt-1.5 ml-4 text-red-700 list-disc list-inside font-medium">
                            {!password.current.match(atLeastOneLowercase) && (
                              <li>Una letra minúscula</li>
                            )}
                            {!password.current.match(atLeastOneUppercase) && (
                              <li>Una letra mayúscula</li>
                            )}
                            {!password.current.match(atLeastOneNumeric) && (
                              <li>Un número</li>
                            )}
                            {!password.current.match(atLeastOneSpecialChar) && (
                              <li>Un caracter especial</li>
                            )}
                          </ul>
                        </div>
                      )) ||
                    (errors.password && (
                      <div>{errors.password.message} 8 caracteres.</div>
                    )) ||
                    (errors.password_confirm && (
                      <div>{errors.password_confirm.message}</div>
                    )) ||
                    (errors.name && <div>{errors.name.message}</div>)}
                </span>
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
                  <label htmlFor="name">
                    <p className="sr-only">Nombre completo</p>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      {...register('name', {
                        required: 'El nombre es obligatorio.',
                        maxLength: {
                          value: 256,
                          message:
                            'El nombre no puede superar los 256 caracteres.',
                        },
                      })}
                      className="relative block w-full rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Nombre completo"
                    />
                  </label>
                </div>

                <div>
                  <label htmlFor="email-address">
                    <p className="sr-only">Dirección de correo electrónico</p>
                    <input
                      id="email-address"
                      type="email"
                      autoComplete="email"
                      {...register('email', {
                        required: 'El correo electrónico es obligatorio.',
                        pattern: {
                          value: emailValidation,
                          message:
                            'El formato de correo electrónico no es válido.',
                        },
                      })}
                      className="relative block w-full border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                        required: 'La contraseña debe contener al menos',
                        minLength: {
                          value: 6,
                          message: 'La contraseña debe contener al menos',
                        },
                        pattern: {
                          value: passwordValidation,
                          message: 'La contraseña debe contener al menos',
                        },
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
                        validate: (value) =>
                          value === password.current ||
                          'Las contraseñas no coinciden.',
                      })}
                      className="relative block w-full rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Repite tu contraseña"
                    />
                  </label>
                </div>
              </div>

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
