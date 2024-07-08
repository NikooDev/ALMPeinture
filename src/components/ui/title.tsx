import React from 'react';

const Title = ({
	children
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<h1 className="font-rebel text-4xl text-slate-800 font-bold">{ children }</h1>
	)
}

export default Title;
