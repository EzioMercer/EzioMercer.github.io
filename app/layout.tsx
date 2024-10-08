import { ReactNode } from 'react';
import './_reset.css';
import './_sizes.css';
import './_colors.css';
import './_global.css';
import './_piazzolla.css';
import Footer from './_components/Footer/Footer';
import Script from 'next/script';

const RootLayout = ({
	children
}: {
	children: ReactNode
}) => (
	<html lang="en">
		<head>
			<Script src="/_initDeviceHeight.js" strategy={ 'afterInteractive' } />
		</head>
		<body>
			{ children }
			<Footer />
		</body>
	</html>
)

export default RootLayout;