import type { FC, PropsWithChildren } from 'react';

const PageWrapper: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className='container min-h-dvh pb-[--bottom-navigation-height] pt-[--top-navigation-height]'>
			{children}
		</div>
	);
};

export default PageWrapper;
