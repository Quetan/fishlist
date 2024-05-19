import type { IAdmin } from '@/entities/admin';
import type { IPlayer } from '@/entities/player';
import { createContext } from 'react';

interface IAuthContext {
	login: (_user: string | null, _admin: string | null, _callback?: () => void) => void;
	logout: (_callback?: () => void) => void;
	user: IPlayer | null;
	admin: IAdmin | null;
	isAuthenticated: boolean;
	isAdmin: boolean;
}

const AuthContext = createContext<IAuthContext | null>(null);

export { AuthContext };
export type { IAuthContext };
