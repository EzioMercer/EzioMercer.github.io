import styles from './_page.module.scss';
import { Metadata, Viewport } from 'next';
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
	title: 'EzioMercer\'s projects',
	description: 'Navigation through EzioMercer\'s projects',
	authors: [{name: 'Rovshan Badirkhanov'}, {name: 'EzioMercer'}]
}

const Page = () => (
	<main className={ styles.main }>
		<HeroSection />
		<SearchSection />
	</main>
)

export default Page;