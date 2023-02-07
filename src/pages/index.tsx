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
  const virtues: string[] = ["movies", "cannabis", "filter", "nature"];
  const socialLinks = [
    {
      id:"twitter",
      link:"https://twitter.com"
  },
    {
      id:"discord",
      link:"https://discord.com"
  },
    {
      id:"instagram",
      link:"https://instagram.com"
  },
  {
    id:"tiktok",
    link:"https://instagram.com"
  },
  {
    id:"youtube",
    link:"https://instagram.com"
},
]
  const createRoadmap = (data: RoadmapItem, index:number) => {
      const even = (index % 2 === 0);
      return <div className={`flex gap-2 flex-col-reverse items-start justify-center ${even ? "md:flex-row-reverse" : "md:flex-row"}`}>
        <div className="flex-1  aspect-[3/2]">
          <div className="p-4 bg-slate-900">
          <h2 className="text-3xl uppercase">{data.title}</h2>
          <p className="my-4">{data.description}</p>
          </div>
        </div>
        <div className="flex-1 h-full w-full">
          <span className={`block p-2 ${even ? "text-right" : "text-left"}`}>{new Date(data.date).toLocaleDateString()}</span>
          <div style={{borderRadius:`${even ? "5rem 0 0 0" : "0 5rem 0 0"}`}} className={`mt-auto mb-0 ${even ? "ml-auto" : "mr-auto"} border-dashed ${even ? "border-l-4" : "border-r-4"} border-t-4 w-3/5 h-full`}>
          </div>
        </div>
      </div>
  }
  const sliderText = "With their unique skills and personalities, they work together to overcome any challenges and obstacles they encounter on their journey."
  const createProducts = (data: Product, index:number) => {

    return <div key={index} className="flex-1 bg-slate-900 relative">
      <Image src={data.img} alt={data.title} width={320} height={320} className="w-full" />
      <div className="absolute flex w-full justify-between bottom-2 px-2">
      <span className="bg-slate py-2 px-4 border-2 bg-slate-900">{(data.price / 100).toFixed(2)} €</span>
      <span className="bg-slate py-2 px-4 border-2 bg-slate-900">add to cart</span>
      </div>
    </div>
  }
  return (
    <>
      <Head>
        <title>Animals in SpaceSuits</title>
        <meta name="description" content="Filter tips coming in the handy design of a notepad. 400 Filtertips, each stock" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main className="dark:text-neutral-100 flex min-h-screen flex-col items-center justify-center  bg-black">

        <div className="header flex flex-col items-center justify-center w-full min-h-screen h-full">
          <Image src={spaceship} alt="spaceship" className="block spaceship w-full max-w-2xl" />
          <div className="h-3"></div>
          <Image src={logo} alt="logo" className="block w-full max-w-xl p-2" />
        </div>

        <div className="content-container mt-24 relative w-full flex flex-col items-center justify-center">
          <div id="products"></div>
          <div className="flex flex-col  md:flex-row w-full gap-1 p-1">
            {products.filter(p => p.type === "single").map(createProducts)}
            <div className="flex-1 bg-slate-900 ">
              <div className="p-4">

              <h3 className="text-3xl uppercase">Buy our Product</h3>
              <p className="my-2">Well, the way they make shows is, they make one show. That show&apos;s called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they&apos;re going to make more shows. Some pilots get picked and become television programs.
                </p>
              </div>
              </div>

          </div>
          <div className="flex flex-col md:flex-row w-full gap-1 px-1">
            <div className="flex-1 flex flex-col gap-1 bg-slate-900">
              <div className="flex flex-col-reverse md:flex-row gap-1">
              
            
              <div className="flex-1 my-auto p-4">
                <h3 className="text-neutral-100 text-3xl uppercase">Awesome Teams Belong together</h3>
                <p className="my-2">After all, why not get the most bang for your buck? When it comes to buying a team together, you don&apos;t want to be left on the sidelines with an incomplete squad. Ultimately, buying the bundle means your group is ready to go and can hit the ground rolling - which is always best practice if you want success!</p>
              </div>
              <div className="flex-1 flex justify-center items-center">
<Image src={logoSquare} alt="logo" className="w-full h-full" />
              </div>
              </div>
              <div className="flex flex-col md:flex-row gap-1">
              <div className="flex-1">
                <div>

              <Lottie animationData={circle} loop={true} />
                </div>

              </div>
              <div className="flex-1 flex flex-col my-auto p-4">
              <h3 className="text-neutral-100 text-3xl uppercase">Get the Bundle</h3>
              <p className="my-2">
              If you&apos;re looking to really up your game in the rolling scene, then pushing your cart straight to the checkout line is a must! So don&apos;t wait another minute—let&apos;s shop &apos;til we drop!
              </p>
              <div className="flex justify-between mt-4">
                <span className="bg-slate py-2 px-4 border-2 bg-slate-900">30.00 €</span>
                <button className="border-2 border-neutral-100 p-2 px-4">add to cart</button>
              </div>
              </div>
             
              </div>

          

</div>
            <div className="flex-1 bg-slate-900">

              <Image src={bundle} alt="bundle" className="w-full" />
              </div>

          </div>
          <h2 id="story" className="text-neutral-100 text-5xl uppercase my-6 pt-2">Story</h2>
                    
          <div id="story" className="flex flex-col md:flex-row w-full py-4 bg-slate-900">
            <div className="bg-slate-900 flex justify-center items-center" style={{flex: "2"}}>
        <Image src={grpImg} className="block w-full h-full object-cover" alt="group photo" />
            </div>
            <div className="flex-1 bg-slate-900">
              <div className="p-4">
<h3 className="text-neutral-100 text-3xl uppercase">In the far-off future</h3>
<div className="my-4">
<p className="my-2">
   In 4269 a special team of animals has joined in the exploration of the universe. They have been trained and outfitted with specially designed spacesuits.
  </p>
  <p className="my-2">
    The team, consisting of Spunky Monkey, Otta-Space Admiral Rhôn and Strong-Bull Silver, sets off on daring missions to un- known planets, asteroids, and even black holes.
  </p >
                </div>         
</div>


</div>
<div className="flex-1">
<div className="flex justify-center bg-slate-900 items-center h-full w-full p-4">
<Image className="w-3/4" src={badge} alt="space brigade badge" />
  </div>
</div>

          </div>
        <div className="flex h-20 my-1 bg-slate-900 w-full max-w-full overflow-hidden items-center justify-center">
    <div className="scroll-container whitespace-nowrap">
    <h2 className="text-3xl inline-block scroll-text uppercase">&nbsp;//&nbsp;{sliderText}</h2>
    <h2 className="text-3xl inline-block scroll-text uppercase">&nbsp;//&nbsp;{sliderText}</h2>
    </div>

        </div>
<div className="flex flex-col w-full gap-1 gap-y-2 md:flex-row">
<div className="flex-1">
<Image src={story1} alt="storyboard part" className="w-full h-full" />
</div>
<div className="flex-1">
<Image src={story2} alt="storyboard part" className="w-full h-full" />
</div>
<div className="flex-1">
<Image src={story3} alt="storyboard part" className="w-full h-full" />
</div>
<div className="flex-1">
<Image src={story4} alt="storyboard part" className="w-full h-full" />
</div>
</div>

          <h2 id="roadmap" className="text-neutral-100 text-5xl uppercase my-6 pt-2">Roadmap</h2>
          <p className="w-full max-w-screen-lg my-8 text-center p-4 border-2">
{"Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass."}          </p>
          <div className="flex flex-col w-full md:flex-row gap-2">
            <div className="flex-1"></div>
            <div style={{flex:"2"}} className="flex flex-col gap-y-2">
              {roadmap.map(createRoadmap)}
              <div className="bg-slate-900 p-4 flex-1 flex flex-col items-center justify-center md:flex-row">
                <div className="flex-1">
                <h2 className="text-3xl uppercase">Well, the way they make shows is, they make one show. </h2>
                <p className="my-4">
                {"That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing."}
                </p>
                </div>

                <div className="flex-1 flex justify-center items-center">
                <Image className="w-3/4" src={badge} alt="space brigade badge" />
                </div>
              </div>
              <div className="flex gap-x-1 flex-col md:flex-row w-full">
                {virtues.map((v,i) => <div key={i} className="
                  flex-1
               bg-slate-900
                ">
                  <h3 className="uppercase text-center">{v}</h3>
                </div>)}
              </div>
            </div>
            <div className="flex-1 "></div>

          </div>
          <h2 id="contact" className="text-neutral-100 text-5xl uppercase my-6 pt-2">Interact with us!</h2>
          <div className="w-full flex justify-center items-center">
          <ul className="flex flex-row justify-evenly items-center w-full max-w-md">
          {socialLinks.map((social, index) => <li key={index} className={`flex-1 flex gap-3 justify-center items-center`}>
          
            <Image src={`/social/${social.id}.svg`} alt={`${social.id} icon`} width={48} height={48} className="w-full h-full"  />
          
          </li>)}
          </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;