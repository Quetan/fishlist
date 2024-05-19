import PageWrapper from '@/shared/components/ui/page-wrapper';
import BottomNavigation from '@/widgets/bottom-navigation';
import { TopNavigation } from '@/widgets/top-navigation';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

const AuthLayout = () => (
	<>
		<TopNavigation />
		<PageWrapper>
			<Outlet />
		</PageWrapper>
		<BottomNavigation />
	</>
);

export const Route = createFileRoute('/_auth')({
	beforeLoad: ({ context, location }) => {
		if (!context.auth.isAuthenticated) {
			throw redirect({
				to: '/login',
				search: {
					redirect: location.href
				}
			});
		}
	},
	component: AuthLayout
});
