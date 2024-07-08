import React from 'react';
import Classname from 'classnames';

const Container = ({
	children,
	className
}: Readonly<{
	children: React.ReactNode;
	className?: string;
}>) => {
	return (
		<div className={Classname('container mx-auto px-5', className)}>
			{ children }
		</div>
	)
}

export default Container;
