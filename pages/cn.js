import React from 'react';
import Head from 'next/head';

import {
  Services, Contents, Hero_cn, Navbar, Footer,
} from '../components';

export default () => (
  <div>
    <Head>
      <title>ChingHub - Precision Medicine Hub</title>
    </Head>
    <Navbar />
    <Hero_cn />
    <Services />
    <Contents />
    <Footer />
  </div>
);
