import React, { useState, useEffect } from 'react';
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
  const [pageHeight, setPageHeight] = useState(0);
  const {width, height} = useWindowDimensions();
  const heightChangeTolerance = 200;
  
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
    // Check for a "large" change in height
    if ( (height > (pageHeight + heightChangeTolerance)) || (height < (pageHeight - heightChangeTolerance))) {
      // Clamp the page height if screen is very small
      if (height < 500) {
        setPageHeight(500);
        console.log("    Page height clamped");
      }
      // Otherwise update the height
      else {
        setPageHeight(height);
        console.log(`    Page height updated`);
      }
    }
  }, [height]);

  console.log(`Page height outside is: ${pageHeight}`)

  return (
    <>
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
