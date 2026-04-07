import About from '../components/landing/about';
// import Footer from '../components/landing/footer';
// import Hero from "../components/landing/hero"
import HeroPage from '../components/landing/heroPage';
import Location from '../components/landing/location';
import Message from '../components/landing/message';
import Ministry from '../components/landing/ministry';

function Home() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-secondary selection:text-white">
      {/* Home */}
      {/* <Hero/> */}
      <HeroPage />
      <About />
      <Message />
      <Ministry />
      <Location />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
