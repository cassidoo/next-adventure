import Layout from '@components/Layout';
import { useAppContext } from '@context/AppContext';
import { states } from '@context/stateMachine';

const Story = () => {
  let { state } = useAppContext();
  console.log(states);
  return <Layout>{state.meta['spookydev.start'].story}</Layout>;
};

export function getStaticPaths() {
  return { paths: [], fallback: true };
}

function getStaticProps() {}

export default Story;
