import React, { useState, useEffect } from 'react';
import LandingPage from './Pages/LandingPage';
import ContactPage from './Pages/ContactPage';
import AboutIntroPage from './Pages/AboutIntroPage';
import AboutWhatIDoPage from './Pages/AboutWhatIDoPage';
import WorkExperiencePage from './Pages/WorkExperiencePage';
import MenuBar from './Components/MenuBar';
import ReelExperiencePage from './Pages/ReelExperiencePage';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

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
      <MenuBar scrollPos={scrollPosition} />
      <LandingPage scrollPos={scrollPosition} />
      <AboutIntroPage scrollPos={scrollPosition} />
      <AboutWhatIDoPage scrollPos={scrollPosition} />
      <ReelExperiencePage scrollPos={scrollPosition} />
      <WorkExperiencePage scrollPos={scrollPosition} />
      <ContactPage scrollPos={scrollPosition} />
    </>
  );
}

export default App;
