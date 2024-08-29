import styles from './Main.module.scss';
import Container from '../Container/Container';
import HeroSection from './HeroSection/HeroSection';

const Main = () => {
	return (
		<main className={ styles.main }>
			<Container>
				<HeroSection />
			</Container>
		</main>
	)
}

export default Main;
