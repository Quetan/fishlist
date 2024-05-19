import type { IGame } from '@/entities/game';
import type { IBuyInRequest } from '../types';
import { api } from '@/app/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/shared/constants/query-keys';

const buyIn = async (gameId: string, data: IBuyInRequest) =>
	api.post<IGame>(`/admin/games/${gameId}/new-buy-in`, data);

const useBuyIn = (gameId: string) => {
	const qc = useQueryClient();
	return useMutation({
		mutationKey: [QUERY_KEYS.BUY_IN],
		mutationFn: (data: IBuyInRequest) => buyIn(gameId, data),
		onSuccess: async () => {
			await qc.invalidateQueries(
				{
					queryKey: [QUERY_KEYS.GET_GAME, gameId],
					refetchType: 'all'
				},
				{ throwOnError: true }
			);
		}
	});
};

export { buyIn, useBuyIn };
