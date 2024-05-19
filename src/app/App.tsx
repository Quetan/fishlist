import type { FC } from 'react';
import { useAuth } from './auth';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from '@/routeTree.gen';
import { Toaster } from '@/shared/components/ui/toaster';

const router = createRouter({
	routeTree,
	defaultPreload: 'intent',
	defaultErrorComponent: () => <div></div>,
	defaultNotFoundComponent: () => <div></div>,
	context: {
		auth: undefined!
	}
});
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

const App: FC = () => {
	const auth = useAuth();
	return (
		<>
			<main className='relative min-h-dvh'>
				<RouterProvider router={router} context={{ auth }} />
			</main>
			<Toaster />
		</>
	);
};

export default App;
