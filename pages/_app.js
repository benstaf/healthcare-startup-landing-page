import '../sass/app.scss';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
