import { useAuth } from '@/app/auth';
import { StatsLineChart, useGetStats } from '@/entities/line-chart';
import { Achievements, Looser } from '@/shared/components/svg';
import { Skeleton } from '@/shared/components/ui/skeleton';
import { Title } from '@/shared/components/ui/title';
import { rublesFormat } from '@/shared/lib/utils';
import type { FC } from 'react';

const StatsGrid: FC = () => {
	const { user } = useAuth();

	const { data: stats, isPending, isError } = useGetStats(user?.login ?? '');

	if (isError) return <span className='text-destructive'>Статистика не обнаружена...</span>;

	if (isPending) return <Skeleton className='h-[250px] w-full' />;

	return (
		<div className='grid grid-cols-2 grid-rows-[100px_1fr] gap-4'>
			<div className='relative flex flex-col justify-center overflow-hidden rounded-lg border-2 border-muted-foreground/20 bg-primary px-4 py-2 text-background dark:text-foreground'>
				<Title title='Выиграно' size='xs' className='mb-2 text-sm' />
				<span className='ml-auto text-2xl font-bold'>{rublesFormat(stats.money_win)}</span>
				<Achievements className='absolute -bottom-2 left-0 h-10 w-10 opacity-75 grayscale' />
			</div>
			<div className='relative flex flex-col justify-center overflow-hidden rounded-lg border-2 border-muted-foreground/20 bg-destructive px-4 py-2 text-background dark:text-foreground'>
				<Title title='Проиграно' size='xs' className='mb-2 text-sm' />
				<span className='ml-auto text-2xl font-bold '>{rublesFormat(stats.money_lose)}</span>
				<Looser className='absolute -bottom-2 -left-2 h-12 w-12 opacity-75 grayscale' />
			</div>
			<div className='col-span-2 flex flex-col justify-center rounded-lg border-2 border-muted-foreground/20 bg-card p-4'>
				<Title title='Статистика игр' size='xs' className='mb-6' />
				<div>
					<StatsLineChart stats={stats} />
				</div>
			</div>
		</div>
	);
};

export default StatsGrid;
