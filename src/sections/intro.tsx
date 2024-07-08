'use client';

import Image from 'next/image';
import Container from '@/components/ui/container';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Intro = () => {
	return (
		<section className="flex items-center relative h-screen w-full">
			<Container>
				<div className="flex items-center">
					<div className="leading-[1] w-full text-center">
						<motion.p initial={{opacity: 0}} transition={{duration: .5}} whileInView={{opacity: 1}}
											className="relative text-white text-[6rem] z-40 font-bold text-shadow">
							Artisan Peintre
						</motion.p>
						<motion.p initial={{opacity: 0}} transition={{duration: .5, delay: 0.5}} whileInView={{opacity: 1}}
											className="relative text-white text-3xl z-40 font-bold text-shadow uppercase">
							Revêtement sols & murs
						</motion.p>
						<motion.p initial={{opacity: 0}} transition={{duration: .5, delay: 1}} whileInView={{opacity: 1}}
											className="relative text-white text-2xl z-40 font-bold text-shadow mt-20 italic">
							"Donner la priorité à mes clients"
						</motion.p>
						<div className="absolute z-40 left-1/2 -ml-[25px] bottom-14 animate-bounce">
							<Link to={'about'} smooth={true} spy={true} offset={-20} className="hover:cursor-pointer">
								<svg xmlns="http://www.w3.org/2000/svg" height={50} width={50} fill="white" viewBox="0 0 24 24">
									<path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.36,8.85-3,3a.51.51,0,0,1-.71,0l-3-3A.5.5,0,0,1,9,10h6A.5.5,0,0,1,15.36,10.85Z"/>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</Container>
			<div className="bg-black bg-opacity-50 absolute top-0 left-0 w-full h-full z-30"></div>
			<div className="absolute h-full w-full z-20">
				<Image src="/static/img/bg_intro.png" blurDataURL="/static/img/bg_intro.png" placeholder="blur" priority={true} fill={true} className="object-cover" fetchPriority="high"
							 alt="intro"/>
			</div>
		</section>
	);
}

export default Intro;
