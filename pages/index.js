import Link from 'next/link';
import Layout from '@components/Layout';

export default function Home() {
  return (
    <Layout>
      Welcome to the spookiest game
      <br />
      <Link href="/s/start">
        <a>Get started</a>
      </Link>
    </Layout>
  );
}
