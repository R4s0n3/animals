import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import spaceship from '../assets/spaceship2.png'
import grpImg from '../assets/grpImg.png'
import { Navigation } from "../components/Navigation";
import bundle from '../assets/bundle.png'
import products, {type Product} from '../assets/products/products'
import Lottie from "lottie-react";
import circle from "../assets/circle.json";
import logo from '../assets/logo.png';
import logoSquare from '../assets/logo_square.png';
import story1 from '../assets/storyboard/Story_1.png'
import story2 from '../assets/storyboard/Story_2.png'
import story3 from '../assets/storyboard/Story_3.png'
import story4 from '../assets/storyboard/Story_4.png'
import badge from '../assets/badge.png'
import roadmap, {type RoadmapItem} from "../assets/roadmap/roadmap";

const Home: NextPage = () => {
 
  return (
    <>
      <Head>
        <title>Animals in SpaceSuits</title>
        <meta name="description" content="Filter tips coming in the handy design of a notepad. 400 Filtertips, each stock" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="dark:text-neutral-100 flex min-h-screen flex-col items-center justify-center  bg-black">

        <div className="header flex flex-col items-center justify-center w-full min-h-screen h-full">
          <Image src={spaceship} alt="spaceship" className="block spaceship w-full max-w-2xl" />
          <div className="h-3"></div>
          <Image src={logo} alt="logo" className="block w-full max-w-xl p-2" />
        </div>
        
      </main>
    </>
  );
};

export default Home;