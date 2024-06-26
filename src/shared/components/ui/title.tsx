import { cn } from '@/shared/lib/utils';
import type { FC } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { Back } from './back';

const TitleVariants = cva('flex flex-row items-center gap-4', {
	variants: {
		variant: {
			default: 'text-foreground',
			primary: 'text-primary'
		},
		size: {
			default: 'text-xl font-semibold',
			sm: 'text-lg font-medium',
			lg: 'text-2xl font-bold tracking-wide',
			xs: 'text-base font-medium'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
});

interface ITitleProps
	extends React.HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof TitleVariants> {
	title: string;
	backButton?: boolean;
}

const Title: FC<ITitleProps> = ({ title, backButton, variant, size, className, ...props }) => {
	return (
		<h1 className={cn(TitleVariants({ variant, size, className }))} {...props}>
			{backButton && <Back />}
			{title}
		</h1>
	);
};

export { Title, TitleVariants };
export type { ITitleProps };
