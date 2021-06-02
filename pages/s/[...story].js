import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from '@components/Layout';
import Storyblock from '@components/Storyblock';

import { useAppContext } from '@context/AppContext';
import { useMachine } from '@xstate/react';
import { stateMachineFromVars } from '@context/stateMachine';

const Story = () => {
  let { character } = useAppContext();
  const [state, send] = useMachine(stateMachineFromVars(character));
  const router = useRouter();

  useEffect(() => {
    let trailingPath = router.asPath.substring(
      router.asPath.length - state.event.type.length
    );

    if (trailingPath !== state.event.type) {
      router.push(`/s/start`, undefined, { shallow: true });
    }
  }, []);

  return (
    <Layout story>
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

export default Story;
