import type { FC } from 'react';
import FormSchema from '../types/FormSchema';
import type { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/shared/components/ui/form';
import { Input } from '@/shared/components/ui/input';
import { Button } from '@/shared/components/ui/button';
import { Link, redirect, useRouter } from '@tanstack/react-router';
import { useAuthAdmin } from '../api';
import { toast } from '@/shared/components/ui/use-toast';
import { useAuth } from '@/app/auth';
import { setStoredAccessToken } from '@/shared/lib/localstorage';

interface IProps {
	disabled: boolean;
	redirectUrl: string;
}

const LoginAdminForm: FC<IProps> = ({ disabled, redirectUrl }) => {
	const router = useRouter();
	const { mutate, isPending } = useAuthAdmin();
	const auth = useAuth();
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			login: '',
			password: ''
		}
	});

	const onSubmit = async (data: z.infer<typeof FormSchema>) => {
		mutate(data, {
			onSuccess: response => {
				const adminJSON = JSON.stringify(response.data.admin) as string;
				setStoredAccessToken(response.data.token);
				toast({
					title: 'Авторизация прошла успешно!',
					variant: 'default',
					duration: 3000
				});
				auth.login(null, adminJSON);
				router.invalidate().finally(() => redirect({ to: redirectUrl }));
			},
			onError: () => {
				toast({
					title: 'Произошла ошибка при попытке авторизации!',
					variant: 'destructive',
					description: (
						<pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
							<code className='text-white'>{JSON.stringify(data, null, 2)}</code>
						</pre>
					)
				});
			}
		});
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='w-[300px] space-y-6'>
				<FormField
					control={form.control}
					name='login'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Логин</FormLabel>
							<FormMessage className='mb-1 mt-0 text-xs' />
							<FormControl>
								<Input
									disabled={disabled || isPending}
									className='bg-foreground text-muted'
									placeholder='Введите ваш логин'
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Пароль</FormLabel>
							<FormMessage className='mb-1 mt-0 text-xs' />
							<FormControl>
								<Input
									type='password'
									disabled={disabled || isPending}
									className='bg-foreground text-muted'
									placeholder='Введите ваш пароль'
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<div className='flex flex-col gap-2'>
					<Button className='w-full' type='submit' disabled={disabled || isPending}>
						Авторизоваться
					</Button>
					<Button className='w-full' variant='secondary' asChild>
						<Link to='/'>Назад</Link>
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default LoginAdminForm;
