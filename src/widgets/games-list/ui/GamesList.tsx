import { useAuth } from '@/app/auth';
import { GameItem, useGetGames, useGetHostedGames } from '@/entities/game';
import type { FC, HTMLAttributes } from 'react';
import GamesListLoader from './GamesListLoader';
import { cn } from '@/shared/lib/utils';

interface IProps extends HTMLAttributes<HTMLDivElement> {
	active?: boolean;
	hosted?: boolean;
}

const GamesList: FC<IProps> = ({ active, hosted, className, ...props }) => {
	const { user, admin } = useAuth();

	const {
		data: games,
		isPending,
		isError
	} = useGetGames({
		login: user?.login ?? '',
		is_active: Boolean(active)
	});

	const {
		data: hostedGames,
		isPending: isHostedGamesPending,
		isError: isHostedGamesError
	} = useGetHostedGames({
		login: admin?.login ?? '',
		is_active: Boolean(active)
	});

	if (!((hosted && admin?.login) || (!hosted && user?.login))) return null;

	if ((hosted && isHostedGamesError) || (!hosted && isError))
		return <span className='text-destructive'>Произошла ошибка при получении игр!</span>;

	if ((hosted && isHostedGamesPending) || (!hosted && isPending)) return <GamesListLoader />;

	return hosted ? (
		<div className={cn('mb-6 flex flex-col gap-2', className)} {...props}>
			{hostedGames?.map(game => <GameItem key={game.id} game={game} />)}
		</div>
	) : (
		<div className={cn('mb-6 flex flex-col gap-2', className)} {...props}>
			{games?.map(game => <GameItem key={game.id} game={game} />)}
		</div>
	);
};

export default GamesList;
