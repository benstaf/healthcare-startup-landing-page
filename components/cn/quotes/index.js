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
   
    </section>
  );
};

export default Quotes;
