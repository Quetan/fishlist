import { Button } from '@/shared/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/shared/components/ui/dialog';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { PlayIcon } from 'lucide-react';
import type { FormEvent, FC, MouseEventHandler } from 'react';
import { useState } from 'react';
import type { IGame } from '@/entities/game';
import { useToast } from '@/shared/components/ui/use-toast';
import { useNavigate } from '@tanstack/react-router';
import { useAuth } from '@/app/auth';

interface IProps {
	game: IGame;
}

const OpenGameButton: FC<IProps> = ({ game }) => {
	const { isAdmin } = useAuth();
	const [password, setPassword] = useState<string>('');
	const { toast } = useToast();
	const navigate = useNavigate();
	const handleOpen = (ev: FormEvent<HTMLFormElement>) => {
		ev.preventDefault();
		if (password === game.password) {
			toast({ title: 'Вы успешно вошли в игру!', duration: 1000 });
			navigate({ to: isAdmin ? `/game/${game.id}` : `/play/${game.id}`, replace: true });
		} else {
			toast({ title: 'Неверный пароль!', variant: 'destructive', duration: 3000 });
			setPassword('');
		}
	};
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button size='icon' className='h-8 w-8 rounded-full p-2'>
					<PlayIcon className='h-6 w-6 fill-background' />
				</Button>
			</DialogTrigger>
			<DialogContent className='max-w-[425px] p-8'>
				<DialogHeader className='text-left'>
					<DialogTitle className='mb-1'>Войти в игру</DialogTitle>
					<DialogDescription>Введите пароль, чтобы войти в игру</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleOpen}>
					<div className='grid gap-4 py-4'>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='name' className='text-right'>
								Пароль
							</Label>
							<Input
								id='password'
								type='password'
								autoComplete='off'
								autoSave='off'
								value={password}
								onChange={e => setPassword(e.target.value)}
								className='col-span-3'
							/>
						</div>
					</div>
				</form>
				<DialogFooter>
					<Button
						type='submit'
						className='ml-auto w-max'
						onClick={handleOpen as unknown as MouseEventHandler<HTMLButtonElement>}>
						Войти
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default OpenGameButton;
