import axios from 'axios';

// 192.168.1.104 ////////// 10.0.10.2

const api = axios.create({
	baseURL: 'http://192.168.100.213:1323',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
});

api.interceptors.request.use(
	config => {
		const at = localStorage.getItem('access_token');
		if (at) {
			config.headers['Authorization'] = `BEARER ${at}`;
		}
		return config;
	},
	error => Promise.reject(error)
);

export { api };
