import styles from './HeroSection.module.scss';
import Container from '../Container/Container';

const text = 'Welcome to navigation through EzioMercer\'s projects';

const spans = text
	.split(' ')
	.map(word => <><span className={ styles.word }>{
		word
			.split('')
			.map(symbol => <span className={ styles.symbol }>{ symbol }</span>)
	}</span>{ ' ' }</>)

const HeroSection = () => (
	<section className={ styles.section }>
		<Container className={ styles.container }>
			<img src="/logo/EzioMercerLogo.png" alt="logo" width="200" height="200" />
			<span>{ spans }</span>
			<span className={ styles.arrow }>↓</span>
		</Container>
	</section>
)

export default HeroSection;
