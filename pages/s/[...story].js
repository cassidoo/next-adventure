import Layout from '@components/Layout';
import { useAppContext } from '@context/AppContext';
import { states } from '@context/stateMachine';

const Story = (props) => {
  let { state } = useAppContext();
  console.log(states);
  return <Layout>{state.meta['spookydev.start'].story}</Layout>;
};

export async function getStaticProps() {
  return {
    props: {
      posts: 'hello',
    },
    revalidate: false,
  };
}

export function getStaticPaths() {
  return { paths: [], fallback: true };
}

export default Story;
