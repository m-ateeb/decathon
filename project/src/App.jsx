import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button, Form, Card } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const services = [
  {
    title: 'Cloud Computing',
    description: 'Modernize your infrastructure with our cloud solutions.',
    icon: '☁️'
  },
  {
    title: 'DevOps',
    description: 'Streamline your development and operations processes.',
    icon: '🔄'
  },
  {
    title: 'Automation',
    description: 'Optimize workflows with intelligent automation solutions.',
    icon: '⚙️'
  },
  {
    title: 'Cybersecurity',
    description: 'Protect your business with advanced security measures.',
    icon: '🔒'
  }
];

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Lead Developer',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200',
    description: 'Expert in full-stack development and digital transformation strategies.'
  },
  {
    name: 'Michaelee',
    role: 'CTO & Technical Lead',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200',
    description: 'Specializes in cloud architecture and enterprise solutions.'
  }
];

const testimonials = [
  {
    name: 'Mike Smith',
    company: 'Tech Solutions Inc.',
    text: 'Their expertise in cloud migration transformed our business operations.'
  },
  {
    name: 'Sarah Johnson',
    company: 'Digital Innovations',
    text: 'The automation solutions provided have increased our efficiency by 200%.'
  },
  {
    name: 'Michael Brown',
    company: 'Future Systems',
    text: 'Outstanding service and technical knowledge. Highly recommended!'
  },
  {
    name: 'Emily Davis',
    company: 'Innovative Tech',
    text: 'Their DevOps integration streamlined our processes significantly.'
  },
  {
    name: 'David Wilson',
    company: 'SecureNet',
    text: 'The cybersecurity measures implemented by The Explorer are top-notch.'
  },
  {
    name: 'Jessica Lee',
    company: 'NextGen Solutions',
    text: 'The cloud computing services provided by The Explorer are exceptional.'
  },
  {
    name: 'Daniel Martinez',
    company: 'Tech Innovators',
    text: 'Their automation solutions have significantly improved our productivity.'
  }
];

const pricingPlans = {
  monthly: [
    {
      name: 'Basic',
      price: 999,
      features: ['Cloud Consulting', '24/7 Support', 'Security Assessment']
    },
    {
      name: 'Professional',
      price: 1999,
      features: ['Cloud Consulting', '24/7 Support', 'Security Assessment', 'DevOps Integration']
    },
    {
      name: 'Enterprise',
      price: 3999,
      features: ['Cloud Consulting', '24/7 Support', 'Security Assessment', 'DevOps Integration', 'Custom Solutions']
    },
    
  ],
  yearly: [
    {
      name: 'Basic',
      price: 899,
      features: ['Cloud Consulting', '24/7 Support', 'Security Assessment']
    },
    {
      name: 'Professional',
      price: 1799,
      features: ['Cloud Consulting', '24/7 Support', 'Security Assessment', 'DevOps Integration']
    },
    {
      name: 'Enterprise',
      price: 3599,
      features: ['Cloud Consulting', '24/7 Support', 'Security Assessment', 'DevOps Integration', 'Custom Solutions']
    }
  ]
};

function FadeInSection({ children }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div ref={ref} className={`fade-in ${inView ? 'visible' : ''}`}>
      {children}
    </div>
  );
}

