import { ReactNode } from 'react';
import './_reset.css';
import './_sizes.css';
import './_colors.css';
import './_global.css';

const RootLayout = ({
	children
}: {
	children: ReactNode
}) => {
	return (
		<html lang="en">
			<body>{ children }</body>
		</html>
	)
}

export default RootLayout;