import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const rublesFormat = (value: number, options?: Intl.NumberFormatOptions) =>
	new Intl.NumberFormat(
		'ru-RU',
		options ?? {
			style: 'currency',
			currency: 'RUB',
			compactDisplay: 'short',
			currencyDisplay: 'symbol',
			maximumFractionDigits: 0
		}
	).format(value);

export async function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
