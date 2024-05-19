import { Button } from '@/shared/components/ui/button';
import { Title } from '@/shared/components/ui/title';
import { GamesList } from '@/widgets/games-list';
import { Link } from '@tanstack/react-router';
import { PlusIcon } from 'lucide-react';
import type { FC } from 'react';

const HostedGamesPage: FC = () => (
	<>
		<div className='mb-4 flex flex-row items-center justify-between gap-4'>
			<Title title='Созданные игры' size='lg' />
			<Button variant='default' size='icon' className='h-8 w-8' asChild>
				<Link to='/create-game'>
					<PlusIcon />
				</Link>
			</Button>
		</div>
		<GamesList hosted active />
	</>
);

export default HostedGamesPage;
