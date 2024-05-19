import { QUERY_KEYS } from '@/shared/constants/query-keys';
import { api } from '@/app/api';
import type { IPlayer } from '../types';
import { useQuery } from '@tanstack/react-query';

const getPlayers = async () => api.get<IPlayer[]>('/players');

const useGetPlayers = () =>
	useQuery({
		queryKey: [QUERY_KEYS.GET_USERS],
		queryFn: () => getPlayers(),
		select: ({ data }) => data
	});

export { getPlayers, useGetPlayers };
