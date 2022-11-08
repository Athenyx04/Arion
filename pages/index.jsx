import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Página principal</title>
      </Head>
      <h1>Aqui va el contenido de la pagina principal</h1>
    </Layout>
  );
}
