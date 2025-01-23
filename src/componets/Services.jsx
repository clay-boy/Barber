import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

function Services() {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(null);
  const [testimonials, setTestimonials] = useState([
    { name: "Alex", feedback: "Best haircut I’ve ever had! The barbers are skilled and friendly.", rating: 5 },
    { name: "Sam", feedback: "The grooming package is a game-changer. Highly recommend!", rating: 4 },
    { name: "Chris", feedback: "Love the atmosphere and professionalism. Will definitely come back!", rating: 5 }
  ]);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (feedback && rating) {
      setTestimonials([...testimonials, { name: "New User", feedback, rating }]);
      setFeedback('');
      setRating(null);
      alert(`Thank you for your feedback!`);
    } else {
      alert("Please provide both a rating and feedback.");
    }
  };

  const services = [
    {
      title: 'Haircuts',
      description: 'Classic cuts, fades, and styles tailored to your preferences.',
      price: '$25',
      icon: '✂️',
    },
    {
      title: 'Shaves',
      description: 'Enjoy a clean, refreshing shave with hot towels.',
      price: '$20',
      icon: '🪒',
    },
    {
      title: 'Beard Trimming',
      description: 'Shape and style your beard to perfection.',
      price: '$15',
      icon: '🧔',
    },
    {
      title: 'Grooming Packages',
      description: 'A complete package for hair, beard, and style.',
      price: '$50',
      icon: '💇‍♂️',
    },
    {
      title: 'Hair Coloring',
      description: 'Custom hair coloring for a fresh, bold look.',
      price: '$40',
      icon: '🎨',
    },
    {
      title: 'Scalp Treatments',
      description: 'Nourishing treatments for healthy and vibrant hair.',
      price: '$30',
      icon: '💆‍♂️',
    },
  ];

  return (
    <div className="services">
      <h2>Our Services</h2>
      <p className="services-intro">
        Experience the best grooming services in town! Choose from our range of offerings tailored to meet your needs.
      </p>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <p className="service-price">{service.price}</p>
            <Link to='/booking'>
            <button className="book-button">
              Book Now
            </button>
            </Link>
          </div>
        ))}
      </div>

      <div className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <p>
          At Barber Shop, we pride ourselves on providing top-notch grooming services that leave you looking and feeling
          your best. Here’s what sets us apart:
        </p>
        <ul>
          <li>🕒 Flexible booking options</li>
          <li>✨ Professional and experienced barbers</li>
          <li>💈 Modern and clean facilities</li>
          <li>🌟 Affordable prices with premium quality</li>
        </ul>
      </div>

      <div className="testimonials">
        <h2>What Our Customers Say</h2>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p>“{testimonial.feedback}” - {testimonial.name}</p>
            <div className="rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${star <= testimonial.rating ? 'selected' : ''}`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="feedback-section">
        <h2>We Value Your Feedback!</h2>
        <form onSubmit={handleFeedbackSubmit} className="feedback-form">
          <label htmlFor="rating">Rate Our Services:</label>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className={`star ${rating === star ? 'selected' : ''}`}
                onClick={() => setRating(star)}
              >
                ★
              </button>
            ))}
          </div>

          <label htmlFor="feedback">Leave Your Feedback:</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Let us know about your experience..."
          ></textarea>

          <button type="submit" className="submit-button">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}

export default Services;
