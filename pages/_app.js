import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { StoreProvider } from '../utils/Store';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ThemeProvider attribute="class">
      <SessionProvider session={session}>
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
