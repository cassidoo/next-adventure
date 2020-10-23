import { createContext, useContext, useEffect, useState } from 'react';

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

  return (
    <StoryContext.Provider value={{ character }}>
      {children}
    </StoryContext.Provider>
  );
}

export function useAppContext() {
  return useContext(StoryContext);
}
