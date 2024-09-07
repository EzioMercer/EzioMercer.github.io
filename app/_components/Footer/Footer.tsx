import styles from './Footer.module.scss';
import Container from '../Container/Container';

const Footer = () => {
	return (
		<footer className={ styles.footer }>
			<Container className={ styles.container }>
				{'© 2024 EzioMercer. All Rights Reserved.'}
			</Container>
		</footer>
	)
}

export default Footer;
