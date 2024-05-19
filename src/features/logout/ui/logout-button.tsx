import type { ButtonProps } from '@/shared/components/ui/button';
import { Button } from '@/shared/components/ui/button';
import { cn } from '@/shared/lib/utils';
import { LogOutIcon } from 'lucide-react';
import type { FC } from 'react';
import { useLogout } from '../utils/logout-handler';

const LogoutButton: FC<ButtonProps> = ({ className }) => {
	const logout = useLogout();
	const logoutHandler = () => logout();
	return (
		<Button
			onClick={logoutHandler}
			variant='ghost'
			size='icon'
			className={cn('h-6 w-6', className)}>
			<LogOutIcon />
		</Button>
	);
};

export default LogoutButton;
