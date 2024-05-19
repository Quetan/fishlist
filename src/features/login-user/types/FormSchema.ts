import { z } from 'zod';

const FormSchema = z.object({
	login: z.string().min(4, {
		message: 'Имя пользователя должно содержать хотя бы 4 символов.'
	})
});

export default FormSchema;
