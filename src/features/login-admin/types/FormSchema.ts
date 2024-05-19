import { z } from 'zod';

const FormSchema = z.object({
	login: z.string().min(3, {
		message: 'Имя пользователя должно содержать хотя бы 3 символа.'
	}),
	password: z.string().min(3, {
		message: 'Пароль должен содержать хотя бы 3 символа.'
	})
});

export default FormSchema;
