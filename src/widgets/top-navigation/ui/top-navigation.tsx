import { useAuth } from '@/app/auth';
import ThemeToggler from '@/app/theme';
import AdminMenu from '@/entities/admin/ui/admin-menu';
import { PlayerMenu } from '@/entities/player';
import { Logo } from '@/shared/components/svg';
import type { FC } from 'react';

const TopNavigation: FC = () => {
	const auth = useAuth();
	return (
		<div className='fixed left-2 right-2 top-2 z-50 mx-auto flex w-[calc(100%-2rem)] max-w-screen-sm flex-row items-center justify-between overflow-hidden rounded-[3rem] border-2 border-primary/40 bg-background/40 px-4 py-2 backdrop-blur-md'>
			<div className='flex flex-row items-center gap-1'>
				<Logo className='absolute -left-3 top-9 h-16 w-16 -translate-y-1/2' />
				<span className='pl-5 text-lg font-bold leading-none tracking-tighter'>Fish List</span>
			</div>

			<div className='flex flex-row items-center gap-1'>
				<ThemeToggler className='h-6 w-6' />
				{auth.isAdmin ? <AdminMenu /> : <PlayerMenu />}
			</div>
		</div>
	);
};

export default TopNavigation;
