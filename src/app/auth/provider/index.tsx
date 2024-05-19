import { useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import { AuthContext } from '../context';

import { getStoredUser, setStoredUser, removeStoredAccessToken } from '@/shared/lib/localstorage';

const playerKey = 'player' as const;
const adminKey = 'admin' as const;

const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<string | null>(getStoredUser(playerKey));
	const [admin, setAdmin] = useState<string | null>(getStoredUser(adminKey));

	const isAuthenticated = !!user;
	const isAdmin = !!admin;

	const logout = useCallback((callback?: () => void) => {
		setStoredUser(playerKey, null);
		setStoredUser(adminKey, null);
		setUser(null);
		setAdmin(null);
		removeStoredAccessToken();
		callback?.();
	}, []);

	const login = useCallback(
		(player: string | null, admin: string | null, callback?: () => void) => {
			setStoredUser(playerKey, player);
			setStoredUser(adminKey, admin);
			setUser(player);
			setAdmin(admin);
			callback?.();
		},
		[]
	);

	useEffect(() => {
		setUser(getStoredUser(playerKey));
		setAdmin(getStoredUser(adminKey));
	}, []);

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				isAdmin,
				admin: JSON.parse(admin || 'null'),
				user: JSON.parse(user || 'null'),
				login,
				logout
			}}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth должен быть внутри AuthProvider');
	}
	return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };
