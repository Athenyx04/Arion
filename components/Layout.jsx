import Head from 'next/head';
import Footer from './Footer';
import UserNavbar from './UserNavbar';

export default function Layout({ children }) {
  return (
    <div>
      <UserNavbar />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
