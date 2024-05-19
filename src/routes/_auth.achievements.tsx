import { AchievementsPage } from '@/pages/achievements';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/achievements')({
	component: AchievementsPage
});
