import type { FC, HTMLAttributes } from 'react';
import type { IAchievement } from '../types';
import { cn } from '@/shared/lib/utils';
import { AchievementColorByLevelMap, getAchievementIcon } from '../utils';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { Progress } from '@/shared/components/ui/progress';

interface IProps
	extends HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof AchievementItemVariants> {
	achievement: IAchievement;
}

const AchievementItemVariants = cva(
	'm-auto flex flex-col gap-1 p-4 text-center tracking-wide text-sm',
	{
		variants: {
			level: {
				0: ' text-achievement-0',
				1: ' text-achievement-1',
				2: ' text-achievement-2',
				3: ' text-achievement-3',
				4: ' text-achievement-4'
			}
		},
		defaultVariants: {
			level: 0
		}
	}
);

const AchievementItem: FC<IProps> = ({ achievement, level, className, ...props }) => {
	const Icon = getAchievementIcon(achievement.name);
	return (
		<div
			className={cn(
				AchievementItemVariants({
					level,
					className
				})
			)}
			{...props}>
			<Icon
				style={{
					filter: `drop-shadow(0 0 15px ${AchievementColorByLevelMap[level ?? 0]})`
				}}
				className='h-32 w-32 shadow-red-500'
				color={AchievementColorByLevelMap[level ?? 0]}
			/>
			<span className='font-semibold'>{achievement.name}</span>
			<span className='mb-2 text-sm'>Уровень {achievement.level + 1}</span>

			<div className='relative'>
				<Progress
					className='h-6 border-2 border-foreground/10'
					value={achievement.value}
					max={achievement.thresholds[achievement.level]}
				/>
				<span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-medium leading-none text-foreground'>
					{achievement.value}/{achievement.thresholds[achievement.level]}
				</span>
			</div>
		</div>
	);
};

export default AchievementItem;
