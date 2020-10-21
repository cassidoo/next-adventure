import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>Next.js Adventure!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <main>
          <Header title="Welcome to my app!" />
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
}
