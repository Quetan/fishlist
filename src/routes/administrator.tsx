import { createFileRoute, redirect } from '@tanstack/react-router';
import { z } from 'zod';
import { AdminLoginPage } from '@/pages/admin';

const fallback = '/hosted' as const;

export const Route = createFileRoute('/administrator')({
	validateSearch: z.object({
		redirect: z.string().optional().catch('')
	}),
	beforeLoad: ({ context, search }) => {
		if (context.auth.isAdmin) {
			throw redirect({ to: search.redirect || fallback });
		}
	},
	component: AdminLoginPage
});
