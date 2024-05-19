import type { IGetGamesRequest, IGetGamesResponse, IGame } from './types';
import {
	useGetGames,
	getGames,
	getHostedGames,
	useGetHostedGames,
	getGame,
	useGetGame
} from './api';
import GameItem from './ui/GameItem';

export { GameItem, useGetGames, getGames, getHostedGames, useGetHostedGames, getGame, useGetGame };
export type { IGetGamesRequest, IGetGamesResponse, IGame };
