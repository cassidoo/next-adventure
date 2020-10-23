import Link from 'next/link';
import Layout from '@components/Layout';
import Header from '@components/Header';

export default function Home() {
  return (
    <Layout>
      <Header title="A lonely, code-filled night" zoom />
      <br />
      <Link href="/s/start">
        <a>get spooky</a>
      </Link>
      <Link href="/makeyourown">
        <a>contribute a character</a>
      </Link>
    </Layout>
  );
}
