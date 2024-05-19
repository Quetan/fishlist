import { useAuth } from '@/app/auth';
import { useNavigate, useRouter } from '@tanstack/react-router';

export const useLogout = () => {
	const router = useRouter();
	const navigate = useNavigate();
	const auth = useAuth();

	const logout = async () => {
		if (window.confirm('Вы действительно хотите выйти?')) {
			auth.logout();
			await router.invalidate().finally(() => {
				navigate({ to: '/' });
			});
		}
	};

	return logout;
};
