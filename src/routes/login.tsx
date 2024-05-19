import LoginPage from '@/pages/login';
import { createFileRoute, redirect } from '@tanstack/react-router';
import {} from '@tanstack/react-router';
import { z } from 'zod';

const fallback = '/games' as const;

export const Route = createFileRoute('/login')({
	validateSearch: z.object({
		redirect: z.string().optional().catch('')
	}),
	beforeLoad: ({ context, search }) => {
		if (context.auth.isAuthenticated) {
			throw redirect({ to: search.redirect || fallback });
		}
	},
	component: LoginPage
});
