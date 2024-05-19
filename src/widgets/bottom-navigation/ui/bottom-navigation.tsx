import { Link } from '@tanstack/react-router';
import type { FC } from 'react';
import styles from './styles.module.css';
import { Chips, Achievements, Statistics } from '@/shared/components/svg';

const ActiveButtonProps: React.AnchorHTMLAttributes<HTMLAnchorElement> = {
	className: 'opacity-100 ring-[1px] ring-primary/100'
};

const BottomNavigation: FC = () => (
	<div className={styles.navigation}>
		<Link to='/stats' activeProps={ActiveButtonProps} className={styles.link}>
			<Statistics className='h-6 w-6' />
			Статистика
		</Link>
		<Link to='/games' activeProps={ActiveButtonProps} className={styles.link}>
			<Chips className='h-6 w-6' /> Игры
		</Link>
		<Link to='/achievements' activeProps={ActiveButtonProps} className={styles.link}>
			<Achievements className='h-6 w-6' /> Достижения
		</Link>
	</div>
);

export default BottomNavigation;
