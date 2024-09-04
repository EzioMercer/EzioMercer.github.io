import styles from './HeroSection.module.scss';
import Container from '../Container/Container';

const HeroSection = () => (
	<section className={ styles.section }>
		<Container className={ styles.container }>
			<img src="/logo/EzioMercerLogo.png" alt="logo" width="128" height="128" />
			<span>Welcome to navigation through EzioMercer's projects</span>
			<span className={ styles.arrow }>↓</span>
		</Container>
	</section>
)

export default HeroSection;
