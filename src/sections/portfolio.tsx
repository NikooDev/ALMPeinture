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
		description: 'Description de l\'image ',
		image: '/static/upload/0.jpg'
	}, {
		description: 'Description de l\'image ',
		image: '/static/upload/1.jpg'
	}, {
		description: 'Description de l\'image ',
		image: '/static/upload/2.jpg'
	}, {
		description: 'Description de l\'image ',
		image: '/static/upload/3.jpg'
	}, {
		description: 'Description de l\'image ',
		image: '/static/upload/4.jpg'
	}, {
		description: 'Description de l\'image ',
		image: '/static/upload/5.jpg'
	}, {
		description: 'Description de l\'image ',
		image: '/static/upload/6.jpg'
	}, {
		description: 'Description de l\'image ',
		image: '/static/upload/7.jpg'
	}, {
		description: 'Description de l\'image ',
		image: '/static/upload/8.jpg'
	}, {
		description: 'Description de l\'image ',
		image: '/static/upload/9.jpg'
	}, {
		description: 'Description de l\'image ',
		image: '/static/upload/10.jpg'
	}, {
		description: 'Description de l\'image ',
		image: '/static/upload/11.jpg'
	}, {
		description: 'Description de l\'image ',
		image: '/static/upload/12.jpg'
	}, {
		description: 'Description de l\'image ',
		image: '/static/upload/13.jpg'
	}, {
		description: 'Description de l\'image ',
		image: '/static/upload/14.jpg'
	}, {
		description: 'Description de l\'image ',
		image: '/static/upload/15.jpg'
	}, {
		description: 'Description de l\'image ',
		image: '/static/upload/16.jpg'
	}, {
		description: 'Description de l\'image ',
		image: '/static/upload/17.jpg'
	}, {
		description: 'Description de l\'image ',
		image: '/static/upload/18.jpg'
	}, {
		description: 'Description de l\'image ',
		image: '/static/upload/19.jpg'
	}, {
		description: 'Description de l\'image ',
		image: '/static/upload/20.jpg'
	}];

	const itemsPerPage = 6;
	const [currentPage, setCurrentPage] = useState(0);

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

	const handlePageClick = (page: number) => {
		setCurrentPage(page);
		scrollTop();
	};

	const renderDots = () => {
		const dots = [];
		for (let i = 0; i < totalPages; i++) {
			dots.push(
				<button
					key={i}
					onClick={() => handlePageClick(i)}
					className={`dot shadow-md ${currentPage === i ? 'active' : ''}`}
				/>
			);
		}
		return dots;
	};

	const scrollTop = () => {
		if (portfolioRef.current) {
			const topPosition = portfolioRef.current.getBoundingClientRect().top + window.scrollY;

			setTimeout(() => {
				window.scrollTo({
					top: topPosition - 110,
					behavior: 'smooth'
				});
			}, 100);
		}
	}

	const currentItems = portfolio.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

	return (
		<div ref={portfolioRef}>
			<Container>
				<Title className="text-center text-slate-800">Mes réalisations</Title>
			</Container>
			<AnimatePresence mode="wait">
				<div style={{minHeight: currentItems.length === 3 ? 800 / 2 : '50rem'}} key={currentPage}>
					<Masonry
						breakpointCols={breakpointColumnsObj}
						className="masonry-grid mt-16"
						columnClassName="masonry-grid-column" key={currentPage}>
						{
							currentItems.map((item, index) => (
								<motion.div initial={{translateY: '20%', opacity: 0}}
														animate={{translateY: 0, opacity: 1}}
														exit={{translateY: '20%', opacity: 0}}
														transition={{duration: 0.3, delay: index * 0.1}}
														key={index}
														className="bg-white rounded-2xl shadow-md overflow-hidden">
									<img src={item.image} alt={item.description} className="w-full h-full object-cover"/>
									<div className="absolute bottom-0 bg-black bg-opacity-50 px-5 left-0 right-0 py-3">
										<p className="text-white text-sm font-medium">{item.description}</p>
									</div>
								</motion.div>
							))
						}
					</Masonry>
				</div>
			</AnimatePresence>
			<div className="flex justify-center items-center mt-4">
				<button
					onClick={handlePreviousPage}
					disabled={currentPage === 0}
					className="flex items-center h-11 disabled:opacity-50 rounded-2xl hover:disabled:bg-transparent hover:disabled:text-slate-600 text-slate-600 mr-5 hover:bg-slate-600 hover:text-white transition-colors duration-200"
				>
					<svg xmlns="http://www.w3.org/2000/svg" height={50} width={50} fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M8.22,12.72A.75.75,0,0,1,8,12.19v-.38a.77.77,0,0,1,.22-.53l5.14-5.13a.5.5,0,0,1,.71,0l.71.71a.49.49,0,0,1,0,.7L10.33,12l4.45,4.44a.5.5,0,0,1,0,.71l-.71.7a.5.5,0,0,1-.71,0Z"/>
					</svg>
				</button>
				<div className="dots color">
					{renderDots()}
				</div>
				<button
					onClick={handleNextPage}
					disabled={currentPage === totalPages - 1}
					className="flex items-center h-11 disabled:opacity-50 rounded-2xl hover:disabled:bg-transparent hover:disabled:text-slate-600 text-slate-600 ml-5 hover:bg-slate-600 hover:text-white transition-colors duration-200"
				>
					<svg xmlns="http://www.w3.org/2000/svg" height={50} width={50} fill="currentColor" viewBox="0 0 24 24">
						<path d="M15.78,11.28a.75.75,0,0,1,.22.53v.38a.77.77,0,0,1-.22.53l-5.14,5.13a.5.5,0,0,1-.71,0l-.71-.71a.49.49,0,0,1,0-.7L13.67,12,9.22,7.56a.5.5,0,0,1,0-.71l.71-.7a.5.5,0,0,1,.71,0Z"/>
					</svg>
				</button>
			</div>
		</div>
	);
}

export default Portfolio;
