import { QUERY_KEYS } from '@/shared/constants/query-keys';
import { api } from '@/app/api';
import type { ICreateGameRequest } from '../types';
import type { IGame } from '@/entities/game';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const createGame = async (data: ICreateGameRequest) => api.post<IGame>(`/admin/games`, data);

const useCreateGame = () => {
	const qc = useQueryClient();
	return useMutation({
		mutationKey: [QUERY_KEYS.CREATE_GAME],
		mutationFn: (data: ICreateGameRequest) => createGame(data),
		onSuccess: () => async () => {
			await qc.invalidateQueries(
				{
					queryKey: [QUERY_KEYS.GET_GAMES],
					refetchType: 'all'
				},
				{ throwOnError: true }
			);
			await qc.invalidateQueries(
				{
					queryKey: [QUERY_KEYS.GET_HOSTED_GAMES],
					refetchType: 'all'
				},
				{ throwOnError: true }
			);
		}
	});
};

export { createGame, useCreateGame };
