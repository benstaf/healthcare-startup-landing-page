import React from 'react';

export default () => (
  <section className="services" id="services">
    <article className="services__heading">
      <h2>Media Coverage</h2>
      <div className="border" />
     
    </article>
    <div className="services__cards">
      <div className="services__card">
    <a href="https://fortune.com/longform/ai-artificial-intelligence-medicine-healthcare-pharmaceutical-industry/" target="_blank">
        <img src="./assets/fortune.svg" alt="Fortune Magazine" />
      </a>
      </div>
      <div className="services__card">
      <a href="https://www.science.org/content/blog-post/objections-some-drug-discovery-ai" target="_blank">
        <img src="./assets/science.svg" alt="Science" />
      </a>
        
      </div>
      <div className="services__card">
      <a href="https://blog.benchsci.com/mostapha-benhenda-of-startcrowd-on-ai-drug-discovery-hype" target="_blank">
        <img src="./assets/benchsci.svg" alt="BenchSci" />
      </a>
     
      </div>
    </div>
    
  </section>
);
