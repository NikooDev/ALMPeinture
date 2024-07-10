import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import Masonry from 'react-masonry-css';

const Portfolio = () => {
	const breakpointColumnsObj = {
		default: 3,
		1100: 2,
		700: 1
	};

	return (
		<>
			<Container>
				<Title className="text-center text-slate-800">Mes réalisations</Title>
			</Container>
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className="masonry-grid mt-16"
				columnClassName="masonry-grid-column">
				<div className="bg-white rounded-2xl shadow-md min-w-10 min-h-10">

				</div>
				<div className="bg-white rounded-2xl shadow-md min-w-10 min-h-10">

				</div>
				<div className="bg-white rounded-2xl shadow-md min-w-10 min-h-10">

				</div>
				<div className="bg-white rounded-2xl shadow-md min-w-10 min-h-10">

				</div>
				<div className="bg-white rounded-2xl shadow-md min-w-10 min-h-10">

				</div>
				<div className="bg-white rounded-2xl shadow-md min-w-10 min-h-10">

				</div>
			</Masonry>
		</>
	);
}

export default Portfolio;
