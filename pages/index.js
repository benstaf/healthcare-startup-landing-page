import React from 'react';
import Head from 'next/head';

import {
  Services, Contents, Quotes, Hero, Blog, Navbar, Footer,
} from '../components';

export default () => (
  <div>
    <Head>
      <title>Trafalgar - Landing page for a healthcare startup</title>
    </Head>
    <Navbar />
    <Hero />
    <Services />
    <Contents />
    <Quotes />
    <Blog />
    <Footer />
  </div>
);
