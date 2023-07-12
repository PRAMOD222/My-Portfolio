import '@/styles/globals.css'
import DesktopNav from '../components/DesktopNav'
import MobileNav from '../components/MobileNav'
import { use, useEffect, useState } from 'react';

function App({ Component, pageProps }) {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // router.events.on('routeChangeStart', ()=>{
    //   setProgress(40)
    // })

    // router.events.on('routeChangeComplete', ()=>{
    //   setProgress(100)
    // })

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
    {isMobile ? <MobileNav /> : <DesktopNav />}
    <Component {...pageProps} />
  </>
}
export default App;