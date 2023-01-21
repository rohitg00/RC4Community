import Hero from "../components/Hero/Hero";
import Nav from "../components/Hero/Nav";
import { getTweets } from '../lib/twitterAPI.js';
import Timeline from "../components/Timeline";
import Footer from "../components/footer";

let imgUrl = "bgdevops.gif";
const gifStyle = {
  backgroundImage: `url(${imgUrl})`,
  opacity: 0.3,
};

export default async function Home() {
  // const tweets = await getTweets(["1537460982582128641", "1581497472043536385", "1586751198962495489", "1523372831513673729", "1526398860389519361", "1555793156847063040", "1547812558295670784", "1560892185842941953"]);
  const tweets = await getTweets(["1586751198962495489", "1555793156847063040", "1560892185842941953", "1591643164196372480", "1590550565142290432", "1602540813338423296", "1596569166349467648", "1581497472043536385"]);

  return (
    <>
      <div className="bg-black">
        <div className="py-6 px-5 sm:px-16 bg-[url('/elipses.png')] bg-no-repeat bg-contain relative">
          <div
            className="absolute w-[90%] h-[90%] bg-contain sm:bg-cover bg-[center_top_20vh] sm:bg-[left_center] bg-no-repeat z-1 opacity-10 sm:opacity-10 mix-blend-screen"
            style={gifStyle}
          ></div>
          <Nav />
          <Hero />
        </div>
      </div>
      <Timeline tweets={tweets} />
    </>
  );
}
