interface IAchievement {
	name: IAchievementName;
	level: IAchievementLevel;
	value: number;
	thresholds: number[];
}

type IAchievementName = 'Богач' | 'Топ донатер' | 'Филантроп' | 'Клирик' | 'Победитель' | 'Акула';
type IAchievementLevel = 0 | 1 | 2 | 3 | 4;

export type { IAchievement, IAchievementName, IAchievementLevel };
