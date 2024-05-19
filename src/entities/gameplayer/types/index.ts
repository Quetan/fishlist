import type { IPlayer } from '@/entities/player';

interface IGameplayer {
	player: IPlayer;
	chips: number;
	money: number;
}

export type { IGameplayer };
