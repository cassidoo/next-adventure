import { createContext, useContext, useEffect, useState } from 'react';
import { useMachine } from '@xstate/react';
import { stateMachineFromVars } from '@context/stateMachine';

const StoryContext = createContext();

export function AppContext({ children, character }) {
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
