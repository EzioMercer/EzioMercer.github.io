import { ReactNode } from 'react';
import './_reset.css';
import './_sizes.css';
import './_colors.css';
import './_global.css';
import Header from './_components/Header/Header';
import Footer from './_components/Footer/Footer';
import Script from 'next/script';

const RootLayout = ({
	children
}: {
	children: ReactNode
}) => (
	<html lang="en">
		<body>
			<Script src="/_initDeviceHeight.js" strategy={ 'beforeInteractive' } />
			<Header />
			{ children }
			<Footer />
		</body>
	</html>
)

export default RootLayout;