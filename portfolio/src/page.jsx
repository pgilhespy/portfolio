"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { Instagram, Linkedin, ArrowUpRight } from "lucide-react"
import ImageFollow from './ImageFollow';
import homepageStarImage from './Content/homepageStar.png';
import mailImage from './Content/mail2.svg';
import reel from './Content/WebsiteReel2.0.mp4';
import speedbookingLogo from './Content/speedbookingLogo2.svg';
import speedbookingVideo from './Content/speedbookingVideo.mp4';
import anthemLogo from './Content/anthemLogo2.svg';
import anthemVideo from './Content/anthemVideo.mp4';
import brickedLogo from './Content/brickedcoLogo1.svg';
import brickedcoVideo from './Content/brickedcoVideo.mp4';
import hercLogo from './Content/hercLogo1.svg';
import hercImage from './Content/herculesImage.png';
import ltbcLogo from './Content/ltbcLogo1.svg';
import ltbcImage from './Content/ltbcImage.png';
import portfolioLogo from './Content/portfolioLogo1.svg';
import portfolioVideo from './Content/portfolioVideo.mp4';
import sfLogo from './Content/sfLogo1.svg';
import sfImage from './Content/sfImage2.jpg';
import starVideoChrome from './Content/chrome1.1.webm';
import starVideoSafari from './Content/chrome1.1-safari.mov';
import contactImage from './Content/contactImage1.png';
import './globals.css';

