import React from 'react';
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import Header from '@/components/partials/header';
import Classname from 'classnames';
import type { Metadata } from 'next';
import '@/styles/globals.css';

const fontRebel = localFont({ src: '../assets/fonts/rebel.woff2', variable: '--font-rebel' });
const fontDefault = Montserrat({
	subsets: ['latin'],
	variable: '--font-default',
})

export const metadata: Metadata = {
	title: 'ALM Peinture | Peintre Vannes | Morbihan, France',
	description: 'ALM Peinture est une entreprise de peinture à Vannes propose des services de peinture et rénovation dans le Morbihan.'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
		  <body>
			  <main className={Classname(fontRebel.variable, fontDefault.variable, fontDefault.className)}>
					<Header/>
					{ children }
				</main>
			</body>
		</html>
	);
}
