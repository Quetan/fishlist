import { useEffect, useState } from 'react';

interface IBeforeInstallPromptEvent extends Event {
	readonly platforms: string[];
	readonly userChoice: Promise<{
		outcome: 'accepted' | 'dismissed';
		platform: string;
	}>;
	prompt(): Promise<void>;
}

export function useAddToHomescreenPrompt(): [IBeforeInstallPromptEvent | null, () => void] {
	const [prompt, setState] = useState<IBeforeInstallPromptEvent | null>(null);

	const promptToInstall = () => {
		if (prompt) {
			return prompt.prompt();
		}
	};

	useEffect(() => {
		const ready = (e: IBeforeInstallPromptEvent) => {
			e.preventDefault();
			setState(e);
		};

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		window.addEventListener('beforeinstallprompt', ready as any);

		return () => {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			window.removeEventListener('beforeinstallprompt', ready as any);
		};
	}, []);

	return [prompt, promptToInstall];
}
