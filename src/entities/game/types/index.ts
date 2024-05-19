import type { IGameplayer } from '@/entities/gameplayer';
import type { IHost } from '@/entities/host';

interface IGetGamesRequest {
	login: string;
	is_active: boolean;
}
type IGetGamesResponse = IGame[];

interface IGame {
	id: string;
	name: string;
	money_buy_in: number;
	chips_buy_in: number;
	host: IHost;
	is_active: boolean;
	game_players: IGameplayer[];
	password: string;
}

export type { IGetGamesRequest, IGetGamesResponse, IGame };
