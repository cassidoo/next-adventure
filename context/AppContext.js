import { createContext, useContext } from 'react';
import { useMachine } from '@xstate/react';
import { stateMachineFromVars } from '@context/stateMachine';

const StoryContext = createContext();

export function AppContext({ children }) {
  const [state, send] = useMachine(stateMachineFromVars);

  return (
    <StoryContext.Provider value={{ state, send }}>
      {children}
    </StoryContext.Provider>
  );
}

export function useAppContext() {
  return useContext(StoryContext);
}
