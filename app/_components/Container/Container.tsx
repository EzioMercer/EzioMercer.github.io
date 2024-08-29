import styles from './Container.module.scss';
import { ReactNode } from 'react';

const Container = ({
	children
}: {
	children: ReactNode
}) => {
	return (
		<div className={ styles.container }>{ children }</div>
	)
}

export default Container;
