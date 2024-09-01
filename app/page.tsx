'use client';

import Header from './_components/Header/Header';
import Footer from './_components/Footer/Footer';
import Main from './_components/Main/Main';
import { Viewport } from 'next';
import { useEffect } from 'react';

export const viewport: Viewport = {
	width: 'device-width',
	interactiveWidget: 'resizes-content',
	initialScale: 1,
	maximumScale: 1
}

const handleResize = () => {
	document.documentElement.style.setProperty('--device-height', window.innerHeight + 'px');
}

const Page = () => {

	useEffect(handleResize, []);

	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	);
}

export default Page;