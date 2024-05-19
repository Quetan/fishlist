import type { IAchievement } from '@/entities/achievement';

interface IPlayer {
	name: string;
	login: string;
	achievements: IAchievement[];
}

export type { IPlayer };
