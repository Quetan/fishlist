import { Title } from '@/shared/components/ui/title';
import { AchievementsList } from '@/widgets/achievements-list';
import type { FC } from 'react';

const AchievementsPage: FC = () => (
	<>
		<Title title='Достижения' size='lg' className='mb-4' />
		<AchievementsList />
	</>
);

export default AchievementsPage;
