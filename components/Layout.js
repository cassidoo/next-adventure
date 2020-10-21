import Head from 'next/head';
import Link from 'next/link';
import Footer from '@components/Footer';
import styles from './Layout.module.css';

export default function Layout({ children, story }) {
  return (
    <>
      <Head>
        <title>Next.js Adventure!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {story && (
        <Link href="/">
          <a>Go Home</a>
        </Link>
      )}
      <div className={styles.container}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
