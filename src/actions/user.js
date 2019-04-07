export const userLogin = (username, password) => (dispatch) => {
	dispatch({
		type: 'USER_LOGIN',
		payload: {
			username,
			password
		}
	});
};

export const userLogOut = () => (dispatch) => {
	dispatch({
		type: 'USER_LOGOUT',
		payload: {}
	});
};
