import styles from './Main.module.scss';
import Container from '../Container/Container';
import HeroSection from './HeroSection/HeroSection';
import SearchSection from './SearchSection/SearchSection';

const Main = () => {
	return (
		<main className={ styles.main }>
			<Container>
				<HeroSection />
				<SearchSection />
			</Container>
		</main>
	)
}

export default Main;
