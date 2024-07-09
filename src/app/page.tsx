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
				<Element name="services" className="h-screen">
					<Services/>
				</Element>
			</section>
			<section>
				<References/>
			</section>
			<section>
				<Beforeafter/>
			</section>
			<section id="contact">
				<Element name="contact" className="h-screen">
					<Contact/>
				</Element>
			</section>
		</ParallaxProvider>
	);
}

export default Home;
