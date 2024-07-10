import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import { motion } from 'framer-motion';

const Services = () => {
	const services = [
		{
			title: 'Peinture',
			description: 'Support mural, utilisation de peinture bio possible au choix. Utilisation rouleaux/brosses.',
			imageUrl: '/static/img/service1.webp',
		},
		{
			title: 'Papier peint',
			description: 'Dépose de papier peint ou pose d\'un nouveau support de votre choix.',
			imageUrl: '/static/img/service2.webp',
		},
		{
			title: 'Revêtement sol',
			description: 'Lame PVC, parquet stratifié et tout types de sol sauf le carrelage.',
			imageUrl: '/static/img/service3.webp',
		},
		{
			title: 'Ravalement',
			description: 'Différentes textures de murs extérieurs possibles (lisse, crépit...).',
			imageUrl: '/static/img/service4.webp',
		}
	];


	return (
		<>
			<Container>
				<Title className="relative z-40 text-slate-800 mt-28 w-full text-center">Mes services</Title>
			</Container>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 px-5 mt-24">
				{ services.map((service, index) => (
					<motion.div initial={{scale: 0, opacity: 0}} transition={{duration: .3, delay: index * .1}}
											whileInView={{scale: 1, opacity: 1}} key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
						<img src={service.imageUrl} alt={service.title} className="w-full h-52 object-cover"/>
						<div className="p-6">
							<h2 className="text-3xl mb-5 font-rebel text-slate-800">{service.title}</h2>
							<p className="text-slate-600">{service.description}</p>
						</div>
					</motion.div>
				)) }
			</div>
		</>
	);
}

export default Services;
