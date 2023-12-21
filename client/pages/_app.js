import { useEffect, useState } from 'react';
import Head from 'next/head'
import '../styles/globals.css'

// Material-UI component for the main background
import { Paper } from '@mui/material'

// Material-UI theme
import { ColorContextProvider } from '../theme/MUI_MODE'

import Footer from '../components/module/Footer';
import Navbar from '../components/module/Navbar';
import ScrollToTop from '../components/elements/ScrollToTop'

// Redux
import { Provider } from 'react-redux'
import { store } from '../redux/store'

// Progress bar for page loading
import NextNProgress from "nextjs-progressbar";

// Main application component
function MyApp({ Component, pageProps }) {

  // Check if the window object is available
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true)
    }
  }, []);

  return (
    <>
      {/* Head section for metadata */}
      <Head>
        <title>EventManagemant</title>
        <meta name="description" content="Application for events management" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Theme color context provider */}
      <ColorContextProvider>

        {/* Redux store provider */}
        <Provider store={store}>
          {hasWindow &&
            <Paper variant='elevation'
              sx={{
                boxShadow: 'none', borderRadius: '0',
                border: 'none', p: '0px', m: "0px",
                minHeight: "100vh"
              }}>
              
              {/* Progress bar for page loading */}
              <NextNProgress
                color="#29D"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
              />

              {/* Navbar component */}
              <Navbar />

              {/* Main component */}
              <Component {...pageProps} />

              {/* Footer component */}
              <Footer />

              {/* Scroll to top component */}
              <ScrollToTop />
            </Paper>
          }
        </Provider>
      </ColorContextProvider>
    </>
  )
}

export default MyApp
