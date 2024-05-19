import type { IGetGamesResponse, IGetGamesRequest, IGame } from '../types';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/shared/constants/query-keys';
import { api } from '@/app/api';

const getGame = async (id: string) => api.get<IGame>(`/games/${id}`);

const getGames = async (params: IGetGamesRequest) =>
	api.get<IGetGamesResponse>(`/player/games`, {
		params: params
	});

const getHostedGames = async (params: IGetGamesRequest) =>
	api.get<IGetGamesResponse>(`/admin/games`, {
		params: params
	});

const useGetGame = (id: string) =>
	useQuery({
		queryKey: [QUERY_KEYS.GET_GAME, id],
		queryFn: () => getGame(id),
		select: ({ data }) => data,
		refetchInterval: 500,
		enabled: !!id
	});

const useGetGames = (params: IGetGamesRequest) =>
	useQuery({
		queryKey: [QUERY_KEYS.GET_GAMES, params],
		queryFn: () => getGames(params),
		select: ({ data }) => data,
		refetchInterval: 1000,
		enabled: !!params.login,
		retry: true
	});

const useGetHostedGames = (params: IGetGamesRequest) =>
	useQuery({
		queryKey: [QUERY_KEYS.GET_HOSTED_GAMES, params],
		queryFn: () => getHostedGames(params),
		select: ({ data }) => data,
		refetchInterval: 500,
		enabled: !!params.login,
		retry: true
	});

export { getGame, useGetGame, getGames, useGetGames, getHostedGames, useGetHostedGames };
