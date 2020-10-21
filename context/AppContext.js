import { createContext, useContext, useEffect, useState } from 'react';
import { useMachine } from '@xstate/react';
import { stateMachineFromVars } from '@context/stateMachine';

const StoryContext = createContext();

function useRandomCharacter() {
  let [character, setCharacter] = useState(null);

  useEffect(() => {
    let current = true;
    fetch('https://next-adventure.netlify.app/.netlify/functions/get-character')
      .then((res) => res.json())
      .then((res) => {
        if (current) {
          setCharacter(res);
        }
      });
    return () => {
      current = false;
    };
  }, []);
  return character;
}

export function AppContext({ children }) {
  let character = useRandomCharacter();

  const [state, send] = useMachine(stateMachineFromVars(character));

  return (
    <StoryContext.Provider value={{ state, send }}>
      {children}
    </StoryContext.Provider>
  );
}

export function useAppContext() {
  return useContext(StoryContext);
}
