import { api } from '@/app/api';
import { QUERY_KEYS } from '@/shared/constants/query-keys';
import { useMutation } from '@tanstack/react-query';
import type { IAdminAuthRequest, IAdminAuthResponse } from '../types/Types';

const authAdmin = async (data: IAdminAuthRequest) =>
	api.post<IAdminAuthResponse>(`/admin/login`, data);

const useAuthAdmin = () =>
	useMutation({
		mutationKey: [QUERY_KEYS.LOGIN_ADMIN],
		mutationFn: (data: IAdminAuthRequest) => authAdmin(data)
	});

export { authAdmin, useAuthAdmin };
