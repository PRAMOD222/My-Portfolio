import '@/styles/globals.css'
import DesktopNav from '../components/DesktopNav'
import MobileNav from '../components/MobileNav'
import Footer from '../components/Footer'
import { use, useEffect, useState } from 'react';
import DarkModeContext from '../components/DarkModeContext';
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router';

function App({ Component, pageProps }) {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [progress, setProgress] = useState(0)
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', ()=>{
      setProgress(40)
    })

    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })

    const mediaQuery = window.matchMedia('(max-width: 770px)');
    setIsMobile(mediaQuery.matches);

    const handleChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return <>
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
    <LoadingBar
        color='orange'
        progress={progress}
        waitingTime={600}  
        onLoaderFinished={() => setProgress(0)}
      />
      {isMobile ? <MobileNav /> : <DesktopNav />}
      <Component {...pageProps} />
      <Footer/>
    </DarkModeContext.Provider>
  </>
}
export default App;