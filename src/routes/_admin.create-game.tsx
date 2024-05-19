import CreateGamePage from '@/pages/create-game/CreateGamePage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_admin/create-game')({
	component: CreateGamePage
});