export default function Portfolio() {
  // Animate main title letter-spacing on initial load
  const mainTitleRef = useRef(null);
  const [mainTitleStyle, setMainTitleStyle] = useState({ letterSpacing: "-6px" });
  useEffect(() => {
    setTimeout(() => {
      setMainTitleStyle({ letterSpacing: "-2px" });
    }, 100);
  }, []);
  // Ref to debounce reload on resize and cancel if exiting fullscreen
  const containerRef = useRef(null)
  const heroVisualContainerRef = useRef(null);
  const backgroundRef = useRef(null)
  const [activeSection, setActiveSection] = useState(0)
  const activeSectionRef = useRef(activeSection);

  // Update activeSectionRef whenever activeSection changes for dynamic reloads
  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);
  
  const [expandedWorkItem, setExpandedWorkItem] = useState(null)
  const gradientAngleRef = useRef(150) // Starting angle
  const continuousAnimationRef = useRef(null)
  const scrollRefs = useRef([null, null, null]);
  const floatingAssetsRefs = useRef([]);

  /* REMOVED BECAUSE THEY WERE GLITCHING ON SWIPE AFTER ADDING DYNAMIC RELOADS
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  */

  const floatingAssetsConfig = [
    {
      id: "p1TopRight",
      ratioY: 0.1,
      ratioX: 0.85,
      rotation: 20,
      page: 0,
      depth: 2,
    },
    {
      id: "p1BottomLeft",
      ratioY: 0.85,
      ratioX: 0.05,
      rotation: -10,
      page: 0,
      depth: 0,
    },
    {
      id: "p2BottomRight",
      ratioY: 0.8,
      ratioX: 0.65,
      rotation: -30,
      page: 1,
      depth: 0,
    },
    {
      id: "p2BottomLeftSmall",
      ratioY: 0.97,
      ratioX: 0.1,
      rotation: 20,
      page: 1,
      depth: 3,
    },
    {
      id: "p3TopRight",
      ratioY: 0.2,
      ratioX: 0.35,
      rotation: -60,
      page: 2,
      depth: 1,
    },
  ];

  // Collect all unique video sources you want to preload
  const videoPreloadSources = [
    reel,
    speedbookingVideo,
    anthemVideo,
    brickedcoVideo,
    portfolioVideo,
    starVideoSafari,
    starVideoChrome,
    // add any others you use
  ];

  // Robust viewport height CSS variable for mobile stability
  useEffect(() => {
    // Set --vh custom property to 1% of the viewport height
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      // Recalculate offsets and transforms after resize/orientation change
      recalculateOffsetsAndTransforms();
    };

    setVh();
    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);

    return () => {
      window.removeEventListener('resize', setVh);
      window.removeEventListener('orientationchange', setVh);
    };
  }, []);

  // Recalculate offsets and transforms after resize/orientation change
  const recalculateOffsetsAndTransforms = () => {
    // Always use latest activeSection from ref
    const section = activeSectionRef.current;

    // Recalculate floating asset positions
    floatingAssetsRefs.current.forEach((assetEl, i) => {
      if (assetEl) {
        const assetData = floatingAssetsConfig[i];
        let startingPosX = 0 + (assetData.page * window.innerWidth) + (window.innerWidth * assetData.ratioX);
        const startingPosY = (window.innerHeight * assetData.ratioY);

        const starOffset = -(window.innerWidth * 0.8) * (1 - (assetData.depth / 16));
        const angleOffset = 30 * (1 - (assetData.depth / 6));

        if (window.innerWidth < 680) {
          startingPosX -= 50;
        }

        const baseScale = 2.5 - (assetData.depth * 0.5);
        const scale = window.innerWidth < 680 ? baseScale * 0.7 : baseScale;
        gsap.set(assetEl, {
          x: startingPosX + section * starOffset,
          y: startingPosY,
          rotate: assetData.rotation + section * angleOffset,
          scale: scale,
        });
      }
    });

    // Reapply container transform for active section
    console.log(`Recalculating offsets for active section: ${section}`);
    if (containerRef.current) {
      const translateX = -section * window.innerWidth;
      requestAnimationFrame(() => {
        gsap.set(containerRef.current, { x: translateX });
      });
    }

    // Reapply gradient angle and colors for background
    if (backgroundRef.current) {
      let bgColourStart = "#c8d2d7";
      let bgColourEnd = "#9eadb4";
      if (section === 1) {
        bgColourStart = '#414c52';
        bgColourEnd = '#353e42';
      }
      const newBaseAngle = 195 - section * 15;
      gradientAngleRef.current = newBaseAngle;
      gsap.set(backgroundRef.current, {
        "--gradient-angle": `${newBaseAngle}deg`,
        "--color-start": `${bgColourStart}`,
        "--color-end": `${bgColourEnd}`,
      });
    }
  }

  useEffect(() => {
    // Initialize GSAP timeline for smooth transitions
    const tl = gsap.timeline()

    // Helper to set floating asset scale based on screen width
    const getAssetScale = (depth) => {
      const baseScale = 2.5 - (depth * 0.5);
      return window.innerWidth < 680 ? baseScale * 0.7 : baseScale;
    };

    // Init floating assets pos
    floatingAssetsRefs.current.forEach((assetEl, i) => {
      if (assetEl) {
        const assetData = floatingAssetsConfig[i];
        let startingPosX = 0 + (assetData.page * window.innerWidth) + (window.innerWidth * assetData.ratioX);
        const startingPosY = (window.innerHeight * assetData.ratioY);
        
        // Move 50px left if mobile
        if (window.innerWidth < 680) {
          startingPosX -= 50;
        }

        gsap.set(assetEl, { 
          x: startingPosX,
          y: startingPosY,
          rotate: assetData.rotation,
          scale: getAssetScale(assetData.depth),
        });
      }
    });

    // Set initial position
    if (containerRef.current) {
      gsap.set(containerRef.current, { x: 0 })
    }

    // Set initial gradient angle
    if (backgroundRef.current) {
      gsap.set(backgroundRef.current, { "--gradient-angle": `${gradientAngleRef.current}deg` })
    }

    return () => {
      // Clean up continuous animation on unmount
      if (continuousAnimationRef.current) {
        continuousAnimationRef.current.kill()
      }
    }
  }, [])

  // Star scroll movement animation
  useEffect(() => {
    // Store initial Y positions for floating assets
    const initialYs = floatingAssetsRefs.current.map((assetEl, i) => {
      if (assetEl) {
        const assetData = floatingAssetsConfig[i];
        return window.innerHeight * assetData.ratioY;
      }
      return 0;
    });

    const activeScrollContainer = scrollRefs.current[activeSection];
    if (!activeScrollContainer) return;

    // Create optimized GSAP setters for Y transforms
    const ySetters = floatingAssetsRefs.current.map((assetEl) =>
      gsap.quickTo(assetEl, "y", {
        duration: 0.1,
        ease: "power1.out",
      })
    );

    let scrollAnimationFrame = null;

    const handleScroll = () => {
      if (scrollAnimationFrame) return;

      scrollAnimationFrame = requestAnimationFrame(() => {
        const scrollY = activeScrollContainer.scrollTop;

        ySetters.forEach((setY, i) => {
          const offset = -scrollY * 0.1;
          setY(initialYs[i] + offset);
        });

        scrollAnimationFrame = null;
      });
    };

    activeScrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      activeScrollContainer.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(scrollAnimationFrame);
    };
  }, [activeSection, floatingAssetsConfig]);

  const navigateToSection = (index) => {
    if (containerRef.current && backgroundRef.current) {
      let bgColourStart = "#c8d2d7";
      let bgColourEnd = "#9eadb4";

      if (index === 1) {
        // Work section — solid dark
        bgColourStart = '#414c52';
        bgColourEnd = '#353e42';
      }

      const translateX = -index * window.innerWidth;

      // Calculate new gradient angle (15 degrees per section)
      const newBaseAngle = 195 - index * 15;
      gradientAngleRef.current = newBaseAngle

      // Animate both the section transition and gradient angle
      const tl = gsap.timeline({
      })

      tl.to(containerRef.current, {
        x: translateX,
        duration: 0.8,
        ease: "power2.inOut",
      }).to(
        backgroundRef.current,
        {
          "--gradient-angle": `${newBaseAngle}deg`,
          duration: 0.8,
          ease: "power2.inOut",
        },
        0,
      ).to(
        backgroundRef.current,
        {
          "--color-start": `${bgColourStart}`,
          "--color-end": `${bgColourEnd}`,
          duration: 0.8,
          ease: "power2.inOut",
        },
        0,
      ) // Start at the same time as the section transition

      // floating assets parallax animation
      floatingAssetsRefs.current.forEach((asset, i) => {
        if (asset) {
          const assetConfig = floatingAssetsConfig[i];
          const starOffset = -(index - activeSection) * (window.innerWidth * 0.8) * (1 - (assetConfig.depth / 16));
          const angleOffset = (index - activeSection) * 30 * (1 - (assetConfig.depth / 6));
          console.log(`Animating asset ${assetConfig.id} with offset: ${starOffset}, angle: ${angleOffset}`);
          gsap.to(asset, {
            x: `+=${starOffset}`,
            rotation: `+=${angleOffset}`,
            duration: 0.8,
            ease: "power2.inOut",
          });
        }
      });

      setActiveSection(index)
      if (backgroundRef.current) {
        if (index === 1) {
          backgroundRef.current.classList.add("work-active");
        } else {
          backgroundRef.current.classList.remove("work-active");
        }
      }
    }
  }

  const toggleWorkItem = (itemKey) => {
    setExpandedWorkItem(expandedWorkItem === itemKey ? null : itemKey)
  }

  // Prevent closing work item when clicking inside video/image content
  const stopPropagation = (e) => {
    e.stopPropagation();
  }

  // Touch navigation handlers
  /* REMOVED BECAUSE THEY WERE GLITCHING ON SWIPE AFTER ADDING DYNAMIC RELOADS
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) 
      return;

    const deltaX = touchEndX.current - touchStartX.current;
    const threshold = 75; // Minimum px to be considered a swipe

    if (Math.abs(deltaX) > threshold) {
      if (deltaX < 0 && activeSection < 2) {
        // Swipe left, go to next section
        navigateToSection(activeSection + 1);
      } else if (deltaX > 0 && activeSection > 0) {
        // Swipe right, go to previous section
        navigateToSection(activeSection - 1);
      }
    }
    
    touchStartX.current = null;
    touchEndX.current = null;
  };
  */

  const HeroVisual = ({ imgSrc, size }) => (
      <ImageFollow
        image={imgSrc}
        containerRef={backgroundRef} // .portfolio-container
        boundsRef={heroVisualContainerRef} // .hero-visual-container
        size={size}
      />
  )

  const workData = {
    video: [
      {
        key: "speedbooking",
        title: "SpeedBooking UK",
        role: "Motion Graphics Editor",
        description:
          "As Speedbooking UK’s go-to motion designer, I’ve produced over 30 animated videos \
          that clarify complex information and promote fast-track driving test bookings. \
          From scriptwriting to final edits, I work closely with the team to distill their \
          ideas into sleek, engaging motion graphics that drive results across social \
          platforms.",
        details:
          "Produced over 30 promotional and informative videos for social media platforms.",
        testimonial: '"He\'s been a game-changer. Couldn\'t recommend him more."',
        client: "- Jessiah Hercules, CEO Speed Booking UK",
        logo: speedbookingLogo,
        content: speedbookingVideo,
        video: true,
        link: "https://www.instagram.com/speed_booking_uk/",
      },
      {
        key: "anthem",
        title: "Anthem",
        role: "Video Editor",
        description: 
          "I crafted a cinematic highlight reel for Anthem’s corporate event, \
          handling everything from colour grading to motion logo design. Working \
          side-by-side with the client, I matched music, visuals, and pacing to \
          their brand—creating a polished, high-energy video that captured the \
          event’s atmosphere.",
        details:
          "Showcased a company event through dynamic video, cinematic editing \
          and custom motion design.",
        logo: anthemLogo,
        content: anthemVideo,
        video: true,
      },
      {
        key: "bricked",
        title: "Bricked Co",
        role: "Video Editor",
        description:
          "As a part-owner of this skate brand, I edit both full-length and short-form \
          content for YouTube and social media. Each piece is built from the ground up, \
          with attention to pacing, music, sound design, and brand tone.",
        testimonial: '"His edits make our near-death experiences come to life."',
        client: "- Caleb Liu, Co-Owner",
        details:
          "Long-term collaboration producing long form and short form content and \
          managing the post-production pipeline.",
        logo: brickedLogo,
        content: brickedcoVideo,
        video: true,
        link: "https://www.instagram.com/brickedcompany/",
      },
    ],
    coding: [
      {
        key: "standardfusion",
        title: "StandardFusion",
        role: "Software Developer",
        description: 
          "During my 8-month co-op, I built internal tools that enhanced workflow \
          efficiency—most notably, a converter that turned Excel compliance checklists \
          into XML for the web app. I also automated processes by integrating with \
          external APIs like GitHub and Coda, helping streamline compliance management.",
        details:
          "Developed standalone software as well as seamless integrations with the \
          StandardFusion web app.",
        logo: sfLogo,
        content: sfImage,
        video: false,
        link: "https://www.standardfusion.com/",
      },
      {
        key: "portfolio",
        title: "Personal Portfolio",
        role: "Frontend Designer & Developer",
        description: 
          "This site is hand-coded from the ground up with React and Next.js, animated \
          using GSAP, and styled with custom CSS to reflect my design sensibilities. \
          Everything—from layout to transitions—was planned in Figma before being brought \
          to life in code.",
        details: 
          "Designed in Figma, built with React and Next.js, animated with GSAP, \
          and deployed on GitHub.",
        logo: portfolioLogo,
        content: portfolioVideo,
        video: true,
      },
    ],
    design: [
      {
        key: "ltb",
        title: "LT&B Consulting",
        role: "Web Designer",
        description: 
          "I redesigned LT&B’s website from a basic one-pager into a fully realized, \
          six-page site with custom visuals and embedded video. Working within the client’s \
          existing toolkit, I delivered a modern, professional web presence that better \
          communicates their expertise.",
        details:
          "Took an engineering consultant’s website from being a single page to a professional \
          multi-page site.",
        logo: ltbcLogo,
        content: ltbcImage,
        video: false,
      },
      {
        key: "hercules",
        title: "M Hercules Fitness",
        role: "Graphic Designer",
        description: 
          "I transformed a plain-text PDF into a professionally designed, 9-page flyer for \
          a fitness coach to share with clients. With a strong visual theme, intuitive layout, \
          and collaborative revisions, the final product reflects both clarity and style.",
        details:
          "Turned a plain pdf document of text into a visually engaging flyer for a personal \
          trainer to send to his clients.",
        testimonial: '"He\'s one of the easiest people to work with."',
        client: "- Malachi Hercules, Owner",
        logo: hercLogo,
        content: hercImage,
        video: false,
      },
    ],
  }

  return (
    <>
      {/* Preload all important videos */}
      {videoPreloadSources.map((src, i) => (
        <video key={i} src={src} preload="auto" style={{ display: "none" }} />
      ))}
      <div
        className="portfolio-container"
        ref={backgroundRef}
        /* REMOVED BECAUSE THEY WERE GLITCHING ON SWIPE AFTER ADDING DYNAMIC RELOADS
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        */
      >
        {/* bg floater */}
        {floatingAssetsConfig.map((asset, i) => (
          <div
            key={asset.id}
            className="background-floater"
            style={{
              top: asset.top,
              bottom: asset.bottom,
              left: asset.left,
              right: asset.right,
              filter: `blur(${3 * asset.depth}px)`
            }}
          >
            <video 
              ref={(el) => (floatingAssetsRefs.current[i] = el)}
              className="floating-asset" 
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src={starVideoSafari} type='video/mp4; codecs="hvc1"' />
              <source src={starVideoChrome} type="video/webm" />
            </video>
          </div>
        ))}
        <div ref={containerRef} className="sections-wrapper">
          {/* HOME SECTION */}
          <section className="portfolio-section home-section" ref={(el) => (scrollRefs.current[0] = el)}>
            <div className="container-fluid h-100">
              <div className="row h-100">
                <div className="col-12 d-flex flex-column justify-content-between custom-padding">
                  <div className="content-area" >
                    <div className="content-card">
                      <div className="hero-content">
                        <div className="hero-top-section">
                          <div className="hero-left-top">
                            <div>
                              <h1
                                className="main-title"
                                style={mainTitleStyle}
                                ref={mainTitleRef}
                              >
                                PHILIP
                                <br />
                                GILHESPY
                              </h1>
                              <p className="subtitle">
                                Multidisciplinary Digital
                                <br />
                                Creator
                              </p>
                            </div>
                            <div className="hero-visual-container-mobile">
                              <HeroVisual imgSrc={homepageStarImage} size={50} />
                            </div>
                            <div className="description">
                              <p>
                                <b>I’m focused on </b> creating tailored, 
                                effective solutions across web, video, and brand. Every project is different, 
                                and I bring a flexible, full-stack creative approach to meet each one’s unique 
                                needs. From concept to final product, I deliver work that’s cohesive, compelling, 
                                and built to stand out. <br /><br />
                                
                                <b>Let’s make something great.</b>
                              </p>
                            </div>
                          </div>
                          <div className="hero-visual-container" ref={heroVisualContainerRef} >
                            <HeroVisual imgSrc={homepageStarImage} size={70} />
                          </div>
                        </div>

                        <div className="hero-bottom-section">
                          <div className="hero-left-bottom">
                            <button className="cta-button" onClick={() => navigateToSection(1)}>
                              See My Projects
                            </button>
                          </div>

                          <div className="hero-right-bottom">
                            <div className="reel-video">
                              <video autoPlay loop muted playsInline src={reel} controls />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="footer-info">
                    <span className="name">Philip Gilhespy</span>
                    <div className="social-links">
                      <a href="https://www.instagram.com/p_gilhespy/" target="_blank" rel="noopener noreferrer">
                        <Instagram size={20} />
                      </a>
                      <a href="https://www.linkedin.com/in/philip-gilhespy-7601132a1/" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={20} />
                      </a>
                      <a href="mailto:philip@gilhespy.net" target="_blank" rel="noopener noreferrer">
                        <ArrowUpRight size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* WORK SECTION */}
          <section className="portfolio-section work-section" ref={(el) => (scrollRefs.current[1] = el)} >
            <div className="container-fluid h-100">
              <div className="row h-100">
                <div className="col-12 d-flex flex-column justify-content-between custom-padding">
                  <div className="content-area">
                    <div className="work-content-wrapper">
                      <div className="work-header-card">
                        <h1 className="main-title work-title">
                          MY
                          <br />
                          WORK
                        </h1>
                        <p className="subtitle work-subtitle">
                          Some Past
                          <br />
                          Projects
                        </p>
                      </div>

                      <div className="work-content-scrollable">
                        <div className="work-categories">
                          <div className="category">
                            <h3 className="category-title">VIDEO</h3>
                            {workData.video.map((project) => (
                              <div
                                key={project.key}
                                className="work-item-card"
                                onClick={() => toggleWorkItem(project.key)}
                              >
                                <div className="work-item-header">
                                  <span className="project-title">{project.title}</span>
                                  <div className="project-logo">
                                    <img src={project.logo} />
                                  </div>
                                </div>
                                {expandedWorkItem === project.key && (
                                  <div className="work-item-expanded">
                                    <div className="work-item-expanded-left" >
                                      <p className="role">{project.role}</p>
                                      <p className="description">{project.description}</p>
                                      <p className="details">{project.details}</p>
                                      {project.testimonial && (
                                        <div className="testimonial">
                                          <blockquote>{project.testimonial}</blockquote>
                                          <cite>{project.client}</cite>
                                        </div>
                                      )}
                                      {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                          <button className="testimonial-button">
                                            See More
                                          </button>
                                        </a>
                                      )}
                                    </div>
                                    <div className="work-item-expanded-right" onClick={stopPropagation} >
                                      {project.video ? (
                                        <video autoPlay loop muted playsInline src={project.content} controls />
                                      ) : (
                                        <img src={project.content} alt={`${project.title} visual`} />
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>

                          <div className="category">
                            <h3 className="category-title">CODING</h3>
                            {workData.coding.map((project) => (
                              <div
                                key={project.key}
                                className="work-item-card"
                                onClick={() => toggleWorkItem(project.key)}
                              >
                                <div className="work-item-header">
                                  <span className="project-title">{project.title}</span>
                                  <div className="project-logo">
                                    <img src={project.logo} />
                                  </div>
                                </div>
                                {expandedWorkItem === project.key && (
                                  <div className="work-item-expanded">
                                    <div className="work-item-expanded-left" >
                                      <p className="role">{project.role}</p>
                                      <p className="description">{project.description}</p>
                                      <p className="details">{project.details}</p>
                                      {project.testimonial && (
                                        <div className="testimonial">
                                          <blockquote>{project.testimonial}</blockquote>
                                          <cite>{project.client}</cite>
                                        </div>
                                      )}
                                      {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                          <button className="testimonial-button">
                                            See More
                                          </button>
                                        </a>
                                      )}
                                    </div>
                                    <div className="work-item-expanded-right" onClick={stopPropagation} >
                                      {project.video ? (
                                        <video autoPlay loop muted playsInline src={project.content} controls />
                                      ) : (
                                        <img src={project.content} alt={`${project.title} visual`} />
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>

                          <div className="category">
                            <h3 className="category-title">DESIGN</h3>
                            {workData.design.map((project) => (
                              <div
                                key={project.key}
                                className="work-item-card"
                                onClick={() => toggleWorkItem(project.key)}
                              >
                                <div className="work-item-header">
                                  <span className="project-title">{project.title}</span>
                                  <div className="project-logo">
                                    <img src={project.logo} />
                                  </div>
                                </div>
                                {expandedWorkItem === project.key && (
                                  <div className="work-item-expanded">
                                    <div className="work-item-expanded-left" >
                                      <p className="role">{project.role}</p>
                                      <p className="description">{project.description}</p>
                                      <p className="details">{project.details}</p>
                                      {project.testimonial && (
                                        <div className="testimonial">
                                          <blockquote>{project.testimonial}</blockquote>
                                          <cite>{project.client}</cite>
                                        </div>
                                      )}
                                      {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                          <button className="testimonial-button">
                                            See More
                                          </button>
                                        </a>
                                      )}
                                    </div>
                                    <div className="work-item-expanded-right" onClick={stopPropagation} >
                                      {project.video ? (
                                        <video autoPlay loop muted playsInline src={project.content} controls />
                                      ) : (
                                        <img src={project.content} alt={`${project.title} visual`} />
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="footer-info">
                    <span className="name dark-mode">Philip Gilhespy</span>
                    <div className="social-links dark-mode">
                      <a href="https://www.instagram.com/p_gilhespy/" target="_blank" rel="noopener noreferrer">
                        <Instagram size={20} />
                      </a>
                      <a href="https://www.linkedin.com/in/philip-gilhespy-7601132a1/" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={20} />
                      </a>
                      <a href="mailto:philip@gilhespy.net" target="_blank" rel="noopener noreferrer">
                        <ArrowUpRight size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT SECTION */}
          <section className="portfolio-section contact-section" ref={(el) => (scrollRefs.current[2] = el)}>
            <div className="container-fluid h-100">
              <div className="row h-100">
                <div className="col-12 d-flex flex-column justify-content-between custom-padding">
                  <div className="content-area">
                    <div className="content-card">
                      <div className="contact-hero-content">
                        <div className="contact-hero-top-section">
                          <div className="hero-visual-container">
                            <HeroVisual imgSrc={mailImage} size={40} />
                          </div>
                          <div className="contact-hero-right-top">
                            <div>
                              <h1 className="main-title contact-title">
                                GET IN
                                <br />
                                CONTACT
                              </h1>
                              <p className="subtitle contact-subtitle">
                                With Me For Any
                                <br />
                                Inquiries
                              </p>
                            </div>
                            <div className="hero-visual-container-mobile">
                              <HeroVisual imgSrc={mailImage} size={40} />
                            </div>
                            <div className="description">
                              <p>
                                <b>I'm always open</b> to new projects, collaborations, 
                                or conversations. If you have an idea, a question, 
                                or just want to connect, feel free to reach out. 
                                No project is too big or too early—I'm happy to discuss 
                                how we can bring it to life.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="contact-hero-bottom-section">
                          <div className="contact-hero-left-bottom">
                            <div className="contact-image">
                              <img src={contactImage} alt={`contact visual`} />
                            </div>
                          </div>

                          <div className="contact-hero-right-bottom">
                            <a href="mailto:philip@gilhespy.net" target="_blank" rel="noopener noreferrer">
                              <button className="cta-button" >
                                Email Me
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="footer-info">
                    <span className="name">Philip Gilhespy</span>
                    <div className="social-links">
                      <a href="https://www.instagram.com/p_gilhespy/" target="_blank" rel="noopener noreferrer">
                        <Instagram size={20} />
                      </a>
                      <a href="https://www.linkedin.com/in/philip-gilhespy-7601132a1/" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={20} />
                      </a>
                      <a href="mailto:philip@gilhespy.net" target="_blank" rel="noopener noreferrer">
                        <ArrowUpRight size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* NAVIGATION BAR */}
        <div className="navigation-bar-fixed">
          <button className={`nav-item ${activeSection === 0 ? "active" : ""}`} onClick={() => navigateToSection(0)}>
            Home
          </button>
          <button className={`nav-item ${activeSection === 1 ? "active" : ""}`} onClick={() => navigateToSection(1)}>
            Work
          </button>
          <button className={`nav-item ${activeSection === 2 ? "active" : ""}`} onClick={() => navigateToSection(2)}>
            Contact
          </button>
        </div>
      </div>
    </>
  )
}