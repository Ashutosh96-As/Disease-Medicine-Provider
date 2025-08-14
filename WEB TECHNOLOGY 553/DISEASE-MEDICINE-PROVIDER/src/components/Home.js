import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Priya Sharma",
      avatar: "https://img.freepik.com/free-photo/indian-female-patient-smiling_1157-48148.jpg",
      rating: "★★★★★",
      text: "Dr. Arun Kumar was exceptional! The staff was friendly and helped me find the right medication for my condition. Very satisfied with the care provided.",
      service: "Medicine Delivery",
      date: "2 days ago"
    },
    {
      name: "Rajesh Patel",
      avatar: "https://img.freepik.com/free-photo/indian-businessman-medical-appointment_1157-48150.jpg",
      rating: "★★★★★",
      text: "I appreciate the quick delivery service and the professional consultation with Dr. Meera Reddy. She was very knowledgeable and patient in explaining everything.",
      service: "Online Consultation",
      date: "1 week ago"
    },
    {
      name: "Meera Gupta",
      avatar: "https://img.freepik.com/free-photo/elderly-indian-patient-medical-checkup_1157-48155.jpg",
      rating: "★★★★★",
      text: "The online consultation feature with Dr. Vikram Singh is excellent. Being a senior citizen, it's very convenient to get medical advice from home. Thank you!",
      service: "Health Education",
      date: "3 days ago"
    }
  ];

  return (
    <div>
      <header>
        <h1>Disease Medicine Provider</h1>
      </header>

      <div className="hero">
        <h1>Your Trusted Partner for Quality Medicines</h1>
        <p>Providing effective solutions for your health needs.</p>
        <Link to="/services" className="cta">Explore Medicines & More</Link>
      </div>

      <section className="feature-cards">
        <div className="feature-card">
          <h3>Book Doctor Appointment</h3>
          <p>Schedule an appointment with our experienced doctors for personalized healthcare.</p>
          <div className="feature-buttons">
            <Link to="/appointment" className="feature-btn">Book Now</Link>
          </div>
        </div>
        <div className="feature-card">
          <h3>Online Consultation</h3>
          <p>Get expert medical advice from the comfort of your home.</p>
          <div className="feature-buttons">
            <Link to="/consultation" className="feature-btn">Consult Now</Link>
          </div>
        </div>
        <div className="feature-card">
          <h3>Search Medicines</h3>
          <p>Search and Order Your Medicines and receive it at Your Doorstep.</p>
          <div className="feature-buttons">
            <Link to="/medicines" className="feature-btn">Order Now</Link>
          </div>
        </div>
        <div className="feature-card">
          <h3>Medicine Delivery</h3>
          <p>Order your prescribed medicines by Doctor and get them delivered to your doorstep.</p>
          <div className="feature-buttons">
            <Link to="/delivery" className="feature-btn">Order Now</Link>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="https://img.freepik.com/free-photo/indian-medical-team-modern-hospital_1157-48149.jpg" alt="Our Hospital" className="about-img" />
            <div className="experience-badge">
              <span className="years">15+</span>
              <span className="text">Years of Excellence</span>
            </div>
          </div>
          <div className="about-text">
            <p>At Disease Medicine Provider, we are committed to delivering high-quality medicines and healthcare solutions tailored to meet the needs of our patients. Our team of experienced professionals ensures that you receive the best care and support throughout your health journey.</p>
            <div className="stats-container">
              <div className="stat-item">
                <img src="https://img.freepik.com/free-photo/indian-patients-waiting-hospital_1157-48151.jpg" alt="Patients" className="stat-icon" />
                <span className="stat-number">50K+</span>
                <span className="stat-label">Happy Patients</span>
              </div>
              <div className="stat-item">
                <img src="https://img.freepik.com/free-photo/indian-doctors-team-meeting_1157-48152.jpg" alt="Doctors" className="stat-icon" />
                <span className="stat-number">100+</span>
                <span className="stat-label">Expert Doctors</span>
              </div>
              <div className="stat-item">
                <img src="https://img.freepik.com/free-photo/indian-medical-support-staff_1157-48153.jpg" alt="Support" className="stat-icon" />
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
            <Link to="/about" className="learn-more-btn">Learn More About Us</Link>
          </div>
        </div>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <img src="https://img.freepik.com/free-photo/indian-pharmacist-arranging-medicines_1157-48144.jpg" alt="Prescription Medications" className="service-img" />
            <div className="service-icon">💊</div>
            <h3>Prescription Medications</h3>
            <p>A wide range of medicines available based on your doctor's prescriptions. Managed by Dr. Amit Verma, Head Pharmacist.</p>
            <ul className="service-features">
              <li>✓ 24/7 Availability</li>
              <li>✓ Home Delivery</li>
              <li>✓ Quality Assured</li>
            </ul>
            <div className="service-footer">
              <span className="service-badge">Most Popular</span>
              <Link to="/medicines" className="service-link">View Medicines</Link>
            </div>
          </div>
          {/* Add other service items similarly */}
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Patients Say</h2>
        <div className="testimonial-container">
          <div className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`testimonial ${index === currentTestimonial ? 'active' : ''}`}>
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
                    <div className="testimonial-info">
                      <h4>{testimonial.name}</h4>
                      <div className="rating">{testimonial.rating}</div>
                      <span className="verified">✓ Verified Patient</span>
                    </div>
                  </div>
                  <blockquote>{testimonial.text}</blockquote>
                  <div className="testimonial-footer">
                    <span className="service-type">{testimonial.service}</span>
                    <span className="review-date">{testimonial.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="slider-nav">
            <button className="nav-btn prev" onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}>❮</button>
            <div className="slider-dots">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
            <button className="nav-btn next" onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}>❯</button>
          </div>
        </div>
      </section>

      <section className="additional-features">
        <h2>Additional Services</h2>
        <div className="features-grid">
          <div className="feature-box">
            <div className="feature-icon">🏥</div>
            <h3>Emergency Care</h3>
            <p>24/7 emergency medical assistance available.</p>
            <div className="feature-details">
              <span className="availability">Available 24/7</span>
              <Link to="/emergency" className="feature-link">Get Help</Link>
            </div>
          </div>
          {/* Add other feature boxes similarly */}
        </div>
      </section>

      <div className="quick-actions">
        <button className="action-btn emergency-btn" onClick={() => window.location.href = '/emergency'}>
          <span className="pulse"></span>
          Emergency Care
        </button>
        <button className="action-btn chat-btn" onClick={() => window.open('/chat', '_blank')}>
          Live Chat Support
        </button>
        <button className="action-btn locate-btn" onClick={() => window.open('/locations', '_blank')}>
          Find Nearest Center
        </button>
      </div>
    </div>
  );
}

export default Home; 