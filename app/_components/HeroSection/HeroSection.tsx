import styles from './HeroSection.module.scss';
import Container from '../Container/Container';
import { Fragment } from 'react';

const text = 'Welcome to navigation through EzioMercer\'s projects';

const spans = text
	.split(' ')
	.map((word, i) => {
		const Wrapper = i !== 4 ? Fragment : 'a';

		return (
			<Wrapper key={ i } href={ '/Rovshan Badirkhanov CV.pdf' }>
				<span className={ styles.word }>
					{
						word
							.split('')
							.map((symbol, j) => (
								<span key={ `${ i } ${ j }` } className={ styles.symbol }>{ symbol }</span>
							))
					}
				</span>
				{ ' ' }
			</Wrapper>
		)
	})

const HeroSection = () => (
	<section className={ styles.section }>
		<Container className={ styles.container }>
			<img src="/logo/EzioMercerLogo.png" alt="logo" width="150" height="150" />
			<div className={ styles.message }>{ spans }</div>
			<span className={ styles.arrow }>↓</span>
		</Container>
	</section>
)

export default HeroSection;
