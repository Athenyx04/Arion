import Head from 'next/head';
import Footer from './Footer';
import UserNavbar from './UserNavbar';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <UserNavbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
