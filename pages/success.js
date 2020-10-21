import Link from 'next/link';
import Layout from '@components/Layout';
import Header from '@components/Header';

export default function CustomSuccess() {
  return (
    <Layout>
      <Header title="A lonely, code-filled night: Your Turn!" />
      <br />
      <section>
        Thanks for your submission! Once propagated you'll see your character in
        the spooky story.{' '}
      </section>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </Layout>
  );
}
