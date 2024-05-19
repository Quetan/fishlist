import type { FC, PropsWithChildren } from 'react';

const GamesListWrapper: FC<PropsWithChildren> = ({ children }) => (
	<div className='my-4 flex flex-col'>{children}</div>
);

export default GamesListWrapper;
