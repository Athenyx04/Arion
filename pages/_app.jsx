import '../styles/globals.css';
import { AuthContextProvider } from '../context/AuthContext';
import ErrorBoundary from '../components/ErrorBoundary';

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </ErrorBoundary>
  );
}

export default MyApp;
