import { Title } from '@/shared/components/ui/title';
import { GamesList, GamesListWrapper } from '@/widgets/games-list';
import type { FC } from 'react';

const GamesPage: FC = () => (
	<>
		<Title title='Игры' size='lg' className='mb-2' />
		<p className='rounded-lg bg-muted p-4 text-xs tracking-tighter text-muted-foreground'>
			Здесь Вы можете видеть активные и прошедшие игры.
		</p>
		<GamesListWrapper>
			<Title title='Активные игры' size='sm' className='mb-2' variant='primary' />
			<GamesList active />
			<Title title='Предыдущие игры' size='sm' className='mb-2' variant='default' />
			<GamesList />
		</GamesListWrapper>
	</>
);

export default GamesPage;
