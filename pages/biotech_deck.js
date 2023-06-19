import React from 'react';
import Head from 'next/head';

import {
  Services, Contents, Media_Coverage, Hero, Navbar, Footer, ChatwootWidget, 
} from '../components';



export default () => (
  <div>
    <Head>
      <title>ChingHub - Tech and Medicine Network</title>
<meta name="image" property="og:image" content="./assets/illustration-2.svg"/>
    <meta
          property="og:description"
          content="ChingHub is a global network accelerating research and business in Tech and Medicine"
        />
        <meta property="og:image" content="./assets/illustration-2.svg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@CoderRocketFuel" />
<meta name="twitter:title" content="Embed a Twitch Video into a React Website" />
<meta name="twitter:description" content="ChingHub is a global network accelerating Tech and Medicine research and business" />
<meta name="twitter:image" content="./assets/illustration-2.svg" />
    </Head>
    <Navbar />
  
      <div style={{ textAlign: 'center' }}>
  <iframe 

  src="https://docs.google.com/presentation/d/e/2PACX-1vTgtwHq49HuUuNe66SyP2byAxYypmSxon1JfScD0Il1jSc7Abw1Zvj2lTOiJG-Kj9EjoX2G0kfInkY-/embed?start=false&loop=false&delayms=3000" 
   width="100%"
        style={{ height: '559px' }}
       
  
  allow="autoplay"
  frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
</div>

     <ChatwootWidget />
  </div>
);
