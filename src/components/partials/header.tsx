'use client';

import { useEffect, useState } from 'react';
import Logo from '@/components/ui/logo';
import Container from '@/components/ui/container';
import Classname from 'classnames';
import Link from 'next/link';

const Header = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [scrollHeader, setScrollHeader] = useState<boolean>(true);
	const classLink = `flex items-center ${scrollHeader ? 'h-16 text-slate-600 scrolled' : 'h-28 text-white text-shadow'} justify-center px-4 relative uppercase text-base font-bold header-link`;

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY < 750) {
				setScrollHeader(false);
			} else {
				setScrollHeader(true);
			}
		};

		setLoading(false);
		handleScroll();

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
							<Link href="/" className={Classname(classLink)}>Qui suis-je ?</Link>
						</li>
						<li>
							<Link href="/" className={classLink}>Mes valeurs</Link>
						</li>
						<li>
							<Link href="/" className={classLink}>Services</Link>
						</li>
						<li>
							<Link href="/" className={classLink}>Contactez-moi</Link>
						</li>
					</ul>
				</Container>
			</nav>
		</header>
	);
}

export default Header;
