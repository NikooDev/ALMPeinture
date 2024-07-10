import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';

const Portfolio = () => {
	const breakpointColumnsObj = {
		default: 3,
		1100: 2,
		700: 1
	};

	const demo = [0, 1, 2, 3, 4, 5, 6, 7, 8]

	const portfolio = [{
		description: '',
		image: ''
	}];

	return (
		<>
			<Container>
				<Title className="text-center text-slate-800">Mes réalisations</Title>
			</Container>
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className="masonry-grid mt-16"
				columnClassName="masonry-grid-column">
				{
					demo.map((item, index) => (
							<motion.div initial={{translateY: '20%', opacity: 0}} transition={{duration: .3, delay: index * .1}}
												whileInView={{translateY: 0, opacity: 1}} key={index} className="bg-white rounded-2xl shadow-md min-w-10 min-h-10" style={{height: 50 * index+'px'}}>

						</motion.div>
					))
				}
			</Masonry>
		</>
	);
}

export default Portfolio;
