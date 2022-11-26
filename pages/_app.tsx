import { ThemeProvider } from 'next-themes';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header';

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <ThemeProvider enableSystem={true} themes={['light', 'dark']}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  ) 
}
