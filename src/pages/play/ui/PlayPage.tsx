import { useAuth } from '@/app/auth';
import { useGetGame } from '@/entities/game';
import { Skeleton } from '@/shared/components/ui/skeleton';
import { Title } from '@/shared/components/ui/title';
import { GameplayersList } from '@/widgets/gameplayers-list';
import { useParams } from '@tanstack/react-router';
import type { FC } from 'react';

const PlayPage: FC = () => {
	const { isAdmin } = useAuth();
	const params = useParams({ from: isAdmin ? '/_admin/game/$id' : '/_auth/play/$id' });
	const { data: game, isPending } = useGetGame(params.id);

	if (isPending) return <Skeleton className='h-8 w-full' />;
	if (!game) return <Title title='Ошибка получения игры' size='sm' backButton />;

	return (
		<>
			<Title title={game.name} variant='primary' size='lg' className='mb-4' backButton />

			<GameplayersList gamers={game.game_players} />
		</>
	);
};

export default PlayPage;
