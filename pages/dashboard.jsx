import Head from 'next/head';
import Layout from '../components/Layout';
import ProtectedRoute from '../components/ProtectedRoute';

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <Layout>
        <Head>
          <title>Inicio</title>
        </Head>
        <div className="flex py-2 container mx-auto">
          <div className="text-gray-600 px-12 py-24 mt-24 overflow-y-hidden mx-auto">
            <h2 className="text-2xl font-semibold">¡Has iniciado sesión!</h2>
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
