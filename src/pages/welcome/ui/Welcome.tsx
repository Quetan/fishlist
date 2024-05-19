import { useAuth } from '@/app/auth';
import { Button } from '@/shared/components/ui/button';
import { Link } from '@tanstack/react-router';
import { UserIcon } from 'lucide-react';
import type { FC } from 'react';

const Welcome: FC = () => {
	const { user, isAuthenticated } = useAuth();
	return (
		<div className='flex flex-col items-center justify-center pb-12'>
			<img src='/logo.svg' alt='Fish List логотип' width={280} height={280} />
			<h1 className='mb-1 text-5xl font-bold tracking-tighter'>Fish List</h1>
			<p className='mb-6'>Играйте в Покер без проблем!</p>
			<h2 className='mb-4 text-xl font-medium'>Авторизоваться как</h2>
			<div className='flex w-[300px] flex-col gap-2'>
				<Button size='lg' asChild>
					<Link to='/login'>
						<UserIcon className='mr-1' />
						{isAuthenticated ? user?.name : 'Игрок'}
					</Link>
				</Button>
				<Button size='lg' variant='secondary' asChild>
					<Link to='/administrator'>Администратор</Link>
				</Button>
			</div>
		</div>
	);
};

export default Welcome;
