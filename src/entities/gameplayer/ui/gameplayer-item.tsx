import type { FC, HTMLAttributes } from 'react';
import type { IGameplayer } from '../types';
import { cn, rublesFormat } from '@/shared/lib/utils';
import { Button } from '@/shared/components/ui/button';
import { ArrowLeftRightIcon } from 'lucide-react';
import { useAuth } from '@/app/auth';
import { Chips } from '@/shared/components/svg';
import { BuyInButton } from '@/features/buy-in';
import { useParams } from '@tanstack/react-router';

interface IProps extends HTMLAttributes<HTMLDivElement> {
	gamer: IGameplayer;
}

const GameplayerItem: FC<IProps> = ({ gamer, className, ...props }) => {
	const { isAdmin, user, admin } = useAuth();
	const myLogin = isAdmin ? admin?.login : user?.login;
	const params = useParams({ from: isAdmin ? '/_admin/game/$id' : '/_auth/play/$id' });
	return (
		<div
			className={cn(
				'flex flex-row items-center justify-between rounded-lg border border-foreground/20 bg-muted p-4 text-foreground dark:bg-foreground dark:text-background',
				className,
				{ 'border-4 border-primary/80': gamer.player.login === myLogin }
			)}
			{...props}>
			<div className='flex flex-col'>
				<span className='font-medium'>
					{gamer.player.name}
					{gamer.player.login === myLogin && (
						<span className='text-xs text-muted-foreground'> (Вы)</span>
					)}
				</span>
				<span className='mb-2 text-xs text-muted-foreground'>@{gamer.player.login}</span>
				{isAdmin ? (
					<div className='flex flex-row items-center gap-1 rounded-full bg-background px-4 py-2 text-[10px] leading-none tracking-tighter text-muted-foreground dark:bg-muted dark:text-muted-foreground'>
						<span className='mb-0.5'>
							Баланс:{' '}
							<span
								className={cn(
									'ml-1 font-medium',
									gamer.money > 0 ? 'text-primary' : 'text-destructive'
								)}>
								{rublesFormat(gamer.money)}
							</span>
						</span>
						<span>
							Фишки: <span className='ml-1 font-medium text-foreground'>{gamer.chips}</span>
						</span>
					</div>
				) : null}
			</div>

			{isAdmin ? (
				<div className='flex flex-col items-center justify-center gap-1'>
					<BuyInButton gameId={params.id} login={gamer.player.login} />
					<Button size='icon' variant='secondary' className='h-8 w-8'>
						<ArrowLeftRightIcon className='h-4 w-4' />
					</Button>
				</div>
			) : (
				<div className='flex flex-col items-center gap-1 rounded-md bg-background px-4 py-3 text-[10px] text-xs leading-none tracking-tighter text-muted-foreground dark:bg-muted dark:text-muted-foreground'>
					<span className='mb-0.5 ml-1 flex flex-row items-center gap-1 text-base font-medium text-foreground'>
						{gamer.chips} <Chips className='h-6 w-6' />
					</span>
					<span>
						Баланс:{' '}
						<span
							className={cn(
								'ml-1 font-medium',
								gamer.money > 0 ? 'text-primary' : 'text-destructive'
							)}>
							{rublesFormat(gamer.money)}
						</span>
					</span>
				</div>
			)}
		</div>
	);
};

export default GameplayerItem;
