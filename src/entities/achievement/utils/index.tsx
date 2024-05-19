import type { IAchievementIconProps } from '@/shared/components/svg';
import { Cleric, Donater, Philantropist, RichMan, Shark, Winner } from '@/shared/components/svg';
import type { IAchievementLevel, IAchievementName } from '../types';
import type { FC } from 'react';

const AchievementIconByNameMap: Record<IAchievementName, FC<IAchievementIconProps>> = {
	Акула: Shark,
	'Топ донатер': Donater,
	Богач: RichMan,
	Клирик: Cleric,
	Победитель: Winner,
	Филантроп: Philantropist
};

const AchievementColorByLevelMap: Record<IAchievementLevel, string> = {
	'0': 'hsl(var(--achievement-level-0))',
	'1': 'hsl(var(--achievement-level-1))',
	'2': 'hsl(var(--achievement-level-2))',
	'3': 'hsl(var(--achievement-level-3))',
	'4': 'hsl(var(--achievement-level-4))'
};

const getAchievementIcon = (name: IAchievementName) => AchievementIconByNameMap[name];

// eslint-disable-next-line react-refresh/only-export-components
export { AchievementIconByNameMap, getAchievementIcon, AchievementColorByLevelMap };
