import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const articles = [
  {
    title: 'Disease detection, check up in the laboratory',
    content: 'In this case, the role of the health laboratory is very important to do a disease detection...',
  },
  {
    title: 'Herbal medicines that are safe for consumption',
    content: 'Herbal medicine is very widely used at this time because of its very good for your health...',
  },
  {
    title: 'Natural care for healthy facial skin',
    content: 'A healthy lifestyle should start from now and also for your skin health. There are some...',
  },
];

export default () => (
  <section className="blog" id="blog">
    <div className="blog__heading">
      <h2>Check out our latest article</h2>
      <div className="border" />
    </div>
    <div className="blog__cards">
      {articles.map(({ title, content }) => (
        <article className="blog__card">
          <img src="./assets/blog-3.svg" alt="blog post" />
          <h4>{title}</h4>
          <p>{content}</p>
          <Link href="/">
            <a href="/">
              Read more
              {' '}
              <FiArrowRight style={{ verticalAlign: 'middle' }} />
            </a>
          </Link>
        </article>
      ))}
    </div>
    <button type="button" href="" className="btn btn-outline-big">
      View all
    </button>
  </section>
);
