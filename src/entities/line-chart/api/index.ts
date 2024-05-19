import { api } from '@/app/api';
import type { IStats } from '../types';
import { QUERY_KEYS } from '@/shared/constants/query-keys';
import { useQuery } from '@tanstack/react-query';

const getStats = async (login: string) =>
	api.get<IStats>(`/stats`, {
		params: {
			login: login
		}
	});

const useGetStats = (login: string) =>
	useQuery({
		queryKey: [QUERY_KEYS.GET_STATS, login],
		queryFn: () => getStats(login),
		select: ({ data }) => data
	});

export { getStats, useGetStats };
