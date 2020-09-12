import Head from 'next/head'
import Hero from '../components/hero/Hero';
import Services from '../components/services/Services'
import Contents from '../components/contents/Contents'
import Quotes from '../components/quotes/Quotes'
import Blog from '../components/blog/Blog'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Trafalgar - Landing page for a healthcare startup</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Hero />
      <Services />
      <Contents />
      <Quotes />
      <Blog />
    </div>
  )
}