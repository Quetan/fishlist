import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import type { IAuthContext } from '@/app/auth';
import PageWrapper from '@/shared/components/ui/page-wrapper';

interface IRouterContext {
	auth: IAuthContext;
}

export const Route = createRootRouteWithContext<IRouterContext>()({
	component: () => (
		<div className='mx-auto max-w-screen-sm'>
			<Outlet />
		</div>
	),
	notFoundComponent: () => <PageWrapper>Page not found :(</PageWrapper>,
	errorComponent: () => <PageWrapper>Something went wrong :(</PageWrapper>,
	pendingComponent: () => <PageWrapper>Loading...</PageWrapper>
});
