import { AppContext } from '@context/AppContext';

import '@styles/global.css';

export default function Application({ Component, pageProps }) {
  return (
    <AppContext character={pageProps.character}>
      <Component />
    </AppContext>
  );
}

const getRandomCharacter = async () => {
  let character = await fetch(
    'https://next-adventure.netlify.app/.netlify/functions/get-character'
  )
    .then((res) => res.json())
    .then((r) => r);
  return character;
};

Application.getInitialProps = async (appContext) => {
  let character = await getRandomCharacter();

  return { pageProps: { character } };
};
