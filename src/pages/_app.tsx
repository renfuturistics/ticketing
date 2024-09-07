// pages/_app.tsx
import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';
import{ createEmotionCache }from '@/utils/CreateEmotionCache';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/utils/Theme';
import Layout from '../components/Layout';
import NextProgress from 'next-progress';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp: React.FC<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NextProgress delay={300} options={{ showSpinner: true }} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
