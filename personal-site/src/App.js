import React, { useState, useEffect } from 'react';
import LandingPage from './Pages/LandingPage';
import ContactPage from './Pages/ContactPage';
import AboutIntroPage from './Pages/AboutIntroPage';
import AboutWhatIDoPage from './Pages/AboutWhatIDoPage';
import WorkExperiencePage from './Pages/WorkExperiencePage';
import ErrorPage from './Pages/ErrorPage';
import MenuBar from './Components/MenuBar';
import ReelExperiencePage from './Pages/ReelExperiencePage';
import useWindowDimensions from './Utils/UseWindowDimensions';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const {width, height} = useWindowDimensions();
  let tooSmall = false;

  const checkFullscreen = () => {
    return (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    );
  };

  const handleFullscreenChange = () => {
    if (checkFullscreen()) {
      setIsFullscreen(true);
    } else {
      setIsFullscreen(false);
    }
  };
  
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);
  
  if ( (height < 425) && !isFullscreen )
    tooSmall = true;

  return (
    <>
    { tooSmall ? <ErrorPage /> :
      <>
        <MenuBar scrollPos={scrollPosition} />
        <LandingPage scrollPos={scrollPosition} />
        <AboutIntroPage scrollPos={scrollPosition} />
        <AboutWhatIDoPage scrollPos={scrollPosition} />
        <ReelExperiencePage scrollPos={scrollPosition} />
        <WorkExperiencePage />
        <ContactPage scrollPos={scrollPosition} />
      </>
    }
    </>
  );
}

export default App;
