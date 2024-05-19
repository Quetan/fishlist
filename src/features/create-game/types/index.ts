interface ICreateGameRequest {
	name: string;
	host_login: string;
	player_logins: string;
	password: string;
	chips_buy_in: number;
	money_buy_in: number;
}

export type { ICreateGameRequest };
