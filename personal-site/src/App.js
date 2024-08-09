import React, { useState, useEffect, useRef } from 'react';
import LandingPage from './Pages/LandingPage';
import ContactPage from './Pages/ContactPage';
import AboutIntroPage from './Pages/AboutIntroPage';
import AboutWhatIDoPage from './Pages/AboutWhatIDoPage';
import WorkExperiencePage from './Pages/WorkExperiencePage';
import MenuBar from './Components/MenuBar';
import ReelExperiencePage from './Pages/ReelExperiencePage';
import useWindowDimensions from './Utils/UseWindowDimensions';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [pageHeight, setPageHeight] = useState(window.outerHeight);
  const {width, height} = useWindowDimensions();
  const viewportCover = useRef(null);
  
  // Handle scroll tracking setup
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

  // Handle page height sizing
  useEffect(() => {
    if (viewportCover.current) {
      const viewportCoverBoundingBox = viewportCover.current.getBoundingClientRect();
      const viewportMaxHeight = viewportCoverBoundingBox.height;

      // Clamp the page height if screen is very small
      if (viewportMaxHeight < 500) {
        setPageHeight(500);
        console.log("    Page height clamped");
      }
      // Otherwise update the height
      else {
        setPageHeight(viewportMaxHeight);
        console.log(`    Page height updated`);
      }
    }
  }, [height]);

  return (
    <>
      <div className='Full-view-invisible-page' ref={viewportCover} />
      <MenuBar scrollPos={scrollPosition} pageHeight={pageHeight} />
      <LandingPage scrollPos={scrollPosition} pageHeight={pageHeight} />
      <AboutIntroPage scrollPos={scrollPosition} pageHeight={pageHeight} />
      <AboutWhatIDoPage scrollPos={scrollPosition} pageHeight={pageHeight} />
      <ReelExperiencePage scrollPos={scrollPosition} pageHeight={pageHeight} />
      <WorkExperiencePage pageHeight={pageHeight} />
      <ContactPage scrollPos={scrollPosition} pageHeight={pageHeight} />
    </>
  );
}

export default App;
