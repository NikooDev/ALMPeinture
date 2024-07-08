'use client';

import { useEffect, useState } from 'react';
import Logo from '@/components/ui/logo';
import Container from '@/components/ui/container';
import Classname from 'classnames';
import { Link, Events } from 'react-scroll';

const Header = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [scrollHeader, setScrollHeader] = useState<boolean>(true);
	const classLink = `flex items-center ${scrollHeader ? 'h-16 text-slate-800 scrolled' : 'h-28 text-white text-shadow'} hover:cursor-pointer justify-center px-4 relative uppercase text-base font-semibold header-link`;

	useEffect(() => {
		const handleScroll = () => {
			const intro = document.getElementById('intro');
			if (!intro) return;

			if (window.scrollY < intro.offsetHeight - 50) {
				setScrollHeader(false);
			} else {
				setScrollHeader(true);
			}
		};

		setLoading(false);
		handleScroll();

		Events.scrollEvent.register('end', (to, element) => {
			if (to === 'about') {
				setScrollHeader(true);
			} else if (to === 'intro') {
				setScrollHeader(false);
			}
		});

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header className={Classname(loading ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100', 'fixed w-full z-50 top-0 left-0 backdrop-blur-md transition-all duration-300')} role="banner">
			<nav className={Classname(scrollHeader ? 'h-16 bg-opacity-100' : 'h-28 bg-opacity-10', 'bg-white flex items-center shadow-md transition-all duration-200')}>
				<Container className="flex items-center justify-between overflow-hidden">
					<Logo scrollHeader={scrollHeader}/>
					<ul className="flex">
						<li>
							<Link to="about" smooth={true} spy={true} offset={-20} className={Classname(classLink)}>Qui suis-je ?</Link>
						</li>
						<li>
							<Link to="values" smooth={true} spy={true} offset={-55} className={classLink}>Mes valeurs</Link>
						</li>
						<li>
							<Link to="services" smooth={true} spy={true} offset={-55} className={classLink}>Services</Link>
						</li>
						<li>
							<Link to="contact" smooth={true} spy={true} offset={-55} className={classLink}>Contactez-moi</Link>
						</li>
					</ul>
				</Container>
			</nav>
		</header>
	);
}

export default Header;
