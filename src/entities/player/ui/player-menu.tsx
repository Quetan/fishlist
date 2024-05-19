import { useAuth } from '@/app/auth';
import type { FC } from 'react';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/shared/components/ui/dropdown-menu';
import { Button } from '@/shared/components/ui/button';
import { Link } from '@tanstack/react-router';
import { Exit, User, Settings } from '@/shared/components/svg';
import { useLogout } from '@/features/logout';

const PlayerMenu: FC = () => {
	const { user: player } = useAuth();
	const logout = useLogout();
	const handleLogout = () => logout();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='link' size='sm' className='gap-1 px-1 hover:no-underline'>
					<User className='h-6 w-6' />
					<span className='max-w-[10ch] overflow-hidden text-ellipsis text-sm font-light tracking-tighter'>
						{player?.name}
					</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56' align='end'>
				<DropdownMenuLabel>Пользователь {player?.login}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem asChild disabled className='cursor-pointer'>
						<Link to='/profile'>
							<User className='mr-2 h-8 w-8' />
							<span>Профиль</span>
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem disabled className='cursor-pointer'>
						<Settings className='mr-2 h-8 w-8' />
						<span>Настройки</span>
					</DropdownMenuItem>
					<DropdownMenuItem className='cursor-pointer' onClick={handleLogout}>
						<Exit className='mr-2 h-8 w-8' />
						<span>Выйти</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default PlayerMenu;
