import Link from 'next/link';
import Layout from '@components/Layout';
import Header from '@components/Header';
import CharacterForm from '@components/CharacterForm';

export default function Custom() {
  return (
    <Layout>
      <Header title="A lonely, code-filled night: Your Turn!" />
      <br />
      Want to add your own personality to the story? Fill out this form to be
      added to the database!
      <CharacterForm />
      Nah? <br />
      <Link href="/">
        <a>Go home</a>
      </Link>
    </Layout>
  );
}
