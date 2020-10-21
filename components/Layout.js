import Head from 'next/head';
import Footer from '@components/Footer';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Next.js Adventure!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
