import React from 'react';
import { FiArrowDown } from 'react-icons/fi';

export default () => (
  <section className="contents" id="contents">
    <article className="providers">
      <div className="providers__draw">
        <img
          src="./assets/illustration-2.svg"
          alt="illustration"
        />
      </div>
      <div className="providers__text-box">
        <h1>Leading healthcare providers</h1>
        <div className="border" />
        <p>
          Trafalgar provides progressive,
          and affordable healthcare,
          accessible on mobile and online for
          everyone. To us, it’s not just work.
          We take pride in the solutions we deliver
        </p>
        <button type="button" className="btn btn-outline-big">
          Learn more
        </button>
      </div>
    </article>
    <div className="providers">
      <div className="providers__text-box">
        <h1>
          Download our
          mobile apps
        </h1>
        <div className="border" />
        <p>
          Our dedicated patient engagement app and
          web portal allow you to access information instantaneously (no tedeous form, long calls,
          or administrative hassle) and securely
        </p>
        <button type="button" className="btn btn-outline-big">
          Download
          <FiArrowDown style={{ verticalAlign: 'middle', marginLeft: '5px', marginTop: '-2px' }} />
        </button>
      </div>
      <div className="providers__draw">
        <img
          src="./assets/illustration-3.svg"
          alt="illustration"
        />
      </div>
    </div>
  </section>
);
