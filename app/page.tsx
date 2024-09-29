import styles from './_page.module.scss';
import { Metadata, Viewport } from 'next';
import HeroSection from './_components/HeroSection/HeroSection';
import SearchSection from './_components/SearchSection/SearchSection';
import generateMetadata from './_utils/generateMetadata';

export const viewport: Viewport = {
	width: 'device-width',
	interactiveWidget: 'resizes-content',
	initialScale: 1,
	maximumScale: 5,
	userScalable: true
}

export const metadata: Metadata = generateMetadata();

const Page = () => (
	<main className={ styles.main }>
		<HeroSection />
		<SearchSection />
	</main>
)

export default Page;