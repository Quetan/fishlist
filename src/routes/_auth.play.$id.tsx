import { PlayPage } from '@/pages/play';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/play/$id')({
	component: PlayPage
});
