import { useRouter } from 'next/router';

import Layout from '@components/Layout';
import Storyblock from '@components/Storyblock';

import { useAppContext } from '@context/AppContext';
import { states } from '@context/stateMachine';

const Story = (props) => {
  let { state, send } = useAppContext();
  const router = useRouter();

  // if (state.value === 'start' && router.asPath !== '/s/start') {
  //   router.push(`/s/start`);
  // }

  return (
    <Layout>
      <Storyblock>{state.meta[`spookydev.${state.value}`].story}</Storyblock>

      {state.nextEvents
        .filter((eventType) => !eventType.startsWith('xstate'))
        .map((eventType) => {
          return (
            <button
              key={eventType}
              onClick={() => {
                send(eventType);
                if (eventType === 'restart') {
                  router.push(`/s/start`);
                } else {
                  router.push(`${router.asPath}/${eventType}`);
                }
              }}
            >
              {eventType.replace(/-/g, ' ')}
            </button>
          );
        })}
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {},
    revalidate: false,
  };
}

export function getStaticPaths() {
  return { paths: [], fallback: true };
}

export default Story;
