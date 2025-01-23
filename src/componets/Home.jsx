import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Koja </h1>
          <p>Your style, our passion.</p>
          <a href="/services" className="cta-button">Explore Services</a>
        </div>
      </header>

      <main>
        <section id="intro" className="intro">
          <p>We offer a variety of services to make you look your best. Take a look at some of our top services and book an appointment today!</p>
        </section>

        <section id="gallery" className="masonry-grid">
          <div className="masonry-card">
            <img src="https://i.pinimg.com/236x/a2/d1/3d/a2d13d16b9a0233b5b2f1ec9ddd51b1c.jpg" alt="Service 1" />
            <div className="masonry-card-content">
              <h3>Haircuts</h3>
            </div>
          </div>
          <div className="masonry-card">
            <img src="https://i.pinimg.com/236x/7b/f5/cc/7bf5cc408f5cfc44e8e63f0cdfee986c.jpg" alt="Service 2" />
            <div className="masonry-card-content">
              <h3>Shaves</h3>
            </div>
          </div>
          <div className="masonry-card">
            <img src="https://i.pinimg.com/236x/0c/61/f1/0c61f117b84c067e2121ace235825e6f.jpg" alt="Service 3" />
            <div className="masonry-card-content">
              <h3>Beard Trimming</h3>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 Barber Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
