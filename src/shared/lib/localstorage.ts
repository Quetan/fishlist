function getStoredUser(key: string) {
	return localStorage.getItem(key);
}

function setStoredUser(key: string, admin: string | null) {
	if (admin) {
		localStorage.setItem(key, admin);
	} else {
		localStorage.removeItem(key);
	}
}

const accessTokenKey = 'access_token' as const;

function setStoredAccessToken(token: string) {
	return localStorage.setItem(accessTokenKey, token);
}

function removeStoredAccessToken() {
	return localStorage.removeItem(accessTokenKey);
}

export { getStoredUser, setStoredUser, setStoredAccessToken, removeStoredAccessToken };
