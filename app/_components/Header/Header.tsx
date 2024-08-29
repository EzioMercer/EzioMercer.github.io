import styles from './Header.module.scss';
import Container from '../Container/Container';

const Header = () => {
	return (
		<header className={ styles.header }>
			<Container>
				<div className={ styles.logo }>
					<img src="/logo/EzioMercerLogo.png" alt="logo"/>
				</div>
			</Container>
		</header>
	)
}

export default Header;
