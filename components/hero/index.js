import React from 'react';

export default () => (
  <section className="header" id="hero">
    <div className="header__text-box">
      <h1>Virtual healthcare for you</h1>
      <p>
        Trafalgar provides progressive, and affordable
        healthcare, accessible on mobile and online
        for everyone
      </p>
      <button type="button" className="btn btn-rounded-big">
        Consult today
      </button>
    </div>
    <div className="header__draw">
      <img
        src="./assets/illustration.svg"
        alt="illustration"
      />
    </div>
  </section>
);
