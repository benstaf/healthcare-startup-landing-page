import React from 'react';
import Logo from './logo';

export default () => (
  <footer className="footer" id="footer">
    <div className="logo-container">
      <Logo />
      <p>
        Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online
        for everyone
      </p>
      <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
    </div>
    <div className="footer__links">
      <ul>
        <p>Company</p>
        <li>
          <a href="/#footer">About</a>
        </li>
        <li>
          <a href="/#quotes">Testimonials</a>
        </li>
        <li>
          <a href="/#services">Find a doctor</a>
        </li>
        <li>
          <a href="/#content">Apps</a>
        </li>
      </ul>
      <ul>
        <p>Region</p>
        <li>
          <a href="/">Indonesia</a>
        </li>
        <li>
          <a href="/">Singapore</a>
        </li>
        <li>
          <a href="/">Hongkong</a>
        </li>
        <li>
          <a href="/">Canada</a>
        </li>
      </ul>
      <ul>
        <p>Help</p>
        <li>
          <a href="/">Help center</a>
        </li>
        <li>
          <a href="/">Contact support</a>
        </li>
        <li>
          <a href="/">Instructions</a>
        </li>
        <li>
          <a href="/">How it works</a>
        </li>
      </ul>
    </div>
  </footer>

);
