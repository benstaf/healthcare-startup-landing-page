import React from 'react';
import Head from 'next/head';

import {
  Services_cn, Contents_cn, Hero_cn, Navbar_cn, Footer_cn,
} from '../components';

export default () => (
  <div>
    <Head>
      <title> 精中心 (ChingHub) - 精密医学 中心</title>
    </Head>
    <Navbar_cn />
    <Hero_cn />
    <Services_cn />
    <Contents_cn />
    <Footer_cn />
  </div>
);
