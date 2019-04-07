
const initialState={
	name:'swarup',
	password:'alisa'
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'USER_LOGIN':
			return action.payload;

		case 'USER_LOGOUT':
			return {};

		default:
			return state;
	}
};
