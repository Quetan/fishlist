import LoginUserForm from '@/features/login-user';
import { getRouteApi, useRouterState } from '@tanstack/react-router';

const fallback = '/games' as const;

const LoginPage = () => {
	const route = getRouteApi('/login');
	const isLoading = useRouterState({ select: s => s.isLoading });
	const search = route.useSearch();

	return (
		<div className='flex flex-col items-center justify-center pb-12'>
			<img src='/logo.svg' alt='Fish List логотип' width={280} height={280} />
			<h1 className='mb-1 text-5xl font-bold tracking-tighter'>Fish List</h1>

			{search.redirect ? (
				<p className='mb-6 text-destructive'>Сначала необходимо авторизоваться!</p>
			) : (
				<p className='mb-6'>Играйте в Покер без проблем!</p>
			)}
			<h2 className='mb-4 text-xl font-medium'>Авторизация</h2>
			<LoginUserForm disabled={isLoading} redirectUrl={search.redirect || fallback} />
		</div>
	);
};

export default LoginPage;
