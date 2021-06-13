import React from 'react';
import Head from 'next/head';

import {
  Services, Contents, Hero, Navbar, Footer,
} from '../components';

export default () => (
  <div>
    <head>
      <title>ChingHub - Precision Medicine Hub</title>

<meta name="image" property="og:image" content="./assets/illustration-2.svg"/>

    <meta
          property="og:description"
          content="ChingHub is a global network accelerating precision medicine and immunotherapy research"
        />
        <meta property="og:image" content="./assets/illustration-2.svg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@CoderRocketFuel" />
<meta name="twitter:title" content="Embed a Twitch Video into a React Website" />
<meta name="twitter:description" content="ChingHub is a global network accelerating precision medicine and immunotherapy research" />
<meta name="twitter:image" content="./assets/illustration-2.svg" />

    </head>
    <Navbar />
    <Hero />
    <Services />
    <Contents />
    <Footer />
  </div>
);
