import { GameplayerItem, type IGameplayer } from '@/entities/gameplayer';
import { Title } from '@/shared/components/ui/title';
import type { FC } from 'react';

interface IProps {
	gamers: IGameplayer[];
}

const GameplayersList: FC<IProps> = ({ gamers }) => (
	<>
		<Title size='default' title='Игроки' className='mb-4' />
		<div className='flex flex-col gap-2'>
			{gamers.map(gamer => (
				<GameplayerItem key={gamer.player.login} gamer={gamer} />
			))}
		</div>
	</>
);

export default GameplayersList;
