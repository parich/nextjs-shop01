import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { StoreProvider } from '../utils/Store';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </ThemeProvider>
  );
}

export default MyApp;
