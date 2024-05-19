import { Skeleton } from '@/shared/components/ui/skeleton';
import type { FC } from 'react';

const GamesListLoader: FC = () => (
	<div className='flex flex-col gap-2'>
		<Skeleton className='h-10 w-full rounded-sm' />
		<Skeleton className='h-10 w-full rounded-sm' />
		<Skeleton className='h-10 w-full rounded-sm' />
	</div>
);

export default GamesListLoader;
