import Achievements from './achievements';
import Chips from './chips';
import History from './history';
import Logo from './logo';
import Theme from './theme';
import User from './user';
import Exit from './exit';
import Settings from './settings';
import Chip from './chip';
import Statistics from './statistics';
import Looser from './looser';

import RichMan from './achievements/rich-man';
import Winner from './achievements/winner';
import Shark from './achievements/shark';
import Donater from './achievements/donater';
import Cleric from './achievements/cleric';
import Philantropist from './achievements/philantropist';
import { SVGProps } from 'react';

interface IAchievementIconProps extends SVGProps<SVGSVGElement> {
	color: string;
}

export {
	Achievements,
	Chips,
	History,
	Logo,
	Theme,
	User,
	Exit,
	Settings,
	Chip,
	Statistics,
	Looser,
	RichMan,
	Winner,
	Shark,
	Donater,
	Cleric,
	Philantropist
};
export type { IAchievementIconProps };
