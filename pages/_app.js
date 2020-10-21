import { AppContext } from '@context/AppContext';

import '@styles/global.css';

export default function Application({ Component, pageProps }) {
  return (
    <AppContext>
      <Component {...pageProps} />
    </AppContext>
  );
}
