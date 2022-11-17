import Head from 'next/head';
import AlreadyLogged from '../components/AlreadyLogged';
import Footer from '../components/Footer';
import LandingNavbar from '../components/LandingNavbar';

export default function Home() {
  return (
    <AlreadyLogged>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Báscula inteligente para ganado" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Arion</title>
      </Head>
      <LandingNavbar />
      <main>
        <div className="flex py-2 container mx-auto">
          <div className="text-gray-600 px-12 py-24 mt-24 overflow-y-hidden mx-auto">
            <h2 className="text-2xl font-semibold">
              Aquí va el contenido de la landing page
            </h2>
          </div>
        </div>
      </main>
      <Footer />
    </AlreadyLogged>
  );
}
