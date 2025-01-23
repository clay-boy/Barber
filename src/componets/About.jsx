import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="container">
      <header>
        <h1>About Our Barber Shop</h1>
        <p>Where style meets precision.</p>
      </header>

      <section>
        <h2>Our Story</h2>
        <p>
          Established in 2020, our barber shop has been the go-to place for modern and classic haircuts. 
          With a passion for craftsmanship and customer satisfaction, we aim to provide an exceptional grooming experience.
        </p>
      </section>

      <section>
        <h2>Meet the Shop</h2>
        <div className="photo-gallery">
          <div className="photo">
            <img
              src="https://i.pinimg.com/236x/e3/75/c3/e375c39eed5bcc282be185a523a4fba6.jpg"
              alt="Barber Shop Interior"
            />
            <p>Our cozy and stylish interior.</p>
          </div>
          <div className="photo">
            <img
              src="https://i.pinimg.com/736x/8a/36/c1/8a36c1fe02df62cdad2e70dff2f6e43e.jpg"
              alt="Barber at work"
            />
            <p>Expert barbers ready to serve you.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Services Breakdown</h2>
        <p>
          We offer a wide range of grooming services designed to cater to every style:
          <ul>
            <li><strong>Classic Haircuts:</strong> Traditional cuts for a timeless look.</li>
            <li><strong>Beard Styling:</strong> Trims, shaping, and hot towel shaves.</li>
            <li><strong>Modern Fades:</strong> Clean, sharp, and stylish fades for the modern man.</li>
            <li><strong>Hair Coloring:</strong> Subtle highlights to bold color transformations.</li>
            <li><strong>Scalp Treatments:</strong> Refreshing treatments for healthy hair.</li>
            <li><strong>Men's Grooming Packages:</strong> Special packages for every need, from beard care to head-to-toe grooming.</li>
          </ul>
        </p>
      </section>

      <section>
        <h2>Client Testimonials & Reviews</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"I have been going here for over a year and the service is always top-notch. The barbers are friendly, and I always leave looking sharp!"</p>
            <p>- John D.</p>
          </div>
          <div className="testimonial">
            <p>"Best haircut I’ve had in years. The atmosphere is welcoming, and the staff is extremely professional. Highly recommend!"</p>
            <p>- Sarah M.</p>
          </div>
          <div className="testimonial">
            <p>"Amazing barbershop! They know their craft and make you feel right at home. I’ll definitely be coming back."</p>
            <p>- Tim G.</p>
          </div>
        </div>
      </section>



      <section>
        <h2>Grooming Tips</h2>
        <p>
          Here are some helpful grooming tips to keep you looking sharp:
          <ul>
            <li><strong>Stay hydrated:</strong> Healthy hair starts with proper hydration.</li>
            <li><strong>Use the right products:</strong> Invest in quality shampoo, conditioner, and styling products that suit your hair type.</li>
            <li><strong>Trim regularly:</strong> A little maintenance goes a long way in keeping your style fresh.</li>
            <li><strong>Consult your barber:</strong> Ask your barber for styling advice tailored to your hair type and lifestyle.</li>
          </ul>
        </p>
      </section>

      <section>
        <h2>Location & Hours</h2>
        <p>We're located at:</p>
        <p>Nairobi streets near </p>
        <p>Our Hours:</p>
        <ul>
          <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
          <li>Saturday: 9:00 AM - 4:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
        <p>Visit us today!</p>
      </section>

      <section>
        <h2>Book an Appointment</h2>
        <p>Ready to get styled? Book your appointment today and let our expert barbers take care of you!</p>
        <p><a href="/booking" className="btn">Book Now</a></p>
      </section>

      <section className="social-links">
        <h2>Connect With Us</h2>
        <p>Email us at: <a href="mailto:keithmwai40@gmail.com">📧</a></p>
        <p>Follow us on Instagram: <a href="https://www.instagram.com/rich_sil.k/" target="_blank" rel="noopener noreferrer">Insta</a></p>
      </section>
    </div>
  );
};

export default About;
