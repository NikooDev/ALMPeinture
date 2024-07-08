'use client';

import { useEffect, useRef, useState } from 'react';
import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import Image from 'next/image';
import Logo from '@/components/ui/logo';

const About = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const [isFading, setIsFading] = useState(false);
	const intervalRef = useRef<number | null>(null);

	const images = [
		{ src: '/static/img/amaury.jpg', alt: 'Amaury' },
		{ src: '/static/img/amaury1.jpg', alt: 'Amaury' },
		{ src: '/static/img/amaury3.jpg', alt: 'Amaury' },
	];

	useEffect(() => {
		intervalRef.current = window.setInterval(() => {
			setIsFading(true);
			setTimeout(() => {
				setCurrentImage((prevImage) => (prevImage + 1) % images.length);
				setIsFading(false);
			}, 200);
		}, 3000);

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		}
	}, []);

	return (
		<section className="py-20">
			<Container>
				<Title className="text-center mb-10">Mon histoire</Title>
				<div className="flex items-center justify-between w-full">
					<div className="bg-white shadow-md py-3 px-5 rounded-2xl w-1/2">
						<p className="italic text-lg font-medium text-slate-800 whitespace-pre-wrap">
							Après plusieurs années passées dans le domaine du commercial, j'ai choisi de me lancer dans ce qui me
							passionne aujourd'hui : la peinture.<br/><br/>

							Les travaux de ma propre maison m'ont amené dans cette voie et ce fût une révélation.<br/>
							J'ai passé et eu ma certification avec succès dans ce domaine.<br/><br/>

							Aujourd'hui j'ai décidé de m'investir pleinement dans le métier de peintre artisan, afin de transformer et
							personnaliser votre intérieur. Les revêtements de sols, les papiers peint, la peinture… sont autant
							d’éléments qui me permettront de mettre votre maison à votre goût.
						</p>
						<div className="mt-3 flex justify-end w-full">
							<Logo scrollHeader={true}/>
						</div>
					</div>
					<div className="flex">
						<div className="w-2/3">
							<Image
								src={images[currentImage].src}
								height={578}
								width={432}
								className={`rounded-2xl shadow-md transition-opacity duration-200 ${isFading ? 'opacity-0' : 'opacity-100'}`}
								alt={images[currentImage].alt}
							/>
						</div>
						<div className="w-1/3 flex flex-col space-y-4 ml-4">
							{images.map((image, index) => (
								<button key={index}>
									<Image
										src={image.src}
										height={144}
										width={108}
										className={`rounded-2xl shadow-md transition-all ${currentImage === index ? 'opacity-100' : 'opacity-50'}`}
										alt={image.alt}
									/>
								</button>
							))}
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

export default About;
