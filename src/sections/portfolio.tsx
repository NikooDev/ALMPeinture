import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import Masonry from 'react-masonry-css';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useRef, useState } from 'react';

const Portfolio = () => {
	const portfolioRef = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
	const breakpointColumnsObj = {
		default: 3,
		1100: 2,
		700: 1
	};

	const portfolio = [{
		description: '',
		image: '/static/upload/0.jpg'
	}, {
		description: '',
		image: '/static/upload/1.jpg'
	}, {
		description: '',
		image: '/static/upload/2.jpg'
	}, {
		description: '',
		image: '/static/upload/3.jpg'
	}, {
		description: '',
		image: '/static/upload/4.jpg'
	}, {
		description: '',
		image: '/static/upload/5.jpg'
	}, {
		description: '',
		image: '/static/upload/6.jpg'
	}, {
		description: '',
		image: '/static/upload/7.jpg'
	}, {
		description: '',
		image: '/static/upload/8.jpg'
	}, {
		description: '',
		image: '/static/upload/9.jpg'
	}, {
		description: '',
		image: '/static/upload/10.jpg'
	}, {
		description: '',
		image: '/static/upload/11.jpg'
	}, {
		description: '',
		image: '/static/upload/12.jpg'
	}, {
		description: '',
		image: '/static/upload/13.jpg'
	}, {
		description: '',
		image: '/static/upload/14.jpg'
	}, {
		description: '',
		image: '/static/upload/15.jpg'
	}, {
		description: '',
		image: '/static/upload/16.jpg'
	}, {
		description: '',
		image: '/static/upload/17.jpg'
	}, {
		description: '',
		image: '/static/upload/18.jpg'
	}, {
		description: '',
		image: '/static/upload/19.jpg'
	}, {
		description: '',
		image: '/static/upload/20.jpg'
	}];

	const itemsPerPage = 6; // Nombre d'éléments par page
	const [currentPage, setCurrentPage] = useState(0);

	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentItems = portfolio.slice(startIndex, endIndex);

	const totalPages = Math.ceil(portfolio.length / itemsPerPage);

	const handleNextPage = () => {
		const nextPage = Math.min(currentPage + 1, totalPages - 1);
		setCurrentPage(nextPage);
		scrollTop();
	};

	const handlePreviousPage = () => {
		const prevPage = Math.max(currentPage - 1, 0);
		setCurrentPage(prevPage);
		scrollTop();
	};

	const scrollTop = () => {
		if (portfolioRef.current) {
			const topPosition = portfolioRef.current.getBoundingClientRect().top + window.scrollY;
			window.scrollTo({
				top: topPosition - 100,
				behavior: 'smooth'
			});
		}
	}

	return (
		<div ref={portfolioRef}>
			<Container>
				<Title className="text-center text-slate-800">Mes réalisations</Title>
			</Container>
			<AnimatePresence mode="wait">
				<Masonry
					breakpointCols={breakpointColumnsObj}
					className="masonry-grid mt-16"
					columnClassName="masonry-grid-column" key={currentPage}>
					{
						currentItems.map((item, index) => (
							<motion.div initial={{ translateY: '20%', opacity: 0 }}
													animate={{ translateY: 0, opacity: 1 }}
													exit={{ translateY: '20%', opacity: 0 }}
													transition={{ duration: 0.3, delay: index * 0.1 }}
													key={index}
													className="bg-white rounded-2xl shadow-md overflow-hidden">
								<img src={item.image} alt={item.description} className="w-full h-full object-cover"/>
								<p>{item.description}</p>
							</motion.div>
						))
					}
				</Masonry>
			</AnimatePresence>
			<div className="flex justify-center mt-4">
				<button
					onClick={handlePreviousPage}
					disabled={currentPage === 0}
					className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
				>
					Précédent
				</button>
				<button
					onClick={handleNextPage}
					disabled={currentPage === totalPages - 1}
					className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
				>
					Suivant
				</button>
			</div>
		</div>
	);
}

export default Portfolio;
