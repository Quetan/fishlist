import { api } from '@/app/api';
import { QUERY_KEYS } from '@/shared/constants/query-keys';
import { useMutation } from '@tanstack/react-query';
import type { IAuthRequest, IAuthResponse } from '../types/Types';

const authUser = async (data: IAuthRequest) => api.post<IAuthResponse>(`/player/login`, data);

const useAuthUser = () =>
	useMutation({
		mutationKey: [QUERY_KEYS.LOGIN_PLAYER],
		mutationFn: (data: IAuthRequest) => authUser(data)
	});

export { authUser, useAuthUser };
