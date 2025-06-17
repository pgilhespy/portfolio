"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { Instagram, Linkedin, ArrowUpRight } from "lucide-react"
import starVideo from './Content/chrome1.1.webm';
import './globals.css';

export default function Portfolio() {
  const containerRef = useRef(null)
  const backgroundRef = useRef(null)
  const [activeSection, setActiveSection] = useState(0)
  const [expandedWorkItem, setExpandedWorkItem] = useState(null)
  const sectionsRef = useRef([])
  const gradientAngleRef = useRef(150) // Starting angle
  const continuousAnimationRef = useRef(null)

  useEffect(() => {
    // Initialize GSAP timeline for smooth transitions
    const tl = gsap.timeline()

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
      const translateX = -index * 100

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
        x: `${translateX}vw`,
        duration: 0.8,
        ease: "power2.inOut",
      }).to(
        backgroundRef.current,
        {
          "--gradient-angle": `${newBaseAngle}deg`,
          duration: 2.0,
          ease: "power1.inOut",
        },
        0,
      ) // Start at the same time as the section transition

      setActiveSection(index)
    }
  }

  const toggleWorkItem = (itemKey) => {
    setExpandedWorkItem(expandedWorkItem === itemKey ? null : itemKey)
  }

  const StarIcon = () => (
      <video 
            className='floating-video' 
            autoPlay 
            loop 
            muted 
            playsInline
            src={starVideo}
        >
        </video>
  )

  const workData = {
    video: [
      {
        key: "speedbooking",
        title: "SpeedBooking UK",
        role: "Video Editor",
        description:
          "Created promotional videos and social media content for the UK's leading speed networking platform.",
        details:
          "Produced over 50 promotional videos, managed social media video content, and created brand identity videos.",
      },
      {
        key: "anthem",
        title: "Anthem",
        role: "Creative Director",
        description: "Full creative direction for music video production and brand storytelling.",
        details:
          "Directed and edited multiple music videos, handled color grading, and managed post-production workflow.",
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
      <div ref={containerRef} className="sections-wrapper">
        {/* HOME SECTION */}
        <section className="portfolio-section home-section">
          <div className="container-fluid h-100">
            <div className="row h-100">
              <div className="col-12 d-flex flex-column justify-content-between p-4">
                <div className="content-area">
                  <div className="content-card">
                    <div className="hero-content">
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

                      <div className="star-container">
                        <StarIcon />
                      </div>

                      <div className="description">
                        <p>
                          <b>I'm a 22 year</b> old creative who likes to make things that people can use, watch and enjoy. I
                          like to think I'm quite good at what I do and I'm both quite willing and able to prove it to
                          you. So please, have a look around and see what you think.
                        </p>
                      </div>

                      <button className="cta-button" onClick={() => navigateToSection(1)}>See My Projects</button>
                    </div>
                  </div>
                </div>

                <div className="footer-info">
                  <span className="name">Philip Gilhespy</span>
                  <div className="social-links">
                    <Instagram size={20} />
                    <Linkedin size={20} />
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORK SECTION */}
        <section className="portfolio-section work-section">
          <div className="container-fluid h-100">
            <div className="row h-100">
              <div className="col-12 d-flex flex-column justify-content-between p-4">
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
                                <div className="project-dot"></div>
                              </div>
                              {expandedWorkItem === project.key && (
                                <div className="work-item-expanded">
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
                                <div className="project-dot"></div>
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
                                <div className="project-dot"></div>
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
                    <Instagram size={20} />
                    <Linkedin size={20} />
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="portfolio-section contact-section">
          <div className="container-fluid h-100">
            <div className="row h-100">
              <div className="col-12 d-flex flex-column justify-content-between p-4">
                <div className="content-area">
                  <div className="content-card">
                    <div className="contact-content">
                      <div className="contact-header">
                        <div className="star-container contact-star">
                          <StarIcon />
                        </div>
                        <div className="contact-titles">
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
                      </div>

                      <div className="contact-body">
                        <div className="profile-section">
                          <div className="profile-placeholder">Picture Of Me</div>
                          <button className="email-button">Email Me</button>
                        </div>

                        <div className="contact-info">
                          <p>
                            I'm always looking for projects to work on, whether that's a simple design or a combination
                            of the 3 skills needed to create and run here to help. So please don't hesitate to get in
                            touch and let's discuss further.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="footer-info">
                  <span className="name">Philip Gilhespy</span>
                  <div className="social-links">
                    <Instagram size={20} />
                    <Linkedin size={20} />
                    <ArrowUpRight size={20} />
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