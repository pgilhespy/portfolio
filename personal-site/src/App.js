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
  const {width, height} = useWindowDimensions();
  let tooSmall = false;

  if (height < 425)
    tooSmall = true;

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
