import styles from './HeroSection.module.scss';

const HeroSection = () => {
	return (
		<section className={ styles.section }>
			<span>
				Welcome to navigation through EzioMercer's projects
			</span>
			<span className={ styles.arrow }>↓</span>
		</section>
	)
}

export default HeroSection;
