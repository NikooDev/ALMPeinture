import Title from '@/components/ui/title';
import Container from '@/components/ui/container';
import Logo from '@/components/ui/logo';
import Footer from '@/components/partials/footer';
import { motion } from 'framer-motion';

const Contact = () => {
	return (
		<>
			<Container>
				<Title className="relative z-40 text-slate-200 w-full text-center">Contactez-moi</Title>
				<div className="flex justify-around items-center w-full mt-16">
					<motion.div initial={{translateY: '100%', opacity: 0}} transition={{duration: .4, ease: 'backInOut'}}
											whileInView={{translateY: 0, opacity: 1}} viewport={{ once: true }} className="flex items-center flex-col text-slate-200 text-2xl leading-[1.5]">
						<p>56250 Sulniac, France</p>
						<a href="mailto:almpeinture56@gmail.com">almpeinture56@gmail.com</a>
						<a href="tel:0698282549">06 98 28 25 49</a>
						<div className="mt-10">
							<Logo scrollHeader={false} colours/>
						</div>
					</motion.div>
					<div className="w-1/2">
						<form method="POST" className="w-full">
							<motion.div initial={{translateY: '100%', opacity: 0}} transition={{duration: .3, delay: .45}}
													whileInView={{translateY: 0, opacity: 1}} viewport={{ once: true }} className="flex gap-5 w-full mb-5">
								<input type="text" id="name" autoComplete="name" placeholder="Nom" className="focus:outline-0 focus:border-2 focus:border-slate-500 border-2 border-slate-700 transition-all duration-200 text-white capitalize w-1/2 py-3 px-5 bg-white bg-opacity-10 shadow-md rounded-lg placeholder:text-slate-300"/>
								<input type="text" id="email" autoComplete="email" placeholder="Adresse e-mail" className="focus:outline-0 focus:border-2 focus:border-slate-500 border-2 border-slate-700 transition-all duration-200 text-white w-1/2 py-3 px-5 bg-white bg-opacity-10 shadow-md rounded-lg placeholder:text-slate-300"/>
							</motion.div>
							<motion.div initial={{translateY: '100%', opacity: 0}} transition={{duration: .3, delay: .35}}
									 whileInView={{translateY: 0, opacity: 1}} viewport={{ once: true }} className="flex gap-5 w-full mb-5">
								<input type="text" id="tel" autoComplete="tel" placeholder="Téléphone" className="focus:outline-0 focus:border-2 focus:border-slate-500 border-2 border-slate-700 transition-all duration-200 text-white w-1/2 py-3 px-5 bg-white bg-opacity-10 shadow-md rounded-lg placeholder:text-slate-300"/>
								<input type="text" id="address" autoComplete="address-level1" placeholder="Adresse" className="focus:outline-0 focus:border-2 focus:border-slate-500 border-2 border-slate-700 transition-all duration-200 text-white w-1/2 py-3 px-5 bg-white bg-opacity-10 shadow-md rounded-lg placeholder:text-slate-300"/>
							</motion.div>
							<motion.div initial={{translateY: '100%', opacity: 0}} transition={{duration: .3, delay: .15}}
													whileInView={{translateY: 0, opacity: 1}} viewport={{ once: true }} className="mb-5">
								<input type="text" id="object" placeholder="Objet" className="focus:outline-0 focus:border-2 focus:border-slate-500 border-2 border-slate-700 transition-all duration-200 text-white w-full py-3 px-5 bg-white bg-opacity-10 shadow-md rounded-lg placeholder:text-slate-300"/>
							</motion.div>
							<motion.div initial={{translateY: '100%', opacity: 0}} transition={{duration: .3, delay: 0}}
													whileInView={{translateY: 0, opacity: 1}} viewport={{ once: true }}>
								<textarea placeholder="Votre message" id="message" rows={6} className="resize-none focus:outline-0 focus:border-2 focus:border-slate-500 border-2 border-slate-700 transition-all duration-200 text-white w-full py-3 px-5 bg-white bg-opacity-10 shadow-md rounded-lg placeholder:text-slate-300"></textarea>
							</motion.div>
							<motion.div initial={{translateY: '100%', opacity: 0}} transition={{duration: .3, delay: 0}}
													whileInView={{translateY: 0, opacity: 1}} viewport={{ once: true }} className="w-full mt-10">
								<button className="rainbow-button mx-auto" name="Envoyer"></button>
							</motion.div>
						</form>
					</div>
				</div>
				<Footer/>
			</Container>
		</>
);
}

export default Contact;
