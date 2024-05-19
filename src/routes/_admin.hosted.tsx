import { HostedGamesPage } from '@/pages/hosted';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_admin/hosted')({
	component: HostedGamesPage
});
