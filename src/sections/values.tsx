'use client';

import { ParallaxBanner } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import Title from '@/components/ui/title';
import Container from '@/components/ui/container';

const Values = () => {
	return (
		<>
			<ParallaxBanner className="aspect-[16/9] h-screen relative" layers={[{ image: '/static/img/banner.png', speed: -50 }]}>
				<Container>
					<Title className="relative z-40 text-yellow-800 mt-28 w-full text-center">Mes valeurs</Title>
					<div className="relative z-40 flex flex-col items-center mt-28">
						<div className="flex gap-10">
							<motion.div className="bg-white bg-opacity-50 shadow-md rounded-2xl p-5 max-w-80 min-h-64 relative"
													initial={{translateX: '-100%', opacity: 0}} transition={{duration: .5, delay: 0.5}}
													whileInView={{translateX: 0, opacity: 1}} viewport={{ once: true }}>
								<div className="absolute -top-6 left-1/2 -ml-7">
									<div className="flex justify-center items-center bg-white shadow-md h-14 w-14 rounded-full text-red-500">
										<svg xmlns="http://www.w3.org/2000/svg" height={42} width={42} fill="currentColor" viewBox="0 0 24 24">
											<path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm4.51,14-.53.53a.51.51,0,0,1-.71,0l-4-4a.49.49,0,0,1-.15-.36V6.5a.5.5,0,0,1,.5-.5h.76a.5.5,0,0,1,.5.5v5.14l3.63,3.63A.51.51,0,0,1,16.51,16Z"/>
										</svg>
									</div>
								</div>
								<div className="mt-8">
									<p className="font-semibold text-red-500 text-3xl text-center font-rebel">Artisan indépendant</p>
									<p className="mt-10 font-medium text-slate-800 tracking-tight text-center leading-[1.5]">Pour avoir plus de temps avec vous et gagner en temps tout en limitant les démarches.</p>
								</div>
							</motion.div>
							<motion.div className="bg-white bg-opacity-50 shadow-md rounded-2xl p-5 max-w-80 min-h-64 relative"
													initial={{translateY: '100%', opacity: 0}} transition={{duration: .5, delay: 0.5}}
													whileInView={{translateY: 0, opacity: 1}} viewport={{ once: true }}>
								<div className="absolute -top-6 left-1/2 -ml-7">
									<div className="flex justify-center items-center bg-white shadow-md h-14 w-14 rounded-full text-blue-500">
										<svg xmlns="http://www.w3.org/2000/svg" height={36} width={36} fill="currentColor" viewBox="0 0 24 24">
											<path d="M18,2H6A4,4,0,0,0,2,6V21.5a.5.5,0,0,0,.5.5.49.49,0,0,0,.35-.15l3-3A3,3,0,0,1,8,18H18a4,4,0,0,0,4-4V6A4,4,0,0,0,18,2ZM9,10.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-1A.5.5,0,0,1,7.5,9h1a.5.5,0,0,1,.5.5Zm4,0a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5Zm4,0a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5Z"/>
										</svg>
									</div>
								</div>
								<div className="mt-8">
									<p className="font-semibold text-blue-500 text-3xl text-center font-rebel">Écoute et échanges</p>
									<p className="mt-10 font-medium text-slate-800 tracking-tight text-center leading-[1.5]">Pour prendre en comptes vos avis avec des conseils personnalisés.</p>
								</div>
							</motion.div>
							<motion.div className="bg-white bg-opacity-50 shadow-md rounded-2xl p-5 max-w-80 min-h-64 relative"
													initial={{translateX: '100%', opacity: 0}} transition={{duration: .5, delay: 0.5}}
													whileInView={{translateX: 0, opacity: 1}} viewport={{ once: true }}>
								<div className="absolute -top-6 left-1/2 -ml-7">
									<div className="flex justify-center items-center bg-white shadow-md h-14 w-14 rounded-full text-green-500">
										<svg xmlns="http://www.w3.org/2000/svg" height={42} width={42} fill="currentColor" viewBox="0 0 24 24">
											<path xmlns="http://www.w3.org/2000/svg" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm4.35,7.73-5.62,5.62a.48.48,0,0,1-.7,0L7.65,13a.5.5,0,0,1,0-.71l.53-.53a.48.48,0,0,1,.7,0l1.5,1.49,4.74-4.74a.5.5,0,0,1,.7,0l.53.53A.5.5,0,0,1,16.35,9.73Z"/>
										</svg>
									</div>
								</div>
								<div className="mt-8">
									<p className="font-semibold text-green-500 text-3xl text-center font-rebel">Qualités et finitions</p>
									<p className="mt-10 font-medium text-slate-800 tracking-tight text-center leading-[1.5]">Pour un rendu professionnel, maîtrisé et détaillé.</p>
								</div>
							</motion.div>
						</div>
					</div>
				</Container>
			</ParallaxBanner>
		</>
	);
}

export default Values;
