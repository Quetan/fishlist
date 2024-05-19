import type { IAdmin } from '@/entities/admin';

interface IAdminAuthResponse {
	admin: IAdmin;
	token: string;
}

interface IAdminAuthRequest {
	login: string;
	password: string;
}

export type { IAdminAuthRequest, IAdminAuthResponse };
