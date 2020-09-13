/* eslint-disable jsx-a11y/control-has-associated-label */

import React, { useState } from 'react';

import image from '../../public/assets/profile-pic.svg';

const quotes = [
  {
    client: 'Edward Newgate',
    company: 'Founder Circle',
    quote: 'Our dedicated patient engagement app and  web portal allow you to access information instant (no tedeous form, long calls, or administrative hassle) and securely.',
    image,
  },
  {
    client: 'Sweet Client',
    company: 'Apple',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit sapien vulputate ante pellentesque aliquam fermentum.',
    image,
  },
  {
    client: 'Dope Client',
    company: 'Samsung',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit sapien vulputate ante pellentesque aliquam fermentum. Interdum nunc arcu.',
    image,
  },
  {
    client: 'Cool Client',
    company: 'Huawei',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit sapien vulputate ante pellentesque aliquam fermentum.',
    image,
  },
];

const Quotes = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="quotes-container" id="quotes">
      <div className="quotes">
        <h2>What our customer are saying</h2>
        <div className="border" />
        <div className="quote">
          <div className="quote__author">
            <img src={quotes[current].image} alt="quote" />
            <div className="quote__author-texts">
              <p>{quotes[current].client}</p>
              <p>{quotes[current].company}</p>
            </div>
          </div>
          <div className="quote__text-box">
            <p>{quotes[current].quote}</p>
          </div>
        </div>
      </div>
      <div className="circles">
        {quotes.map((_quote, index) => (
          <span
            role="button"
            key={`quote + ${index + 1}`}
            onClick={() => setCurrent(index)}
            onKeyDown={() => setCurrent(index)}
            tabIndex={0}
          />
        ))}
      </div>
    </section>
  );
};

export default Quotes;