function App() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div>
      <Navbar expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="home" smooth={true}>The Explorer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="home" smooth={true} duration={500}>Home</Nav.Link>
              <Nav.Link as={Link} to="about" smooth={true} duration={500}>About</Nav.Link>
              <Nav.Link as={Link} to="services" smooth={true} duration={500}>Services</Nav.Link>
              <Nav.Link as={Link} to="testimonials" smooth={true} duration={500}>Testimonials</Nav.Link>
              <Nav.Link as={Link} to="pricing" smooth={true} duration={500}>Pricing</Nav.Link>
              <Nav.Link as={Link} to="contact" smooth={true} duration={500}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section id="home" className="hero-section d-flex align-items-center text-white">
        <Container>
          <div className="hero-content">
            <h1 className="display-4 fw-bold mb-4">Welcome to The Explorer</h1>
            <p className="lead mb-4">Transform Your Business with Modern IT Solutions</p>
            <p className="mb-5">Empowering businesses through digital transformation and innovative technology solutions.</p>
            <Button variant="primary" size="lg" className="btn-custom">Get a Free Consultation</Button>
          </div>
        </Container>
      </section>

      <section id="about" className="about-section">
        <Container>
          <FadeInSection animationClass="slide-in-left">
            <div className="about-content">
              <h2 className="text-center mb-4">About The Explorer</h2>
              <p className="lead mb-5">
                The Explorer is a leading IT consulting firm dedicated to helping businesses navigate 
                the complex landscape of digital transformation. With over a decade of experience, 
                we've successfully guided countless organizations through their technological evolution, 
                combining innovative solutions with practical implementation strategies.
              </p>
              <p className="mb-5">
                Our commitment to excellence and deep understanding of emerging technologies enables 
                us to deliver customized solutions that drive real business value. Whether you're 
                looking to modernize your infrastructure, optimize operations, or enhance security, 
                our team of experts is here to guide you every step of the way.
              </p>
            </div>
            <h3 className="text-center mb-5">Our Team</h3>
            <div className="row justify-content-center">
              {teamMembers.map((member, index) => (
                <div key={index} className="col-md-5">
                  <div className="team-member">
                    <img src={member.image} alt={member.name} />
                    <h4 className="mb-2">{member.name}</h4>
                    <p className="text-primary mb-2">{member.role}</p>
                    <p className="description">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </Container>
      </section>

      <section id="services" className="py-5">
        <Container>
          <FadeInSection>
            <h2 className="text-center mb-5">Our Services</h2>
            <div className="row">
              {services.map((service, index) => (
                <div key={index} className="col-md-6 col-lg-3 mb-4">
                  <Card className="service-card h-100 text-center">
                    <Card.Body>
                      <div className="service-icon">{service.icon}</div>
                      <Card.Title className="mb-3">{service.title}</Card.Title>
                      <Card.Text>{service.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </FadeInSection>
        </Container>
      </section>

      <section id="testimonials" className="py-5">
        <Container>
          <FadeInSection>
            <h2 className="text-center mb-5">Client Testimonials</h2>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true,  padding: 15 }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                768: {
                  slidesPerView: 2
                },
                992: {
                  slidesPerView: 3
                }
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-card">
                    <p className="mb-3 lead">{testimonial.text}</p>
                    <h5 className="mb-1 fw-bold">{testimonial.name}</h5>
                    <p className="text-primary">{testimonial.company}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </FadeInSection>
        </Container>
      </section>

      <section id="pricing" className="py-5">
        <Container>
          <FadeInSection>
            <h2 className="text-center mb-4">Pricing Plans</h2>
            <div className="text-center">
              <div className="pricing-toggle mb-4">
                <button
                  className={!isYearly ? 'active' : ''}
                  onClick={() => setIsYearly(false)}
                >
                  Monthly
                </button>
                <button
                  className={isYearly ? 'active' : ''}
                  onClick={() => setIsYearly(true)}
                >
                  Yearly
                </button>
              </div>
            </div>
            <div className="row">
              {(isYearly ? pricingPlans.yearly : pricingPlans.monthly).map((plan, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <Card className="pricing-card">
                    <Card.Body>
                      <Card.Title className="mb-4">{plan.name}</Card.Title>
                      <div className="display-4 my-3">
                        ${plan.price}
                        <span className="fs-6 text-muted">/{isYearly ? 'year' : 'month'}</span>
                      </div>
                      <ul className="list-unstyled mb-4">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="mb-2">✓ {feature}</li>
                        ))}
                      </ul>
                      <div className="btn-wrapper">
                        <Button className="w-100">Choose Plan</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </FadeInSection>
        </Container>
      </section>

      <section id="contact" className="py-5">
        <Container>
          <FadeInSection>
            <h2 className="text-center mb-5">Contact Us</h2>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <Form className="contact-form">
                  <Form.Group className="mb-4">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Your message" />
                  </Form.Group>
                  <Button type="submit" className="w-100">Send Message</Button>
                </Form>
              </div>
            </div>
          </FadeInSection>
        </Container>
      </section>

      <footer className="footer">
        <Container>
          <div className="row">
            <div className="col-md-4 footer-content">
              <h4 className="mb-4">The Explorer</h4>
              <p>Transforming businesses through innovative IT solutions and digital transformation.</p>
            </div>
            <div className="col-md-4 footer-content">
              <h5 className="mb-4">Quick Links</h5>
              <ul className="footer-links">
                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
                <li><Link to="testimonials" smooth={true} duration={500}>Testimonials</Link></li>
                <li><Link to="pricing" smooth={true} duration={500}>Pricing</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
              </ul>
            </div>
            <div className="col-md-4 footer-content">
              <h5 className="mb-4">Contact Info</h5>
              <p>Email: info@explorer.com</p>
              <p>Phone: +1 234 567 890</p>
              <div className="social-links mt-3">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <p>&copy; 2023 The Explorer. All rights reserved.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default App;