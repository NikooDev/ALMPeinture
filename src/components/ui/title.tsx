import React from 'react';
import Classname from 'classnames';

const Title = ({
	children,
	className
}: Readonly<{
	children: React.ReactNode;
	className?: string
}>) => {
	return (
		<h1 className={Classname('font-rebel text-[3rem] font-bold', className)}>{ children }</h1>
	)
}

export default Title;
