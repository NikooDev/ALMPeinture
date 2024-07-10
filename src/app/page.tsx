'use client';

import { Element } from 'react-scroll';
import Intro from '@/sections/intro';
import About from '@/sections/about';
import Values from '@/sections/values';
import Services from '@/sections/services';
import References from '@/sections/references';
import Beforeafter from '@/sections/beforeafter';
import Contact from '@/sections/contact';
import { ParallaxProvider } from 'react-scroll-parallax';
import Portfolio from '@/sections/portfolio';

const Home = () => {
	return (
		<ParallaxProvider>
			<section id="intro">
				<Element name="intro" className="flex items-center relative h-screen w-full">
					<Intro/>
				</Element>
			</section>
			<section id="about">
				<Element name="about" className="py-28 bg-slate-800">
					<About/>
				</Element>
			</section>
			<section id="values">
				<Element name="values">
					<Values/>
				</Element>
			</section>
			<section id="services">
				<Element name="services">
					<Services/>
				</Element>
			</section>
			<section className="pb-28 mt-52 relative">
				<References/>
			</section>
			<section id="portfolio">
				<Element name="portfolio" className="pb-28">
					<Portfolio/>
				</Element>
			</section>
			<section className="py-28">
				<Beforeafter/>
			</section>
			<div className="relative w-full">
				<div className="relative -bottom-1 left-0 w-full overflow-hidden leading-[0]">
					<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" className="w-full h-auto relative" viewBox="0 0 1440 320">
						<path className="fill-slate-800" d="M0,160L60,176C120,192,240,224,360,218.7C480,213,600,171,720,144C840,117,960,107,1080,101.3C1200,96,1320,96,1380,96L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
					</svg>
				</div>
				<section id="contact" className="bg-slate-800 relative">
					<Element name="contact">
						<Contact/>
					</Element>
				</section>
			</div>
		</ParallaxProvider>
	);
}

export default Home;
