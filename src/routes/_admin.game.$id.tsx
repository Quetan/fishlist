import { PlayPage } from '@/pages/play';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_admin/game/$id')({
	component: PlayPage
});
