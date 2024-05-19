import { useEffect, useState, type FC } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/shared/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/shared/components/ui/form';
import MultipleSelector, { type Option } from '@/shared/components/ui/multiple-selector';
import { Input } from '@/shared/components/ui/input';
import { formSchema } from '../api/FormSchema';
import type { z } from 'zod';
import { useCreateGame } from '../api';
import { useAuth } from '@/app/auth';
import { useToast } from '@/shared/components/ui/use-toast';
import { useNavigate } from '@tanstack/react-router';
import { Loader2 } from 'lucide-react';
import { useGetPlayers } from '@/entities/player';

const CreateGameForm: FC = () => {
	const { admin } = useAuth();
	const navigate = useNavigate();

	const [players, setPlayers] = useState<Option[]>([]);
	const [playersOptions, setPlayerOptions] = useState<Option[]>([]);

	const { toast } = useToast();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			host_login: '',
			password: '',
			player_logins: '',
			chips_buy_in: 0,
			money_buy_in: 0
		}
	});

	const { data: playersData, isPending: isPlayersPending } = useGetPlayers();

	useEffect(() => {
		if (!isPlayersPending && playersData && playersData.length) {
			setPlayerOptions(playersData.map(player => ({ label: player.name, value: player.login })));
		}
	}, [playersData, isPlayersPending]);

	const { mutate, isPending } = useCreateGame();

	function onSubmit(values: z.infer<typeof formSchema>) {
		mutate(
			{
				...values,
				player_logins: players.map(player => player.value).join(','),
				host_login: admin?.login ?? ''
			},
			{
				onSuccess: () => {
					toast({ title: 'Игра создана!' });
					navigate({ from: '/create-game', to: '/hosted', replace: true });
				},
				onError: () => {
					toast({ title: 'Произошла ошибка при создании игры!', variant: 'destructive' });
				}
			}
		);
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-2 rounded-lg border-2 border-muted-foreground/20 bg-card px-6 py-8'>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Название</FormLabel>
							<FormControl>
								<Input placeholder='Название игры' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Пароль</FormLabel>
							<FormControl>
								<Input placeholder='Пароль игры' {...field} />
							</FormControl>
							<FormDescription>
								Придумайте пароль игры, по которому игроки смогу зайти в игру
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					name='player_logins'
					render={() => (
						<FormItem>
							<FormLabel>Игроки</FormLabel>
							<FormControl>
								<MultipleSelector
									value={players}
									onChange={setPlayers}
									options={playersOptions}
									placeholder='Укажите игроков...'
									// className={players.length > 0 ? 'placeholder:text-transparent' : ''}
									hidePlaceholderWhenSelected
									emptyIndicator={
										<p className='translate-y-2 text-center leading-10 text-muted-foreground'>
											Игроков не найдено
										</p>
									}
								/>
							</FormControl>
							<FormDescription>Игроки, которые будут участвовать в игре</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='chips_buy_in'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Бай-ин стек</FormLabel>
							<FormControl>
								<Input placeholder='Укажите число фишек' {...field} />
							</FormControl>
							<FormDescription>Количество фишек, пополняемое при закупке</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='money_buy_in'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Цена бай-ина</FormLabel>
							<FormControl>
								<Input placeholder='Укажите стоимость закупки' {...field} />
							</FormControl>
							<FormDescription>Стоимость закупки</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button className='ml-auto block' disabled={isPending} type='submit'>
					{isPending ? (
						<div className='flex flex-row items-center'>
							<Loader2 className='mr-2 h-4 w-4 animate-spin' />
							<span>Создание...</span>
						</div>
					) : (
						'Создать'
					)}
				</Button>
			</form>
		</Form>
	);
};

export default CreateGameForm;
