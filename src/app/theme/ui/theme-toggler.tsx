import { Button } from '@/shared/components/ui/button';
import { useTheme } from '../provider/theme-provider';
import type { FC } from 'react';
import { Sun } from 'lucide-react';

interface IProps {
	className: string;
}

const ThemeToggler: FC<IProps> = ({ className }) => {
	const { setTheme, theme } = useTheme();
	return (
		<Button
			className={className}
			variant='ghost'
			size='icon'
			onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
			<Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-[360deg]' />
			<span className='sr-only'>Сменить тему</span>
		</Button>
	);
};

export default ThemeToggler;
