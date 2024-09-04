import styles from './HeroSection.module.scss';

const HeroSection = () => (
	<section className={ styles.section }>
		<img src="/logo/EzioMercerLogo.png" alt="logo" width="128" height="128" />
		<span>
			Welcome to navigation through EzioMercer's projects
		</span>
		<span className={ styles.arrow }>↓</span>
	</section>
)

export default HeroSection;
