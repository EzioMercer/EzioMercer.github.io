import styles from './_page.module.scss';
import { Viewport } from 'next';
import Container from './_components/Container/Container';
import HeroSection from './_components/HeroSection/HeroSection';
import SearchSection from './_components/SearchSection/SearchSection';

export const viewport: Viewport = {
	width: 'device-width',
	interactiveWidget: 'resizes-content',
	initialScale: 1,
	maximumScale: 1
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