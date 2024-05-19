import { Title } from '@/shared/components/ui/title';
import { StatsGrid } from '@/widgets/stats-grid';
import type { FC } from 'react';

const StatsPage: FC = () => (
	<>
		<Title title='Статистика' size='lg' className='mb-4' />

		<StatsGrid />
	</>
);

export default StatsPage;
