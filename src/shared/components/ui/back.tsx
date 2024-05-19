import type { FC } from 'react';
import { Button } from './button';
import { ArrowLeftIcon } from 'lucide-react';
import { useRouter } from '@tanstack/react-router';

const Back: FC = () => {
	const router = useRouter();
	const handleBack = () => router.history.back();
	return (
		<Button variant='secondary' size='icon' className='h-8 w-8 p-2' onClick={handleBack}>
			<ArrowLeftIcon className='h-6 w-6' />
		</Button>
	);
};

export { Back };
