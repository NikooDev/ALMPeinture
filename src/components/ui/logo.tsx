'use client';

import Classname from 'classnames';
import { Link } from 'react-scroll';

const Logo = ({ scrollHeader, textWhite, colours }: { scrollHeader: boolean, textWhite?: boolean, colours?: boolean }) => {
	return (
		<Link to="intro" smooth={true} spy={true} className={Classname(scrollHeader ? 'items-center pt-0 h-16' : 'items-start pt-3 h-24', 'hover:cursor-pointer inline-flex relative')}>
			<div className={Classname(scrollHeader ? 'flex gap-3 text-slate-800 z-10' : 'text-white text-shadow', 'font-rebel text-2xl text-center', textWhite && 'text-white text-shadow', colours && 'z-20')}>
				<p>ALM</p>
				<p>Peinture</p>
			</div>
			<div className={Classname('ml-2', colours && 'z-20')}>
				<img src="/static/img/painter_small.png" width={60} alt="peintre"/>
			</div>
			<div className={Classname(!scrollHeader && '-z-10 bottom-0', 'flex gap-2 w-full absolute bottom-0 blur-md px-3', colours && 'z-10 bottom-5')}>
				<div className="h-10 w-3 bg-[#F1DE02] rounded-2xl relative bottom-0"/>
				<div className="h-10 w-3 bg-[#14CC04] rounded-2xl relative bottom-0.5"/>
				<div className="h-10 w-3 bg-[#0D8FE7] rounded-2xl relative bottom-1"/>
				<div className="h-10 w-3 bg-[#FF01D5] rounded-2xl relative bottom-1.5"/>
				<div className="h-10 w-3 bg-[#FF0064] rounded-2xl relative bottom-2"/>
				<div className="h-10 w-3 bg-[#FF0100] rounded-2xl relative bottom-2.5"/>
				<div className="h-10 w-3 bg-[#FF6A00] rounded-2xl relative bottom-3"/>
			</div>
		</Link>
	);
}

export default Logo;
