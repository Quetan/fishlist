import { CreateGameForm } from '@/features/create-game';
import { Title } from '@/shared/components/ui/title';
import type { FC } from 'react';

const CreateGamePage: FC = () => (
	<>
		<Title title='Создать игру' size='lg' className='mb-6' backButton />
		<CreateGameForm />
	</>
);

export default CreateGamePage;
