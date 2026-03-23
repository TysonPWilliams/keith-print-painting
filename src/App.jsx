import { useEffect, useState } from 'react'
import './App.css'
import { 
  Home, 
  Building2, 
  Palette, 
  Wrench, 
  Sparkles, 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle,
  Paintbrush,
  PaintRoller,
  Droplets,
  X
} from 'lucide-react'
import HeroSlideshow from './components/hero-slideshow.jsx'
import AboutSlideshow from './components/about-slideshow.jsx'


// Images served from public/images with base-aware paths

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <div className="app">
      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo">
            <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Keith Print Painting & Decorating" className="logo-image" />
            <div className="logo-text" aria-label="KP Painting & Decorating and Wallpapering">
              KP Painting & Decorating
            </div>
          </div>
          <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <div className="mobile-menu-logo">
              <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Keith Print Painting & Decorating" className="mobile-logo-image" />
            </div>
            <a href="#home" className="nav-link" onClick={closeMobileMenu}>Home</a>
            <a href="#services" className="nav-link" onClick={closeMobileMenu}>Services</a>
            <a href="#about" className="nav-link" onClick={closeMobileMenu}>About</a>
            <a href="#service-area" className="nav-link" onClick={closeMobileMenu}>Service Area</a>
            <a href="#contact" className="nav-link" onClick={closeMobileMenu}>Contact</a>
          </nav>
          <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <X className="close-icon" />
            ) : (
              <>
                <span></span>
                <span></span>
                <span></span>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h2 className="hero-title">Trusted Local Painter in the Shoalhaven</h2>
            <p className="hero-subtitle">
              Trusted by homeowners and businesses for over 30 years. We don't just paint walls – we create spaces 
              you'll love coming home to. Every project comes with our satisfaction guarantee.
            </p>
            <div className="hero-team" aria-label="Keith and Sam">
              {/* <img src={`${import.meta.env.BASE_URL}images/keith.jpeg`} alt="Keith and Sam" className="hero-team-photo" /> */}
              {/* <div className="hero-team-text">Keith & Sam – friendly, local and professional</div> */}
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <strong>100+</strong>
                <span>Satisfied Customers</span>
              </div>
              <div className="stat-item">
                <strong>30+</strong>
                <span>Years Trusted</span>
              </div>
              <div className="stat-item">
                <strong>100%</strong>
                <span>Guaranteed Work</span>
              </div>
            </div>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get Your FREE Quote Today</a>
              <a href="#services" className="btn btn-secondary">See What We Do</a>
            </div>
          </div>
          <div className="hero-image">
            <HeroSlideshow />
            {/* <div className="hero-image-container">
              <img src={`${import.meta.env.BASE_URL}images/hero.jpeg`} alt="Professional Painting Services" className="hero-main-image" />
            </div> */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>We Make Your Vision Reality</h2>
            <p>From refreshing a single room to transforming your entire property – we handle it all with care and expertise</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <Home className="icon-home" />
              </div>
              <h3>Your Home, Beautifully Painted</h3>
              <p>Turn your house into the home of your dreams. We'll help you choose colours that reflect your personality and create spaces your family will love for years to come.</p>
              <ul className="service-features">
                <li>• FREE colour consultation with every project</li>
                <li>• Premium paints that last longer</li>
                <li>• Meticulous prep work (the secret to lasting results)</li>
                <li>• We clean up after ourselves</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Building2 className="icon-building" />
              </div>
              <h3>Professional Spaces That Impress</h3>
              <p>First impressions matter. We'll make your business look successful and inviting while working around your schedule so you never miss a beat.</p>
              <ul className="service-features">
                <li>• Durable finishes that reduce future costs</li>
                <li>• Fully licensed & insured (your peace of mind)</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Palette className="icon-palette" />
              </div>
              <h3>Make Every Room Special</h3>
              <p>Whether you want cozy and warm or modern and bold, we'll create interiors that make you smile every time you walk in the room.</p>
              <ul className="service-features">
                <li>• Colours that make you feel at home</li>
                <li>• Stunning accent walls that wow guests</li>
                <li>• Custom finishes you won't find anywhere else</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Wrench className="icon-wrench" />
              </div>
              <h3>The Foundation of Beautiful Paint</h3>
              <p>The difference between paint that lasts 2 years and paint that lasts 10 years? Proper preparation. We do the work others skip.</p>
              <ul className="service-features">
                <li>• Fix every crack and hole (no shortcuts)</li>
                <li>• Smooth surfaces for flawless finish</li>
                <li>• Premium primers for maximum durability</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Shield className="icon-shield" />
              </div>
              <h3>Protection That Pays For Itself</h3>
              <p>Smart property owners know that the right protective coating today prevents expensive repairs tomorrow. We'll help you choose what's right for your needs.</p>
              <ul className="service-features">
                <li>• Garage floors that resist stains & damage</li>
                <li>• Easy-clean surfaces for high-traffic areas</li>
                <li>• Industrial-strength solutions that last</li>
              </ul>
            </div>
            <div className="service-card wallpapering-special">
              <div className="service-icon">
                <Sparkles className="icon-sparkles" />
              </div>
              <h3>Wallpapering & Custom Finishes</h3>
              <p>Not many painters offer professional wallpapering – but we do! Transform your space with beautiful wallpapers, feature walls, and custom finishes that make your home truly unique.</p>
              <ul className="service-features">
                <li>• Professional wallpaper installation (rare skill!)</li>
                <li>• Feature walls that become conversation starters</li>
                <li>• Artistic faux finishes that impress</li>
                <li>• Luxurious metallic effects</li>
                <li>• Custom designs and accent walls</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Why Families & Businesses Choose Us</h2>
              <p>
                Your home is your biggest investment. Your business is your livelihood. That's why we treat every 
                project like it's our own. For over 30 years, we've been the painters that people recommend to 
                their friends and family – because we do the job right the first time.
              </p>
              <p>
                We know you have choices. What makes us different? We listen first, then create solutions that fit 
                your budget and timeline. No high-pressure sales, no surprise costs, no cutting corners. Just honest 
                work from people you can trust.
              </p>
              <div className="about-features">
                <div className="feature">
                  <CheckCircle className="feature-icon" />
                  <span>Fully Licensed & Insured (Your Protection)</span>
                </div>
                <div className="feature">
                  <CheckCircle className="feature-icon" />
                  <span>Always FREE Estimates (No Obligation)</span>
                </div>
                <div className="feature">
                  <CheckCircle className="feature-icon" />
                  <span>100% Satisfaction Guarantee</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="about-image-container">
                <AboutSlideshow />
                {/* <img src={`${import.meta.env.BASE_URL}images/about.jpeg`} alt="Professional Painting Team" className="about-main-image" /> */}
                {/* <div className="about-overlay">
                  <div className="about-icons">
                    <Paintbrush className="about-icon paintbrush" />
                    <PaintRoller className="about-icon roller" />
                  </div>
                  <span>Professional Team</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section id="service-area" className="service-area">
        <div className="container">
          <div className="section-header">
            <h2>Proudly Serving the Shoalhaven, South Coast & Surrounding Areas</h2>
            <p>Local painters you can trust, covering from Kiama to Ulladulla and everywhere in between</p>
          </div>
          <div className="service-area-content">
            <div className="service-area-map">
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d835300.9082927176!2d149.16531464753578!3d-35.1343143600925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b145d58ad975251%3A0x9743ce33a278efd!2sShoalhaven%20City%20Council%2C%20NSW!5e0!3m2!1sen!2sau!4v1757586800373!5m2!1sen!2sau"
                  width="100%" 
                  height="400" 
                  style={{border: 0}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Keith Print Painting Service Area - Vincentia NSW"
                ></iframe>
              </div>
            </div>
            <div className="service-locations">
              <h3>We Service These Local Areas:</h3>
              <div className="locations-grid">
                <div className="location-item">
                  <MapPin className="location-icon" />
                  <span>Kiama</span>
                </div>
                <div className="location-item">
                  <MapPin className="location-icon" />
                  <span>Berry</span>
                </div>
                <div className="location-item">
                  <MapPin className="location-icon" />
                  <span>Kangaroo Valley</span>
                </div>
                <div className="location-item">
                  <MapPin className="location-icon" />
                  <span>Nowra</span>
                </div>
                <div className="location-item">
                  <MapPin className="location-icon" />
                  <span>Bomaderry</span>
                </div>
                <div className="location-item">
                  <MapPin className="location-icon" />
                  <span>Vincentia</span>
                </div>
                <div className="location-item">
                  <MapPin className="location-icon" />
                  <span>Huskisson</span>
                </div>
                <div className="location-item">
                  <MapPin className="location-icon" />
                  <span>Jervis Bay</span>
                </div>
                <div className="location-item">
                  <MapPin className="location-icon" />
                  <span>Sanctuary Point</span>
                </div>
                <div className="location-item">
                  <MapPin className="location-icon" />
                  <span>St Georges Basin</span>
                </div>
                <div className="location-item">
                  <MapPin className="location-icon" />
                  <span>Shoalhaven Heads</span>
                </div>
                <div className="location-item">
                  <MapPin className="location-icon" />
                  <span>Ulladulla</span>
                </div>
              </div>
              <p className="service-note">
                <strong>Don't see your area?</strong> We often travel further for the right project. 
                Give us a call and we'll let you know if we can help!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Ready To Love Your Space Again?</h2>
            <p>Get your FREE, no-pressure estimate today. See exactly what your project will cost – no surprises, no hidden fees.</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone className="icon-phone" />
                </div>
                <div>
                  <h4>Call Now For Fast Service</h4>
                  <p>Speak to a real person, get answers today</p>
                  <a href="tel:0400734265" className="contact-link">0400 734 265</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail className="icon-mail" />
                </div>
                <div>
                  <h4>Email Us Anytime</h4>
                  <p>We respond within 24 hours, guaranteed</p>
                  <a href="mailto:kwprint@aol.com" className="contact-link">kwprint@aol.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin className="icon-map" />
                </div>
                <div>
                  <h4>We Come To You</h4>
                  <p>Serving the Shoalhaven, South Coast & surrounding areas</p>
                  <span className="contact-link">See our full service area above</span>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Your Phone" />
                </div>
                <div className="form-group">
                  <select required>
                    <option value="">Select Project Type</option>
                    <option value="interior">Interior Painting</option>
                    <option value="exterior">Exterior Painting</option>
                    <option value="commercial">Commercial Project</option>
                    <option value="specialty">Specialty Finish</option>
                    <option value="consultation">Colour Consultation</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="Describe your project: What rooms? What's your timeline? What's your biggest concern? (The more details, the more accurate your quote!)" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Get My FREE Quote Now</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Keith Print Painting & Decorating</h3>
              <p>30+ years of making spaces beautiful. Licensed, insured, and guaranteed.</p>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Residential Painting</a></li>
                <li><a href="#services">Commercial Painting</a></li>
                <li><a href="#services">Interior Decorating</a></li>
                <li><a href="#services">Specialty Finishes</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <ul>
                <li>Phone: 0400 734 265</li>
                <li>Email: kwprint@aol.com</li>
                <li>Service Area: Shoalhaven, South Coast & Surrounding Areas</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Keith Print Painting & Decorating. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
