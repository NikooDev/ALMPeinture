'use client';

import { useEffect, useRef, useState } from 'react';
import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import Image from 'next/image';
import Logo from '@/components/ui/logo';

const About = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const intervalRef = useRef<number | null>(null);

	const images = [
		{ src: '/static/img/amaury.jpg' },
		{ src: '/static/img/amaury1.jpg' },
		{ src: '/static/img/amaury3.jpg' }
	];

	useEffect(() => {
		intervalRef.current = window.setInterval(() => {
			setCurrentImage((prevImage) => (prevImage + 1) % images.length);
		}, 3000);

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		}
	}, []);

	return (
		<section className="pt-28 bg-slate-800 h-screen">
			<Container>
				<Title className="text-center mb-16 text-white">Mon histoire</Title>
				<div className="flex items-center justify-around w-full">
					<div className="bg-white bg-opacity-10 shadow-md py-3 px-5 rounded-2xl w-1/2">
						<p className="italic text-base text-white whitespace-pre-wrap">
							Après plusieurs années passées dans le domaine du commercial, j'ai choisi de me lancer dans ce qui me
							passionne aujourd'hui : la peinture.<br/><br/>

							Les travaux de ma propre maison m'ont amené dans cette voie et ce fût une révélation.<br/>
							J'ai passé et eu ma certification avec succès dans ce domaine.<br/><br/>

							Aujourd'hui j'ai décidé de m'investir pleinement dans le métier de peintre artisan, afin de transformer et
							personnaliser votre intérieur.<br/><br/>Les revêtements de sols, les papiers peint, la peinture… sont autant
							d’éléments qui me permettront de mettre votre maison à votre goût.
						</p>
						<div className="mt-3 flex justify-end w-full">
							<Logo scrollHeader={true} textWhite/>
						</div>
					</div>
					<div className="flex justify-end">
						<div className="relative">
							<Image
								src={images[currentImage].src}
								height={467}
								width={350}
								className="rounded-2xl object-cover relative"
								alt="Amaury"
							/>
						</div>
						<div className="w-1/5 flex flex-col space-y-4 ml-4">
							{ images.map((image, index) => (
								<Image
									key={index}
									src={image.src}
									height={144}
									width={108}
									className="rounded-2xl shadow-md transition-all"
									style={{ opacity: currentImage === index ? 1 : 0.5 }}
									alt="Amaury"
								/>
							)) }
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

export default About;
