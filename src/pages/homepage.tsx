import About from "../components/home/About";
import FeaturedDest from "../components/home/featuredDest";
import Herosection from "../components/home/herosection";
import Newsletter from "../components/home/Newsletter";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <div>
      <Herosection />
      <About />
      <FeaturedDest />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
