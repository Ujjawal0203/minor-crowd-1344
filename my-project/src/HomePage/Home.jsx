import { Footer } from "../Components/Footer";
import Heading from "./Heading";
import Network from "./Network";
import Slider from "./Slider";
import Video from "./Video";
import Last from "./Last";
import MarketPlace from "./MerketPlace";
import Busines from "./Busines";

const Home = () => {
  return (
    <>
      <Heading />
      <Network />
      <br />
      <br />
      <Slider />
      <br />
      <br />
      <Video />
      <br />
      <br />
      {/* <MarketPlace/> */}
      <Busines />
      <br />
      <br />
      <Last />
      <br />
      <br />
      <Footer />
    </>
  );
};
export default Home;
