'use client';

import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import { useKeenSlider } from 'keen-slider/react';
import { ParallaxBanner } from 'react-scroll-parallax';
import React, { useState } from 'react';
import 'keen-slider/keen-slider.min.css';

const texts = [
	{
		ville: 'Elven',
		name: 'Ming-Yan Frédéric Cheung',
		avis: 'Super peintre ! Amaury est professionnel, soigneux et vous explique toute sa démarche, j\'ai déjà prévu d\'autres travaux avec lui.'
	},
	{
		ville: 'Plescop',
		name: 'Matthieu Zoppis',
		avis: 'Super pro, soigneux et très sympa, je vous recommande Amaury à 100% pour vos travaux de peinture !'
	},
	{ville: 'Sulniac', name: 'Andrée Kasango', avis: 'Excellent professionnel, travail soigné, relations agréables.'}
];

const References = () => {
	const [currentSlide, setCurrentSlide] = React.useState(0);
	const [loaded, setLoaded] = useState(false);
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
			initial: 0,
			loop: true,
			defaultAnimation: {
				duration: 1000
			},
			slideChanged(slider) {
				setCurrentSlide(slider.track.details.rel);
			},
			created() {
				setLoaded(true);
			}
		},
		[
			(slider) => {
				let timeout: ReturnType<typeof setTimeout>;
				let mouseOver = false;

				const clearNextTimeout = () => {
					clearTimeout(timeout);
				};

				const nextTimeout = () => {
					clearTimeout(timeout);
					if (mouseOver) return;
					timeout = setTimeout(() => {
						slider.next();
					}, 2000);
				};

				slider.on('created', () => {
					slider.container.addEventListener('mouseover', () => {
						mouseOver = true;
						clearNextTimeout();
					});
					slider.container.addEventListener('mouseout', () => {
						mouseOver = false;
						nextTimeout();
					});
					nextTimeout();
				});
				slider.on('dragStarted', clearNextTimeout);
				slider.on('animationEnded', nextTimeout);
				slider.on('updated', nextTimeout);
			}]);

	return (
		<>

			<ParallaxBanner className="aspect-[1/2] h-[30rem] shadow-md" layers={[{
				image: '/static/img/references.png',
				speed: 30
			}]}>
				<Container className="top-10 relative">
					<Title className="text-white text-shadow">Des clients satisfaits</Title>
					<div className="min-h-64 mt-16 w-1/2">
						<div className="relative">
							<div ref={sliderRef} className="keen-slider">
								{ texts.map((text, index) => (
									<div key={index} className="keen-slider__slide text-left text-white text-shadow">
										<p className="font-bold text-[1.3rem] italic">« {`${text.avis}`} »</p>
										<p className="font-medium mt-5 text-lg">{text.name}</p>
										<p className="font-medium text-sm">{text.ville}</p>
									</div>
								)) }
							</div>
						</div>
						{ loaded && instanceRef.current && (
							<div className="dots">
								{[
									...Array(instanceRef.current.track.details.slides.length).keys()
								].map((idx) => {
									return (
										<button
											key={idx}
											onClick={() => {
												instanceRef.current?.moveToIdx(idx, false, {duration: 1000});
											}}
											className={'dot' + (currentSlide === idx ? ' active' : '')}
										></button>
									);
								})}
							</div>
						) }
					</div>
				</Container>
			</ParallaxBanner>
		</>
	);
};

export default References;
