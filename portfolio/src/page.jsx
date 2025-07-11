"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { Instagram, Linkedin, ArrowUpRight } from "lucide-react"
import ImageFollow from './ImageFollow';
import cursorImage from './Content/cursor2.svg';
import mailImage from './Content/mail2.svg';
import reel from './Content/WebsiteReel1.1.mp4';
import speedbookingLogo from './Content/speedbookingLogo2.svg';
import speedbookingVideo from './Content/speedbookingVideo.mp4';
import anthemLogo from './Content/anthemLogo2.svg';
import brickedLogo from './Content/brickedcoLogo1.svg';
import brickedcoVideo from './Content/brickedcoVideo.mp4';
import hercLogo from './Content/hercLogo1.svg';
import ltbcLogo from './Content/ltbcLogo1.svg';
import portfolioLogo from './Content/portfolioLogo1.svg';
import sfLogo from './Content/sfLogo1.svg';
import starVideo from './Content/chrome1.1.webm';
import './globals.css';

export default function Portfolio() {
  const containerRef = useRef(null)
  const heroVisualContainerRef = useRef(null);
  const backgroundRef = useRef(null)
  const [activeSection, setActiveSection] = useState(0)
  const [expandedWorkItem, setExpandedWorkItem] = useState(null)
  const gradientAngleRef = useRef(150) // Starting angle
  const continuousAnimationRef = useRef(null)
  const scrollRefs = useRef([null, null, null]);
  const floatingAssetsRefs = useRef([]);

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

  useEffect(() => {
    // Initialize GSAP timeline for smooth transitions
    const tl = gsap.timeline()

    // Init floating assets pos
    floatingAssetsRefs.current.forEach((assetEl, i) => {
      if (assetEl) {
        const assetData = floatingAssetsConfig[i];
        const startingPosX = 0 + (assetData.page * window.innerWidth) + (window.innerWidth * assetData.ratioX);
        const startingPosY = (window.innerHeight * assetData.ratioY);

        gsap.set(assetEl, { 
          x: startingPosX,
          y: startingPosY,
          rotate: assetData.rotation,
          scale: 2.5 - (assetData.depth * 0.5),
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
        testimonial: '"He makes decent videos"',
        client: "- Jessiah Hercules, CEO",
        logo: speedbookingLogo,
        content: speedbookingVideo,
        veritcal: true,
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
        content: reel,
      },
      {
        key: "bricked",
        title: "Bricked Co",
        role: "Video Editor",
        description:
          "As a part-owner of this skate brand, I edit both full-length and short-form \
          content for YouTube and social media. Each piece is built from the ground up, \
          with attention to pacing, music, sound design, and brand tone.",
        testimonial: '"This guy is pretty chill lowkey"',
        client: "- Caleb Liu, Co-Owner",
        details:
          "Long-term collaboration producing long form and short form content and \
          managing the post-production pipeline.",
        logo: brickedLogo,
        content: brickedcoVideo,
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
        logo: hercLogo,
      },
    ],
  }

  return (
    <div className="portfolio-container" ref={backgroundRef}>
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
            src={starVideo}
          />
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
                            <h1 className="main-title">
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
                            <HeroVisual imgSrc={cursorImage} size={25} />
                          </div>
                          <div className="description">
                            <p>
                              <b>I'm a 22 year</b> old creator who can take your digital media to the next level. Whether
                              your looking for help with websites, videos, advertisements or design, I can take what you have
                              and elevate it. I understand that every project is unique, which is why I pride myself on building
                              custom solutions tailored to each client. In doing so I've gained experience with a variety of tools
                              and participated in every stage of the creative process from planning to publishing.
                            </p>
                          </div>
                        </div>
                        <div className="hero-visual-container" ref={heroVisualContainerRef} >
                          <HeroVisual imgSrc={cursorImage} size={25} />
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
                            <video autoPlay loop muted playsInline src={reel} />
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
                                    {project.testimonial && (
                                      <div className="testimonial">
                                        <blockquote>{project.testimonial}</blockquote>
                                        <cite>{project.client}</cite>
                                      </div>
                                    )}
                                    <p className="details">{project.details}</p>
                                  </div>
                                  <div className="work-item-expanded-right" >
                                    <video autoPlay loop muted playsInline src={project.content} controls />
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
                                  <p className="role">{project.role}</p>
                                  <p className="description">{project.description}</p>
                                  <p className="details">{project.details}</p>
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
                                  <p className="role">{project.role}</p>
                                  <p className="description">{project.description}</p>
                                  <p className="details">{project.details}</p>
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
                              <b>I'm always looking</b> for projects to work on, whether that's a simple design or a combination
                              of the 3 skills needed to create and run here to help. So please don't hesitate to get in
                              touch and let's discuss further.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="contact-hero-bottom-section">
                        <div className="contact-hero-left-bottom">
                          <div className="reel-video">
                            <video autoPlay loop muted playsInline src={reel}></video>
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
  )
}