"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { Instagram, Linkedin, ArrowUpRight } from "lucide-react"
import ImageFollow from './ImageFollow';
import cursorImage from './Content/cursor1.svg';
import reel from './Content/WebsiteReel1.1.mp4';
import speedbookingLogo from './Content/speedbookingLogo2.svg';
import anthemLogo from './Content/anthemLogo2.svg';
import brickedLogo from './Content/brickedcoLogo1.svg'
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
      top: "5%",
      right: "5%",
      rotation: gradientAngleRef.current,
      scale: 1,
      blurAmt: 10,
      page: 0,
      clipPath: "shape(from 92.42% 38.65%,curve to 90.29% 66.27% with 94.64% 52.81%,curve to 73.50% 86.41% with 85.93% 79.73%,curve to 49.14% 87.70% with 61.07% 93.10%,curve to 29.16% 75.31% with 37.21% 82.29%,curve to 10.79% 57.61% with 21.11% 68.33%,curve to 6.04% 32.56% with 0.46% 46.88%,curve to 25.10% 11.90% with 11.61% 18.24%,curve to 50.85% 11.22% with 38.59% 5.56%,curve to 76.65% 20.69% with 63.11% 16.88%,curve to 92.42% 38.65% with 90.20% 24.49%)",
    },
    {
      id: "p2MiddleRight",
      bottom: "40%",
      left: "5%",
      rotation: gradientAngleRef.current,
      scale: 2.5,
      blurAmt: 3,
      page: 1.6,
      clipPath: "shape(from 91.13% 40.47%,curve to 92.84% 67.28% with 97.51% 52.99%,curve to 73.86% 84.39% with 88.17% 81.58%,curve to 46.85% 88.62% with 59.55% 87.20%,curve to 24.69% 81.05% with 34.15% 90.04%,curve to 15.44% 59.95% with 15.24% 72.06%,curve to 16.75% 35.62% with 15.65% 47.84%,curve to 28.11% 14.06% with 17.85% 23.40%,curve to 50.73% 10.82% with 38.37% 4.71%,curve to 73.92% 22.44% with 63.09% 16.93%,curve to 91.13% 40.47% with 84.75% 27.95%)",
    },
    {
      id: "p1MiddleLeft",
      bottom: "30%",
      left: "7%",
      rotation: gradientAngleRef.current,
      scale: 2.5,
      blurAmt: 3,
      page: 0,
      clipPath: "shape(from 92.88% 38.10%,curve to 86.83% 63.69% with 93.89% 52.76%,curve to 69.29% 79.46% with 79.77% 74.63%,curve to 46.76% 86.44% with 58.81% 84.30%,curve to 25.67% 79.88% with 34.72% 88.59%,curve to 12.67% 59.29% with 16.63% 71.18%,curve to 13.86% 35.89% with 8.71% 47.40%,curve to 29.89% 19.18% with 19.02% 24.37%,curve to 52.79% 13.26% with 40.75% 13.99%,curve to 78.35% 17.98% with 64.83% 12.54%,curve to 92.88% 38.10% with 91.86% 23.43%)",
    },
    {
      id: "p1BottomRight",
      bottom: "-5%",
      right: "0%",
      rotation: gradientAngleRef.current,
      scale: 2.5,
      blurAmt: 15,
      page: 0,
      clipPath: "shape(from 91.79% 39.05%,curve to 86.78% 63.37% with 94.62% 52.81%,curve to 69.49% 81.52% with 78.94% 73.94%,curve to 46.42% 91.27% with 60.04% 89.09%,curve to 23.66% 82.98% with 32.80% 93.44%,curve to 9.00% 59.80% with 14.51% 72.52%,curve to 8.84% 33.73% with 3.48% 47.07%,curve to 27.90% 18.83% with 14.20% 20.38%,curve to 54.71% 11.12% with 41.60% 17.27%,curve to 78.39% 15.13% with 67.82% 4.98%,curve to 91.79% 39.05% with 88.95% 25.28%)",
    },
    {
      id: "p2MiddleRightSmall",
      bottom: "60%",
      left: "5%",
      rotation: gradientAngleRef.current,
      scale: 1,
      blurAmt: 10,
      page: 1.6,
      clipPath: "shape(from 87.06% 41.29%,curve to 87.40% 64.71% with 92.47% 52.67%,curve to 70.58% 80.58% with 82.32% 76.74%,curve to 47.35% 85.07% with 58.84% 84.43%,curve to 24.59% 79.50% with 35.86% 85.72%,curve to 11.19% 60.35% with 13.31% 73.28%,curve to 13.11% 35.13% with 9.06% 47.42%,curve to 29.33% 19.84% with 17.17% 22.84%,curve to 52.65% 15.98% with 41.49% 16.85%,curve to 72.74% 22.51% with 63.81% 15.12%,curve to 87.06% 41.29% with 81.66% 29.91%)",
    },
    {
      id: "p3BottomRight",
      bottom: "-5%",
      right: "10%",
      rotation: gradientAngleRef.current,
      scale: 3.5,
      blurAmt: 6,
      page: 1.6,
      clipPath: "shape(from 83.21% 42.14%,curve to 81.99% 61.99% with 87.88% 52.38%,curve to 67.39% 77.70% with 76.10% 71.59%,curve to 47.06% 85.29% with 58.68% 83.80%,curve to 24.36% 80.04% with 35.44% 86.77%,curve to 12.81% 60.47% with 13.28% 73.30%,curve to 15.55% 35.89% with 12.34% 47.63%,curve to 29.64% 18.63% with 18.76% 24.16%,curve to 53.70% 10.24% with 40.53% 13.11%,curve to 72.71% 19.63% with 66.88% 7.38%,curve to 83.21% 42.14% with 78.54% 31.89%)",
    },
    {
      id: "p3TopRight",
      top: "5%",
      right: "20%",
      rotation: gradientAngleRef.current,
      scale: 1,
      blurAmt: 10,
      page: 1.6,
      clipPath: "shape(from 91.61% 38.91%,curve to 89.88% 66.21% with 93.90% 52.76%,curve to 73.30% 85.76% with 85.85% 79.66%,curve to 47.30% 91.31% with 60.75% 91.85%,curve to 27.89% 79.30% with 33.86% 90.78%,curve to 17.10% 57.72% with 21.93% 67.82%,curve to 14.55% 35.09% with 12.26% 47.63%,curve to 27.98% 15.10% with 16.83% 22.56%,curve to 53.07% 7.32% with 39.12% 7.64%,curve to 78.17% 16.03% with 67.02% 7.01%,curve to 91.61% 38.91% with 89.32% 25.05%)",
    },
  ];

  useEffect(() => {
    // Initialize GSAP timeline for smooth transitions
    const tl = gsap.timeline()

    // Init floating assets pos
    floatingAssetsRefs.current.forEach((assetEl, i) => {
      if (assetEl) {
        const assetData = floatingAssetsConfig[i];
        const startingPos = 0 + (assetData.page * window.innerWidth);

        gsap.set(assetEl, { 
          x: startingPos,
          rotate: assetData.rotation,
          scale: assetData.scale,
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

    // Start continuous gradient oscillation
    startContinuousGradientAnimation()

    return () => {
      // Clean up continuous animation on unmount
      if (continuousAnimationRef.current) {
        continuousAnimationRef.current.kill()
      }
    }
  }, [])

  // Star scroll movement animation
  useEffect(() => {
    const activeScrollContainer = scrollRefs.current[activeSection];
    if (!activeScrollContainer) return;

    // Create optimized GSAP setters for Y transforms
    const ySetters = floatingAssetsRefs.current.map((assetE1) =>
      gsap.quickTo(assetE1, "y", {
        duration: 0.1,
        ease: "power1.out",
      })
    );

    let scrollAnimationFrame = null;

    const handleScroll = () => {
      if (scrollAnimationFrame) return;

      scrollAnimationFrame = requestAnimationFrame(() => {
        const scrollY = activeScrollContainer.scrollTop;

        ySetters.forEach((setY) => {
          const offset = -scrollY * 0.1;
          setY(offset);
        });

        scrollAnimationFrame = null;
      });
    };

    activeScrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      activeScrollContainer.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(scrollAnimationFrame);
    };
  }, [activeSection]);

  const startContinuousGradientAnimation = () => {
    if (continuousAnimationRef.current) {
      continuousAnimationRef.current.kill()
    }

    continuousAnimationRef.current = gsap.to(backgroundRef.current, {
      "--gradient-angle": `${gradientAngleRef.current + 5}deg`,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      onUpdate: function () {
        // Keep track of the current base angle for section changes
        const currentAngle = Number.parseFloat(this.targets()[0].style.getPropertyValue("--gradient-angle"))
        // Don't update gradientAngleRef during oscillation to maintain base angle
      },
    })
  }

  const navigateToSection = (index) => {
    if (containerRef.current && backgroundRef.current) {

      const translateX = -index * window.innerWidth;

      // Calculate new gradient angle (30 degrees per section)
      const newBaseAngle = 150 + index * 30
      gradientAngleRef.current = newBaseAngle

      // Kill the continuous animation temporarily
      if (continuousAnimationRef.current) {
        continuousAnimationRef.current.kill()
      }

      // Animate both the section transition and gradient angle
      const tl = gsap.timeline({
        onComplete: () => {
          // Restart continuous animation with new base angle
          startContinuousGradientAnimation()
        },
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
      ) // Start at the same time as the section transition

      // floating assets parallax animation
      floatingAssetsRefs.current.forEach((asset, i) => {
        if (asset) {
          const starOffset = -(index - activeSection) * (window.innerWidth * 0.8);
          gsap.to(asset, {
            x: `+=${starOffset}`,
            rotation: newBaseAngle,
            duration: 0.8,
            ease: "power2.inOut",
          });
        }
      });

      setActiveSection(index)
    }
  }

  const toggleWorkItem = (itemKey) => {
    setExpandedWorkItem(expandedWorkItem === itemKey ? null : itemKey)
  }

  const HeroVisual = () => (
      <ImageFollow
        image={cursorImage}
        containerRef={backgroundRef} // .portfolio-container
        boundsRef={heroVisualContainerRef} // .hero-visual-container
      />
  )

  const workData = {
    video: [
      {
        key: "speedbooking",
        title: "SpeedBooking UK",
        role: "Motion Graphics Editor",
        description:
          "Created engaging animation and motion graphics utilizing Adobe After Effects to accompany informative content. \
          Worked alongside the client to narrow down requirements, extract key ideas, write scripts and bring their vision to life. \
          Also Designed compelling promotional content that increased customer engagement and contributed to a higher conversion \
          rate for fast-track driving test bookings",
        details:
          "Produced over 30 promotional and informative videos for social media platforms.",
        logo: speedbookingLogo,
      },
      {
        key: "anthem",
        title: "Anthem",
        role: "Creative Director",
        description: "Full creative direction for music video production and brand storytelling.",
        details:
          "Directed and edited multiple music videos, handled color grading, and managed post-production workflow.",
        logo: anthemLogo,
      },
      {
        key: "bricked",
        title: "Bricked Co",
        role: "Editor",
        description:
          "Full length videos for the brand including music videos, short content, sound effects, etc. Have been doing this for several years now. Passion project of mine.",
        testimonial: '"This guy is pretty chill lowkey"',
        client: "- Client Co-Owner",
        details:
          "Long-term collaboration producing weekly content, music videos, and brand campaigns. Managed entire post-production pipeline.",
        logo: brickedLogo,
      },
    ],
    coding: [
      {
        key: "standardfusion",
        title: "StandardFusion",
        role: "Full Stack Developer",
        description: "Built a comprehensive business management platform using React and Node.js.",
        details:
          "Developed custom CRM, inventory management, and reporting systems. Integrated payment processing and automated workflows.",
      },
      {
        key: "ltb",
        title: "LT&B Consulting",
        role: "Frontend Developer",
        description: "Created responsive web applications for consulting firm clients.",
        details:
          "Built multiple client portals, implemented data visualization dashboards, and optimized for mobile performance.",
      },
      {
        key: "portfolio",
        title: "Personal Portfolio",
        role: "Designer & Developer",
        description: "This very website you're looking at! Built with React, GSAP, and lots of creativity.",
        details: "Designed in Figma, built with React and Next.js, animated with GSAP, and deployed on Vercel.",
      },
    ],
    design: [
      {
        key: "hercules",
        title: "M Hercules Fitness",
        role: "Brand Designer",
        description: "Complete brand identity design for fitness coaching business.",
        details:
          "Created logo, brand guidelines, marketing materials, and social media templates. Designed mobile app UI/UX.",
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
            filter: `blur(${asset.blurAmt}px)`
          }}
        >
          <div 
            ref={(el) => (floatingAssetsRefs.current[i] = el)}
            className="floating-asset" 
            style = {{
              clipPath: asset.clipPath,
            }}
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
                            <HeroVisual />
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
                          <HeroVisual />
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
                                    <video autoPlay loop muted playsInline src={reel} controls />
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
                                <img src={project.logo} className="project-logo" />
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
                                <img src={project.logo} className="project-logo" />
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
                          <HeroVisual />
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
                            <HeroVisual />
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