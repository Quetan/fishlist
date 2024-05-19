import { useAuth } from '@/app/auth';
import { AchievementItem } from '@/entities/achievement';
import type { FC } from 'react';

const AchievementsList: FC = () => {
	const auth = useAuth();

	const achievements = auth.user?.achievements;

	if (!achievements || achievements.length === 0)
		return <span className='text-destructive'>Достижения отсутствуют</span>;

	return (
		<div className='grid grid-cols-2 grid-rows-3 gap-4'>
			{achievements.map(ach => (
				<AchievementItem
					achievement={ach}
					level={ach.level as 0 | 1 | 2 | 3 | 4 | null | undefined}
					key={ach.name}
				/>
			))}
		</div>
	);
};

export default AchievementsList;
