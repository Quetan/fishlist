import type { FC } from 'react';
import type { IGame } from '../types';
import { Chip } from '@/shared/components/svg';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/components/ui/button';
import { EyeIcon } from 'lucide-react';
import { OpenGameButton } from '@/features/open-game';

interface IProps {
	game: IGame;
}

const GameItem: FC<IProps> = ({ game }) => (
	<div
		className={cn(
			'flex flex-row items-center justify-between gap-4 rounded-lg border border-muted-foreground/20 px-5 py-3',
			game.is_active ? 'bg-card' : 'bg-muted'
		)}>
		<div className='grid grid-cols-[1.5rem_1fr] items-center gap-2'>
			<Chip className={cn('h-6 w-6', game.is_active ? '' : 'grayscale-[70%]')} />
			<span className='max-w-[20ch] overflow-hidden text-ellipsis text-sm tracking-tighter'>
				{game.name}
			</span>
		</div>

		<div className='flex flex-row items-center gap-2'>
			{game.is_active ? (
				<OpenGameButton game={game} />
			) : (
				<Button size='icon' variant='outline' className='h-8 w-8 rounded-full p-2'>
					<EyeIcon className='h-6 w-6' />
				</Button>
			)}
		</div>
	</div>
);

export default GameItem;
