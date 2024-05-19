import { z } from 'zod';

const formSchema = z.object({
	name: z.string().min(2, {
		message: 'Название игры должно содержать хотя бы 2 символа.'
	}),
	host_login: z.string(),
	player_logins: z.string(),
	password: z.string().min(3, {
		message: 'Пароль должен содержать хотя бы 3 символа.'
	}),
	chips_buy_in: z.preprocess(
		a => parseInt(z.string().parse(a), 10),
		z.number().gte(0, 'Бай-ин должен быть больше или равен нулю.')
	),
	money_buy_in: z.preprocess(
		a => parseInt(z.string().parse(a), 10),
		z.number().gte(0, 'Бай-ин должен быть больше или равен нулю.')
	)
});

export { formSchema };
