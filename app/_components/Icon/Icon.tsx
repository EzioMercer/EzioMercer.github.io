import styles from './Icon.module.scss';

const Icon = ({
	iconName
}: {
	iconName: string
}) => <span className={ `${styles.icon} ${styles[`icon-${iconName}`]}` }></span>

export default Icon;
