import React from 'react';
import '.././styles/landing.css';

const Landing = () => (
  <section className="landing">
    <section className="hero-content">
      <h1 className="hero-title">Turn the music up!</h1>
    </section>
    <section className="selling-points container">
      <div className="point column third">
        <span className="ion-music-note"></span>
        <h5 className="point-title">Choose your music</h5>
        <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
      </div>
      <div className="point column third">
        <span className="ion-radio-waves"></span>
        <h2 className="point-title">Unlimited, streaming, ad-free</h2>
        <p className="point-description">No arbitrary limits. No distractions.</p>
      </div>
      <div className="point column third">
        <span className="ion-iphone"></span>
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
      </div>
    </section>
  </section>
);

export default Landing;
