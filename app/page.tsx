import styles from './_page.module.scss';
import { Metadata, Viewport } from 'next';
import Container from './_components/Container/Container';
import HeroSection from './_components/HeroSection/HeroSection';
import SearchSection from './_components/SearchSection/SearchSection';

export const viewport: Viewport = {
	width: 'device-width',
	interactiveWidget: 'resizes-content',
	initialScale: 1,
	maximumScale: 5,
	userScalable: true
}

export const metadata: Metadata = {
	title: 'Navigation',
	description: 'Navigation through all projects',
	authors: [{name: 'Rovshan Badirkhanov'}, {name: 'EzioMercer'}],
	keywords: ['Navigation', 'projects', 'EzioMercer']
}

const Page = () => (
	<main className={ styles.main }>
		<Container>
			<HeroSection />
			<SearchSection />
		</Container>
	</main>
)

export default Page;