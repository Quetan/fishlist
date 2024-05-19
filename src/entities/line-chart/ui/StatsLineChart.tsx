import type { FC } from 'react';
import type { IStats } from '../types';

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { rublesFormat } from '@/shared/lib/utils';

interface IProps {
	stats: IStats;
}

const chartData = (stats: number[]) => stats.map(item => ({ value: item }));

const StatsLineChart: FC<IProps> = ({ stats }) => {
	const data = chartData(stats.game_results);
	return (
		<ResponsiveContainer className={'mx-auto w-full'} minWidth={200} minHeight={250}>
			<BarChart data={data}>
				<Bar
					dataKey='value'
					style={
						{
							fill: 'hsl(var(--primary))',
							opacity: 0.9
						} as React.CSSProperties
					}
					label='Результат'
				/>
				<XAxis label='Игры' tick={false} />
				<YAxis
					style={{
						fontSize: '10px'
					}}
					padding={{
						top: 20
					}}
					tickFormatter={value => rublesFormat(Number.parseInt(value as string, 10))}
				/>
				<Tooltip
					label='Резульат'
					labelFormatter={value => `Игра ${value + 1}`}
					labelStyle={{
						color: 'hsl(var(--primary))'
					}}
					cursor={{ fill: 'hsl(var(--muted-foreground))', opacity: 0.1 }}
					formatter={value => [rublesFormat(Number.parseInt(value as string, 10)), 'Результат']}
				/>
			</BarChart>
		</ResponsiveContainer>
	);
};

export default StatsLineChart;
