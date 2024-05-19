import type { ButtonProps } from '@/shared/components/ui/button';
import { Button } from '@/shared/components/ui/button';
import { cn } from '@/shared/lib/utils';
import { PlusIcon } from 'lucide-react';
import type { FC } from 'react';
import { useBuyIn } from '../api';
import { useToast } from '@/shared/components/ui/use-toast';

interface IProps extends ButtonProps {
	gameId: string;
	login: string;
}

const BuyInButton: FC<IProps> = ({ gameId, login, className, ...props }) => {
	const { mutate, isPending } = useBuyIn(gameId);
	const { toast } = useToast();

	if (!gameId || !login) return null;

	const buyIn = () =>
		mutate(
			{ login },
			{
				onSuccess: () => {
					toast({
						title: 'Успешно!',
						description: `Вы успешно докупили ${login}!`
					});
				},
				onError: () => {
					toast({
						title: 'Ошибка!',
						description: `Произошла ошибка при докупке ${login}!`,
						variant: 'destructive'
					});
				}
			}
		);

	return (
		<Button
			disabled={isPending}
			onClick={buyIn}
			size='icon'
			className={cn('h-8 w-8', className)}
			{...props}>
			<PlusIcon className='h-4 w-4' />
		</Button>
	);
};

export default BuyInButton;
