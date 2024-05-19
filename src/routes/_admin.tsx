import PageWrapper from '@/shared/components/ui/page-wrapper';
import { TopNavigation } from '@/widgets/top-navigation';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

const AdminLayout = () => (
	<>
		<TopNavigation />
		<PageWrapper>
			<Outlet />
		</PageWrapper>
	</>
);

export const Route = createFileRoute('/_admin')({
	beforeLoad: ({ context, location }) => {
		if (!context.auth.isAdmin) {
			throw redirect({
				to: '/',
				search: {
					redirect: location.href
				}
			});
		}
	},
	component: AdminLayout
});
