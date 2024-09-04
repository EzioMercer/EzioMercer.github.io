import styles from './Container.module.scss';
import { ReactNode } from 'react';

const Container = ({
	children,
	className
}: {
	children: ReactNode,
	className?: string
}) => {
	return (
		<div className={ `${styles.container} ${className ?? ''}` }>{ children }</div>
	)
}

export default Container;
