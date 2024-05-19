import type { IPlayer } from '@/entities/player';

interface IAuthResponse {
	player: IPlayer;
	token: string;
}

interface IAuthRequest {
	login: string;
}

export type { IAuthRequest, IAuthResponse };
