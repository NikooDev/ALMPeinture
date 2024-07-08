'use client';

import { Element } from 'react-scroll';
import Intro from '@/sections/intro';
import About from '@/sections/about';
import Values from '@/sections/values';
import Services from '@/sections/services';
import References from '@/sections/references';
import Beforeafter from '@/sections/beforeafter';

const Home = () => {
	return (
		<>
			<Element name="intro">
				<Intro/>
			</Element>
			<Element name="about">
				<About/>
			</Element>
			<Element name="values">
				<Values/>
			</Element>
			<Element name="services">
				<Services/>
			</Element>
			<References/>
			<Beforeafter/>
		</>
	);
}

export default Home;
