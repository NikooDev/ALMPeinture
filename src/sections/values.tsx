'use client';

import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Title from '@/components/ui/title';
import Container from '@/components/ui/container';

const Values = () => {
	return (
		<>
			<ParallaxBanner className="aspect-[16/9] h-screen" layers={[
				{ image: '/static/img/banner.png', speed: -50 }]}>
				<Container>
					<Title className="relative z-40 text-yellow-800 mt-28 w-full text-center">Mes valeurs</Title>
					<div className="relative z-40 flex flex-col items-center mt-20">
						<div className="flex gap-10">
							<div className="bg-white bg-opacity-50 shadow-md rounded-2xl p-5 min-w-72 min-h-72">

							</div>
							<div className="bg-white bg-opacity-50 shadow-md rounded-2xl p-5 min-w-72 min-h-72">

							</div>
							<div className="bg-white bg-opacity-50 shadow-md rounded-2xl p-5 min-w-72 min-h-72">

							</div>
						</div>
					</div>
				</Container>
			</ParallaxBanner>
		</>
	);
}

export default Values;
